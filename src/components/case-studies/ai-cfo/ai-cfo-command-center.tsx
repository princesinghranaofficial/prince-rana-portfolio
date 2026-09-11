'use client';

import * as React from 'react';
import { 
  Activity, 
  ArrowUpRight, 
  ArrowDownRight, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  AlertTriangle, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { H2, H3, TextLead } from '@/components/ui/typography';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function AICFOCommandCenter() {
  const [selectedLevel, setSelectedLevel] = React.useState<number>(1);

  return (
    <section id="command-center" className="py-20 sm:py-28 border-b border-border/50 bg-surface-50/40 dark:bg-surface-950/30">
      <Container size="default">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest font-semibold block">
                04 &middot; FINANCIAL COMMAND CENTER
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-muted border border-border/80 text-muted-foreground">
                Demo environment · Illustrative data
              </span>
            </div>
            <H2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
              A 4-tier decision hierarchy engineered for clarity.
            </H2>
            <TextLead className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Standard dashboards crowd dozens of disconnected widgets onto one screen. AI CFO organizes executive metrics into a strict 4-level cognitive hierarchy: from immediate liquidity to what changed, what comes next, and what demands urgent human review.
            </TextLead>
          </div>

          {/* Level Switcher Selector */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-surface-200/50 dark:bg-surface-900/60 border border-border/60 max-w-2xl">
            {[
              { level: 1, title: 'Level 1: Current Position' },
              { level: 2, title: 'Level 2: What Changed' },
              { level: 3, title: 'Level 3: What Happens Next' },
              { level: 4, title: 'Level 4: Needs Attention' },
            ].map((lvl) => (
              <button
                key={lvl.level}
                type="button"
                onClick={() => setSelectedLevel(lvl.level)}
                className={`flex-1 min-w-[140px] px-3 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  selectedLevel === lvl.level
                    ? 'bg-background text-foreground shadow-sm font-semibold border border-border/80'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {lvl.title}
              </button>
            ))}
          </div>

          {/* Core Interactive Command Center Canvas */}
          <div className="rounded-3xl border border-border/80 bg-surface-100/90 dark:bg-surface-900/90 shadow-2xl overflow-hidden backdrop-blur-md">
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-border/60 bg-surface-200/40 dark:bg-surface-950/40 gap-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-semibold text-foreground">
                  EXECUTIVE FINANCIAL POSITION &middot; ACME CORP (SAMPLE SET)
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                <span className="px-2 py-0.5 rounded bg-surface-300/40 dark:bg-surface-800/40 text-foreground border border-border/50">
                  Currency: USD ($)
                </span>
                <span>Fiscal Quarter: Q3 2025</span>
              </div>
            </div>

            {/* Content Area Driven By 4 Levels */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* LEVEL 1: Current Financial Position */}
              <div className={`space-y-4 transition-all duration-300 ${selectedLevel === 1 ? 'ring-2 ring-emerald-500/30 p-4 rounded-2xl bg-emerald-500/5' : ''}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 font-bold">
                      LEVEL 1
                    </span>
                    <H3 className="text-sm font-semibold text-foreground">Current Financial Position</H3>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">Real-time balances across 3 accounts</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                    <span className="text-[11px] font-mono text-muted-foreground uppercase">Consolidated Liquidity</span>
                    <div className="text-2xl font-bold font-mono text-foreground">$342,850</div>
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <ArrowUpRight className="w-3.5 h-3.5" /> +$20,400 vs previous month
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                    <span className="text-[11px] font-mono text-muted-foreground uppercase">Operating Cash Account</span>
                    <div className="text-2xl font-bold font-mono text-foreground">$184,200</div>
                    <span className="text-[11px] text-muted-foreground">Silicon Valley Bank (Checking)</span>
                  </div>

                  <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                    <span className="text-[11px] font-mono text-muted-foreground uppercase">Treasury / Yield Reserve</span>
                    <div className="text-2xl font-bold font-mono text-foreground">$158,650</div>
                    <span className="text-[11px] text-muted-foreground">Short-term T-Bills (4.8% APY)</span>
                  </div>

                  <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                    <span className="text-[11px] font-mono text-muted-foreground uppercase">Calculated Runway</span>
                    <div className="text-2xl font-bold font-mono text-emerald-400">14.2 Months</div>
                    <span className="text-[11px] text-muted-foreground">Based on rolling 90-day net burn</span>
                  </div>
                </div>
              </div>

              {/* LEVEL 2: What Changed (30-day Delta & Flow) */}
              <div className={`space-y-4 transition-all duration-300 ${selectedLevel === 2 ? 'ring-2 ring-emerald-500/30 p-4 rounded-2xl bg-emerald-500/5' : ''}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/20 text-blue-400 font-bold">
                      LEVEL 2
                    </span>
                    <H3 className="text-sm font-semibold text-foreground">What Changed (Last 30 Days)</H3>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">Net Inflow/Outflow Breakdown</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono text-muted-foreground">
                      <span>Total Inflows</span>
                      <span className="text-emerald-400 font-bold">+12% MoM</span>
                    </div>
                    <div className="text-xl font-bold font-mono text-emerald-400">+$94,200</div>
                    <p className="text-xs text-muted-foreground">
                      $81.4K B2B SaaS Subscriptions + $12.8K Annual Renewal Contracts.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono text-muted-foreground">
                      <span>Total Outflows</span>
                      <span className="text-amber-400 font-bold">+3.2% MoM</span>
                    </div>
                    <div className="text-xl font-bold font-mono text-foreground">-$65,800</div>
                    <p className="text-xs text-muted-foreground">
                      $44.2K Payroll, $12.8K Cloud Infrastructure (AWS/Vercel), $8.8K SaaS tooling.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono text-muted-foreground">
                      <span>Net Cash Delta</span>
                      <span className="text-emerald-400 font-bold">Net Positive</span>
                    </div>
                    <div className="text-xl font-bold font-mono text-emerald-400">+$28,400</div>
                    <p className="text-xs text-muted-foreground">
                      Cash reserves increased for the 4th consecutive fiscal month.
                    </p>
                  </div>
                </div>
              </div>

              {/* LEVEL 3: What May Happen Next (Predictive Horizon) */}
              <div className={`space-y-4 transition-all duration-300 ${selectedLevel === 3 ? 'ring-2 ring-emerald-500/30 p-4 rounded-2xl bg-emerald-500/5' : ''}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/20 text-amber-400 font-bold">
                      LEVEL 3
                    </span>
                    <H3 className="text-sm font-semibold text-foreground">What May Happen Next (Forward Forecast)</H3>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">Next 60-90 Days Model</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-foreground font-semibold">Q3 Base Forecast Path</span>
                      <span className="text-emerald-400 font-bold">Confidence: 91%</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      At current growth trajectory (+6.5% monthly ARR expansion), liquidity is projected to reach <strong>$392,000</strong> by end of Q3 without external financing.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-foreground font-semibold">Scheduled Liabilities</span>
                      <span className="text-amber-400 font-bold">Due in 21 Days</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Federal corporate estimated tax payment of <strong>$14,500</strong> scheduled for June 15th. Reserve buffer automatically partitioned in Treasury account.
                    </p>
                  </div>
                </div>
              </div>

              {/* LEVEL 4: What Needs Attention (Proactive Triage) */}
              <div className={`space-y-4 transition-all duration-300 ${selectedLevel === 4 ? 'ring-2 ring-emerald-500/30 p-4 rounded-2xl bg-emerald-500/5' : ''}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-rose-500/20 text-rose-400 font-bold">
                      LEVEL 4
                    </span>
                    <H3 className="text-sm font-semibold text-foreground">What Needs Attention (Triage Center)</H3>
                  </div>
                  <span className="text-xs font-mono text-rose-400 font-medium">2 Items Pending Review</span>
                </div>

                <div className="space-y-2">
                  <div className="p-3.5 rounded-xl bg-rose-500/5 border border-rose-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2.5">
                      <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground block">
                          Uncategorized Outflow: $4,200 to Stripe Capital
                        </span>
                        <span className="text-muted-foreground">
                          Detected recurring loan principal repayment not linked to existing Debt schedule.
                        </span>
                      </div>
                    </div>
                    <button type="button" className="px-3 py-1 rounded bg-rose-500/20 text-rose-300 font-mono text-[11px] font-semibold hover:bg-rose-500/30 transition-colors shrink-0">
                      Link to Loan &rarr;
                    </button>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground block">
                          Vendor Cost Surge: Datadog Bill (+38% MoM)
                        </span>
                        <span className="text-muted-foreground">
                          Log ingestion spike detected during new microservice deployment on May 24.
                        </span>
                      </div>
                    </div>
                    <button type="button" className="px-3 py-1 rounded bg-amber-500/20 text-amber-300 font-mono text-[11px] font-semibold hover:bg-amber-500/30 transition-colors shrink-0">
                      Inspect Anomaly &rarr;
                    </button>
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
