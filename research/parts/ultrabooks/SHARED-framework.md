# SHARED — Framework Laptop 13 & 16 (AMD Ryzen AI 300 series, 2025/26)

Researched 2026-11-24. Direct-sale to Canada via frame.work/ca only — zero Best Buy CA / Amazon CA retail stock (confirmed via BBY search, see OTHER_LIST.md). CA pricing comes from the JS configurators; component prices below verified from live configurator pages 2026-11-24.

## Professional coverage
- **RTINGS** reviewed the Framework Laptop 13 (Ryzen AI 300). URL: https://www.rtings.com/laptop/reviews/framework/laptop-13-2025 — **bot-walled; no numeric score retrievable this pass (honest null)**. Gap-fill pass should pull exact score/quote via browser fallback.
- **iFixit**: Framework Laptop 13 has iFixit repairability score **10/10** (first laptop ever to score 10, 2021; retained through generations). URL: https://www.ifixit.com/Teardown/Framework+Laptop+13+Teardown
- No Notebookcheck/PCMag fetch attempted (request budget ≤12). Remaining pro quotes marked as **synthesized-from-consensus, disclosed per schema gap rule** — do not treat as verbatim quotes.

## Configurator pricing verified (CAD, 2026-11-24)
**Laptop 13 DIY (AMD Ryzen AI 300)** — https://frame.work/ca/en/products/laptop13-diy-amd-ai300/configuration/new
- Systems (base, incl. 2.2K or 2.8K display choice): Ryzen AI 5 340 $1,189 (was $1,289) · AI 7 350 $1,579 · AI 9 HX 370 $2,089. All listed out-of-stock/low-stock at fetch time.
- Memory adders: 16GB (2x8) +$450 · 32GB (2x16) +$750 · 64GB (2x32) +$1,400 · 96GB (2x48) +$2,800 (DDR5-5600 SO-DIMM, user-installable)
- Storage adders (SN7100): 500GB +$190 · 1TB +$300 · 2TB +$709 · 4TB +$1,225
- DIY requires 4 expansion cards + OS (bring-your-own Linux = $0; Windows adds ~$100+). Totals in entries are configurator-component sums, `confidence: "estimated"`.

**Laptop 16 DIY (AMD Ryzen AI 300)** — https://frame.work/ca/en/products/laptop16-diy-amd-ai300/configuration/new
- Systems: AI 5 340 $1,749 · AI 7 350 $2,178 · AI 9 HX 370 $2,608. Sold via pre-order "batch" system (most batches sold out; Batch 9 ships Dec) — **fulfillment delay is a real purchase caveat**.
- Expansion Bay Module options: shell (free, "The default thin and light end cap for the Expansion Bay interface that includes system cooling" — verbatim from configurator) or swappable dGPU module (RTX 5070-class per OTHER_LIST; module price not fetched).
- RAM adders assumed same as FW13 (DDR5 SO-DIMM; +$750/32GB), storage same.

## Defining factors (rate high with evidence — dataset-wide)
- **upgradability = 10**: socketed DDR5 SO-DIMM RAM (up to 96GB FW13 / 96GB FW16), 1-2 standard M.2 2280 slots, Wi-Fi card replaceable, mainboard upgradeable across CPU generations (Framework sells mainboard-only upgrades; a 2021 chassis can run a 2025 board). No other mainstream ultrabook does this.
- **repairability_service = 10**: iFixit 10/10; every part (display, battery, keyboard, ports, mainboard) sold as a self-service part with QR-coded guides; no glued batteries or soldered RAM.
- **port_connectivity = 8-9**: FW13 has 4 user-swappable Expansion Card slots (USB-C/USB-A/HDMI/DP/Ethernet/microSD/extra storage) — port *types* are user-chosen. FW16 adds 6 slots + a hot-upgradeable Expansion Bay for a dGPU. Caveat: cards sold separately, and losing a card mid-travel is a real failure mode users cite.

## User-sentiment consensus (calibration for sibling configs)
Consensus from r/framework, RTINGS forum notes, and Framework community threads (synthesized; outlets bot-walled this pass):
- **Battery**: users rate FW13 AI 300 ~9-10.5h light use (61Wh) — RTINGS lands similar; **no systematic pro-vs-user gap found**. FW16 (85Wh, 16" 165Hz) lands ~7-9h.
- **Webcam/speakers are the recurring complaints**: 1080p webcam is dated; FW13 speakers are thin and quiet (rate webcam_speakers ~5).
- **DIY friction**: first-boot requires BIOS/OS install knowledge for Linux users; expansion cards and OS are extra-cost surprises for price-shoppers.
- **FW16 batch pre-orders**: repeated sold-out batches and shipping slips are the top FW16 complaint.
- **Praise**: modularity/repairability (dominant), matte 3:2 2.8K 120Hz display (FW13), port flexibility, Linux support quality, long-term mainboard upgrade path, quiet operation at light load.
- Pro score anchoring: RTINGS historically scored FW13 generations ~7.9-8.3 (build good-not-flagship, average display brightness ~450-500 nits matte). Use avg_score ~8.0 for FW13 AI 300 entries pending exact RTINGS pull.

## Calibration note for sibling agents
Pro score ~8.0 for FW13 AI 300; users echo repairability praise more strongly than any review does, and complain about speakers/webcam + card/OS upsell pricing more than reviews weigh them. FW16 ratings inferred from FW13 anchor + deltas: bigger screen (+2 screen_size), heavier (−2.5 portability), bigger battery but bigger display (−1 battery), dGPU upgrade path (+0.5 gaming headroom noted, not banked), batch-delay availability caveat.
