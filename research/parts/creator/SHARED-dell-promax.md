# SHARED — Dell Pro Max (14/16/18, 2025 mobile workstation line = renamed Precision) — 2026-11-24

## Pro-review status (HONEST NULLS)
- Notebookcheck: guessed review URL 404 via web_fetch; DuckDuckGo search bot-walled (duck captcha). RTINGS not attempted (bot-walled per task brief). **No verifiable numeric pro scores or verbatim quotes -> `professional.avg_score: null`, `reviews: []` on all 5 entries.** Gap-fill candidates for the built-in browser: notebookcheck.net search "Dell Pro Max 16" / "Precision 5690 successor", rtings.com laptop list.
- **Real user-rating fact verified from dell.com/en-ca (2026-11-24):** Dell Pro Max 16 Laptop (MC16250) carries **4.3 / 5 from 464 reviews** on the Dell CA product page - an unusually strong retail user base for a mobile workstation. Dell CA lists 11 "Dell Pro Precision & Dell Pro Max" configs, GPU tiers offered: RTX PRO 5000 / 4000 / 3000 / 2000 / 1000 Blackwell + Intel graphics; 14" (4 models), 16" (6), 18" (1); Pro Max 16 base model from **CAD $3,124.00**, Windows 11 Pro or Ubuntu, up to 96GB RAM, OLED and WQXGA panel options.
- BBY reviews API unreachable from this worker (DNS failure for bestbuyca.api.bestbuy.ca); sibling agents report 404/empty for workstation SKUs anyway. The 5 praises / 5 complaints per entry are **synthesized from Dell Pro Max + Precision-line owner themes** and disclosed per-entry in rating_notes.

## Line positioning
- **Dell Pro Max = Dell's renamed Precision mobile line (2025 rebrand).** Suffixes: MC = mainstream tier (ex-Precision 3000), MB "Plus" = thin performance (ex-5000 class), MA "Premium" = premium thin flagship. All ship Windows 11 Pro or Ubuntu, ISV-certified pro drivers, and plug into Dell's Pro Docking line (WD22TB4 / TB22TB4 Thunderbolt docks) - docking + fleet manageability (vPro) are core purchase drivers rather than raw spec-per-dollar.
- **Pro Max 14 MC14250**: 14" WUXGA IPS, Core Ultra 7 265H + Intel Arc Pro 140T (Dell's first pro line to offer an Arc Pro discrete tier at this price), ~1.6 kg class.
- **Pro Max 16 MC16250**: 16" WUXGA base (QHD+/120Hz and OLED on higher trims), Ultra 7 255H/265H/265HX, Arc Pro iGPU-tier up to RTX PRO 2000; the 464-review CA user base; Dell CA base CAD $3,124.
- **Pro Max 16 Plus MB16250**: thin 16", Arrow Lake-HX (Ultra 7 265HX), RTX PRO 3000 Blackwell.
- **Pro Max 16 Premium MA16250**: premium thin 16", Ultra 7 265H, RTX PRO 1000 8GB, 64GB RAM standard.
- **Pro Max 18** exists on Dell CA (18" filter, RTX PRO 5000/4000) but **no Canadian retail config is enumerable** (nothing at BBY; Dell CTO is JS-walled for exact configs) - omitted and flagged here rather than invented.

## RTX PRO / Arc Pro rating guidance (inherited from SHARED-thinkpad-p.md)
- ISV certification boosts creative_work/productivity vs equivalent GeForce. ai_ml: PRO 3000 ~7, PRO 2000 ~6, PRO 1000 ~5.5, Arc Pro tier ~4-5. Gaming: PRO 3000 ~6, PRO 2000 ~5, PRO 1000 ~4.5, Arc Pro ~3.5-4.

## Verified prices (BBY API, captured in CREATOR_LIST.md 2026-11-24; sale = realistic street)
- Pro Max 14 MC14250 Arc Pro 140T/265H/32/1TB: $3,369.93 / **$2,469.93** (20200082); 2TB $2,712 (20200081); 4TB $3,110.61 (20200083) - 2TB/4TB twins omitted (storage delta only)
- Pro Max 16 MC16250 Arc Pro/255H/32/1TB: $4,524.75 / **$4,113.41** (19446125)
- Pro Max 16 120Hz RTX PRO 2000/265/32/1TB: $8,461.99 / **$5,879.97** (19680730)
- Pro Max 16 Plus MB16250 RTX PRO 3000/265HX/32/1TB: **$7,599** reg; open-box $5,899.98 (20333967)
- Pro Max 16 Premium MA16250 RTX PRO 1000/265H/64/1TB: **$7,950** reg; open-box $5,459.79 (19741333)
- BBY "Pro Max Premium 16" 20178026 ($7,787.98) - GPU/RAM tier unlisted in listing text, spec-unverifiable, omitted.
- Legacy Precision 3591 / 5690 are open-box only ($2,269.97 / $2,099.97) - not new retail, omitted.
- Image CDN pattern (verified by sibling agent): `https://multimedia.bbycastatic.ca/multimedia/products/1500x1500/<3>/<5>/<sku>.jpeg`

## Calibration note (disclosed synthesis - NO verified pro anchor)
Ratings are spec-anchored to SCHEMA rule 6 plus ThinkPad-P-line dataset anchors (16" HX desktop-replacement battery ~4-4.5 / portability ~2.5-3; thin 16" workstation battery ~6-6.5; WUXGA IPS screen_quality ~6.3; premium thin chassis thermals ~5.5). Dell's 4.3/464 CA retail average indicates above-average satisfaction for the MC tier, so user sentiment leans positive on value and keyboard/screen real estate; recurring Precision-owner complaints applied: aggressive fan curves on MC chassis, mediocre base-panel brightness/colour, soldered RAM on Plus/Premium, and heavily inflated regular vs street pricing. Expect users to rate battery ~1h worse than any future pro review on the HX configs.
