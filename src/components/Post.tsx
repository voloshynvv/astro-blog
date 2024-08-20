import { ChevronRight } from 'lucide-react';

import { buttonVariants } from '@/components/ui/Button';
import { PublishDate } from '@/components/PublishDate';
import { Avatar } from '@/components/ui/Avatar';
import { CategoriesList } from '@/components/CategoriesList';

import type { PostEntry } from '@/types/PostEntry';

interface Props {
  post: PostEntry;
}

export const Post = ({ post }: Props) => {
  const {
    data: { publishDate, title, description },
    slug,
    referenceData: { author, categories },
  } = post;

  return (
    <article className="border-b py-6">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <CategoriesList categories={categories} ariaLabel="Categories" />
        <PublishDate date={publishDate} />
      </div>

      <a href={`/blog/${slug}`} className="mb-2 inline-block text-2xl font-bold hover:underline">
        <h3>{title}</h3>
      </a>

      <p className="mb-5 text-muted-foreground">{description}</p>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <a href={`/author/${author.id}`} className="flex items-center gap-2 hover:underline">
          <Avatar avatar={author.data.profileImage} alt="" />
          {author.data.name}
        </a>

        <a href={`/blog/${slug}`} className={buttonVariants({ variant: 'link', size: 'sm' })}>
          Read more
          <ChevronRight width={16} height={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
};
