# SHARED — Chromebooks (ChromeOS) in-stock CA configs, 2026-11

Companion to `CHROME_LIST.md` (14 BBY-verified in-stock CA configs, prices + SKUs pulled
from the bestbuy.ca product API on 2026-11-24). Consolidated to **7 representative
entries** (29–35): best-value tier per brand (Lenovo / ASUS / Acer / HP), one premium
OLED, one big-screen value, and one ultra-cheap rep.

## Omitted tiers (deliberate, see CHROME_LIST.md)
- Lenovo IdeaPad Flex 5i 14 2-in-1 (i3-1315U, 8/256, $499.97, SKU 19271336) — older
  13th-gen Intel convertible; superseded in value by the HP Flip 14 entry at similar money.
- ASUS CX34 i3-1315U 8/256 ($649) and Core 5 120U 16/512 ($749) twins; CX14 non-touch twin.
- HP Chromebook Plus 14 non-convertible (i3-N305, $539.99 sale off an inflated $1,199 anchor).
- Acer Chromebook Plus CB516 16 (i3-1315U, 8/256, $749.99) — the 516 entry is the better Acer.
- Samsung Galaxy Chromebook, Acer 514/515/714, Lenovo Flex 5b, ASUS Vibe/CX55: not stocked CA.
- Sub-$300 Celeron/Kompanio 4GB units and all refurbished/open-box: excluded (one ultra-cheap rep kept).

## Professional review footprint: THIN — no numeric score obtained
Attempted 2026-11-24, all blocked (this is the honest record; **avg_score = null on every
entry and no quotes are given because none could be verified**):
- rtings.com laptop review URL → 404 (known bot-wall family)
- notebookcheck.net review + search URLs → 404 / JS form only
- tomsguide.com (two plausible review paths) → 404
- laptopmag.com CX34 review path → 404
- pcmag.com → 403 bot-wall (established earlier in this project)
- DuckDuckGo HTML search → bot challenge
=> Ratings are **platform- and spec-anchored** (ChromeOS class calibration + verified BBY
spec fields), not derived from any pro score. A gap-fill pass with the browser tool could
add quotes later.

## Platform calibration for ChromeOS (disclosed synthesis)
ChromeOS in 2026 = fast, secure, near-zero-maintenance, excellent web + Android app access,
**no desktop-class apps** (no full Office, no Adobe, no x86 installers, no real IDE/local dev
beyond Linux-container caveats on some models). Against the budget-Windows calibration used
in `SHARED-ideapad-slim3.md` (Windows ecosystem ~8.5–9 in budget, but bloatware, drivers,
malware surface, and 45% NTSC panels), Chromebooks trade app breadth for simplicity:
- **ecosystem ~4.0–5.0** across the family (Chromebook Plus AI features and Android app
  access keep the good ones at 5.0; the 4GB non-Plus ultra-cheap drops to 4.0). Compare:
  budget Windows ~8.5–9, iPadOS ~5–6.
- **gaming ~1.0–1.5** — cloud gaming (Xbox Cloud / GeForce NOW) and light Android titles
  only; no native PC games, no driver stack.
- **battery is the platform's headline win**: ChromeOS idles far lighter than Windows, so
  the same 50–60 Wh cell yields ~8–10h real web use; rate 7.0–8.5 vs 4–6h on equivalent
  budget Windows hardware.
- **AI**: Chromebook Plus AI is largely **cloud**-backed; local NPU capability is
  effectively unused → ai_ml 1.5–3.0 (Kompanio Ultra 910 gets the top of that range).
- **CPU classes verified in the CA inventory**: Core 3 N355 (efficient 2025 Alder-Lake-N
  refresh, quiet/cool, office-fine), Core i3-1315U / i5-1334U / Core 5 120U (13th-gen U,
  stronger multicore, Iris-Xe-class iGPU that is still useless for games), Kompanio 540
  (Arm, 4GB on the cheap units → genuinely underpowered), Kompanio Ultra 910 (premium Arm,
  NPU, USB4).
- **Build**: budget plastic everywhere; the OLED Lenovo and CX34 are the better-finished
  units. Chromebook heritage = decent spill/hinge tolerance for the price, but decks flex.
- **Upgradability is the family's worst factor**: RAM soldered on essentially every model,
  storage often soldered or single M.2 with no user path advertised → 2.5–3.5.
- **Longevity is a real plus**: Chromebook Plus models carry ~10 years of automatic
  ChromeOS updates (no paid OS upgrade, no driver hunting) → repairability_service 5.0–5.5
  despite the soldering.

## User-review themes (disclosed synthesis — Reddit/BBY/Amazon review pages were not
## fetchable this pass; drawn from the long-standing Chromebook Plus owner corpus)
Recurring praises: instant boot/wake, no antivirus/bloatware/forced reboots, battery far
ahead of same-price Windows laptops, silent or near-silent, Android apps from Play Store,
10-year update promise, 12 months of Google AI Pro bundled on several CA SKUs.
Recurring complaints: "my app doesn't exist" (no desktop Photoshop/Office/file-naming
workflows), printing/peripheral driver gaps, washed 45% NTSC panels on the cheap SKUs,
soldered everything (buy the RAM/storage you need up front), touchscreens without active
pen support, 4GB SKUs feeling obsolete, and ChromeOS file management surprising first-time
buyers who expected a Windows/Mac.
**Calibration note:** pro reviews of Chromebook Plus models historically land ~7/10
("great for the price, limited by the OS"). Users are **more positive than the score on
simplicity/battery and more negative on app limits** — so the ecosystem factor is held at
4–5 (the OS ceiling, not the hardware) while battery/thermals/repairability_service are
rated above same-price Windows equivalents. Apply this when adding sibling Chromebook tiers.

## Verified data sources used instead of reviews
- BBY product API per SKU (prices, spec strings, product URLs) — see CHROME_LIST.md.
- Store URL form: `https://www.bestbuy.ca/en-ca/product/<sku>`.
- Image URL form: `https://multimedia.bbycastatic.ca/multimedia/products/500x500/<3>/<sku>/<sku>.webp`
  (best-guess CDN pattern per SCHEMA rule 3; site has a fallback).
