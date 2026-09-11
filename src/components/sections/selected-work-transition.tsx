import * as React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { ArrowLink } from '@/components/ui/link';

/**
 * Requirement 37: Initial transition into next section (Selected Work)
 * Establishes visual narrative cadence without building the full Phase 4 section prematurely.
 */
export function SelectedWorkTransition() {
  return (
    <section className="py-20 md:py-28 border-t border-border/80 bg-surface-muted/30">
      <Container size="wide">
        <SectionHeader
          eyebrow="Selected Work"
          title="Products engineered from idea to production."
          description="A curated look into flagship SaaS architectures, autonomous AI workflows, and data-rich operational dashboards."
          action={
            <ArrowLink href="/work">
              Explore All Case Studies
            </ArrowLink>
          }
          align="split"
        />

        {/* Minimal structural placeholder frame foreshadowing the Phase 4 showcase */}
        <div className="rounded-2xl border border-dashed border-border p-8 sm:p-12 text-center text-xs font-mono text-text-tertiary bg-surface/50">
          <span>Flagship Case Studies (CollectAI & AI CFO) &rarr; Scheduled for Phase 4 Storytelling</span>
        </div>
      </Container>
    </section>
  );
}
