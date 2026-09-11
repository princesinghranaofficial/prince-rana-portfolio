'use client';

import * as React from 'react';
import Link from 'next/link';
import { Search, X, Clock, Calendar, ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { InsightArticle, InsightFilterCategory } from '@/types/insight';
import { trackEvent } from '@/lib/analytics';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface InsightsIndexClientProps {
  articles: InsightArticle[];
}

const filterTabs: { key: InsightFilterCategory; label: string }[] = [
  { key: 'ALL', label: 'All Insights' },
  { key: 'SAAS', label: 'SaaS' },
  { key: 'AI', label: 'AI Products' },
  { key: 'ENGINEERING', label: 'Engineering' },
  { key: 'PRODUCT', label: 'Product' },
  { key: 'DESIGN', label: 'UI/UX' },
  { key: 'PERFORMANCE', label: 'Performance' },
];

export function InsightsIndexClient({ articles }: InsightsIndexClientProps) {
  const [activeFilter, setActiveFilter] = React.useState<InsightFilterCategory>('ALL');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredArticles = React.useMemo(() => {
    return articles.filter((article) => {
      // Category match
      let matchesCategory = true;
      if (activeFilter === 'SAAS') {
        matchesCategory =
          article.category === 'SaaS Engineering' ||
          article.category === 'SaaS Development' ||
          article.tags.some((t) => t.toLowerCase().includes('saas'));
      } else if (activeFilter === 'AI') {
        matchesCategory =
          article.category === 'AI Product Engineering' ||
          article.category === 'AI Products' ||
          article.tags.some((t) => t.toLowerCase().includes('ai'));
      } else if (activeFilter === 'ENGINEERING') {
        matchesCategory =
          article.category === 'SaaS Engineering' ||
          article.category === 'Engineering' ||
          article.category === 'Performance & Production';
      } else if (activeFilter === 'PRODUCT') {
        matchesCategory =
          article.category === 'Product Architecture' ||
          article.category === 'Building Products' ||
          article.category === 'Startup Development';
      } else if (activeFilter === 'DESIGN') {
        matchesCategory =
          article.category === 'Product UI/UX' ||
          article.category === 'Product Design';
      } else if (activeFilter === 'PERFORMANCE') {
        matchesCategory =
          article.category === 'Performance & Production' ||
          article.tags.some((t) => t.toLowerCase().includes('performance'));
      }

      // Query match
      let matchesQuery = true;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        matchesQuery =
          article.title.toLowerCase().includes(q) ||
          article.description.toLowerCase().includes(q) ||
          article.excerpt.toLowerCase().includes(q) ||
          article.tags.some((t) => t.toLowerCase().includes(q));
      }

      return matchesCategory && matchesQuery;
    });
  }, [articles, activeFilter, searchQuery]);

  // Featured article is the first featured article, or the first article if no query/filter
  const featuredArticle = React.useMemo(() => {
    if (activeFilter === 'ALL' && !searchQuery.trim()) {
      return articles.find((a) => a.featured) || articles[0];
    }
    return null;
  }, [articles, activeFilter, searchQuery]);

  const regularArticles = React.useMemo(() => {
    if (featuredArticle) {
      return filteredArticles.filter((a) => a.id !== featuredArticle.id);
    }
    return filteredArticles;
  }, [filteredArticles, featuredArticle]);

  const handleArticleClick = (slug: string) => {
    trackEvent('insight_opened', { slug });
  };

  const handleResetFilters = () => {
    setActiveFilter('ALL');
    setSearchQuery('');
  };

  return (
    <div className="space-y-12">
      {/* Search & Filter Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl border border-border/70 bg-surface-50/60 dark:bg-surface-900/60 backdrop-blur-sm">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveFilter(tab.key)}
                className={cn(
                  'px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all whitespace-nowrap shrink-0',
                  isActive
                    ? 'bg-accent text-accent-foreground shadow-xs font-bold'
                    : 'bg-surface-100/60 dark:bg-surface-950/60 text-muted-foreground hover:text-foreground hover:bg-surface-200/60'
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72 shrink-0">
          <Search className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles, topics..."
            className="w-full pl-9 pr-8 py-2 rounded-xl bg-surface-100 dark:bg-surface-950 border border-border/60 text-xs text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:border-accent"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Featured Article Showcase (Shown on All Insights without search) */}
      {featuredArticle && (
        <div className="rounded-3xl border border-accent/40 bg-surface-50/80 dark:bg-surface-900/80 p-6 sm:p-10 shadow-xl relative overflow-hidden group">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full font-bold bg-accent text-accent-foreground uppercase tracking-wider">
                  Featured Insight
                </span>
                <span className="text-xs font-mono text-accent font-semibold">
                  {featuredArticle.category}
                </span>
                <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{featuredArticle.readingTime}</span>
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground group-hover:text-accent transition-colors leading-tight">
                <Link
                  href={`/insights/${featuredArticle.slug}`}
                  onClick={() => handleArticleClick(featuredArticle.slug)}
                >
                  {featuredArticle.title}
                </Link>
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
                {featuredArticle.excerpt || featuredArticle.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {featuredArticle.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-100 dark:bg-surface-800 text-muted-foreground border border-border/50"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6 pt-4 lg:pt-0 lg:border-l lg:border-border/60 lg:pl-8 w-full">
              <div className="space-y-3">
                <span className="text-[11px] font-mono uppercase text-muted-foreground block font-semibold">
                  Author & Metadata
                </span>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-foreground text-background flex items-center justify-center font-mono text-xs font-bold">
                    AV
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground block">
                      {featuredArticle.author.name}
                    </span>
                    <span className="text-[11px] text-muted-foreground block font-mono">
                      {featuredArticle.publishedAt}
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href={`/insights/${featuredArticle.slug}`}
                onClick={() => handleArticleClick(featuredArticle.slug)}
                className="w-full"
              >
                <Button variant="primary" className="w-full justify-between" rightIcon={<ArrowUpRight className="w-4 h-4" />}>
                  <span>Read Full Article</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Regular Articles Grid */}
      {regularArticles.length > 0 ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
            <span>Showing {filteredArticles.length} publication{filteredArticles.length !== 1 ? 's' : ''}</span>
            {searchQuery && (
              <span>Matching &ldquo;{searchQuery}&rdquo;</span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <article
                key={article.id}
                className="p-6 rounded-2xl border border-border/80 bg-surface-50/60 dark:bg-surface-900/60 flex flex-col justify-between space-y-6 hover:border-accent/40 transition-all duration-200 group shadow-xs"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-accent-muted text-accent font-semibold">
                      {article.category}
                    </span>
                    <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readingTime}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                    <Link
                      href={`/insights/${article.slug}`}
                      onClick={() => handleArticleClick(article.slug)}
                    >
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                    {article.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-muted-foreground">{article.publishedAt}</span>
                  <Link
                    href={`/insights/${article.slug}`}
                    onClick={() => handleArticleClick(article.slug)}
                    className="font-semibold text-foreground group-hover:text-accent flex items-center gap-1 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="p-12 sm:p-16 rounded-3xl border border-dashed border-border text-center space-y-4 max-w-md mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-surface-100 dark:bg-surface-800 text-muted-foreground flex items-center justify-center mx-auto">
            <Search className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-foreground">No insights match your criteria</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Try adjusting your search terms or resetting active category filters.
          </p>
          <Button variant="outline" size="sm" onClick={handleResetFilters}>
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
}
