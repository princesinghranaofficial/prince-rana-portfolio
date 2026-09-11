import * as React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { LabHero } from '@/components/lab/lab-hero';
import { LabDiscovery } from '@/components/lab/lab-discovery';
import { LabConversion } from '@/components/lab/lab-conversion';
import { labProjects } from '@/data/lab-projects';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Product Lab — SaaS & AI Product Concepts',
  description:
    'An experimental product studio showcasing 15 self-directed SaaS and AI software architectures across 15 industries. Designed and engineered by Prince Rana with full architectural transparency.',
  alternates: {
    canonical: '/lab',
  },
  openGraph: {
    title: 'Product Lab — SaaS & AI Product Concepts | Prince Rana',
    description:
      'Explore 15 self-directed SaaS and AI product architectures designed and engineered by Prince Rana across 15 industries with complete architectural transparency.',
    url: '/lab',
    siteName: 'Prince Rana',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Prince Rana Product Lab — SaaS & AI Architectures',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Lab — SaaS & AI Product Concepts | Prince Rana',
    description:
      'Explore 15 self-directed SaaS and AI product architectures designed and engineered by Prince Rana across 15 industries.',
  },
};

export default function LabPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent/20 selection:text-accent">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Product Lab', path: '/lab' },
        ]}
      />
      <Navbar />
      <main id="main-content" className="flex-1">
        <LabHero />
        <React.Suspense
          fallback={
            <div className="py-24 text-center text-xs font-mono text-muted-foreground animate-pulse">
              Loading Product Lab architectures...
            </div>
          }
        >
          <LabDiscovery initialProjects={labProjects} />
        </React.Suspense>
        <LabConversion />
      </main>
      <Footer />
    </div>
  );
}
