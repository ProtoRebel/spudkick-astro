import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';
import rehypeExternalLinks from 'rehype-external-links';
import sitemap from '@astrojs/sitemap';
import compress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://spudkick.protorebel.com',
  integrations: [
    mdx(),
    sitemap(),
    (await import("@playform/compress")).default({
      CSS: true,
      HTML: {
        "html-minifier-terser": {
          collapseBooleanAttributes: true,
          collapseInlineTagWhitespace: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          keepClosingSlash: true,
          minifyCSS: false,
          minifyJS: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: false,
          removeStyleLinkTypeAttributes: true,
          sortAttributes: true,
          sortClassName: true,
          trimCustomFragments: true,
          useShortDoctype: true
        },
      },
      Image: false,
      JavaScript: true,
      SVG: true,
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
    remarkPlugins: [remarkGfm, remarkSmartypants],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
        },
      ],
    ],
  },
  redirects: {
    '/about/': {
      destination: '/how-it-works/',
      status: 301
    },
    '/portfolio/': {
      destination: '/work/',
      status: 301
    }
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'protorebel.[hash].mjs',
          chunkFileNames: 'chunks/protorebel.[hash].mjs',
          assetFileNames: 'assets/protorebel.[hash][extname]',
        },
      },
    },
  }
})
