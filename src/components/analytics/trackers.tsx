'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import { trackProjectView, trackArticleView } from '@/lib/analytics';

interface ProjectTrackerProps {
  slug: string;
  name: string;
}

/**
 * Invisible client-side tracker for project/case-study views.
 * Renders null to preserve 100% visual and layout fidelity.
 */
export function ProjectTracker({ slug, name }: ProjectTrackerProps) {
  const pathname = usePathname();

  React.useEffect(() => {
    trackProjectView(slug, name, pathname);
  }, [slug, name, pathname]);

  return null;
}

interface ArticleTrackerProps {
  slug: string;
  title: string;
  status?: string;
}

/**
 * Invisible client-side tracker for insight article views.
 * Strictly ignores non-published / sample drafts.
 * Renders null to preserve 100% visual and layout fidelity.
 */
export function ArticleTracker({ slug, title, status = 'published' }: ArticleTrackerProps) {
  const pathname = usePathname();

  React.useEffect(() => {
    if (status !== 'published') return;
    trackArticleView(slug, title, pathname);
  }, [slug, title, status, pathname]);

  return null;
}
