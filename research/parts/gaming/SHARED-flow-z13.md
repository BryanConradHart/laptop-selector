# SHARED — ASUS ROG Flow Z13 (2025, GZ302EA) — pro-vs-user calibration anchor

Researched 2026-11-24. This file anchors all Flow Z13 config entries (30.json = 32GB reviewed, 31.json = 64GB inferred).

## Professionally reviewed configuration
Notebookcheck reviewed the **GZ302EA-RU073W: Ryzen AI MAX+ 395 / Radeon 8060S / 32GB / 512GB** — score **86.8% (good, 87%)**, published 02/17/2025 (v8).
URL: https://www.notebookcheck.net/Asus-ROG-Flow-Z13-GZ302EA-Convertible-Review-AMD-s-Strix-Halo-GPU-is-neck-and-neck-with-the-RTX-4070-Laptop.963266.0.html
(RTINGS has no review of the 2025 GZ302EA on rtings.com as of 2026-11-24 — do not cite one.)

### Key pro quotes (verbatim, trimmed)
- "The Ryzen AI Max+ 395 offers enormous amounts of CPU performance in multi-core scenarios thanks to 16 Zen 5 cores, which rivals the Ryzen 9 7945HX3D... you will have to get the MacBook Pro 14 to get similar multi-core performance numbers in a similarly sized package."
- "The integrated graphics card Radeon 8060S is by far the fastest x86 iGPU and is neck-and-neck with the GeForce RTX 4070 Laptop (with a TGP range between 65-75 Watts) in games."
- "Our review unit with 32 GB RAM can allocate up to 24 GB for the GPU, while other SKUs can allocate up to 48 or 96 GB VRAM." (i.e. 64GB SKU → up to 48GB VRAM)
- "The cooling unit does a decent job, but you will hear the fans, especially in Turbo mode and we would recommend headphones, since the integrated speakers are not very good, either."
- Pros: "+ high-quality and stable chassis + very high CPU performance + good GPU performance + USB 4 & Wi-Fi 7 + very good IPS touchscreen w/o PWM + accurate color profiles + webcams with 5/13 MO + replaceable M.2-2230 SSD + improved battery runtime"
- Cons: "- RAM not upgradeable - hardly any maintenance options - weak speakers"

### Measured facts (NBC)
- Display: TL134ADXP03 IPS 13.4" 2560x1600 180Hz touch; max 518 nits (avg 489), min 26.7 nits (too bright for dark rooms), contrast 1727:1, 95.1% P3, ΔE 1.5, no PWM, **no HDR**, minor backlight bleeding, slight touchscreen grain.
- Battery 70Wh: WiFi websurfing 9h20; max-brightness WiFi 6h18; H.264 12h44; **load only 0h51**; recharge 99 min (60% in 32).
- Power/thermals: ~110W gaming, stress peak 138W → steady 110-116W; chassis max 45°C rear / keyboard stays cool; 200W PSU (571g). NBC note: "SKUs with 64 or 128 GB RAM should have an even higher peak consumption figure."
- Build: aluminum, anti-fingerprint, kickstand to 170° with slight hinge wobble; 1.23kg tablet / 1.62kg with keyboard cover; 14.9mm tablet, 20mm with keyboard.
- Ports: 2x USB4 40Gbps, 1x USB-A 3.2 Gen2, HDMI 2.1, microSD (250 MB/s), 3.5mm, XG Mobile eGPU port (RTX 5090 capable). Wi-Fi 7 MT7925 (~1.7-1.8 Gbps iperf3), BT 5.4.
- Cameras: 5MP front + IR, 13MP rear (NBC camera sub-score 76%). Speakers stereo, weak.
- NPU 50 TOPS (Copilot+ device). Only M.2-2230 SSD serviceable; chassis otherwise sealed. 24-month warranty.
- Keyboard cover: magnetic, leather-like, doubles as screen protector; NBC "Input Devices - Small improvements".

## Canadian pricing (bestbuy.ca, verified 2026-11-24)
- 32GB/1TB (sku 20122746): reg **$3,099.99**, sale $2,699.99
- 64GB/1TB (sku 20122747): reg **$3,499.95**, sale $2,999.95
- NBC news also flagged the 64GB SKU getting ~30% discounts periodically.

## User findings vs pro calibration
Reddit/BB user threads for the 2025 AI MAX+ 395 unit align with NBC on the big picture (CPU/GPU performance astonishes for the size) but users disagree with the 87% score more often than the review tone suggests, on three axes:
1. **Battery expectations**: NBC's headline 9h WiFi is light-idle; users report ~1.5-2.5h unplugged during gaming/heavy work and treat "gaming battery" as poor — rate battery a notch below what the pro runtime implies (7.0, not 8).
2. **Noise/speakers**: users complain about Turbo fan whine and the weak speakers noticeably more than the pro score implies — keep thermals_noise ≤7.5 and webcam_speakers ≤6.5 despite the high overall score.
3. **Locked hardware**: users echo the pro cons harder — soldered RAM and the sealed chassis are dealbreakers for buyers who expected Surface-like serviceability; upgradability 3.0 stands.
Net: pro avg_score 8.7 is fair for build/perf, but real-world satisfaction dips on battery-under-load, noise, and non-upgradeability — reflected in the entry ratings.

## Sibling-config inference rule (64GB SKU)
64GB LPDDR5 same CPU/GPU/screen: unified memory doubles → VRAM allocation up to 48GB → **ai_ml +1.0, creative_work +0.5** (larger models fit in VRAM; NBC notes higher peak power draw, battery unchanged for light use). Mark `inferred: true`.
