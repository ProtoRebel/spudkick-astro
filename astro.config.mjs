import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';
import rehypeExternalLinks from 'rehype-external-links';
import sitemap from '@astrojs/sitemap';
import compress from '@playform/compress';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
	site: 'https://gemstateburlesque-astro.pages.dev/',

	integrations: [
		mdx(),
		sitemap(),
		(await import("@playform/compress")).default({
			CSS: false, // ← FIXED: was true, breaking styles
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
					sortClassName: false, // ← FIXED: was true, can break BEM/ordered classnames
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
				{ target: '_blank' },
			],
		],
	},

	redirects: {
		'/about/': { destination: '/how-it-works/', status: 301 },
		'/portfolio/': { destination: '/work/', status: 301 }
	},

	vite: {
		logLevel: 'info',
		build: {
			cssCodeSplit: false,
			assetsInlineLimit: 0,
			minify: 'esbuild',
			cssMinify: 'lightningcss'
			// ← removed custom rollupOptions, let Astro handle asset paths
		}
	},

	devToolbar: { enabled: false },

	adapter: cloudflare()
});
