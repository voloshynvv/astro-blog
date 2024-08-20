// ---
// import type { ImageMetadata } from 'astro';
// import { Image } from 'astro:assets';
// import { Icon } from 'astro-icon/components';
// import { cn } from '@/utils/mergeClasses';

// interface Props {
//   src?: ImageMetadata;
//   alt?: string;
//   class?: string;
// }

// const { src, alt = '', class: className = '' } = Astro.props;
// ---

// <div class={cn('mt-[1px] flex shrink-0 w-9 h-9 items-center justify-center rounded-full bg-muted', className)}>
//   {src ? <Image src={src} alt={alt} class="h-full w-full rounded-full" /> : <Icon name="user" aria-hidden="true" />}
// </div>
import { User } from 'lucide-react';

import { cn } from '@/utils/mergeClasses';

interface Props {
  avatar?: ImageMetadata;
  alt?: string;
  className?: string;
}

export const Avatar = ({ avatar, alt = '', className = '' }: Props) => {
  return (
    <div className={cn('mt-[1px] flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted', className)}>
      {avatar ? <img className="rounded-full" src={avatar.src} alt={alt} /> : <User aria-hidden="true" />}
    </div>
  );
};
