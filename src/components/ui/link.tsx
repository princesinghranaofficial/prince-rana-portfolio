import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface BaseLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

/**
 * Standard inline link with subtle underline animation and keyboard focus
 */
export const InlineLink = React.forwardRef<HTMLAnchorElement, BaseLinkProps>(
  ({ className, href, children, ...props }, ref) => (
    <Link
      ref={ref}
      href={href}
      className={cn(
        'text-accent hover:text-accent-hover underline underline-offset-4 decoration-accent/40 hover:decoration-accent transition-colors font-medium rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
);
InlineLink.displayName = 'InlineLink';

/**
 * Header and footer navigation link
 */
export interface NavigationLinkProps extends BaseLinkProps {
  active?: boolean;
}

export const NavigationLink = React.forwardRef<HTMLAnchorElement, NavigationLinkProps>(
  ({ className, href, active, children, ...props }, ref) => (
    <Link
      ref={ref}
      href={href}
      className={cn(
        'relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        active
          ? 'text-foreground font-semibold bg-surface-200/80'
          : 'text-text-secondary hover:text-foreground hover:bg-surface-100',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
);
NavigationLink.displayName = 'NavigationLink';

/**
 * Editorial Arrow Link with subtle rightward arrow translation
 */
export interface ArrowLinkProps extends BaseLinkProps {
  direction?: 'right' | 'up-right';
}

export const ArrowLink = React.forwardRef<HTMLAnchorElement, ArrowLinkProps>(
  ({ className, href, direction = 'right', children, ...props }, ref) => {
    const Icon = direction === 'right' ? ArrowRight : ArrowUpRight;

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(
          'group inline-flex items-center gap-1.5 text-xs font-semibold text-text-primary hover:text-accent transition-colors select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-xs',
          className
        )}
        {...props}
      >
        <span>{children}</span>
        <Icon className="w-3.5 h-3.5 transition-transform duration-150 ease-out group-hover:translate-x-1" />
      </Link>
    );
  }
);
ArrowLink.displayName = 'ArrowLink';

/**
 * High-emphasis Project Link
 */
export const ProjectLink = React.forwardRef<HTMLAnchorElement, BaseLinkProps>(
  ({ className, href, children, ...props }, ref) => (
    <Link
      ref={ref}
      href={href}
      className={cn(
        'group inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm',
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <ArrowUpRight className="w-4 h-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-text-tertiary group-hover:text-accent" />
    </Link>
  )
);
ProjectLink.displayName = 'ProjectLink';
