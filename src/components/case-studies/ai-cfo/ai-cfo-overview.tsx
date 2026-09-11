'use client';

import * as React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Sparkles, 
  Layers, 
  Cpu, 
  Activity, 
  CreditCard,
  Building,
  Briefcase,
  Calendar,
  AlertCircle,
  FileSpreadsheet,
  ArrowDown,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  PieChart
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { H2, H3, TextLead } from '@/components/ui/typography';

const modules = [
  { name: 'Dashboard', desc: '4-level executive financial command center.', icon: Activity },
  { name: 'Cash Flow', desc: 'Net cash movement, inflows, and burn bridges.', icon: BarChart3 },
  { name: 'Forecasts', desc: 'Forward projection horizon with actuals contrast.', icon: TrendingUp },
  { name: 'Scenarios', desc: 'Multi-variable decision simulation models.', icon: PieChart },
  { name: 'AI Copilot', desc: 'In-context natural language financial analysis.', icon: Sparkles },
  { name: 'Transactions', desc: 'Smart categorization with anomaly flags.', icon: CreditCard },
  { name: 'Accounts', desc: 'Multi-bank and treasury liquidity balances.', icon: Building },
  { name: 'Investments', desc: 'Asset allocation and capital preservation view.', icon: Briefcase },
  { name: 'Loans & Debt', desc: 'Amortization schedules and liability tracking.', icon: FileSpreadsheet },
  { name: 'Taxes', desc: 'Estimated liability calendar and doc repository.', icon: Calendar },
  { name: 'Reports', desc: 'Structured P&L, cash flow, and runway exports.', icon: Layers },
  { name: 'Action Center', desc: 'Financial alert triage and proactive tasks.', icon: AlertCircle },
];

const strategySteps = [
  { step: '01', title: 'OBSERVE', desc: 'Aggregate multi-account banking and transaction streams into a normalized financial ledger.' },
  { step: '02', title: 'UNDERSTAND', desc: 'Categorize spending, compute daily burn velocity, and detect operational anomalies.' },
  { step: '03', title: 'FORECAST', desc: 'Project rolling 6-to-18 month cash positions using baseline actuals and recurring obligations.' },
  { step: '04', title: 'COMPARE', desc: 'Stress-test hiring, market slowdowns, or capital expenditures across scenario models.' },
  { step: '05', title: 'ACT', desc: 'Execute informed decisions via prioritized action items, payment schedules, and budget locks.' },
  { step: '06', title: 'REVIEW', desc: 'Reconcile forecasted trajectory against real-world actuals to refine forward precision.' },
];

export function AICFOOverview() {
  return (
    <div id="overview" className="py-20 sm:py-28 border-b border-border/50 bg-background space-y-24">
      {/* 02 Product Overview */}
      <Container size="default">
        <div className="space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest font-semibold block">
              01 &middot; PRODUCT OVERVIEW
            </span>
            <H2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
              A financial operating layer for understanding the business.
            </H2>
            <TextLead className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Most accounting software is backward-looking: it records what already occurred for tax filing and statutory compliance. AI CFO was architected to bridge the chasm between raw historical book-keeping and forward-looking strategic decision-making.
            </TextLead>
          </div>

          {/* 12 Modules Map */}
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block">
              12 Integrated Modules Across The Financial Surface
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {modules.map((mod, idx) => {
                const Icon = mod.icon;
                return (
                  <div
                    key={mod.name}
                    className="p-5 rounded-2xl bg-surface-100/60 dark:bg-surface-900/40 border border-border/60 hover:border-emerald-500/40 transition-colors space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-muted-foreground">
                        {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </span>
                    </div>
                    <H3 className="text-sm font-semibold text-foreground pt-1">
                      {mod.name}
                    </H3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {mod.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      {/* 03 The Financial Problem & Fragmentation Model */}
      <Container size="default">
        <div className="space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest font-semibold block">
              02 &middot; THE FINANCIAL PROBLEM
            </span>
            <H2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
              Financial data exists everywhere. Understanding it is harder.
            </H2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Founders and leadership teams frequently operate blind: corporate cards sit in Brex or Ramp, checking accounts in Chase or Silicon Valley Bank, recurring revenue in Stripe, tax obligations in spreadsheets, and payroll in Gusto. Synthesizing cash runway requires hours of manual spreadsheet reconciliation that goes stale the moment it is completed.
            </p>
          </div>

          {/* Visual Fragmentation Flow */}
          <div className="p-8 sm:p-12 rounded-3xl bg-surface-100/80 dark:bg-surface-900/80 border border-border/80 shadow-xl space-y-8">
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground text-center block">
              The Financial Fragmentation & Synthesis Model
            </span>

            {/* Top Row: Fragmented Sources */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
              <div className="p-3 rounded-xl bg-background/80 border border-border/60 text-xs font-mono text-muted-foreground">
                <span className="block text-foreground font-semibold">Banking Data</span>
                <span className="text-[10px]">Multi-account feeds</span>
              </div>
              <div className="p-3 rounded-xl bg-background/80 border border-border/60 text-xs font-mono text-muted-foreground">
                <span className="block text-foreground font-semibold">Transactions</span>
                <span className="text-[10px]">Cards & wire transfers</span>
              </div>
              <div className="p-3 rounded-xl bg-background/80 border border-border/60 text-xs font-mono text-muted-foreground">
                <span className="block text-foreground font-semibold">Recurring Revenue</span>
                <span className="text-[10px]">SaaS subscription MRR</span>
              </div>
              <div className="p-3 rounded-xl bg-background/80 border border-border/60 text-xs font-mono text-muted-foreground">
                <span className="block text-foreground font-semibold">Operational Costs</span>
                <span className="text-[10px]">Cloud, vendors, tools</span>
              </div>
              <div className="p-3 rounded-xl bg-background/80 border border-border/60 text-xs font-mono text-muted-foreground">
                <span className="block text-foreground font-semibold">Loans & Debt</span>
                <span className="text-[10px]">Amortization schedules</span>
              </div>
              <div className="p-3 rounded-xl bg-background/80 border border-border/60 text-xs font-mono text-muted-foreground">
                <span className="block text-foreground font-semibold">Tax Estimates</span>
                <span className="text-[10px]">Deadlines & reserves</span>
              </div>
            </div>

            {/* Middle Down Arrow */}
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </div>
            </div>

            {/* Unified Intelligence Layer Card */}
            <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-surface-50 dark:via-surface-950 to-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>UNIFIED FINANCIAL INTELLIGENCE LAYER</span>
              </div>
              <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                Normalizes multi-bank transactions, calculates cash velocity, models 18-month forecasts, and grounds LLM queries in strict, verified double-entry constraints.
              </p>
            </div>

            {/* Bottom Target */}
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
                <ArrowDown className="w-5 h-5" />
              </div>
            </div>

            {/* Final Product Output */}
            <div className="text-center space-y-2">
              <div className="text-lg font-bold text-foreground">
                AI CFO &amp; Copilot Decision Workspace
              </div>
              <p className="text-xs text-muted-foreground max-w-xl mx-auto">
                Real-time liquidity visibility &middot; Cash flow intelligence &middot; Scenario planning &middot; Proactive alerts
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* 04 Product Strategy: The Strategic Loop */}
      <Container size="default">
        <div className="space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest font-semibold block">
              03 &middot; PRODUCT STRATEGY
            </span>
            <H2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
              Move from financial reporting to financial understanding.
            </H2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Traditional finance tools end at the report: you receive a balance sheet or income statement and must interpret what to do on your own. AI CFO introduces a continuous 6-stage operational loop turning historical data into validated strategic actions.
            </p>
          </div>

          {/* Strategic Loop Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategySteps.map((st) => (
              <div
                key={st.step}
                className="p-6 rounded-2xl bg-surface-100/60 dark:bg-surface-900/40 border border-border/70 space-y-3 relative overflow-hidden group hover:border-emerald-500/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold font-mono text-emerald-500/80">
                    {st.step}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                    Loop Phase
                  </span>
                </div>
                <H3 className="text-base font-semibold text-foreground">
                  {st.title}
                </H3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
