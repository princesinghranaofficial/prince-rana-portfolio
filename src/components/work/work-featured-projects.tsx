import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Bot } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { ProjectStatus } from '@/components/ui/project-status';
import { Button } from '@/components/ui/button';

export function WorkFeaturedProjects() {
  return (
    <section className="py-20 md:py-32 border-b border-border/60 bg-background relative">
      <Container size="wide">
        {/* Section Lead */}
        <div className="mb-14 space-y-3 max-w-2xl">
          <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase block">
            Primary Proof
          </span>
          <h2 className="type-h2 text-text-primary">
            Featured Flagship Products
          </h2>
          <p className="type-body text-text-secondary">
            Production-deployed commercial SaaS platforms engineered end-to-end — from database architecture and security rules to polished, responsive interfaces.
          </p>
        </div>

        <div className="space-y-20 lg:space-y-28">
          {/* ========================================================================= */}
          {/* FEATURE 01: COLLECTAI */}
          {/* ========================================================================= */}
          <div className="rounded-3xl border border-border-strong bg-surface p-6 sm:p-10 lg:p-14 space-y-10 shadow-sm">
            {/* Header / Story Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-sm font-bold text-accent">01</span>
                  <ProjectStatus status="REAL PRODUCT" size="sm" />
                  <Badge variant="category">AI Accounts Receivable SaaS</Badge>
                  <span className="text-xs font-mono text-text-secondary">2025 Release</span>
                </div>

                <h3 className="type-h2 text-text-primary">
                  CollectAI — Autonomous accounts receivable, built around getting businesses paid faster.
                </h3>

                <p className="type-body text-text-secondary">
                  Accounts receivable teams lose dozens of hours every week chasing overdue invoices across spreadsheets and email chains. CollectAI transforms collections into an autonomous workflow engine that forecasts cash inflow, segments payment risk, and coordinates follow-ups with an integrated AI collector.
                </p>

                {/* Selected Capabilities Badges */}
                <div className="pt-2 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-text-secondary font-bold block">
                    Core Capabilities
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'AI Collector',
                      'Receivables',
                      'Invoice Management',
                      'Collection Workflows',
                      'AI Copilot',
                    ].map((cap) => (
                      <span
                        key={cap}
                        className="text-xs font-mono px-3 py-1 rounded-md bg-surface-muted text-text-primary border border-border/80"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stack & Metadata Column */}
              <div className="lg:col-span-4 p-5 rounded-2xl border border-border bg-surface-muted space-y-4 font-mono text-xs">
                <div>
                  <span className="text-text-secondary block text-[10px] uppercase font-bold tracking-wider">Role & Scope</span>
                  <span className="text-text-primary font-semibold block mt-0.5">Product Architecture, UI/UX Design & Full-Stack Development</span>
                </div>
                <div className="pt-3 border-t border-border/60">
                  <span className="text-text-secondary block text-[10px] uppercase font-bold tracking-wider">Production Stack</span>
                  <span className="text-text-primary font-semibold block mt-0.5">Next.js 15, TypeScript, Supabase, PostgreSQL, Node.js, Razorpay</span>
                </div>
                <div className="pt-4 border-t border-border/60">
                  <Link href="/work/collectai">
                    <Button variant="primary" size="md" className="w-full font-semibold" rightIcon={<ArrowUpRight className="w-4 h-4" />}>
                      View Case Study &rarr;
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Art-Directed Large Interface Visual Composition */}
            <div className="rounded-2xl border border-border bg-background p-4 sm:p-7 shadow-product space-y-6">
              <div className="flex items-center justify-between border-b border-border pb-3 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
                    <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
                    <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
                  </div>
                  <span className="ml-3 font-mono text-[11px] text-text-secondary">app.collectai.io / receivables</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">● Live Architecture</span>
              </div>

              {/* AR Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-border bg-surface-muted space-y-1">
                  <span className="text-[10px] font-mono uppercase text-text-secondary block">Total Outstanding AR</span>
                  <span className="text-xl font-mono font-bold text-text-primary block">$142,850</span>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono block">84% Collected This Month</span>
                </div>

                <div className="p-4 rounded-xl border border-border bg-surface-muted space-y-1">
                  <span className="text-[10px] font-mono uppercase text-text-secondary block">Average DSO</span>
                  <span className="text-xl font-mono font-bold text-text-primary block">32.4 Days</span>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono block">-8.1 Days Improvement</span>
                </div>

                <div className="p-4 rounded-xl border border-border bg-surface-muted space-y-1">
                  <span className="text-[10px] font-mono uppercase text-text-secondary block">Autonomous AI Invocations</span>
                  <span className="text-xl font-mono font-bold text-text-primary block">1,420</span>
                  <span className="text-[11px] text-text-secondary font-mono block">Zero Manual Email Triggers</span>
                </div>
              </div>

              {/* Aging Schedule Cohort Bars */}
              <div className="p-4 rounded-xl border border-border bg-surface-muted space-y-3">
                <span className="text-xs font-mono font-semibold text-text-primary block">Receivables Aging Distribution</span>
                <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-surface border border-border">
                    <span className="text-text-secondary block text-[10px]">0–30 Days</span>
                    <span className="font-bold text-text-primary">$86,400</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface border border-border">
                    <span className="text-text-secondary block text-[10px]">31–60 Days</span>
                    <span className="font-bold text-text-primary">$38,200</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface border border-border">
                    <span className="text-text-secondary block text-[10px]">61–90 Days</span>
                    <span className="font-bold text-text-primary">$12,150</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface border border-border">
                    <span className="text-text-secondary block text-[10px]">90+ Days</span>
                    <span className="font-bold text-amber-600 dark:text-amber-400">$6,100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* FEATURE 02: AI CFO & COPILOT */}
          {/* ========================================================================= */}
          <div className="rounded-3xl border border-border-strong bg-surface p-6 sm:p-10 lg:p-14 space-y-10 shadow-sm">
            {/* Header / Story Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-sm font-bold text-accent">02</span>
                  <ProjectStatus status="REAL PRODUCT" size="sm" />
                  <Badge variant="category">AI Financial Intelligence SaaS</Badge>
                  <span className="text-xs font-mono text-text-secondary">2025 Release</span>
                </div>

                <h3 className="type-h2 text-text-primary">
                  AI CFO & Copilot — Financial intelligence designed for better business decisions.
                </h3>

                <p className="type-body text-text-secondary">
                  Traditional accounting tools report the past, while spreadsheet models break under changing assumptions. AI CFO & Copilot unifies banking webhooks, operational expenses, and recurring revenue into real-time runway forecasting and conversational financial scenario modeling.
                </p>

                {/* Selected Capabilities Badges */}
                <div className="pt-2 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-text-secondary font-bold block">
                    Core Capabilities
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Cash Flow',
                      'Forecasting',
                      'Financial Insights',
                      'Reports',
                      'AI Copilot',
                    ].map((cap) => (
                      <span
                        key={cap}
                        className="text-xs font-mono px-3 py-1 rounded-md bg-surface-muted text-text-primary border border-border/80"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stack & Metadata Column */}
              <div className="lg:col-span-4 p-5 rounded-2xl border border-border bg-surface-muted space-y-4 font-mono text-xs">
                <div>
                  <span className="text-text-secondary block text-[10px] uppercase font-bold tracking-wider">Role & Scope</span>
                  <span className="text-text-primary font-semibold block mt-0.5">Product Design & Full-Stack Architecture</span>
                </div>
                <div className="pt-3 border-t border-border/60">
                  <span className="text-text-secondary block text-[10px] uppercase font-bold tracking-wider">Production Stack</span>
                  <span className="text-text-primary font-semibold block mt-0.5">React, TypeScript, Node.js, PostgreSQL, Tailwind CSS, Cloudflare</span>
                </div>
                <div className="pt-4 border-t border-border/60">
                  <Link href="/work/ai-cfo-copilot">
                    <Button variant="primary" size="md" className="w-full font-semibold" rightIcon={<ArrowUpRight className="w-4 h-4" />}>
                      View Case Study &rarr;
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Art-Directed Visual Composition: Financial Intelligence + Copilot Dialogue */}
            <div className="rounded-2xl border border-border bg-background p-4 sm:p-7 shadow-product space-y-6">
              <div className="flex items-center justify-between border-b border-border pb-3 text-xs">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-mono text-[11px] text-text-secondary">app.aicfo.io / scenario-forecasting</span>
                </div>
                <span className="text-[11px] font-mono text-purple-600 dark:text-purple-400">● Copilot Active</span>
              </div>

              {/* Financial Runway Metric Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-border bg-surface-muted space-y-1">
                  <span className="text-[10px] font-mono uppercase text-text-secondary block">Current Cash Balance</span>
                  <span className="text-xl font-mono font-bold text-text-primary block">$485,200</span>
                  <span className="text-[11px] text-text-secondary font-mono block">3 Operating Accounts Connected</span>
                </div>

                <div className="p-4 rounded-xl border border-border bg-surface-muted space-y-1">
                  <span className="text-[10px] font-mono uppercase text-text-secondary block">Net Monthly Burn</span>
                  <span className="text-xl font-mono font-bold text-text-primary block">$29,500</span>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono block">-14% Burn Optimization</span>
                </div>

                <div className="p-4 rounded-xl border border-border bg-surface-muted space-y-1">
                  <span className="text-[10px] font-mono uppercase text-text-secondary block">Projected Runway</span>
                  <span className="text-xl font-mono font-bold text-emerald-600 dark:text-emerald-400 block">16.4 Months</span>
                  <span className="text-[11px] text-text-secondary font-mono block">Target: Minimum 12 Months</span>
                </div>
              </div>

              {/* Conversational Scenario Dialogue Mockup */}
              <div className="p-4 rounded-xl border border-border bg-surface-muted space-y-3 font-mono text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-[10px] font-bold shrink-0">
                    AV
                  </div>
                  <div className="bg-surface p-3 rounded-lg border border-border text-text-primary">
                    &ldquo;If we hire 2 senior full-stack developers at $9K/mo each starting next quarter, what does our runway look like?&rdquo;
                  </div>
                </div>

                <div className="flex items-start gap-3 pl-6">
                  <div className="w-6 h-6 rounded-full bg-purple-500/10 text-purple-600 border border-purple-500/20 flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-purple-500/5 dark:bg-purple-500/10 p-3 rounded-lg border border-purple-500/20 text-text-primary space-y-1">
                    <p className="font-semibold text-purple-700 dark:text-purple-300">
                      Scenario Simulation Result:
                    </p>
                    <p className="text-text-secondary">
                      Monthly burn increases from $29,500 &rarr; $47,500. Cash runway adjusts from 16.4 months to 10.2 months (assuming steady $34K MRR). Safe hiring threshold requires $48K MRR.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
