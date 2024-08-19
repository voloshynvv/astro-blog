import { getCollection, getEntries, getEntry, type CollectionEntry } from 'astro:content';

export const getPostDetails = async (post: CollectionEntry<'blog'>) => {
  const categories = await getEntries(post.data.categories);
  const author = await getEntry(post.data.author);

  return { categories, author };
};

export const getPosts = async () => {
  const posts = await getCollection('blog');

  return posts.toSorted((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());
};
