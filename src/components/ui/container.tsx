import * as React from 'react';
import { cn } from '@/lib/utils';
export { Section, type SectionProps } from '@/components/ui/section';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'narrow' | 'default' | 'wide' | 'cinematic' | 'full';
}

/**
 * Reusable Container system with responsive padding
 * Controls measure so content looks excellent from 360px up to 1920px
 */
export function Container({
  className,
  size = 'default',
  children,
  ...props
}: ContainerProps) {
  const sizeStyles = {
    narrow: 'max-w-4xl',         // 896px - ideal for reading & forms
    default: 'max-w-7xl',        // 1280px - standard layout
    wide: 'max-w-[90rem]',       // 1440px - wide product showcases
    cinematic: 'max-w-[108rem]', // 1728px - immersive large screens
    full: 'max-w-full',
  };

  return (
    <div
      className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', sizeStyles[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}

// Dedicated convenience container aliases
export const NarrowContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8', className)} {...props}>
      {children}
    </div>
  )
);
NarrowContainer.displayName = 'NarrowContainer';

export const WideContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8', className)} {...props}>
      {children}
    </div>
  )
);
WideContainer.displayName = 'WideContainer';

export const FullBleedContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('w-full px-0', className)} {...props}>
      {children}
    </div>
  )
);
FullBleedContainer.displayName = 'FullBleedContainer';
