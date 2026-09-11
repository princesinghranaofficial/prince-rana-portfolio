import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'standard' | 'compact' | 'large' | 'fullBleed';
  spacing?: 'compact' | 'default' | 'spacious'; // backwards compatibility
  background?: 'default' | 'surface' | 'muted' | 'transparent';
}

export function Section({
  className,
  variant,
  spacing = 'default',
  background = 'transparent',
  children,
  ...props
}: SectionProps) {
  // Map either variant or spacing
  const activeVariant = variant || (spacing === 'compact' ? 'compact' : spacing === 'spacious' ? 'large' : 'standard');

  const variantStyles = {
    compact: 'py-10 md:py-16',
    standard: 'py-16 md:py-24 lg:py-28',
    large: 'py-24 md:py-32 lg:py-40',
    fullBleed: 'py-0',
  };

  const backgroundStyles = {
    default: 'bg-transparent',
    surface: 'bg-surface border-y border-border',
    muted: 'bg-surface-muted/50 border-y border-border',
    transparent: 'bg-transparent',
  };

  return (
    <section
      className={cn(
        'relative w-full',
        variantStyles[activeVariant],
        backgroundStyles[background],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
