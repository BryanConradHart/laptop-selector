# Laptop Selector

A single-page laptop recommendation site. Move importance sliders (battery,
portability, gaming, screen quality, budget, …) and the top 5 matching
**specific configurations** re-rank live, each with per-store prices in CAD,
links to Canadian stores, standout features, and dealbreakers.

## How it works

- `research/parts/<group>/*.json` — one file per laptop configuration
  (361 total): full specs, professional review scores and quotes, user
  praises/complaints, per-factor 0–10 ratings, and per-store `offers[]`
  (store, URL, live CAD price) scraped from Best Buy Canada, Amazon.ca,
  Staples, Canada Computers, and manufacturer stores.
- `build_data.js` — validates every entry and compiles the research files
  into `site/data/laptops.js`. The ranking price is the lowest listed offer.
- `site/` — static single-page app (vanilla HTML/CSS/JS, no dependencies).
  Scoring is fully data-driven: factors can be added, removed, or renamed in
  the research data without touching the app.

## Develop locally

```sh
node build_data.js   # regenerate site/data/laptops.js from research/
npm start            # serve site/ at http://localhost:8731
```

No npm install is needed — the site has zero runtime dependencies.

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) runs `node build_data.js` on
every push to `main`, sanity-checks the output, and publishes the `site/`
directory to GitHub Pages.
