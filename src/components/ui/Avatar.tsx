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
