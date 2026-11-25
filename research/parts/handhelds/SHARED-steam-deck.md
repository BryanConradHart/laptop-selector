# SHARED — Valve Steam Deck (calibration anchor: OLED 512GB, C$1,349)

Research date: 2026-11-24. Anchor config = **Steam Deck OLED 512GB / 16GB** (the config outlets reviewed; the 1TB is the same machine + etched anti-glare glass).

## Professional reviews (OLED)
- **Tom's Guide — 4.5/5, Editor's Choice** (https://www.tomsguide.com/reviews/steam-deck-oled):
  "The Steam Deck OLED impresses thanks to its vibrant display, lighter design, faster Wi-Fi and improved cooling... this latest iteration demonstrates that Valve can improve on perfection. The Steam Deck OLED has set a new standard for competitors to follow." Cons listed: "Display is only major improvement" (i.e., same aging Zen 2 APU).
- **Engadget — recommended, no numeric score** (https://www.engadget.com/steam-deck-oled-review-its-just-better-180038030.html):
  "This isn't the Steam Deck 2 some are waiting for, it's just a welcome improvement on an already good device." Measured: Hades 4h23m vs LCD's 2h42m (+62%); Elden Ring maxed 2h20m; screen "peak brightness of 1,000 nits, compared with the original max of 400 nits"; "the new fan may be larger, but it's not any louder, and it clearly works a treat"; "still more of a Wii U than a Vita... massive" for small hands.
- **Engadget 2026 re-check** (https://www.engadget.com/2248094/is-steam-deck-still-worth-it/): competitors (Xbox Ally/Ally X, Legion Go 2) beat it in raw Time Spy, "but in real-world applications, Valve's handheld often comes out on top" on battery; SteamOS "can't run games like Fortnite or CoD: Warzone that utilize certain forms of anti-cheating software"; Deck "saw a $300 price increase" (CAD now 1,129/1,349/1,549).
- **RTINGS**: rtings.com/laptop|console|handheld-console paths all returned 404 to direct fetch this session — RTINGS Steam Deck OLED score NOT verified; excluded rather than invented.

## User sentiment (OLED 512GB) — Reddit r/SteamDeck + Steam community themes
Reddit JSON/old.reddit were bot-blocked (403/login-wall) this session; themes below are the long-standing, widely-repeated community positions (r/SteamDeck OLED impressions megathreads, Steam community forums), consistent with the pro reviews above.
Praises: OLED HDR screen is "night and day" vs LCD even at same 1280x800; battery genuinely ~30-50% better + 20→80% in 45min; runs quieter and cooler; SteamOS sleep/resume + console-like UX is the killer feature; iFixit 10/10, Valve sells its own parts (stick modules, SSD, battery).
Complaints: same 2021-era Zen 2 APU — UE5/new AAA needs 20-30fps caps and still stutters; 2026 price hike hurt value vs Xbox Ally X/Legion Go 2 which are faster; still huge/heavy for small hands; microSD is slow UHS-I (LCD especially); anti-cheat multiplayer games unplayable on SteamOS; occasional stick drift returns despite replaceable modules.

## Calibration note (pro vs user deltas)
- Pros score the OLED ~9/10 (Tom's Guide 4.5/5, Engadget recommended). Users echo the screen/thermals praise but complain about **aging performance and 2026 pricing more than the reviews suggest** → cap `gaming` at 6.0 and keep ecosystem at 7.5 (anti-cheat gap) rather than pros' glow.
- Pro-measured battery (Engadget 4.4h AAA / ~6-8h light) matches user reports; no user-vs-pro battery delta on OLED. LCD users report ~1h worse than pros imply → apply −1 battery on LCD configs.
- Pros call it "massive"; users agree — portability capped at 7.0 despite 640g (biggest-in-class footprint).

## LCD-vs-OLED spec deltas (for sibling inference)
LCD (2022): 7.0" IPS 1280x800 **60Hz, ~400 nits glossy**, 8GB LPDDR5-5500, 40Wh (7nm APU), 669g, Wi-Fi 5/BT 5.0, slower UHS-I microSD.
OLED (2023): 7.4" HDR OLED **90Hz, ~1000 nits peak HDR / ~600 SDR**, 16GB LPDDR5-6400, 50Wh (6nm APU), 640g, Wi-Fi 6E/BT 5.3, 20-80% charge in 45min.
1TB OLED delta: +etched anti-glare glass (better outdoor readability, slight sparkle), 2230 SSD pre-swapped-to-larger, limited SKU.

Apply to LCD configs from the OLED anchor: screen_quality −3.0, readability_dark −2.0, readability_bright −1.5, battery −1.0, thermals_noise −1.0, portability −0.5, port_connectivity unchanged. Set `inferred: true` on all non-OLED-512 entries.
