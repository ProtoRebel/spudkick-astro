import readingTime from 'reading-time';

type Blog = {
  title: string
  file: string
  rawContent: () => string
}

export default function getBlogData(blog: Blog) {
  if (!blog || !blog.file || !blog.rawContent) {
    console.warn('Invalid post data:', blog);
    return { slug: '', readingTime: '' }; // Return default values for safety
  }

  return {
    slug: blog.file.split('/').pop().split('.').shift(),
    readingTime: readingTime(blog.rawContent()).text,
  };
}