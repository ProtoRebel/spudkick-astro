import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';

type BlogPost = CollectionEntry<'blog'>;

interface PaginationData {
	currentPage?: number;
	totalPages: number;
	postsPerPage: number;
	totalPosts: number;
	hasNextPage?: boolean;
	hasPrevPage?: boolean;
	firstPageExtra: number;
}

const POSTS_PER_PAGE = 1;
const FIRST_PAGE_EXTRA = 1;

function calculateTotalPages(totalPosts: number): number {
	const firstPagePosts = POSTS_PER_PAGE + FIRST_PAGE_EXTRA;
	const remainingPosts = Math.max(0, totalPosts - firstPagePosts);

	if (remainingPosts > 0) {
		return Math.ceil(remainingPosts / POSTS_PER_PAGE) + 1;
	}

	return 1;
}

function sortPostsByDate(posts: BlogPost[]): BlogPost[] {
	return posts.sort(
		(a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf(),
	);
}

async function getSortedPosts(): Promise<BlogPost[]> {
	const allPosts = await getCollection('blog');
	const publishedPosts = import.meta.env.PROD
		? allPosts.filter((post) => !post.data.draft)
		: allPosts;

	return sortPostsByDate(publishedPosts);
}

export async function getBlog(param?: string | number) {
	const sortedPosts = await getSortedPosts();

	// Return all posts with pagination info
	if (!param) {
		return {
			posts: sortedPosts,
			pagination: {
				totalPosts: sortedPosts.length,
				totalPages: calculateTotalPages(sortedPosts.length),
				postsPerPage: POSTS_PER_PAGE,
				firstPageExtra: FIRST_PAGE_EXTRA,
			},
		};
	}

	// Find specific post by id, with prev/next navigation
	if (typeof param === 'string') {
		const currentIndex = sortedPosts.findIndex((p) => p.id === param);
		if (currentIndex === -1) return null;

		return {
			post: sortedPosts[currentIndex],
			navigation: {
				prev: currentIndex > 0 ? sortedPosts[currentIndex - 1] : null,
				next:
					currentIndex < sortedPosts.length - 1
						? sortedPosts[currentIndex + 1]
						: null,
			},
		};
	}

	// Return first N posts
	if (typeof param === 'number') {
		return { posts: sortedPosts.slice(0, param) };
	}
}

export async function getPostsByPage(pageNum: number) {
	const sortedPosts = await getSortedPosts();
	const totalPages = calculateTotalPages(sortedPosts.length);
	const firstPageCount = POSTS_PER_PAGE + FIRST_PAGE_EXTRA;

	const pagination: PaginationData = {
		currentPage: pageNum,
		totalPages,
		postsPerPage: POSTS_PER_PAGE,
		totalPosts: sortedPosts.length,
		hasNextPage: pageNum < totalPages,
		hasPrevPage: pageNum > 1,
		firstPageExtra: FIRST_PAGE_EXTRA,
	};

	if (pageNum === 1) {
		return {
			posts: sortedPosts.slice(0, firstPageCount),
			pagination,
		};
	}

	const startIndex = firstPageCount + (pageNum - 2) * POSTS_PER_PAGE;
	const endIndex = startIndex + POSTS_PER_PAGE;

	return {
		posts: sortedPosts.slice(startIndex, endIndex),
		pagination,
	};
}

export function getImagePath(imageName: string): string {
	return `/images/blog/${imageName}`;
}
