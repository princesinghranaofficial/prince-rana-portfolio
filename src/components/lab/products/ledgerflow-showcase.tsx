'use client';

import * as React from 'react';
import { 
  Building2, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight, 
  DollarSign, 
  FileText, 
  Layers, 
  Calendar, 
  ShieldCheck, 
  Activity,
  CheckCircle2,
  PieChart
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const screens = [
  { id: 'financial-overview', title: '01. Treasury Position', type: 'Executive Overview' },
  { id: 'cash-flow', title: '02. Cash Flow Bridge', type: 'Cash Inflow/Outflow' },
  { id: 'forecast', title: '03. Runway Forecast', type: 'Scenario Horizon' },
  { id: 'unit-economics', title: '04. Expenses & Revenue', type: 'Unit Economics' },
  { id: 'financial-report', title: '05. Executive P&L', type: 'Statutory Reports' },
];

export function LedgerFlowShowcase() {
  const [activeScreen, setActiveScreen] = React.useState<string>('financial-overview');

  const handleScreenChange = (screenId: string) => {
    setActiveScreen(screenId);
    trackEvent('lab_screen_engaged', { slug: 'ledgerflow', screenId });
  };

  return (
    <div className="rounded-3xl border border-emerald-500/30 bg-surface-100/90 dark:bg-surface-900/90 shadow-2xl overflow-hidden backdrop-blur-md">
      {/* Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 py-4 border-b border-border/60 bg-surface-200/50 dark:bg-surface-950/50 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
            <Building2 className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-foreground">LedgerFlow Treasury OS</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Interactive Showcase
              </span>
            </div>
            <span className="text-xs text-muted-foreground font-mono">B2B Financial Operations Platform</span>
          </div>
        </div>

        {/* Screen Tabs */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-surface-100 dark:bg-surface-900 border border-border/60">
          {screens.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => handleScreenChange(s.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeScreen === s.id
                  ? 'bg-emerald-600 text-white font-bold shadow-xs'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* Screen Body */}
      <div className="p-6 sm:p-8 min-h-[520px]">
        {/* SCREEN 1: Financial Overview */}
        {activeScreen === 'financial-overview' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Consolidated Treasury &amp; Liquidity Deck</h4>
                <p className="text-xs text-muted-foreground font-mono">Multi-entity cash balances synchronized across domestic &amp; global banks</p>
              </div>
              <span className="text-xs font-mono text-emerald-400">Reconciled: 4 mins ago</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono">
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] text-muted-foreground uppercase">Net Cash Position</span>
                <div className="text-2xl font-bold text-foreground">$512,400</div>
                <span className="text-[11px] text-emerald-400">+$34,200 (+7.1% MoM)</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] text-muted-foreground uppercase">Operating Checking</span>
                <div className="text-2xl font-bold text-foreground">$248,100</div>
                <span className="text-[11px] text-muted-foreground">Chase Commercial</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] text-muted-foreground uppercase">Yield Reserve (4.8% APY)</span>
                <div className="text-2xl font-bold text-foreground">$264,300</div>
                <span className="text-[11px] text-emerald-400">+$1,050/mo yield</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] text-muted-foreground uppercase">Calculated Runway</span>
                <div className="text-2xl font-bold text-emerald-400">18.4 Months</div>
                <span className="text-[11px] text-muted-foreground">Net burn: $27.8K/mo</span>
              </div>
            </div>

            {/* Entity Liquidity breakdown */}
            <div className="p-5 rounded-2xl bg-surface-50 dark:bg-surface-950/60 border border-border/60 space-y-3">
              <span className="text-xs font-mono uppercase text-muted-foreground font-semibold block">
                Multi-Subsidiary Cash Allocation
              </span>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-background border border-border/60 space-y-1">
                  <div className="flex justify-between">
                    <span className="font-semibold text-foreground">Acme US Inc (Parent)</span>
                    <span className="text-emerald-400">$384,200</span>
                  </div>
                  <span className="text-[11px] text-muted-foreground block">USD Currency &middot; Domestic Ops</span>
                </div>

                <div className="p-3.5 rounded-xl bg-background border border-border/60 space-y-1">
                  <div className="flex justify-between">
                    <span className="font-semibold text-foreground">Acme UK Ltd (Subsidiary)</span>
                    <span className="text-emerald-400">&pound;78,400 ($98,200)</span>
                  </div>
                  <span className="text-[11px] text-muted-foreground block">GBP Currency &middot; EMEA Sales</span>
                </div>

                <div className="p-3.5 rounded-xl bg-background border border-border/60 space-y-1">
                  <div className="flex justify-between">
                    <span className="font-semibold text-foreground">Acme Tax Reserve Pool</span>
                    <span className="text-emerald-400">$30,000</span>
                  </div>
                  <span className="text-[11px] text-muted-foreground block">Segregated IRS Liability Buffer</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 2: Cash Flow Bridge */}
        {activeScreen === 'cash-flow' && (
          <div className="space-y-6">
            <div className="pb-3 border-b border-border/50">
              <h4 className="text-base font-semibold text-foreground">Cash Flow Bridge (Last 30 Days)</h4>
              <p className="text-xs text-muted-foreground font-mono">Visual reconciliation from opening bank ledger to closing balance</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-center">
              <div className="p-4 rounded-xl bg-background border border-border/60 space-y-1">
                <span className="text-[11px] text-muted-foreground uppercase block">Opening Cash</span>
                <div className="text-xl font-bold text-foreground">$478,200</div>
              </div>
              <div className="p-4 rounded-xl bg-background border border-emerald-500/30 space-y-1">
                <span className="text-[11px] text-emerald-400 uppercase block">+ Cash Inflows</span>
                <div className="text-xl font-bold text-emerald-400">+$124,600</div>
              </div>
              <div className="p-4 rounded-xl bg-background border border-amber-500/30 space-y-1">
                <span className="text-[11px] text-amber-400 uppercase block">- Cash Outflows</span>
                <div className="text-xl font-bold text-foreground">-$90,400</div>
              </div>
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40 space-y-1">
                <span className="text-[11px] text-emerald-400 uppercase block font-bold">Closing Balance</span>
                <div className="text-xl font-bold text-emerald-400">$512,400</div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 3: Forecast */}
        {activeScreen === 'forecast' && (
          <div className="space-y-6">
            <div className="pb-3 border-b border-border/50">
              <h4 className="text-base font-semibold text-foreground">Predictive Cash Runway &amp; Horizon Model</h4>
              <p className="text-xs text-muted-foreground font-mono">18-Month forward projection with 80% Monte Carlo confidence envelope</p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-50 dark:bg-surface-950/60 border border-border/60 space-y-4">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-foreground font-semibold">Rolling Actuals vs Forecast Curve</span>
                <span className="text-emerald-400">Zero-Cash Date: Q4 2026 (Safe)</span>
              </div>

              {/* Simplified SVG forecast line */}
              <div className="w-full h-40 pt-2">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 600 120" preserveAspectRatio="none">
                  <path d="M 0 90 Q 75 80, 150 70 T 300 50" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 300 50 Q 450 35, 600 20" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round" />
                  <line x1="300" y1="10" x2="300" y2="110" stroke="#3b82f6" strokeWidth="1" strokeDasharray="2 2" />
                  <circle cx="300" cy="50" r="4" fill="#10b981" />
                </svg>
                <div className="flex justify-between text-[10px] font-mono text-muted-foreground pt-2 border-t border-border/40">
                  <span>6 Mo Ago ($420K)</span>
                  <span>Today ($512K)</span>
                  <span className="text-amber-400">+12 Mo ($640K Forecast)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 4: Unit Economics */}
        {activeScreen === 'unit-economics' && (
          <div className="space-y-6">
            <div className="pb-3 border-b border-border/50">
              <h4 className="text-base font-semibold text-foreground">Unit Economics &amp; Expense Allocation</h4>
              <p className="text-xs text-muted-foreground font-mono">Cost-per-seat and gross margin contribution breakdown</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-background border border-border/60 space-y-2">
                <span className="text-[10px] text-muted-foreground uppercase font-bold">Revenue Ingestion</span>
                <div className="flex justify-between py-1 border-b border-border/40">
                  <span>Monthly Recurring Revenue (MRR):</span>
                  <strong className="text-emerald-400">$108,400</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-border/40">
                  <span>Net Revenue Retention (NRR):</span>
                  <strong className="text-foreground">118%</strong>
                </div>
                <div className="flex justify-between py-1">
                  <span>Gross Margin Percentage:</span>
                  <strong className="text-foreground">84.2%</strong>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-background border border-border/60 space-y-2">
                <span className="text-[10px] text-muted-foreground uppercase font-bold">Cost Allocations</span>
                <div className="flex justify-between py-1 border-b border-border/40">
                  <span>Team Headcount &amp; Payroll:</span>
                  <strong className="text-foreground">$58,200/mo</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-border/40">
                  <span>Hosting Compute (AWS &amp; Neon):</span>
                  <strong className="text-foreground">$14,800/mo</strong>
                </div>
                <div className="flex justify-between py-1">
                  <span>Sales &amp; Marketing Customer Acq:</span>
                  <strong className="text-foreground">$8,400/mo</strong>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 5: Financial Report */}
        {activeScreen === 'financial-report' && (
          <div className="space-y-6">
            <div className="pb-3 border-b border-border/50 flex justify-between items-center">
              <div>
                <h4 className="text-base font-semibold text-foreground">Executive Income Statement (P&amp;L Summary)</h4>
                <p className="text-xs text-muted-foreground font-mono">Export ready for board deck and investor updates</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 font-semibold cursor-pointer hover:underline">
                Export to QuickBooks / CSV &rarr;
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-background border border-border/60 space-y-3 font-mono text-xs">
              <div className="flex justify-between py-1.5 border-b border-border/60 font-bold text-foreground">
                <span>Total Revenue (Gross Billing)</span>
                <span>$124,600</span>
              </div>
              <div className="flex justify-between py-1 text-muted-foreground">
                <span>- Cost of Goods Sold (Hosting &amp; Payments)</span>
                <span>($18,800)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-border/60 font-bold text-emerald-400">
                <span>= Gross Profit (84.9%)</span>
                <span>$105,800</span>
              </div>
              <div className="flex justify-between py-1 text-muted-foreground">
                <span>- Total Operating Expenses (SG&amp;A + Payroll)</span>
                <span>($71,600)</span>
              </div>
              <div className="flex justify-between py-2 border-t-2 border-border/80 font-bold text-emerald-400 text-sm">
                <span>= Net Operating Cash Surplus</span>
                <span>+$34,200</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
