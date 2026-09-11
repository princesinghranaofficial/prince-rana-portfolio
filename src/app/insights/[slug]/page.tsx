import * as React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Clock, 
  Calendar, 
  Share2, 
  Check, 
  Layers, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { insightsData } from '@/data/insights';
import { TableOfContents } from '@/components/insights/table-of-contents';
import { ArticleBodyRenderer } from '@/components/insights/article-body-renderer';
import { BreadcrumbJsonLd, ArticleJsonLd } from '@/components/seo/json-ld';
import { ArticleTracker } from '@/components/analytics/trackers';
import { cn } from '@/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insightsData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found | Prince Rana',
    };
  }

  const title = article.seo?.title || article.title;
  const description = article.seo?.description || article.description;
  const isDraft = article.status === 'draft';

  return {
    title,
    description,
    robots: isDraft
      ? {
          index: false,
          follow: true,
          nocache: true,
          googleBot: {
            index: false,
            follow: true,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    alternates: {
      canonical: `/insights/${article.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/insights/${article.slug}`,
      siteName: 'Prince Rana',
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,
      authors: [article.author.name],
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Derive related articles (prefer published articles, fallback to matching sample articles for preview)
  const publishedRelated = insightsData
    .filter((a) => a.status === 'published' && a.id !== article.id)
    .filter(
      (a) =>
        a.category === article.category ||
        a.tags.some((t) => article.tags.includes(t))
    );

  const fallbackRelated = insightsData
    .filter((a) => a.id !== article.id)
    .filter(
      (a) =>
        a.category === article.category ||
        a.tags.some((t) => article.tags.includes(t))
    );

  const relatedArticles = (publishedRelated.length > 0 ? publishedRelated : fallbackRelated).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent/20 selection:text-accent">
      <ArticleTracker slug={article.slug} title={article.title} status={article.status} />
      {/* Structured Data: Breadcrumbs retained for clean hierarchy */}
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Insights', path: '/insights' },
          { name: article.title, path: `/insights/${article.slug}` },
        ]}
      />
      {/* Suppress Article JSON-LD schema on draft/sample posts */}
      {article.status === 'published' && (
        <ArticleJsonLd
          headline={article.title}
          description={article.description}
          path={`/insights/${article.slug}`}
          datePublished={article.publishedAt}
          dateModified={article.updatedAt || article.publishedAt}
          keywords={article.tags}
        />
      )}

      <Navbar />

      <main id="main-content" className="flex-1 pt-32 pb-24 space-y-16">
        <Container size="default">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-8">
            <Link href="/insights" className="hover:text-foreground transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Insights</span>
            </Link>
            <span>/</span>
            <span className="text-accent">{article.category}</span>
          </div>

          {/* Article Header */}
          <header className="max-w-4xl space-y-6 pb-12 border-b border-border/70">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full font-bold bg-accent-muted text-accent border border-accent/20">
                {article.category}
              </span>
              <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readingTime}</span>
              </span>
              <span className="text-muted-foreground text-xs">&bull;</span>
              <span className="text-xs font-mono text-muted-foreground">{article.publishedAt}</span>
              {article.updatedAt && (
                <span className="text-xs font-mono text-muted-foreground/80">
                  (Updated {article.updatedAt})
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.12]">
              {article.title}
            </h1>

            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed font-normal">
              {article.description}
            </p>

            {/* Author Byline */}
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-foreground text-background flex items-center justify-center font-mono text-xs font-bold shadow-xs">
                  PR
                </div>
                <div>
                  <span className="text-sm font-bold text-foreground block">
                    {article.author.name}
                  </span>
                  <span className="text-xs text-muted-foreground block font-mono">
                    {article.author.role}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {article.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-100 dark:bg-surface-800 text-muted-foreground border border-border/40 hidden sm:inline-block"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          {/* Two-Column Reading Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-start">
            {/* Main Reading Column */}
            <article className="lg:col-span-8 max-w-3xl">
              <ArticleBodyRenderer content={article.content} />

              {/* Tags Strip */}
              <div className="mt-14 pt-6 border-t border-border/60 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-muted-foreground mr-2">Topics:</span>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-surface-100 dark:bg-surface-800 text-foreground border border-border/50"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Author Bio Card */}
              <div className="mt-10 p-6 rounded-2xl border border-border/80 bg-surface-50/60 dark:bg-surface-900/60 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-foreground text-background flex items-center justify-center font-mono text-sm font-bold shrink-0">
                  PR
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-foreground">{article.author.name}</span>
                    <span className="text-xs font-mono text-accent">Author</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Full-Stack SaaS &amp; AI Product Developer. Based in India, collaborating with founders internationally to design, engineer, and deploy high-performing digital products.
                  </p>
                </div>
              </div>
            </article>

            {/* Sticky Sidebar (Table of Contents & Contextual Proof) */}
            <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
              {/* Table of Contents */}
              {article.toc && article.toc.length > 0 && (
                <div className="p-5 rounded-2xl border border-border/70 bg-surface-50/40 dark:bg-surface-900/40">
                  <TableOfContents items={article.toc} />
                </div>
              )}

              {/* Connected Portfolio Proof */}
              {article.relatedProjects && article.relatedProjects.length > 0 && (
                <div className="p-5 rounded-2xl border border-border/70 bg-surface-50/40 dark:bg-surface-900/40 space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-foreground block pb-1 border-b border-border/50">
                    Related Portfolio Proof
                  </span>
                  <div className="space-y-2.5">
                    {article.relatedProjects.map((proj) => (
                      <Link
                        key={proj.slug}
                        href={proj.href}
                        className="p-3 rounded-xl bg-surface-100/70 dark:bg-surface-950/70 border border-border/50 hover:border-accent/50 transition-colors block group/proj"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-foreground group-hover/proj:text-accent transition-colors flex items-center gap-1">
                            <span>{proj.title}</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </span>
                          <span
                            className={cn(
                              'text-[9px] font-mono px-1.5 py-0.5 rounded font-bold',
                              proj.type === 'REAL PRODUCT'
                                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                                : 'bg-accent/10 text-accent'
                            )}
                          >
                            {proj.type === 'REAL PRODUCT' ? 'Built Product' : proj.type}
                          </span>
                        </div>
                        <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed">
                          {proj.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Services */}
              {article.relatedServices && article.relatedServices.length > 0 && (
                <div className="p-5 rounded-2xl border border-border/70 bg-surface-50/40 dark:bg-surface-900/40 space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-foreground block pb-1 border-b border-border/50">
                    Relevant Services
                  </span>
                  <div className="space-y-1.5">
                    {article.relatedServices.map((srv) => (
                      <Link
                        key={srv.slug}
                        href={srv.href}
                        className="flex items-center justify-between p-2 rounded-lg text-xs font-mono text-muted-foreground hover:text-accent hover:bg-surface-100 dark:hover:bg-surface-950 transition-colors"
                      >
                        <span>{srv.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>

          {/* Related Insights Grid */}
          {relatedArticles.length > 0 && (
            <div className="mt-24 pt-16 border-t border-border/70 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
                    Keep Reading
                  </span>
                  <h3 className="text-2xl font-bold text-foreground">
                    Related Engineering Notes
                  </h3>
                </div>
                <Link href="/insights">
                  <Button variant="ghost" size="sm" className="text-xs font-mono">
                    <span>View All Insights</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((rel) => (
                  <article
                    key={rel.id}
                    className="p-6 rounded-2xl border border-border/80 bg-surface-50/60 dark:bg-surface-900/60 flex flex-col justify-between space-y-4 hover:border-accent/40 transition-colors group"
                  >
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono text-accent font-semibold">
                        {rel.category}
                      </span>
                      <h4 className="text-base font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                        <Link href={`/insights/${rel.slug}`}>{rel.title}</Link>
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {rel.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs font-mono text-muted-foreground">
                      <span>{rel.readingTime}</span>
                      <Link
                        href={`/insights/${rel.slug}`}
                        className="font-semibold text-foreground group-hover:text-accent flex items-center gap-1"
                      >
                        <span>Read</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* End-of-Article Conversion CTA */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl border border-accent/30 bg-surface-50/80 dark:bg-surface-900/80 backdrop-blur-md text-center space-y-6 shadow-xl">
            <div className="space-y-2 max-w-xl mx-auto">
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
                Building Something Similar?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Let&apos;s build your product right the first time.
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Whether you need multi-tenant SaaS architecture, an embedded AI copilot, or full-stack engineering, I help founders take products from concept to production.
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
