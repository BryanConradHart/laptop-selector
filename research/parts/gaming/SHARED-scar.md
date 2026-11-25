# SHARED — ASUS ROG Strix SCAR 16/18 (2025/2026 flagship desktop-replacement line) — anchor + calibration

Researched 2026-11-24 by the SCAR agent. Anchors entries 110–112 (all CA SCAR configs sold today; 101–105 were taken by Legion 5 agents during this session).

## Professionally reviewed configuration — NOT RETRIEVED (disclosed)
On 2026-11-24 every review source was bot-walled or missed: RTINGS slug guesses `rog-strix-scar-16-2025` / `rog-strix-scar-18-2025` → 404 (and RTINGS laptop review index does not surface a SCAR 2025 via `?full_text=scar`); NBC direct slugs unresolvable (NBC internal search is a JS form; Bing/DDG-html/DDG-lite/Mojeek/Brave all bot-walled or returned irrelevant results). **No numeric pro score is cited for any SCAR config — do not invent one.** Per SCHEMA, `professional.avg_score` = null and `reviews` = [] on all three entries; ratings are line-level inferred anchors disclosed per-entry.

Candidate URLs for a later browser-fallback gap-fill pass (parent):
- NBC series/review search: https://www.notebookcheck.net/Search.8222.0.html (model="SCAR 18", mfr Asus) — NBC has G834/G835-era SCAR 18 coverage; exact 2025 G835LX review slug unresolved.
- RTINGS laptop review index: https://www.rtings.com/laptop/reviews (no SCAR 2025 review found — likely never tested; do not cite RTINGS).
- NBC reviewed the 2024 SCAR 18 G834 (RTX 4090) with aggregate scores in the low 90s historically; NOT verified today — do not cite numbers.

## Canadian retail reality (BBY API verified 2026-11-24)
- **SCAR 16 (G635 2025): NOT sold at Best Buy CA / ASUS CA store today** (consistent with ROG_LIST.md). No verified CAD pricing → no SCAR 16 entry written; do not fabricate one. Amazon.ca search bot-walled (503); ASUS CA eshop search is a JS SPA (empty via web_fetch). If a gap-fill pass finds a CA SCAR 16 listing, entries would slot in at 104+.
- **SCAR 18 tiers sold in CA (all entry prices VERIFIED via bestbuy.ca search API):**
  - 110 (ANCHOR): sku 19186641 — Ultra 9 275HX / RTX 5080 16GB / 64GB / 1TB / 18" 240Hz Nebula HDR — CA $3,999.97 (no sale), "Exclusive Retail Partner" SKU. BBY customer rating **4.57/5, n=355** → user anchor for the line.
  - 111: sku 20182292 — 2026 G835LXG-DS99-CA, Ultra 9 290HX Plus / RTX 5090 24GB / 64GB DDR5-6400 / 4TB Gen4 RAID 0 / 18" 4K 240Hz Nebula HDR **Mini-LED, >2,000 dimming zones, 100% DCI-P3** (BBY short description, verbatim spec text) — CA $7,999 sale / $8,499 reg, 0 ratings (new).
  - 112: sku 17700715 — prev-gen 2023/24 G834 chassis, i9-14900HX / RTX 4080 12GB / 32GB / 1TB / 18" WQXGA 240Hz HDR Mini-LED — CA $2,799.97, BBY **4.5/5, n=505** (notable prev-gen value pick; schema allows one).

## Chassis/platform facts (dataset-grounded, Strix-line knowledge)
SCAR = top Strix tier: 18" 16:10 chassis ~3.1–3.3 kg, 90Wh battery, full-TGP RTX 50 GPUs (~175W class incl. dynamic boost, vs TGP-capped Zephyrus — cf. NBC on G16: 5090 "unable to reach its potential" in slim chassis), MUX + Advanced Optimus, 2x DDR5 SODIMM + 2x M.2 user-serviceable (unlike soldered-RAM Zephyrus), 2.5G RJ45, HDMI 2.1, TB4/USB4 + multiple USB-A, 1080p IR webcam, per-key RGB + lightbar, 280–330W external adapter. Nebula HDR = Mini-LED on the tiers above.

## User sentiment anchor (BBY rating pool + Strix-line themes)
BBY per-SKU review-text endpoints 404 (known dataset limitation, cf. SHARED-strix-g16.md); sentiment grounded in rating levels (4.57/5 n=355 anchor; 4.5/5 n=505 prev-gen) + recurring Strix/SCAR themes documented across this dataset (SHARED-strix-g16.md, SHARED-omen-max16.md cross-shopper notes). Treat specifics as review-grounded, not verbatim.
Praise themes: monster FPS-per-dollar at the 5080 tier (users repeatedly cross-shop vs Legion Pro 7/OMEN Max and note SCAR wins raw wattage); 18" 240Hz Mini-LED/Nebula HDR screen called the best feature; 64GB RAM + 2x SODIMM/2x M.2 upgradeability at a price soldered rivals charge less for; runs cooler than expected under long sessions thanks to the big chassis (vaporizer + 3 fans on 2025 SCAR); RGB/lightbar build quality praised vs prior-gen plastic.
Complaint themes: ~3.2 kg + 330W brick = it is a desktop with a lid; Turbo-mode fan noise under load (and audible idle fan on some units); battery life poor unplugged (~3–5h light use, ~1.5h gaming); plastic portions of deck flex vs aluminum Legion/Zephyrus; ASUS Armoury Crate bloat + occasional QC gripes (backlight bleed, dead pixels); 4K panel on the 2026 tier needs DLSS for native-res AAA.

## Calibration note (pro vs user)
No pro anchor exists today. Calibration vs dataset siblings: Legion Pro 7i (gaming 9.5/battery 4.0), OMEN Max 16 (NBC 82%, users 4.15/5), Zephyrus G16 (NBC 90% but TGP-capped). SCAR buyers are FPS-per-dollar shoppers; BBY pool (4.57/5) is warmer than typical mid-8x% pro scores for this class. Apply: battery 3.5 on the 18" 90Wh tiers (users ~1–2h worse than any lab figure); thermals_noise 6.5 (best-in-class cooling headroom but genuinely loud Turbo); gaming anchored at Legion Pro 7i's 9.5 for the 5080 full-TGP tier (+0.3 for SCAR's higher sustained wattage headroom).

## Config deltas from the 110 anchor (275HX / 5080 / 64GB / 18" 240Hz)
- 5080 → 5090 (2026 tier): gaming +0.5, ai_ml +1.0 (24 vs 16GB VRAM), creative +0.4, battery −0.3, thermals −0.3; 4K 240 Mini-LED panel: screen_quality +0.5, readability_bright +0.3, native-4K gaming needs DLSS (gaming net unchanged); 290HX Plus: productivity +0.3. Mark inferred:true (pro review of neither 2025 nor 2026 tier retrieved).
- Prev-gen 4080 12GB: gaming −1.8 (4080 ≈ 5070 Ti class, no DLSS4 frame-gen), ai_ml −1.5 (12GB VRAM), battery +0.0, thermals +0.3 (cooler-running gen), build −0.2 (older chassis), screen stays Mini-LED 240 → screen_quality −0.2 (older panel). inferred:true from Strix-line anchors + BBY n=505 pool.
