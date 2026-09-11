import * as React from 'react';
import { 
  BarChart3, 
  Receipt, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Calendar, 
  ArrowUpRight, 
  FileText, 
  Download, 
  CheckCircle2, 
  Clock, 
  CreditCard 
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';

export function CollectAICoreExperience() {
  return (
    <div className="space-y-28 py-20 border-b border-border/60" id="experience">
      <Container size="wide">
        <SectionHeader
          eyebrow="Core Product Experience"
          title="Designed around the work finance teams actually need to do."
          description="A deep look into the key operational interfaces of CollectAI, engineered with high-density data tables, responsive layouts, and instant status visibility."
          align="left"
        />

        <div className="mt-16 space-y-24">
          {/* ========================================================================= */}
          {/* MOMENT 1: RECEIVABLES CONTROL & AGING MATRIX */}
          {/* ========================================================================= */}
          <div className="rounded-3xl border border-border bg-surface p-6 sm:p-10 space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="font-mono text-xs font-bold text-accent tracking-wider uppercase block">
                01 • Tactical Operational View
              </span>
              <h3 className="type-h3 text-text-primary">
                Receivables Aging & Priority Execution View
              </h3>
              <p className="type-body text-text-secondary">
                Unlike standard accounting ledgers that present static alphabetical lists, the Receivables view actively categorizes accounts into aging cohorts and flags overdue items based on customer payment history and invoice size.
              </p>
            </div>

            {/* Interface Composition */}
            <div className="rounded-2xl border border-border bg-background p-4 sm:p-6 space-y-4 shadow-product">
              {/* Filter / Search Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono border-b border-border pb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-surface-muted border border-border text-text-primary font-semibold">
                    All Open Invoices (142)
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-surface border border-border text-text-tertiary">
                    Overdue Only (28)
                  </span>
                </div>
                <div className="flex items-center gap-2 text-text-tertiary">
                  <span>Export:</span>
                  <span className="text-text-primary underline cursor-pointer">CSV</span>
                  <span>•</span>
                  <span className="text-text-primary underline cursor-pointer">JSON</span>
                </div>
              </div>

              {/* High Density Receivables Data Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-border text-text-tertiary uppercase text-[10px] tracking-wider">
                      <th className="pb-3 font-semibold">Invoice ID</th>
                      <th className="pb-3 font-semibold">Customer Account</th>
                      <th className="pb-3 font-semibold">Issue Date</th>
                      <th className="pb-3 font-semibold">Due Date / Aging</th>
                      <th className="pb-3 font-semibold text-right">Amount</th>
                      <th className="pb-3 font-semibold text-center">Risk Tier</th>
                      <th className="pb-3 font-semibold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {[
                      { id: 'INV-2025-084', client: 'Nexus Tech Global', date: 'Jan 15, 2025', due: '14d overdue', cohort: '31–60d', amt: '$9,450.00', risk: 'Medium', riskColor: 'text-amber-500' },
                      { id: 'INV-2025-079', client: 'Vanguard Media Group', date: 'Dec 28, 2024', due: '38d overdue', cohort: '61–90d', amt: '$14,200.00', risk: 'High', riskColor: 'text-red-500' },
                      { id: 'INV-2025-091', client: 'Starlight Retailers Inc', date: 'Jan 24, 2025', due: '4d overdue', cohort: '0–30d', amt: '$4,750.00', risk: 'Low', riskColor: 'text-emerald-500' },
                      { id: 'INV-2025-102', client: 'Apex Cloud Systems', date: 'Feb 02, 2025', due: 'Due in 8 days', cohort: 'Current', amt: '$22,800.00', risk: 'Safe', riskColor: 'text-text-tertiary' },
                      { id: 'INV-2025-105', client: 'Horizon BioPharma', date: 'Feb 05, 2025', due: 'Due in 11 days', cohort: 'Current', amt: '$18,300.00', risk: 'Safe', riskColor: 'text-text-tertiary' },
                    ].map((row) => (
                      <tr key={row.id} className="hover:bg-surface-muted/40 transition-colors">
                        <td className="py-3 font-bold text-text-primary">{row.id}</td>
                        <td className="py-3 text-text-primary font-medium">{row.client}</td>
                        <td className="py-3 text-text-tertiary">{row.date}</td>
                        <td className="py-3">
                          <span className={row.due.includes('overdue') ? 'text-red-500 font-semibold' : 'text-text-secondary'}>
                            {row.due}
                          </span>
                        </td>
                        <td className="py-3 text-right font-bold text-text-primary">{row.amt}</td>
                        <td className="py-3 text-center">
                          <span className={`text-[10px] font-bold ${row.riskColor}`}>
                            ● {row.risk}
                          </span>
                        </td>
                        <td className="py-3 text-right">
                          <span className="text-accent underline cursor-pointer font-semibold">
                            Collect &rarr;
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* MOMENT 2: CUSTOMERS & INVOICE LEDGERS */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Customer Directory Ledger (7 cols) */}
            <div className="lg:col-span-7 rounded-3xl border border-border bg-surface p-6 sm:p-8 space-y-6">
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block">
                  02 • Customer Intelligence
                </span>
                <h3 className="type-h3 text-text-primary">
                  Customer History & Payment Reliability
                </h3>
                <p className="type-body-small text-text-secondary">
                  Every customer profile consolidates total invoiced amounts, lifetime collections, average days to settle, active billing contacts, and dispute notes.
                </p>
              </div>

              {/* Customer Card Mockup */}
              <div className="p-4 rounded-xl border border-border bg-surface-muted/60 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <div>
                    <h4 className="font-bold text-sm text-text-primary">Vanguard Media Group LLC</h4>
                    <span className="text-text-tertiary text-[11px]">Account ID: CUST-4029 • Net-30 Terms</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-bold border border-amber-500/20">
                    Late Payer Pattern
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-[11px]">
                  <div className="p-2.5 rounded-lg bg-surface border border-border">
                    <span className="text-text-tertiary block text-[10px]">Total Billed</span>
                    <span className="font-bold text-text-primary">$184,500</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface border border-border">
                    <span className="text-text-tertiary block text-[10px]">Open Overdue</span>
                    <span className="font-bold text-red-500">$14,200</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface border border-border">
                    <span className="text-text-tertiary block text-[10px]">Avg Settlement</span>
                    <span className="font-bold text-text-primary">44.2 Days</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-surface border border-border text-[11px] text-text-secondary space-y-1">
                  <span className="text-text-tertiary uppercase text-[10px] font-bold block">Primary Finance Contact</span>
                  <p className="text-text-primary">Mark Sullivan (VP Finance) &lt;m.sullivan@vanguardmedia.com&gt;</p>
                  <p className="text-text-tertiary text-[10px]">Last contacted 3 days ago via Automated 30d Escalation</p>
                </div>
              </div>
            </div>

            {/* Payments & Dynamic Links (5 cols) */}
            <div className="lg:col-span-5 rounded-3xl border border-border bg-surface p-6 sm:p-8 space-y-6">
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block">
                  03 • Frictionless Settlement
                </span>
                <h3 className="type-h3 text-text-primary">
                  Dynamic Payment Links
                </h3>
                <p className="type-body-small text-text-secondary">
                  Embedded direct settlement links generated for Razorpay with webhook-driven automated ledger updates.
                </p>
              </div>

              {/* Payment Component Mockup */}
              <div className="p-5 rounded-2xl border border-emerald-500/30 bg-surface-muted space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
                    <CreditCard className="w-4 h-4" />
                    <span>Instant Payment Checkout</span>
                  </div>
                  <span className="text-[10px] text-text-tertiary">Razorpay Powered</span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-text-secondary">
                    <span>Invoice</span>
                    <span className="font-bold text-text-primary">INV-2025-079</span>
                  </div>
                  <div className="flex justify-between text-text-secondary">
                    <span>Balance Due</span>
                    <span className="font-bold text-text-primary">$14,200.00 USD</span>
                  </div>
                  <div className="flex justify-between text-text-secondary">
                    <span>Accepted Rails</span>
                    <span className="text-text-primary">ACH, Wire, Cards</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-center font-bold text-emerald-700 dark:text-emerald-300">
                  Pay $14,200.00 via Razorpay Secure
                </div>

                <div className="text-[10px] text-text-tertiary text-center">
                  Webhook triggers instant invoice status update to &ldquo;PAID&rdquo; within 250ms.
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* MOMENT 3: REPORTING & CASH VELOCITY TRENDS */}
          {/* ========================================================================= */}
          <div className="rounded-3xl border border-border bg-surface p-6 sm:p-10 space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="font-mono text-xs font-bold text-accent tracking-wider uppercase block">
                04 • Executive Visibility
              </span>
              <h3 className="type-h3 text-text-primary">
                Cash Flow Recovery Trends & DSO Tracking
              </h3>
              <p className="type-body text-text-secondary">
                Clean, serious analytics visualizations that track the velocity of capital recovery over time, avoiding misleading 3D graphs in favor of legible financial metrics.
              </p>
            </div>

            {/* Metrics Chart Bar Simulation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-5 rounded-2xl border border-border bg-surface-muted/60 space-y-2">
                <span className="text-text-tertiary text-[10px] uppercase font-bold block">Cash Recovered (Trailing 30d)</span>
                <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 block">$214,800.00</span>
                <span className="text-[11px] text-text-secondary block">92.4% of Target Month Recovery</span>
              </div>

              <div className="p-5 rounded-2xl border border-border bg-surface-muted/60 space-y-2">
                <span className="text-text-tertiary text-[10px] uppercase font-bold block">Average Days to Collect</span>
                <span className="text-2xl font-bold text-text-primary block">32.4 Days</span>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 block">-8.1 Days from Prior Quarter</span>
              </div>

              <div className="p-5 rounded-2xl border border-border bg-surface-muted/60 space-y-2">
                <span className="text-text-tertiary text-[10px] uppercase font-bold block">Disputed Invoices Under Review</span>
                <span className="text-2xl font-bold text-text-primary block">2 Invoices</span>
                <span className="text-[11px] text-text-tertiary block">$6,400 Total Disputed Value</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
