import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { insightsData } from '@/data/insights';

export function InsightsPreview() {
  // Filter only published articles and show top 3
  const publishedArticles = insightsData
    .filter((a) => a.status === 'published')
    .slice(0, 3);

  if (publishedArticles.length === 0) {
    return null;
  }

  return (
    <section className="py-20 md:py-32 border-t border-border/80 bg-background relative">
      <Container size="wide">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Writing & Technical Guides"
          title="Insights on building SaaS and AI products."
          description="Deep-dive architectural essays, cost analyses, and engineering blueprints written from the trenches of production SaaS engineering."
          action={
            <Link href="/insights">
              <Button variant="outline" size="sm" rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}>
                View All Insights
              </Button>
            </Link>
          }
          align="split"
        />

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {publishedArticles.map((article) => (
            <article
              key={article.id}
              className="rounded-2xl border border-border bg-surface p-6 sm:p-7 flex flex-col justify-between hover:border-border-strong transition-all group shadow-xs"
            >
              <div className="space-y-4">
                {/* Meta Bar */}
                <div className="flex items-center justify-between">
                  <Badge variant="category">{article.category}</Badge>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-text-secondary">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readingTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="type-h3 text-text-primary group-hover:text-accent transition-colors line-clamp-2">
                  <Link
                    href={`/insights/${article.slug}`}
                    className="focus:outline-hidden"
                  >
                    {article.title}
                  </Link>
                </h3>

                {/* Description */}
                <p className="type-body-small text-text-secondary line-clamp-3">
                  {article.description}
                </p>
              </div>

              {/* Card Footer Link */}
              <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between text-xs font-mono">
                <span className="text-text-secondary">
                  {new Date(article.publishedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
                <Link
                  href={`/insights/${article.slug}`}
                  aria-label={`Read article: ${article.title}`}
                  className="text-text-primary font-semibold group-hover:text-accent flex items-center gap-1 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
