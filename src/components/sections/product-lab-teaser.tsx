import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight, FlaskConical } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

const labCategories = [
  'Enterprise AI',
  'B2B Finance',
  'Clinical Operations',
  'Real Estate OS',
  'Commerce Intelligence',
  'Agency Management',
  'Cybersecurity SOC',
  'Product Analytics',
  'Sales CRM',
  'Productivity Workspace',
  'Adaptive EdTech',
  'Support Automation',
  'Talent OS',
  'Founder Dashboard',
  'Market Intelligence',
];

export function ProductLabTeaser() {
  return (
    <section className="py-20 md:py-28 border-t border-border/80 bg-surface-muted/30 relative">
      <Container size="wide">
        <div className="rounded-3xl border border-border bg-surface p-8 sm:p-12 lg:p-14 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-muted text-accent text-xs font-mono border border-accent/20">
                <FlaskConical className="w-3.5 h-3.5" />
                <span>Product Lab</span>
              </div>
              <h2 className="type-h2 text-text-primary">
                Exploring products across industries.
              </h2>
              <p className="type-body text-text-secondary">
                A dedicated lab of 15 distinct SaaS and AI digital product concepts across healthcare, finance, cybersecurity, commerce, analytics, and CRM architectures.
              </p>
            </div>

            <Link href="/lab">
              <Button
                variant="primary"
                size="md"
                className="font-semibold shadow-xs"
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
              >
                Explore Product Lab (15 Concepts)
              </Button>
            </Link>
          </div>

          {/* Horizontally Layered Industry Matrix Badges */}
          <div className="pt-6 border-t border-border/60">
            <span className="text-[11px] font-mono text-text-tertiary uppercase tracking-wider block mb-3 font-semibold">
              Covered Product Categories & Workspaces
            </span>
            <div className="flex flex-wrap gap-2">
              {labCategories.map((cat, idx) => (
                <span
                  key={cat}
                  className="text-xs font-mono px-3 py-1.5 rounded-lg bg-surface-100 text-text-secondary border border-border hover:border-border-strong hover:text-text-primary transition-colors select-none"
                >
                  <span className="text-text-tertiary mr-1.5">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
