import type { APIRoute } from 'astro';
import { getPosts } from '@/utils/blog';

export const GET: APIRoute = async ({ params, request }) => {
  const posts = await getPosts();

  return new Response(
    JSON.stringify({
      posts,
    }),
  );
};
