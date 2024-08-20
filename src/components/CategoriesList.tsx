import type { CollectionEntry } from 'astro:content';

import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/utils/mergeClasses';

interface Props {
  categories: CollectionEntry<'categories'>[];
  className?: string;
  ariaLabel?: string;
}

export const CategoriesList = ({ categories, className = '', ariaLabel }: Props) => {
  return (
    <ul className={cn('flex flex-wrap gap-2', className)} aria-label={ariaLabel}>
      {categories.map((category) => (
        <li key={category.id}>
          <a href={`/category/${category.id}`} className={cn(buttonVariants({ size: 'sm', class: 'gap-0' }))}>
            <span aria-hidden="true">#</span>
            {category.data.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
