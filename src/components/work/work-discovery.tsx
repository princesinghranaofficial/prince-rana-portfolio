'use client';

import * as React from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

import { 
  Search, 
  X, 
  RotateCcw, 
  Info 
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { ProjectCard } from '@/components/ui/card';
import { projectsData } from '@/data/projects';
import { trackEvent } from '@/lib/analytics';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

// Filter categories requested in Requirement 12
const filterOptions: { label: string; value: string; matchKey: string }[] = [
  { label: 'ALL', value: 'all', matchKey: 'ALL' },
  { label: 'AI', value: 'ai', matchKey: 'AI' },
  { label: 'B2B SAAS', value: 'b2b-saas', matchKey: 'B2B' },
  { label: 'FINTECH', value: 'fintech', matchKey: 'Fintech' },
  { label: 'HEALTHCARE', value: 'healthcare', matchKey: 'Healthcare' },
  { label: 'REAL ESTATE', value: 'real-estate', matchKey: 'Real Estate' },
  { label: 'COMMERCE', value: 'commerce', matchKey: 'Commerce' },
  { label: 'CYBERSECURITY', value: 'cybersecurity', matchKey: 'Cybersecurity' },
  { label: 'ANALYTICS', value: 'analytics', matchKey: 'Analytics' },
  { label: 'CRM', value: 'crm', matchKey: 'CRM' },
  { label: 'PRODUCTIVITY', value: 'productivity', matchKey: 'Productivity' },
  { label: 'EDTECH', value: 'edtech', matchKey: 'EdTech' },
];

function WorkDiscoveryContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const shouldReduceMotion = useReducedMotion();

  // URL State initialization
  const initialCategory = searchParams.get('category') || 'all';
  const [selectedFilter, setSelectedFilter] = React.useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  // Sync state if URL changes externally
  React.useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    setSelectedFilter(cat);
  }, [searchParams]);

  // Concept & Prototype projects (excluding the 2 flagship projects already showcased prominently above)
  const conceptProjects = React.useMemo(() => {
    return projectsData.filter((p) => p.slug !== 'collectai' && p.slug !== 'ai-cfo');
  }, []);

  // Update URL state and track event
  const handleFilterSelect = (filterValue: string) => {
    setSelectedFilter(filterValue);
    trackEvent('work_filter_selected', { category: filterValue });

    const params = new URLSearchParams(searchParams.toString());
    if (filterValue === 'all') {
      params.delete('category');
    } else {
      params.set('category', filterValue);
    }
    const newQuery = params.toString();
    router.replace(newQuery ? `${pathname}?${newQuery}` : pathname, { scroll: false });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);
  };

  // Debounced/settled analytics tracking for search
  React.useEffect(() => {
    if (!searchQuery.trim()) return;
    const timer = setTimeout(() => {
      trackEvent('work_search_used', { query: searchQuery.trim() });
    }, 800);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleClearFilters = () => {
    setSelectedFilter('all');
    setSearchQuery('');
    trackEvent('work_clear_filters');
    const params = new URLSearchParams(searchParams.toString());
    params.delete('category');
    const newQuery = params.toString();
    router.replace(newQuery ? `${pathname}?${newQuery}` : pathname, { scroll: false });
  };

  // Matching algorithm across project metadata
  const filteredProjects = React.useMemo(() => {
    return conceptProjects.filter((project) => {
      // Category / Industry match
      let matchesFilter = true;
      if (selectedFilter !== 'all') {
        const option = filterOptions.find((o) => o.value === selectedFilter);
        const target = option ? option.matchKey.toLowerCase() : selectedFilter.toLowerCase();
        
        const catMatch = project.category.toLowerCase().includes(target);
        const indMatch = project.industries?.some((ind) => ind.toLowerCase().includes(target)) ?? false;
        matchesFilter = catMatch || indMatch;
      }

      // Search match across multiple fields
      let matchesSearch = true;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const titleMatch = project.title.toLowerCase().includes(q);
        const subMatch = project.subtitle.toLowerCase().includes(q);
        const descMatch = project.description.toLowerCase().includes(q);
        const catMatch = project.category.toLowerCase().includes(q);
        const techMatch = project.technologies.some((t) => t.toLowerCase().includes(q));
        const capMatch = project.capabilities?.some((c) => c.toLowerCase().includes(q)) ?? false;
        const indMatch = project.industries?.some((i) => i.toLowerCase().includes(q)) ?? false;

        matchesSearch = titleMatch || subMatch || descMatch || catMatch || techMatch || capMatch || indMatch;
      }

      return matchesFilter && matchesSearch;
    });
  }, [conceptProjects, selectedFilter, searchQuery]);

  const isFiltered = selectedFilter !== 'all' || searchQuery.trim().length > 0;

  return (
    <section className="py-20 md:py-32 border-b border-border/60 bg-background relative" id="explore">
      <Container size="wide">
        {/* Discovery Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-border/60">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase block">
              EXPLORE WORK
            </span>
            <h2 className="type-h2 text-text-primary">
              Products across industries.
            </h2>
            <p className="type-body text-text-secondary">
              Explore product concepts by industry, capability or problem space. Each project demonstrates deliberate UX modeling, database schemas, and architectural patterns.
            </p>
          </div>

          {/* Status Explanation Affordance */}
          <div className="p-4 rounded-xl border border-border bg-surface-muted/60 text-xs font-mono space-y-1.5 max-w-sm shrink-0">
            <div className="flex items-center gap-2 text-text-primary font-semibold mb-1">
              <Info className="w-3.5 h-3.5 text-accent" />
              <span>Project Status Guide</span>
            </div>
            <div className="text-[11px] text-text-secondary flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              <span><strong>Real Product:</strong> Live commercial software deployment.</span>
            </div>
            <div className="text-[11px] text-text-secondary flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span><strong>Concept:</strong> Architectural & interface exploration.</span>
            </div>
            <div className="text-[11px] text-text-secondary flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
              <span><strong>Prototype:</strong> Interactive or technical proof of concept.</span>
            </div>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="py-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <label htmlFor="work-search" className="sr-only">
                Search projects by name, capability or technology
              </label>
              <Search className="w-4 h-4 text-text-tertiary absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="work-search"
                type="text"
                placeholder="Search projects, capabilities, or tech stack..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-border bg-surface text-xs font-mono text-text-primary placeholder:text-text-tertiary focus:outline-hidden focus:border-accent focus:ring-1 focus:ring-accent transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-text-tertiary hover:text-text-primary"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Results Count & Reset Affordance */}
            <div className="flex items-center justify-between md:justify-end gap-3 text-xs font-mono text-text-secondary">
              <span>
                {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} found
              </span>
              {isFiltered && (
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-border bg-surface hover:bg-surface-muted text-accent hover:text-text-primary transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Horizontal Scrollable Category Filter Pills */}
          <div className="relative">
            <div 
              className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none scroll-smooth"
              role="tablist"
              aria-label="Filter projects by category"
            >
              {filterOptions.map((opt) => {
                const isActive = selectedFilter === opt.value;
                const count =
                  opt.value === 'all'
                    ? conceptProjects.length
                    : conceptProjects.filter((p) => {
                        const target = opt.matchKey.toLowerCase();
                        return (
                          p.category.toLowerCase().includes(target) ||
                          (p.industries?.some((ind) => ind.toLowerCase().includes(target)) ?? false)
                        );
                      }).length;

                return (
                  <button
                    key={opt.value}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleFilterSelect(opt.value)}
                    className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all select-none ${
                      isActive
                        ? 'border-accent bg-accent-muted text-accent font-bold ring-1 ring-accent/30'
                        : 'border-border bg-surface text-text-secondary hover:border-border-strong hover:text-text-primary'
                    }`}
                  >
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                    <span>{opt.label}</span>
                    <span className="text-[10px] text-text-tertiary">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Project Grid / Empty State */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center space-y-4 rounded-2xl border border-dashed border-border bg-surface-muted/30">
            <p className="type-h3 text-text-primary">
              No projects match your criteria.
            </p>
            {searchQuery && (
              <p className="type-body-small text-text-tertiary font-mono">
                No results found for &ldquo;{searchQuery}&rdquo; under {selectedFilter.toUpperCase()}.
              </p>
            )}
            <div>
              <button
                type="button"
                onClick={handleClearFilters}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent text-accent-foreground text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear All Filters</span>
              </button>
            </div>
          </div>
        ) : isFiltered ? (
          /* Predictable Uniform Responsive Grid for Filtered States */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout={!shouldReduceMotion}
                  initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* Art-Directed Editorial Rhythm on Default "All" State */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, idx) => {
              // Rhythmic spans: project 0 and 3 span 2 columns on desktop for visual editorial variation
              const isLarge = idx === 0 || idx === 3;

              return (
                <div
                  key={project.id}
                  className={isLarge ? 'md:col-span-2' : 'col-span-1'}
                >
                  <ProjectCard project={project} featured={isLarge} />
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}

export function WorkDiscovery() {
  return (
    <React.Suspense fallback={
      <section className="py-20 border-b border-border/60 bg-background">
        <Container size="wide">
          <div className="h-40 rounded-2xl bg-surface-muted/40 animate-pulse" />
        </Container>
      </section>
    }>
      <WorkDiscoveryContent />
    </React.Suspense>
  );
}
