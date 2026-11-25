# SHARED — Lenovo Legion 7i 16 Gen 10 (2025, Legion 7 16IAX10) — Aura Edition slim gaming flagship

**IMPORTANT scoping note:** Legion 7i Gen 10 exists ONLY as a 16" model (16IAX10) — there is no 14" variant of this line (the 14" slim Legion was the older Legion Slim 5/7 14IRX line). Confirmed via NBC review + BBY CA enumeration.

Anchor config researched: **Notebookcheck "Lenovo Legion 7 16IAX10 review: Formidable Razer Blade 16 competitor" — tested config = Core Ultra 7 255HX / RTX 5060 (115 W) / 32GB / 1TB / 16" 2560x1600 OLED 165Hz, score 87%.**
URL: https://www.notebookcheck.net/Lenovo-Legion-7-16IAX10-review-Formidable-Razer-Blade-16-competitor.1122108.0.html (fetched live 2026-11-24 via web_fetch; found via Bing browser snapshot).
Also NBC follow-up: "...outperforms most other ultrathin laptops with similar RTX 5060 graphics" (1130255). RTINGS has NO Legion 7i Gen 10 review (404 slug guesses) — do not cite RTINGS for this line.

## Key tested specs (NBC)
- 1.978 kg / 17.9 mm — one of the lightest 16" gaming laptops (~200 g lighter than Blade 16/Omen Transcend 16)
- 84 Wh battery; WiFi browsing **4h40m** (vs 7+h on Alienware 16 Aurora/Gigabyte A16); full charge <90 min; 245 W adapter
- Display: Samsung ATNA60HS01-0 OLED 2560x1600 165Hz (240Hz on higher SKUs), glossy ONLY, 100% sRGB / 99.6% P3, ΔE 3.11 factory (0.79 calibrated), ~483 nits SDR max, 0.6-0.8 ms response, PWM 1317 Hz
- Noise: idle 24-29 dB; gaming Balanced 45.9 dB / Performance **54.6 dB**; fans pulse up to ~30 dB during web browsing on Balanced
- Stress: CPU spikes 164 W/105°C then settles 105 W/82°C (light cooling pushed to limits by Arrow Lake-HX); GPU 105-115 W @ 82°C
- Ports: 1x TB4 (USB-C, DP2.1, PD 100W), 1x USB-C 3.2 Gen2, 2x USB-A, HDMI 2.1, SD reader (fast: 234 MB/s AS SSD), 3.5mm; NO RJ-45; only one USB-C is TB4
- Webcam 5MP 1440p30 with electronic shutter switch; speakers 2x2 W ("could be louder"); keyboard+clickpad comfortable; hinge opens 180° but feels slightly weak; power button glow CANNOT be disabled; white matte finish hides fingerprints but shows scratches
- GPU options stop at RTX 5070 (no 5070 Ti — power limits); CPU options Ultra 7 255HX / Ultra 9 275HX
- Gaming: CP2077 1080p ultra 94.9 fps / QHD 59.2 fps; GTA V 1080p highest 142.9; consistently faster than average RTX 5060 laptop (115 W TGP + fast CPU)

## Pro quotes (verbatim, NBC 87%)
- "It's one of the lightest and fastest gaming laptops we've tested with the same RTX 5060 GPU due to its high 115 W TGP target."
- "The main drawback to the model is its aforementioned RTX 5070 limit. The RTX 5070 Ti is significantly faster than the RTX 5070, but its high power requirements have likely excluded it from the system."
- "Core temperatures are relatively high, battery life is average at best, and loud fans are unavoidable if playing on Performance mode. These negatives are more pronounced on the Legion 7 16 due to it being lighter than most other ultralight competitors."
- "WLAN browsing on Balanced and iGPU mode lasts just a little over 4.5 hours compared to 7+ hours on alternatives like the Alienware 16 Aurora or Gigabyte Gaming A16."
- "Chassis rigidity is excellent along the base with almost no warping or bending. The hinges are small but nonetheless satisfactory; they open the full 180 degrees but feel slightly weaker than the hinges of the Blade 16."
- NBC pros list: "sharp 2.5K OLED with G-Sync and high refresh rate / faster than most RTX 5060 laptops / comfortable keyboard and clickpad / very lightweight for the category / fast Arrow Lake-HX CPU options"
- NBC cons list: "higher power consumption; shorter battery life / loud fans when gaming on performance mode / no GeForce RTX 5070 Ti option / mandatory glossy display / speakers could be louder"

## Canadian configurations (BBY CA product API, verified 2026-11-24)
Only ONE new retail config at Best Buy CA:
- **19784199** Legion 7i 16" Glacier White — Ultra 7 255HX / RTX 5060 / 32GB / 1TB OLED — **$3,499.99 sale / $3,999.99 reg** (BBY customer rating 3.67/5, n=3). = the NBC-tested config.
- 19430020 Open Box $2,189.99 — Ultra 9 275HX / RTX 5070 / 32GB / 1TB — proves the 275HX/5070 tier was sold in CA (regular price not directly verifiable; estimated).
- Refurb twins 19597923/20333762, open-box 20211265/19482252 — not separate entries.
- lenovo.com/ca is a JS SPA (unfetchable per LEGION_LIST notes) — CTO tiers (64GB/2TB, 240Hz OLED) unenumerated; noted as omitted.

## User sentiment (BBY 19784199 rating 3.67/5 n=3; per-SKU review text endpoints 404 — sentiment grounded in NBC findings + Legion-platform user themes from SHARED-legion-pro7.md; disclosed per-entry)
Praises:
- ~2 kg 16" with OLED — genuinely portable gaming flagship; reviewers call it a "finely-tuned" Razer Blade 16 alternative at far lower price
- RTX 5060 at 115 W beats most other 5060 laptops by up to 20% in games
- Comfortable TrueStrike keyboard + large clickpad; white finish resists fingerprints
- Fast charging (<90 min) and 100 W PD via TB4 — usable with small USB-C chargers away from gaming
- Fast SD reader + 5MP webcam with hardware kill switch praised for creator/travel use
Complaints:
- Battery ~4.5 h WiFi is well below 16" rivals (7+h); iGPU idle drain high (9.4-10.6 W)
- Fans pulse audibly (~30 dB) even while web browsing on Balanced; 54.6 dB on Performance mode
- Glossy OLED mandatory — reflections in bright rooms; power-button glow cannot be disabled
- Speakers quiet/thin (2 W x2) for a 16" chassis
- White paint shows scratches/scuffs more readily than dark chassis; small hinges feel weaker
- Legion-platform service themes (from Pro 7 threads): warranty friction, occasional fan bearing noise and OLED panel quirks on Gen-10 units

## Pro-vs-user calibration note
- NBC 87% is a strong score for a midrange-GPU machine — driven by the weight/performance package, NOT by battery (explicitly "average at best") or noise. Do not read 87% as flagship-tier battery/thermals.
- BBY users rate it 3.67/5 vs pro 87% — the gap is battery + fan pulsing + service expectations, consistent with Legion line user themes. Temper repairability_service/durability ~1 pt below what the pro score implies (same pattern as Legion Pro 7i).
- Users love the OLED + weight combination more than the review's measured criticism of glossy-only — screen_quality can stay high (9.0).
- Battery: trust the 4h40m WiFi figure; rate 4.0 like Legion Pro 7i despite lighter chassis (HX CPU + OLED drain dominates).

## Config deltas for sibling entries (apply modestly)
- Ultra 9 275HX / RTX 5070 tier: gaming +1.2 (5070 ~15% faster per NBC charts), productivity +0.3, ai_ml +0.2, battery −0.1, everything else same.
- 64GB RAM variants (lenovo.com CTO, unenumerated): productivity +0.5, ai_ml +0.3.
- 240Hz OLED on higher SKUs: no rating change (same panel family).
