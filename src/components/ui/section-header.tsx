import * as React from 'react';
import { cn } from '@/lib/utils';
import { Eyebrow } from '@/components/ui/eyebrow';

export interface SectionHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  align?: 'left' | 'center' | 'split';
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  align = 'left',
  className,
  ...props
}: SectionHeaderProps) {
  if (align === 'center') {
    return (
      <div className={cn('text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4', className)} {...props}>
        {eyebrow && (
          <div className="flex justify-center">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
        )}
        <h2 className="type-h2 text-foreground">{title}</h2>
        {description && (
          <p className="type-body-large text-text-secondary measure-reading mx-auto">
            {description}
          </p>
        )}
        {action && <div className="pt-2 flex justify-center">{action}</div>}
      </div>
    );
  }

  if (align === 'split') {
    return (
      <div
        className={cn(
          'flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6',
          className
        )}
        {...props}
      >
        <div className="space-y-3 max-w-2xl">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2 className="type-h2 text-foreground">{title}</h2>
          {description && (
            <p className="type-body text-text-secondary measure-reading">
              {description}
            </p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    );
  }

  // Default 'left'
  return (
    <div className={cn('max-w-3xl mb-12 md:mb-16 space-y-4', className)} {...props}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="type-h2 text-foreground">{title}</h2>
      {description && (
        <p className="type-body-large text-text-secondary measure-reading">
          {description}
        </p>
      )}
      {action && <div className="pt-2">{action}</div>}
    </div>
  );
}
