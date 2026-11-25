# SHARED — Lenovo ThinkPad P-line (P1 / P16 Gen 3 / P14s Gen 6) — 2026-11-24

## Pro-review status (HONEST NULLS)
- Notebookcheck reviewed ThinkPad P16 Gen 3 and P14s Gen 6 per task brief, but **every fetch path was bot-walled (403)**: direct NBC URLs (guessed slugs 404), NBC search 403, DuckDuckGo lite 403. **No numeric pro scores or verbatim quotes could be verified → `professional.avg_score: null`, `reviews: []` on all 10 entries.** A gap-fill pass should fetch the NBC review pages via the built-in browser fallback (SCHEMA "Bot-walled sources").
- BBY reviews API (`/api/v2/json/reviews?sku=`) returns **404 for all 9 ThinkPad P SKUs** — these workstation SKUs carry zero Best Buy CA retail reviews (search API also shows blank rating/reviewCount). So the ultrabooks-NOTES "BBY reviews API sentiment pattern" is unavailable here too.

## Line positioning (per task brief)
- **ThinkPad P1** = thin premium mobile workstation (X1 Extreme successor): ~1.7–1.8 kg 16" chassis, soldered RAM, pro features in a thin-and-light shell. Current CA retail: Gen 9 (Panther Lake, Intel Arc Pro iGPU-tier) and Gen 8 (Arrow Lake-H + Arc 140T).
- **ThinkPad P16 Gen 3** = desktop replacement: 16" WUXGA/FHD+ IPS, Ultra 9 285HX / Ultra 7 255HX (Arrow Lake-HX), user-upgradeable 2×SODIMM + 2×M.2, RTX PRO Blackwell 1000–5000 tiers, 90Wh, ~2.6–2.7 kg.
- **ThinkPad P14s Gen 6** = budget CAD starter: 14.5" chassis (T14p-style), Ultra 7 255H/265H, RTX PRO 500 or Intel Arc iGPU, ~1.4–1.5 kg.

## Professional-GPU (RTX PRO) rating guidance (task brief)
- ISV certification matters: boost `creative_work` and `productivity` vs same-class GeForce (certified for SolidWorks, CAD, DaVinci, Adobe pro workflows).
- **RTX PRO 5000 Blackwell 24GB scores ai_ml ~8** (24GB VRAM + CUDA). PRO 3000 ≈ 7, PRO 2000 ≈ 6, PRO 1000 ≈ 5.5, PRO 500 ≈ 5, Arc Pro iGPU-tier ≈ 4–5.
- Gaming on PRO cards is competent (GeForce silicon, pro drivers slightly less game-tuned): PRO 5000 ~7, PRO 3000 ~6, PRO 2000 ~5, PRO 1000 ~4.5, PRO 500 ~4.

## Calibration note (disclosed synthesis — NO verified pro anchor)
- Ratings are spec-anchored against the dataset's calibration rules (SCHEMA rule 6) and ThinkPad-line anchors from parts/ultrabooks (ThinkPad keyboard 9, WUXGA IPS ~6.5 screen_quality, 16" HX desktop-replacement battery ~4–4.5, portability ~2.5–3).
- User sentiment (5 praises / 5 complaints per entry) is **synthesized from long-standing ThinkPad P-series owner themes** (r/thinkpad, NBC forum patterns carried in prior research) because BBY reviews API is empty and Reddit was not fetched (budget). Parent should treat sentiment as directionally honest, not quoted. Flagged per-entry in `rating_notes`.
- Typical P-line user pattern: keyboard/TrackPoint and serviceability praised; fan noise under load, mediocre IPS panels at flagship prices, and weight (P16) complained about; P1 owners additionally flag soldered RAM and thermals-throttling in thin chassis; P14s buyers praise value, complain about entry panel brightness and iGPU configs being slow for real CAD.

## Verified prices (BBY API 2026-11-24, sale = street)
- P1 G9 Arc Pro/Ultra X7 368H/32/1TB: $6,399 reg / **$3,589** (20082044)
- P1 G8 Arc 140T/Ultra 7 265H/32/512: $6,029.99 / **$3,869.99** (20203268)
- P16 G3 PRO 5000 24GB/285HX/64/1TB: $12,080 / **$9,080** (20183308); 2TB $12,458 / **$9,458** (20183305)
- P16 G3 PRO 3000/255HX/64/1TB: **$7,628.29** no-sale (19463426)
- P16 G3 PRO 2000 FHD+/285HX/32/1TB: $6,998 / **$5,999.79** (20295417)
- P16 G3 PRO 1000/255HX/32/512: $6,503.99 / **$5,453.99** (19843341)
- P14s G6 PRO 500/265H vPro/64/2TB: $8,699 / **$4,819** (19966480); PRO 500 90Hz/255H/64/2TB $8,179 / **$4,719** (19898059); Arc iGPU/255H/32/512 $3,399.99 / **$2,659** (20352919)
- Image CDN pattern VERIFIED: `https://multimedia.bbycastatic.ca/multimedia/products/1500x1500/<grp>/<sku>/<sku>.jpeg`
- Omitted tiers: P16 G3 PRO 5000 3TB ($9,987, 20183311) and 1.5TB ($9,418, 20183309) — same specs as 1TB/2TB entries; P16 G3 PRO 3000 2TB/3TB twins of 19463426; P1 G8 20333520/19793403 (marketplace oddities); P14s G7 line (different generation, parent may add).
