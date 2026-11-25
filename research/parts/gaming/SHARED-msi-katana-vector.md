# MSI Katana 15 HX + MSI Vector (16/17 HX) — shared research (2026-11-24)

## Pro coverage
### Vector 16 HX AI — ANCHOR (live-fetched)
- Notebookcheck: "MSI Vector 16 HX AI review: A feature-rich gaming laptop powered by RTX 5070 Ti"
  URL: https://www.notebookcheck.net/MSI-Vector-16-HX-AI-review-A-feature-rich-gaming-laptop-powered-by-RTX-5070-Ti.1039895.0.html
  Tested: A2XWHG(074), Core Ultra 7 255HX (80W PL1 sustained, Arrow Lake-HX 20c) + RTX 5070 Ti 12GB, 16" WQXGA 240Hz IPS (near-full sRGB + DCI-P3), 16GB 2x8 SO-DIMM, 512GB SSD. Score **84% ("good")**, 2025-06-20.
  Verbatim verdict lines: "At first glance, MSI scores highly with the Vector 16 HX AI." / "this 16-inch machine still earns a solid overall rating, though it falls just short of a 'Very Good'." / "What we found most frustrating, however, was the suboptimal fan control. In AI mode, the Vector 16 remains clearly audible even when idle." / "The power supply is particularly hefty in both size and weight, and would be more appropriate for a notebook featuring an RTX 5080 or 5090."
  NBC Pros: consistent CPU and GPU performance; two M.2 and SO-DIMM slots; sturdy chassis; two Thunderbolt 5 ports; wide colour gamut; privacy shutter; 90 Wh battery.
  NBC Cons: unconventional keyboard layout; limited display opening angle; SSD could be better; bulky rear section; awkward maintenance; large and heavy power supply; noticeably loud when idle.
  (NBC also cites a Katana 17 HX RTX 5070 review at notebookcheck.com slug 1033999 — "Luft nach oben beim RTX-5070-Gamer" — German page, not fetched; do not cite a numeric score from it.)
### Katana 15 HX (B14VFK, i7-14650HX + RTX 5060/5070)
- **No numeric pro score found.** RTINGS bot-walled/404, NBC slug guesses 404, Bing ignores site:, DDG lite CAPTCHA, Mojeek 403, Brave 429 after one success. professional.avg_score=null on all Katana entries — do not fabricate.
- Ratings for Katana inferred from Vector 16 HX AI anchor with budget-chassis deltas (see below) + general Katana-line knowledge (plastic 15.6" value chassis, i7-14650HX 14th-gen refresh, RTX 50 tier).

## User sentiment grounding
- BBY per-SKU customerRating: all Katana/Vector SKUs return count=1, rating blank (new/marketplace listings) — no review text pools available (per-SKU review endpoints 404, PDP 403).
- Brave search surfaced r/MSILaptops thread "Thinking About Buying MSI Vector 16 HX AI, But Reviews Scare Me… Help!" with quote: "I have zero complaints on mine. So far has been an absolute unit" (reddit.com/r/MSILaptops/comments/1qxl1qn) — owners generally satisfied despite scary reviews; recurring owner themes: loud fan curves out of the box (matches NBC fan-control gripe), MSI Center bloat, but strong price/perf and sturdy feel.
- Sentiment lists in entries are review-grounded syntheses (NBC findings + MSI-line user themes), NOT verbatim user quotes — disclosed per entry.

## Calibration notes (pro vs users)
- Users rate the Vector 16 HX AI slightly MORE favourably than NBC's 84% (Reddit owners "zero complaints" vs NBC's fan/PSU gripes); fan noise idle is the one gripe both sides share — keep thermals_noise modest (6) not punitive.
- Battery: NBC tested 90Wh Vector but full battery section not captured; typical Arrow Lake-HX + RTX 5070 Ti real-world light use ≈ 4.5-5.5h. Set real_world_hours ~4.5 for Vector tiers, ~4 for Katana (smaller cell, 14th-gen HX). Estimated, disclosed.
- Katana deltas vs Vector anchor: gaming −2.5 (5060) / −1.2 (5070) vs 5070 Ti; build −2 (plastic vs sturdy); port_connectivity −2.5 (no TB5); portability +1 (2.3kg 15.6" vs 2.7kg 16"); screen_size −1; battery −0.5; keyboard_trackpad −0.5 (cramped budget layout); productivity −0.5 (14650HX vs 255HX).

## Config inventory (BBY API-verified 2026-11-24, sale prices)
Katana 15 HX (i7-14650HX, 15.6" QHD/WQHD 165Hz IPS): 5060/16GB/1TB $2,187.51 (20012913); 5060/32GB/1TB $2,637.87 (20012908); 5070/16GB/1TB $2,549 (19457119); 5070/32GB/1TB $2,949 (19457121); 5070/32GB/2TB $3,199 (19457117). PC Heaven/PCStop marketplace SKUs with inflated reg anchors (~40% "sale") — disclosed.
Vector 16 HX AI (255HX, RTX 5070 Ti): 16GB/1TB FHD+ 144Hz $2,499.99 (20074106); QHD+ 240Hz 32GB/1TB $3,499 (19966926). Vector A16 HX (AMD): 8840HX/5070Ti/32GB/1TB QHD+ $2,999.99 (20177990); 8940HX/5080/32GB/1TB $3,599.99 (20074105, direct-sold).
Omitted as near-dups: 512GB twin 20074104; FHD+ Tech Nation twins 20306667/66/68; Win11Pro twins; 64GB/2TB 19966928; many PC Heaven dock-bundle SKUs.
Image URLs: bbycastatic CDN blocked from this worker (all HEAD/GET failed); using the API-returned thumbnailImage URLs (150x150 path) — direct image files, disclosed. Store URLs use https://www.bestbuy.ca/en-ca/product/{sku} numeric pattern.
Vector 17 HX: not sold at CA retail today (confirmed again in enumeration) — no entry.
