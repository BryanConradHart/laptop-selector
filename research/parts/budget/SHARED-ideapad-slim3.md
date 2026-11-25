# SHARED — Lenovo IdeaPad Slim 3 / 3i / 3x 15.x" (budget, CA retail 2026-11)

## Professional review footprint: THIN — no numeric score obtained
Attempted on 2026-11-24 (all blocked/useless via web_fetch):
- https://www.pcmag.com/reviews/lenovo-ideapad-slim-3 — 403 bot-wall
- https://www.tomshardware.com/search?q=ideapad%20slim%203 — search page renders no results (JS)
- https://www.notebookcheck.net/Search.8222.0.html?search=IdeaPad+Slim+3 — form only, no results server-side
- https://www.digitaltrends.com/computing/lenovo-ideapad-slim-3-review/ — 404
- https://www.laptopeinfo.com/... — host does not resolve from this environment
- https://www.rtings.com/laptop/reviews/lenovo/ideapad-slim-3 — known bot-wall, not attempted
=> **avg_score = null on every entry in this family.** Ratings are platform-anchored
(spec + panel + class calibration), NOT derived from any pro score. No quotes are given
because none could be verified; none are invented.
Historically (prior generations) the IdeaPad Slim 3 line was reviewed at ~6-7/10 equivalents
by US outlets: fine CPU for the price, weak 45% NTSC panel, plasticky flexy chassis,
mediocre battery. Treat that as the family reputation, not a score.

## Verified configuration data (bestbuy.ca API, 2026-11-24)
All 7 CA SKUs pulled directly from `https://www.bestbuy.ca/api/v2/json/product/<sku>?lang=en-ca`
(specs, image CDN URLs, product URLs, regular+sale prices VERIFIED). Key panel facts came
from the specs field, which beats guessing:
- 15.3" WUXGA (1920x1200) IPS, **45% NTSC**, anti-glare, 60 Hz on the 3i/3x/15.3" SKUs
  (spec text: "IPS 60Hz 45% NTSC"). So these are IPS, not TN — but 45% NTSC ≈ ~62-68% sRGB,
  washed colour, ~300 nits.
- 15.6" FHD (1920x1080) SKUs: Athlon SKU spec says only "LCD with LED Backlight (Antiglare)"
  — panel type unstated, treat as likely TN (worst panel in family).
- Weights 1.59-1.63 kg, thickness ~1.9 cm. Battery: 5306 mAh (~47 Wh) on Core 5 320-1TB
  and Snapdragon SKUs; 4422 mAh (~34 Wh) on the cheaper 3i and the Ryzen 7 170 touch SKU;
  4156 mAh (~32 Wh) on the Athlon.
- Ports (common): 2x USB-A 3.2 Gen1 + 1x USB-C 3.2 Gen1 (PD3.0 + DP1.2), HDMI 1.4, SD reader,
  combo audio. No Thunderbolt, HDMI 1.4 caps at 4K30.
- Webcam: 720p on most; the Core 3 100U SKU gets 1080p IR + privacy shutter. Keyboard
  backlit on the Core 5 320 SKUs (per spec), bilingual CA layout, no numpad on 15.3".

## Platform calibration used for ratings (disclosed synthesis)
- **Core 5 320** (Raptor-Lake-refresh 6C 2P+4E, UHD graphics, 6MB): office-adequate,
  no Arc iGPU → gaming ~1.5. Idle-light, so ~5-7h real on the 47Wh, ~4-5h on the 34Wh.
- **Core 3 100U** (Series 1 U, 6C, modest iGPU): slightly below Core 5 320; similar battery.
- **Core i5-1335U** (10C, Iris Xe 80EU): best x86 CPU/iGPU of the family; Iris Xe gives
  gaming ~2.5 but LPDDR5 + 15.6" chassis → ~5-6h.
- **Ryzen 7 170** (Zen 3 Barcelo-R refresh 8C/16T, Vega 8, no NPU): strong multicore for
  the price, Vega 8 gaming ~2, hot-ish and ~4-5h on the small 34Wh battery.
- **Snapdragon X X1-26-100** (8-core Arm, 45 TOPS NPU, Wi-Fi 7): Copilot+ certified.
  Arm Windows: excellent efficiency → ~11-13h real (best in class by far), silent, but
  app-translation caveats (some x86 drivers/anti-cheat/legacy plugins won't run),
  Adreno GPU is weak for games (gaming ~2, some titles unplayable via translation).
  ai_ml ~4.5 (45 TOPS NPU) vs ~1.5-2 for the x86 SKUs.
- **Athlon Silver 10** (2-core Zen 2/Mendocino-class, LPDDR5): genuinely slow; Windows 11
  feels laboured; ~6h battery because there is little to drive; 128GB SSD fills fast.
- Build reputation across the line: all-plastic, lid and keyboard-deck flex, wobbly
  middle-hinge on 15.x Slim 3 chassis, mediocre but serviceable chiclet keyboard,
  average glass trackpad. Chassis is the family's weak point, consistent across SKUs.
- Repairability/upgradability: bottom screws + clips; RAM soldered LPDDR5 on most SKUs
  (DDR5 SO-DIMM on some 3i — mixed; assume soldered unless stated), M.2 2242/2280 SSD
  generally replaceable, battery replaceable. Lenovo CA warranty/support is a plus.

## User-review themes (synthesis — Amazon.ca / BBY review pages not fetchable this pass;
## BBY product API returned null review counts for these SKUs; disclosed synthesis from
## the long-standing IdeaPad Slim 3 owner-review corpus and class norms)
Praises that recur: price (especially BF sales at $499-599), light for 15", backlit
keyboard rare at this price, USB-C charging, quick SSD boot, Copilot+ X1 battery life.
Complaints that recur: dim/washed 45% NTSC panel, deck and lid flex, hinge wobble,
720p webcam quality, weak speakers, bloatware (Lenovo Vantage/Legion-style promos),
fan audible on light loads on Ryzen SKUs, 8GB ceiling felt on Chrome-heavy use,
Arm app-compat surprises on the 3x.
Calibration note: no pro score exists to compare against; user sentiment on this line runs
**more negative on build quality and panel than spec sheets suggest** — rate
build_quality/screen_quality a notch below what the "IPS WUXGA" label implies.
