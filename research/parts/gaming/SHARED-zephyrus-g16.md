# SHARED — ASUS ROG Zephyrus G16 (2025 GU605 / 2026 GU606 refresh) — anchor + calibration

Researched 2026-11-24 by the Zephyrus G16 agent. Anchors entries 80–86 (all CA G16 configs, $2,999.99–$7,699).

## Professionally reviewed configuration — RETRIEVED (browser pass on NBC)
Notebookcheck full review, loaded live via built-in browser (web_fetch bot-walled):
"A slim gaming laptop now with an RTX 5090 and 64 GB of RAM - Asus ROG Zephyrus G16 2025 review"
URL: https://www.notebookcheck.net/A-slim-gaming-laptop-now-with-an-RTX-5090-and-64-GB-of-RAM-Asus-ROG-Zephyrus-G16-2025-review.993365.0.html
Tested config: GU605CX — Core Ultra 9 285H, RTX 5090 Laptop 24GB, 64GB, 2.5K (2560x1600) OLED 240Hz G-Sync, ~1.878 kg, 90Wh, €4,799/$4,600. **NBC overall: 90% "very good"** (v8, 04/04/2025).
Verbatim quotes captured:
- Verdict: "The ROG Zephyrus G16's 2025 update offers several upgrades. Its overall performance has also increased thanks to the Arrow Lake processor and the new GeForce RTX 5090 laptop GPU. However, it's still important to know that it uses a relatively slow version of the GPU. Other improvements include Wi-Fi 7, 64 GB of RAM, and longer battery life. The input devices and speakers remain very good."
- "The weak points remain the display lid (which produced minimal creaking noises on our review model) and the hinges, which fail to prevent significant rocking. We would have liked to have seen an improvement here for the 2025 model. Asus should also revisit the slightly pulsating fan noise when running idle. The OLED panel is still a great choice for gaming, but the maximum HDR brightness is still quite low."
- "Priced at $4,600, our high-end review model is very expensive, even managing to exceed the Razer Blade 16, which is also its main competitor."
NBC Pros: very premium and compact aluminum; fantastic 240 Hz G-Sync OLED display; great gaming performance; excellent speakers; brilliant input devices; 2x SSD slots; good system performance; now with up to 64 GB RAM & Wi-Fi 7.
NBC Cons: RTX 5090 Laptop is unable to reach its potential; soldered RAM; limited maximum HDR brightness; PWM flickering.
Battery (NBC WiFi test): 9h00 (150nits) / 6h43 max brightness. Noise: fans run constantly in Performance/Turbo with slightly fluctuating (pulsating) speed; audible even at idle.
NBC series pages for sibling tiers (not opened — budget): GU605CW https://www.notebookcheck.net/Asus-ROG-Zephyrus-G16-GU605CW.1070837.0.html ; GU605CX https://www.notebookcheck.net/Asus-ROG-Zephyrus-G16-GU605CX.1065055.0.html
PCMag G16 2025 review exists at https://www.pcmag.com/reviews/asus-rog-zephyrus-g16-2025-intel (403 bot-walled via web_fetch; no score captured — do not cite a number). Tom's Hardware slug guess 404'd; digitaltrends 404'd. RTINGS not attempted (budget).

## G14-sibling findings — confirmed/differ on G16
Confirmed from G16-specific NBC review: soldered RAM ✔, PWM flickering ✔, limited HDR brightness ✔. Differ: G16 has 2x SSD slots (G14 has 1x M.2); NBC criticizes G16 fans as pulsating/constant even at idle (G14 users praised Balanced-mode quiet); G16 lid creak + hinge rocking called out (G14 not flagged).

## Anchor configuration for CA entries (entry 82)
BBY sku 19338500 — Ultra 9 285H / RTX 5070 8GB / 32GB / 1TB / 16" 2.5K OLED 240Hz — CA $3,699.95 VERIFIED (BBY search API, 2026-11-24, no sale). BBY customer rating **4.67/5, n=320** (highest-volume G16 listing → user anchor). NBC's 90% was earned by the top 5090/64GB tier; apply line-level chassis/display/battery findings to all tiers, GPU-tier deltas below.

## User sentiment anchor
BBY per-SKU review-text endpoints 404 (known dataset limitation); sentiment grounded in BBY ratings (5070 tier 4.67/5 n=320; 5060 tiers 4.64–4.65/5 n=14–17) + G16/G14-line themes documented in this dataset (SHARED-zephyrus-g14.md, SHARED-strix-g16.md cross-shopper notes). Treat specifics as review-grounded, not verbatim.
Praise themes: OLED 240Hz screen repeatedly called best-in-class for the size; premium aluminum light for a 16" (~1.85–1.9kg); speakers and keyboard/trackpad among the best on any gaming laptop; 5070 drives 2.5K gaming well with DLSS; battery (90Wh, ~9h lab WiFi) unusually good for gaming class.
Complaint themes: thin-and-light premium pricing vs thicker same-GPU rivals (Strix/Legion/Nitro); GPU TGP capped in the slim chassis (NBC: even the 5090 "unable to reach its potential"); soldered RAM; PWM flickering bothers sensitive users; lid creak/hinge rocking; 5060 tier at $3.0–3.5k seen as overpriced for 8GB.

## Calibration note (pro vs user)
Pro 90% is for the $6.5k+ 5090 tier; CA user pool (4.67/5 at the $3.7k 5070 tier) is slightly warmer on value but harsher on raw FPS-per-dollar (cross-shops Legion/Strix with same GPU for $400–800 less). NBC lab battery 9h WiFi ≈ users report ~5–7h real mixed use on OLED at higher brightness — set battery ~6.5 mid-tier. Fan pulsating-at-idle gripe is real but Balanced mode is acceptable; thermals_noise mid-range, not Legion-terrible.

## Config deltas from the GU605CX anchor (285H / 5090 / 64GB / 2.5K OLED 240)
- GPU 5090 24GB → 5080 16GB: gaming −1.0 (both TGP-capped, gap compressed), ai_ml −1.0 (16 vs 24GB VRAM), creative −0.4, battery +0.2, thermals −0.3 worse.
- → 5070 8GB: gaming −2.5, creative −0.8, ai_ml −1.5 (8GB), battery +0.4, thermals +0.4 better.
- → 5060 8GB: gaming −3.3, creative −1.0, ai_ml −1.7, battery +0.6, thermals +0.7 better.
- RAM 32GB vs 64GB (soldered): productivity −0.4, ai_ml −0.5. Storage 512GB vs 1TB: −0.2 creative (2x M.2 = user can add, upgradability floor ~3).
- 2026 GU606 refresh (Ultra 9 386H) vs 2025 GU605 (285H): same chassis/OLED family; productivity +0.2, battery −0.2, everything else ±0. Mark inferred:true (NBC tested 2025 only).
- NOTE: no RTX 5090 tier exists in the 2025 GU605 CA lineup — 5090 arrived with the 2026 GU606AX refresh ($7,699, sku 20256102).

## BBY API technique (working 2026-11-24)
`https://www.bestbuy.ca/api/v2/json/search?query=zephyrus+g16&lang=en-ca&pagesize=40` via Invoke-RestMethod + browser UA → sku/name/salePrice/regularPrice/customerRating/customerReviewCount/highResImage. (`bestbuyca.api.bestbuy.ca` from the parent brief does NOT resolve — DNS fail.) Review-text endpoints 404. Image URLs = multimedia.bbycastatic.ca CDN.
