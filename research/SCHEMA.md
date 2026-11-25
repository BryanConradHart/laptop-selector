# Research data schema (v1) — read this fully before writing any research/<category>.json

Each file `research/<category>.json` has this shape:

```json
{
  "category": "apple",
  "researched": "2026-11-24",
  "sources": ["rtings.com", "notebookcheck.net", "tomshardware.com", "pcmag.com", "theverge.com", "reddit.com", "bestbuy.ca", "amazon.ca"],
  "entries": [ ...entry objects... ]
}
```

## Entry object (one entry = ONE specific purchasable configuration)

```json
{
  "id": "mbp14-m5pro-24-1tb",
  "line": "Apple MacBook Pro 14-inch (2025, M5 Pro)",
  "config_name": "MacBook Pro 14-inch — M5 Pro 14-core CPU / 20-core GPU, 24GB RAM, 1TB SSD",
  "tier": "Mid",
  "category": "apple",
  "ecosystem": "macOS",
  "form_factor": "clamshell",
  "release": "2025-10",
  "specs": {
    "cpu": "Apple M5 Pro (14-core: 10P+4E)",
    "cpu_cores": 14,
    "gpu": "Apple M5 Pro 20-core GPU (integrated)",
    "gpu_type": "integrated",
    "ram_gb": 24,
    "ram_type": "unified/soldered",
    "storage_gb": 1000,
    "storage_type": "NVMe soldered",
    "screen_size_in": 14.0,
    "display_type": "Mini-LED IPS (Liquid Retina XDR)",
    "resolution": "3024x1964",
    "refresh_hz": 120,
    "brightness_sdr_nits": 600,
    "brightness_hdr_nits": 1000,
    "weight_kg": 1.60,
    "ports": "3x TB4/USB-C, HDMI, SDXC, MagSafe 3, 3.5mm",
    "wireless": "Wi-Fi 7, BT 5.3",
    "webcam": "12MP center stage",
    "speakers": "6-speaker",
    "keyboard_notes": "Magic Keyboard, Touch ID",
    "pen_support": "none",
    "os": "macOS Tahoe 26"
  },
  "battery": {
    "claimed_hours": 22,
    "real_world_hours": 16.5,
    "notes": "Web browsing @ 150 nits. Video playback up to 24h claimed."
  },
  "price": {
    "cad": 2699,
    "currency": "CAD",
    "store": "apple.com/ca",
    "store_url": "https://www.apple.com/ca/shop/buy-mac/macbook-pro/14-inch-m5-pro",
    "alternate_urls": ["https://www.bestbuy.ca/..."],
    "confidence": "verified|estimated",
    "notes": ""
  },
  "image_url": "https://.../official-product-image.jpg",
  "professional": {
    "avg_score": 8.9,
    "reviews": [
      { "outlet": "RTINGS", "score": "8.9/10", "url": "https://...", "quote": "actual quote text" },
      { "outlet": "Notebookcheck", "score": "91%", "url": "https://...", "quote": "actual quote text" }
    ]
  },
  "user_sentiment": {
    "praises": ["...", "...", "...", "...", "..."],
    "complaints": ["...", "...", "...", "...", "..."]
  },
  "design_philosophy": "2-4 sentences on the line's design philosophy and how this config fits it.",
  "ratings": { "battery": 9.5, "screen_size": 7.5, "...all 20 canonical factors...": 0 },
  "rating_notes": "Optional notes justifying unusual ratings."
}
```

## The 20 canonical rating factors (every entry MUST have all of these, 0–10, one decimal allowed)

NOTE: there is deliberately **no "value" factor** — value is subjective and is expressed by the user's slider weights vs price, not baked into per-entry ratings.

| key | meaning (what a 10 looks like) |
|---|---|
| battery | real-world battery life (10 = 15h+ light use) |
| screen_size | how large/usable the display is (10 = 17in+; small screens score lower here — portability factor covers their other strengths) |
| screen_quality | color accuracy, contrast, HDR, viewing angles |
| readability_dark | low minimum brightness, no backlight bleed, matte vs glossy in dark rooms |
| readability_bright | peak nits + anti-glare handling outdoors/office light |
| ecosystem | how well the machine's OS/platform fits mainstream software + peripheral + phone ecosystem (macOS/Windows x86 = high; ARM Windows = app-translation caveats; ChromeOS = web-only caveats) |
| gaming | native gaming capability at native res incl. DLSS/frame-gen, driver health |
| productivity | CPU+RAM+keyboard+screen for office/code/work multitasking |
| portability | weight + thickness + charger size |
| build_quality | chassis rigidity, hinge, keyboard deck flex, fit/finish |
| thermals_noise | sustained load temps and fan noise |
| port_connectivity | count/variety/speed of ports, docking |
| creative_work | display + GPU + media slots for photo/video/3D |
| keyboard_trackpad | typing feel, trackpad size/quality |
| webcam_speakers | camera quality, mic, speaker volume/quality |
| upgradability | RAM/storage/WiFi upgrade paths, repairability (iFixit) |
| ai_ml | local AI/ML capability: NPU TOPS, GPU VRAM, unified memory, CUDA availability |
| pen_touch | stylus/touch support usefulness (0 if none) |
| repairability_service | parts availability, warranty, self-service |
| durability | ruggedness, spill resistance, MIL-STD, long-term reliability |

You MAY add extra factors beyond these 20 if research shows they matter (add the same key to every entry in your file). Do not rename the canonical keys and do not add a "value" factor.

## Rules
1. **Specific configurations only.** Every screen size × CPU × GPU × RAM/storage tier actually sold = its own entry. E.g. a line with 14"/16", two CPUs, three RAM tiers → enumerate the realistic purchasable combos (aim for breadth; you may consolidate identical-except-RAM combos only if you list the RAM variants inside `config_name` — prefer separate entries).
2. **Prices in CAD** from bestbuy.ca, amazon.ca, or the Canadian manufacturer store (apple.com/ca, lenovo.com/ca, dell.ca, hp.com/ca, asus.com/en/ca, etc.). If you cannot verify exactly, give your best current estimate and set `price.confidence = "estimated"`.
3. **Image URLs**: prefer manufacturer press/product image CDN URLs (e.g. `https://cdn.shopify.com/...`, `https://pisces.bbystreet.com/...`, `https://m.media-amazon.com/images/I/...`). They must be direct image files (jpg/png/webp). If you cannot confirm a direct image URL, put your best guess and note it in `rating_notes` — the site has a fallback.
4. **Store URLs**: a real product page URL for that configuration (or closest parent page with the config selector).
5. **Quotes must be real** — copy actual sentences from reviews (paraphrase-free, may be trimmed with "..."). Never invent a quote or a score. If an outlet gave no numeric score, use `"score": "recommended"` etc.
6. **Ratings 0–10** must be consistent across the whole dataset: a flagship gaming laptop gets ~9-10 gaming, a MacBook Air ~2-3. Calibrate: MacBook Air 15 M4 ≈ battery 9.5 / gaming 2.5 / portability 9; Legion Pro 7i ≈ gaming 9.5 / battery 4 / portability 3.
7. 5 praises + 5 complaints per entry, drawn from real user reviews (Reddit, Amazon, BestBuy, Notebookcheck forums). They must be specific, not generic ("coil whine on right side under load", not "sometimes loud").
8. Aim for **10–18 entries per category file** covering every tier. If a line has more tiers than fits, include the full range of the most-shopped lines and note omitted tiers in a top-level `"omitted"` string.
9. Write valid JSON (UTF-8, no comments, no trailing commas). Validate before finishing, e.g.:
   `powershell -c "Get-Content -Raw research/<cat>.json | ConvertFrom-Json | Out-Null; 'OK'"`
10. Free public sources only. Today is 2026-11-24 — prefer 2025/2026 models that are CURRENTLY for sale; include a discounted previous-gen model per category only if it is a notable value pick today.

## Per-model research order (IMPORTANT)

Research is fanned out per model (not per category). Within a model:
1. **Research the professionally-reviewed configuration FIRST** (the exact config outlets like RTINGS/NBC tested). Write its entry, then write `research/parts/<group>/SHARED-<model>.md` containing: the pro scores+quotes, the user-review findings FOR THAT SAME CONFIG, and an explicit calibration note ("users rate battery ~1h worse than RTINGS on this config", "pro score 8.8 but users complain X more than the review suggests").
2. Sibling-config agents read SHARED-<model>.md first and reuse it: apply the recorded calibration when adjusting ratings for other tiers, and don't re-fetch the shared reviews.
This keeps user-vs-pro anchoring consistent across every config of a line.

**Fan-out sizing rule:** context weight is driven by research footprint, not config count. HEAVY models (mass-market/popular: huge review volumes, many user threads, many pro reviews — e.g. MacBook Air/Pro, XPS 13, Legion Pro 7, 50-series gaming flagships) need few concurrent agents: run them with at most 1 other active subagent (≤3 total with main), and cap sentiment sampling hard (3 threads max, skim, extract 5+5 quickly). LIGHT/niche models (few reviews, small install base — handhelds, creator niche, new lines) are context-cheap even with several configs: run up to 3 concurrent (≤4 total). When a heavy model is in flight, temporarily throttle concurrency until it completes. Output is always one entry per configuration regardless of model size.

## Cross-configuration inference (IMPORTANT — reviews never cover every config)

Professional reviews usually test one configuration per line. You must still enumerate EVERY sold configuration. For untested configs:
1. **Anchor**: take the pro review of the tested config.
2. **Cross-check**: find user reviews of that SAME tested config (Reddit/Amazon/BestBuy) and note where users disagree with the pro (this calibrates pro-score vs real-world).
3. **Infer**: for each untested config in the line, adjust the anchored ratings by known spec deltas (e.g. bigger GPU tier → gaming +1.5, battery −1; more RAM → productivity +0.5; larger screen → screen_size up, portability down). Keep adjustments modest and consistent.
4. Set `"inferred": true` on entries whose ratings are extrapolated from a sibling config's review, and say what they were inferred from in `rating_notes` (e.g. "ratings inferred from RTX 5070 Ti config reviewed by Notebookcheck; +1.5 gaming / −1 battery for 5080 tier").
This inference disclosure is what makes the dataset honest and usable.

## Researcher budget rule (hard stop)

Per-model researchers: if you hit ~20 tool calls without solid review data (bot-walls), STOP fetching — write your entries using whatever you have (list prices + honest "no numeric score found" + disclosed synthesis), validate, and exit. A mediocre entry beats none; a gap-fill pass can improve it later.

## Bot-walled sources → browser fallback (secondary workers)
`web_fetch` is bot-walled by Reddit, Notebookcheck (sometimes), PCMag, TweakTown and some OEM stores. The **built-in browser CAN load them** (verified on reddit.com). Technique for a secondary worker: openBrowserPage → navigate to the URL (www.reddit.com works; old.reddit and *.json require login/CORS — don't use them) → wait ~5s → extract with Playwright: post titles+scores via `shreddit-post` attributes, comment text via `shreddit-comment [slot="comment"]` or `readPage` snapshot. Best used as a SECOND pass AFTER a model's primary research completed (it's slow/heavy): fill only the gaps the primary agent flagged (missing quotes, thin user sentiment). If a page won't render, give up — synthesized-from-consent sources are acceptable when disclosed.

## Categories in scope (one file each)
apple · windows-ultrabooks · gaming-laptops · budget-value · creator-workstation · convertibles-2in1 (includes Windows tablets with keyboard covers priced in, e.g. Surface Pro) · **tablets-ios-android** (iPads + Android tablets, price INCLUDING the official keyboard cover where one exists; ecosystem factor matters a lot here) · chromebooks · handheld-pcs · other-lines (MSI, LG gram, Acer, Gigabyte, Samsung Galaxy Book, Framework, Dynabotype, etc.)

For tablets/2-in-1s: rate keyboard_trackpad based on the official keyboard accessory (that's what the bundled price buys), set `form_factor` to "tablet" or "convertible", and set `ecosystem` to "iPadOS" / "Android" / "Windows". The `ecosystem` rating should honestly reflect desktop-app gaps (e.g. iPadOS ~5-6 for pro desktop workflows, ~9 for media/casual).
