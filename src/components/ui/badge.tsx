import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 
    | 'default' 
    | 'accent' 
    | 'outline' 
    | 'real-product' 
    | 'concept' 
    | 'prototype'
    | 'category';
  size?: 'sm' | 'md' | 'lg';
}

export function Badge({
  className,
  variant = 'default',
  size = 'md',
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    'inline-flex items-center gap-1.5 font-mono uppercase tracking-wider font-semibold rounded-md border select-none transition-colors';

  const variantStyles = {
    default:
      'bg-surface-100 text-text-primary border-border-strong',
    accent:
      'bg-accent-muted text-accent border-accent/25',
    outline:
      'bg-transparent text-text-secondary border-border hover:border-text-tertiary',
    'real-product':
      'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/25',
    concept:
      'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/25',
    prototype:
      'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/25',
    category:
      'bg-surface-muted text-text-secondary border-border hover:text-text-primary',
  };

  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5 leading-none',
    md: 'text-xs px-2.5 py-1 leading-normal',
    lg: 'text-xs px-3 py-1.5 leading-normal',
  };

  return (
    <span
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </span>
  );
}
