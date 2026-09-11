import * as React from 'react';
import { cn } from '@/lib/utils';

export interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  withDot?: boolean;
}

export function Eyebrow({
  className,
  withDot = true,
  children,
  ...props
}: EyebrowProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-accent-muted text-accent type-eyebrow border border-accent/20 select-none',
        className
      )}
      {...props}
    >
      {withDot && <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />}
      <span>{children}</span>
    </div>
  );
}
