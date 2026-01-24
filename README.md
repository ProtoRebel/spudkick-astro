# SpudKick - Astro Starter Framework by ProtoRebel, LLC

[![Photo of a space potato for the Astro Starter Theme, SpudKick](/screenshot.jpg)](https://protorebel.com)

SpudKick is an Astro starter framework developed by [ProtoRebel, LLC](https://protorebel.com), based on the [Charca/Astro Blog Template](https://github.com/Charca/astro-blog-template). It provides a solid foundation for building modern, performant websites with Astro.

## Key Features

- ✅ **Astro 5.1.1:** Utilizes the latest version of the Astro static site generator.
- ✅ **Astro-native ViewTransitions:** Enables smooth transitions between pages for enhanced user experience.
- ✅ **PostCSS Support:** Integrated PostCSS for advanced CSS processing and styling.
- ✅ **ESLint + Editor Config:** Includes ESLint for code linting and consistent code style.
- ✅ **HTML Email Signature Generator:** Generates HTML email signatures.
- ✅ **Business & Social Network Data Helpers:** Provides utilities for managing business and social network information.
- ✅ **Full Markdown Support:** Supports writing content in Markdown format.
- ✅ **SEO-friendly Setup:** Optimized for search engines with canonical URLs and OpenGraph data.
- ✅ **RSS 2.0 Generation:** Generates RSS 2.0 feeds for content syndication.
- ✅ **Sitemap.xml Generation:** Automatically creates a sitemap for improved crawlability.
- ✅ **404 Page Support for Apache Hosting:** Includes a 404 error page configuration for Apache servers.
- ✅ **.htaccess Optimization:** Provides `.htaccess` configurations for gzip compression, HTTPS enforcement, and expires headers.

## Project Structure

The project is organized into the following directories:

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

### Key Directories

- `public/`: Contains static assets such as images, fonts, and favicons.
- `src/pages/`: Holds Astro components that define the website's routes and pages. Each `.astro` or `.md` file in this directory is exposed as a route based on its filename.
- `src/layouts/`: Contains layout components that provide a consistent structure for pages.
- `src/partials/`: Contains reusable UI components.
- `src/styles/`: Contains CSS files for styling the website.
- `src/utils/`: Contains utility functions for data fetching and manipulation.

## Styling

The project uses CSS files for styling, located in `src/styles/`:

- `reset.css`: A CSS reset file (based on Meyer Reset) to normalize styles across browsers.
- `variables.css`: Defines CSS variables for consistent theming and styling.
- `global.css`: Contains global styles and imports the variables and reset files.

## Fonts

The project uses the following fonts, defined in `src/styles/variables.css`:

- 'Bebas Neue' (for decorative elements)
- 'Cormorant' (a serif font)
- 'Outfit' (the default sans-serif font)

These fonts are loaded from the `public/fonts/` directory.

## Commands

All commands are run from the root of the project in the terminal:

| Command           | Action                                                        |
| :---------------- | :------------------------------------------------------------ |
| `npm install`     | Installs dependencies                                         |
| `npm run dev`     | Starts the local development server at `localhost:4321`       |
| `npm run lint`    | Lints the code using ESLint                                   |
| `npm run build`   | Runs `lint` and then builds the production site to `./dist/`  |
| `npm run preview` | Preview the built site locally before deploying              |

## Configuration

- `sandbox.config.json`: Configures the development environment.
  - `hardReloadOnChange`: Set to `false` for soft reloads during development.

## SEO

- `robots.txt`: Located in the `public/` directory. Controls crawler access.
- `Sitemap.xml`: Automatically generated for improved search engine crawlability.

## Want to learn more?

Feel free to check [Astro's documentation](https://docs.astro.build) or join Astro's [Discord server](https://astro.build/chat).
