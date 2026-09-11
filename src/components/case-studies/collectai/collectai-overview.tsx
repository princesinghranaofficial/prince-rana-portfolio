import * as React from 'react';
import { 
  ArrowRight, 
  ArrowDown, 
  Database, 
  Mail, 
  FileSpreadsheet, 
  CreditCard, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';

export function CollectAIOverview() {
  return (
    <div className="space-y-24 py-20 border-b border-border/60" id="overview">
      {/* ========================================================================= */}
      {/* 02 PRODUCT OVERVIEW & 10 WHO IT IS FOR */}
      {/* ========================================================================= */}
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <SectionHeader
              eyebrow="Product Overview"
              title="One workspace for the receivables lifecycle."
              description="Most B2B companies treat accounts receivable as an afterthought spread across disconnected tools. CollectAI consolidates the entire receivables lifecycle into a unified operational dashboard."
              align="left"
            />

            <div className="space-y-4 type-body text-text-secondary">
              <p>
                Rather than treating collections as purely transactional accounting data, CollectAI structures accounts receivable as a high-velocity operational pipeline. It links customers, overdue invoices, communication logs, automated collection rules, dynamic payment links, and executive reporting in a single interface.
              </p>
              <p>
                The platform shifts the finance team&apos;s posture from passive retrospective reporting to proactive, automated cash recovery.
              </p>
            </div>
          </div>

          {/* Who it is designed for */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl border border-border bg-surface-muted/60 space-y-4">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider block">
              Target Audience
            </span>
            <h3 className="type-h3 text-text-primary">
              Who CollectAI is designed for:
            </h3>
            <ul className="space-y-3 text-xs font-mono text-text-secondary">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-500 font-bold mt-0.5">•</span>
                <span><strong>B2B SaaS & Tech Founders:</strong> Needing predictable cash flow visibility and shorter Days Sales Outstanding (DSO) without hiring full-time collectors.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-500 font-bold mt-0.5">•</span>
                <span><strong>Finance Operations Teams:</strong> Managing hundreds of monthly recurring contracts and multi-tier milestone payments.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-500 font-bold mt-0.5">•</span>
                <span><strong>Accounts Receivable Specialists:</strong> Spending hours manually drafting payment reminder emails and tracking dispute statuses.</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* ========================================================================= */}
      {/* 03 THE PROBLEM & 12 PROBLEM VISUALIZATION */}
      {/* ========================================================================= */}
      <div className="bg-surface-muted/30 py-20 border-y border-border/60" id="problem">
        <Container size="wide">
          <div className="max-w-3xl space-y-4 mb-14">
            <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase block">
              The Operational Problem
            </span>
            <h2 className="type-h2 text-text-primary">
              Collections break down when operational context is fragmented.
            </h2>
            <p className="type-body text-text-secondary">
              When a customer&apos;s payment is late, finance teams must reconstruct history across multiple tools. This fragmentation causes delayed follow-ups, awkward communications, and unnecessary cash flow friction.
            </p>
          </div>

          {/* Fragmentation vs Consolidation Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: The Fragmented Reality (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl border border-red-500/30 bg-surface p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-xs font-mono font-bold text-red-500">The Fragmented Stack</span>
                <span className="text-[11px] font-mono text-text-tertiary">Disconnected Tools</span>
              </div>

              <div className="space-y-2.5 text-xs font-mono">
                <div className="p-3 rounded-lg bg-surface-muted border border-border flex items-center justify-between">
                  <span className="flex items-center gap-2 text-text-secondary">
                    <Database className="w-3.5 h-3.5 text-text-tertiary" /> Accounting (QuickBooks/Xero)
                  </span>
                  <span className="text-[10px] text-text-tertiary">Invoices Only</span>
                </div>
                <div className="p-3 rounded-lg bg-surface-muted border border-border flex items-center justify-between">
                  <span className="flex items-center gap-2 text-text-secondary">
                    <Mail className="w-3.5 h-3.5 text-text-tertiary" /> Email Inboxes (Gmail/Outlook)
                  </span>
                  <span className="text-[10px] text-text-tertiary">Manual Chasing</span>
                </div>
                <div className="p-3 rounded-lg bg-surface-muted border border-border flex items-center justify-between">
                  <span className="flex items-center gap-2 text-text-secondary">
                    <FileSpreadsheet className="w-3.5 h-3.5 text-text-tertiary" /> Spreadsheets (Excel/Sheets)
                  </span>
                  <span className="text-[10px] text-text-tertiary">Static Aging Lists</span>
                </div>
                <div className="p-3 rounded-lg bg-surface-muted border border-border flex items-center justify-between">
                  <span className="flex items-center gap-2 text-text-secondary">
                    <CreditCard className="w-3.5 h-3.5 text-text-tertiary" /> Payment Gateway (Razorpay/Stripe)
                  </span>
                  <span className="text-[10px] text-text-tertiary">Unmatched Links</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/20 text-[11px] font-mono text-red-600 dark:text-red-400">
                Result: High DSO, missed escalation windows, and strained client relationships.
              </div>
            </div>

            {/* Middle: Transition Indicator (2 cols) */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center text-center space-y-2 py-4">
              <div className="hidden lg:flex flex-col items-center gap-2 text-accent">
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Unified By</span>
                <ArrowRight className="w-6 h-6" />
              </div>
              <div className="lg:hidden flex items-center gap-2 text-accent">
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Unified By</span>
                <ArrowDown className="w-4 h-4" />
              </div>
            </div>

            {/* Right: The CollectAI Unified Operating System (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl border border-emerald-500/40 bg-surface p-6 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">CollectAI Single Workspace</span>
                <span className="text-[11px] font-mono text-text-tertiary">Autonomous Hub</span>
              </div>

              <div className="space-y-2.5 text-xs font-mono">
                <div className="p-3 rounded-lg bg-surface-muted border border-border flex items-center justify-between">
                  <span className="font-semibold text-text-primary">1. Centralized Invoices & Aging</span>
                  <span className="text-emerald-600 dark:text-emerald-400 text-[10px]">Real-Time Sync</span>
                </div>
                <div className="p-3 rounded-lg bg-surface-muted border border-border flex items-center justify-between">
                  <span className="font-semibold text-text-primary">2. AI Collector Follow-Up Engine</span>
                  <span className="text-purple-600 dark:text-purple-400 text-[10px]">Context-Aware</span>
                </div>
                <div className="p-3 rounded-lg bg-surface-muted border border-border flex items-center justify-between">
                  <span className="font-semibold text-text-primary">3. Multi-Stage Workflow Rules</span>
                  <span className="text-blue-600 dark:text-blue-400 text-[10px]">Automated</span>
                </div>
                <div className="p-3 rounded-lg bg-surface-muted border border-border flex items-center justify-between">
                  <span className="font-semibold text-text-primary">4. Dynamic One-Click Payment Links</span>
                  <span className="text-emerald-600 dark:text-emerald-400 text-[10px]">Instant Settle</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20 text-[11px] font-mono text-emerald-700 dark:text-emerald-300">
                Outcome: Unified ledger intelligence, systematic follow-up, and predictable collections.
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ========================================================================= */}
      {/* 04 PRODUCT STRATEGY */}
      {/* ========================================================================= */}
      <Container size="wide">
        <div className="max-w-3xl space-y-4 mb-12">
          <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase block">
            Product Strategy
          </span>
          <h2 className="type-h2 text-text-primary">
            Turn collections into a structured, reliable workflow.
          </h2>
          <p className="type-body text-text-secondary">
            Instead of treating collections as random ad-hoc messages sent when money gets tight, the product models receivables as a deliberate 6-step lifecycle.
          </p>
        </div>

        {/* 6-Step Strategic Flow Sequence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          {[
            { step: '01', title: 'Data Ingestion', desc: 'Sync customer ledgers and invoice due dates.' },
            { step: '02', title: 'Prioritization', desc: 'Segment by aging bracket, risk tier, and invoice size.' },
            { step: '03', title: 'Action Draft', desc: 'Generate tailored follow-ups matching relationship tone.' },
            { step: '04', title: 'Execution', desc: 'Send multi-channel reminders with payment links.' },
            { step: '05', title: 'Payment Rec', desc: 'Real-time webhook reconciliation upon settlement.' },
            { step: '06', title: 'Telemetry', desc: 'Track DSO improvements and customer payment speed.' },
          ].map((item) => (
            <div
              key={item.step}
              className="p-4 rounded-xl border border-border bg-surface space-y-2 hover:border-border-strong transition-colors"
            >
              <span className="font-mono text-xs font-bold text-accent block">
                {item.step}
              </span>
              <h4 className="font-semibold text-sm text-text-primary">
                {item.title}
              </h4>
              <p className="text-[11px] font-mono text-text-secondary leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
