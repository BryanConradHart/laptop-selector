# SHARED — Acer Predator Helios / Helios Neo (2025 Arrow Lake-HX + RTX 50 gen) — researched 2026-11-24

## Pro reviews (verbatim, live-fetched)

### A. Helios Neo 16 AI (PHN16-73) — ANCHOR for all Neo 16 + Neo 18 AI tiers
Tested config: Ultra 9 275HX / RTX 5070 Ti 140W 12GB / 32GB DDR5-6400 / 16" WQXGA 240Hz OLED / 2.7 kg / 90Wh.
- **Notebookcheck model page aggregate: 76% "good"** (1 numeric score among 5 listed reviews).
  URL: https://www.notebookcheck.net/Acer-Predator-Helios-Neo-16-AI-PHN16-73.1171432.0.html
  NBC-listed pros: strong gaming performance, premium OLED-centric experience, surprisingly portable design, 240Hz, USB4/TB4 + Wi-Fi 7. Cons: "OLED has critical flaws", runs hot, heavy at 2.7 kg, pricey vs competitors.
- **Laptop Media (via NBC), quote:** "The Acer Predator Helios Neo 16 AI (PHN16-73) is a powerful and well-balanced gaming laptop that successfully bridges the gap between raw performance and a surprisingly portable design. ... The very same OLED screen that provides its greatest strength is also the source of its most critical flaws, creating a frustrating paradox for potential buyers." (no numeric score cited by NBC)
- **Tom's Guide (Sep 2026), reviewed same 275HX/5070Ti/32GB/1TB OLED config.** No numeric score rendered in fetched page — recorded as no numeric score, quote only.
  URL: https://www.tomsguide.com/computing/gaming-laptops/acer-predator-helios-neo-16-ai-review
  Quote (verdict): "It's bright and features stupendous color coverage and accuracy. Its 240Hz refresh rate delivers smooth gaming performance, and the laptop is great for everyday tasks, too. But its flaws are hard to overlook. An ineffective cooling system, slow SSD hampered by bloatware, bulky design, and short battery life make the Neo 16 AI a hard sell."
  Additional TG cons list: "Gets very hot / Not the fastest SSD / Short battery life / Bulky for travel / So. Much. Bloatware."
- NBC lists no other numeric English scores; iTC UA 76% (RU) corroborates. RTINGS: no 2025 PHN16-73 review found — do NOT cite.

### B. Helios 18 AI (PH18-73) — ANCHOR for Helios 18 + Helios 16 AI tiers
Tested config: Ultra 9 275HX / RTX 5080 175W / 32GB / 2x1TB / 18" WQXGA 250Hz mini-LED / 3.495 kg / 99Wh / 400W PSU.
- **Notebookcheck: 89% "good"** (v8, 2025-07-04).
  URL: https://www.notebookcheck.net/Acer-Predator-Helios-18-AI-review-Finally-a-quieter-gaming-laptop-but-at-what-cost.1054468.0.html
  Verdict quote: "With 'Performance mode' enabled, the gaming laptop delivers slightly below-average performance for its class. In return, it operates more quietly than many competitors, though the optional 'Turbo mode' significantly increases noise levels. ... The system's excellent upgrade options—4 RAM slots and 3 SSD slots—along with a high-quality mini LED panel and fast Wi-Fi 7, remain clear highlights."
  Pros: 4 RAM + 3 SSD slots, TB5, fast Wi-Fi 7, bright mini LED, loud 6-speaker. Cons: lid closes too easily, slow 5GHz Wi-Fi, slightly below-average performance, SSD throttles under prolonged load, system not completely smooth.
- **TechRadar (Jul 2025), tested 5090/192GB/4K config.** Numeric star score not rendered in fetched page — quote only.
  URL: https://www.techradar.com/computing/gaming-laptops/acer-predator-helios-18-ai-review
  Quote: "The Acer Predator Helios 18 AI might be better characterized as a state-of-the-art concept rather than an actual consumer product ... if you must have unparalleled performance and don't mind sacrificing practical portability, the Predator Helios 18 AI has very few equals. You'll need some seriously deep pockets, though, and there are plenty of better value alternatives out there."
  TR cons: prohibitively expensive, barely portable, slightly compromised keyboard layout. TR value subscore: 2.5/5.
- Digital Camera World 80% (via NBC mirror listing): "If you're in the market for a very large gaming laptop, this is a good choice."

## User-vs-pro calibration (disclosed)
- BBY CA per-SKU customer ratings for all 13 Predator SKUs returned EMPTY via product API (new/marketplace listings, 0 ratings) — user sentiment below is pro-review-grounded + Predator-line owner themes (r/Acer_Gaming, NBC forum recurring reports), NOT verbatim user quotes. Gap-fill pass may attach verbatim quotes later.
- Calibration: pros like the 18" platform (NBC 89%) more than the Neo line (76%); the recurring cross-model complaints are heat, bloatware (PredatorSense/Acer suite), short battery (4-5h), and loud Turbo mode. Users on Reddit consistently report daily-use battery ~1h worse than pro WiFi-wifi tests on these Arrow Lake-HX chips — real_world_hours set accordingly.
- OLED Neo 16: "most beautiful screen you can't see" (Laptop Media) = brightness/Anti-Reflection tradeoff; matte IPS tiers rate better readability_bright, OLED rates better dark-room + response.
- Helios 18 quiet-mode finding: Performance mode is quiet but ~5-10% below class average; Turbo restores rank but at high fan noise — thermals_noise rated mid for the 18" line.

## Per-model deltas from anchors (applied in entries)
- Neo 16 OLED/5070Ti (111) = anchor A direct match (inferred: false).
- Neo 16 IPS/5060 (110): gaming −2.0, screen_quality −1.5, readability_bright +0.5 (matte), readability_dark −1.0, thermals +0.5, battery +0.3, productivity −0.7 (16GB), ai_ml −0.6. inferred: true.
- Neo 18 AI tiers (114-118): anchor A + 18" deltas: screen_size +1.5, portability −2.0, battery −0.2 (99Wh partly offsets), webcam_speakers +0.5 (6-spk FHD cam), port_connectivity +0.3, weight 3.49 kg. RAM tiers: 16GB productivity −0.8 / ai_ml −0.5 vs 32GB; 64GB +0.7/+0.5; 4TB storage +0.1 creative. inferred: true.
- Helios Neo 18 non-AI (112 5070/32, 113 5070Ti/16 on deep sale): same 18" deltas vs anchor A. inferred: true.
- Helios 18 5080 (121) = anchor B direct match (inferred: false).
- Helios 18 5070Ti/16GB (120): gaming −1.2, ai_ml −0.6, productivity −0.8 (16GB), battery +0.2. inferred: true.
- Helios 18 5090/64/4TB (122): gaming +1.0 (but NBC: 18" chassis limits GPU uplift — modest), ai_ml +1.2 (24GB VRAM), productivity +0.7; NOTE 120Hz panel per BBY listing → screen refresh down vs anchor. inferred: true.
- Helios 16 AI 5090 (123/124): anchor B with 16" deltas: screen_size −1.5, portability +1.5, gaming −0.3 (lower sustained GPU wattage in 16" chassis per NBC class findings), battery −0.3 (smaller battery vs 99Wh? Helios 16 = 90Wh). inferred: true.

## Pricing caveats (BBY CA, Black Friday window 2026-11-24)
- Neo 18 AI SKUs 20282988-92 are marketplace dock-bundle sets (laptop + 1TB drive/dock); sale price used, bundle disclosed in price.notes; marketplace "reg" prices may be inflated.
- Marketplace "Brand New" sellers: 20191220 (Neo 16 OLED), 20122654 (Neo 18), 20126058 (Helios 18 5070Ti deep sale), 20196209 (Helios 18 5090) — fulfillment/return-policy risk vs BBY-direct.
- Image URL pattern VERIFIED: https://multimedia.bbycastatic.ca/multimedia/products/1500x1500/{first3}/{first5}/{sku}.{ext} — ext varies per SKU (.jpg/.jpeg/.webp; get from BBY product API `thumbnailImage` field, swap 55x55→1500x1500). e.g. 19715863 → 197/19715/19715863.jpeg (HTTP 200); 19274602 → 192/19274/19274602.jpg. All 13 Predator entries' image URLs individually HEAD-verified 2026-11-24.
- BBY product URL pattern: https://www.bestbuy.ca/en-ca/product/{sku} (redirects to canonical PDP).
