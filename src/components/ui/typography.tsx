import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TypographyBaseProps extends React.HTMLAttributes<HTMLElement> {
  measure?: 'reading' | 'headline' | 'none';
  as?: React.ElementType;
}

/**
 * Display XL - Cinematic Desktop Hero moments
 */
export function DisplayXL({
  className,
  children,
  measure = 'headline',
  as: Component = 'h1',
  ...props
}: TypographyBaseProps) {
  return (
    <Component
      className={cn(
        'type-display-xl text-text-primary tracking-tight font-bold',
        measure === 'headline' && 'measure-headline',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * Display - Major Hero headline
 */
export function Display({
  className,
  children,
  measure = 'headline',
  as: Component = 'h1',
  ...props
}: TypographyBaseProps) {
  return (
    <Component
      className={cn(
        'type-display text-text-primary tracking-tight font-bold',
        measure === 'headline' && 'measure-headline',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * H1 - Primary page headline
 */
export function H1({
  className,
  children,
  measure = 'headline',
  as: Component = 'h1',
  ...props
}: TypographyBaseProps) {
  return (
    <Component
      className={cn(
        'type-h1 text-text-primary tracking-tight font-bold',
        measure === 'headline' && 'measure-headline',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * H2 - Section Storytelling Headline
 */
export function H2({
  className,
  children,
  measure = 'headline',
  as: Component = 'h2',
  ...props
}: TypographyBaseProps) {
  return (
    <Component
      className={cn(
        'type-h2 text-text-primary tracking-tight font-semibold',
        measure === 'headline' && 'measure-headline',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * H3 - Card / Sub-section Headline
 */
export function H3({
  className,
  children,
  as: Component = 'h3',
  ...props
}: TypographyBaseProps) {
  return (
    <Component
      className={cn('type-h3 text-text-primary tracking-tight font-semibold', className)}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * H4 - Minor Title
 */
export function H4({
  className,
  children,
  as: Component = 'h4',
  ...props
}: TypographyBaseProps) {
  return (
    <Component
      className={cn('type-h4 text-text-primary tracking-tight font-semibold', className)}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * Body Large - Lead Paragraphs (supports 55-75 ch reading measure)
 */
export function BodyLarge({
  className,
  children,
  measure = 'reading',
  ...props
}: TypographyBaseProps) {
  return (
    <p
      className={cn(
        'type-body-large text-text-secondary leading-relaxed font-normal',
        measure === 'reading' && 'measure-reading',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

/**
 * Body - Standard Reading Measure
 */
export function Body({
  className,
  children,
  measure = 'reading',
  ...props
}: TypographyBaseProps) {
  return (
    <p
      className={cn(
        'type-body text-text-secondary leading-relaxed font-normal',
        measure === 'reading' && 'measure-reading',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

/**
 * Body Small - Secondary Explanatory Copy
 */
export function BodySmall({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('type-body-small text-text-secondary leading-normal font-normal', className)} {...props}>
      {children}
    </p>
  );
}

/**
 * Label - UI Action Labels
 */
export function LabelText({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn('type-label text-text-primary font-medium', className)} {...props}>
      {children}
    </span>
  );
}

/**
 * Caption - Microcopy / Timestamps
 */
export function Caption({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn('type-caption text-text-tertiary', className)} {...props}>
      {children}
    </span>
  );
}

/**
 * Code / Technical Text
 */
export function CodeText({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <code className={cn('type-code bg-surface-100 text-text-primary px-1.5 py-0.5 rounded border border-border', className)} {...props}>
      {children}
    </code>
  );
}

// Backward compatibility exports for Phase 1 code
export const HeroHeading = DisplayXL;
export const TextLead = BodyLarge;
export const TextRegular = Body;
