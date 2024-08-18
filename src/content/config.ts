import { defineCollection, reference, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image().optional(),
      alt: z.string().optional(),
      categories: z.array(reference('categories')),
      author: reference('authors'),
      publishDate: z.date(),
    }),
});

const categories = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      icon: image().optional(),
      name: z.string(),
      description: z.string(),
    }),
});

const authors = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      profileImage: image().optional(),
      location: z.string(),
      twitter: z.string().url(),
      website: z.string().url(),
    }),
});

export const collections = {
  blog,
  categories,
  authors,
};
