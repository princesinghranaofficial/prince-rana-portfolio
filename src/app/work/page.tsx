import * as React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { WorkHero } from '@/components/work/work-hero';
import { WorkFeaturedProjects } from '@/components/work/work-featured-projects';
import { WorkDiscovery } from '@/components/work/work-discovery';
import { WorkConversion } from '@/components/work/work-conversion';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Projects — SaaS & AI Products by Prince Rana',
  description:
    'Explore production SaaS platforms, AI automation systems, and full-stack web applications engineered by Prince Rana. Review architecture, tech stacks, and live case studies.',
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title: 'Projects — SaaS & AI Products by Prince Rana',
    description:
      'Explore production SaaS platforms, AI automation systems, and full-stack web applications engineered by Prince Rana. Review architecture, tech stacks, and live case studies.',
    url: '/work',
    siteName: 'Prince Rana',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects — SaaS & AI Products by Prince Rana',
    description:
      'Explore production SaaS platforms, AI automation systems, and full-stack web applications engineered by Prince Rana. Review architecture, tech stacks, and live case studies.',
  },
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background text-text-primary flex flex-col selection:bg-accent selection:text-accent-foreground">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Work', path: '/work' },
        ]}
      />
      {/* Global Sticky Navigation */}
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* 1. Restrained Editorial Work Hero with Dynamic Authentic Counts */}
        <WorkHero />

        {/* 2. Primary Proof: Large Editorial Compositions for CollectAI and AI CFO */}
        <WorkFeaturedProjects />

        {/* 3. Project Discovery: Category Filters, Search, URL State, Status Guide & Dynamic Grid */}
        <WorkDiscovery />

        {/* 4. Work Page Conversion Narrative: Direct Dual CTAs */}
        <WorkConversion />
      </main>

      {/* Global Minimal Footer */}
      <Footer />
    </div>
  );
}
