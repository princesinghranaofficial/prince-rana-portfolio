'use client';

import * as React from 'react';
import {
  trackEmailClick,
  trackLinkedInClick,
  trackGitHubClick,
  trackContactClick,
} from '@/lib/analytics';

/**
 * Passive Global Analytics Listener
 * 
 * Intercepts portfolio-wide interactions (social links, mailto links, key CTAs)
 * using event delegation. Completely unobtrusive with zero layout or DOM changes.
 */
export function AnalyticsListener() {
  React.useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = (event.target as HTMLElement | null)?.closest('a, button');
      if (!target) return;

      const href = target.getAttribute('href') || '';

      // 1. Email links
      if (href.startsWith('mailto:')) {
        const location = target.getAttribute('data-analytics-location') || 'page_link';
        trackEmailClick(location);
        return;
      }

      // 2. LinkedIn profile links
      if (href.includes('linkedin.com')) {
        const location = target.getAttribute('data-analytics-location') || 'social_link';
        trackLinkedInClick(location);
        return;
      }

      // 3. GitHub repository & profile links
      if (href.includes('github.com')) {
        const location = target.getAttribute('data-analytics-location') || 'social_link';
        trackGitHubClick(location);
        return;
      }

      // 4. Core Conversion CTAs
      if (href === '/book' || href.startsWith('/book?')) {
        trackContactClick(target.getAttribute('data-analytics-location') || 'cta', 'book_call');
        return;
      }

      if (href === '/start-project' || href.startsWith('/start-project?')) {
        trackContactClick(target.getAttribute('data-analytics-location') || 'cta', 'start_project');
        return;
      }

      if (href === '/contact' || href.startsWith('/contact?')) {
        trackContactClick(target.getAttribute('data-analytics-location') || 'cta', 'contact_page');
        return;
      }
    }

    document.addEventListener('click', handleClick, { passive: true });
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}
