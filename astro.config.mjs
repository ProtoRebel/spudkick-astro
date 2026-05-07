import { defineConfig, svgoOptimizer } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import compress from '@playform/compress';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
    site: 'https://spudkick-astro.pages.dev/',

    compressHTML: 'jsx',

    experimental: {
        svgOptimizer: svgoOptimizer(),
    },

    integrations: [
        mdx(),
        sitemap(),
        compress({
            CSS: false,
            HTML: false,
            Image: false,
            JavaScript: true,
            SVG: true,
        }),
    ],

    markdown: {
        shikiConfig: { theme: 'nord' },
        remarkPlugins: [remarkGfm, remarkSmartypants],
        rehypePlugins: [
            [
                rehypeExternalLinks,
                { target: '_blank', rel: ['nofollow', 'noopener', 'noreferrer'] },
            ],
        ],
    },

    vite: {
        logLevel: 'info',
        build: {
            cssCodeSplit: false,
            assetsInlineLimit: 0,
            minify: 'esbuild',
            cssMinify: 'lightningcss',
        },
    },

    devToolbar: { enabled: false },
});
