'use client';

import * as React from 'react';
import { 
  BarChart3, 
  ArrowUpRight, 
  ArrowDownRight, 
  TrendingUp, 
  DollarSign, 
  Layers, 
  CheckCircle2,
  Calendar,
  Filter
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { H2, H3, TextLead } from '@/components/ui/typography';
import { trackEvent } from '@/lib/analytics';

export function AICFOCashFlow() {
  const [selectedPeriod, setSelectedPeriod] = React.useState<'30d' | '90d' | '12m'>('30d');

  const handlePeriodChange = (period: '30d' | '90d' | '12m') => {
    setSelectedPeriod(period);
    trackEvent('ai_cfo_cashflow_engaged', { period });
  };

  return (
    <section id="cash-flow" className="py-20 sm:py-28 border-b border-border/50 bg-background">
      <Container size="default">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest font-semibold block">
                05 &middot; CASH FLOW INTELLIGENCE
              </span>
              <H2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
                Understand how money is moving through the business.
              </H2>
              <TextLead className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Cash flow is the lifeblood of software companies. AI CFO provides an intuitive Cash Bridge waterfall and granular category breakdowns to answer the three essential questions: Where did capital come from? Where did it go? What changed?
              </TextLead>
            </div>

            {/* Period Filters */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-surface-100 dark:bg-surface-900 border border-border/70 text-xs font-mono shrink-0">
              {(['30d', '90d', '12m'] as const).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => handlePeriodChange(p)}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    selectedPeriod === p
                      ? 'bg-emerald-500 text-white font-bold shadow-xs'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {p === '30d' ? 'Last 30 Days' : p === '90d' ? 'Last 90 Days' : 'Last 12 Months'}
                </button>
              ))}
            </div>
          </div>

          {/* Cash Bridge Waterfall & Breakdown */}
          <div className="rounded-3xl border border-border/80 bg-surface-100/70 dark:bg-surface-900/60 p-6 sm:p-8 space-y-8 backdrop-blur-sm">
            {/* 4-Step Cash Bridge Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-2">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">1. Opening Balance</span>
                <div className="text-2xl font-bold font-mono text-foreground">$314,450</div>
                <span className="text-xs text-muted-foreground block">Cash balance at period start</span>
              </div>

              <div className="p-5 rounded-2xl bg-background/80 border border-emerald-500/30 space-y-2">
                <span className="text-[11px] font-mono text-emerald-400 uppercase">2. Operating Inflows</span>
                <div className="text-2xl font-bold font-mono text-emerald-400">+$94,200</div>
                <span className="text-xs text-muted-foreground block">Customer subscriptions &amp; renewals</span>
              </div>

              <div className="p-5 rounded-2xl bg-background/80 border border-amber-500/30 space-y-2">
                <span className="text-[11px] font-mono text-amber-400 uppercase">3. Operating Outflows</span>
                <div className="text-2xl font-bold font-mono text-foreground">-$65,800</div>
                <span className="text-xs text-muted-foreground block">Payroll, vendors, servers &amp; debt</span>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 space-y-2">
                <span className="text-[11px] font-mono text-emerald-500 dark:text-emerald-400 uppercase font-bold">
                  4. Closing Balance
                </span>
                <div className="text-2xl font-bold font-mono text-emerald-500 dark:text-emerald-400">
                  $342,850
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-300 block">
                  Net Change: +$28,400 (+9.0%)
                </span>
              </div>
            </div>

            {/* Visual Cash Flow Waterfall Bars */}
            <div className="p-6 rounded-2xl bg-background/90 border border-border/60 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span>CASH WATERFALL RECONCILIATION</span>
                <span>Deterministic Sample Values</span>
              </div>

              {/* Waterfall SVG graphic */}
              <div className="w-full h-36 pt-2">
                <div className="grid grid-cols-4 gap-4 h-full items-end">
                  {/* Column 1: Opening */}
                  <div className="h-full flex flex-col justify-end items-center gap-1.5">
                    <span className="text-xs font-mono font-bold text-foreground">$314.5K</span>
                    <div className="w-full bg-surface-300 dark:bg-surface-700 rounded-t-lg h-[65%]" />
                    <span className="text-[10px] font-mono text-muted-foreground">Opening</span>
                  </div>

                  {/* Column 2: Inflow */}
                  <div className="h-full flex flex-col justify-end items-center gap-1.5">
                    <span className="text-xs font-mono font-bold text-emerald-400">+$94.2K</span>
                    <div className="w-full bg-emerald-500/80 rounded-t-lg h-[75%]" />
                    <span className="text-[10px] font-mono text-muted-foreground">Inflows</span>
                  </div>

                  {/* Column 3: Outflow */}
                  <div className="h-full flex flex-col justify-end items-center gap-1.5">
                    <span className="text-xs font-mono font-bold text-amber-400">-$65.8K</span>
                    <div className="w-full bg-amber-500/80 rounded-t-lg h-[50%]" />
                    <span className="text-[10px] font-mono text-muted-foreground">Outflows</span>
                  </div>

                  {/* Column 4: Closing */}
                  <div className="h-full flex flex-col justify-end items-center gap-1.5">
                    <span className="text-xs font-mono font-bold text-emerald-400">$342.9K</span>
                    <div className="w-full bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-lg h-[72%]" />
                    <span className="text-[10px] font-mono text-muted-foreground">Closing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Granular Categories Comparison Table */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Inflow Categories */}
              <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-border/40">
                  <H3 className="text-xs font-mono font-bold uppercase text-emerald-400">
                    Revenue &amp; Capital Inflow Streams
                  </H3>
                  <span className="text-xs font-mono text-foreground font-bold">$94,200</span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between py-1">
                    <div className="space-y-0.5">
                      <span className="font-semibold text-foreground block">Recurring SaaS Subscriptions</span>
                      <span className="text-[11px] text-muted-foreground">184 active paying B2B accounts</span>
                    </div>
                    <span className="font-mono font-bold text-foreground">$81,400</span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-t border-border/30">
                    <div className="space-y-0.5">
                      <span className="font-semibold text-foreground block">Annual Enterprise Contracts</span>
                      <span className="text-[11px] text-muted-foreground">Upfront upfront multi-seat licenses</span>
                    </div>
                    <span className="font-mono font-bold text-foreground">$12,800</span>
                  </div>
                </div>
              </div>

              {/* Outflow Categories */}
              <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-border/40">
                  <H3 className="text-xs font-mono font-bold uppercase text-amber-400">
                    Operational Burn &amp; Outflow Allocations
                  </H3>
                  <span className="text-xs font-mono text-foreground font-bold">$65,800</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between py-0.5">
                    <span className="text-foreground">Core Engineering &amp; Team Payroll</span>
                    <span className="font-mono font-semibold text-foreground">$44,200</span>
                  </div>
                  <div className="flex items-center justify-between py-0.5 border-t border-border/30">
                    <span className="text-foreground">Cloud Compute &amp; Database Hosting (AWS/Vercel)</span>
                    <span className="font-mono font-semibold text-foreground">$12,800</span>
                  </div>
                  <div className="flex items-center justify-between py-0.5 border-t border-border/30">
                    <span className="text-foreground">Growth Marketing &amp; Paid Ad Ingestion</span>
                    <span className="font-mono font-semibold text-foreground">$4,600</span>
                  </div>
                  <div className="flex items-center justify-between py-0.5 border-t border-border/30">
                    <span className="text-foreground">SaaS Software Subscriptions &amp; Tooling</span>
                    <span className="font-mono font-semibold text-foreground">$4,200</span>
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
