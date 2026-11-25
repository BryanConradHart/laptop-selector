# SHARED — MSI Raider 18 HX AI (A2XWIG, 2025) — pro-vs-user calibration anchor

Researched 2026-11-24. This file anchors all Raider 18 HX AI config entries (60.json = the only CA config: RTX 5080 / Ultra 9 285HX / 64GB / 4TB UHD+ Mini-LED).

## Professionally reviewed configuration
Outlets reviewed the **A2XWIG series with Core Ultra 9 285HX / RTX 5080 Laptop (175W, 16GB GDDR7) / 64GB DDR5-6400 / 18" 3840x2400 Mini-LED 120Hz non-glossy / 99.9Wh / 3.6kg** — i.e. the same silicon tier as the CA BBY config (A2XWIG-085CA, 4TB storage).
NBC reviews-collection aggregate: **84.88% "good" (avg of 16 scores from 24 reviews)**.
URL: https://www.notebookcheck.net/MSI-Raider-18-HX-AI-A2XWIG.1062815.0.html
Individual scores (from NBC aggregate): Laptop Mag 90%, PCWorld 80%, Gizmodo 80%, Stuff 82%, Htxt Africa 78%, Mezha 90%, PC Welt 80%, Gamestar 90%, Geeknetic 96%, ProfesionalReview 91%, Les Numeriques 100%, PC Games (DE) 60%.
No RTINGS review of the Raider 18 HX AI A2XWIG found as of 2026-11-24 — do not cite one.

### Key pro quotes (verbatim, trimmed)
- PCWorld (80%): "It has an Intel Core Ultra 9 285HX that sets new records in several benchmarks, and an Nvidia RTX 5080 GPU with performance close to RTX 4090, and a pair of PCIe 5.0 solid state drives that hit blistering read speeds of just over 13,000 MB/s... The Raider 18 is heavy, and the battery doesn't last long. I wasn't a fan of the keyboard or touchpad, either."
- Laptop Mag (90%): "The Raider has strong general performance, fluid gaming performance, a bright MiniLED display, a comfortable keyboard, powerful audio, and more ports than you're likely to need, even with a multi-monitor setup. It's just expensive."
- Gizmodo (80%): "It's packing a 99.9Wh battery, which sounds good enough on paper... The Raider 18 HX is also plenty loud when it starts going... The cooling apparatus keeps the heat well away from the palm rest and your fingers. The surface temperature could hit around 100 degrees Fahrenheit near the center of the keyboard."
- Htxt Africa (78%): "From a full single charge, we got a little over two hours of use before a visit to a power port was needed."
- Stuff (82%): "It's heavy, it's loud, it's got no battery life to speak of. In any other laptop, these would be serious drawbacks. In MSI's machine, it's by design."
- Noticias 3D (positives/negatives): "Powerful hardware; high performance; beautiful mini LED display; impressive speakers... Negative: Overheats while using; heavy and bulky charger."
- Tweakers (pos/neg): "Positive: Powerful processor; 64GB RAM; 4T SSD storage; high performance. Negative: Average display; mediocre design; high price."

### Measured facts (NBC spec sheet + reviews)
- Display: 18.0" 16:10 3840x2400 Mini-LED, non-glossy, 120Hz (UHD+). Display sub-score avg 92%.
- Battery 99.9Wh 4-cell: real-world off-charger ~2h light use (Htxt); mobility sub-score 56%.
- Thermals/noise: loud under load (Gizmodo, Stuff); keyboard-center surface ~100°F; palm rests stay cool.
- Weight 3.6kg, 32mm thick; huge 240W-class PSU.
- Ports: 2x Thunderbolt (USB-C, PD), 3x USB-A 3.2 Gen2, HDMI, 3.5mm, 2.5G-class LAN; fingerprint reader.
- 2MP IR webcam, stereo speakers (well reviewed — "powerful audio" Laptop Mag).
- 2x M.2 (PCIe 5.0 capable), DDR5-6400 (SODIMM, user-upgradable), Wi-Fi 7, BT 5.4.

## Canadian pricing (bestbuy.ca, verified 2026-11-24 via OMEN_MSI_LIST.md)
- Raider 18 HX AI A2XWIG-085CA 18" UHD+ Mini-LED 120Hz | RTX 5080 | Ultra 9 285HX | 64GB | 4TB: reg **$8,499.99**, sale **$7,399.99** (BBY sku 20341909). Only Raider 18 config at CA retail today.

## User findings vs pro calibration
Reddit (r/MSILaptops, r/gadgets) + BB user threads align with the pro aggregate on the big picture (desktop-class CPU/GPU, gorgeous Mini-LED, huge port count) but users reinforce three pro cons harder than the 85% aggregate suggests:
1. **Battery**: users treat it as a desktop with a UPS — ~2h off-charger is the norm, not an outlier; rate battery ~2.0 despite the 99.9Wh headline.
2. **Weight/brick**: 3.6kg + giant PSU is a dealbreaker for anyone comparing to Blade 16/Aorus Master 16 (the two outlets' own suggested alternatives); portability ~2.0 stands, do not inflate for "18-inch desktop replacement" framing.
3. **Input devices**: PCWorld's keyboard/touchpad criticism is echoed by owners (mediocre touchpad, "bring a mouse"); keyboard_trackpad ≤7.0 even though Laptop Mag liked the keyboard — outlets disagree here, users side with PCWorld.
Net: pro avg_score ~8.5 is fair for performance/display/build, but real-world satisfaction is anchored by battery, weight, and fan noise — reflected in entry ratings.

## Sibling-config inference rule
No sibling CA configs exist today (single 64GB/4TB RTX 5080 SKU at BBY). If US 5070Ti/5090 SKUs are added later: 5090 tier → gaming +0.5, ai_ml +0.5 (32GB VRAM); 5070 Ti tier → gaming −1.0, battery +0.5.
