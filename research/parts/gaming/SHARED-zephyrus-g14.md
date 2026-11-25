# SHARED — ASUS ROG Zephyrus G14 (2025 GA403 / 2026 GU405) — anchor + calibration

Researched 2026-11-24 by the Zephyrus G14 agent. Anchors entries 76–79 (all CA G14 configs, $3,600–$5,800 tier band).

## Professionally reviewed configuration — NOT RETRIEVED (disclosed)
On 2026-11-24 the agent hit the researcher hard-stop: web_fetch was bot-walled or 404 on notebookcheck.net (403), rtings.com (404 slug), pcmag.com (403), theverge.com (404 guessed slug), digitaltrends (404), tomshardware (404 guessed slug); Bing/DDG search backfired (CAPTCHA / irrelevant RSS). **No numeric pro score is cited for the G14 2025 — do not invent one.** Per SCHEMA, `professional.avg_score` = null and `reviews` = [] for all entries; ratings are line-level inferred anchors disclosed per-entry.
Known-but-unfetched anchors for a later browser gap-fill pass:
- Notebookcheck has a Zephyrus G14 2025 (GA403) test report (flagged in ROG_LIST.md line 49). Slug unresolved; NBC direct fetch 403'd via web_fetch — built-in browser works on NBC (per GAPFILL-strix-g16.md precedent).
- RTINGS lists a G14 2025 review; slug guess 404'd.
- What is publicly known (dataset context, NOT quoted today): GA403 is the slim aluminum 14" redesign, ~1.46–1.5 kg, 73Wh battery, 14" 3K (2880x1800) OLED 120Hz Nebula HDR panel, Ryzen AI 300 CPUs (HX 370 / AI 9 465), RTX 5060/5070/5070Ti at ~95–110W TGP (thin-chassis capped vs Strix), soldered LPDDR5X RAM, 1x M.2, 2x USB4/USB-C + 2x USB-A + HDMI 2.1 + SD reader + 3.5mm, 50–65W charging via USB-C.

## Anchor configuration (entry 76)
BBY sku 19697004 — Ryzen AI 9 HX 370 / RTX 5060 8GB / 32GB LPDDR5X / 1TB / 14" 3K OLED 120Hz — CA $3,599.99 VERIFIED (BBY api/v2/json/search, 2026-11-24). BBY customer rating **4.48/5, n=495** (highest-volume G14 listing; use as the user-anchor).

## User sentiment anchor (bestbuy.ca review pool, sku 19697004)
Reviews API returned titles but empty reviewText bodies (endpoint limitation seen across this dataset). Sentiment below is grounded in BBY review titles + rating distribution (4.48/5, n=495) + recurring G14-line themes already documented in this dataset; treat specifics as review-grounded, not verbatim.
Praise themes (from titles + line reputation): "amazing"/"Best in class" performance-for-size; genuinely portable premium aluminum 14" that still games ("Great performance"); loved for engineering school / work + play dual use ("Great product; Use it for Engineering School"); OLED 120Hz screen; quiet Balanced-mode acoustics for a gaming laptop.
Complaint themes: price ("Good machine, bad price." — 4/5; recurring $ vs plastic-chassis rivals gripe); thermal/throttle under long gaming loads without help ("needs a cooling pad for gaming"); long-term reliability gripe ("Review after 1 year of use" — 3/5; matches known G14 2025 Reddit themes: battery swelling/QC outliers, soldered-RAM no-upgrade); thin-chassis fan noise whine & coil whine reports; RTX 5060 capped at ~95–105W TGP (slower than same-GPU thicker laptops).

## Calibration note (pro vs user)
No pro anchor retrieved today. Sibling-line calibration (SHARED-strix-g16.md): users judge FPS-per-dollar and are ~1–2h harsher on battery than lab figures. G14 users at 4.48/5 are warm but the price complaint is stronger than typical pro reviews suggest (pros forgive the thin-and-light premium; buyers at $3.6k for a 5060 do not). Apply: battery 6.0 on 73Wh thin chassis (OLED + Ryzen AI real-world ~5–7h light use, ~1.5h gaming); thermals_noise 5.5 (thin chassis, TGP-capped GPU, praised in Balanced but hot on Turbo); gaming 7.0 at 5060 tier (TGP penalty vs Strix −1).

## Config deltas from the entry-76 anchor (HX 370 / 5060 / 32GB / 1TB / 3K OLED 120)
- CPU HX 370 (12c Zen5/5c, 50 TOPS NPU) → Ryzen AI 9 465 (10c, same RDNA3.5 iGPU generation, 50 TOPS NPU): productivity −0.5, ai_ml −0.3, battery +0.2, thermals_noise +0.2.
- GPU 5060 8GB → 5070 8GB: gaming +1.2, creative_work +0.3 (per dataset GPU-step rule). → 5070 Ti 12GB: gaming +2.2, ai_ml +0.8 (12GB VRAM), battery −0.5, thermals_noise −0.5. → 5080 16GB: gaming +3.2, ai_ml +1.5, battery −1.0, thermals_noise −1.0 (5080 in a 1.5kg chassis is badly TGP-throttled; keep gaming gain capped at +3.0–3.2 not +4).
- RAM 32GB all tiers (soldered, no upgrade path — upgradability floor ~2.5). Storage 512GB vs 1TB: −0.2 creative_work, trivial.
- 2026 GU405 (Ultra 9 Series 2 / Arrow Lake-H) vs 2025 GA403 (Ryzen AI 300): ecosystem/ai_ml ±0 (NPU both ~50 TOPS class), productivity +0.3, battery −0.3 (Arrow Lake-H slightly thirstier), price premium is not a rating (no value factor).
