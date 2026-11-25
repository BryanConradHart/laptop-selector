# SHARED — Microsoft Surface Pro 11 (13", Snapdragon X, 2024) — calibration notes (2026-11-24)

Scope: Surface Pro 11 (11th Edition, 13" Copilot+ PC) ONLY. Do NOT duplicate: ultrabooks agent owns Surface Laptop 8/Ultra (parts/ultrabooks/70-78); the 12" Surface Pro (2025) and X2-gen 2026 Surface Pro are separate lines (parent scope call).

## Professional review anchor (VERIFIED live)
- **CNET 8.3/10** — Lori Grunin, Jun 2024: https://www.cnet.com/tech/computing/microsoft-surface-pro-11-review-snapdragon-and-oled-deliver/
  - As-reviewed config: Snapdragon X Elite X1E-80-100, 16GB LPDDR5-8448, 1TB, 13" 2880x1920 120Hz DisplayHDR600/Dolby Vision OLED, 895 g, 48Wh, 2x USB4 + Surface Connect, Wi-Fi 7. US$1,950 as tested ($1,500 w/o accessories).
  - Quotes (verbatim): "the Surface Pro 11's Qualcomm Snapdragon X Elite finally breaks the mold, delivering surprisingly competitive performance and a lot fewer compatibility issues for mainstream use"; "Its NPU also blew the Core Ultra away"; cons listed: "Mixed graphics performance / Optional Pen and keyboard can get expensive / Can get hot while plugged in or intense usage / 16GB is not enough".
  - Display detail: ~890 nits peak 10% HDR window, ~650 nits full-screen HDR, ~575 nits SDR; well calibrated sRGB/P3; stylus digitizer grid faintly visible on white.
  - Battery: just under 13h video streaming; performance does NOT drop much on battery (unlike x86).
  - Gaming: fast in Vulkan, weak in DX12 (Adreno shared memory); "this isn't intended for AAA gaming".
- **Notebookcheck**: bot-walled/404 via web_fetch (guessed slugs redirect). URL to retry in gap-fill: https://www.notebookcheck.net/Search.8222.0.html?q=surface+pro+11 (NBC reviewed it ~90% range for OLED X Elite; unverified — do NOT cite a number).
- PCMag 403, Tom's Hardware/Tom's Guide/The Verge/Windows Central guessed slugs 404, DDG/Bing site: searches bot-walled. NBC attempted per task instruction (NBC itself never resolved; CNET anchor used instead).

## User sentiment (BBY CA aggregate ratings, VERIFIED 2026-11-24)
- OLED X Elite 16/512 (BBY 17921780 Black): **4.56★/256**; Sapphire twin 17921781 4.52★/168.
- OLED X Elite 16/1TB (17921785): 4.91★/35. OLED 32GB/1TB (17921787): 4.52★/100.
- LCD X Plus 16/512 (17921778): **4.63★/99**.
- Calibration: users rate the OLED models slightly MORE favourably than CNET's 8.3 (4.5-4.6★ ≈ 9/10), driven by screen+battery; recurring user complaints track CNET cons exactly (accessory cost, heat while charging, 16GB shared memory, DX12 gaming) plus: no 3.5mm headphone jack, early ARM app/anti-cheat gaps, Flex Keyboard extra $ that pushes real price $400+ over sticker.

## Line-wide facts (all configs)
- Display options: 13" 2880x1920 120Hz OLED (HDR600/Dolby Vision, touch) on X Elite tiers; 13" 2880x1920 60Hz IPS LCD (touch, ~400 nits, sRGB) on X Plus tiers. Both glossy.
- X Plus = "Lumen" X1P-42-100 (10-core Oryon, Adreno 840 @2.8 TFLOPs? lower GPU bin); X Elite = X1E-80-100 (12-core, Adreno 741). NPU 45 TOPS both. Fanless.
- 48Wh battery; claimed up to 14h video. Real ~11-13h light use (OLED), ~12-14h LCD.
- Ports: 2x USB-C/USB4 40Gbps (DP + PD), Surface Connect. NO headphone jack, no USB-A, no HDMI, no SD.
- Storage user-replaceable under kickstand (M.2 2230) — rare for Surface; RAM soldered. iFixit-friendly-ish.
- Keyboard NOT included: Flex Keyboard w/ Slim Pen CA $399.99 (BBY 17923155, VERIFIED) for X Elite/premium tiers; Signature Keyboard (no pen) ~CA $199.99 (est) for X Plus LCD tier. Slim Pen 2 sold separately (~CA $159.99 est). Entries price keyboard IN per site rule; tablet-only price in price.notes.
- 5MP front Windows Hello cam (1440p) + 10MP rear? — 1440p front, 4K 10MP rear on Pro 11. Wi-Fi 7/BT 5.3. 2W stereo speakers, Studio Mics.
- Weight 895 g tablet; ~1.2 kg with Flex Keyboard.
- CA launch MSRP (Jun 2024, microsoft.com/en-ca — unfetchable now, historical): X Plus 16/256 CA$1,399.99; 16/512 CA$1,649.99; X Elite OLED 16/512 CA$1,999.99; 16/1TB CA$2,199.99(?); 32GB/1TB CA$2,799.99(?); 64GB/1TB (added later) CA$3,399.99(?). Marked est where BBY regular price (inflated) can't anchor.

## Entries written (parts/convertibles/20-25)
- 20 sp11-xplus-16-256-lcd — est (tablet CA$1,399.99 + sig kbd)
- 21 sp11-xplus-16-512-lcd — VERIFIED BBY 17921778
- 22 sp11-xelite-16-512-oled — VERIFIED BBY 17921780 — CNET-anchored family
- 23 sp11-xelite-16-1tb-oled — VERIFIED BBY 17921785 (closest to CNET as-reviewed)
- 24 sp11-xelite-32-1tb-oled — VERIFIED BBY 17921787
- 25 sp11-xelite-64-1tb-oled — VERIFIED BBY 19407973
Omitted: 256GB OLED X Elite (not sold CA), Business/Win11 Pro twins, colours (Dune/Sapphire/Platinum/Violet — same config).
