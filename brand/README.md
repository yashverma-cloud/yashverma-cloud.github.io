# Brand kit

Social covers and LinkedIn post cards, rendered from the site's own tokens and fonts so
they always match it. Nothing in `brand/` is deployed; rendered PNGs go to
`brand/export/`, which is not committed.

```bash
npm run build                  # once: writes dist/og/cluster.svg, used by the covers
npm run brand                  # renders every cover and card into brand/export/
npm run brand -- --guides      # the same with safe-zone overlays, into brand/export/guides/
npm run brand -- --serve       # serves the templates on http://127.0.0.1:4400 for editing
```

## Sizes

Checked against each platform in September 2026. Re-check before uploading if it has been
a while; these change.

| File | Size | Safe zone used | Source |
|---|---|---|---|
| `linkedin-profile-1584x396.png` | 1584×396 | Centred 1350×220, ≥300px from the left (the profile photo covers the bottom-left, more on mobile) | [Linearity](https://www.linearity.io/blog/linkedin-size-guide/), [Snappa](https://snappa.com/blog/linkedin-banner-size/) |
| `linkedin-page-1512x256.png` | 1512×256 | Centred, clear of the logo at the bottom-left | [LinkedIn Help](https://www.linkedin.com/help/linkedin/answer/a563309/image-specifications-for-your-linkedin-pages-and-career-pages) (older guides still say 1128×191) |
| `facebook-page-1640x924.png` | 1640×924 (16:9) | The 2.4:1 band a phone keeps, clear of the profile picture | [Facebook Help](https://www.facebook.com/help/125379114252045): 16:9 on computers, 2.4:1 on phones |
| `card-*.png` | 1080×1350 (4:5) | Whole card; no text under 30px, since the feed shows it at a third to half size | — |

After uploading the Facebook cover, check it on a phone: the new layout is recent and
Facebook's help page is terse about how it crops.

## Making a card

Add an entry to `cards.json` and run `npm run brand`. Every field is plain text; leave one
out and its element is removed.

| Template | Fields |
|---|---|
| `diagram` | `label`, `title`, `diagram` (`"cluster"`, or the path of an SVG file inside `brand/`), `caption` |
| `insight` | `label`, `statement`, `source` |
| `snippet` | `label`, `title`, `code` (newlines kept), `caption` |

The three sample cards use lines from the site's own case studies.

## Brand block for the LinkedIn scheduled task

```text
Brand — Yash Verma (matches https://yashverma-cloud.github.io)

Colours
- Background: #15345C
- Panels and code blocks: #0C2442, edged with a 1px #5580B0 line
- Primary text and all line drawings: #EAF1F4
- Secondary text, captions and labels: #8FA9C4
- Hairlines and borders: #5580B0
- #F5A524 is reserved for a failure state inside a diagram. Never decoration, never a highlight.

Typeface
- Overpass: 700 headlines, 600 labels, 400 body.
- Overpass Mono 400, for real code and terminal output only.
- Sentence case everywhere. No ALL-CAPS labels.

Style
- Blueprint line drawings: white linework, axonometric. No photos, stock art, icons or emoji.
- Flat colour. No gradients, glow, drop shadows or rounded cards; 1px hairlines instead.
- Post images: 1080×1350, nothing smaller than 30px.

Footer
- Yash Verma · yashverma-cloud.github.io
```
