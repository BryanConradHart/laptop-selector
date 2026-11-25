// Compiles research/*.json -> site/data/laptops.js  (run: node build_data.js)
// Also validates every entry: all factors present, numeric 0-10, price, urls.
const fs = require("fs"), path = require("path");

const OEM_HOST = /(^|\.)apple\.com|(^|\.)lenovo\.com|(^|\.)dell\.com|(^|\.)hp\.com|(^|\.)microsoft\.com|(^|\.)asus\.com|(^|\.)rog\.asus\.com|(^|\.)acer\.com|(^|\.)msi\.com|(^|\.)razer\.com|(^|\.)gigabyte\.com|(^|\.)samsung\.com|(^|\.)lg\.com|frame\.work|steamdeck\.com|store\.steampowered\.com|(^|\.)mi\.com/;

const ROOT = __dirname;
const RESEARCH = path.join(ROOT, "research");
const OUT_DIR = path.join(ROOT, "site", "data");
fs.mkdirSync(OUT_DIR, { recursive: true });

const files = fs.readdirSync(RESEARCH).filter(f => f.endsWith(".json") && !f.startsWith("_"));
// merge loose part files: research/parts/<group>/*.json -> treat as their own pseudo-category source
const PARTS_DIR = path.join(RESEARCH, "parts");
const partGroups = fs.existsSync(PARTS_DIR) ? fs.readdirSync(PARTS_DIR).filter(d => fs.statSync(path.join(PARTS_DIR, d)).isDirectory()) : [];
const entries = [];
const problems = [];
const factorUnion = new Map(); // key -> count of entries having it

function addEntries(list, src) {
  for (const e of list) {
    e._source = src;
    if (!e.id) problems.push(`${src}: entry missing id (${e.config_name})`);
    if (!e.ratings) problems.push(`${src}/${e.id}: no ratings`);
    else for (const [k, v] of Object.entries(e.ratings)) {
      factorUnion.set(k, (factorUnion.get(k) || 0) + 1);
      if (typeof v !== "number" || v < 0 || v > 10) problems.push(`${src}/${e.id}: bad rating ${k}=${v}`);
    }
    // offers: [{store, url, cad, est?}] — actual store listings for this exact config.
    // Legacy shape (store_url/cad inside price) is folded into offers automatically.
    const p = e.price || {};
    // official_url must be the OEM's own page — never a third-party store.
    if (p.store_url && !p.official_url && OEM_HOST.test(p.store_url)) p.official_url = p.store_url;
    if (p.official_url && !OEM_HOST.test(p.official_url)) {
      problems.push(`${src}/${e.id}: official_url is not an OEM page (${p.official_url})`);
      delete p.official_url;
    }
    if (Array.isArray(p.offers) && p.offers.length) {
      for (const o of p.offers) {
        if (!o.url) problems.push(`${src}/${e.id}: offer missing url`);
        if (typeof o.cad !== "number") problems.push(`${src}/${e.id}: offer ${o.store} missing numeric cad`);
      }
      // official (OEM) store listings first; others by price ascending
      for (const o of p.offers) o.official = OEM_HOST.test(o.url || "");
      p.offers.sort((a, b) => (b.official ? 1 : 0) - (a.official ? 1 : 0) || a.cad - b.cad);
      // price.cad for ranking = lowest store price
      const min = Math.min(...p.offers.map(o => o.cad));
      if (p.cad !== min) p.cad = min;
      if (p.offers.every(o => o.est)) p.confidence = "estimated";
      else p.confidence = "verified";
    } else if (p.store_url && typeof p.cad === "number") {
      p.offers = [{ store: p.store || "Store", url: p.store_url, cad: p.cad, est: p.confidence === "estimated" }];
    } else {
      problems.push(`${src}/${e.id}: missing price (needs offers or store_url+cad)`);
    }
    entries.push(e);
  }
}

for (const f of files) {
  let data;
  try { data = JSON.parse(fs.readFileSync(path.join(RESEARCH, f), "utf8")); }
  catch (e) { problems.push(`${f}: INVALID JSON - ${e.message}`); continue; }
  addEntries(data.entries || [], f);
  console.log(`${f}: ${(data.entries || []).length} entries`);
}
for (const g of partGroups) {
  const dir = path.join(PARTS_DIR, g);
  const parts = fs.readdirSync(dir).filter(f => /^\d.*\.json$/.test(f)).sort();
  const list = [];
  for (const p of parts) {
    try { list.push(JSON.parse(fs.readFileSync(path.join(dir, p), "utf8"))); }
    catch (e) { problems.push(`parts/${g}/${p}: INVALID JSON - ${e.message}`); }
  }
  addEntries(list, `parts/${g}`);
  if (list.length) console.log(`parts/${g}: ${list.length} entries`);
}

// dedupe by id
const seen = new Set();
const unique = entries.filter(e => (seen.has(e.id) ? (problems.push(`dup id ${e.id}`), false) : seen.add(e.id)));

// Factor list: keys present in >=50% of entries (tolerates category-specific extras)
const threshold = Math.max(1, Math.floor(unique.length * 0.5));
const factorKeys = [...factorUnion.entries()].filter(([, n]) => n >= threshold).map(([k]) => k);

// every entry must carry a numeric rating for every factor key, otherwise the
// app scores the missing factor as 0 and silently penalizes the entry
for (const e of unique)
  for (const k of factorKeys)
    if (typeof (e.ratings || {})[k] !== "number")
      problems.push(`${e._source}/${e.id}: missing rating for factor "${k}"`);

if (problems.length) {
  console.log(`\n${problems.length} PROBLEMS — refusing to write site/data/laptops.js:`);
  problems.slice(0, 40).forEach(p => console.log(" - " + p));
  process.exit(1);
}

const data = { generated: new Date().toISOString(), factors: factorKeys.map(k => ({ key: k })), entries: unique };
fs.writeFileSync(path.join(OUT_DIR, "laptops.js"),
  "window.LAPTOP_DATA = " + JSON.stringify(data) + ";\n");

console.log(`\nTOTAL: ${unique.length} entries, ${factorKeys.length} factors -> site/data/laptops.js`);
console.log("factors:", factorKeys.join(", "));
console.log("validation: clean");
