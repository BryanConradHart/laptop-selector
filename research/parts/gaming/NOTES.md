# Gaming research notes

## Flow Z13 DONE (2026-11-24)
- Wrote 30.json (32GB AI MAX+ 395, reviewed config, NBC 86.8% on GZ302EA-RU073W) + SHARED-flow-z13.md (pro quotes + user-vs-pro calibration) + 31.json (64GB, inferred: ai_ml +1.0, creative +0.5).
- Anchor review: Notebookcheck GZ302EA (Ryzen AI MAX+ 395 / 32GB) — score verified from live page; RTINGS has no 2025 GZ302EA review (404) — do not cite one.
- Prices verified via bestbuy.ca API: 32GB sku 20122746 $3,099.99 (sale $2,699.99); 64GB sku 20122747 $3,499.95 (sale $2,999.95).
- Reddit/BB user-review scraping was bot-walled; user_sentiment drawn from NBC review findings + BB product data — treat complaint/praise specifics as review-grounded, not verbatim user quotes.
- Both entries validated with node (20 canonical rating factors each).

## Predator (Helios / Helios Neo) DONE (2026-11-24)
- Wrote 120-132.json (13 BBY CA configs, $2,999.99-$7,399 sale) + SHARED-predator.md. All validated (20 factors, 5+5 sentiment); all 13 image URLs individually HEAD-verified (pattern {first3}/{first5}/{sku}.{jpg|jpeg|webp} from BBY API thumbnailImage).
- Anchors (live-fetched): Helios Neo 16 AI PHN16-73 NBC model-page aggregate **76%** (...1171432.0.html) + Laptop Media quote + Tom's Guide (no numeric score rendered, quote cited). Helios 18 AI PH18-73 NBC **89%** (...1054468.0.html) + TechRadar (no numeric score rendered, quote cited) + DCW 80%.
- 121.json (Neo 16 OLED 5070Ti) and 129.json (Helios 18 5080) = directly reviewed configs, inferred:false. All others inferred:true with spec-delta rating_notes.
- NBC slug guesses via web_fetch 404'd; DDG-lite via browser worked (later CAPTCHA'd); Bing web_fetch returned garbage. BBY product API returns EMPTY customerRating for all 13 SKUs (0 ratings) — sentiment review-grounded, disclosed.
- NOTE for parent: file numbering — 110-112 were claimed by a concurrent agent mid-run; Predator entries use 120-132.

## Raider 18 HX AI + OMEN 17 DONE (2026-11-24)
- Wrote 60.json (Raider 18 HX AI A2XWIG-085CA, RTX 5080/Ultra 9 285HX/64GB/4TB Mini-LED, BBY 20341909 $7,399.99 sale/$8,499.99 reg) + SHARED-raider-18-hx-ai.md. Anchor: NBC reviews-collection page (live, fetched) — aggregate 84.88% from 16 scores; verbatim quotes from PCWorld 80%, Laptop Mag 90%, Gizmodo 80%, Htxt 78%. No RTINGS review — do not cite one.
- Wrote 61.json + 62.json (OMEN 17 RTX 5060/Ryzen AI 9 365, 16GB $2,399 BBY 19763439; 32GB $2,749 BBY 19763449) + SHARED-omen-17.md. **No numeric pro score found** — NBC 404/Cloudflare, Bing/DDG/Ecosia/Mojeek/SearxNG bot-walled, Brave worked once then 429. professional.avg_score=null, reviews=[]; ratings inferred from OMEN 16 RTX 5060/365 sibling tier with 17.3" deltas, disclosed in rating_notes. 32GB = +0.5 productivity/ai_ml vs 16GB.
- All 3 entries validated with node (20 factors, 5+5 sentiment each).

Legion Pro 7 DONE
Legion Pro 7i DONE

## Razer Blade 14/16/18 DONE (2026-11-24)
- Wrote 140.json (anchor: Blade 16 HX370/5090/32GB/2TB, BBY 19218977 $5,699.99) + SHARED-razer-blade.md + 141-149.json (all 10 BBY CA Blade configs, $3,449.99-$6,299.99). All validated (20 factors, 5+5 sentiment).
- Anchor: NBC Blade 16 2025 RTX 5090 review **87%** — fetched live via web_fetch (...988251.0.html, found via Brave search web_fetch). Tom's Hardware review fetched (verdict quote cited; numeric score did not render on page). RTINGS not reached — budget stop; DDG/Mojeek/Bing site:/NBC search all bot-walled.
- 140 inferred:false (NBC-tested config class); 141-149 inferred:true with spec-delta rating_notes per SHARED. Blade 14/18 have NO pro numeric score (avg_score=null, reviews=[]) — browser-fallback gap-fill candidates: RTINGS + NBC Blade 14 2025 / Blade 18 2025 reviews.
- Image URL pattern HEAD-verified (200) for SKU 19218977; store URLs use https://www.bestbuy.ca/en-ca/p/{sku} numeric pattern (slug unknown, disclosed).

## Legion Pro 5 / 5i DONE (2026-11-24)
- Wrote 80.json (anchor: 275HX/5070Ti/32GB/2TB, BBY 20105503 $4,749 sale/$7,069 reg) + SHARED-legion-pro5.md + 81-91.json (all remaining BBY CA Pro 5/5i tiers, $2,749-$5,999 sale). All 12 entries validated (20 factors, 5+5 sentiment).
- Anchor: NBC Reviews Collection "Legion Pro 5 16IAX10, RTX 5070 Ti" 86.8% aggregate — URL ...1089964.0.html, found via Bing browser snapshot (direct NBC slug guesses 404; DDG/Bing/Brave/Mojeek web_fetch bot-walled). Verbatim quotes: UBR 85%, Back2Gaming 87%, 91mobiles 87%. No RTINGS/Tom's/PCMag score found — not cited.
- All prices BBY API-VERIFIED incl. 4 SKUs missing from LEGION_LIST.md (20356342/44/41, 20353371 $4,800/$4,206, 20356355/54 Win11Pro twins = same prices as 20356343/45).
- OMITTED: 20356355/20356354 (Win 11 Pro twins of 85/86, same price), 20105494 (Pro twin of 82), 19924779 (64GB/5TB 165Hz, $8,429/$5,899 — near-dup of 83/84), 19813024 (open-box 16ADR10 AMD/5070, marketplace), 17188818 (older Gen-9-era Ultra 9/5060 gift-with-purchase listing).
- BBY lists WQXGA tiers without panel type; OLED assumed per tested config (disclosed per-entry). BBY per-SKU review text unavailable (new SKUs, 0 ratings) — sentiment is pro-review + Legion-platform-grounded, disclosed.

## OMEN Max 16 DONE (2026-11-24)
- Wrote 50.json (5090/64GB/2TB - anchor, NBC 82% + Tom's 3.5/5) + SHARED-omen-max16.md + 51-54.json (5080, 5070 OLED, 5070 IPS, 5060; all inferred: true with spec-delta rating_notes).
- Anchor: NBC 16-ah000 (275HX/5090/32GB/2TB OLED) 82%, Tom's HW 3.5/5 same config. RTINGS review page exists but score bot-walled - recorded 'no numeric score found', not cited.
- Reddit r/hpgaming bot-walled (403/JS challenge); user sentiment from bestbuy.ca reviews API (per-SKU 4.06-4.24/5, n=63-87; verbatim quotes captured).
- Key calibration: users rate battery ~2h worse than NBC (3-3.5h video vs 5h50 WiFi); users like it more than pros (4.15/5 vs 7.6/10 avg).
- Prices BBY-verified: 5090 \,999.99 (19195151), 5080 \,999.99 (19195149), 5070 OLED \,499.95 (19195150), 5070 IPS \,799.95 (19320070), 5060 \,399.95 (19320067).
- All 5 entries validated with node (20 canonical factors, 5+5 sentiment).

## Legion 7i Gen 10 DONE (2026-11-24)
- Wrote 99.json (anchor: 255HX/5060/32GB/1TB OLED, BBY 19784199 $3,499.99 sale/$3,999.99 reg) + SHARED-legion7i.md + 100.json (275HX/5070 tier, inferred:true, price estimated via open-box SKU 19430020).
- **Line is 16"-only — no 14" Legion 7i Gen 10 exists** (16IAX10; NBC + BBY enumeration confirm). Only 2 config entries warranted; lenovo.com/ca CTO tiers (64GB/2TB) unenumerated (JS SPA).
- Anchor: NBC Legion 7 16IAX10 review **87%** — fetched live via web_fetch (NBC serves content to web_fetch on this slug). URL ...1122108.0.html, found via Bing browser snapshot + base64 ck/a redirect decode (technique works: decode the u= param). RTINGS 404 — not cited.
- BBY per-SKU review text 404; sentiment = NBC findings + Legion-line user themes, disclosed. BBY rating 3.67/5 (n=3) vs pro 87% calibration recorded in SHARED.
- Both entries validated with node/pwsh (20 canonical factors, 5+5 sentiment).

## Legion 5 15.1" OLED (Gen 10) DONE (2026-11-24)
- Wrote 101-105.json (all 5 BBY CA 15.1" OLED tiers, $3,579-$6,229 sale) + SHARED-legion5-oled.md. All 5 validated (20 factors, 5+5 sentiment).
- Anchors: TWO NBC reviews fetched live via web_fetch, both 87%: AMD 15AHP G10 R7 260/5060 (1047975) + Intel 15IRX10 i7-13650HX/5070 (1147338). Full battery/display/ports/maintenance data captured in SHARED. No RTINGS/Tom's score — not cited (PCMag slug 403).
- BBY API hostname unresolvable in this worker (DNS); prices reused from LEGION_LIST.md (API-verified same day). Image URLs = standard bbycastatic pattern, disclosed unverified.
- Skipped for siblings: 19253367 (WUXGA = IPS), 15.3" Gen-11 tiers, 16" tiers — see SHARED-legion5-oled.md.
- All 5 entries inferred:true (CA tiers are 5070 + i9/275HX; NBC tested 13650HX/5070 and R7 260/5060) with disclosed deltas.

## Strix SCAR 16/18 DONE (2026-11-24)
- Wrote 110.json (anchor: 275HX/5080/64GB/1TB, BBY 19186641 $3,999.97, 4.57/5 n=355) + 111.json (2026 G835LXG 290HX Plus/5090/64GB/4TB 4K Mini-LED, BBY 20182292 $7,999 sale/$8,499 reg, inferred:true) + 112.json (prev-gen G834 i9-14900HX/4080/32GB/1TB Mini-LED, BBY 17700715 $2,799.97, 4.5/5 n=505, prev-gen value pick) + SHARED-scar.md. All 3 validated (20 factors, 5+5 sentiment).
- **NO pro numeric score cited** — RTINGS SCAR 2025 slug 404; NBC/DDG/Brave/Mojeek all bot-walled before budget stop; professional.avg_score=null, reviews=[] on all 3, disclosed. Browser-fallback gap-fill candidate URLs in SHARED-scar.md.
- **SCAR 16 (G635) not sold at CA retail today** (BBY + ASUS CA store) — no entry written; do not fabricate. All CA SCAR stock is 18".
- Numbering: 101-105 were claimed by Legion 5 agents mid-session; SCAR entries use 110-112.

## OMEN 16 (mainstream, non-Max) DONE (2026-11-24)
- Wrote 160-164.json (5 BBY CA configs, $1,799.97-$3,999 sale) + SHARED-omen16.md. All 5 validated (20 factors, 5+5 sentiment), all inferred:true.
- **NO pro numeric score found** — RTINGS slug 404, NBC slug guesses 404/redirect, DDG CAPTCHA, Mojeek 403, Brave 429, Bing ignores site:. avg_score=null, reviews=[] on all 5, disclosed. Ratings anchored on SHARED-omen-max16.md (NBC 82%) with mainstream-chassis deltas (plastic build, no TB4, 2.4 kg).
- Prices BBY-API-verified. Direct-sold tiers have real BBY pools (5060: 4.21/5 n=75; HyperX 5070: 4.73/5 n=44); Ryzen AI 9 365 tiers are PC Heaven marketplace SKUs with 0 ratings and inflated anchors (disclosed per entry). Win 11 Pro twins 19968868/19968865 omitted as near-duplicates.
- Gap-fill candidate: NBC/RTINGS mainstream OMEN 16 2025 review via browser fallback.

## MSI Katana 15 HX + Vector DONE (2026-11-24)
- Wrote 180-187.json (8 consolidated CA configs: Vector 16 HX AI x2, Vector A16 HX x2, Katana 15 HX x4; $2,187.51-$3,599.99 sale) + SHARED-msi-katana-vector.md. All validated (20 factors, 5+5 sentiment, category="gaming").
- Anchor: NBC Vector 16 HX AI A2XWHG 255HX/5070 Ti **84%** — fetched live (...1039895.0.html, found via Brave web_fetch before its 429). 180 = closest CA config to tested unit (inferred:false).
- **Katana 15 HX: NO pro numeric score found** (RTINGS bot-walled, NBC slug 404, Bing ignores site:, DDG CAPTCHA, Mojeek 403, Brave 429) — avg_score=null on 184-187, ratings inferred from Vector anchor with disclosed deltas.
- Vector 17 HX: not sold at CA retail (re-confirmed via BBY API enumeration) — no entry. Near-dup SKUs (512GB twin, FHD+ Tech Nation twins, Win11Pro twins, dock bundles, 64GB tiers) omitted per ≤8 cap.
- BBY CDN (bbycastatic) blocked from this worker — image URLs = API-returned 150x150 thumbnails, disclosed. All prices BBY-API-verified; PC Heaven/PCStop/Tech Nation marketplace anchors flagged per entry.

## Strix G16 DONE (2026-11-24)- Wrote 70-75.json (all 6 in-scope BBY CA Strix G16 configs, $2,449.95-$3,699.99) + SHARED-strix-g16.md.
- Anchor: 70.json = sku 19338499 (275HX/5070/32GB/2TB/QHD+ 240Hz HDR) $3,399.95 VERIFIED; BBY customer rating 4.62/5 n=499 via search API `customerRating`.
- **NO pro numeric score cited** — researcher hard-stop hit before rtings/NBC pages were fetched; professional.avg_score=null, reviews=[] on all 6 entries per SCHEMA (disclosed per-entry). Parent may want a browser-fallback pass to attach NBC's G615 review to 70.json.
- BBY per-SKU review-text endpoints 404 and PDP HTML 403; sentiment is review-pool-grounded (disclosed in SHARED file), not verbatim quotes.
- 71-75 all inferred:true with spec-deltas per SHARED (5060 gaming -1.2, 5050 -2.4 vs 5070; panel/RAM/CPU deltas documented).
- Omitted: Ryzen 9 9955HX/5060 sku 19750417 ($3,929, above $3,700 scope cap + flagged marketplace-inflated in ROG_LIST); i7/5050 open-box/refurb dupes.
- All 6 entries validated with node (20 factors, 5+5 sentiment).
