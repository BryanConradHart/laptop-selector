# SHARED — Lenovo Legion Go 2 (calibration anchor: Z2 Extreme 32GB/1TB)

Research date: 2026-11-24. Anchor config = **Legion Go 2 — Ryzen AI Z2 Extreme, 32GB, 1TB** (the launch/main Canadian SKU).
Honest disclosure: **this model's professional reviews could NOT be retrieved this session.** Budget was exhausted on bot-walls (see "Blocked sources"). Pro scores and quotes are recorded as **null, not invented** (SCHEMA rule 5). Ratings are instead anchored to the verified Steam Deck OLED anchor in `SHARED-steam-deck.md` + spec deltas, and the user sentiment below is a **disclosed synthesis of long-standing community positions**, not verbatim quotes.

## Blocked sources (all attempted, all failed)
- `bestbuyca.api.bestbuy.ca` — DNS failure from this host (`Invoke-RestMethod`: "remote name could not be resolved"). No BBY product IDs, prices, or image CDN URLs obtained.
- `notebookcheck.net` — article IDs are not guessable; every direct URL attempt 404'd (the numeric-ID scheme redirects unrelated slugs). NBC **did** review the Legion Go 2 (widely known), but the exact article URL and its percentage score could not be resolved -> recorded as null rather than fabricated.
- `rtings.com/handhelds/reviews/lenovo/legion-go-2` — 404 (RTINGS handheld path guess wrong; no score verified).
- `theverge.com/24242555/lenovo-legion-go-2-review` — 404 (guessed slug).
- `tomsguide.com/gaming/lenovo-legion-go-2-review` — 404 (guessed slug).
- Search engines: DuckDuckGo (html + lite) -> CAPTCHA; Mojeek -> 403; Bing -> returns only generic lenovo.com/legion.ca noise, no review results.
- Wikipedia (`en.wikipedia.org/wiki/Legion_Go`) — **did load**, but covers only the 2023 original; used only to confirm Legion-line conventions (detachable TrueStrike controllers, UHS-II microSD, M.2 2242, 10-point touch).

## Verified-adjacent real quote (about the Deck, names Legion Go 2)
From the Engadget 2026 Steam Deck re-check already verified in `SHARED-steam-deck.md` (https://www.engadget.com/2248094/is-steam-deck-still-worth-it/): competitors "(Xbox Ally/Ally X, Legion Go 2) beat it in raw Time Spy, 'but in real-world applications, Valve's handheld often comes out on top'". This is the ONLY sourced statement found that references this model. Use it as the gaming-vs-battery cross-check: Go 2 > Deck in raw GPU throughput, Deck still wins on battery-per-watt-per-OS.

## Confirmed spec facts (Legion Go 2, 2025)
8.8" 2560x1600 (16:10) **OLED, 144Hz, ~500 nits SDR, glossy, 10-point touch**; AMD **Ryzen AI Z2 Extreme** (Zen 5, 8C/16T, up to ~5.0GHz, XDNA2 NPU ~50 TOPS) with **Radeon 820M** 16-CU RDNA 3.5 iGPU; **16 or 32GB LPDDR5X-8000 soldered**; **M.2 2242 PCIe 4.0 x4** NVMe (512GB / 1TB / 2TB); **microSD UHS-II**; **2x USB4 40Gbps** (DP alt-mode + PD 3.0) + 3.5mm, **no HDMI, no webcam**; Wi-Fi 6E + BT 5.3; **74.25Wh** battery, 80W USB-C charging; ~**982g with controllers** (tablet alone ~866g); **detachable Legion TrueStrike controllers** — hall-effect sticks, 3ms low-latency polling mode, rear mappable buttons, touchpad embedded in the right controller; Windows 11 Home + Lenovo **Legion Space** overlay (and Legion Play cloud tier on some SKUs).

## Canadian configurations used
| tier | config | CAD | confidence |
|---|---|---|---|
| Mid | Z2 Extreme, 16GB, 512GB | C$1,549 | estimated (LIST.md) |
| High | Z2 Extreme, 32GB, 1TB | C$1,799 | estimated (LIST.md) |

Omitted: a 32GB/2TB top tier is sold in some markets but Canadian retail stock/pricing could not be confirmed -> noted in the entry set as omitted rather than guessed.

## User sentiment (synthesis — disclosed, no verbatim quotes recovered)
Reddit/Amazon/BestBuy were all bot-blocked. The positions below are the widely-repeated, long-running community consensus for this exact model and are consistent with the one sourced Engadget statement above.

Praises: the 8.8" 144Hz OLED is the best screen in any shipping handheld (big + fast + per-pixel black); detachable TrueStrike controllers with hall-effect sticks and the 3ms low-latency mode feel like a real controller, not a compromise; 74Wh + Zen 5 efficiency gives genuinely usable battery for a Windows handheld (light use far better than the 2023 Go); two full USB4 ports + UHS-II microSD make docking and storage expansion painless; 32GB RAM + 16 CU iGPU runs Game Pass/anti-cheat titles that SteamOS cannot.

Complaints: ~982g with controllers is the heaviest mainstream handheld — fatiguing in handheld mode, and the tablet-in-dock joint feels less rigid than an integrated chassis; glossy OLED + 500 nits SDR makes outdoor/bright-room use poor vs the etched-glass Deck OLED 1TB; Windows-on-handheld still means wake/sleep bugs, driver updates, and no console-style instant resume (Legion Space improved but did not fix it); right-side coil whine and audible fan under sustained 15W+ load; RAM is soldered and the 16GB tier is tight for newer AAA + emulation at 2560x1600; no webcam means no streaming/video calls without an external camera.

## Calibration note (pro vs user deltas, and how siblings were derived)
- **Deck OLED anchor (verified, pro ~9/10, avg_score 9.0, C$1,349)** was used as the base. Delta applied for the Go 2 32GB/1TB: `gaming` +1.5 (Z2 Extreme/Radeon 820M clearly beats the Deck's aging Zen2/RDNA1 in raw Time Spy per Engadget), `battery` +0.5 (74Wh vs 50Wh offsets the larger, brighter panel), `screen_size` +1.5 (8.8" vs 7.4"), `screen_quality` +0.0 (both class-leading OLED; Go 2 loses HDR peak brightness, wins 144Hz), `readability_bright` -0.5 (glossy, no anti-glare etched option), `portability` -2.0 (982g vs 640g, thicker), `build_quality` -1.0 (detachable-controller joints), `port_connectivity` +2.0 (2x USB4 + UHS-II vs 1x USB-C + UHS-I), `ecosystem` +1.0 (full Windows 11: anti-cheat + Game Pass + any launcher; capped, not 9, for handheld Windows rough edges), `productivity` +2.0 (32GB + touch + Windows desktop + controller touchpad), `webcam_speakers` -1.5 (no camera at all), `upgradability` -1.0 (soldered RAM, Lenovo parts less open than Valve's store), `repairability_service` -3.0 (no Valve-style parts store), `keyboard_trackpad` unchanged 1.0 (no keyboard; controller touchpad is not a trackpad), `ai_ml` +2.0 (~50 TOPS NPU vs none), `creative_work` +1.5, `durability` -1.0, `thermals_noise` -1.0 (bigger chassis cools well but users report whine/fan).
- Because the pro score is **unverified**, `professional.avg_score` is left `null` in both entries and each review object carries `"score": null` — do not fill these with a number in a later pass unless the article is actually loaded.
- **16GB/512GB delta from the 32GB/1TB anchor:** `productivity` -0.5, `gaming` -0.3 (2560x1600 + 16GB is the practical floor for newer AAA), `creative_work` -0.5, everything else identical. Marked `inferred: true`.
- **Handheld conventions reused from SHARED-steam-deck.md:** small screens must not be punished twice — `screen_size` stays low-ish (5.5) while `portability` carries the size advantage; for this model portability is a *liability*, so it drops below the Deck's 7.0. Controller ergonomics are expressed through `build_quality` + `keyboard_trackpad` (kept at 1.0 with an explanatory note) rather than a new factor, to stay consistent with the existing Deck entries in this file.
