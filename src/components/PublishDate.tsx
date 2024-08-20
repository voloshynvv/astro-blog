import { cn } from '@/utils/mergeClasses';

interface Props {
  date: Date;
  className?: string;
}

export const PublishDate = ({ date, className = '' }: Props) => {
  return (
    <p className={cn('text-sm text-muted-foreground', className)}>
      <span className="sr-only">Publish date</span>

      <time dateTime={new Date(date).toISOString().slice(0, 10)}>
        {new Intl.DateTimeFormat('en-US', {
          dateStyle: 'full',
        }).format(new Date(date))}
      </time>
    </p>
  );
};
