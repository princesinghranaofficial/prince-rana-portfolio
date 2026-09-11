'use client';

import * as React from 'react';
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
  React.useEffect(() => {
    trackProjectView(slug, name);
  }, [slug, name]);

  return null;
}

interface ArticleTrackerProps {
  slug: string;
  title: string;
}

/**
 * Invisible client-side tracker for insight article views.
 * Renders null to preserve 100% visual and layout fidelity.
 */
export function ArticleTracker({ slug, title }: ArticleTrackerProps) {
  React.useEffect(() => {
    trackArticleView(slug, title);
  }, [slug, title]);

  return null;
}
