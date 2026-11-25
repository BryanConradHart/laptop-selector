/* ============ Laptop Selector app ============
 * Data-driven: factor list is derived from the dataset itself
 * (data/laptops.js may define LAPTOP_DATA.factors = [{key,label,hint,default}]
 *  or we derive keys from the union of entry.ratings and use FALLBACK_META).
 * Adding / removing / renaming factors in the data requires no code change.
 */
(function () {
"use strict";

/* Fallback metadata used when the dataset doesn't ship explicit factor defs.
 * Keys that don't appear here simply get a prettified label and default 5. */
const FALLBACK_META = {
  battery:            { label: "Battery life",            hint: "How much battery life matters to you — higher boosts laptops that go longest between charges", def: 7 },
  screen_size:        { label: "Screen size",             hint: "How much screen size matters to you — higher boosts laptops with bigger displays", def: 5 },
  screen_quality:     { label: "Screen quality",          hint: "How much display quality matters to you — higher boosts laptops with nicer, more vivid panels", def: 6 },
  readability_dark:   { label: "Readability in the dark", hint: "How much comfort in dark rooms matters to you — higher boosts screens that dim low with little glare", def: 4 },
  readability_bright: { label: "Readability in bright light", hint: "How much outdoor and window-side use matters to you — higher boosts bright, anti-glare screens", def: 4 },
  ecosystem:          { label: "Ecosystem compatibility", hint: "How much the platform's software world matters to you — app breadth, drivers and peripherals, and phone/PC integration. Higher boosts platforms with the widest support (macOS, Windows); ARM and Chromebooks score lower for translation gaps and limited apps", def: 6 },
  gaming:             { label: "Gaming",                  hint: "How much playing games matters to you — higher boosts machines with real graphics power", def: 2 },
  productivity:       { label: "Productivity",            hint: "How much everyday work like office, coding and multitasking matters to you — higher boosts fast, capable work machines", def: 7 },
  portability:        { label: "Portability",             hint: "How much weight and bulk in your bag matters to you — higher boosts lighter, thinner laptops", def: 5 },
  build_quality:      { label: "Build quality",           hint: "How much a solid, well-made chassis matters to you — higher boosts premium, rigid builds", def: 5 },
  thermals_noise:     { label: "Thermals & noise",        hint: "How much heat and fan noise under load matters to you — higher boosts laptops that stay cool and quiet", def: 4 },
  port_connectivity:  { label: "Ports & connectivity",    hint: "How much plugging things in matters to you — higher boosts machines with more useful ports and easy docking", def: 4 },
  creative_work:      { label: "Creative work",           hint: "How much photo, video and 3D work matters to you — higher boosts strong displays paired with powerful graphics", def: 3 },
  keyboard_trackpad:  { label: "Keyboard & trackpad",     hint: "How much typing and pointing comfort matters to you — higher boosts great keyboards and trackpads", def: 5 },
  webcam_speakers:    { label: "Webcam & speakers",       hint: "How much calls and media without extras matters to you — higher boosts good cameras and speakers", def: 3 },
  upgradability:      { label: "Upgradability",           hint: "How much adding RAM or storage later matters to you — higher boosts machines you can open up and expand", def: 3 },
  ai_ml:              { label: "AI / ML capability",      hint: "How much running AI models locally matters to you — higher boosts big NPUs, GPU memory and unified memory", def: 2 },
  pen_touch:          { label: "Pen & touch",             hint: "How much stylus and touch input matters to you — higher boosts pen-friendly touchscreens", def: 0 },
  repairability_service: { label: "Repairability",        hint: "How much ease and cost of fixes matters to you — higher boosts repairable machines with good support", def: 2 },
  durability:         { label: "Durability",              hint: "How much long-term ruggedness and reliability matters to you — higher boosts tough, well-supported builds", def: 3 },
  docking:            { label: "Docking & security",      hint: "How much desk setups and business security matter to you — higher boosts Thunderbolt docks, fingerprint/IR login and managed-security features", def: 2 },
  stylus:             { label: "Stylus support",          hint: "How much drawing and note-taking with a pen matters to you — higher boosts low-latency, natural stylus support", def: 0 },
};
const PRETTY = k => k.split("_").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");

/* Each preset fully specifies all 20 factors (no accidental zeros).
 * Keys must match dataset factor keys; `price` = budget slider. */
const PRESETS = {
  "🎓 Student": {
    battery: 9, portability: 9, price: 9, productivity: 7, build_quality: 5, keyboard_trackpad: 6,
    screen_size: 4, screen_quality: 5, readability_dark: 4, readability_bright: 6, ecosystem: 5,
    gaming: 2, thermals_noise: 5, port_connectivity: 4, creative_work: 3, webcam_speakers: 6,
    upgradability: 3, ai_ml: 2, pen_touch: 0, repairability_service: 4, durability: 6,
  },
  "🎮 Gamer": {
    gaming: 10, thermals_noise: 8, screen_quality: 8, screen_size: 7, port_connectivity: 6,
    battery: 2, portability: 2, price: 5, productivity: 5, build_quality: 5, keyboard_trackpad: 6,
    readability_dark: 5, readability_bright: 4, ecosystem: 6, creative_work: 6, webcam_speakers: 3,
    upgradability: 6, ai_ml: 6, pen_touch: 0, repairability_service: 4, durability: 5,
  },
  "🎬 Creator": {
    creative_work: 10, screen_quality: 10, screen_size: 7, productivity: 8, ai_ml: 7,
    ecosystem: 6, thermals_noise: 6, port_connectivity: 6, keyboard_trackpad: 6, build_quality: 6,
    battery: 4, portability: 4, price: 4, readability_dark: 6, readability_bright: 6,
    gaming: 4, webcam_speakers: 5, upgradability: 3, pen_touch: 2, repairability_service: 3, durability: 5,
  },
  "💼 Business travel": {
    battery: 9, portability: 9, build_quality: 8, keyboard_trackpad: 8, webcam_speakers: 7,
    durability: 7, repairability_service: 6, productivity: 8, ecosystem: 6, screen_size: 4,
    screen_quality: 6, readability_dark: 5, readability_bright: 7, price: 4, gaming: 1,
    thermals_noise: 6, port_connectivity: 7, creative_work: 4, upgradability: 3, ai_ml: 3,
    pen_touch: 0,
  },
  "🏠 Desktop replacement": {
    screen_size: 9, productivity: 9, port_connectivity: 8, screen_quality: 7, keyboard_trackpad: 7,
    thermals_noise: 6, gaming: 5, upgradability: 6, price: 5, creative_work: 6, ecosystem: 6,
    battery: 2, portability: 1, build_quality: 5, readability_dark: 5, readability_bright: 5,
    webcam_speakers: 4, ai_ml: 4, pen_touch: 0, repairability_service: 5, durability: 5,
  },
  "✍️ Artist / note-taker": {
    pen_touch: 10, screen_quality: 9, readability_bright: 7, screen_size: 5, portability: 7,
    battery: 7, ecosystem: 6, build_quality: 6, keyboard_trackpad: 5, webcam_speakers: 4,
    productivity: 5, creative_work: 7, price: 5, gaming: 1, thermals_noise: 4,
    port_connectivity: 4, upgradability: 2, ai_ml: 3, readability_dark: 6, repairability_service: 3, durability: 5,
  },
  "💸 Tight budget": {
    price: 10, durability: 7, repairability_service: 7, upgradability: 6, battery: 6,
    productivity: 6, build_quality: 5, keyboard_trackpad: 4, screen_quality: 4, screen_size: 4,
    ecosystem: 5, gaming: 2, portability: 5, thermals_noise: 4, port_connectivity: 4,
    creative_work: 2, webcam_speakers: 3, ai_ml: 2, pen_touch: 0, readability_dark: 3, readability_bright: 4,
  },
};

const PRICE_FACTOR = { key: "price", label: "Budget", hint: "How much cheapness matters — high values strongly penalize expensive machines", def: 6 };
/* Budget gets an extra weight boost that ramps in with the slider: at 0 it acts
 * like any other factor; at 10 it counts ~3x a maxed factor, enough for price
 * to genuinely re-rank without silencing every other preference. */
const PRICE_MAX_BOOST = 3;

const DEFAULT_PRESET = "🎓 Student";

const state = { weights: {}, openCards: new Set(), activePreset: DEFAULT_PRESET, filters: { os: new Set(), ff: new Set(), arch: new Set() } };
let ENTRIES = [], FACTORS = [], priceLo = 500, priceHi = 5000;

/* ---------- data load ---------- */
function loadData() {
  const raw = (typeof window.LAPTOP_DATA !== "undefined") ? window.LAPTOP_DATA : { entries: [] };
  ENTRIES = Array.isArray(raw) ? raw : (raw.entries || []);
  if (Array.isArray(raw.factors) && raw.factors.length) {
    FACTORS = raw.factors.map(f => ({ key: f.key, label: f.label || PRETTY(f.key), hint: f.hint || FALLBACK_META[f.key]?.hint || "", def: f.default ?? FALLBACK_META[f.key]?.def ?? 5 }));
  } else {
    const keys = [];
    for (const e of ENTRIES) for (const k of Object.keys(e.ratings || {})) if (!keys.includes(k)) keys.push(k);
    FACTORS = keys.map(k => ({ key: k, label: FALLBACK_META[k]?.label || PRETTY(k), hint: FALLBACK_META[k]?.hint || "", def: FALLBACK_META[k]?.def ?? 5 }));
  }
  FACTORS.forEach(f => { state.weights[f.key] = DEFAULT_PRESET === "" ? f.def : (PRESETS[DEFAULT_PRESET][f.key] ?? f.def); });
  // Price is a *derived* positive factor: rating = how cheap the config is
  // relative to the dataset (log-scaled). Its slider says how much cheapness matters.
  FACTORS.push({ ...PRICE_FACTOR });
  state.weights.price = PRICE_FACTOR.def;
  const prices = ENTRIES.map(e => e.price?.cad).filter(p => typeof p === "number" && p > 0);
  if (prices.length) {
    prices.sort((a, b) => a - b);
    const pct = f => prices[Math.round(f * (prices.length - 1))];
    priceLo = pct(0.05); priceHi = pct(0.95); // anchor ratings to the realistic price band
  }
}

/* 0..10 where 10 = cheapest. Anchored to the dataset's 5th-95th percentile
 * price band (log scale) so mid-range differences stay visible. */
function priceRating(e) {
  const p = e.price?.cad;
  if (typeof p !== "number" || p <= 0) return 5;
  if (priceHi <= priceLo) return 5;
  const r = (Math.log(priceHi) - Math.log(p)) / (Math.log(priceHi) - Math.log(priceLo));
  return clamp(r * 10, 0, 10);
}

/* ---------- scoring ---------- */
/* score = weighted mean of factor ratings. Weight contributions are shaped
 * quadratically (w²/10): a slider at 10 counts 10× what it would at ~3.2, so
 * maxing any factor genuinely dominates the ranking, while low settings stay
 * proportional. Budget gets an extra boost on top. Price enters as a derived
 * positive factor (cheaper = higher rating). Nothing is ever excluded —
 * importance only shifts ranking. */
function effWeight(key) {
  const w = state.weights[key] || 0;
  const shaped = (w * w) / 10; // 0..10, quadratic shaping
  return key === "price" ? shaped * (1 + (w / 10) * (PRICE_MAX_BOOST - 1)) : shaped;
}

function scoreEntry(e) {
  let wsum = 0, acc = 0;
  const parts = {};
  for (const f of FACTORS) {
    const w = effWeight(f.key);
    const r = f.key === "price" ? priceRating(e)
      : clamp((e.ratings && e.ratings[f.key]) || 0, 0, 10);
    const pts = (r / 10) * w * 10;
    parts[f.key] = { pts, rating: r, weight: state.weights[f.key] || 0 };
    acc += pts; wsum += w;
  }
  const base = wsum > 0 ? (acc / wsum) : 0;
  return { score: base, base, penalty: 0, parts };
}
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

function rank() {
  const pool = ENTRIES.filter(e => passesFilters(e));
  return pool.map(e => ({ e, ...scoreEntry(e) })).sort((a, b) => b.score - a.score);
}

/* ---------- facet filters (OS / form factor / CPU architecture) ----------
 * Values are derived from the dataset itself; a group with nothing selected
 * means "all". Chips show live counts within the *other* filters' results. */
const OS_LABELS = { "Windows": "Windows", "Windows (ARM)": "Windows", "macOS": "macOS", "iPadOS": "iPadOS", "Android": "Android", "ChromeOS": "ChromeOS", "SteamOS": "SteamOS" };
function entryOS(e) { return OS_LABELS[e.ecosystem] || null; }
const FF_LABELS = { clamshell: "Laptop", convertible: "2-in-1", "2-in-1": "2-in-1", tablet: "Tablet", handheld: "Handheld" };
function entryFF(e) { return FF_LABELS[e.form_factor] || null; }
function entryArch(e) {
  const cpu = String(e.specs?.cpu || "");
  if (/apple\s+(m\d|a\d)/i.test(cpu) || /snapdragon/i.test(cpu) || /dimensity|kompanio/i.test(cpu) || /exynos/i.test(cpu) || /arm soC/i.test(cpu)) return "ARM";
  if (/intel|amd|ryzen|core/i.test(cpu)) return "x86";
  return null;
}
const FILTER_DEFS = [
  { key: "os", el: "fOs", fn: entryOS },
  { key: "ff", el: "fFf", fn: entryFF },
  { key: "arch", el: "fArch", fn: entryArch },
];
function passesFilters(e, exceptKey) {
  for (const d of FILTER_DEFS) {
    if (d.key === exceptKey) continue;
    const sel = state.filters[d.key];
    if (sel.size && !sel.has(d.fn(e))) return false;
  }
  return true;
}
function buildFilters() {
  for (const d of FILTER_DEFS) {
    const counts = {};
    for (const e of ENTRIES) {
      const v = d.fn(e);
      if (v && passesFilters(e, d.key)) counts[v] = (counts[v] || 0) + 1;
    }
    const vals = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
    document.getElementById(d.el).innerHTML = vals.map(v =>
      `<button class="chip-btn${state.filters[d.key].has(v) ? " on" : ""}" data-k="${d.key}" data-v="${esc(v)}">${esc(v)} <span>${counts[v]}</span></button>`).join("");
  }
  document.querySelectorAll(".chip-btn").forEach(b => b.addEventListener("click", () => {
    const set = state.filters[b.dataset.k];
    set.has(b.dataset.v) ? set.delete(b.dataset.v) : set.add(b.dataset.v);
    update();
  }));
}

/* ---------- formatting helpers ---------- */
const fmtCAD = n => n == null ? "—" : "$" + n.toLocaleString("en-CA");
const fmtW = kg => kg == null ? "—" : kg + " kg";
function storeLabel(u) {
  if (!u) return "Buy";
  if (u.includes("bestbuy")) return "Best Buy";
  if (u.includes("amazon")) return "Amazon";
  if (u.includes("lenovo")) return "Lenovo";
  if (u.includes("dell")) return "Dell";
  if (u.includes("hp.")) return "HP";
  if (u.includes("apple")) return "Apple";
  if (u.includes("microsoft")) return "Microsoft";
  if (u.includes("asus")) return "ASUS";
  if (u.includes("staples")) return "Staples";
  if (u.includes("canadacomputers")) return "Canada Computers";
  if (u.includes("costco")) return "Costco";
  if (u.includes("visions.ca") || u.includes("visionselectronics")) return "Visions";
  if (u.includes("memoryexpress")) return "Memory Express";
  if (u.includes("shopRBC") || u.includes("shoprbc")) return "Best Direct";
  if (u.includes("mi.com") || u.includes("xiaomi")) return "Xiaomi";
  if (u.includes("acer")) return "Acer";
  if (u.includes("msi.com")) return "MSI";
  if (u.includes("razer")) return "Razer";
  if (u.includes("steamdeck") || u.includes("steampowered")) return "Steam";
  if (u.includes("frame.work")) return "Framework";
  if (u.includes("samsung")) return "Samsung";
  if (u.includes("lg.com")) return "LG";
  if (u.includes("lenovo")) return "Lenovo";
  return "Store";
}
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------- slider UI ---------- */
function buildSliders() {
  const box = document.getElementById("sliders");
  const sliderFactors = FACTORS.filter(f => f.key !== "price"); // budget slider lives in its own card
  box.innerHTML = sliderFactors.map(f => `
    <div class="slider-row">
      <label for="w-${f.key}">${esc(f.label)}<button type="button" class="info" data-tip="${esc(f.hint)}"
              aria-label="About ${esc(f.label)}">?</button></label>
      <input type="range" id="w-${f.key}" min="0" max="10" step="0.1" value="${state.weights[f.key]}"
             aria-label="${esc(f.label)} importance">
    </div>`).join("");
  sliderFactors.forEach(f => {
    const el = document.getElementById("w-" + f.key);
    el.addEventListener("input", () => { state.weights[f.key] = +el.value; state.activePreset = null; paintSlider(f.key); paintPresetBtns(); scheduleUpdate(); });
    paintSlider(f.key);
  });
  const ps = document.getElementById("priceSlider");
  ps.addEventListener("input", () => { state.weights.price = +ps.value; state.activePreset = null; paintSlider("price"); paintPresetBtns(); scheduleUpdate(); });
  paintSlider("price");

  document.getElementById("presetBtns").innerHTML =
    Object.keys(PRESETS).map(p => `<button data-preset="${esc(p)}">${esc(p)}</button>`).join("");
  document.querySelectorAll("#presetBtns button").forEach(b =>
    b.addEventListener("click", () => applyPreset(PRESETS[b.dataset.preset], false, b.dataset.preset)));
  document.getElementById("resetBtn").addEventListener("click", () => applyPreset(PRESETS[DEFAULT_PRESET], false, DEFAULT_PRESET));
  paintPresetBtns();
}
function paintPresetBtns() {
  document.querySelectorAll("#presetBtns button").forEach(b =>
    b.classList.toggle("active", b.dataset.preset === state.activePreset));
}

/* ---------- shared tooltip for the ? icons ----------
 * A single fixed-position element (the sidebar clips overflow, so a
 * CSS child tooltip would be cut off). Shows on hover and keyboard focus. */
const tipEl = document.createElement("div");
tipEl.className = "tip";
tipEl.setAttribute("role", "tooltip");
document.body.appendChild(tipEl);
let tipTimer = null;
function showTip(icon) {
  tipEl.textContent = icon.dataset.tip;
  tipEl.style.display = "block";
  const r = icon.getBoundingClientRect();
  const tw = tipEl.offsetWidth, th = tipEl.offsetHeight;
  let left = r.right + 10;
  if (left + tw > window.innerWidth - 8) left = Math.max(8, r.left - tw - 10);
  let top = r.top - 6;
  if (top + th > window.innerHeight - 8) top = window.innerHeight - th - 8;
  tipEl.style.left = left + "px";
  tipEl.style.top = Math.max(8, top) + "px";
  tipEl.classList.add("show");
}
function hideTip() { tipEl.classList.remove("show"); tipTimer = setTimeout(() => { tipEl.style.display = "none"; }, 150); }
document.addEventListener("mouseover", e => {
  const icon = e.target.closest(".info");
  if (!icon) return;
  clearTimeout(tipTimer); showTip(icon);
});
document.addEventListener("mouseout", e => { if (e.target.closest(".info")) hideTip(); });
document.addEventListener("focusin", e => { if (e.target.classList.contains("info")) { clearTimeout(tipTimer); showTip(e.target); } });
document.addEventListener("focusout", e => { if (e.target.classList.contains("info")) hideTip(); });
function paintSlider(k) {
  const el = k === "price" ? document.getElementById("priceSlider") : document.getElementById("w-" + k);
  el.style.setProperty("--fill", (state.weights[k] * 10) + "%");
}
function applyPreset(p, zeroOthers, name) {
  state.activePreset = name ?? null;
  FACTORS.forEach(f => { state.weights[f.key] = p[f.key] ?? (zeroOthers ? f.def : 0); });
  FACTORS.forEach(f => {
    const el = f.key === "price" ? document.getElementById("priceSlider") : document.getElementById("w-" + f.key);
    el.value = state.weights[f.key]; paintSlider(f.key);
  });
  paintPresetBtns();
  update();
}

/* ---------- card rendering with FLIP-style transitions ---------- */
let rafPending = false;
function scheduleUpdate() { if (!rafPending) { rafPending = true; requestAnimationFrame(() => { rafPending = false; update(); }); } }

function update() {
  const ranked = rank();
  buildFilters();
  const top = ranked.slice(0, 5);
  const container = document.getElementById("cards");
  document.getElementById("resultsMeta").textContent =
    `${ranked.length} of ${ENTRIES.length} configurations scored · ${FACTORS.filter(f => f.key !== "price").length} factors + budget`;

  // FLIP: record old positions by entry id
  const old = {};
  for (const el of container.children) old[el.dataset.id] = el.getBoundingClientRect();

  const html = top.length
    ? top.map((r, i) => cardHTML(r, i)).join("")
    : `<p class="no-results">No configurations match the selected filters — try clearing one.</p>`;
  container.innerHTML = html;

  // FLIP: play from old -> new
  for (const el of container.children) {
    const o = old[el.dataset.id];
    const n = el.getBoundingClientRect();
    if (o) {
      const dx = o.left - n.left, dy = o.top - n.top;
      if (Math.abs(dy) > 2 || Math.abs(dx) > 2) {
        el.style.transform = `translate(${dx}px, ${dy}px)`;
        el.style.transition = "none";
        requestAnimationFrame(() => {
          el.style.transition = "transform .45s cubic-bezier(.22,1,.36,1)";
          el.style.transform = "";
        });
      }
    } else el.classList.add("rank-up");
  }
  wireCards();
}

/* ---------- priority-aware pros/cons ----------
 * Each praise/complaint is matched to the factors its text touches, then
 * ranked by how heavily the user currently weights those factors — so the
 * listed pros/cons track the user's priorities (battery talk rises when
 * battery matters, port gripes rise when ports matter, etc.). */
const SENTIMENT_KEYS = {
  battery:            ["battery", "all-day", "runtime", "hours", "charger", "usb-c charg"],
  screen_quality:     ["oled", "display", "screen", "panel", "colour", "color", "hdr", "resolution", "4k", "2.8k", "nits", "notch", "promotion"],
  readability_bright: ["outdoor", "glare", "reflect", "bright light", "anti-reflect"],
  readability_dark:   ["dim ", "glare", "backlight"],
  screen_size:        ["13-inch", "14-inch", "16-inch", "17-inch", "18-inch", "13.6", "14\"", "16\"", "18\"", "7-inch", "8.3"],
  ecosystem:          ["macos", "windows", "app", "iphone", "imessage", "android", "chrome", "ecosystem", "anti-cheat", "win32", "driver", "ipados", "arm", "snapdragon", "proton", "steamos"],
  gaming:             ["game", "fps", "gaming", "dlss", "rtx", "ray tracing", "cyberpunk", "frame rate", "esports", "valorant"],
  productivity:       ["multitask", "office", "coding", "productivity", "performance", "workflow", "vs code", "vscode", "dev"],
  portability:        ["kg", "thin", "weight", "light", "pocket", "backpack", "portab", "gram"],
  build_quality:      ["chassis", "build", "hinge", "rigid", "aluminum", "aluminium", "cnc", "fit & finish", "fit and finish", "carbon"],
  thermals_noise:     ["fan", "throttl", "heat", "hot", "quiet", "silent", "noise", "thermal", "cool", "vapor"],
  port_connectivity:  ["port", "thunderbolt", "usb", "hdmi", "magsafe", "sd card", "dongle"],
  creative_work:      ["video", "photo", "edit", "3d", "render", "creator", "export", "procreate", "davinci", "premiere", "gpu"],
  keyboard_trackpad:  ["keyboard", "trackpad", "typing", "key travel", "key layout"],
  webcam_speakers:    ["webcam", "camera", "speaker", "microphone", "video call", "call"],
  upgradability:      ["soldered", "upgrade", "sodimm", "swappable", "ram slot", "ssd slot", "second slot", "upgrade path"],
  ai_ml:              ["npu", "copilot", "apple intelligence", "local llm", "ai feature", "ml "],
  pen_touch:          ["pen", "stylus", "pencil", "touch"],
  repairability_service: ["warranty", "repair", "parts", "self-service", "space frame"],
  durability:         ["rugged", "durab", "mil-spec", "spill", "reliab"],
  docking:            ["dock", "vpro", "tpm", "fingerprint", "ir camera", "management"],
  price:              ["price", "cost", "deal", "discount", "expensive", "cheap", "value", "afford", "worth", "pricing"],
};
function sentimentRelevance(text) {
  const t = " " + String(text).toLowerCase() + " ";
  let score = 0;
  for (const f of FACTORS) {
    const w = effWeight(f.key);
    if (!w) continue;
    const keys = SENTIMENT_KEYS[f.key];
    if (!keys) continue;
    for (const k of keys) {
      if (k.startsWith(" ") || k.endsWith(" ")) { if (t.includes(k)) score += w; }
      else { const re = new RegExp("\\b" + k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b"); if (re.test(t)) score += w; }
    }
  }
  return score;
}
function pickSentiment(e, kind, n) {
  const list = (e.user_sentiment?.[kind] || []).map((text, i) => ({ text, i, s: sentimentRelevance(text) }));
  if (!list.length) return [];
  const scored = list.some(x => x.s > 0);
  const order = scored ? [...list].sort((a, b) => b.s - a.s || a.i - b.i) : list;
  return order.slice(0, n).map(x => x.text);
}

function cardHTML(r, i) {
  const e = r.e, s = Math.max(0, r.score).toFixed(1);
  const praises = pickSentiment(e, "praises", 3);
  const complaints = pickSentiment(e, "complaints", 2);
  const sp = e.specs || {};
  const open = state.openCards.has(e.id);
  return `
  <article class="card${open ? " open" : ""}" data-id="${esc(e.id)}">
    <div class="rank-badge r${i + 1}">#${i + 1}</div>
    <div class="card-img" data-details title="View full details">${imgHTML(e)}<span class="img-zoom">View full details</span></div>
    <div class="card-body">
      <div class="card-top">
        <div>
          <h3 data-details title="View full details">${esc(e.config_name)}</h3>
          <div class="tierline">
            <span class="chip">${esc(e.tier || "")}</span>
            <span class="chip eco">${esc(e.ecosystem || "")}</span>
            <span class="chip">${esc(e.form_factor || "")}</span>
            ${sp.refresh_hz >= 120 ? `<span class="chip">${sp.refresh_hz}Hz</span>` : ""}
          </div>
        </div>
        <div class="score-wrap"><div class="score-big">${s}</div><div class="score-lbl">match</div></div>
      </div>
      <div class="matchbar"><i style="width:${clamp(r.score * 10, 0, 100)}%"></i></div>
      <div class="price-line">
        <span class="price${e.price?.confidence === "estimated" ? " est" : ""}">${(e.price?.offers || []).length > 1 ? "from " : ""}${fmtCAD(e.price?.cad)}</span>
      </div>
      <div class="specs-row">
        <span><b>${esc(shortCpu(sp.cpu))}</b></span>
        <span>${esc(sp.gpu || "")}</span>
        <span><b>${sp.ram_gb}GB</b> RAM</span>
        <span><b>${fmtStorage(sp.storage_gb)}</b></span>
        <span><b>${sp.screen_size_in}"</b> ${esc(sp.display_type || "")}</span>
        <span>${sp.brightness_sdr_nits ? sp.brightness_sdr_nits + " nits" : ""}</span>
        <span><b>${fmtW(sp.weight_kg)}</b></span>
        <span>${e.battery?.real_world_hours ? "<b>" + e.battery.real_world_hours + "h</b> real battery" : ""}</span>
      </div>
      <div class="highlights">
        ${praises.map(p => `<span class="hl good">${esc(p)}</span>`).join("")}
        ${complaints.map(c => `<span class="hl bad">${esc(c)}</span>`).join("")}
      </div>
      <div class="card-actions">
        ${(() => { const offs = (e.price?.offers || []).slice(0, 3); const prod = e.price?.official_url || null; return (prod ? `<a class="btn-prod" href="${esc(prod)}" target="_blank" rel="noopener" title="Official product page"><span class="prod-ic">📄</span>${storeLabel(prod)} product page</a>` : "") + offs.map(o => `<a class="btn-store${o.official ? " official" : ""}" href="${esc(o.url)}" target="_blank" rel="noopener">${o.official ? '<span class="shield">★</span>' : ""}${storeLabel(o.url)}${o.official ? " store" : ""} → ${fmtCAD(o.cad)}${o.est ? " est." : ""}</a>`).join(""); })()}
        <button class="btn-details" data-details>Details</button>
        <button class="btn-detail">${open ? "Hide match breakdown ▲" : "Why this rank? ▼"}</button>
      </div>
      <div class="breakdown">${breakdownHTML(r)}</div>
    </div>
  </article>`;
}

function breakdownHTML(r) {
  const rows = FACTORS
    .map(f => ({ f, p: r.parts[f.key] }))
    .sort((a, b) => b.p.pts - a.p.pts);
  const total = rows.reduce((s, { p }) => s + p.pts, 0);
  return `<div class="bd-title">Match ${r.base.toFixed(1)}/10 — <span class="bd-legend">bar = how this laptop scores on each factor, × = how much you weighted it, % = share of the match</span></div>` +
    rows.map(({ f, p }) => {
      const zero = p.weight === 0;
      const eff = effWeight(f.key);
      const pct = total > 0 && p.pts > 0 ? Math.round((p.pts / total) * 100) : 0;
      return `<div class="bd-row${zero ? " zero" : ""}" title="${esc(f.label)}: this laptop scores ${p.rating.toFixed(1)}/10, you weighted it ${p.weight}/10, and it contributes ${pct}% of the match score">
        <span class="bd-name">${esc(f.label)} <em>×${Math.round(eff * 10) / 10}</em></span>
        <span class="bd-bar"><i style="width:${p.rating * 10}%"></i></span>
        <span class="bd-pts">${p.rating.toFixed(1)}/10<span class="bd-share">${pct}%</span></span>
      </div>`;
    }).join("");
}

function imgHTML(e) {
  const url = e.image_url || "";
  if (!url) return `<span class="img-fallback">💻</span>`;
  return `<img src="${esc(url)}" alt="${esc(e.config_name)}" loading="lazy"
    onerror="this.outerHTML='<span class=&quot;img-fallback&quot;>💻</span>'">`;
}
function shortCpu(cpu) {
  return String(cpu || "").replace(/\(.*?\)/g, "").trim().replace(/\s+/g, " ");
}
function fmtStorage(gb) {
  if (gb == null) return "—";
  return gb >= 1000 ? (gb / 1000).toFixed(gb % 1000 ? 1 : 0) + "TB" : gb + "GB";
}

function wireCards() {
  document.querySelectorAll(".card .btn-detail").forEach(btn =>
    btn.addEventListener("click", () => {
      const card = btn.closest(".card"), id = card.dataset.id;
      if (card.classList.toggle("open")) {
        state.openCards.add(id);
        btn.textContent = "Hide match breakdown ▲";
      } else {
        state.openCards.delete(id);
        btn.textContent = "Why this rank? ▼";
      }
    }));
  document.querySelectorAll(".card [data-details]").forEach(el =>
    el.addEventListener("click", () => openModal(el.closest(".card").dataset.id)));
}

/* ---------- detail modal ---------- */
function openModal(id) {
  const e = ENTRIES.find(x => x.id === id);
  if (!e) return;
  const sp = e.specs || {};
  const revs = e.professional?.reviews || [];
  const ratingRows = Object.entries(e.ratings || {}).map(([k, v]) => {
    const f = FACTORS.find(x => x.key === k);
    return `<div class="bd-row"><span>${esc(f ? f.label : PRETTY(k))}</span>
      <span class="bd-bar"><i style="width:${v * 10}%"></i></span><span class="bd-pts">${v}/10</span></div>`;
  }).join("");
  document.getElementById("modalBody").innerHTML = `
    <div class="m-head">
      <div class="m-img">${imgHTML(e)}</div>
      <div>
        <h2>${esc(e.config_name)}</h2>
        <div class="tierline" style="margin-bottom:8px">
          <span class="chip">${esc(e.tier || "")}</span><span class="chip eco">${esc(e.ecosystem || "")}</span>
          <span class="chip">${esc(e.line || "")}</span>
        </div>
        <div class="price-line"><span class="price">${(e.price?.offers || []).length > 1 ? "from " : ""}${fmtCAD(e.price?.cad)}</span>
          ${(() => { const offs = (e.price?.offers || []).slice(0, 3); const prod = e.price?.official_url || null; return offs.map(o => `<a class="btn-store${o.official ? " official" : ""}" href="${esc(o.url)}" target="_blank" rel="noopener">${o.official ? '<span class="shield">★</span>' : ""}${storeLabel(o.url)}${o.official ? " store" : ""} → ${fmtCAD(o.cad)}${o.est ? " est." : ""}</a>`).join("") + (prod ? `<a class="btn-prod" href="${esc(prod)}" target="_blank" rel="noopener"><span class="prod-ic">📄</span>${storeLabel(prod)} product page</a>` : ""); })()}
        </div>
        <p style="font-size:13px;color:var(--ink-dim);line-height:1.55">${esc(e.design_philosophy || "")}</p>
      </div>
    </div>
    <div class="m-section"><h4>Specifications</h4>
      <div class="spec-grid">
        ${[["CPU", sp.cpu], ["GPU", sp.gpu], ["RAM", sp.ram_gb + " GB " + (sp.ram_type || "")], ["Storage", fmtStorage(sp.storage_gb) + " " + (sp.storage_type || "")],
           ["Display", sp.screen_size_in + '" ' + sp.display_type + " " + sp.resolution], ["Refresh", sp.refresh_hz + " Hz"],
           ["Brightness (SDR/HDR)", sp.brightness_sdr_nits + " / " + sp.brightness_hdr_nits + " nits"], ["Weight", fmtW(sp.weight_kg)],
           ["Ports", sp.ports], ["Wireless", sp.wireless], ["Webcam", sp.webcam], ["Speakers", sp.speakers],
           ["Battery (claimed / real)", (e.battery?.claimed_hours ?? "—") + " h / " + (e.battery?.real_world_hours ?? "—") + " h"],
           ["Pen", sp.pen_support], ["OS", sp.os]]
          .map(([k, v]) => v ? `<div><span>${esc(k)}</span><b>${esc(v)}</b></div>` : "").join("")}
      </div>
    </div>
    ${revs.length ? `<div class="m-section"><h4>Professional reviews — avg ${esc(String(e.professional?.avg_score ?? ""))}</h4>
      ${revs.map(r => `<div class="quote">“${esc(r.quote)}”<span class="who">${esc(r.outlet)} — ${esc(r.score)} ${r.url ? `· <a href="${esc(r.url)}" target="_blank" rel="noopener" style="color:var(--accent)">review</a>` : ""}</span></div>`).join("")}</div>` : ""}
    <div class="two-col m-section">
      <div><h4>User praises</h4><ul class="m-list good">${(e.user_sentiment?.praises || []).map(p => `<li>${esc(p)}</li>`).join("")}</ul></div>
      <div><h4>User complaints</h4><ul class="m-list bad">${(e.user_sentiment?.complaints || []).map(c => `<li>${esc(c)}</li>`).join("")}</ul></div>
    </div>
    <div class="m-section"><h4>All factor ratings</h4><div class="m-rating-grid">${ratingRows}</div></div>
    ${e.rating_notes ? `<div class="m-section"><h4>Notes</h4><p style="font-size:12.5px;color:var(--ink-dim)">${esc(e.rating_notes)}</p></div>` : ""}`;
  document.getElementById("modal").hidden = false;
  document.body.style.overflow = "hidden";
}
function closeModal() { document.getElementById("modal").hidden = true; document.body.style.overflow = ""; }
document.getElementById("modal").addEventListener("click", ev => { if (ev.target.closest("[data-close]")) closeModal(); });
document.addEventListener("keydown", ev => { if (ev.key === "Escape") closeModal(); });

/* ---------- boot ---------- */
loadData();
buildSliders();
update();
if (!ENTRIES.length) {
  document.getElementById("cards").innerHTML =
    `<p style="color:var(--ink-faint)">No data yet — build data/laptops.js from the research files (build_data.js).</p>`;
}
})();
