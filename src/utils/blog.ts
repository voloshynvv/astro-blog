import type { CollectionEntry } from 'astro:content';
import { slugify } from '@/utils/slugify';

export const getUniqueCategories = (posts: CollectionEntry<'blog'>[], count?: number) => {
  const categories = posts.map((p) => ({
    slug: slugify(p.data.category),
    name: p.data.category,
  }));

  const uniqueCategories = new Set(categories);

  return Array.from(uniqueCategories).slice(0, count);
};
