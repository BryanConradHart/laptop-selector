# SHARED — HP 15 / Dell 15 / Acer Nitro V 15 / Lenovo LOQ Essential (budget, CA 2026-11)

## Professional review footprint: THIN — no numeric score obtained
Same bot-wall experience as SHARED-ideapad-slim3.md / SHARED-aspire-go.md / SHARED-vivobook.md
(2026-11-24: Bing noise, DDG CAPTCHA, NBC direct-slug 404, PCMag/RTINGS bot-walled).
=> **avg_score = null on every entry in this file.** Platform-anchored ratings, no
invented quotes.
Family reputations (prior-gen pro coverage ~6-7/10 equivalents, reputation only):
- **HP 15s**: tidy-looking plastic, below-average 250-300 nit 45% NTSC panels, weak hinge,
  average keyboard, small 41Wh battery; Ultra 5 125H config historically reviewed as the
  value standout (Arc iGPU punches above class).
- **Dell 15 3530-class**: sturdy-feeling for plastic but thick/heavy (~1.9 kg), mediocre
  220-250 nit panel, bad 720p webcam, 41Wh battery; 120Hz panel is the oddity at this tier.
- **Acer Nitro V 15 (ANV15)**: reviewed ~7/10 equivalents at US retail: decent thermals
  for the price, dull panel, plasticky build, average battery; RTX 3050/5050 tiers are
  entry gaming. **No existing gaming-category entry duplicates these** — gaming/ folder
  covers RTX 4050+ tiers only (checked NOTES.md and grep; RTX 3050/5050 configs absent).
- **Lenovo LOQ Essential**: cost-reduced LOQ chassis; i5-12450HX + RTX 3050 6GB tier is
  the cheapest entry gaming Lenovo sells; no numeric CA review found.

## Verified configuration data (bestbuy.ca product API, 2026-11-24)
### HP 15 (5 in-scope SKUs; HP touch 19694196 + refurb 255 excluded per parent scope:
### touch SKU kept OUT of my 4-config HP assignment; refurb excluded as refurb)
- **19779215** Ryzen 7 7730U / 16GB DDR4-3200 / 512GB / FHD **IPS 300 nits 45% NTSC
  FreeSync** / 41Wh / claimed 10h / backlit kbd / fingerprint + face / Wi-Fi 6 BT5.4 /
  USB-C 5Gbps data-only, 2x USB-A, HDMI 1.4b, SD reader / 720p True Vision. BBY weight
  field says 5.05 kg — **shipping-carton error**; real HP 15s weight ~1.59-1.66 kg.
  $849.99 flat.
- **19220171** Core i7-1355U / 16GB DDR4 (2x8) / **1TB** / FHD (panel type unstated,
  assume TN) / claimed 7h / USB-C data-only (no PD/DP), 2x USB-A, HDMI 1.4b, SD / no
  backlight / 720p. Weight field again 2.29 kg (carton error; real ~1.69 kg). $949.97.
- **19187155** Core Ultra 5 125H (14C, Arc iGPU, NPU) / 16GB / **1TB** / FHD **IPS 300
  nits 62.5% sRGB** / claimed 8h / USB-C 10Gbps **PD + DP1.4**, 2x USB-A, HDMI 1.4b, SD /
  backlit kbd / Wi-Fi 6 BT5.4. $999.97. Best all-round HP here.
- **19633877** Core Ultra 7 255U (Series 2, 12C, NPU) / **24GB DDR5-5600** / 1TB / FHD
  (unstated panel) / claimed 7.5h / USB-C data-only / no backlight / facial recognition.
  $1,299.95.
### Dell 15 (1 in-scope config + touch noted omitted)
- **19821568** Ryzen 7 7730U / 16GB DDR4-3200 / 512GB / FHD **120Hz** (panel unstated,
  assume TN) / 41Wh / Realtek **Wi-Fi 5** 1x1 / BT 5.0 / USB-C data-only, 1x USB-A, 1x
  USB 2.0, HDMI 1.4, SD reader / no backlight / 1.9 kg / 18.9 mm. $1,199.99.
  (Sister 19779374 Core 3 100U $949.99 and touch 20294952 i5-1334U $1,299.99/$829.99
  exist on BUDGET_LIST; parent assigned me the 120Hz R7 config only.)
### Acer Nitro V 15 (2 SKUs, entry gaming)
- **19274603** Ryzen 5 7535HS (6C Zen 3) / 8GB DDR5 / 512GB / **RTX 3050 4GB** / FHD
  **165Hz IPS** / 55.03 Wh 4-cell / claimed 7.5h / **USB4 40Gbps + PD**, 3x USB-A,
  **HDMI 2.1**, RJ-45, Wi-Fi 6 2x2 / backlit / 2.1 kg. $1,399.95/$1,099.95.
- **19274599** Core i7-13620H (10C) / 16GB DDR4 / 512GB / **RTX 5050 8GB** / same chassis,
  165Hz IPS, 55 Wh, USB4, HDMI 2.1, RJ-45. $1,399.99 flat. BBY name says RTX 5050 —
  spec field confirms "RTX5050 / 8GB VRAM".
### Lenovo LOQ Essential (1 in-scope)
- **20106103** Core i5-12450HX (8C Alder Lake) / 8GB / 512GB / **RTX 3050 6GB** / FHD
  **144Hz** / Wi-Fi 6 2x2 / 1.89 kg class / $1,499.00/$1,248.00. BBY spec field is nearly
  empty (new SKU) — specs from product name + LOQ Essential platform knowledge; disclosed.

## Platform calibration used for ratings
- **Ryzen 7 7730U** (8C/16T Zen 3, Vega 8): best multicore of the HP/Dell office group,
  gaming ~2, ~5-6h on 41Wh; runs warm, fan audible.
- **Core i7-1355U** (10C, Iris Xe): gaming ~2.3, ~5h on small HP battery; strong office CPU.
- **Core Ultra 5 125H** (14C, Arc iGPU, NPU): best iGPU of the office group (gaming ~3),
  good productivity ~6.8, Arc helps light creative work; H-series sips battery → ~5h.
- **Core Ultra 7 255U** (12C Arrow-Lake-U refresh): efficient, NPU ~13 TOPS → ai_ml ~2.5,
  Intel Graphics 4Xe is weaker than Arc 125H for games (gaming ~2.2).
- **Ryzen 5 7535HS** (6C Zen 3): solid mid CPU; with RTX 3050 → gaming ~4.8 at FHD
  (DLSS helps; 4GB VRAM limits newer titles). 8GB RAM is the weak point.
- **Core i7-13620H + RTX 5050 8GB**: gaming ~6.3 (Blackwell, DLSS4 frame-gen, 8GB VRAM),
  best gaming of this group.
- **i5-12450HX + RTX 3050 6GB**: gaming ~5.0 (6GB helps vs 4GB), 8GB RAM again limiting.
- Panels: HP IPS 300-nit ones are the best office panels here (still 45% NTSC except the
  62.5% sRGB Ultra 5 unit); TN-assumed ones rate lower. Gaming panels 144-165Hz IPS are
  fast but class-dim (~300 nits, ~62% sRGB typical).
- Build: HP 15s thin plasticky + hinge flex; Dell 3530 thicker but more rigid; Nitro V
  plasticky with acceptable rigidity; LOQ Essential similar class. All rate 4.3-5.2.
- Battery: office 41Wh units → 4.5-6h real; gaming 55Wh + dGPU → 3-4h light, ~1.5h load.

## User-review themes (disclosed synthesis — BBY review endpoints null for these SKUs;
## from HP 15s / Dell 15 / Nitro V / LOQ owner corpora + class norms)
Praises: HP Ultra 5 125H config as the value standout (Arc iGPU, IPS, backlit, PD USB-C),
HP 7730U at $849 multicore bargain, Dell 120Hz smoothness, Nitro V sale price with
RTX 3050 + 165Hz + USB4 + RJ-45, LOQ 6GB VRAM over 4GB, HP backlit keyboard + fingerprint.
Complaints: HP USB-C data-only on most SKUs (no PD/monitor), HP/Dell 720p webcams,
Dell Wi-Fi 5 1x1 Realtek in a $1,200 machine + 1.9 kg heft + no backlight, Nitro V 8GB
single-channel RAM on the Ryzen SKU guts RTX 3050 performance, Nitro/LOQ battery ~3h,
Dell TN panel washout, HP carton-weight spec errors, bloatware (McAfee trial, OMEN hub
cruft on non-OMEN HPs).
Calibration note: no pro scores exist; users punish **missing USB-C functionality and
webcam quality more than spec sheets suggest**; panel dullness disappoints like the
IdeaPad/Aspire families. Gaming SKUs get user credit for raw FPS-per-dollar but users
complain about RAM ceilings and battery faster than pros do.

## Image URLs
BBY image fields empty for these SKUs; entries use the standard
`https://multimedia.bbycastatic.ca/multimedia/products/500x500/<grp>/<sku>.webp` pattern
(best-guess per SCHEMA rule 3, disclosed per-entry).

## Omitted / boundaries
- HP touch 19694196 (R5-7520U, Win11Pro) and refurb HP 255 G10 20112961: on BUDGET_LIST
  but outside the parent's 4-config HP-15 assignment (refurb excluded as refurbished stock).
- Dell touch 20294952 and Core 3 100U 19779374: outside my assigned Dell config.
- LOQ 19767601 (i7-13650HX/RTX 5050, $1,699.99) exceeds budget scope — gaming agent's
  territory; Nitro V/LOQ RTX 4050/5060 tiers already excluded by BUDGET_LIST notes.
- Verified NO duplicate Nitro V / LOQ entries exist in research/parts/gaming/ (grep clean).
