import Fuse, { type FuseResult } from 'fuse.js';
import { useEffect, useMemo, useState } from 'react';

import { Post } from '@/components/Post';

import type { PostEntry } from '@/types/PostEntry';
import { pluralize } from '@/utils/pluralize';

type Status = 'idle' | 'pending' | 'error' | 'succeeded';

interface SearchResponse {
  posts: PostEntry[];
}

const fuseOptions = {
  keys: ['data.title', 'data.description'],
  threshold: 0.5,
  includeScore: true,
};

const Search = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [posts, setPosts] = useState<PostEntry[]>([]);
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
  const searchResult = fuse.search(query);

  return (
    <>
      <search>
        <label htmlFor="search" className="sr-only">
          Search:
        </label>

        <input
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-sm border border-input bg-transparent px-5 py-2 text-foreground placeholder-inherit ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          type="search"
          id="search"
          placeholder="e.g. News about Astro."
        />

        <section className="mt-6">
          <h2 className="sr-only">Search results</h2>

          {status === 'error' && (
            <p>
              Something went wrong. Try again later. <span role="img">😞</span>
            </p>
          )}

          {query && !searchResult.length && (
            <p>
              Nothing found <span role="img">😞</span>
            </p>
          )}

          {query && searchResult.length > 0 && <SearchResultView searchResult={searchResult} />}
        </section>
      </search>
    </>
  );
};

const SearchResultView = ({ searchResult }: { searchResult: FuseResult<PostEntry>[] }) => {
  return (
    <div>
      <p>Found {pluralize(searchResult.length, 'post')}</p>

      {searchResult.map((post) => (
        <Post key={post.item.id} post={post.item} />
      ))}
    </div>
  );
};

export default Search;
