import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Shared schema for image references (mixed local/external — kept as strings).
const imageRef = z.object({
	img: z.string(),
	title: z.string(),
});

const blog = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		subTitle: z.string(),
		publishDate: z.coerce.date(),
		description: z.string(),
		featuredImage: imageRef,
		cta: z.object({
			before: z.string(),
			words: z.array(z.string()),
			after: z.string(),
		}),
		draft: z.boolean().default(false),
	}),
});

const work = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/work' }),
	schema: z.object({
		client: z.string(),
		tagline: z.string(),
		affiliate: z.string().optional(),
		searchTerm: z.string(),
		searchLink: z.string(),
		launchDate: z.coerce.date(),
		scope: z.string(),
		imgPath: z.string(),
		logo: z.string(),
		emblem: z.string(),
		photoFeatured: z.string(),
		photos: z.array(
			imageRef.extend({
				size: z.string(),
			}),
		),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog, work };
