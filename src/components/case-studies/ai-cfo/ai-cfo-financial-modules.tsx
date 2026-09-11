'use client';

import * as React from 'react';
import { 
  CreditCard, 
  Building, 
  Briefcase, 
  FileSpreadsheet, 
  Calendar, 
  Search, 
  Filter, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowUpRight, 
  ArrowDownRight,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { H2, H3, TextLead } from '@/components/ui/typography';
import { Badge } from '@/components/ui/badge';

type ModuleTab = 'transactions' | 'accounts' | 'investments' | 'loans' | 'taxes';

const sampleTransactions = [
  { id: 'TX-9401', date: 'May 28, 2025', desc: 'Stripe SaaS Inflow #INV-8841', account: 'SVB Checking', cat: 'Subscription Revenue', amount: '+$14,200', type: 'INFLOW', status: 'Reconciled', confidence: '99%' },
  { id: 'TX-9402', date: 'May 27, 2025', desc: 'Amazon Web Services Cloud Infrastructure', account: 'SVB Checking', cat: 'Cloud Compute', amount: '-$4,200', type: 'OUTFLOW', status: 'Reconciled', confidence: '98%' },
  { id: 'TX-9403', date: 'May 25, 2025', desc: 'Datadog Log Monitoring & APM', account: 'Ramp Card', cat: 'Software Subscriptions', amount: '-$1,850', type: 'OUTFLOW', status: 'Anomaly Alert', confidence: '84%', anomaly: '+38% MoM Surge' },
  { id: 'TX-9404', date: 'May 24, 2025', desc: 'Enterprise Annual Contract &middot; Vertex Inc', account: 'SVB Checking', cat: 'Annual Subscriptions', amount: '+$12,800', type: 'INFLOW', status: 'Reconciled', confidence: '100%' },
  { id: 'TX-9405', date: 'May 20, 2025', desc: 'Semi-Monthly Engineering Payroll (Gusto)', account: 'Payroll Clearing', cat: 'Payroll & Benefits', amount: '-$22,100', type: 'OUTFLOW', status: 'Reconciled', confidence: '100%' },
];

const sampleAccounts = [
  { name: 'Silicon Valley Bank (Operating Checking)', type: 'Operating Cash', balance: '$184,200', status: 'Live Sync', lastUpdate: '10m ago' },
  { name: 'Treasury Direct Yield Reserve (4.8% APY)', type: 'Treasury / Cash Equivalents', balance: '$158,650', status: 'Daily Batch', lastUpdate: '2h ago' },
  { name: 'Ramp Corporate Credit Line ($50K Limit)', type: 'Revolving Liability', balance: '-$8,400', status: 'Live Sync', lastUpdate: '5m ago' },
  { name: 'Gusto Payroll Dedicated Clearing Account', type: 'Restricted Reserve', balance: '$22,100', status: 'Automated Sweep', lastUpdate: '1h ago' },
];

export function AICFOFinancialModules() {
  const [activeTab, setActiveTab] = React.useState<ModuleTab>('transactions');

  return (
    <section id="modules" className="py-20 sm:py-28 border-b border-border/50 bg-surface-50/40 dark:bg-surface-950/30">
      <Container size="default">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest font-semibold block">
              08 &middot; FINANCIAL OPERATIONS &amp; LEDGER MODULES
            </span>
            <H2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
              Deep operational workspaces behind the summary metrics.
            </H2>
            <TextLead className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Financial intelligence requires continuous synchronization with verified ground truth. The platform structures daily bookkeeping across 5 core operational domains: transactions, accounts, treasury investments, debt liabilities, and estimated tax reserves.
            </TextLead>
          </div>

          {/* Module Selector Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-surface-200/50 dark:bg-surface-900/60 border border-border/60 max-w-2xl">
            {[
              { id: 'transactions', label: 'Transactions', icon: CreditCard },
              { id: 'accounts', label: 'Accounts', icon: Building },
              { id: 'investments', label: 'Treasury & Yield', icon: Briefcase },
              { id: 'loans', label: 'Loans & Debt', icon: FileSpreadsheet },
              { id: 'taxes', label: 'Tax Reserves', icon: Calendar },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as ModuleTab)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all ${
                    isActive
                      ? 'bg-background text-foreground shadow-sm font-semibold border border-border/80'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-muted-foreground'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Panels */}
          <div className="rounded-3xl border border-border/80 bg-surface-100/80 dark:bg-surface-900/80 p-6 sm:p-8 shadow-xl backdrop-blur-md">
            {/* 1. Transactions Tab */}
            {activeTab === 'transactions' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/60">
                  <div>
                    <H3 className="text-base font-semibold text-foreground">
                      Transaction Intelligence &amp; Autonomous Classification
                    </H3>
                    <p className="text-xs text-muted-foreground">
                      Multi-bank webhook reconciliation with category confidence scoring and anomaly detection.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                    <span className="px-2.5 py-1 rounded bg-background border border-border/60">
                      Showing 5 of 428 Records
                    </span>
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-border/60 text-muted-foreground font-mono text-[11px] uppercase">
                        <th className="pb-3 font-medium">Date &amp; ID</th>
                        <th className="pb-3 font-medium">Description</th>
                        <th className="pb-3 font-medium">Account</th>
                        <th className="pb-3 font-medium">Category</th>
                        <th className="pb-3 font-medium text-right">Amount</th>
                        <th className="pb-3 font-medium text-right">Confidence</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40 font-mono">
                      {sampleTransactions.map((tx) => (
                        <tr key={tx.id} className="hover:bg-surface-200/40 dark:hover:bg-surface-800/40 transition-colors">
                          <td className="py-3 text-muted-foreground">
                            <span className="text-foreground block">{tx.date}</span>
                            <span className="text-[10px]">{tx.id}</span>
                          </td>
                          <td className="py-3 font-sans font-medium text-foreground max-w-xs">
                            {tx.desc}
                            {tx.anomaly && (
                              <span className="inline-flex items-center gap-1 ml-2 px-2 py-0.5 rounded text-[10px] font-mono bg-rose-500/20 text-rose-400">
                                <AlertTriangle className="w-2.5 h-2.5" />
                                {tx.anomaly}
                              </span>
                            )}
                          </td>
                          <td className="py-3 text-muted-foreground">{tx.account}</td>
                          <td className="py-3">
                            <span className="px-2 py-0.5 rounded bg-surface-200/60 dark:bg-surface-800/60 text-foreground border border-border/50 text-[11px]">
                              {tx.cat}
                            </span>
                          </td>
                          <td className={`py-3 text-right font-bold ${tx.type === 'INFLOW' ? 'text-emerald-400' : 'text-foreground'}`}>
                            {tx.amount}
                          </td>
                          <td className="py-3 text-right">
                            <span className="text-emerald-400 font-bold">{tx.confidence}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 2. Accounts Tab */}
            {activeTab === 'accounts' && (
              <div className="space-y-6">
                <div className="pb-4 border-b border-border/60">
                  <H3 className="text-base font-semibold text-foreground">
                    Multi-Account Liquidity &amp; Treasury Balances
                  </H3>
                  <p className="text-xs text-muted-foreground">
                    Continuous ledger synchronization across depository, yield, and revolving credit accounts.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sampleAccounts.map((acc, ai) => (
                    <div key={ai} className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-muted-foreground uppercase">{acc.type}</span>
                        <span className="flex items-center gap-1 text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {acc.status}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xl font-bold font-mono text-foreground">{acc.balance}</div>
                        <span className="text-xs font-medium text-foreground block">{acc.name}</span>
                      </div>
                      <div className="pt-2 border-t border-border/40 text-[11px] font-mono text-muted-foreground">
                        Last reconciled: {acc.lastUpdate}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Investments / Treasury Tab */}
            {activeTab === 'investments' && (
              <div className="space-y-6">
                <div className="pb-4 border-b border-border/60">
                  <H3 className="text-base font-semibold text-foreground">
                    Capital Preservation &amp; Treasury Yield Portfolio
                  </H3>
                  <p className="text-xs text-muted-foreground">
                    Passive yield management for startup cash reserves (Not investment advice &middot; informational visibility).
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-2">
                    <span className="text-[11px] font-mono text-muted-foreground uppercase">Short-Term US T-Bills</span>
                    <div className="text-2xl font-bold font-mono text-foreground">$120,000</div>
                    <span className="text-xs font-mono text-emerald-400">4.85% Weighted APY</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-2">
                    <span className="text-[11px] font-mono text-muted-foreground uppercase">FDI-Insured Money Market</span>
                    <div className="text-2xl font-bold font-mono text-foreground">$38,650</div>
                    <span className="text-xs font-mono text-emerald-400">4.20% Liquid APY</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-2">
                    <span className="text-[11px] font-mono text-muted-foreground uppercase">Estimated Annualized Yield</span>
                    <div className="text-2xl font-bold font-mono text-emerald-400">+$7,450/yr</div>
                    <span className="text-xs text-muted-foreground">Passive revenue offsetting SaaS tooling</span>
                  </div>
                </div>
              </div>
            )}

            {/* 4. Loans & Debt Tab */}
            {activeTab === 'loans' && (
              <div className="space-y-6">
                <div className="pb-4 border-b border-border/60">
                  <H3 className="text-base font-semibold text-foreground">
                    Debt Liabilities &amp; Amortization Schedules
                  </H3>
                  <p className="text-xs text-muted-foreground">
                    Transparent tracking of principal paydown, monthly interest, and covenant milestones.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="font-semibold text-sm text-foreground block">Silicon Valley Bank Growth Term Loan</span>
                      <span className="text-xs text-muted-foreground">Origination: Jan 2024 &middot; 36-Month Term</span>
                    </div>
                    <span className="text-xs font-mono text-amber-400 font-bold">$42,000 Remaining</span>
                  </div>

                  <div className="w-full bg-surface-200 dark:bg-surface-800 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full w-[58%]" />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono pt-1 text-muted-foreground">
                    <div>Original: <strong className="text-foreground">$100,000</strong></div>
                    <div>Paid Off: <strong className="text-emerald-400">$58,000 (58%)</strong></div>
                    <div>Monthly Debit: <strong className="text-foreground">$3,150</strong></div>
                    <div>Maturity: <strong className="text-foreground">Dec 2026</strong></div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. Taxes Tab */}
            {activeTab === 'taxes' && (
              <div className="space-y-6">
                <div className="pb-4 border-b border-border/60">
                  <H3 className="text-base font-semibold text-foreground">
                    Estimated Tax Obligations &amp; Compliance Vault
                  </H3>
                  <p className="text-xs text-muted-foreground">
                    Organization of quarterly tax liabilities and document trails (Not statutory tax advice).
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-2">
                    <span className="text-[11px] font-mono text-muted-foreground uppercase">Q2 Estimated Federal Tax</span>
                    <div className="text-2xl font-bold font-mono text-foreground">$14,500</div>
                    <span className="text-xs font-mono text-amber-400 font-semibold">Due June 15, 2025</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-2">
                    <span className="text-[11px] font-mono text-muted-foreground uppercase">Tax Reserve Fund</span>
                    <div className="text-2xl font-bold font-mono text-emerald-400">$18,200</div>
                    <span className="text-xs text-muted-foreground">Allocated in segregated Treasury pool</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-2">
                    <span className="text-[11px] font-mono text-muted-foreground uppercase">CPA Verified Status</span>
                    <div className="text-sm font-bold text-foreground flex items-center gap-1.5 pt-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Forms 1120 &amp; 1099 Prepared</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Documents vaulted in encrypted storage</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
