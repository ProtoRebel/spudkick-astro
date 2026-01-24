// @ts-ignore
import testimonials from '../content/testimonials.json';

interface Testimonial {
  date: string;
  name: string;
  business: string;
  slug: string;
  website: string;
  link: string;
  quotes: string[];
}

interface TestimonialResponse {
  name: string;
  business: string;
  slug: string;
  website: string;
  link: string;
  quote: string;
}

export const getTestimonial = (
  slug: "any" | string,
  index: number | "random"
): TestimonialResponse => {
  // Get the testimonial based on slug
  const testimonial = slug === "any"
    ? testimonials[Math.floor(Math.random() * testimonials.length)]
    : testimonials.find(t => t.slug === slug);

  if (!testimonial) {
    throw new Error(`No testimonial found with slug: ${slug}`);
  }

  // Get the quote based on index
  const { quotes, ...testimonialData } = testimonial;
  const selectedQuote = index === "random"
    ? quotes[Math.floor(Math.random() * quotes.length)]
    : quotes[index];

  if (typeof selectedQuote === 'undefined') {
    throw new Error(`Quote index ${index} is out of range for testimonial with slug: ${slug}`);
  }

  return {
    name: testimonialData.name,
    business: testimonialData.business,
    slug: testimonialData.slug,
    website: testimonialData.website,
    link: testimonialData.link,
    quote: selectedQuote
  };
};
