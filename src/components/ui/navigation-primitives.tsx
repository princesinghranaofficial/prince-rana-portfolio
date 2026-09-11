import * as React from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  active?: boolean;
}

export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, href, active = false, children, ...props }, ref) => (
    <Link
      ref={ref}
      href={href}
      className={cn(
        'relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-150 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        active
          ? 'text-foreground font-semibold bg-surface-200/75'
          : 'text-text-secondary hover:text-foreground hover:bg-surface-100',
        className
      )}
      aria-current={active ? 'page' : undefined}
      {...props}
    >
      {children}
    </Link>
  )
);
NavLink.displayName = 'NavLink';

export interface NavCTAProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
}

export function NavCTA({ href = '/book', children = 'Book a Call', className }: NavCTAProps) {
  return (
    <Link href={href} tabIndex={-1}>
      <Button
        variant="primary"
        size="sm"
        className={cn('shadow-xs hover:shadow-sm font-semibold', className)}
        rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
      >
        {children}
      </Button>
    </Link>
  );
}

export interface MobileMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenuButton({ isOpen, onToggle, className, ...props }: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        'w-10 h-10 rounded-lg border border-border bg-surface flex items-center justify-center text-foreground hover:bg-surface-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-h-[44px] min-w-[44px]',
        className
      )}
      aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={isOpen}
      {...props}
    >
      {isOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
    </button>
  );
}
