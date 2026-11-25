# SHARED — Legion Pro 7 16 (Gen 10, 2025) / RTX 5080 tier

Anchor config researched: **RTINGS "Lenovo Legion Pro 7i Gen 10 16 (2026)" review — tested config = Core Ultra 9 + RTX 5080 + 240Hz OLED, score 8.7/10** (updated 2026-10-27).
URL: https://www.rtings.com/laptop/reviews/lenovo/legion-pro-7i-gen-10-16-2026
(RTINGS tested the 290HX Plus variant; BBY CA "Legion Pro 7" configs use the Ultra 9 275HX — treat as the same tier, CPU delta negligible. NBC/BBY search endpoints were bot-walled; RTINGS direct page + BBY CA product API were the reliable sources.)

## Pro scores + quotes (RTINGS 8.7)
- Gaming: "The Lenovo Legion Pro 7i is excellent for gaming. Our RTX 5080 configuration achieves high frame rates across demanding games, including titles with ray tracing. The 240Hz OLED display offers excellent contrast and G-SYNC support to prevent screen tearing. ... the keyboard gets hot, the fans are loud, and gaming battery life is only around an hour and a half."
- Battery: "The Legion Pro 7i has disappointing battery life. The RTX 5080 configuration lasts under five hours while browsing the web, a little over six hours watching videos, and only about an hour and a half while gaming. It charges fully in under two hours, and its battery is replaceable ... you'll need to keep its main 400W AC adapter plugged in for the best gaming performance."
- Build: "It uses an all-aluminum chassis with securely fitted feet and a finish that doesn't readily collect fingerprints or scratches. The keyboard deck has very little flex, but the lid and screen have more give under deliberate pressure. Its hinge is exceptionally steady."
- Heavy workload: "The RTX 5080 and Core Ultra 9 configuration performs well in graphics- and processor-heavy workloads ... its color gamut is useful for creative projects, but the factory color accuracy is only okay, so you'll need to calibrate the display for color-critical projects."
- Media: "Its large OLED display produces inky blacks and a wide color gamut, while the speakers sound pleasant enough for casual listening, if slightly tinny at higher volumes ... it's heavy, the glossy screen reflects bright lights."
- School/Work: sturdy build, spacious display, comfortable keyboard, quality webcam; poor portability + short battery.
- Graphics perf: 5080 "excellent ... handles modern games smoothly, including ray tracing." Processing: Core Ultra 9 "excellent."

## User sentiment (r/Lenovo + r/IndianGaming, RTX 5080 Legion Pro 7 threads)
Praises (real):
- OLED "drop dead GORGEOUS ... blindingly bright in HDR ... day and night difference vs IPS" (r/IndianGaming 126-upvote week-with review).
- Build solid, looks premium; all lighting incl. power-button RGB turn-off-able for pro settings.
- 175W RTX 5080 "impossible to max out" at native QHD; DLSS+FG strong.
- Front + bottom speakers loud and crisp; RAM/storage user-upgradeable.
Complaints (real):
- nvlddmkm Event 13 "FECS UCODE Fatal Error" / TDR black-screen crashes during gaming on fresh 5080 units (r/Lenovo 1tmrw3r); some units needed RMA.
- OLED red/subpixel bleed on Gen 10 OLED panel (r/Lenovo 1svs0ag).
- Fan-bearing grinding noise within months → warranty fan replacement (r/Lenovo 1timpo5).
- Keyboard hot under load, fans loud; mediocre battery (horrendous iGPU per AMD-owner post).
- No TrackPoint; numpad-key layout drove a Legion loyalist away.
- Warranty/service friction (overseas purchase, Premium Care failures).

## Pro-vs-user calibration note
- RTINGS 8.7 is generous on reliability: users report a nontrivial rate of DOA/faulty units (TDR crashes, fan bearings, OLED bleed) that the pro review (single sample) doesn't capture → temper durability/repairability ~1pt below what the pro score implies.
- RTINGS' "disappointing battery" (sub-5h) matches users ("mediocre", "horrendous iGPU") — no adjustment needed; battery 4.0 stands.
- Pro praises build 8.7-level; users agree chassis is premium → build_quality stays high (~8.8).
- Pro flags "factory color accuracy only okay" for the OLED — users love it for gaming but color-critical work needs calibration → screen_quality high but creative_work not maxed.
- Users rate thermals/noise harsher than RTINGS ("keyboard gets hot, fans loud" understates real complaints) → thermals_noise ~6.0, slightly below what pro implies.

## Config deltas for sibling entries (apply modestly)
- IPS (non-OLED) tier: screen_quality -1.0, readability_dark -1.5 (backlight bleed, no perfect blacks), readability_bright +0.3 (less reflection), battery +0.3 (IPS slightly more efficient), creative_work -0.5.
- 16GB RAM tier: productivity -0.5, ai_ml -0.3.
- 64GB RAM tier: productivity +0.5, ai_ml +0.5.
- 2TB storage tier: upgradability-neutral, +0.3 creative_work (headroom).
- All same GPU/CPU/screen-size → gaming, screen_size, portability, battery essentially unchanged across tiers.
