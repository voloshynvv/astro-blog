import type { CollectionEntry } from 'astro:content';

export type PostEntry = CollectionEntry<'blog'> & {
  referenceData: {
    categories: CollectionEntry<'categories'>[];
    author: CollectionEntry<'authors'>;
  };
};
