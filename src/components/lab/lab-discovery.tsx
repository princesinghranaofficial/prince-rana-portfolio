'use client';

import * as React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, SlidersHorizontal, Sparkles, AlertCircle } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Input } from '@/components/ui/form';
import { FilterPill } from '@/components/ui/filter-pill';
import { Button } from '@/components/ui/button';
import { LabProjectCard } from '@/components/lab/lab-card';
import { ProductLabProject, LabCategory } from '@/types/lab';
import { trackEvent } from '@/lib/analytics';

interface LabDiscoveryProps {
  initialProjects: ProductLabProject[];
}

const CATEGORIES: { label: string; value: LabCategory }[] = [
  { label: 'All Architectures', value: 'All' },
  { label: 'AI Operations', value: 'AI' },
  { label: 'Fintech & Treasury', value: 'Fintech' },
  { label: 'Healthcare Systems', value: 'Healthcare' },
  { label: 'Real Estate SaaS', value: 'Real Estate' },
  { label: 'E-Commerce BI', value: 'Commerce' },
  { label: 'Agency OS', value: 'Agency' },
  { label: 'Cybersecurity SOC', value: 'Cybersecurity' },
  { label: 'Product Analytics', value: 'Analytics' },
  { label: 'AI Sales CRM', value: 'CRM' },
  { label: 'Productivity OS', value: 'Productivity' },
  { label: 'EdTech & Code', value: 'EdTech' },
  { label: 'Autonomous Support', value: 'Support' },
  { label: 'HR & Recruiting', value: 'HR' },
  { label: 'Startup Founder OS', value: 'Startup OS' },
  { label: 'Market Intelligence', value: 'Market Intelligence' },
];

export function LabDiscovery({ initialProjects }: LabDiscoveryProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // URL state synchronization
  const categoryParam = (searchParams.get('category') as LabCategory) || 'All';
  const queryParam = searchParams.get('q') || '';

  const [selectedCategory, setSelectedCategory] = React.useState<LabCategory>(categoryParam);
  const [searchQuery, setSearchQuery] = React.useState<string>(queryParam);

  // Sync state if URL changes externally
  React.useEffect(() => {
    setSelectedCategory((searchParams.get('category') as LabCategory) || 'All');
    setSearchQuery(searchParams.get('q') || '');
  }, [searchParams]);

  // Update URL params smoothly
  const updateUrl = React.useCallback(
    (newCategory: LabCategory, newQuery: string) => {
      const params = new URLSearchParams();
      if (newCategory !== 'All') {
        params.set('category', newCategory);
      }
      if (newQuery.trim()) {
        params.set('q', newQuery.trim());
      }

      const queryString = params.toString();
      const newPath = queryString ? `/lab?${queryString}` : '/lab';
      router.replace(newPath, { scroll: false });
    },
    [router]
  );

  const handleCategoryChange = (category: LabCategory) => {
    setSelectedCategory(category);
    updateUrl(category, searchQuery);
    trackEvent('lab_filter_selected', { category });
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    updateUrl(selectedCategory, val);
    if (val.length > 2) {
      trackEvent('lab_search_used', { query: val });
    }
  };

  const handleReset = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    updateUrl('All', '');
  };

  // Filter projects
  const filteredProjects = React.useMemo(() => {
    return initialProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const titleMatch = project.title.toLowerCase().includes(q);
      const taglineMatch = project.tagline.toLowerCase().includes(q);
      const descMatch = project.description.toLowerCase().includes(q);
      const industryMatch = project.industry.toLowerCase().includes(q);
      const capabilityMatch = project.capabilities.some((c) =>
        c.toLowerCase().includes(q)
      );
      const stackMatch = [
        ...project.stack.frontend,
        ...project.stack.backend,
        ...project.stack.database,
        ...(project.stack.ai || []),
      ].some((t) => t.toLowerCase().includes(q));

      return (
        titleMatch ||
        taglineMatch ||
        descMatch ||
        industryMatch ||
        capabilityMatch ||
        stackMatch
      );
    });
  }, [initialProjects, selectedCategory, searchQuery]);

  return (
    <div className="py-12">
      <Container size="default">
          {/* Controls Section */}
        <div className="space-y-6 mb-12 border-b border-border/50 pb-8">
          {/* Top Search bar with Active Match Counter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <label htmlFor="lab-search" className="sr-only">
                Search product architectures
              </label>
              <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
              <Input
                id="lab-search"
                type="search"
                placeholder="Search by keyword, stack, domain, or capability..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-10 pr-9 bg-surface-50 dark:bg-surface-900 border-border/70 focus:border-accent"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => handleSearchChange('')}
                  aria-label="Clear search input"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              )}
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3 text-xs font-mono text-muted-foreground">
              <span aria-live="polite" aria-atomic="true">
                Showing <strong className="text-foreground">{filteredProjects.length}</strong> of{' '}
                {initialProjects.length} Concepts
              </span>
              {(selectedCategory !== 'All' || searchQuery) && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-medium text-accent hover:underline inline-flex items-center gap-1"
                >
                  <X className="w-3 h-3" aria-hidden="true" />
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Filter Pills */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground uppercase tracking-wider" id="filter-label">
              <SlidersHorizontal className="w-3 h-3 text-accent" aria-hidden="true" />
              <span>Filter by Industry Domain:</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1" role="group" aria-labelledby="filter-label">
              {CATEGORIES.map((cat) => {
                const count =
                  cat.value === 'All'
                    ? initialProjects.length
                    : initialProjects.filter((p) => p.category === cat.value).length;

                return (
                  <FilterPill
                    key={cat.value}
                    active={selectedCategory === cat.value}
                    count={count}
                    onClick={() => handleCategoryChange(cat.value)}
                  >
                    {cat.label}
                  </FilterPill>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <AnimatePresence mode="popLayout">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="py-20 text-center space-y-4 rounded-2xl border border-dashed border-border/80 bg-surface-50/50 dark:bg-surface-900/30 max-w-xl mx-auto p-8"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-foreground">
                  No concept architectures match your filter
                </p>
                <p className="text-xs text-muted-foreground">
                  Try clearing your search query or selecting a different domain category.
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                className="text-xs mt-2"
              >
                Reset all filters
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project, idx) => (
                <LabProjectCard key={project.id} project={project} index={idx} />
              ))}
            </div>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
}
