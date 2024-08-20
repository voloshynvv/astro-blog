import type { CollectionEntry } from 'astro:content';
import Fuse from 'fuse.js';
import { useEffect, useMemo, useState } from 'react';

type Status = 'idle' | 'pending' | 'error' | 'succeeded';
type Post = CollectionEntry<'blog'>;

interface SearchResponse {
  posts: Post[];
}

const fuseOptions = {
  keys: ['data.title', 'data.description'],
  threshold: 0.5,
  includeScore: true,
};

const Search = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [posts, setPosts] = useState<Post[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getPosts = async () => {
      setStatus('pending');

      try {
        const response = await fetch('/search.json');

        if (!response.ok) {
          throw new Error(`Could not fetch ${response.url}`);
        }

        const data = (await response.json()) as SearchResponse;
        setPosts(data.posts);
        setStatus('succeeded');
      } catch (e) {
        setStatus('error');
        console.error(e);
      }
    };

    getPosts();
  }, []);

  const fuse = useMemo(() => new Fuse(posts, fuseOptions), [posts]);
  const searchResults = fuse.search(query);

  return (
    <>
      <search>
        <label htmlFor="search" className="sr-only">
          Search:
        </label>

        <input
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-sm border border-input bg-transparent px-5 py-2 text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          type="search"
          id="search"
          placeholder="e.g. News about Astro."
        />

        <section>
          <h2 className="sr-only">Search results</h2>

          <ul>
            {searchResults.map(({ item }) => (
              <li key={item.id}>{item.data.title}</li>
            ))}
          </ul>
        </section>
      </search>
    </>
  );
};

export default Search;
