# SHARED — ASUS ROG Ally / Ally X / Xbox Ally family (calibration anchors)

Research date: 2026-11-24. Configs written: `09.json` (Ally X Z1E/24GB/1TB, **anchor, verified NBC-tested SKU**), `10.json` (Xbox Ally X Z2E/24GB/1TB, **anchor, verified NBC-tested SKU**), `11.json` (Xbox Ally Z2A/16GB/512GB, inferred).

## What is ACTUALLY sold in Canada (verified 2026-11-24, bestbuy.ca product pages via browser)
| Model | Config | CAD | BBY rating | Web code | Status |
|---|---|---|---|---|---|
| ROG Ally X (2024) | Z1 Extreme, 24GB, 1TB | **$899.97** | 4.7 (2,742) | 17944483 | Ships; clearance (launch C$1,699) |
| ROG Xbox Ally X (2025) | Z2 Extreme, 24GB, 1TB | **$1,499.99** | 4.7 (2,555) | 19438479 | Ships; "Exclusive Retail Partner" |
| ROG Xbox Ally (2025) | Z2 A, 16GB, 512GB | **$799.99** | 4.4 (1,064) | 19438480 | Ships; open-box from $679.99 |
| ROG Ally (2023) | Z1 Extreme, 16GB, 512GB | $1,399.99 open-box only | — | — | **Not sold new in CA — skipped** (stale open-box price) |

Also spotted on BBY: an "Ally X20" OLED bundle teaser (blog.bestbuy.ca) — no purchasable CA listing found this session; flag for a later pass. Xbox Ally line is Best Buy exclusive in Canada (no amazon.ca listing verified).

## Professional anchors (verified full articles)
### Notebookcheck — Asus ROG Ally X (RC72LA, Z1 Extreme/24GB/1TB) — **84.6% (v8), "good (85%)"**
URL: https://www.notebookcheck.net/Asus-ROG-Ally-X-Review-The-best-gaming-handheld-thanks-to-faster-RAM-and-a-huge-80-Wh-battery.865721.0.html
- "still uses the same AMD processor as well as the 7-inch IPS screen with VRR, but almost every other aspect has been improved... improved ergonomics and better joysticks... larger 80 Wh battery."
- Measured: panel avg **455.8 nits** (claimed 500), min 10.2 nits, no PWM, contrast 1383:1, 93.4% sRGB, no HDR; 685g; 80Wh; M.2 2280; Cinebench R23 multi 15,120.
- NBC collection page (https://www.notebookcheck.net/Asus-ROG-Ally-X.858655.0.html) aggregates 34 scores avg **84.49%** incl. TechPowerUp: "Even a year after its release, the ASUS ROG Ally X is a still well-rounded Windows PC handheld and one of the best options on the market... massive battery... analog sticks, one of the original Ally's pain points, have received a big upgrade."
- Other English scores (URLs verified via DDG, numbers not individually loaded): Tom's Hardware "best Windows gaming handheld... But Windows still isn't perfect" (https://www.tomshardware.com/video-games/console-gaming/asus-rog-ally-x-review); PCMag "cementing its place as the top Steam Deck alternative" (https://www.pcmag.com/reviews/asus-rog-ally-x); Tom's Guide "small tweaks feel like more of a major update — fixing our biggest gripes" (https://www.tomsguide.com/gaming/handheld-gaming/asus-rog-ally-x-review); IGN "one of the best handheld gaming PCs yet" (https://www.ign.com/articles/asus-rog-ally-x-review); TechRadar "great hardware, held back by Windows 11" (https://www.techradar.com/computing/gaming-laptops/asus-rog-ally-x).

### Notebookcheck — Asus ROG Xbox Ally X (RC73XA, Z2 Extreme/24GB/1TB) — **85.9%**
URL: https://www.notebookcheck.net/Full-screen-Xbox-experience-for-gaming-handhelds-Asus-ROG-Xbox-Ally-X-review.1139045.0.html
- Verdict: "an upgrade in pretty much every respect... the new controller grips are just much more comfortable and you can easily play for hours... Ryzen AI Z2 Extreme with the fast Radeon 890M increases the gaming performance by **10-15 %** compared to the previous Ally X... Performance mode provides a very good combination of performance, battery runtime (**more than three hours of gaming**) and quiet fans."
- Pros: improved ergonomics; access to fans and M.2-2280; fast Zen 5; 24GB LPDDR5x-8000; excellent software integration; good battery; good input devices & speakers; 2x USB-C (1x USB4).
- Cons: thicker grips chassis; **loud fans in Turbo (mains)**; **no webcam or WiFi 7**; **display brightness lower than advertised**.
- Measured: 718g, 50.9mm thick, 80Wh, 8ms/11.4ms response, no PWM.
- Corroborating (URLs verified, scores not loaded): Tom's Hardware "excellent ergonomics... Xbox experience is far better than using the Windows 11 desktop"; Trusted Reviews "the definitive Windows handheld to buy right now"; PCMag "impressive update... feels like [an Xbox]"; TechRadar "not quite the console-like experience you were hoping for".

### RTINGS — honest nulls
ROG Ally X and Xbox Ally X both reviewed on RTINGS, but rtings.com paths 404'd to direct fetch and numeric scores are membership-locked (same finding as SHARED-flow-z13.md). Gap-fill URLs for the main agent: https://www.rtings.com/laptop/reviews/asus/rog-ally-x and https://www.rtings.com/laptop/reviews/asus/rog-xbox-ally-x (exact slugs unconfirmed — resolve via site search).

### Xbox Ally (base, Z2A) — no numeric score retrieved
Tom's Hardware review URL confirmed (https://www.tomshardware.com/video-games/handheld-gaming/asus-rog-xbox-ally-ryzen-z2-a-review), score not captured. NBC said a base-Ally review was "coming soon" — collection page https://www.notebookcheck.net/Asus-ROG-Xbox-Ally-X.1102117.0.html may hold it; NBC benchmark data surfaced secondhand (HandheldAtlas): Z2A averages ~12 FPS Ultra/Turbo in tested AAA — i.e., clearly sub-Deck. Honest nulls recorded in 11.json.

## User sentiment anchors (BBY review counts/ratings verified; themes are long-standing community consensus — Reddit direct fetch bot-blocked)
- BBY ratings are the strongest public signal: Ally X **4.7/5 (2,742)**, Xbox Ally X **4.7/5 (2,555)**, Xbox Ally **4.4/5 (1,064)**. The base Ally's lower rating tracks its weak Z2 A APU.
- Recurring praise themes: 80Wh battery being "the fix" on Ally X (but still ~2-3h AAA gaming); Xbox Fullscreen/quick-resume finally making Windows feel console-like; grip ergonomics best-in-class; Game Pass + anti-cheat titles that SteamOS can't run.
- Recurring complaint themes: Windows rough edges survive even the Xbox shell (forced desktop trips, update interruptions); dim glossy 7" panel across the whole family; base Ally's 4-core Zen 2 choking on modern AAA; no webcam anywhere; C$1,499 Xbox Ally X vs C$899 Ally X clearance value confusion; original 2023 Ally's 40Wh battery/stick-drift legacy (line-wide reputation).

## Calibration: pro vs user deltas
- NBC (84.6/85.9%) and BBY (4.7/5) agree unusually well on this family; the main user-vs-pro gap is **battery**: pros call 80Wh "massive/good runtime" (NBC >3h gaming), users report 2-3h AAA as the norm → `battery` capped at 6.5-7.0 despite pro battery sub-scores ~85%.
- Users complain about **display dimness** more than the reviews' display sections suggest (NBC's con is a single line; BBY reviews dwell on outdoor readability) → `readability_bright` 5.0-5.5.
- The "Windows still isn't perfect" caveat is shared by pros and users; with the Xbox shell, ecosystem gets 8.5 (full Windows + console shell) not 9.
- Line conventions: `screen_size` stays ~5.0 (7" — small screens not double-punished, portability carries it); `keyboard_trackpad` ~0.5 (no keyboard; controller quality expressed in build_quality); `webcam_speakers` 4.0 (no camera anywhere in the family).

## Sibling inference deltas used
- **Xbox Ally X from Ally X anchor**: gaming +0.5 (NBC-measured +10-15%), ai_ml +2.0 (NPU), build_quality +0.5, portability -0.5 (718g/50.9mm), readability_bright -0.5, thermals_noise +0.5.
- **Xbox Ally (Z2A) from Ally X anchor**: gaming -3.0 (4C Zen 2/8CU << 780M), productivity -1.5, battery +0.5 (60Wh but tiny package power), thermals +1.0, ai_ml -2.0. Marked `inferred: true`.

## Blocked / not retrieved this session (for gap-fill)
- bestbuyca.api.bestbuy.ca — DNS fails from this host (use browser on bestbuy.ca pages instead; that worked).
- rtings.com — 404/membership wall.
- Reddit direct — bot-blocked; sentiment synthesized from BBY review themes + long-standing r/ROGAlly consensus (disclosed).
- Tom's Hardware / PCMag / Trusted Reviews numeric scores — quotes captured via search snippets, numeric ratings not loaded.
- Original 2023 ROG Ally: not sold new in CA (open-box only, stale $1,399.99) → no entry; noted in NOTES.md.
- "Ally X20" OLED bundle: BBY blog teaser, no listing found → noted, not entered.
