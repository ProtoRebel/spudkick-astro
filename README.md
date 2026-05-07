# SpudKick

[![Photo of a space potato for the Astro Starter Theme, SpudKick](/screenshot.jpg)](https://protorebel.com)

An Astro 6 starter framework for building fast, content-driven sites — built and maintained by [ProtoRebel, LLC](https://protorebel.com).

SpudKick gives you a working blog, portfolio, contact flow, and email signature generator out of the box, wired up with Content Collections, MDX, and aggressive production optimization. Originally based on the [Charca/Astro Blog Template](https://github.com/Charca/astro-blog-template).

---

## Tech Stack

- **[Astro 6.2.2](https://astro.build)** — Content-first web framework
- **TypeScript** — Strict mode via `astro/tsconfigs/strict`
- **MDX** — Components inline with markdown content
- **Plain CSS** — No preprocessor, native nesting and custom properties
- **ESLint + EditorConfig** — Consistent code style across the project

## Features

### Content & Routing
- **Content Layer API** — Type-safe collections for blog and work entries with Zod schemas
- **MDX support** — Mix Astro components into markdown when you need richer content
- **View transitions** — Smooth page-to-page transitions on shared elements (images, titles, navigation)
- **Custom pagination** — Offset-based with a configurable "first page extra" for featured posts
- **Draft filtering** — `draft: true` posts are visible in dev, hidden in production builds

### Performance
- **Native HTML minification** — Astro's compiler-level `compressHTML: 'jsx'`
- **SVG optimization** — Build-time SVGO pass via `experimental.svgOptimizer`
- **JS minification** — esbuild for JavaScript, Lightning CSS for stylesheets
- **Single-bundle CSS** — One long-cached CSS file, no font-flashing on navigation
- **Hashed asset filenames** — Long-cache friendly (`Cache-Control: immutable`)
- **Post-build compression** — `@playform/compress` minifies inline JS and SVG

### SEO & Discoverability
- **Sitemap generation** — Automatic via `@astrojs/sitemap`
- **OpenGraph + canonical URLs** — Set per-page from frontmatter
- **`robots.txt`** — Crawler access control in `public/`
- **Structured 404** — Custom error page with Apache integration

### Production
- **Apache `.htaccess`** — Pre-configured for HTTPS redirect, gzip/Brotli, and far-future expires headers
- **PWA-ready** — Web manifest scaffolding for installable apps
- **Email signature generator** — `/signature` route renders an HTML signature ready to paste into any client

---

## Project Structure

```
/
├── public/
│   ├── assets/
│   │   ├── blog/         # Blog post images
│   │   ├── work/         # Work/portfolio images
│   │   ├── images/       # General site images
│   │   └── video/
│   ├── fonts/            # Self-hosted font files
│   ├── .htaccess         # Apache production config
│   ├── favicon.{ico,svg}
│   ├── opengraph.jpg     # Default social share image
│   ├── manifest.webmanifest
│   └── robots.txt
├── src/
│   ├── content/
│   │   ├── blog/         # Blog post .md / .mdx files
│   │   └── work/         # Portfolio entry .md / .mdx files
│   ├── content.config.ts # Collection schemas (Zod)
│   ├── blocks/
│   │   ├── Footer.astro
│   │   └── Header.astro
│   ├── layouts/
│   │   ├── LayoutDefault.astro
│   │   └── LayoutMaintenance.astro
│   ├── pages/
│   │   ├── blog/
│   │   │   ├── [slug].astro
│   │   │   └── [...page].astro
│   │   ├── work/
│   │   │   ├── [slug].astro
│   │   │   └── index.astro
│   │   ├── 404.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   └── signature.astro
│   ├── partials/
│   │   ├── Button.astro
│   │   ├── Head.astro
│   │   ├── Logo.astro
│   │   └── Nav.astro
│   ├── styles/
│   │   ├── global.css
│   │   ├── reset.css
│   │   └── variables.css
│   └── utils/
│       ├── getBlog.ts
│       ├── getBusinessInfo.ts
│       ├── getWork.ts
│       └── getSocial.ts
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## Content Collections

Content lives in `src/content/blog/` and `src/content/work/` as markdown or MDX files. Schemas are defined in `src/content.config.ts` and validated at build time via Zod.

### Adding a blog post

Create `src/content/blog/my-post.md` with frontmatter:

```yaml
---
title: "Post title"
subTitle: "Hook line"
publishDate: 2026-05-06
description: "One-sentence summary for cards and SEO"
featuredImage:
  img: my-post.jpg
  title: "Image alt text"
cta:
  before: "Want to"
  words: ["build", "ship", "scale"]
  after: "your next site?"
draft: false
---

Your markdown content here.
```

Drafts (`draft: true`) render in development but are filtered out of production builds.

### Adding a work entry

See `src/content.config.ts` for the full work schema. Image paths are relative to the `imgPath` field, allowing per-project image folders under `public/assets/work/<client>/`.

### Switching to MDX

Rename any `.md` file to `.mdx` to start using component imports inline. The glob pattern matches both extensions automatically — no config change needed.

---

## Styling

Plain CSS using modern features. No preprocessor.

- **`reset.css`** — Meyer-style reset, normalizes browser defaults
- **`variables.css`** — Custom properties for colors, spacing, typography, transitions
- **`global.css`** — Site-wide styles, imports the above

Native CSS nesting is used throughout. All design tokens are CSS custom properties — themable at the `:root` level.

### Fonts

Self-hosted from `public/fonts/`:

- **Bebas Neue** — Display headings, decorative elements
- **Cormorant** — Serif accents
- **Outfit** — Default sans-serif body text

---

## Commands

| Command           | Action                                                        |
| :---------------- | :------------------------------------------------------------ |
| `npm install`     | Install dependencies                                          |
| `npm run dev`     | Start the dev server at `localhost:4321`                      |
| `npm run lint`    | Lint with ESLint                                              |
| `npm run build`   | Lint, then build to `./dist/`                                 |
| `npm run preview` | Preview the production build locally                          |

---

## Configuration

### `astro.config.mjs`
Site URL, integrations (MDX, sitemap, compress), markdown plugins (GFM, smartypants, external links), redirects, Vite build options, and the experimental SVG optimizer.

### `tsconfig.json`
Extends `astro/tsconfigs/strict` for full type safety with the Content Layer API.

### `content.config.ts`
Defines the `blog` and `work` collections with Zod schemas. Frontmatter is validated against these at build time — typos in field names fail the build instead of silently breaking templates.

---

## Production Deployment

The included `.htaccess` is tuned for Apache and handles:

- HTTPS enforcement
- Gzip/Brotli compression negotiation
- Far-future cache headers for hashed assets
- SPA-style fallback for the 404 page

For other hosts (Cloudflare Pages, Netlify, Vercel), the `.htaccess` is ignored and Astro's static output works as-is. Configure cache headers via your host's preferred method.

---

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [Content Collections Guide](https://docs.astro.build/en/guides/content-collections/)
- [Astro Discord](https://astro.build/chat)
