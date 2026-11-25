# SHARED — Razer Blade 14 / 16 / 18 (current gen) — researched 2026-11-24

## Anchor pro review (LIVE-FETCHED, full text read)
**Notebookcheck — Razer Blade 16 2025 RTX 5090** (Ryzen AI 9 HX 370, RTX 5090 Laptop 160W TGP, 32GB LPDDR5x-8000 soldered, 2TB SSD, 16" QHD+ 240Hz OLED ATNA60DL04-0, 90Wh, 2.09kg, 17.4mm, €4,399)
- URL: https://www.notebookcheck.net/Razer-Blade-16-2025-review-Gaming-laptop-now-with-GeForce-RTX-5090-Laptop-and-an-even-slimmer-case.988251.0.html
- **Score: 87% ("good")**, v8, 03/26/2025
- Verdict quotes (verbatim):
  - "With its thickness of barely 17 mm (~0.67 in) and weight of around 2 kg (~4.4 lb), the Blade 16 2025 is very mobile, and the quality of the case continues to be very high. But unfortunately, the surfaces remain extremely susceptible to dirt."
  - "The large vapor-chamber cooling does a decent job in terms of the noise volume, but the case temperatures have increased."
  - "The OLED display with 240 Hz is excellently suited for gaming, and the included color profiles (both P3 and sRGB) are superbly calibrated. Only the HDR capabilities of the OLED panel leave something to be desired."
  - "Although the AMD Ryzen AI 9 HX 370 is by no means slow, there is still a difference to the faster HX CPUs, which becomes particularly noticeable in the 1080p resolution."
  - "While the keyboard was improved, it continues to be weaker than that of the ROG Zephyrus G16."
  - "In terms of the maintenance options, we see a step backwards, since the Ryzen processor is combined with soldered RAM."
- NBC Pros: robust high-quality case; lighter and more compact than before; very high gaming performance; 240-Hz OLED with accurate color profiles; significantly more efficient; 2x M.2-2280 SSD; improved keyboard.
- NBC Cons: RAM cannot be expanded; PWM flickering (960Hz, 44% amplitude ≤100% brightness); high case temperatures; surfaces extremely susceptible to dirt; low HDR brightness.
- Key measured data: SDR brightness ~392 nits (min 4.2), ΔE ColorChecker 1.2, 96.1% P3 / 99.9% sRGB, 0.2/0.25ms response, glossy, HDR brightness weak; fan 43 dB(A) Silent → 53.4 dB(A) max Performance; power modes Silent 35W CPU/110W GPU → Performance 78/75W CPU/160W GPU; CPU multi ~20% drop on battery; ports 3x USB-A 3.1 Gen2 + 2x USB4 40Gbps + HDMI + SDXC + 3.5mm; Wi-Fi 7 (MT7925), BT 5.4; 1080p+IR webcam; 6-speaker; keyboard 1.5mm travel; 280W PSU; unibody aluminum, "base unit cannot be warped", hinge holds at all angles.

## Second pro review (LIVE-FETCHED)
**Tom's Hardware — Razer Blade 16 (2025)** — https://www.tomshardware.com/laptops/gaming-laptops/razer-blade-16-review — numeric score did not render on page (editor's note 5/5/2025 confirms a score was later added; Brave snippet showed "4" — treated as ~4/5 but NOT formally cited).
- Verdict quote: "The Razer Blade 16 is a thin RTX 5090 laptop with a bright screen and tons of ports, but it's extremely pricey and the drivers felt unfinished on our test unit."
- Pros: solid thin design; bright vivid screen; good battery life for a gaming laptop; lots of ports. Cons: very expensive; touchpad feels cheap; Borderlands 3 benchmark wouldn't run (early Blackwell driver issues).

## Bot-walled / not found (honest nulls — do NOT cite)
- RTINGS Blade 16/14/18 2025 review: not reached (researcher budget stop; no URL verified). professional reviews on non-anchor entries = [] or anchor-based inference.
- DuckDuckGo (CAPTCHA), Mojeek (403), Bing site: (garbage), NBC Search (no results page) all bot-walled.

## User-review findings (Blade line; Reddit/BBY scraping hit budget stop — synthesis from pro-review findings + long-standing Blade-line user themes, disclosed per entry)
- Fingerprint/dirt magnet black anodized aluminum is the #1 cosmetic gripe (confirmed by NBC "extremely susceptible to dirt").
- Long-standing Blade-line user complaints: paint/anodizing wear at lid edges and hinge corners over time; high case temps on the deck near vents (NBC: temperatures increased vs 2024); soldered RAM (2025 AMD move = "step backwards" per NBC); OLED PWM sensitivity at low brightness; Razer Synapse software bloat; early RTX 50-series driver instability (Tom's couldn't run some games at launch); price.
- User praises: MacBook-like build in a gaming laptop; 2kg/17mm with a 5090; OLED 240Hz superbly calibrated; 2x M.2 slots; USB4 + SDXC; improved keyboard travel (1.5mm).
- Calibration note: pro 87% but users complain about dirt/temps/soldered-RAM more than the review's tone suggests; battery is "good for a gaming laptop" (Tom's) yet real-world light-use is only ~5-6h — treat any gaming-laptop battery rating >6 as generous.

## Cross-config inference rules (used on all entries except 140)
- Anchor = 140.json (Blade 16 HX370/5090/32GB/2TB, NBC-tested).
- GPU tier deltas vs 5090: 5080 −1.0 gaming / +0.5 battery; 5070 Ti −2.0 gaming / +0.5 battery.
- CPU delta: Ryzen AI 9 365 (10c) vs HX 370 (12c): −0.5 productivity, −0.3 ai_ml.
- RAM/storage: 64GB / 4TB: +0.5 productivity, +0.5 ai_ml vs 32GB.
- Blade 14 (14" 120Hz OLED, ~1.85kg, ~70Wh est.): screen_size 5.5, portability +0.5, battery +1.0 vs 16, gaming −2.0 for 5070 tier (lower TGP), speakers −1.0.
- Blade 18 (18", Ultra 9 275HX, ~3.05kg est., 82Wh est.): screen_size 8.5, portability −3.5, battery −1.0, productivity +0.5 (24-core 275HX), thermals +0.5 (bigger chassis), speakers +0.5.
- BBY lists Blade 16 tiers as "240Hz HDR" without panel type — QHD+ 240Hz OLED assumed per tested config (disclosed per entry). Blade 18 "240Hz" panel type not stated — QHD+ 240Hz (miniLED/IPS) assumed, disclosed.

## Prices / SKUs (BBY CA, VERIFIED 2026-11-24, from PRED_RAZER_LIST.md — do not re-verify)
| # | config | CAD | SKU |
|---|--------|-----|-----|
| 140 | Blade 16 HX370/5090 32/2TB | 5,699.99 | 19218977 |
| 141 | Blade 16 HX370/5090 64/4TB | 6,299.99 | 19218978 |
| 142 | Blade 16 365/5080 32/1TB | 4,499.99 | 19218982 |
| 143 | Blade 16 365/5080 64/2TB | 4,949.99 | 19218976 |
| 144 | Blade 16 365/5070Ti 32/1TB | 3,899.99 | 19218983 |
| 145 | Blade 14 365/5070 32/1TB | 3,449.99 | 19218987 |
| 146 | Blade 14 365/5070 64/2TB | 3,899.99 | 19218985 |
| 147 | Blade 18 275HX/5070Ti 32/1TB | 4,499.99 | 19218979 |
| 148 | Blade 18 275HX/5080 32/1TB | 5,249.99 | 19218980 |
| 149 | Blade 18 275HX/5090 32/2TB | 6,299.99 | 19218981 |

Image URL pattern (VERIFIED pattern, per NOTES): https://multimedia.bbycastatic.ca/multimedia/products/1500x1500/{first3}/{first5}/{sku}.jpg
Store URL pattern: https://www.bestbuy.ca/en-ca/p/{sku} (closest-to-config page; slug unknown — noted in rating_notes).
