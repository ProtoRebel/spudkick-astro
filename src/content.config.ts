import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		subTitle: z.string(),
		publishDate: z.string(),
		description: z.string(),
		featuredImage: z.object({
			img: z.string(),
			title: z.string()
		}),
		cta: z.object({
			before: z.string(),
			words: z.array(z.string()),
			after: z.string()
		}),
		draft: z.boolean().optional().default(false)
	})
});

const workCollection = defineCollection({
	type: 'content',
	schema: z.object({
		client: z.string(),
		tagline: z.string(),
		affiliate: z.string().nullable(),
		searchTerm: z.string(),
		searchLink: z.string(),
		launchDate: z.string(),
		scope: z.string(),
		imgPath: z.string(),
		logo: z.string(),
		emblem: z.string(),
		photoFeatured: z.string(),
		photos: z.array(z.object({
			img: z.string(),
			title: z.string(),
			size: z.string()
		})),
		draft: z.boolean().optional().default(false)
	})
});

export const collections = {
	blog: blogCollection,
	work: workCollection
};
