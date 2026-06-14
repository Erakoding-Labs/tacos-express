# Taco Express — Menard, TX

Premium, conversion-focused marketing website for **Taco Express**, a family-owned
Mexican restaurant in Menard, Texas. Built as a fast, SEO-optimized, fully static site.

## Tech stack

- **SvelteKit 2** + **Svelte 5** (runes)
- **TypeScript** (strict mode)
- **Tailwind CSS v4** (theme tokens in `src/app.css`)
- **shadcn-style** reusable UI (`tailwind-variants`, `cn` util)
- **Lucide** icons (`@lucide/svelte`) + custom brand SVGs
- **Motion**-ready scroll animations (custom `reveal` IntersectionObserver action)
- Prerendered to static HTML — deploys to **Vercel** or **Cloudflare Pages**

## Pages

| Route       | Description                                              |
| ----------- | ------------------------------------------------------- |
| `/`         | Hero, features, popular menu, reviews, location, CTA    |
| `/menu`     | Full menu, 7 categories, sticky category nav            |
| `/about`    | Family story, values, stats                             |
| `/reviews`  | 4.1★ summary, rating breakdown, testimonials            |
| `/gallery`  | Filterable masonry gallery + lightbox                   |
| `/contact`  | Contact cards, message form, map, hours                 |

## Commands

```bash
npm install      # install dependencies
npm run dev      # local dev server
npm run build    # production build (prerendered static output)
npm run preview  # preview the production build
npm run check    # svelte-check type checking
```

## SEO & structured data

- Per-page `<title>`, meta description, canonical, Open Graph + Twitter cards (`src/lib/components/Seo.svelte`)
- Schema.org **Restaurant / LocalBusiness** JSON-LD with NAP, geo, hours and aggregate rating (`src/lib/seo.ts`)
- Per-page **BreadcrumbList** and a **Menu** schema on `/menu`
- `robots.txt` + generated `sitemap.xml`

## Project structure

```
src/
├─ app.css                 # Tailwind v4 theme tokens + design system
├─ lib/
│  ├─ actions/reveal.ts    # scroll-reveal IntersectionObserver action
│  ├─ components/
│  │  ├─ ui/               # Button, Badge, Stars, SectionHeading
│  │  ├─ sections/         # Hero, Features, PopularMenu, Reviews, etc.
│  │  ├─ icons/            # custom brand SVGs (Instagram, Facebook)
│  │  └─ *.svelte          # Navbar, Footer, cards, Seo, PageHero
│  ├─ data/                # business, menu, reviews, gallery (single source of truth)
│  └─ seo.ts               # SEO + JSON-LD builders
└─ routes/                 # one folder per page
```

## Customizing

- **Business info / NAP / hours** → `src/lib/data/business.ts`
- **Menu items & prices** → `src/lib/data/menu.ts`
- **Reviews** → `src/lib/data/reviews.ts`
- **Brand colors / fonts** → `@theme` block in `src/app.css`

Food photography currently uses Unsplash URLs — swap the `image` fields in the
data files for the restaurant's own photos before launch, and replace the
placeholder `url`, social links and `email` in `business.ts`.

## Deploy

The site uses `@sveltejs/adapter-auto`, which detects Vercel / Cloudflare Pages
automatically. For a specific target, swap in `@sveltejs/adapter-vercel` or
`@sveltejs/adapter-cloudflare` in `svelte.config.js`.
