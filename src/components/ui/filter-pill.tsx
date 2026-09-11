import * as React from 'react';
import { cn } from '@/lib/utils';

export interface FilterPillProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  count?: number;
}

export function FilterPill({
  className,
  active = false,
  count,
  children,
  ...props
}: FilterPillProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        'inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 select-none',
        active
          ? 'bg-foreground text-background border-foreground shadow-sm'
          : 'bg-surface-50 dark:bg-surface-50/40 text-muted-foreground hover:text-foreground border-border hover:border-foreground/30',
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {typeof count === 'number' && (
        <span
          className={cn(
            'text-[10px] px-1.5 py-0.2 rounded-full font-mono font-semibold',
            active ? 'bg-background/20 text-background' : 'bg-surface-200 dark:bg-surface-100 text-muted-foreground'
          )}
        >
          {count}
        </span>
      )}
    </button>
  );
}
