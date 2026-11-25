# SHARED — ASUS ProArt PZ14 creator tablet (researched 2026-11-24)

## What is actually sold in Canada (verified via asus.com/ca-en, 2026-11-24)
- **Current CA model = ProArt PZ14 (HT7407)** — Snapdragon X2 Elite (18-core, 80 TOPS NPU), Adreno GPU, 14" 3K 144Hz VRR anti-reflection Lumina Pro OLED up to 1,000 nits, up to 32GB RAM / 1TB SSD, MPP 2.6 stylus, detachable Bluetooth keyboard + stand cover, IP52 + MIL-STD, USB4. Listed on ASUS CA ProArt laptops page with a "Deal" badge; where-to-buy page is JS-only (no enumerable CA SKUs/prices).
- **HT1406 (2025, Snapdragon X Elite/Plus) — the model in the task brief — is NO LONGER listed on asus.com/ca-en** (product URL redirects to the ProArt category). Treat as superseded by HT7407 in CA; no BBY/Amazon CA verification possible (see below).
- **PZ14 HT1401 (2024, Ryzen)** — not listed anywhere on asus.com/ca-en ProArt pages → treated as NOT sold new in CA; no entry written per task instruction.
- Entry 47.json covers the HT7407 with a disclosed estimated RAM/storage tier (16/512) because CA retail tiers could not be enumerated.

## Prices — HONEST NULLS / estimates
- BBY search API **DNS-unreachable from this machine** (`bestbuyca.api.bestbuy.ca` and `api.cdn.bestbuy.ca` both fail to resolve — same failure siblings reported). bestbuy.ca HTML search timed out. DDG html+lite both captcha-walled. Bing search returns only generic store pages, no PZ14 product hits.
- **No verified CAD price exists.** 47.json carries `price.confidence: "estimated"` at CAD $2,699 (prior: US HT1406 tiers launched ~US$1,699-2,199; X2 Elite generation + CA markup + keyboard bundle). Gap-fill: BBY API from a machine with DNS, or browser pass on bestbuy.ca / amazon.ca / asus.com/ca-en store.

## Professional reviews — HONEST NULL
- Notebookcheck reviewed the PZ14 HT1406 generation at roughly 85-87% per the task brief, but the score could NOT be confirmed from this machine (NBC article fetch 404/blocked, DDG captcha, Bing no article hits). **Do not fabricate**: 47.json has `professional.avg_score: null`, `reviews: []`.
- Gap-fill candidates for the main agent (built-in browser): DuckDuckGo "notebookcheck ProArt PZ14 review" (NBC review URL pattern `notebookcheck.net/Asus-ProArt-PZ14-*.html`), RTINGS Snapdragon X tablet comparisons.

## User-review findings
No Reddit/Amazon threads fetchable this pass (DDG captcha; Reddit bot-walled to web_fetch). The 5 praises / 5 complaints in 47.json are **synthesized from well-established Windows-on-Arm Copilot+ tablet owner themes** (Snapdragon X/X2 lines, Surface Pro 11 class, ASUS Copilot+ tablets) and disclosed per-entry. Known themes to verify in a gap-fill pass:
- Praise: OLED + Arm battery life (best-in-class for a Windows tablet), pen/dial creator ergonomics, silent fanless-ish operation, kickstand flexibility.
- Complaints: x86 app-translation gaps (creator plugins/drivers/anti-cheat), keyboard-cover typing vs clamshell, kickstand wobble/soft-surface use, soldered RAM + price of capacity tiers, Arm driver/sleep-drain quirks on ASUS units.

## Calibration note
No pro anchor → all ratings spec-anchored priors, `inferred: true`. Priors used: Snapdragon X/X2 OLED tablet ≈ battery 9, ecosystem 6 (Arm caveats per SCHEMA), gaming 3-3.5 (Adreno iGPU), 14" tablet ≈ portability 9+, ports 5 (USB4-only), pen_touch 9 (MPP 2.6 + optional dial), ai_ml 6 (80 TOPS NPU unified memory, no CUDA). If a gap-fill finds the NBC ~85-87% HT1406 review, expect it to confirm screen/battery high, gaming/ecosystem low — i.e., current ratings should need only ±0.5 tweaks, not rework.
