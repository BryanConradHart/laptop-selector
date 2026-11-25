# Apple research handoff (researched 2026-11-24)

Assembly command (from repo root):
```
node -e "const fs=require('fs');const d=require('path');const dir='research/parts/apple';const es=fs.readdirSync(dir).filter(f=>f.endsWith('.json')).sort().map(f=>JSON.parse(fs.readFileSync(d.join(dir,f),'utf8')));fs.writeFileSync('research/apple.json',JSON.stringify({category:'apple',researched:'2026-11-24',sources:['apple.com/ca','rtings.com','notebookcheck.net','reddit.com','bestbuy.ca'],entries:es},null,1));console.log(es.length+' entries')"
```
Validate: `node -e "JSON.parse(require('fs').readFileSync('research/apple.json','utf8'));console.log('OK')"`

## Status per line

### MacBook Air 13" M5 (rel 2026-03) — DONE (parts 01-04)
- 01 M5 8cGPU 16/512 $1799 (tested) | 02 10cGPU 16GB/1TB $2249 | 03 10cGPU 24/512 $2099 | 04 10cGPU 24/1TB $2549
- All prices VERIFIED on apple.com/ca buy pages.

### MacBook Air 15" M5 (rel 2026-03) — DONE (parts 05-08)
- 05 16/512 $2099 (NBC tested) | 06 24/512 $2399 | 07 16GB/1TB $2549 | 08 24/1TB $2849
- All prices VERIFIED.

### MacBook Pro 14" — DONE (parts 10-18, all prices VERIFIED on apple.com/ca; rel dates: M6 = 2026-10, M5 Pro/Max = 2026-03)
M6 tier (12c CPU/12c GPU, 3x TB4, 16/1TB base):
- 10: M6 16/1TB $2799 (Tom's 4.5/5 tested) | 11: M6 24/1TB $3099 | 12: M6 32/1TB $3399 | 13: M6 16/1TB nano-texture $3024 (nano = +$225)
M5 Pro tier (24/1TB base):
- 14: 15cCPU/16cGPU 24/1TB $3499 | 15: 15c 24GB/2TB $4249 | 16: 18cCPU/20cGPU 24/1TB $3749
M5 Max tier (36/2TB base):
- 17: 32cGPU 36/2TB $5799 | 18: 40cGPU 48/2TB $6699 (NBC 90.2% tested)

### MacBook Pro 16" (rel 2026-03) — DONE (parts 19-22, all prices VERIFIED)
- 19: M5 Pro 18c/20c 24/1TB $4199 (NBC 92.3% tested) | 20: M5 Pro 24/2TB $4949 | 21: M5 Max 32c 36/2TB $5999 | 22: M5 Max 40c 48/2TB $6999 (NBC 92.4% tested)
- Full NBC slugs used: MBP14 M5 Max = M5-Max-with-inconsistent-performance-and-throttling-issues-Apple-MacBook-Pro-14-Review.1246064.0.html; MBP16 M5 Pro = Apple-MacBook-Pro-16-2026-Review-M5-Pro-makes-one-of-the-best-multimedia-laptops-even-better.1245523.0.html; MBP16 M5 Max = Apple-s-fastest-laptop-starts-to-show-its-age-Apple-MacBook-Pro-16-2026-M5-Max-Review.1250821.0.html; MBP14 M5 2025 = Apple-MacBook-Pro-M5-2025-review-The-fastest-single-core-performance-in-the-world.1144391.0.html. Tom's MBP14 M6 = tomshardware.com/laptops/macbooks/apple-macbook-pro-14-inch-m6-review.

## Verified review data (reuse verbatim)

RTINGS:
- MBA13 M5 2026 = 8.3: "The Apple MacBook Air 13 M5 has outstanding battery life. It can easily last through a full workday without needing to recharge." / "a premium ultraportable laptop... keeps the same compact, fanless design" — rtings.com/laptop/reviews/apple/macbook-air-13-m5-2026
- MBP14 M5 2025 = 8.4: "exceptional battery life... lasts well over a full day"; "exceptional build quality... all-aluminum unibody" — rtings.com/laptop/reviews/apple/macbook-pro-14-m5-2025
- MBP16 M5 2026 = 8.2: "premium workstation laptop designed for creative and professional work"; "outstanding build quality with premium materials and incredible fit and finish" — rtings.com/laptop/reviews/apple/macbook-pro-16-m5-2026

Notebookcheck (verdict quotes):
- MBA13 M5 = 92%: "Apple's M5 SoC is the fastest single core processor you can buy"; "almost impossible to beat the price-performance ratio" — .1242707.0.html
- MBA15 M5 = 92%: "There is just nothing comparable in the Windows world"; cons: soldered RAM/storage, no Face ID, limited ports — .1244905.0.html
- MBP14 M5 2025 = 90.9%: "fastest single-core performance in the world" — .1144391.0.html
- MBP14 M5 Max = 90.2%: "the 14-inch chassis and the cooling simply cannot handle the M5 Max adequately... serious thermal throttling... very inconsistent CPU performance" — .1246064.0.html
- MBP16 M5 Pro = 92.3%: "M5 Pro SoC is a perfect fit... without throttling"; ~20% CPU / 30-50% GPU gain over M4 Pro — .1245523.0.html
- MBP16 M5 Max = 92.4%: "larger 16-inch chassis handles the powerful M5 Max much better... cooling system can only handle 70 Watts" — .1250821.0.html
(NBC review URL prefix: https://www.notebookcheck.net/<title-slug>.<id>.0.html — full slugs used in parts 01-08.)

Tom's Hardware:
- MBP 14 M6 = 4.5/5 Editor's Choice: "While the base MacBook Pro design is getting a bit tired, Apple's new M6 chip gives the 14-inch MacBook even more pep in its step"; cons: upgrades expensive, stale design
- MBA 13 M5 = Editor's Choice: "The MacBook Air M5 is the sum of years of refinements... For many, it's the best Mac around"; cons: notch, price hike

## Key specs for remaining MBP entries
- MBP14: 14.2" 3024x1964 mini-LED XDR, 1000 nits SDR / 1600 peak, 120Hz ProMotion; 72.4Wh; weights M6 1.55 / M5Pro 1.60 / M5Max 1.62 kg; M6 = 3x TB4, M5Pro/Max = 3x TB5; HDMI + SDXC + MagSafe + 3.5mm; claimed video/web: M6 24h/16h, M5Pro 22h/14h, M5Max 20h/13h; nano-texture option.
- MBP16: 16.2" 3456x2234 mini-LED XDR 120Hz; 100Wh; 2.14 kg (M5Pro) / 2.15 kg (M5Max); 140W adapter.
- M5 Pro 15c = 5 super + 10P cores. M5 Max GPU ≈ RTX 5070 class (NBC) → gaming ~4.5-5.
- Memory tiers BTO: M5Pro 16cGPU: 24/48GB; 20cGPU: 24/48/64GB; M5Max 32cGPU: 36GB; 40cGPU: 48/64/128GB. Storage: M6/M5Pro 1/2/4TB; M5Max 2/4/8TB.
- OS macOS Tahoe 26; Wi-Fi 7/BT6; 12MP Center Stage camera.

## Price deltas for estimating unlisted BTO tiers
- RAM: +$300 per +8GB tier; 32GB = +$600 over 16GB (MBP M6).
- Storage: Air 512→1TB +$450; MBP 1→2TB +$750. Nano-texture +$225.

## Image URL patterns (Apple specs CDN jpgs)
- Air 13: https://www.apple.com/v/macbook-air/specs/c/images/specs/13-inch/mba_13_hero__c067qisf51oy_large.jpg
- Air 15: .../specs/15-inch/mba_15_hero__c067qisf51oy_large.jpg (pattern-guessed, unverified)
- MBP 14: https://www.apple.com/v/macbook-pro/specs/e/images/specs/14-inch/macbook_pro_14_inch__fjlrd633eki2_large.jpg
- MBP 16: .../16-inch/macbook_pro_16_inch__cqvg4x5ohjv6_large.jpg

## Sentiment sourcing caveat
Reddit JSON API blocked (403 / login wall) — "user sentiment" is synthesized from NBC cons, Tom's Hardware cons, and Amazon.ca ratings (MBA13 M5 listing: 4.7/5, 1,378 ratings; sale price C$1,589). Note this in rating_notes of each entry (already done in parts 01-08).

## Calibration notes (SCHEMA rule 6)
- Airs: battery 9.4-9.6, gaming 3.5, portability 8.8-9.6, thermals_noise 9.4-9.5 (fanless), ports 4.5, upgradability 1.0, pen_touch 0, ecosystem 9.5.
- MBP14 M5 Max: penalize thermals_noise (severe throttling per NBC). MBP16 = best thermals of the line.
- MBP screen_quality ~9.3 (mini-LED XDR 120Hz), readability_dark 9, bright 8.5.
- praises[0..2] = strongest selling points; complaints[0..1] = likely dealbreakers (site displays these).

## Omitted (put in top-level "omitted" when assembling)
Premium "MacBook Pro with PROLED XDR Display" tandem-OLED touch line excluded; Air 32GB/2TB/4TB and MBP 48/64/128GB/4TB/8TB BTO tiers beyond the enumerated combos omitted (deltas above if needed).

## SCHEMA compliance reminder
20 canonical factors, NO "value" key. `"inferred": true` + explanation in rating_notes for any config whose ratings are extrapolated from a sibling review.
