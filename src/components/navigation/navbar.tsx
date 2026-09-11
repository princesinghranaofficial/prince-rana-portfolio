'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { trackEvent } from '@/lib/analytics';
import { cn } from '@/lib/utils';

interface NavItem {
  name: string;
  href: string;
  event: 'nav_work_clicked' | 'nav_item_clicked';
}

const navItems: NavItem[] = [
  { name: 'Work', href: '/work', event: 'nav_work_clicked' },
  { name: 'Services', href: '/services', event: 'nav_item_clicked' },
  { name: 'About', href: '/about', event: 'nav_item_clicked' },
  { name: 'Process', href: '/process', event: 'nav_item_clicked' },
  { name: 'Insights', href: '/insights', event: 'nav_item_clicked' },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  const menuTriggerRef = React.useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = React.useRef<HTMLAnchorElement>(null);

  // Passive lightweight scroll listener
  React.useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 24);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle ESC key to close mobile menu & restore focus
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuTriggerRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Focus management: when mobile menu opens, focus first link; when closed, restore focus
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Small timeout to allow DOM render
      const timer = setTimeout(() => {
        firstMenuLinkRef.current?.focus();
      }, 50);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (item: NavItem) => {
    trackEvent(item.event, { destination: item.href });
  };

  const handleBookCallClick = () => {
    trackEvent('nav_book_call_clicked', { source: 'navbar' });
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-200 ease-out',
          scrolled
            ? 'bg-background/85 backdrop-blur-md border-b border-border/80 py-3.5 shadow-xs'
            : 'bg-transparent py-5 border-b border-transparent'
        )}
      >
        <Container size="wide" className="flex items-center justify-between">
          {/* ZONE 1: BRAND (LEFT) */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md py-1 px-1 -ml-1 select-none"
          >
            <div aria-hidden="true" className="w-8 h-8 rounded-lg bg-foreground text-background flex items-center justify-center font-mono text-xs font-bold transition-transform duration-150 ease-out group-hover:scale-105">
              PSR
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors leading-none">
                Prince Rana
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-text-secondary mt-0.5">
                SaaS &amp; AI Developer
              </span>
            </div>
          </Link>

          {/* ZONE 2: DESKTOP NAVIGATION (CENTER) */}
          <nav
            className="hidden md:flex items-center gap-1 px-3 py-1 rounded-full border border-border/60 bg-surface/50 backdrop-blur-xs"
            aria-label="Primary Navigation"
          >
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item)}
                  className={cn(
                    'relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                    isActive
                      ? 'text-foreground font-semibold'
                      : 'text-text-secondary hover:text-foreground'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-surface-200/80 dark:bg-surface-100/60 rounded-full -z-10"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ZONE 3: PRIMARY CONVERSION & CONTROLS (RIGHT) */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link href="/book" onClick={handleBookCallClick}>
              <Button
                variant="primary"
                size="sm"
                className="font-semibold shadow-xs hover:shadow-sm"
                rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                Book a Call
              </Button>
            </Link>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              ref={menuTriggerRef}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-lg border border-border/80 bg-surface flex items-center justify-center text-foreground hover:bg-surface-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-h-[44px] min-w-[44px]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-dialog"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </Container>
      </header>

      {/* MOBILE ACCESSIBLE FULL-OVERLAY MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation Menu"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 pt-24 pb-8 px-6 bg-background/95 backdrop-blur-xl md:hidden flex flex-col justify-between overflow-y-auto"
          >
            {/* Links List with Staggered Entrance */}
            <div className="space-y-2 py-4">
              {navItems.map((item, index) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== '/' && pathname.startsWith(item.href));

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.22,
                      delay: shouldReduceMotion ? 0 : 0.04 + index * 0.035,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      ref={index === 0 ? firstMenuLinkRef : undefined}
                      href={item.href}
                      onClick={() => {
                        handleNavClick(item);
                        setMobileMenuOpen(false);
                      }}
                      className={cn(
                        'flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-semibold transition-colors',
                        isActive
                          ? 'bg-surface-100 text-foreground'
                          : 'text-text-secondary hover:text-foreground hover:bg-surface-50'
                      )}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-50 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.22,
                  delay: shouldReduceMotion ? 0 : 0.04 + navItems.length * 0.035,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-semibold text-text-secondary hover:text-foreground hover:bg-surface-50 transition-colors"
                >
                  <span>Contact</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" aria-hidden="true" />
                </Link>
              </motion.div>
            </div>

            {/* Bottom Primary Conversion & Status */}
            <div className="space-y-4 pt-6 border-t border-border/80">
              <div className="flex items-center gap-2 text-xs font-mono text-text-secondary">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for selected SaaS & AI projects</span>
              </div>

              <Link
                href="/book"
                onClick={() => {
                  handleBookCallClick();
                  setMobileMenuOpen(false);
                }}
                className="block w-full"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full justify-center shadow-md font-semibold"
                  rightIcon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Book a Discovery Call
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
