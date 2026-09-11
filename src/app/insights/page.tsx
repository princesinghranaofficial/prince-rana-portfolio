import * as React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, Sparkles } from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { insightsData } from '@/data/insights';
import { InsightsIndexClient } from '@/components/insights/insights-index-client';

import { BreadcrumbJsonLd, JsonLdScript } from '@/components/seo/json-ld';
import { siteConfig, absoluteUrl } from '@/config/site';

export const metadata: Metadata = {
  title: 'Insights — SaaS Architecture, AI Products & Engineering',
  description:
    'Practical thinking on SaaS architecture, AI product design, full-stack engineering, product UX, and the decisions involved in taking software from idea to production.',
  alternates: {
    canonical: '/insights',
  },
  openGraph: {
    title: 'Insights — SaaS Architecture, AI Products & Engineering | Prince Rana',
    description:
      'Practical thinking on SaaS architecture, AI product design, full-stack engineering, product UX, and the decisions involved in taking software from idea to production.',
    url: '/insights',
    siteName: 'Prince Rana',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insights — SaaS Architecture, AI Products & Engineering | Prince Rana',
    description:
      'Practical thinking on SaaS architecture, AI product design, full-stack engineering, product UX, and the decisions involved in taking software from idea to production.',
  },
};

export default function InsightsPage() {
  // Only expose published articles for search engine structured data
  const publishedArticles = insightsData.filter((a) => a.status === 'published');
  // For interactive browsing: display published articles, or all articles during preview/demo mode
  const displayArticles = publishedArticles.length > 0 ? publishedArticles : insightsData;

  const collectionSchema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${absoluteUrl('/insights')}#collectionpage`,
    name: 'Technical Insights & Engineering Notes',
    description:
      'Articles on SaaS architecture, AI copilot engineering, full-stack systems, and product UI/UX by Prince Singh Rana.',
    url: absoluteUrl('/insights'),
    isPartOf: {
      '@id': `${siteConfig.url}/#website`,
    },
  };

  // Only include published articles in Schema.org hasPart (never draft/sample articles)
  if (publishedArticles.length > 0) {
    collectionSchema.hasPart = publishedArticles.map((a) => ({
      '@type': 'Article',
      '@id': `${absoluteUrl(`/insights/${a.slug}`)}#article`,
      headline: a.title,
      description: a.description,
      url: absoluteUrl(`/insights/${a.slug}`),
      datePublished: a.publishedAt,
      author: {
        '@type': 'Person',
        '@id': `${siteConfig.url}/#person`,
        name: a.author.name,
        url: `${siteConfig.url}/`,
      },
    }));
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent/20 selection:text-accent">
      {/* Structured Data */}
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Insights', path: '/insights' },
        ]}
      />
      <JsonLdScript data={collectionSchema} />

      <Navbar />

      <main id="main-content" className="flex-1 pt-32 pb-24 space-y-16 sm:space-y-20">
        <Container size="default">
          {/* Header */}
          <div className="max-w-3xl space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-muted text-accent text-xs font-mono border border-accent/20">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Technical Notes &amp; Architecture</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.08]">
              Notes on building better SaaS and AI products.
            </h1>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Practical thinking on SaaS architecture, AI product design, full-stack engineering, product UX, and the technical decisions involved in taking software from idea to production.
            </p>
          </div>

          {/* Interactive Index with Filtering & Search */}
          <InsightsIndexClient articles={displayArticles} />

          {/* Bottom Conversion Section */}
          <div className="mt-24 p-8 sm:p-14 rounded-3xl border border-accent/30 bg-surface-50/80 dark:bg-surface-900/80 backdrop-blur-md text-center space-y-6 shadow-xl">
            <div className="space-y-3 max-w-xl mx-auto">
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
                Work Together
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Planning a SaaS or AI product?
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                I help founders turn complex product concepts into scalable, production-ready software. Let&apos;s evaluate your technical scope and architecture.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/start-project">
                <Button variant="primary" size="lg" rightIcon={<ArrowUpRight className="w-4 h-4" />}>
                  Start a Project
                </Button>
              </Link>
              <Link href="/book">
                <Button variant="outline" size="lg">
                  Book a Discovery Call
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
