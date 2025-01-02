import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import remarkGfm from 'remark-gfm'
import remarkSmartypants from 'remark-smartypants'
import rehypeExternalLinks from 'rehype-external-links'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://spudkick.protorebel.com',
  integrations: [mdx(),sitemap()],
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
  style: {
    postcss: './postcss.config.cjs',
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
  },
})
