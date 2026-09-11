import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
}

export function Skeleton({
  className,
  variant = 'rectangular',
  ...props
}: SkeletonProps) {
  const variantStyles = {
    text: 'h-4 w-full rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
    card: 'h-48 w-full rounded-xl',
  };

  return (
    <div
      className={cn(
        'bg-surface-200/80 animate-pulse-subtle select-none motion-reduce:animate-none',
        variantStyles[variant],
        className
      )}
      aria-hidden="true"
      {...props}
    />
  );
}
