# SHARED — HP OMEN 16 (2025, mainstream non-Max) — pro-vs-user calibration anchor

Researched 2026-11-24. Anchors 160.json (5060/Core 7 240H entry, BBY 19320069), 161.json (HyperX Edition 5070/Ryzen 9 8940HX, BBY 20132584), 162.json (5070/Ryzen AI 9 365/32GB/1TB, BBY 19968864), 163.json (32GB/2TB, 19968862), 164.json (64GB/2TB, 19968861).

## Professional reviews: NO NUMERIC SCORE FOUND
No accessible numeric pro review of the 2025 mainstream OMEN 16 could be retrieved on 2026-11-24 (researcher budget stop at ~16 requests):
- RTINGS slug guess `rtings.com/laptop/reviews/hp/omen-16-2025` → 404.
- Notebookcheck direct review/model-page slug guesses 404 or redirected to unrelated models; NBC serves some slugs but the OMEN 16 2025 slug was not findable.
- Search engines all bot-walled: DuckDuckGo (both endpoints) CAPTCHA, Mojeek 403, Brave 429, Bing ignores site: operator and returns HP.com junk.
Candidate URLs for a browser-fallback gap-fill pass: NBC site search "HP Omen 16 2025" (likely 16-ap/16-wf chassis review), RTINGS laptop list under HP, Tom's Hardware "hp-omen-16-review".
`professional.avg_score` = null and `reviews` = [] on all entries — nothing fabricated.

## Rating anchor (disclosed inference)
The 2025 OMEN 16 is the mainstream sibling of the NBC-reviewed OMEN Max 16 (see SHARED-omen-max16.md; NBC 82%, Tom's 3.5/5 on the 5090/275HX OLED config). The non-Max OMEN 16 is a cheaper chassis: mostly plastic deck (vs Max's aluminum), no Thunderbolt on AMD tiers, ~2.4 kg (lighter), smaller port set, similar ~83Wh battery, and the same RTX 50-series TGP envelope (~115W for 5060/5070). Ratings anchored on:
- OMEN Max 16 pro review data (SHARED-omen-max16.md) with chassis downgrades (build −1, ports −1, keyboard −0.5) and weight relief (+0.5 portability).
- OMEN 17 2025 entries (61/62.json) — same platform family, 17.3" delta removed.
- Sibling-line calibration: users rate OMEN battery ~2h worse than NBC; users like OMEN hardware more than pros do (BBY ~4.2/5 vs pro ~7.6/10).

## User findings (BBY customer pools, 2026-11-24)
- 19320069 (5060/Core 7 240H): **4.21/5, n=75** — the only OMEN 16 tier with a substantial direct-sold review pool. Praise themes: quiet in light use, strong 1080p gaming for the price, good keyboard. Complaint themes: battery mediocre (~4h), plastic build, HP bloat (OMEN Hub/McAfee), fan ramp under gaming.
- 20132584 (HyperX Edition 5070/8940HX): **4.73/5, n=44** — unusually high; owners cite value at $1,999 sale, 165Hz smoothness, and the HyperX bundle. Complaints: 512GB storage is small, 16GB RAM cap without upgrade, marketplace listing caveats.
- 19968864/62/61 (Ryzen AI 9 365 / 5070 WQXGA 240Hz tiers): 0 ratings (new marketplace SKUs, seller PC Heaven) — sentiment review-grounded from OMEN-line patterns, disclosed per entry. PC Heaven regular-price anchors inflated ~40%; sale price is the street price.
- OMEN-line Reddit patterns (from OMEN Max/16/17 pools): praise = upgradeable RAM/SSD, anti-dust fans, value; complaints = battery 3-4h real, glossy/IPS panel quality variance, coil whine lottery, squished trackpad.

## Config deltas used across entries
- 5060 → 5070: gaming +1.5, ai_ml +0.5 (8GB VRAM both, 5070 faster), battery −0.5.
- Core 7 240H (8c Arrow Lake-H) → Ryzen AI 9 365 (10c Zen5): productivity +0.5, ai_ml +0.5 (50 TOPS NPU), battery +0.5 (efficiency).
- 8940HX (16c Zen4, no NPU): productivity +0.5 vs 240H, ai_ml −0.5 (no NPU).
- 16GB → 32GB: productivity +0.5, ai_ml +0.5. 64GB: +1.0/+1.0 vs 32GB.
- FHD 144/165Hz IPS → WQXGA 240Hz IPS: screen_quality +1.0, readability_dark +0.5, battery −0.5, gaming −0.5 (more pixels on 5070).
- 1TB → 2TB storage: no rating change (price only).
