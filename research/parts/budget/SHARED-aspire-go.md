# SHARED — Acer Aspire Go / Aspire Lite 15.6"-16" (budget, CA retail 2026-11)

## Professional review footprint: THIN — no numeric score obtained
Attempted on 2026-11-24 (blocked/useless via web_fetch):
- https://www.pcmag.com/reviews/acer-aspire-go-15 — 403 bot-wall
- https://www.notebookcheck.net/Search.8222.0.html?search=Acer+Aspire+Go — form only
- Bing site: queries returned irrelevant noise (search engines bot-limited here)
- rtings / nbc / laptopeinfo — bot-walled or unresolvable
=> **avg_score = null on every entry in this family.** No quotes given (none verified).
Aspire Go / Lite are CA-retail rebadge tiers of the Aspire 3/5/15/16 chassis family;
those chassis historically review ~6-7/10 equivalent: cheap but tidy plastic build,
average panels, weak-to-middling battery. Family reputation only, not a score.

## Verified configuration data (bestbuy.ca API, 2026-11-24)
All 8 CA SKUs pulled from `https://www.bestbuy.ca/api/v2/json/product/<sku>?lang=en-ca`
(specs, images, URLs, regular+sale prices VERIFIED). Notes:
- **Aspire Go 16** (AG16-61P class): 16" FHD+? no — 1920x1080 16:10-ish panel listed as
  1920x1080 IPS, 165°? not stated; 51 Wh battery; 1.65 kg; Core 5 120U / Core 7 150U
  (Raptor-Lake-refresh Series-1 names, 10-core, Iris-Xe-class iGPU), DDR4 RAM.
  Ports: 1x USB-C 3.2 Gen 2x2 20Gbps (DP + 65W PD), 2x USB-A 3.2 Gen1, HDMI 1.4.
- **Aspire Go 15.6** (AG15-44/41 class): 15.6" FHD IPS, 51.6 Wh on the 7730U SKU,
  ~45 Wh on the Ryzen 5 40 SKU; 1.73 kg (heaviest of the two families); DDR4 on 7730U,
  LPDDR5 on R5 40; 2x USB-C 3.2 Gen2 + 2x USB-A on the 7730U SKU.
- **Aspire Lite 16** (AL16-52/51 class): 16" **1920x1200 IPS**, 58.14 Wh (biggest battery
  here), only **1.49 kg** — best portability/battery combo of the family; Core 5 120U /
  "Ultra 5 120U" (BBY mislabel — no such Intel SKU; it is a Core 5 120U; noted in entry),
  LPDDR5 soldered; 2x USB-C 20Gbps + 2x USB-A, HDMI 1.4.
- **Aspire Lite 15.6** (AL15-41 class): Ryzen 5 40 (4-core Zen 2 Mendocino, Radeon 610M),
  8GB LPDDR5, 45 Wh, 1.45 kg, IPS FHD.
- **Aspire Lite 15** (Core 3 N350): Alder Lake-N 8 E-core, 16GB DDR4, **Wi-Fi 5 only**,
  1.53 kg, ships in Windows 11 **S Mode**, HD webcam w/ shutter, 1x USB-C 5Gbps + 1x A + 1x USB2.
- Panel quality: all "IPS" per specs but at this tier expect ~300 nits, 45-50% NTSC
  (~62-70% sRGB), no brightness data published.
- Battery figures in BBY specs with "mAh" on Acer SKUs are actually Wh (51, 58.14, 45);
  51.6/45 mAh readings are typos for Wh.

## Platform calibration used for ratings (disclosed synthesis)
- **Core 5 120U / Core 7 150U** (10-core Raptor Lake U refresh, Iris Xe-class): office-good,
  gaming ~2 (Iris Xe, DDR4 single-stack hurts), ~5-7h real (Go 16 51Wh ~5.5-6h; Lite 16
  58Wh ~6.5-7.5h). Core 7 150U ≈ +0.3 productivity over Core 5 120U, same everything else.
- **Ryzen 7 7730U** (8C/16T Zen 3, Vega 8): best multicore in family; runs warm, fan
  audible; ~5-5.5h on 51.6 Wh; DDR4 holds it back slightly.
- **Ryzen 5 40** (4-core/4-thread Zen 2 Mendocino, Radeon 610M): fine for web/office,
  stutters under heavy tabs; very light load → ~6.5-7.5h on 45 Wh; gaming ~1.5.
- **Core 3 N350** (Alder Lake-N, 8 E-cores, UHD 24EU-ish): weak single-thread, very weak
  GPU, but efficient → ~6-8h; Wi-Fi 5 and S Mode are real world irritants; DDR4.
- Build reputation: Aspire Go/Lite plastic chassis is *acceptable* for the price — better
  lid rigidity than the cheapest HP 15s but deck flex present; hinges fine; keyboard
  shallow but consistent, no backlight on most of these SKUs (check entry notes);
  trackpad is the usual small Mylar unit.
- Repairability/upgradability: Aspire Go models: 2x SO-DIMM slots on DDR4 SKUs (7730U,
  120U/150U Go 16 = DDR4) → RAM upgrade path is a genuine plus; Lite LPDDR5 SKUs soldered.
  M.2 2280 SSD replaceable throughout; Acer CA warranty support average.

## User-review themes (synthesis — Amazon.ca/BBY review endpoints not fetchable this pass;
## BBY product API returned null review counts; disclosed synthesis from the Aspire
## Go/Lite owner-review corpus and class norms)
Praises that recur: big screen + light weight on Lite 16, sale prices ($699-799) hard to
beat, SSD fast enough, decent port spread incl. USB-C PD charging, DDR4 Go models
upgradable to 32GB, quiet under light load.
Complaints that recur: dull 45% NTSC panels with narrow viewing on some units, no keyboard
backlight on most units, "Ultra 5 120U" naming confusion, LPDDR5 Lite units are dead-ends
at 8GB, Wi-Fi 5 on the N350 Lite 15, S Mode surprises buyers, 1.73 kg Go 15 feels heavier
than the Lite, fans whine under any sustained load on 7730U, mediocre 720p webcams.
Calibration note: no pro score exists; users rate these **~the same as the spec sheet
implies except build quality and panel dullness, which disappoint slightly more**;
rate build_quality 4-4.5 and screen_quality ~4 accordingly.
