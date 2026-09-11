'use client';

import * as React from 'react';
import { 
  Bot, 
  ArrowUpRight, 
  CheckCircle2, 
  TrendingUp, 
  Receipt, 
  Sparkles, 
  ShieldCheck, 
  DollarSign, 
  Clock 
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { ProjectStatus } from '@/components/ui/project-status';

export function CollectAIHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-border/60 bg-background relative overflow-hidden" id="hero">
      {/* Background radial glow */}
      <div 
        className="absolute top-0 right-1/3 w-[600px] h-[350px] bg-accent/6 blur-[130px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <Container size="wide">
        <div className="space-y-12">
          {/* Top Hero Text & Metadata Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <ProjectStatus status="REAL PRODUCT" size="sm" />
                <Badge variant="category">AI Accounts Receivable SaaS</Badge>
                <span className="text-xs font-mono text-text-tertiary">2025 Release</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary leading-[1.08]">
                A smarter operating system for accounts receivable.
              </h1>

              {/* Supporting Copy */}
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
                CollectAI brings invoices, customers, receivables, collection workflows, payments and AI-assisted collection intelligence into one unified SaaS workspace.
              </p>
            </div>

            {/* Structured Project Metadata Column */}
            <div className="lg:col-span-4 p-6 rounded-2xl border border-border bg-surface-muted/60 space-y-4 font-mono text-xs shadow-xs">
              <div>
                <span className="text-text-tertiary block text-[10px] uppercase font-bold tracking-wider">Product Type</span>
                <span className="text-text-primary font-semibold block mt-0.5">B2B Fintech SaaS</span>
              </div>
              <div className="pt-3 border-t border-border/60">
                <span className="text-text-tertiary block text-[10px] uppercase font-bold tracking-wider">Role & Scope</span>
                <span className="text-text-primary font-semibold block mt-0.5">Product Design, Full-Stack Development & SaaS Architecture</span>
              </div>
              <div className="pt-3 border-t border-border/60">
                <span className="text-text-tertiary block text-[10px] uppercase font-bold tracking-wider">Core Production Stack</span>
                <span className="text-text-primary font-semibold block mt-0.5">Next.js 15, TypeScript, Supabase, PostgreSQL, Razorpay</span>
              </div>
              <div className="pt-3 border-t border-border/60">
                <span className="text-text-tertiary block text-[10px] uppercase font-bold tracking-wider">Key Capabilities</span>
                <span className="text-text-primary font-semibold block mt-0.5">AI Collector, Receivables, Workflows, Payments, Reporting</span>
              </div>
              <div className="pt-3 border-t border-border/60 flex items-center justify-between">
                <span className="text-text-tertiary text-[10px] uppercase font-bold tracking-wider">Status Verification</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-xs">Real Product</span>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* DOMINANT PRODUCT HERO VISUAL: ACCOUNTS RECEIVABLE COMMAND CENTER */}
          {/* ========================================================================= */}
          <div className="rounded-3xl border border-border-strong bg-surface p-4 sm:p-8 lg:p-10 shadow-xl space-y-6">
            {/* Window Chrome Bar */}
            <div className="flex items-center justify-between border-b border-border pb-4 text-xs font-mono">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
                </div>
                <span className="text-text-tertiary text-[11px] hidden sm:inline-block">
                  app.collectai.io / receivables / overview
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] border border-emerald-500/20 font-semibold">
                  ● Autonomous Engine Active
                </span>
                <span className="text-text-tertiary text-[11px] hidden md:inline-block">
                  Tenant: Acronis Logistics Ltd.
                </span>
              </div>
            </div>

            {/* High-Level Metric Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-border bg-surface-muted/60 space-y-1">
                <span className="text-[10px] font-mono uppercase text-text-tertiary font-bold block">Total Outstanding AR</span>
                <span className="text-2xl font-mono font-bold text-text-primary block">$142,850.00</span>
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 block">84% Collected This Month</span>
              </div>

              <div className="p-4 rounded-xl border border-border bg-surface-muted/60 space-y-1">
                <span className="text-[10px] font-mono uppercase text-text-tertiary font-bold block">Average Days Sales Outstanding</span>
                <span className="text-2xl font-mono font-bold text-text-primary block">32.4 Days</span>
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 block">-8.1 Days from 90d Baseline</span>
              </div>

              <div className="p-4 rounded-xl border border-border bg-surface-muted/60 space-y-1">
                <span className="text-[10px] font-mono uppercase text-text-tertiary font-bold block">Overdue Invoices (&gt;30d)</span>
                <span className="text-2xl font-mono font-bold text-amber-600 dark:text-amber-400 block">14 Invoices</span>
                <span className="text-[11px] font-mono text-text-secondary block">$28,400 Under Active Follow-Up</span>
              </div>

              <div className="p-4 rounded-xl border border-border bg-surface-muted/60 space-y-1">
                <span className="text-[10px] font-mono uppercase text-text-tertiary font-bold block">AI Collector Queue</span>
                <span className="text-2xl font-mono font-bold text-accent block">6 Queued</span>
                <span className="text-[11px] font-mono text-text-secondary block">Human Review Enabled</span>
              </div>
            </div>

            {/* Aging Distribution Cohorts */}
            <div className="p-5 rounded-2xl border border-border bg-surface-muted/40 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-semibold text-text-primary">Receivables Aging Schedule</span>
                <span className="text-text-tertiary">Real-Time Ledger Cohorts</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-surface border border-border space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-text-tertiary">
                    <span>0–30 Days (Current)</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">60.5%</span>
                  </div>
                  <span className="text-lg font-bold text-text-primary block">$86,400.00</span>
                  <div className="w-full h-1.5 rounded-full bg-surface-100 overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[60.5%]" />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-surface border border-border space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-text-tertiary">
                    <span>31–60 Days</span>
                    <span className="text-blue-600 dark:text-blue-400 font-bold">26.7%</span>
                  </div>
                  <span className="text-lg font-bold text-text-primary block">$38,200.00</span>
                  <div className="w-full h-1.5 rounded-full bg-surface-100 overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full w-[26.7%]" />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-surface border border-border space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-text-tertiary">
                    <span>61–90 Days</span>
                    <span className="text-amber-600 dark:text-amber-400 font-bold">8.5%</span>
                  </div>
                  <span className="text-lg font-bold text-text-primary block">$12,150.00</span>
                  <div className="w-full h-1.5 rounded-full bg-surface-100 overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full w-[8.5%]" />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-surface border border-border space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-text-tertiary">
                    <span>90+ Days (Critical)</span>
                    <span className="text-red-500 font-bold">4.3%</span>
                  </div>
                  <span className="text-lg font-bold text-red-500 block">$6,100.00</span>
                  <div className="w-full h-1.5 rounded-full bg-surface-100 overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full w-[4.3%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Operational Priority Action Stream */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
              {/* Receivables Table Preview (7 cols) */}
              <div className="lg:col-span-7 rounded-2xl border border-border bg-surface p-5 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-text-primary">Active Invoices Requiring Follow-Up</span>
                  <span className="text-text-tertiary">Sorted by Collection Priority</span>
                </div>

                <div className="divide-y divide-border/60 text-xs font-mono">
                  {[
                    { id: 'INV-2025-084', client: 'Nexus Tech Global', amt: '$9,450.00', due: '14d overdue', risk: 'Medium Risk' },
                    { id: 'INV-2025-079', client: 'Vanguard Media Group', amt: '$14,200.00', due: '38d overdue', risk: 'High Risk' },
                    { id: 'INV-2025-091', client: 'Starlight Retailers Inc', amt: '$4,750.00', due: '4d overdue', risk: 'Low Risk' },
                  ].map((inv) => (
                    <div key={inv.id} className="py-3 flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-text-primary">{inv.id}</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-surface-muted text-text-secondary border border-border">
                            {inv.client}
                          </span>
                        </div>
                        <span className="text-[11px] text-red-500">{inv.due}</span>
                      </div>
                      <div className="text-right space-y-0.5">
                        <span className="font-bold text-text-primary">{inv.amt}</span>
                        <span className="block text-[10px] text-text-tertiary">{inv.risk}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Collector Drawer Preview (5 cols) */}
              <div className="lg:col-span-5 rounded-2xl border border-purple-500/30 bg-purple-500/5 p-5 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
                  <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300 font-bold">
                    <Bot className="w-4 h-4" />
                    <span>AI Collector Follow-Up Draft</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20">
                    Awaiting Approval
                  </span>
                </div>

                <div className="space-y-2 text-[11px] text-text-secondary leading-relaxed">
                  <p className="font-semibold text-text-primary">
                    Target: Vanguard Media Group (INV-2025-079)
                  </p>
                  <div className="p-3 rounded-lg bg-surface border border-border text-text-primary italic">
                    &ldquo;Hi Mark, following up on invoice INV-2025-079 ($14,200.00) which is 38 days overdue. To avoid any service disruption on your account, please settle via the instant payment link below or let us know if you need invoice clarification.&rdquo;
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-text-tertiary pt-1">
                    <span>Tone: Firm & Professional</span>
                    <span className="text-purple-600 dark:text-purple-400 font-semibold">One-Click Send</span>
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
