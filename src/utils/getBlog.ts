import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';
import { parse, compareDesc } from 'date-fns';

interface BlogPost extends CollectionEntry<'blog'> {
  data: {
    title: string;
    subTitle: string;
    publishDate: string;
    description: string;
    featuredImage: {
      img: string;
      title: string;
    };
    cta: {
      before: string;
      words: string[];
      after: string;
    };
    draft?: boolean;
  };
}

interface PaginationData {
  currentPage?: number;
  totalPages: number;
  postsPerPage: number;
  totalPosts: number;
  hasNextPage?: boolean;
  hasPrevPage?: boolean;
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

function parsePostDate(dateStr: string): Date {
  return parse(dateStr, 'dd MMM yyyy', new Date());
}

function sortPostsByDate(posts: BlogPost[]): BlogPost[] {
  return posts.sort((a, b) => {
    const dateA = parsePostDate(a.data.publishDate);
    const dateB = parsePostDate(b.data.publishDate);
    return compareDesc(dateA, dateB);
  });
}

export async function getBlog(param?: string | number) {
  const allPosts = await getCollection('blog') as BlogPost[];
  const publishedPosts = process.env.NODE_ENV === 'production'
    ? allPosts.filter(post => !post.data.draft)
    : allPosts;

  const sortedPosts = sortPostsByDate(publishedPosts);

  // Return all posts with pagination info
  if (!param) {
    const totalPages = calculateTotalPages(sortedPosts.length);
    return {
      posts: sortedPosts,
      pagination: {
        totalPosts: sortedPosts.length,
        totalPages,
        postsPerPage: POSTS_PER_PAGE,
        firstPageExtra: FIRST_PAGE_EXTRA
      }
    };
  }

  // Find specific post by slug
  if (typeof param === 'string') {
    const post = sortedPosts.find(post => post.slug === param);
    if (!post) return null;

    const currentIndex = sortedPosts.findIndex(p => p.slug === param);
    return {
      post,
      navigation: {
        prev: currentIndex > 0 ? sortedPosts[currentIndex - 1] : null,
        next: currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null
      }
    };
  }

  if (typeof param === 'number') {
    return {
      posts: sortedPosts.slice(0, param)
    };
  }
}

export async function getPostsByPage(pageNum: number) {
  const { posts, pagination } = await getBlog() as {
    posts: BlogPost[];
    pagination: PaginationData;
  };

  if (pageNum === 1) {
    const firstPageCount = POSTS_PER_PAGE + FIRST_PAGE_EXTRA;
    return {
      posts: posts.slice(0, firstPageCount),
      pagination: {
        currentPage: pageNum,
        totalPages: pagination.totalPages,
        postsPerPage: POSTS_PER_PAGE,
        totalPosts: pagination.totalPosts,
        hasNextPage: pageNum < pagination.totalPages,
        hasPrevPage: pageNum > 1,
        firstPageExtra: FIRST_PAGE_EXTRA
      }
    };
  }

  const firstPageCount = POSTS_PER_PAGE + FIRST_PAGE_EXTRA;
  const remainingPosts = posts.slice(firstPageCount);
  const startIndex = (pageNum - 2) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;

  return {
    posts: remainingPosts.slice(startIndex, endIndex),
    pagination: {
      currentPage: pageNum,
      totalPages: pagination.totalPages,
      postsPerPage: POSTS_PER_PAGE,
      totalPosts: pagination.totalPosts,
      hasNextPage: pageNum < pagination.totalPages,
      hasPrevPage: pageNum > 1,
      firstPageExtra: FIRST_PAGE_EXTRA
    }
  };
}

export function getImagePath(imageName: string): string {
  return `/images/blog/${imageName}`;
}
