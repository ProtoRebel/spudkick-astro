![Photo of a space potato for the Astro Starter Theme, SpudKick](/Users/dustinjones/Desktop/PROJECTS/SpudKick/spudkick-astro/screenshot.jpg "Space Potato")

# SpudKick
An Astro starter framework by [ProtoRebel, LLC](https://protorebel.com).
Based on the [Charca/Astro Blog Template](https://github.com/Charca/astro-blog-template)

## Features

- ✅ Astro 5.1.1
- ✅ Astro-native ViewTransitions
- ✅ PostCSS Support in Globals (not templates)
- ✅ ESLint + Editor Config
- ✅ HTML Email Signature Generator
- ✅ Business & Social Network data helpers
- ✅ Full Markdown support
- ✅ SEO-friendly setup with canonical URLs and OpenGraph data
- ✅ RSS 2.0 generation
- ✅ Sitemap.xml generation
- ✅ 404 Page Support for Apache Hosting
- ✅ .htaccess optimization with gzip, force https, and expires

## Project Structure

Inside of the project, you'll see the following folders and files:

```
/
├── public/
│   ├── assets/
│   │   ├── blog/
│   │   ├── images/
│   │   ├── portfolio/
│   │   └── video/
│   ├── fonts/
│   │   └── fontFile.ttf
│   ├── .htaccess
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── opengraph.jpg
│   └── robots.txt
├── src/
│   ├── blocks/
│   │   ├── Footer.astro
│   │   └── Header.astro
│   ├── layouts/
│   │   ├── LayoutDefault.astro
│   │   └── LayoutMaintenance.astro
│   ├── pages/
│   │   ├── blog/
│   │   │   ├── [slug].astro
│   │   │   └── index.astro
│   │   ├── portfolio/
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
│       ├── getBlogData.ts
│       ├── getBusinessInfo.ts
│       ├── getPortfolioData.ts
│       └── getSocial.ts
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images and fonts, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                                    |
|:------------------|:----------------------------------------------------------|
| `npm install`     | Installs dependencies                                     |
| `npm run dev`     | Starts local dev server at `localhost:4321`               |
| `npm run lint`    | Build your production site to `./dist/`                   |
| `npm run build`   | Runs `lint` then builds your production site to `./dist/` |
| `npm run preview` | Preview your build locally, before deploying              |

## Want to learn more?

Feel free to check [Astro's documentation](https://github.com/withastro/astro) or jump into Astro's [Discord server](https://astro.build/chat).
