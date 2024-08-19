import { getEntries, getEntry, type CollectionEntry } from 'astro:content';

export const getPostDetails = async (post: CollectionEntry<'blog'>) => {
  const categories = await getEntries(post.data.categories);
  const author = await getEntry(post.data.author);

  return { categories, author };
};
