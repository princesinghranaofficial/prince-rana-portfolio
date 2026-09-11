import * as React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Receipt, 
  TrendingUp, 
  Bot, 
  GitFork, 
  Mail, 
  CreditCard, 
  BarChart3, 
  Sliders, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';

export function CollectAISystemMap() {
  return (
    <section className="py-20 md:py-32 border-b border-border/60 bg-background relative" id="product">
      <Container size="wide">
        <SectionHeader
          eyebrow="System Overview"
          title="The complete product surface map."
          description="CollectAI was architected as an interconnected web application where every screen feeds customer and invoice state into the automated collection engine."
          align="left"
        />

        {/* Product Navigation & Domain Map */}
        <div className="mt-14 space-y-12">
          {/* Top Architectural Pipeline Sequence */}
          <div className="rounded-3xl border border-border bg-surface p-6 sm:p-10 space-y-8">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest">
                Operational Data Pipeline
              </span>
              <span className="font-mono text-[11px] text-text-tertiary">
                End-to-End Receivables Loop
              </span>
            </div>

            {/* Visual Pipeline Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 text-xs font-mono">
              <div className="p-3.5 rounded-xl border border-border bg-surface-muted/60 space-y-1 text-center">
                <Users className="w-4 h-4 mx-auto text-accent" />
                <span className="font-bold text-text-primary block">1. Customers</span>
                <span className="text-[10px] text-text-tertiary">Accounts & Contacts</span>
              </div>

              <div className="p-3.5 rounded-xl border border-border bg-surface-muted/60 space-y-1 text-center">
                <Receipt className="w-4 h-4 mx-auto text-accent" />
                <span className="font-bold text-text-primary block">2. Invoices</span>
                <span className="text-[10px] text-text-tertiary">Due Dates & Line Items</span>
              </div>

              <div className="p-3.5 rounded-xl border border-border bg-surface-muted/60 space-y-1 text-center">
                <TrendingUp className="w-4 h-4 mx-auto text-accent" />
                <span className="font-bold text-text-primary block">3. Receivables</span>
                <span className="text-[10px] text-text-tertiary">Aging Cohort Logic</span>
              </div>

              <div className="p-3.5 rounded-xl border border-purple-500/40 bg-purple-500/5 space-y-1 text-center">
                <Bot className="w-4 h-4 mx-auto text-purple-600 dark:text-purple-400" />
                <span className="font-bold text-purple-700 dark:text-purple-300 block">4. AI Collector</span>
                <span className="text-[10px] text-purple-600/80 dark:text-purple-300/80">Priority Action Queue</span>
              </div>

              <div className="p-3.5 rounded-xl border border-border bg-surface-muted/60 space-y-1 text-center">
                <GitFork className="w-4 h-4 mx-auto text-accent" />
                <span className="font-bold text-text-primary block">5. Workflows</span>
                <span className="text-[10px] text-text-tertiary">Escalation Rules</span>
              </div>

              <div className="p-3.5 rounded-xl border border-border bg-surface-muted/60 space-y-1 text-center">
                <CreditCard className="w-4 h-4 mx-auto text-accent" />
                <span className="font-bold text-text-primary block">6. Payments</span>
                <span className="text-[10px] text-text-tertiary">Instant Links / Razorpay</span>
              </div>

              <div className="p-3.5 rounded-xl border border-border bg-surface-muted/60 space-y-1 text-center">
                <BarChart3 className="w-4 h-4 mx-auto text-accent" />
                <span className="font-bold text-text-primary block">7. Reporting</span>
                <span className="text-[10px] text-text-tertiary">DSO & Cash Analytics</span>
              </div>
            </div>

            {/* Intelligence Overlay Bar */}
            <div className="p-4 rounded-xl border border-purple-500/30 bg-purple-500/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
                <span><strong>AI Copilot Layer:</strong> Contextual queries, customer dispute analysis, and draft assistance available globally.</span>
              </div>
              <span className="text-[10px] text-text-tertiary uppercase tracking-wider shrink-0">
                Omnipresent Context
              </span>
            </div>
          </div>

          {/* Module Surface Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="p-5 rounded-2xl border border-border bg-surface space-y-3">
              <div className="flex items-center gap-2 text-text-primary font-bold">
                <LayoutDashboard className="w-4 h-4 text-accent" />
                <span>Core Operations</span>
              </div>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-center justify-between">
                  <span>Dashboard Control Center</span>
                  <span className="text-emerald-500 text-[10px]">Active</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Customer Directory</span>
                  <span className="text-emerald-500 text-[10px]">Active</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Invoice Management</span>
                  <span className="text-emerald-500 text-[10px]">Active</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Receivables Aging Table</span>
                  <span className="text-emerald-500 text-[10px]">Active</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl border border-border bg-surface space-y-3">
              <div className="flex items-center gap-2 text-text-primary font-bold">
                <Bot className="w-4 h-4 text-purple-600" />
                <span>Intelligence & Automation</span>
              </div>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-center justify-between">
                  <span>AI Collector Queue</span>
                  <span className="text-emerald-500 text-[10px]">Active</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Workflow Rules Builder</span>
                  <span className="text-emerald-500 text-[10px]">Active</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>AI Copilot Sidepanel</span>
                  <span className="text-emerald-500 text-[10px]">Active</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Email / WhatsApp Logs</span>
                  <span className="text-text-tertiary text-[10px]">Modular</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl border border-border bg-surface space-y-3">
              <div className="flex items-center gap-2 text-text-primary font-bold">
                <Sliders className="w-4 h-4 text-accent" />
                <span>Platform & Infrastructure</span>
              </div>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-center justify-between">
                  <span>Multi-Tenant Auth & Teams</span>
                  <span className="text-emerald-500 text-[10px]">Active</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Razorpay Payment Gateway</span>
                  <span className="text-emerald-500 text-[10px]">Live Webhooks</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Audit Logs & Security</span>
                  <span className="text-emerald-500 text-[10px]">RLS Enforced</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Executive Reporting</span>
                  <span className="text-emerald-500 text-[10px]">Active</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
