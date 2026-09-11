import * as React from 'react';
import { Container } from '@/components/ui/container';
import { projectsData } from '@/data/projects';

export function WorkHero() {
  const realCount = projectsData.filter((p) => p.projectType === 'REAL PRODUCT').length;
  const conceptCount = projectsData.filter((p) => p.projectType !== 'REAL PRODUCT').length;

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-border/60 bg-background relative overflow-hidden">
      {/* Subtle background radial tint */}
      <div 
        className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-accent/5 blur-[100px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <Container size="wide">
        <div className="max-w-4xl space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-muted text-accent text-xs font-mono border border-accent/20">
            <span>SaaS &amp; AI Product Portfolio</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary leading-[1.1]">
            SaaS and AI products engineered for real business workflows.
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
            A portfolio of production SaaS platforms, AI automation systems, and digital product architectures engineered by Prince Rana with Next.js, TypeScript, and Supabase.
          </p>

          {/* Dynamic Authentic Metadata Counts */}
          <div className="pt-4 flex flex-wrap items-center gap-3 text-xs font-mono">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-surface-muted/60 text-text-primary">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="font-semibold">{realCount} Built Products</span>
              <span className="text-text-tertiary">(Commercial Deployments)</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-surface-muted/60 text-text-primary">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="font-semibold">{conceptCount} Product Concepts</span>
              <span className="text-text-tertiary">(Product Lab Systems)</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
