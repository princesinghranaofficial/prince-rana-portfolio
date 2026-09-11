'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import {
  trackEmailClick,
  trackProfileLinkClick,
  trackContactClick,
  trackPrimaryCtaClick,
  trackResumeDownload,
  trackProjectCtaClick,
} from '@/lib/analytics';

/**
 * Derives contextual UI placement for analytics reporting.
 */
function resolveLocation(target: Element, pathname: string): string {
  const explicit = target.getAttribute('data-analytics-location');
  if (explicit) return explicit;

  if (target.closest('header') || target.closest('nav')) return 'navbar';
  if (target.closest('footer')) return 'footer';
  if (target.closest('[data-section="hero"]') || target.closest('.hero-section')) return 'hero';
  if (target.closest('[data-section="cta"]') || target.closest('.final-conversion-section')) return 'footer_cta';

  if (pathname === '/contact') return 'contact_page';
  if (pathname === '/about') return 'about';
  if (pathname === '/services') return 'services';
  if (pathname === '/book') return 'book';
  if (pathname.startsWith('/work')) return 'work';
  if (pathname.startsWith('/lab')) return 'lab';
  if (pathname.startsWith('/insights')) return 'insights';

  return 'page_body';
}

/**
 * Passive Global Analytics Listener
 * 
 * Intercepts portfolio-wide interactions (social links, mailto links, key CTAs, resume downloads)
 * using event delegation. Completely unobtrusive with zero layout or DOM changes.
 */
export function AnalyticsListener() {
  const pathname = usePathname();

  React.useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = (event.target as HTMLElement | null)?.closest('a, button');
      if (!target) return;

      const href = target.getAttribute('href') || '';
      const location = resolveLocation(target, pathname);

      // 1. Email links (Zero PII, no address sent)
      if (href.startsWith('mailto:')) {
        trackEmailClick(location, pathname);
        trackContactClick('email', location, pathname);
        return;
      }

      // 2. Resume / CV downloads
      const isPdf = href.toLowerCase().endsWith('.pdf') || href.toLowerCase().includes('.pdf?') || target.hasAttribute('download');
      const isResume = /resume|cv/i.test(href) || /resume|cv/i.test(target.getAttribute('aria-label') || '') || /resume|cv/i.test(target.textContent || '');
      if (isPdf || isResume) {
        trackResumeDownload(location, pathname, 'pdf');
        return;
      }

      // 3. Strategic profile links
      if (href.includes('linkedin.com')) {
        trackProfileLinkClick('linkedin', location, pathname);
        trackContactClick('linkedin', location, pathname);
        return;
      }

      if (href.includes('github.com')) {
        trackProfileLinkClick('github', location, pathname);
        return;
      }

      if (href.includes('twitter.com') || href.includes('x.com')) {
        trackProfileLinkClick('twitter', location, pathname);
        return;
      }

      // 4. Core Conversion CTAs
      if (href === '/book' || href.startsWith('/book?')) {
        const ctaName = target.textContent?.trim() || 'Book a Call';
        trackPrimaryCtaClick(ctaName, location, pathname, 'booking');
        trackContactClick('cal_booking', location, pathname);
        return;
      }

      if (href === '/start-project' || href.startsWith('/start-project?')) {
        const ctaName = target.textContent?.trim() || 'Start a Project';
        trackPrimaryCtaClick(ctaName, location, pathname, 'inquiry_form');
        trackContactClick('contact_form', location, pathname);
        return;
      }

      if (href === '/contact' || href.startsWith('/contact?')) {
        trackContactClick('contact_page', location, pathname);
        return;
      }

      // 5. External demo / prototype links in project / lab showcases
      if (
        href.startsWith('http') &&
        !href.includes('princesinghrana.in') &&
        !href.includes('princesinghrana.online') &&
        !href.includes('localhost')
      ) {
        const isProjectCard = target.closest('[data-project-card], .project-card, article');
        const isProjectPage = pathname.startsWith('/work/') || pathname.startsWith('/lab/');
        if (isProjectCard || isProjectPage) {
          const projectName =
            target.getAttribute('data-project-name') ||
            target.closest('[data-project-title]')?.getAttribute('data-project-title') ||
            document.querySelector('h1')?.textContent?.trim() ||
            'Project Showcase';
          const ctaName = target.textContent?.trim() || 'View Demo';
          trackProjectCtaClick(projectName, ctaName, 'external_demo', pathname);
        }
      }
    }

    document.addEventListener('click', handleClick, { passive: true });
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [pathname]);

  return null;
}
