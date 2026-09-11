'use client';

import * as React from 'react';
import { 
  Sparkles, 
  Send, 
  FileText, 
  CheckCircle2, 
  Layers, 
  ArrowRight, 
  ShieldCheck, 
  Database,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { H2, H3, TextLead } from '@/components/ui/typography';
import { trackEvent } from '@/lib/analytics';

interface CopilotQuery {
  question: string;
  category: string;
  response: {
    summary: string;
    keyDrivers: { metric: string; delta: string; detail: string }[];
    relevantData: string[];
    whatToReview: string[];
    relatedReport: string;
  };
}

const sampleQueries: CopilotQuery[] = [
  {
    question: 'What drove the 12% increase in operating expenses this month?',
    category: 'Expense Analysis',
    response: {
      summary: 'May operating expenses increased by $7,200 primarily driven by higher cloud infrastructure compute (AI model evaluation batch jobs) and an annual Figma license renewal.',
      keyDrivers: [
        { metric: 'AWS / Vercel Cloud Compute', delta: '+$4,200 (+38% MoM)', detail: 'High vector batch indexing jobs executed on May 14th.' },
        { metric: 'Figma Enterprise Annual Renewal', delta: '+$2,400 (One-time)', detail: 'Annual upfront license for 8 engineering & product seats.' },
        { metric: 'Datadog Log Ingestion', delta: '+$600 (+14% MoM)', detail: 'Spike in debug log retention during staging migration.' },
      ],
      relevantData: ['SVB Checking Account #4812', 'Transactions #T-8821, #T-8849', 'Vendor Category: Cloud/SaaS'],
      whatToReview: [
        'Review AWS batch worker auto-termination policies to prevent overnight idle compute charges.',
        'Ensure the $2,400 Figma expense is amortized across 12 months rather than booking entirely to May burn.',
      ],
      relatedReport: 'P&L Operating Expense Breakdown (May 2025)',
    },
  },
  {
    question: 'If we hire 2 senior engineers in Q3, how does that impact our cash runway?',
    category: 'Runway Simulation',
    response: {
      summary: 'Adding 2 senior engineers at an estimated combined fully-loaded compensation of $26,000/month reduces your zero-cash runway from 14.2 months down to 11.4 months under your Base revenue model.',
      keyDrivers: [
        { metric: 'Combined Monthly Payroll Delta', delta: '+$26,000/mo', detail: 'Includes estimated payroll taxes, healthcare, and software tooling.' },
        { metric: 'Adjusted Runway Horizon', delta: '-2.8 Months', detail: 'Runway contracts from 14.2 to 11.4 months without new revenue growth.' },
        { metric: 'Break-Even Required Expansion', delta: '+$21,500/mo in ARR', detail: 'Additional monthly recurring revenue required to maintain 14+ months runway.' },
      ],
      relevantData: ['Forecast Model: Base Trajectory', 'Payroll Entity: Acme US Operations', 'Treasury Balance: $342,850'],
      whatToReview: [
        'Stagger the two hire start dates by 60 days to preserve $26,000 in upfront cash reserves.',
        'Review the Q3 enterprise sales pipeline to verify deal close probabilities before issuing offers.',
      ],
      relatedReport: 'Headcount & Cash Runway Model (Q3-Q4 2025)',
    },
  },
  {
    question: 'Summarize all scheduled financial obligations due in the next 30 days.',
    category: 'Obligations Horizon',
    response: {
      summary: 'You have $44,800 in verified outgoing obligations due within the next 30 days. Current operating cash ($184,200) covers all obligations with a 4.1x liquidity buffer.',
      keyDrivers: [
        { metric: 'Federal Estimated Corporate Tax', delta: '$14,500', detail: 'Scheduled for June 15th automatic IRS debit.' },
        { metric: 'Semi-Monthly Team Payroll', delta: '$22,100', detail: 'Scheduled for June 1st and June 15th via Gusto.' },
        { metric: 'Silicon Valley Bank Term Loan', delta: '$4,200', detail: 'Monthly principal and interest scheduled for June 5th.' },
        { metric: 'AWS Infrastructure Invoicing', delta: '$4,000', detail: 'Estimated billing debit scheduled for June 3rd.' },
      ],
      relevantData: ['Schedule: Liabilities & Amortization', 'Accounts Payable Ledger', 'Tax Reserve Allocation'],
      whatToReview: [
        'Confirm sufficient funds are transferred from Treasury to Operating checking 48 hours prior to June 15th.',
        'Ensure the tax reserve allocation matches the finalized CPA quarterly estimate calculation.',
      ],
      relatedReport: 'Upcoming 30-Day Liquidity Obligations Schedule',
    },
  },
];

export function AICFOCopilot() {
  const [activeQueryIndex, setActiveQueryIndex] = React.useState<number>(0);
  const activeQuery = sampleQueries[activeQueryIndex];

  const handleSelectQuery = (idx: number) => {
    setActiveQueryIndex(idx);
    trackEvent('ai_cfo_copilot_engaged', { query: sampleQueries[idx].question });
  };

  return (
    <section id="copilot" className="py-20 sm:py-28 border-b border-border/50 bg-background">
      <Container size="default">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest font-semibold block">
              07 &middot; IN-CONTEXT AI FINANCIAL COPILOT
            </span>
            <H2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
              Ask the financial data, not the dashboard.
            </H2>
            <TextLead className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Generic LLM chatbots fail in finance because they lack structured ledger context and hallucinate calculations. The AI CFO Copilot executes natural language queries against deterministic double-entry database views, returning structured, auditable answers with source transaction links.
            </TextLead>
          </div>

          {/* Copilot Interactive Console */}
          <div className="rounded-3xl border border-border/80 bg-surface-100/90 dark:bg-surface-900/90 shadow-2xl overflow-hidden backdrop-blur-md">
            {/* Console Top Toolbar with Active Context Chips */}
            <div className="flex flex-wrap items-center justify-between px-6 py-3.5 border-b border-border/60 bg-surface-200/50 dark:bg-surface-950/50 gap-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-foreground">FINANCIAL INTELLIGENCE AGENT</span>
              </div>

              {/* Active Context Chips */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-background/80 text-muted-foreground border border-border/60 text-[11px]">
                  Period: Q3 2025
                </span>
                <span className="px-2 py-0.5 rounded bg-background/80 text-muted-foreground border border-border/60 text-[11px]">
                  Scope: Consolidated (3 Accounts)
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-semibold">
                  RLS Bound: Verified
                </span>
              </div>
            </div>

            {/* Main Console Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Presets / Questions Selector */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">
                  Select a Sample Financial Intelligence Query:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {sampleQueries.map((q, idx) => {
                    const isSelected = activeQueryIndex === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSelectQuery(idx)}
                        className={`p-3.5 rounded-xl text-left text-xs transition-all border ${
                          isSelected
                            ? 'border-emerald-500 bg-emerald-500/10 font-semibold text-foreground'
                            : 'border-border/70 bg-background/60 text-muted-foreground hover:border-border-strong'
                        }`}
                      >
                        <span className="text-[10px] font-mono text-emerald-400 block mb-1">
                          {q.category}
                        </span>
                        <p className="line-clamp-2">{q.question}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected User Query Bubble */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-surface-50 dark:bg-surface-950/60 border border-border/60">
                <div className="w-7 h-7 rounded-lg bg-surface-200 dark:bg-surface-800 text-foreground font-mono text-xs flex items-center justify-center shrink-0 font-bold">
                  Q
                </div>
                <div className="space-y-0.5 pt-0.5">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">Executive Prompt</span>
                  <p className="text-sm font-semibold text-foreground">{activeQuery.question}</p>
                </div>
              </div>

              {/* Structured AI Copilot Response Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-background/95 to-background/80 border border-emerald-500/30 space-y-6">
                {/* 1. Executive Summary */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 font-bold uppercase">
                      Executive Summary
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground">Deterministic Financial Analysis</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                    {activeQuery.response.summary}
                  </p>
                </div>

                {/* 2. Key Drivers with Deltas */}
                <div className="space-y-2.5 pt-4 border-t border-border/40">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block font-semibold">
                    Key Financial Drivers &amp; Variances
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {activeQuery.response.keyDrivers.map((driver, dIdx) => (
                      <div key={dIdx} className="p-3.5 rounded-xl bg-surface-100/70 dark:bg-surface-900/50 border border-border/60 space-y-1">
                        <span className="text-xs font-semibold text-foreground block">{driver.metric}</span>
                        <span className="text-xs font-mono font-bold text-emerald-400 block">{driver.delta}</span>
                        <p className="text-[11px] text-muted-foreground leading-normal">{driver.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Bottom Row: Relevant Data Sources & Recommendations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border/40 text-xs">
                  {/* Relevant Data */}
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] uppercase text-muted-foreground font-semibold block">
                      Audited Data Provenance
                    </span>
                    <ul className="space-y-1 text-muted-foreground font-mono text-[11px]">
                      {activeQuery.response.relevantData.map((d, di) => (
                        <li key={di} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What to Review */}
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] uppercase text-muted-foreground font-semibold block">
                      Strategic Next Actions
                    </span>
                    <ul className="space-y-1.5 text-muted-foreground text-xs">
                      {activeQuery.response.whatToReview.map((act, ai) => (
                        <li key={ai} className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 4. Deep Link to Report */}
                <div className="pt-4 border-t border-border/40 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-muted-foreground font-mono text-[11px]">
                    <FileText className="w-3.5 h-3.5 text-accent" />
                    <span>Generated from: <strong>{activeQuery.response.relatedReport}</strong></span>
                  </div>
                  <span className="text-emerald-400 font-semibold font-mono text-[11px] cursor-pointer hover:underline flex items-center gap-1">
                    Open Source Ledger Report &rarr;
                  </span>
                </div>
              </div>

              {/* Safety & Compliance Notice */}
              <div className="text-[11px] font-mono text-muted-foreground flex items-center gap-2 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>AI Governance: Model responses are grounded in verified PostgreSQL view constraints; human review is recommended prior to material capital allocations.</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
