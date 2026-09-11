'use client';

import * as React from 'react';
import { List, ChevronDown } from 'lucide-react';
import { InsightTocItem } from '@/types/insight';
import { trackEvent } from '@/lib/analytics';
import { cn } from '@/lib/utils';

interface TableOfContentsProps {
  items: InsightTocItem[];
  className?: string;
}

export function TableOfContents({ items, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = React.useState<string>('');
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    if (!items || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -60% 0px',
        threshold: 0.1,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items || items.length === 0) return null;

  const handleLinkClick = (id: string, title: string) => {
    trackEvent('insight_toc_clicked', { headingId: id, headingTitle: title });
    setMobileOpen(false);
  };

  return (
    <nav aria-label="Table of contents" className={cn('space-y-3', className)}>
      {/* Mobile Collapsible Header */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-full flex items-center justify-between p-3.5 rounded-xl border border-border/70 bg-surface-50 dark:bg-surface-900 text-xs font-mono text-foreground font-bold"
          aria-expanded={mobileOpen}
        >
          <div className="flex items-center gap-2">
            <List className="w-4 h-4 text-accent" />
            <span>Table of Contents ({items.length})</span>
          </div>
          <ChevronDown
            className={cn('w-4 h-4 text-muted-foreground transition-transform duration-200', mobileOpen && 'rotate-180')}
          />
        </button>

        {mobileOpen && (
          <div className="mt-2 p-4 rounded-xl border border-border/70 bg-surface-50 dark:bg-surface-950 space-y-2">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleLinkClick(item.id, item.title)}
                className={cn(
                  'block text-xs py-1 transition-colors leading-relaxed',
                  activeId === item.id
                    ? 'text-accent font-bold'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {item.title}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Navigation */}
      <div className="hidden lg:block space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-foreground pb-2 border-b border-border/50">
          <List className="w-3.5 h-3.5 text-accent" />
          <span>Table of Contents</span>
        </div>

        <div className="space-y-1">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleLinkClick(item.id, item.title)}
                className={cn(
                  'block text-xs py-1.5 px-2.5 rounded-md transition-all leading-snug border-l-2',
                  isActive
                    ? 'border-accent text-accent font-semibold bg-accent-muted/30'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-surface-100/50 dark:hover:bg-surface-900/50'
                )}
              >
                {item.title}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
