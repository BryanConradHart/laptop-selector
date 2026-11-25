# SHARED — Lenovo Legion 5 IPS variants (15.1" / 15.3" IPS + Legion 5 16" Gen 10)

Scope: the non-OLED Legion 5 tiers at BBY CA — 15.1" WUXGA/WQXGA IPS (Gen 10 chassis), 15.3" WQXGA IPS (Gen 11 chassis, incl. 2026 "Legion 15" rebrand), and Legion 5 16" WQXGA 240Hz IPS. OLED 15.1" tiers are covered in SHARED-legion5-oled.md (entries 101-105) — reuse its NBC calibration; do not re-fetch.

## Professional review status (honest disclosure, 2026-11-24)
- **No dedicated pro review found for any IPS Legion 5 Gen 10/11 config.** NBC's "Lenovo Legion 5 16 Series" collection page (https://www.notebookcheck.net/Lenovo-Legion-5-16-Series.824382.0.html, loaded live via browser) lists only Gen 9 (16IRX9) reviews — no Gen 10 16" review exists there. DuckDuckGo/Bing site-searches for "Legion 5 16IAX10"/"ARR10"/IPS returned nothing review-grade. BBY CA API hostname unresolvable from this worker (prices taken from LEGION_LIST.md, API-verified earlier the same day).
- **Anchors used** (verbatim quotes live in SHARED-legion5-oled.md and SHARED-legion-pro5.md):
  - NBC Legion 5 15AHP G10 (AMD R7 260 / RTX 5060): 87% — same chassis family, IPS sibling shares everything but the panel (~200 g lighter/2.5 mm thinner OLED per NBC spec notes → IPS is ~2.14 kg / 24 mm).
  - NBC Legion 5 15IRX10 (i7-13650HX / RTX 5070): 87% — "gaming performance is on par with the more expensive Legion 5 Pro 16."
  - NBC/UltrabookReview Legion Pro 5 16 Gen 10 collection 86.8% — 16" chassis family; UBR: "the mid-range RTX 5060/5070 options are the ones to look at, as they are priced competitively and can be properly tamed in this chassis."
- Do NOT cite RTINGS/Tom's/PCMag numeric scores for these IPS tiers — none found.

## IPS vs OLED panel deltas (the core inference for this file)
Lenovo's IPS panels on these tiers (spec-sheet values, not lab-measured here — treat as estimated):
- 15.1" WUXGA 1920x1200 IPS 165Hz (19253367): budget panel, ~300 nits, ~45% NTSC typical for this SKU class (Lenovo lists both 300-nit 45%NTSC and 500-nit 100%sRGB variants; unverifiable per-SKU → conservative, disclosed).
- 15.1"/15.3"/16" WQXGA 2560x1600 IPS 165/240Hz (all other tiers incl. BBY "HDR" labels): ~500 nits, 100% sRGB, anti-glare, HDR400-class at best.
Deltas vs the OLED anchor (screen_quality 9.0, readability_dark 9.0, readability_bright 6.5):
- screen_quality: 500-nit/100%sRGB IPS → 6.3 (good, accurate, but IPS contrast ~1200:1, weak HDR). 300-nit/45%NTSC WUXGA → 4.3 (visibly washed colors, entry-tier panel).
- readability_dark: IPS has **no PWM flicker** (NBC lists PWM as an OLED con) and lower minimum brightness is fine; but backlight bleed/zone-less dimming vs OLED's per-pixel black → 6.8 (500-nit) / 6.3 (WUXGA). Real selling point for flicker-sensitive users — call it out in praises.
- readability_bright: anti-glare coating + 500 nits beats the glossy OLED outdoors → 7.0 (OLED was 6.5). WUXGA 300-nit → 5.5.
- IPS chassis ~200 g heavier, ~2.5 mm thicker than OLED version (NBC) → portability −0.3.
- Battery: same 80 Wh; IPS backlight slightly thirstier than OLED at same nits but negligible → keep OLED-anchor battery per CPU.

## CPU/GPU deltas (apply to IPS anchors; same as OLED SHARED unless noted)
- AMD Ryzen AI 7 350 / Ryzen 7 250 (Zen5 mobile): battery +1.0 vs Intel HX tiers (NBC: Intel "draws significantly more power... noticeably shorter battery life"); productivity −0.3 vs Ultra 9 275HX.
- Ultra 7 251HX vs Ultra 9 275HX: productivity −0.4 (Pro 5 SHARED).
- RTX 5050: gaming 5.0 (vs 5060 6.4, 5070 7.5 at full TGP; scale from OLED SHARED 5070=7.6 minus IPS panel/motion). ai_ml −0.5 vs 5060 (8→ still 8GB but slower).
- RTX 5060 (8GB, ~115W): gaming 6.4, battery +0.3, thermals +0.5 vs 5070 tier (UBR "properly tamed").
- RTX 5070: gaming 7.5.
- 16" vs 15.x: screen_size 7.5 vs 6.5/6.7; portability 5.8 vs 7.3; thermals +0.3 (bigger chassis cooling).
- 16GB tiers: productivity −0.5, ai_ml −0.3 vs 32GB (NBC tested 32GB).
- Intel 5i models: no USB4 (NBC cons) → port_connectivity 6.8; AMD models keep USB4 → 7.3.
- No card reader on any; 5MP webcam w/ eShutter; speakers "could be better" → webcam_speakers 6.3.
- Maintenance "very good" (2x SODIMM to 64GB, 2x M.2, screwed battery) → upgradability 8.5; repairability_service 7.0 (Legion service friction per GAPFILL/Pro 7 SHARED).

## User sentiment calibration
Reddit/BBY per-SKU review text bot-walled this session (same finding as all Legion SHARED files). Sentiment grounded in: NBC cons (fan noise 44-50 dB(A) gaming, glossy→ here N/A for IPS anti-glare, no card reader, speakers), Legion Gen-10 platform themes (nvlddmkm TDR crashes on some 50-series units, fan-bearing grind, warranty friction, LENOVEO complaints per GAPFILL-2026-11-24.md), and Pro 5/Pro 7 SHARED user findings. IPS-specific: users pick these over OLED to avoid PWM flicker and burn-in anxiety — but WUXGA 45%NTSC panel is the most common complaint on budget Legions ("dull colors").

## CA tiers enumerated (BBY API-verified prices in LEGION_LIST.md, 2026-11-24)
| Entry | SKU | Chassis | CPU | GPU | RAM/SSD | reg/sale CAD |
|---|---|---|---|---|---|---|
| 170 | 19253367 | 15.1" WUXGA IPS 165Hz | Ultra 7 255HX | RTX 5050 | 16/1TB | 2,199.95 |
| 171 | 19623213 | 15.1" IPS 165Hz | Ryzen AI 7 350 | RTX 5070 | 16/1TB | 3,433.99 / 2,429.99 |
| 172 | 19784197 | 15.3" WQXGA IPS 165Hz HDR | Ultra 7 251HX | RTX 5060 | 32/1TB | 3,599.99 |
| 173 | 19784200 | 15.3" WQXGA IPS 165Hz HDR | Ultra 7 251HX | RTX 5070 | 32/1TB | 3,599.99 / 2,999.99 |
| 174 | 19811098 | 16" WQXGA IPS 240Hz | Ultra 9 275HX | RTX 5060 | 16/1TB | 4,649 / 3,249 |
| 175 | 19811132 | 16" WQXGA IPS 240Hz | Ultra 9 275HX | RTX 5060 | 32/1TB | 5,149 / 3,599 |
| 176 | 19875571 | 16" WQXGA IPS 240Hz HDR | Ultra 9 275HX | RTX 5060 | 32/1TB | 5,219 / 3,649 |
| 177 | 20015036 | 15.3" WQXGA IPS 165Hz (2026 Legion 15) | Ryzen 7 250 | RTX 5060 | 16/1TB | 3,859 / 2,699 |
| 178 | 20015034 | 15.3" WQXGA IPS 165Hz (2026 Legion 15) | Ryzen 7 250 | RTX 5060 | 32/1TB | 4,429 / 3,099 |
Image URL pattern: https://multimedia.bbycastatic.ca/multimedia/products/1500x1500/{3}/{5}/{sku}.jpg (per 101-105 precedent; not individually verified). Store: https://www.bestbuy.ca/en-ca/product/{sku}.
