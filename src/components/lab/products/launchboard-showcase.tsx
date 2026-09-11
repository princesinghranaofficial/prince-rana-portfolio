'use client';

import * as React from 'react';
import { 
  Rocket, 
  TrendingUp, 
  FileText, 
  PieChart, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  DollarSign, 
  Send,
  Milestone
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const screens = [
  { id: 'launch-roadmap', title: '01. Product Roadmap', type: 'Milestone Timeline' },
  { id: 'launch-metrics', title: '02. North Star Dials', type: 'Core Metrics' },
  { id: 'launch-memo', title: '03. Investor Update Memo', type: 'Monthly LP Report' },
  { id: 'launch-cap', title: '04. Cap Table Dilution', type: 'SAFE Modeling' },
  { id: 'launch-kudos', title: '05. Shipping Velocity Log', type: 'Continuous Delivery' },
];

export function LaunchboardShowcase() {
  const [activeScreen, setActiveScreen] = React.useState<string>('launch-roadmap');

  const handleScreenChange = (screenId: string) => {
    setActiveScreen(screenId);
    trackEvent('lab_screen_engaged', { slug: 'launchboard', screenId });
  };

  return (
    <div className="rounded-3xl border border-emerald-500/30 bg-surface-100/90 dark:bg-surface-900/90 shadow-2xl overflow-hidden backdrop-blur-md">
      {/* Product Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 py-4 border-b border-border/60 bg-surface-200/50 dark:bg-surface-950/50 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
            <Rocket className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-foreground">Launchboard Founder OS</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Interactive Showcase
              </span>
            </div>
            <span className="text-xs text-muted-foreground font-mono">Seed Stage Operating System &amp; Investor Transparency</span>
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
        {/* SCREEN 1: Product Roadmap */}
        {activeScreen === 'launch-roadmap' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Quarterly Strategic Roadmap &amp; Release Cadence</h4>
                <p className="text-xs text-muted-foreground font-mono">Continuous delivery pipeline shipping bi-weekly product increments</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                Sprint Velocity: 52 Story Points
              </span>
            </div>

            <div className="space-y-3">
              {[
                { q: 'Q3 Shipped', title: 'Self-Serve Team Billing &amp; Stripe Checkout Integration', date: 'August 2024', status: 'COMPLETED' },
                { q: 'Q4 Current', title: 'AI Automation Canvas with Drag-and-Drop Workflow Nodes', date: 'October - December 2024', status: 'IN_PROGRESS' },
                { q: 'Q1 Planned', title: 'Enterprise SSO SAML &amp; Audit Log Compliance Suite', date: 'January 2025', status: 'PLANNED' },
              ].map((milestone, i) => (
                <div key={i} className="p-4 rounded-xl bg-background/80 border border-border/60 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-emerald-400 w-24">{milestone.q}</span>
                    <div>
                      <strong className="text-sm font-semibold text-foreground font-sans block">{milestone.title}</strong>
                      <span className="text-xs text-muted-foreground font-mono">{milestone.date}</span>
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono px-2.5 py-1 rounded-xl font-bold self-start md:self-auto ${
                    milestone.status === 'COMPLETED' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                    milestone.status === 'IN_PROGRESS' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                    'bg-surface-200 dark:bg-surface-800 text-muted-foreground border border-border'
                  }`}>
                    {milestone.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SCREEN 2: North Star Dials */}
        {activeScreen === 'launch-metrics' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Core North Star Metrics &amp; Capital Efficiency</h4>
                <p className="text-xs text-muted-foreground font-mono">Real-time Stripe &amp; PostHog analytics syncing to investor dashboard</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                Burn Multiple: 0.74x (Best-in-Class)
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Annual Recurring Rev (ARR)</span>
                <div className="text-2xl font-bold font-mono text-foreground">$480,000</div>
                <span className="text-[11px] text-emerald-400 font-mono">+24% MoM</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Net Revenue Retention</span>
                <div className="text-2xl font-bold font-mono text-foreground">128.4%</div>
                <span className="text-[11px] text-emerald-400 font-mono">Strong seat expansion</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Cash Runway</span>
                <div className="text-2xl font-bold font-mono text-foreground">22.4 Mos</div>
                <span className="text-[11px] text-muted-foreground font-mono">$1.4M Cash in Bank</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Weekly Active Teams</span>
                <div className="text-2xl font-bold font-mono text-foreground">342</div>
                <span className="text-[11px] text-emerald-400 font-mono">+18 teams this week</span>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 3: Investor Update Memo */}
        {activeScreen === 'launch-memo' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">1-Click Monthly Investor Update Memo Generator</h4>
                <p className="text-xs text-muted-foreground font-mono">Synthesizing revenue, shipping changelog, and asks into a structured update</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                Ready to Send via Substack / Email
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-4">
              <div className="flex justify-between items-center border-b border-border/40 pb-2 text-xs font-mono">
                <span className="font-bold text-foreground">Subject: Launchboard October Update: ARR crosses $480K (+24% MoM)</span>
                <span className="text-muted-foreground">Sent to 14 Seed Investors</span>
              </div>

              <div className="p-4 rounded-xl bg-surface-200/40 dark:bg-surface-950/50 border border-border/40 text-xs font-mono leading-relaxed space-y-2 text-foreground">
                <p>Hey Everyone,</p>
                <p>October was another breakout month for Launchboard. Here is our high-level recap:</p>
                <p className="text-muted-foreground pl-2 border-l-2 border-emerald-500">
                  - <strong>Financials:</strong> Hit $40K MRR ($480K ARR) with 128% Net Revenue Retention.<br />
                  - <strong>Product:</strong> Rolled out our interactive workflow DAG builder to 100% of teams.<br />
                  - <strong>Asks from LPs:</strong> We are hiring a Staff Go Engineer. Introductions to great backend engineers in North America/Europe welcome!
                </p>
                <p>Thanks for your ongoing partnership,</p>
                <p className="text-emerald-400">Prince Singh Rana &middot; Founder &amp; Architect</p>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 4: Cap Table Dilution */}
        {activeScreen === 'launch-cap' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Cap Table &amp; SAFE Note Dilution Simulator</h4>
                <p className="text-xs text-muted-foreground font-mono">Post-money SAFE conversion modeling ahead of Series Seed</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                Founder Ownership Post-Seed: 74.2%
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-background/80 border border-border/60 space-y-3">
              <div className="space-y-2 text-xs font-mono">
                {[
                  { holder: 'Founding Team (Prince Singh Rana)', shares: '7,420,000', pct: '74.2%', invested: 'Common Stock' },
                  { holder: 'Y Combinator (SAFE)', shares: '700,000', pct: '7.0%', invested: '$125K Post-Money' },
                  { holder: 'Seed Angel Syndicate', shares: '880,000', pct: '8.8%', invested: '$750K at $8M Cap' },
                  { holder: 'Unallocated Employee Pool (ESOP)', shares: '1,000,000', pct: '10.0%', invested: 'Reserved Pool' },
                ].map((row, i) => (
                  <div key={i} className="p-3 rounded-xl bg-surface-200/40 dark:bg-surface-800/30 border border-border/40 flex justify-between items-center">
                    <div>
                      <strong className="text-foreground text-sm font-sans block">{row.holder}</strong>
                      <span className="text-muted-foreground text-[11px]">{row.invested}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-emerald-400 font-bold block">{row.pct}</span>
                      <span className="text-muted-foreground text-[10px]">{row.shares} Shares</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 5: Shipping Velocity Log */}
        {activeScreen === 'launch-kudos' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Continuous Shipping Velocity &amp; Public Changelog</h4>
                <p className="text-xs text-muted-foreground font-mono">Production deployments automated via GitHub Actions &amp; Vercel</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                42 Deploys in Last 30 Days
              </span>
            </div>

            <div className="space-y-2.5 text-xs font-mono">
              {[
                { tag: 'v2.4.0', title: 'Sub-second search indexing for knowledge cards', date: '2 days ago' },
                { tag: 'v2.3.8', title: 'Dark mode theme persistence &amp; reduced motion controls', date: '6 days ago' },
                { tag: 'v2.3.4', title: 'Stripe webhooks automatic retry with exponential backoff', date: '12 days ago' },
              ].map((log, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-background/80 border border-border/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 font-bold">{log.tag}</span>
                    <span className="text-foreground font-semibold">{log.title}</span>
                  </div>
                  <span className="text-muted-foreground text-[11px]">{log.date}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
