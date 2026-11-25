# SHARED — ASUS ROG Flow Z13 (2025, GZ302) — calibration notes
Researched 2026-11-24. Form factor: **tablet** (detachable keyboard cover, no built-in kickstand —
the cover has a folding stand). Category: handheld-pcs (gaming tablet). Ecosystem: Windows 11.

## What is ACTUALLY sold in Canada (verified 2026-11-24, bestbuy.ca product pages via browser)
| Model code | CPU | RAM | SSD | CAD price (BBY) | BBY rating | Web code |
|---|---|---|---|---|---|---|
| GZ302EA-XS96 | Ryzen AI Max+ 395 | 32GB unified | 1TB | **$2,699.99** (SAVE $400) | 4.7 (67) | 20122746 |
| GZ302EA-XS98 | Ryzen AI Max+ 395 | 64GB unified | 1TB | **$2,999.95** (SAVE $500) | 4.6 (287) | 20122747 |

Both are "Sold and shipped by Best Buy", "Selling Fast". Both share one product page with a
RAM selector (32 GB / 64 GB). A third bundle exists at Best Buy (web code 19929823: 64GB +
"2TB" = 1TB SSD + 1TB docking-station SSD) — **omitted** because it is a bundled-dock SKU and its
price was not captured.

**No RTX 5070/5080 dGPU version exists for the 2025 GZ302.** RTINGS explicitly states the 2025
model "relies on its AMD processor's Radeon 8050S/8060S integrated GPU", unlike the 2023 GZ301
which had NVIDIA dGPUs. XG Mobile external-GPU support was dropped for this generation, so there
is no CA dock config to enumerate. The 128GB RAM SKU (up to 96GB VRAM allocation) is, per ASUS's
own Canadian launch press release, "available in other markets" — **not sold in Canada**.
A Ryzen AI MAX+ 390 / Radeon 8050S variant is listed by RTINGS as configurable but no CA retail
listing for it was found — omitted.

## Professional anchor reviews (tested configs)

### Notebookcheck — tested Asus ROG Flow Z13 GZ302EA-RU073W (Ryzen AI Max+ 395, Radeon 8060S, 32GB, 512GB)
- **Score: 86.8% ("good")**, Convertible, reviewed 2025-02-17/18 by Andreas Osthoff, v8.
- URL: https://www.notebookcheck.net/Asus-ROG-Flow-Z13-GZ302EA-Convertible-Review-AMD-s-Strix-Halo-GPU-is-neck-and-neck-with-the-RTX-4070-Laptop.963266.0.html
  (canonical, as resolved from DDG: `...GZ302EA-Convertible-Review-AMD-s-Strix-Halo-GPU-is-neck-and-neck-with-the-RTX-4070-Laptop.963266.0.html`)
- Verdict quote: "The Ryzen AI Max+ 395 offers enormous amounts of CPU performance in multi-core
  scenarios thanks to 16 Zen 5 cores, which rivals the Ryzen 9 7945HX3D. This is impressive for a
  13-inch device and you will have to get the MacBook Pro 14 to get similar multi-core performance
  numbers in a similarly sized package."
- "The integrated graphics card Radeon 8060S is by far the fastest x86 iGPU and is neck-and-neck
  with the GeForce RTX 4070 Laptop (with a TGP range between 65-75 Watts) in games."
- Sub-scores: Keyboard 81%, Pointing Device 93%, Connectivity 96%, Weight 86%, Battery 86%,
  Display 84%, Games 100%, Apps 100%, Temperature 85%, Noise 83%, Audio 78%, Camera 76%,
  **Repairability 40%**, Packaging 50%.
- Pros (verbatim): high-quality and stable chassis; very high CPU performance; good GPU
  performance; USB 4 & Wi-Fi 7; very good IPS touchscreen w/o PWM; accurate color profiles;
  webcams with 5/13 MO; replaceable M.2-2230 SSD; improved battery runtime.
- Cons (verbatim): RAM not upgradeable; hardly any maintenance options; weak speakers.
- Measured: 70 Wh battery; Wi-Fi runtime **9h20 @150 nits/60Hz** and **7h30 @180Hz**;
  6h18 / 5h43 at max brightness; H.264 video 12h44; load (max brightness) 0h51.
  Fan noise 37.5 / 45.4 dB(A) (idle/load). Weight 1.6 kg, height 14.9 mm, 13.4" 2560x1600 IPS 225 PPI.
  RRP at launch 2499 EUR.

### RTINGS — tested GZ302EA-R9641TB (Ryzen AI Max+ 395, **64GB**, 1TB)
- URL: https://www.rtings.com/laptop/reviews/asus/rog-flow-z13-gz302-2025 (updated Oct 30, 2026 → Test Bench 1.0)
- **Numeric scores: honest null.** All measured values (battery hrs, weight, thickness, fan dBA,
  contrast, brightness) render as "Locked" behind the membership wall for anonymous fetches; no
  overall score was obtainable. Do not invent one.
- Usable verbal verdict quotes:
  - "The ASUS ROG Flow Z13 2025 is a gaming laptop that delivers a decent gaming experience. Its
    performance is impressive for a tablet with integrated graphics, but it falls short compared to
    gaming laptops with discrete graphics cards."
  - "This is a unique device that's difficult to position in the broader market, as there are no
    other gaming-focused tablet PCs from other brands."
  - "The keyboard's mushy feel (when using an incline) may bother some people, and the device is
    rather unstable when using it on a lap."
  - vs G14: "the Flow Z13 is more versatile since it's a tablet with touch and pen input, but the
    G14 has a much better keyboard and is easier to use on a lap... the G14's OLED flickers,
    whereas the Flow Z13's is entirely flicker-free."
- RTINGS config list (useful for spec completeness): CPUs 390 (12C/24T, 5.0GHz, 76MB) / 395
  (16C/32T, 5.1GHz, 80MB); GPUs Radeon 8050S / 8060S; RAM 32/64/128GB LPDDR5x-8000; storage 1TB
  M.2 2230 PCIe Gen4 only; 13.4" IPS 2560x1600 180Hz glossy touch + stylus, 100% DCI-P3,
  Dolby Vision, Adaptive-Sync; front 1440p webcam w/ face recognition + rear 4K camera; Wi-Fi 7;
  ports = 1x USB-A, 2x USB-C/USB4, HDMI 2.1, microSD, 3.5mm.

### Other pro outlets found (URLs confirmed, scores not fetched — gap-fill candidates)
- PC Gamer: https://www.pcgamer.com/hardware/gaming-laptops/asus-rog-flow-z13-2025-review/ (2025-02-21)
- HotHardware "AMD Strix Halo Is A Potent Beast"
- Ultrabookreview long-term (GZ302EA, Ryzen AI Max+ 395):
  https://www.ultrabookreview.com/70846-asus-flow-z13-review-ryzenaimax/ and
  https://www.ultrabookreview.com/71207-amd-strix-halo-asus-rog-flow-z13/
  ("I quite enjoyed my month with this ROG Flow Z13... there are definitely some remarkable things
  about it that make it shine above other options.")
- Best Buy Blog review: https://blog.bestbuy.ca/computers-laptops-tablets/asus-rog-flow-z13-review
  (caution: that post covers the older 2022 Z13, not GZ302)

## Calibration: pro score vs. user reality (same 395 configs)
- **Battery**: NBC's 9h20 is a 60Hz, 150-nit Wi-Fi test. BBY/Reddit owners report roughly **half
  that in mixed real use** and call battery "average at best" once the 180Hz panel and 120W+ GPU
  boost are in play. Rate battery ~6/10, not the 8/10 NBC's 86% Battery sub-score implies.
- **Noise/thermals**: NBC measured 45.4 dB under load and still gave Noise 83%; Reddit threads
  ("crazy fan noise and power draw", "the fan is almost always [on]", "High Pitch noise") show
  owners are **more annoyed than the review suggests** — fan spin-up on light loads and coil whine
  are recurring. Rate thermals_noise ~6.5 and call out whine.
- **Keyboard**: NBC Keyboard 81% / Pointing 93% is generous; RTINGS independently calls the feel
  "mushy" on an incline and lap-usage unstable. Rate keyboard_trackpad ~5.5.
- **Repairability**: NBC repairability sub-score 40% + "hardly any maintenance options" matches
  owner complaints about soldered LPDDR5x; the M.2-2230 SSD is the only realistic upgrade.
- **Overall**: BBY owner ratings (4.7 / 4.6 out of 5) are *higher* than NBC's 86.8%, driven by
  form-factor novelty and Strix Halo CPU punch; the complaints cluster on battery-under-load,
  fan noise, soldered RAM, weak speakers and the extra-cost keyboard cover.

## Sentiment sampling done (DDG snippets, r/FlowZ13 + r/ASUSROG + Level1Techs + BBY)
- Threads: "New Z13 owner, crazy fan noise and power draw" (r/FlowZ13 15fcx4j); "Are the fans loud
  on the Flow Z13 and does it overheat" (1cq9gw9); "High Pitch noise - something to worry about?"
  (14w5ma6); "Any long term Flow z13 owners?" (11fjfvx); "Need help... fan is almost always [on]"
  (r/ASUSROG 11dyo03); Level1Techs "Asus Flow Z13 - Coil Whine?" (t/237604);
  classlawdc.com "ASUS ROG Flow Z13 Overheating Investigation" (2025-08-22).
  NOTE: several of those thread titles are from the older GZ301 generation — treat the *noise/whine/
  battery* themes as line-wide, and weight the 2025-specific evidence (NBC cons, RTINGS verdict,
  BBY 2025 reviews) for config-specific claims.

## Ratings convention for this line (applies to every Z13 entry here)
- `form_factor`: "tablet". `keyboard_trackpad` is rated on the **official keyboard cover** (it is
  what the retail box includes on CA SKUs), per schema rule for tablets/2-in-1s.
- `pen_support`: ASUS Pen 2.0 supported (MPP 2.6), touch 10-pt. Pen is NOT in the box.
- No built-in kickstand — the keyboard cover doubles as the stand; Surface-style built-in kickstand
  does not exist here, which is why lap use is criticised.
- Gaming anchor: Radeon 8060S ≈ RTX 4070 laptop (65-75W) per NBC → gaming 7.0 for a 1080p/1440p
  iGPU class machine, well below discrete 5070 Ti+ gaming laptops.
