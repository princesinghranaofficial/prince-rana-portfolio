import * as React from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Sparkles, 
  Clock, 
  TrendingUp, 
  Receipt 
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { BodyLarge } from '@/components/ui/typography';
import { Badge } from '@/components/ui/badge';
import { ProjectStatus } from '@/components/ui/project-status';
import { Button } from '@/components/ui/button';

export function CollectAIShowcase() {
  return (
    <section className="py-20 md:py-32 border-t border-border/80 bg-background relative overflow-hidden">
      <Container size="wide">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Selected Work 01"
          title="Products engineered from idea to production."
          description="A selection of SaaS and AI products combining product strategy, interface design, full-stack engineering and production architecture."
          align="left"
        />

        {/* CollectAI Asymmetric Editorial Showcase */}
        <div className="mt-12 rounded-3xl border border-border-strong bg-surface p-6 sm:p-10 lg:p-14 space-y-12 shadow-sm">
          {/* Top Story Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <ProjectStatus status="REAL PRODUCT" size="sm" />
                <Badge variant="category">AI Accounts Receivable SaaS</Badge>
                <span className="text-xs font-mono text-text-secondary">2025 Release</span>
              </div>

              <h3 className="type-h2 text-text-primary">
                CollectAI — Autonomous accounts receivable, built around getting businesses paid faster.
              </h3>

              <BodyLarge className="text-text-secondary">
                Accounts receivable teams lose dozens of hours every week chasing overdue invoices across spreadsheets and email chains. CollectAI transforms collections into an autonomous workflow engine that forecasts cash inflow, segments payment risk, and coordinates follow-ups with an integrated AI collector.
              </BodyLarge>
            </div>

            {/* Compact Metadata Column */}
            <div className="lg:col-span-4 p-5 rounded-2xl border border-border bg-surface-muted space-y-4 font-mono text-xs">
              <div>
                <span className="text-text-secondary block text-[10px] uppercase font-bold tracking-wider">Role & Ownership</span>
                <span className="text-text-primary font-semibold block mt-0.5">Product Architecture, UI/UX Design & Full-Stack Development</span>
              </div>
              <div className="pt-3 border-t border-border/60">
                <span className="text-text-secondary block text-[10px] uppercase font-bold tracking-wider">Production Stack</span>
                <span className="text-text-primary font-semibold block mt-0.5">Next.js, TypeScript, Supabase, PostgreSQL, Node.js, Razorpay</span>
              </div>
              <div className="pt-3 border-t border-border/60">
                <span className="text-text-secondary block text-[10px] uppercase font-bold tracking-wider">Status Verification</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold block mt-0.5">Built Full-Stack SaaS</span>
              </div>
            </div>
          </div>

          {/* Art-Directed Large Interface Composition */}
          <div className="rounded-2xl border border-border-strong bg-background p-4 sm:p-7 shadow-product space-y-6">
            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-border pb-3 text-xs">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
                </div>
                <span className="ml-3 font-mono text-[11px] text-text-secondary">
                  app.collectai.io / accounts-receivable
                </span>
              </div>
              <span className="text-[11px] font-mono text-text-secondary">
                Demo environment · Illustrative data
              </span>
            </div>

            {/* Dashboard Mockup Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Metric 1 */}
              <div className="p-4 rounded-xl border border-border bg-surface-muted space-y-1">
                <div className="flex items-center justify-between text-xs text-text-secondary font-mono">
                  <span>OVERDUE INVOICES</span>
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                </div>
                <span className="text-xl font-mono font-bold text-text-primary block">$142,850</span>
                <span className="text-[11px] text-amber-600 dark:text-amber-400 font-mono block">14 accounts past 30 days</span>
              </div>

              {/* Metric 2 */}
              <div className="p-4 rounded-xl border border-border bg-surface-muted space-y-1">
                <div className="flex items-center justify-between text-xs text-text-secondary font-mono">
                  <span>AI RECOVERED</span>
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                </div>
                <span className="text-xl font-mono font-bold text-emerald-600 dark:text-emerald-400 block">$98,400</span>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono block">+24.8% cash velocity</span>
              </div>

              {/* Metric 3 */}
              <div className="p-4 rounded-xl border border-border bg-surface-muted space-y-1">
                <div className="flex items-center justify-between text-xs text-text-secondary font-mono">
                  <span>AVERAGE DSO</span>
                  <Receipt className="w-3.5 h-3.5 text-accent" />
                </div>
                <span className="text-xl font-mono font-bold text-text-primary block">18.4 Days</span>
                <span className="text-[11px] text-accent font-mono block">-8.2 days reduction</span>
              </div>
            </div>

            {/* AI Collector Agent Activity Preview */}
            <div className="p-5 rounded-xl border border-accent/30 bg-accent-muted space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-accent font-semibold text-xs sm:text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>AI Collector Agent — Automated Escalation Strategy</span>
                </div>
                <Badge variant="accent" size="sm">Active Workflow</Badge>
              </div>
              <p className="text-xs sm:text-sm text-text-primary/90 leading-relaxed">
                Autonomous escalation executed for Acme Logistics ($14,200). Dynamically calibrated tone for senior executive contact. Payment link generated with 2.5% early-settlement incentive. Webhook listener active for instant settlement reconciliation.
              </p>
            </div>
          </div>

          {/* Key Capabilities Pills & Case Study CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-border gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" size="md">Autonomous Workflows</Badge>
              <Badge variant="outline" size="md">Dynamic Payment Links</Badge>
              <Badge variant="outline" size="md">Tenant RLS Security</Badge>
              <Badge variant="outline" size="md">Aging Analytics</Badge>
            </div>

            <Link href="/work/collectai">
              <Button
                variant="primary"
                size="md"
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
              >
                View Full CollectAI Case Study
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
