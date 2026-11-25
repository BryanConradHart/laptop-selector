# SHARED — HP ZBook Power 16 G11 A (2025 mobile workstation, AMD)

## Line positioning
ZBook Power is HP's *entry* mobile-workstation line: EliteBook-class CPU/platform in a thick 16" chassis
derived from the consumer OMEN/Pavilion tooling, with ISV-certified NVIDIA RTX Ada (professional) GPUs and
full SODIMM + dual-M.2 serviceability. It sits below ZBook Studio/Firefly in price but above Business/EliteBook
in GPU and sustained-load capability. Target buyer: CAD/engineering student or SMB professional who needs
certified drivers (SolidWorks, Inventor, NX) without ThinkPad-P / Precision pricing.

## CA retail inventory (VERIFIED 2026-11-24, Best Buy Canada — the ONLY CA retail ZBook; Firefly/Studio are hp.com CTO/JS-walled)
Both share: Ryzen 7 PRO 8845HS (8c/16t, 3.8–5.1GHz, Radeon 780M iGPU), RTX 1000 Ada 6GB dGPU, 32GB DDR5,
16" WUXGA 1920x1200 IPS anti-glare 400 nits 100% sRGB, Wi-Fi 6E RTL8852CE + BT 5.3, 3-year HP warranty.
- SKU 20069469 — 1TB SSD — reg $3,266 / **sale $2,499** (verified via browser page render)
- SKU 19819545 — 512GB SSD — reg $3,013 / **sale $2,299** (verified via browser page render + CREATOR_LIST)
Image CDN pattern: https://multimedia.bbycastatic.ca/multimedia/products/500x500/<grp>/<sku>.jpeg

## Pro-review coverage — HONEST NULLS
- Notebookcheck: bot-walled (direct + NBC search + DDG all blocked this session). A ZBook Power G11 review is
  known to exist on NBC but the URL/score could not be confirmed — do NOT cite a number. Gap-fill candidate:
  https://www.notebookcheck.net/ (search "ZBook Power 16 G11") via built-in browser.
- RTINGS: no ZBook Power review (workstation niche not covered). URL: https://www.rtings.com/laptop (no result).
- BBY reviews API: 0 customer reviews on both SKUs (confirmed on product page: "0 Reviews").
- Therefore `professional.avg_score = null`, `reviews = []` on both entries; ratings synthesized from platform
  knowledge (Ryzen 7 PRO 8845HS + RTX 1000 Ada + 16" 400-nit 16:10 panel) and ZBook Power G10/G11 owner themes.

## Calibration disclosure (synthesis, no pro anchor)
- Battery: 8845HS is efficient and the chassis holds a large battery (≈83Wh per HP spec); expect ~7–8h light use —
  far better than Intel-HX workstations, worse than ultrabooks. Users of G10 report ~6–8h mixed.
- Users rate thermals/noise more forgivingly than for gaming laptops: workstation BIOS fans are quieter but the
  chassis throttles the Ada GPU on sustained all-core loads (PowerLimit below Studio).
- ai_ml: RTX 1000 Ada = Ampere-class, 6GB VRAM, CUDA present (good for CAD GPU/viewport + small-model fine-tune
  inference) but VRAM-starved vs 12GB+ cards → ~5.0.
- ISV/docking themes: 2x USB4, HDMI 2.1, RJ45, optional SD reader → strong port_connectivity/productivity anchoring.

## Entries
- 40.json — 1TB config (SKU 20069469), $2,499 verified
- 41.json — 512GB twin (SKU 19819545), $2,299 verified, inferred:true (ratings identical, storage-only delta)
