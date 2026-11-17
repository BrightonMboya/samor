# Samur — website

Astro site for Samur's private Tanzania & Zanzibar safaris, in English and Arabic (RTL).
Built from the "v3 — Client brand & content" page in the Samur Paper file.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run check    # type-check
```

## Routes

| English | Arabic |
| --- | --- |
| `/` | `/ar/` |
| `/itineraries/classic-tanzania` | `/ar/itineraries/classic-tanzania` |
| `/itineraries/slow-safari` | `/ar/itineraries/slow-safari` |
| `/plan-your-trip` (5-step lead form) | `/ar/plan-your-trip` |

## Where things live

- `src/i18n/ui.ts`: locales, shared UI strings (nav, footer, buttons), contact details, WhatsApp number
- `src/data/itineraries.ts`: both itineraries, day by day, in EN and AR (from the client's draft, Oct 2026)
- `src/data/home.ts`, `src/data/plan.ts`: home page and lead form copy in EN and AR
- `src/views/`: one template per page type, shared by both languages; `src/pages/` just picks the locale
- `src/styles/global.css`: brand tokens (Ivory, Forest, Fire, Gold) and the client type scale

Layout uses CSS logical properties throughout, so the same components mirror automatically for Arabic.

## Fonts

Poppins, Roboto Serif and IBM Plex Sans Arabic are self-hosted through Astro's fonts API.
GaliModern (Arabic headings) is licensed: put the file at `public/fonts/GaliModern.woff2` and it is used automatically. Until then Arabic headings fall back to IBM Plex Sans Arabic.

## Still to confirm with the client

- WhatsApp number (`contact.whatsapp` in `src/i18n/ui.ts`); the lead forms open a pre-filled WhatsApp message or email
- A form backend for "Send enquiry" (currently `mailto:`)
- Prices (all shown as "On request"), stats, testimonial, licence numbers and journal entries carried over from the v2 design
- Saudi Ministry of Tourism licence for the footer
# samor
