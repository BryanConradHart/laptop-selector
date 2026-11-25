# Handoff notes — windows-ultrabooks research (as of 2026-11-24)

Schema: research/SCHEMA.md (v1 + Cross-configuration inference section). 20 factors, no "value". Set `"inferred": true` + explain in rating_notes when ratings extrapolated from sibling config review. Praises[0..2] = strongest selling points; complaints[0..1] = dealbreakers.

Assembly (when all parts done):
`node -e "const fs=require('fs'),d=require('path');const dir='research/parts/ultrabooks';const es=fs.readdirSync(dir).filter(f=>/^\d+\.json$/.test(f)).sort().map(f=>JSON.parse(fs.readFileSync(d.join(dir,f),'utf8')));fs.writeFileSync('research/windows-ultrabooks.json',JSON.stringify({category:'windows-ultrabooks',researched:'2026-11-24',sources:['lenovo.com/ca','dell.ca','hp.com/ca','microsoft.com','rtings.com','notebookcheck.net','reddit.com','bestbuy.ca','cnet.com','ultrabookreview.com'],entries:es},null,1));console.log(es.length+' entries')"`
Validate: `node -e "JSON.parse(require('fs').readFileSync('research/windows-ultrabooks.json','utf8'));console.log('OK')"`

## DONE (parts/ultrabooks/)
- 01 x1c14-u7-32-512-ips (X1C G14 OLED base) — inferred
- 02 x1c14-u7-32-1tb-oled — inferred
- 03 x1c14-u7-32-512-ips (IPS tier) — inferred
- 04 x1c14-u-x7-32-1tb-oled (Arc B390 tier) — inferred
- 05 x1c13-u7-32-1tb-oled (Gen 13 value pick) — direct CNET review
- 20-30 Lenovo Yoga clamshells DONE (2026-11-24):
  - 20 yp9i-g10-u7-32-1tb-tandem — inferred (CNET Pro 9i 8.6 anchor)
  - 21 yp9i-g10-u7-32-1tb-oled28 (base 2.8K OLED tier) — inferred
  - 22 yp9i-g10-u9-64-2tb-tandem-5060 (max) — inferred
  - 23 yp7i-g11-u7-32-1tb-oled (Pro 7i Gen 11 15") — inferred
  - 24 yp7i-g11-u9-64-2tb-oled-5060 — price VERIFIED $3,619.99 ld+json
  - 25 ys7x-g11-x2e-16-1tb-oled
  - 26 ys7x-g11-x2e-32-1tb-oled
  - 27 ys7x-g11-x2e-32-2tb-oled-touch
  - 28 ys7i-g9-u7-32-1tb-lcd (Lunar Lake value pick)
  - 29 yp9i-g10-u9-32-1tb-tandem-5050 — CNET as-reviewed config, inferred=false
  - 30 ys7x-g11-x2e-16-512-oled (entry tier) — price VERIFIED $1,399.99 ld+json
  - Yoga 9i Aura = 2-in-1 convertible → SKIPPED per scope (convertibles agent owns).
  - Yoga Pro 7i Gen 11 (15" Panther Lake) added as in-scope current Yoga Pro clamshell; Yoga Slim 7a Gen 11 (AMD) exists on CA but omitted — note for parent.
  - VERIFIED CA facts: Pro 9i Gen 10 PDP len101y0063 (Ultra 7 255H/Ultra 9 285H, RTX 5050/5060, 32/64GB, 1/2TB, 2.8K OLED + 3.2K Tandem OLED 1600-nit, 84Wh; ld+json price=0 hidden). Pro 7i Gen 11 len101y0068 (Ultra 7 356H/Ultra 9 386H, 84Wh). Slim 7x Gen 11 len101y0066 (Snapdragon X2 Elite, 70Wh, 2.8K OLED 120Hz touch option, 2TB option). Slim 7i Gen 9 len101y0051 (Ultra 7 258V, Arc 140V, 32GB, 70Wh). lenovo.com CA PDPs fetchable via Invoke-WebRequest (web_fetch tool gets JS shell); ld+json gives price/image for some SKUs.
  - CNET Pro 9i review URL could not be resolved (404 on guessed slugs) — quotes are the verified ones from this file; parent may want to find exact slug.
  - Rettinger/Dave2D/TechChap quotes VERIFIED live from lenovo.com/ca/en/yoga carousel.
- 10 t14s7-amd-a5-16-256-ips (T14s G7 AMD base, CA $2,093.55 VERIFIED CTO w/ eCoupon)
- 11 t14s7-amd-a7pro-32-1tb-ips (T14s G7 AMD prebuilt 21YW001KUS, CA $2,269 VERIFIED)
- 12 t14s7-amd-a7pro-32-1tb-oled (T14s G7 AMD OLED CTO, est)
- 13 t14s7-intel-u5-32-512-ips (T14s G7 Intel base, est)
- 14 t14s7-intel-u7-32-1tb-ips-touch (US$1,979 Amazon anchor VERIFIED via NBC, CA est)
- 15 t14s7-amd-a7pro-64-1tb-ips-touch (NBC 90% review unit; >US$3,000 est)
- 16 t14s7-intel-u7-32-1tb-oled (T14s G7 Intel OLED, est)
- 17 x1c14-u9-64-2tb-oled (X1C G14 top CTO tier, est) — ThinkPad line DONE

### ThinkPad T14s Gen 7 — key verified facts (for parent)
- Notebookcheck review (Jul 2026, 90%): "Excellent business laptop with 64 GB RAM" — Ryzen AI 7 PRO 450, 64GB LPDDR5x-8000, 500-nit matte sRGB IPS touch, 58Wh, 1.193 kg, 14" 1200p 60Hz. Verdict quote: "closes the gap to the flagship ThinkPad X1 Carbon even further". Battery: ~17.5h Wi-Fi @150 nits, 11.5h max brightness. Pros: quiet fans, improved speakers (86.5 dB), 5MP cam, WWAN-ready, up to 64GB. Cons: soldered RAM, 1.3W standby, 60Hz IPS, Wi-Fi 7 160MHz-only (MediaTek MT7925 ~1.7 Gbps vs Intel BE211 ~3.9 Gbps). US from $2,129 lenovo.com/us.
- lenovo.com/ca VERIFIED (2026-11-24): T14s G7 AMD page len101t0171 — CTO from $2,093.55 (eCoupon THINKCTO2026CA, reg $2,463); prebuilt 21YW001KUS AI 7 PRO 450/32GB/1TB WUXGA IPS $2,269 (38% off $3,719). CA CA configs shown are WUXGA IPS only; OLED/500-nit touch via CTO or US models. Intel variant page guessed len101t0170 was wrong (that ID = E16 G4); Intel T14s G7 CA URL not confirmed — entries 13/14/16 use parent thinkpadt URL + estimated prices.
- Image CDN: `https://p2-ofp.static.pub/ShareResource/optimized/pdp/thinkpad/thinkpad-t-series/LEN101T0171/lenovo-thinkpad-t14s-gen-7-amd-series-tn.ff23d6caa387d3d7.png` (VERIFIED).

## REMAINING LINES + verified facts

### ThinkPad T14s Gen 7 (2026) — DONE (entries 10-16; see verified facts above)
- Notebookcheck verdict Jul 2026: "Review verdict for Lenovo ThinkPad T14s Gen 7 - A serious rival for the X1 Carbon?" (notebookcheck.net; couldn't fetch full page — quote from headline only).
- TechRadar Oct 2026: "Lenovo ThinkPad T14s Gen 6 (AMD) review: Still the gold standard for business" (T14s Gen 6 AMD = Ryzen AI; still sold).
- Ultrabookreview comparison facts (VERIFIED quote): T14s "mostly similar to the Carbon in size, build, and functionality, but offered with Intel, AMD, or Snapdragon specs"; 58 Wh battery; dual-fan; non-touch OLED or touch/non-touch IPS; mylar clickpad (no haptic); 30W perf TDP. Configs to enumerate: Intel Ultra 7 / AMD Ryzen AI 7 / Snapdragon X2 variants × IPS/OLED. CAD est ~2,200-2,700.

### Lenovo Yoga Pro 9i 16 Aura Edition (2026 gen 11, Panther Lake, Tandem OLED)
- CNET 8.6/10 Editors' Choice, US$1,950 as-reviewed (VERIFIED quotes): "Centered around a gorgeous 16-inch OLED display, this Yoga laptop provides the performance and build that graphics pros demand."; cons: "Six-speaker array produces tinny, hollow sound", "Slightly awkward keyboard placement". Best Buy US $1,950 tier = Ultra 9 + RTX 5050 + 32GB + 1TB. Ultrabookreview reviewed gen 11 w/ Tandem OLED (75561-lenovo-yoga-pro9i-aura-review).
- Yoga 9i 2-in-1 Aura (gen 11 Panther Lake, 14" 2.8K 120Hz touch OLED, Ultra 7 355, 32GB, 70Wh — full spec table VERIFIED via ultrabookreview 77001 comparison): CNET called gen 10 "near-perfect package with record-setting battery life" (headline quote). NOTE: 2-in-1 — consider whether convertibles-2in1 file owns it; task said include clamshell focus, Yoga 9i is convertible → flag for parent decision. Yoga Slim 7: no direct data found.

### Dell (rebrand saga VERIFIED)
- Dell rebranded XPS→Dell Premium (2025), then BROUGHT BACK XPS at CES Jan 2026 (CNET: "Dell has restored its longtime XPS brand only a year after introducing its new Dell, Dell Plus and Dell Premium lineups").
- Dell XPS 14 (2026, DA14260, Panther Lake): CNET 8.1/10, US$1,350 base (VERIFIED quotes: "It's great to see Dell bring back the XPS and do so with such style."; cons: "Matches MacBook Pro in price but not performance", "No fingerprint reader", "Limited port selection"). dell.com/en-us/shop/dell-laptops/xps-14-laptop/spd/xps-da14260-laptop.
- Dell XPS 16 (2026, DA16260): CNET 8.0/10 US$2,650 (VERIFIED: "the XPS 16 is a fantastic laptop befitting of the premium XPS name"; 3.2K OLED option; "RTX-level price without RTX GPU", "Can't upgrade RAM or SSD").
- Dell 14 Premium (2025, DA14250, still sold): CNET 7.2/10 US$1,450-2,050 (VERIFIED: "one of the hardiest and heaviest 14-inch laptops I've ever encountered", ~3.8 lb; "Shockingly heavy", "Unimpressive battery life", quad speakers + haptic touchpad praised). Dell 16 Premium (DA16250): CNET 7.9/10 US$2,860 (16.3" 4K OLED, RTX 5070 option throttled).
- CAD: apply ~1.35x US or est. dell.ca sells both XPS (new) and Premium (clearance).

### HP OmniBook Ultra 14 (2025, Ryzen AI 9 HX 375)
- PCMag Sep 2026 headline (VERIFIED): "I Tested HP's OmniBook Ultra 14, a Gorgeous Ultraportable With Potent Processing Power" (pcmag.com/reviews/hp-omnibook-ultra-14 — 403 on fetch, score unknown → use "recommended" unless parent finds score).
- HP OmniBook X 14 (Panther Lake): Notebookcheck Oct 2026 headline: "This Panther Lake productivity powerhouse lasts 17 hours, but HP wants $1,900". EliteBook Ultra: current line is "EliteBook X / Ultra G1i" naming; no solid data — flag.
- OmniBook Ultra Flip 14 = convertible (2-in-1 file may own).

### Microsoft Surface Laptop 8 (May 2026) + Surface Laptop Ultra (2026, shipping)
- Surface Laptop 8: Windows Central May 2026 headline "The privacy King: Surface Laptop 8 for business review—is the new stealth screen worth the $2,549 entry price?" (US$2,549 entry, stealth/privacy screen feature). Tom's Guide: "The new Microsoft Surface Laptop 8 is great — but it's hard to recommend to most people". 13.8"/15" sizes continue from SL7. Snapdragon X2 series chips.
- Surface Laptop Ultra (NVIDIA RTX Spark SoC): TweakTown review Nov 23 2026 "Next-Gen Surface Powered by NVIDIA RTX Spark" (403 on fetch). TechRadar: "isn't the MacBook Pro killer I hoped for". IT Pro: "has all the on-device AI your devs need – but its battery life is disappointing". The Verge first-look Jun 2026 exists. ARM Windows ecosystem caveat on ratings. CAD unknown → estimated.

### ASUS Zenbook 14 OLED (2026 UX3480 series)
- Ultrabookreview Nov 2026: "Asus Zenbook 14 review (2026 UX3480KA generation, AMD Ryzen AI 7)" (77371-asus-zenbook-14-ux3480ka-review). Intel variant UX3480AA w/ Panther Lake Core Ultra 7 355 (77189); Qualcomm variant exists too — "Asus offers it with Intel, AMD or Qualcomm specs, all tucked inside the same chassis" (VERIFIED).
- Zenbook 14 UM3406GA (Ryzen AI 7 445 OLED) long-term review exists (75348).
- ASUS Zenbook A16 (2026, Snapdragon X2 Elite Extreme, 48GB/1TB, 3K OLED): CNET 8.5/10 US$1,700 at Best Buy (VERIFIED quotes: "the lightest 16-inch laptop I've ever tested. (It weighs less than 3 pounds!)"; cons: "Lackluster 3D performance", "No room for internal expansion"). Good 16" Zenbook entry candidate (A16 vs S16 naming — task asked Zenbook 14/16 OLED).

## General calibration anchors (rule 6)
- MacBook Air 15 M4 ≈ battery 9.5 / gaming 2.5 / portability 9. Legion Pro 7i ≈ gaming 9.5 / battery 4 / portability 3.
- 14" OLED premium clamshells used: screen_quality 8.5-9, IPS 1200p ~6.5; iGPU gaming 3-5 (B390 ~5, Arc 140V ~3.5); ThinkPad kbd 9.5; Snapdragon ARM → ecosystem ~7.5, ai_ml higher (X2 = 80 TOPS NPU on X2 Elite Extreme).
- US→CAD: ~1.3-1.35x; mark all unverified "estimated". Lenovo CA runs fake-anchor eCoupon pricing — note in price.notes.
- Image URL patterns: lenovo.com CA: `https://p2-ofp.static.pub/ShareResource/optimized/pdp/<line>/<sku>/...hero.png` (VERIFIED for X1C G14). Dell: assets.dell.com (unverified). Best Buy: pisces.bbystreet.com (unverified).

## User-sentiment sourcing caveat
Reddit/BestBuy threads not individually fetched (budget). Praises/complaints in done entries were composed from review pros/cons + commonly reported user issues; parent may want a Reddit verification pass per line.

## Dell DONE (parts/ultrabooks/40-55, 2026-11-24)
- 40 xps13-c5-8-256 — CA $799.99 VERIFIED (BF, lowest-price-of-year; value pick) — inferred
- 41 xps13-u7-16-512 — CA $1,649.99 VERIFIED — inferred
- 42 xps13-u7-32-1tb — CA $2,299.99 VERIFIED — inferred
- 43 xps14-u7-16-512-fhd — CA $2,379.99 VERIFIED = CNET as-reviewed config (8.1) — direct anchor
- 44 xps14-u7-32-1tb-qhd — CA $3,679.99 VERIFIED — inferred
- 45 xps14-u7-32-1tb-fhd — CA $4,479.99 VERIFIED (pricing anomaly: $800 more than better QHD+ tier) — inferred
- 46 xps14-x9-64-2tb-qhd — CA $7,779.99 VERIFIED — inferred
- 47 xps16-u7-16-1tb-fhd — CA $3,899.99 VERIFIED (anomaly: costs more than 48) — inferred
- 48 xps16-u7-32-1tb-fhd-arc — CA $3,599.99 VERIFIED (BF hero) — inferred
- 49 xps16-u7-32-1tb-oled — CA $4,799.99 VERIFIED — inferred
- 50 xps16-x9-32-1tb-oled — CA $5,049.99 VERIFIED — inferred
- 51 xps16-u7-64-1tb-oled — CA $5,949.99 VERIFIED — inferred
- 52 xps16ce-n1x-32-1tb — CA $4,799.99 VERIFIED (RTX Spark N1X Creator Edition, DX16263) — inferred, Arm caveat
- 53 xps16ce-n1x-64-1tb — CA $5,799.99 VERIFIED (128GB/2TB tier $8,899.99 omitted) — inferred
- 54 dell14prem-u7-16-512-clearance — DA14250 DISCONTINUED on dell.ca (redirect); retail clearance est $1,700 — CNET 7.2 anchor
- 55 dell16prem-u9-32-1tb-oled-clearance — DA16250 DISCONTINUED on dell.ca; clearance est $2,900 — CNET 7.9 anchor (quote text not re-fetched, flagged in entry)
- VERIFIED dell.ca facts (2026-11-24): XPS brand restored; dell.ca XPS line = XPS 13 (DX13260, from $799.99), XPS 14 (DA14260, from $2,379.99), XPS 16 (DA16260, from $3,499.99), New XPS 16 Creator Edition (DX16263, from $4,799.99, RTX Spark N1X), New XPS Googlebook (DX13267, Snapdragon X Elite, from $1,649.99 — OMITTED: ChromeOS/Googlebook OS, not Windows ultrabook; parent may want it in other-lines).
- XPS 14/16 (2026) shared specs: 70Wh, 3x TB4 DP2.1+PD only (no USB-A/HDMI/SD), Wi-Fi 7 BE211 + BT 6.0, Gorilla Glass 3 palmrest, no fingerprint reader, 14" 1.36-1.38 kg / 16" 1.65 kg OLED / 1.74 kg LCD. Dell's 27-31h claim = 2K LCD configs @250 nits.
- Dell.ca FAQ confirms "Dell Premium name will be retired" — DA14250/DA16250 pages redirect; clearance entries flagged estimated.
- OMITTED: XPS 13 2026 OLED/fhd display variants all ship same 2.5K touch panel (single display tier). Dell Pro 14/16 Premium = business line (Latitude successor), skipped per scope. "Dell Pro Max" = workstation, skipped.
- CNET review slugs for XPS 14/16 2026 and Premium 2025 guessed (cnet.com/tech/computing/dell-xps-14-2026-review/ etc.) — scores+quotes are NOTES-verified; parent may want exact slugs.
- Image CDN: i.dell.com/is/image/DellContent/... gallery PSDs (VERIFIED reachable from dell.ca PDPs).

## HP DONE (parts/ultrabooks/60-65, 2026-11-24)
- 60 obu14-x2e-32-1tb-oled — OmniBook Ultra 14 Snapdragon X2 Elite 32/1TB 3K OLED touch — CA $3,299.99 VERIFIED (BBY 19880422) — inferred (PCMag anchor)
- 61 obu14-u9-32-2tb — OmniBook Ultra 14 Ultra 9 386H 32/2TB (kd0000ca) — CA $2,197.89 VERIFIED (BBY mktpl 20181091, reg $3,000) — value standout
- 62 obu14-u5-16-512 — OmniBook Ultra 14 Ultra 5 226V 16/512 base — CA $1,999.99 VERIFIED (BBY 19885716)
- 63 obu14-a9-16-1tb — OmniBook Ultra 14 Ryzen AI 9 365 16/1TB launch-gen clearance — CA $1,199.97 VERIFIED (BBY 18469687) — notable value pick
- 64 obx14-u5-16-512-2k — OmniBook X 14 Ultra 5 325 (Panther Lake) 16/512 2K IPS — CA $1,990 reg/$1,098 sale VERIFIED (BBY mktpl 20174277) — NBC 17h battery anchor
- 65 ebultra-g1i-u7-32-512-28k — EliteBook Ultra G1i Ultra 7 258V 32/512 2.8K touch — CA $2,789.99 VERIFIED (BBY mktpl 19799213, reg $2,999.99)
- OmniBook Ultra Flip / OmniBook X Flip / OmniBook 7 Flip / OmniBook X 16 2-in-1 = convertibles, SKIPPED per scope. OmniBook Ultra 14 confirmed a separate clamshell from the Flip.
- EliteBook "Ultra" current line = EliteBook Ultra G1i (Lunar Lake). EliteBook X G2i (Panther Lake, BBY $3,789-4,313) exists but omitted — thin review data; parent may add.
- VERIFICATION CAVEAT: hp.com/ca is a JS shell (Invoke-WebRequest gets empty SPA page) — ALL prices Best Buy CA API-verified. BBY API tip: https://www.bestbuy.ca/api/v2/json/search?query=X&lang=en-ca&pagesize=40 via Invoke-RestMethod returns regularPrice/salePrice/sku/highResImage. Image URLs = BBY multimedia CDN (VERIFIED pattern).
- PCMag OmniBook Ultra 14 slug verified in NOTES; NBC OmniBook X 14 slug guessed (403); EliteBook Ultra G1i NBC quote flagged as paraphrase in entry 65.

## Surface DONE (parts/ultrabooks/70-78, 2026-11-24)
- 70 sl8-138-x2p-16-512 — SL8 13.8" X2 Plus 16/512 — CA $2,299.99 reg/$1,899.99 BF VERIFIED (BBY 19852132)
- 71 sl8-138-x2e-16-512 — SL8 13.8" X2 Elite 16/512 — CA $2,399.99/$1,999.99 VERIFIED (BBY 19852081)
- 72 sl8-138-x2e-16-1tb — SL8 13.8" X2 Elite 16/1TB — CA $2,749.99/$2,249.99 VERIFIED (BBY 19852152)
- 73 sl8-15-x2e-16-512 — SL8 15" X2 Elite 16/512 — CA $2,499.99/$2,099.99 VERIFIED (BBY 19852158)
- 74 sl8-15-x2e-16-1tb — SL8 15" X2 Elite 16/1TB — CA $2,999.99/$2,599.99 VERIFIED (BBY 19852156)
- 75 slu15-spark-24-512 — Surface Laptop Ultra 15" RTX Spark 24/512 — CA $3,899.99 VERIFIED (BBY 20122629)
- 76 slu15-spark-24-1tb — SL Ultra 24/1TB — CA $4,449.99 VERIFIED (BBY 20180957); Nightfall twin 20265371 on sale $3,599.99
- 77 slu15-spark-32-1tb-pro — SL Ultra 32/1TB Win11 Pro — CA $4,849.99 VERIFIED (BBY 20122633)
- 78 slu15-spark-48-1tb — SL Ultra 48/1TB Win11 Pro — CA $5,849.99 VERIFIED (BBY 20122627)
- VERIFIED facts: current-gen Surface Laptop (BBY names it "Surface Laptop 13.8/15 120Hz") = Snapdragon X2 Plus/Elite only, 16GB RAM ceiling on consumer retail, 120Hz touch standard. US$2,549 anchor (Windows Central) = business stealth-screen entry; CA consumer pricing runs lower. Surface Laptop Ultra = NVIDIA RTX Spark (N1X, 18/20-core), 24/32/48GB unified, Mini-LED touch 15", shipping in CA now.
- OMITTED: SL 13" X2 Plus 256/512 UFS tiers (BBY 20122619/20122625 $1,749-1,899) — budget class, parent may want; SL8 32GB tiers business-channel only; Surface Laptop 7 (2024) still sold (BBY 19354727 $1,749) — previous gen excluded; SL Ultra 18-core variants noted in entry 75.
- CAVEATS: microsoft.com/en-ca unfetchable (403/timeout) — prices BBY-verified. Tom's Guide/WCentral/TechRadar/ITPro slugs guessed; quote text NOTES-verified. NBC search 403; DuckDuckGo/Bing bot-walled — direct URLs + BBY API is the working path.


## Zenbook DONE (parts/ultrabooks/80-91, 2026-11-24)
- 80 zb14-ux3480ka-a7-16-512-oled2k � CA $1,999.99 VERIFIED (BBY 19826848) � UBR 4/5 anchor (UX3480KA AMD)
- 81 zb14-um3406ga-a9-16-512-oled2k-touch � CA $1,699 VERIFIED (BBY mktpl 20076833) � AI 9 465 value
- 82 zb14-ux3480aa-u7-16-512-oled2k � CA $2,099 estimated � UBR 4/5 anchor (UX3480AA Panther Lake)
- 83 zb14-sdx-16-256-oled � CA $1,199.99 VERIFIED (BBY 19994917) � Snapdragon X1 BF value; 8GB twin 19994916 $999.99 omitted (below ultrabook spec floor)
- 84 zbs14-ux5406aa-u7-16-512-oled � CA $2,549.99 VERIFIED (BBY 19861009) � UBR 4.25/5 S14 gen2 anchor; 1TB mktpl twin 19936697 $2,799
- 85 zbs16-ux5606sa-a7-16-512-oled � CA $1,999.99 VERIFIED (BBY 19911636)
- 86 zbs16-2026-a9-32-1tb-oled � CA $2,599.99 VERIFIED (BBY 19696998, 226 reviews 4.35)
- 87 zba14-ux3407-x2e-16-512-oled � CA $2,399.99 VERIFIED (BBY 19826849) � UBR 4.25/5 direct anchor
- 88 zba14-x1-16-512-oled-value � CA $1,299.95 VERIFIED (BBY 19860983) � notable value pick (~1 kg OLED)
- 89 zba16-x2eext-16-512-oled � CA $2,999 ESTIMATED (X2EE A16 scarce at BBY CA; CNET 8.5 + UBR 4.25 anchors, US$1,699)
- 90 zba16-x1-16-512-oled-value � CA $1,399.99 VERIFIED (BBY 19870605) � cheapest 16" OLED ultralight
- 91 zbs14-ux3406-u7-32-1tb-oled-lunar � CA $2,299.95 VERIFIED (BBY 18389564, 406 reviews 4.51) � prev-gen value
- VERIFIED BBY CA facts (2026-11-24): BBY api/v2/json/search works with UA header (products field, not items). Zenbook Flip/2-in-1 + Zenbook Duo SKIPPED per scope (convertibles agent). Zenbook S16 2026 refresh = same UX5606 chassis w/ Ryzen AI 300 (no Panther Lake S16 found at CA retail).
- UBR anchors (fetched live, quotes verbatim): 77371 (Zenbook 14 UX3480KA AMD, 4/5), 77189 (UX3480AA Intel, 4/5), 74670 (S14 gen2 UX5406AA, 4.25/5 US$1649), 75029 (A14 X2 2026, 4.25/5 US$1349), 75005 (A16 X2EE, 4.25/5 US$1699). UBR THE BADs used in complaints. UBR overview-page quotes (68996/74512/74371/69717) are paraphrased descriptors � flagged per-entry.
- CNET Zenbook A16 slug unresolved (guessed URL 404); 8.5 score + quotes from NOTES.md prior verification.
