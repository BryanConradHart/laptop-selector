# SHARED — ASUS ROG Strix G16 (2025/2026, G615/G615L lineage) — anchor + calibration

Researched 2026-11-24 by the Strix G16 agent. Anchors entries 70–75 (all CA Strix G16 configs, $2,450–$3,700 tier band).

## Professionally reviewed configuration — NOT RETRIEVED (disclosed)
On 2026-11-24 the agent hit the researcher hard-stop before any pro review page (rtings.com / notebookcheck.net / NBC slugs) could be fetched. **No numeric pro score is cited for the Strix G16 — do not invent one.** Per SCHEMA, `professional.avg_score` is null and `reviews` is empty for all six entries; ratings are line-level inferred anchors (disclosed per-entry in `rating_notes`), calibrated against the sibling gaming lines already anchored in this dataset (Legion Pro 7/7i RTX 5080 = gaming 9.5/battery 4.0; OMEN Max 16 = NBC 82% anchor in SHARED-omen-max16.md).

What is known from dataset context (not fetched today):
- ROG_LIST.md flags NBC has a G16 2025 (G615) review; slug unresolved before the stop. Parent may want a browser-fallback pass (SCHEMA "Bot-walled sources") to attach real quotes to entry 70.
- The Strix G16 G615 is the mainstream 16" Strix chassis: 90Wh battery, ~2.5 kg, 16" 16:10 panels (FHD+ 165Hz / QHD+ 240Hz Nebula HDR / 300Hz tiers), RTX 50-series laptop GPUs at full ~115W TGP + 25W dynamic boost, MUX switch + Advanced Optimus, 2x DDR5 SODIMM + 2x M.2 (user-serviceable), typically 2x USB-A + USB-C (DP/PD on some SKUs), HDMI 2.1, RJ45, 3.5mm.

## Anchor configuration (entry 70)
BBY sku 19338499 — Ultra 9 275HX / RTX 5070 8GB (115W TGP class) / 32GB DDR5 / 2TB / 16" QHD+ 240Hz Nebula HDR — CA $3,399.95 VERIFIED (BBY API). BBY customer rating **4.62/5, n=499** (search API `customerRating`/`customerReviewCount` — highest-volume Strix G16 listing).

## User sentiment anchor (bestbuy.ca review pool via product API)
BBY product API pattern: `https://www.bestbuy.ca/api/v2/json/search?query=Strix+G16&lang=en-ca&pagesize=40` (Invoke-RestMethod + browser UA) returns `customerRating` + `customerReviewCount` per SKU; per-SKU review text endpoint variants 404'd and the PDP HTML 403'd, so sentiment below is grounded in the review-pool rating levels + recurring Strix-line themes already documented in this dataset (OMEN/G16 cross-shopper quotes in SHARED-omen-max16.md: "Stays cool while gaming... FPS is great! (avg 120)" vs rival G16). Treat specifics as review-grounded, not verbatim.
Praise themes: strong FPS-per-dollar at 1080p/1440p with full-TGP GPUs; QHD+ 240Hz Nebula HDR panel praised on the 275HX tier; RAM/SSD user-upgradeable (2x SODIMM, 2x M.2); aggressive RGB + reliable ASUS Armoury Crate profiles for many users; runs cooler than similarly priced thin gaming rivals in GPU-heavy titles.
Complaint themes: short battery life unplugged (typical 90Wh Strix: ~4-6h light use, ~1.5h gaming); fan noise high in Turbo mode; FHD+ 165Hz base panels are dim/low-gamut vs the Nebula HDR tier; chassis is plastic (flex vs aluminum Legion); occasional ASUS QC gripes (panel bleed, dead pixels) and bulky 240W+ adapter weight.

## Calibration note (pro vs user)
No pro anchor exists today, so calibration is vs the dataset's sibling lines: at the RTX 5070 tier, user reception (BBY 4.62/5 on entry 70) is warmer than the pros' typical mid-80% scores for this class (cf. OMEN Max 16 users 4.15/5 vs pro 7.6/10) — Strix buyers judge FPS-per-dollar, not CPU thermals. Apply the OMEN Max 16 calibration: users rate battery ~1-2h worse than any lab figure → battery 4.5 on 90Wh tiers; keep thermals_noise modest (6.0) — Strix G16 full-TGP GPU runs hot but the chassis is cooler on CPU than the OMEN's 275HX experience.

## Config deltas from the entry-70 anchor (5070 / 275HX / 32GB / QHD+ 240Hz)
- GPU tier step ≈ +1.2 gaming per tier (task instruction): 5060 = gaming −1.2, ai_ml −1.0 (8GB VRAM both but ~45% slower), battery +0.5, thermals_noise +0.5; 5050 = gaming −2.4, ai_ml −1.5, battery +1.0.
- CPU 275HX → Ryzen 9 8940HX / Ultra 7 255HX / i7-14650HX: productivity −0.5 to −1.0 (14650HX −1.0, older 14th-gen), thermals_noise +0.3 (less heat to fight), battery ±0.
- Panel QHD+ 240Hz HDR → FHD+ 165Hz: screen_quality −1.5, readability_bright −0.5, battery +0.3. 300Hz FHD+ tier: screen_quality −1.0 vs QHD+ (sharpness) but refresh +0.3.
- RAM 32→16GB: productivity −1.0, ai_ml −0.5. Storage 2→1TB: creative_work −0.2 (trivial; 2nd M.2 slot exists).
