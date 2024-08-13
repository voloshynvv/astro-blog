import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image().optional(),
      alt: z.string().optional(),
      category: z.string(),
    }),
});

export const collections = {
  blog,
};
