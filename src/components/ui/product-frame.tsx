import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface ProductFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  variant?: 'browser' | 'frameless' | 'mobile' | 'dashboard' | 'fullBleed';
  aspectRatio?: '16/9' | '16/10' | '4/3' | '9/16' | 'auto';
  urlTitle?: string;
  priority?: boolean;
  shadow?: boolean;
}

export function ProductFrame({
  src,
  alt,
  variant = 'frameless',
  aspectRatio = '16/10',
  urlTitle,
  priority = false,
  shadow = true,
  className,
  ...props
}: ProductFrameProps) {
  const aspectClass = {
    '16/9': 'aspect-[16/9]',
    '16/10': 'aspect-[16/10]',
    '4/3': 'aspect-[4/3]',
    '9/16': 'aspect-[9/16]',
    'auto': 'aspect-auto',
  }[aspectRatio];

  if (variant === 'browser') {
    return (
      <div
        className={cn(
          'rounded-xl border border-border/80 bg-surface overflow-hidden',
          shadow && 'shadow-product',
          className
        )}
        {...props}
      >
        {/* Restrained, minimal browser chrome bar */}
        <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-border/60 bg-surface-muted/70 text-xs select-none">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
            <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
            <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
          </div>

          {urlTitle && (
            <div className="px-3 py-0.5 rounded-md bg-surface/90 border border-border text-[11px] font-mono text-text-tertiary truncate max-w-[220px] sm:max-w-xs">
              {urlTitle}
            </div>
          )}

          <div className="w-10" aria-hidden="true" />
        </div>

        {/* Image Display */}
        <div className={cn('relative w-full overflow-hidden bg-surface-100', aspectClass)}>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1440px) 80vw, 1200px"
            className="object-cover"
          />
        </div>
      </div>
    );
  }

  if (variant === 'mobile') {
    return (
      <div
        className={cn(
          'max-w-[320px] mx-auto rounded-[2.25rem] p-2.5 border border-border/80 bg-surface-muted',
          shadow && 'shadow-product',
          className
        )}
        {...props}
      >
        <div className="relative aspect-[9/19] w-full rounded-[1.75rem] overflow-hidden bg-surface-100 border border-border/50">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="320px"
            className="object-cover"
          />
        </div>
      </div>
    );
  }

  if (variant === 'dashboard') {
    return (
      <div
        className={cn(
          'rounded-2xl border border-border/80 bg-surface/80 backdrop-blur-md p-2 sm:p-4 overflow-hidden',
          shadow && 'shadow-product',
          className
        )}
        {...props}
      >
        <div className={cn('relative w-full rounded-xl overflow-hidden border border-border/60 bg-surface-100', aspectClass)}>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1440px) 90vw, 1400px"
            className="object-cover"
          />
        </div>
      </div>
    );
  }

  if (variant === 'fullBleed') {
    return (
      <div className={cn('relative w-full overflow-hidden bg-surface-100', aspectClass, className)} {...props}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
      </div>
    );
  }

  // Default 'frameless'
  return (
    <div
      className={cn(
        'relative w-full rounded-xl overflow-hidden border border-border bg-surface-100',
        aspectClass,
        shadow && 'shadow-lg',
        className
      )}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1440px) 80vw, 1200px"
        className="object-cover"
      />
    </div>
  );
}
