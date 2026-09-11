'use client';

import * as React from 'react';
import { 
  Briefcase, 
  Users, 
  Clock, 
  Layers, 
  Calendar, 
  AlertCircle, 
  CheckCircle2, 
  DollarSign, 
  ChevronRight, 
  TrendingUp, 
  Sparkles,
  Zap
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const screens = [
  { id: 'scale-overview', title: '01. Agency Command', type: 'Operations Overview' },
  { id: 'scale-clients', title: '02. Client Workspace & Health', type: 'Retainer Health' },
  { id: 'scale-delivery', title: '03. Delivery Kanban', type: 'Production Sprints' },
  { id: 'scale-capacity', title: '04. Capacity & Utilization', type: 'Team Heatmap' },
  { id: 'scale-ledger', title: '05. Retainer Burn & Billing', type: 'Invoicing & Scope' },
];

export function ScaleHQShowcase() {
  const [activeScreen, setActiveScreen] = React.useState<string>('scale-overview');
  const [selectedClient, setSelectedClient] = React.useState<string>('acme-corp');

  const handleScreenChange = (screenId: string) => {
    setActiveScreen(screenId);
    trackEvent('lab_screen_engaged', { slug: 'scalehq', screenId });
  };

  return (
    <div className="rounded-3xl border border-violet-500/30 bg-surface-100/90 dark:bg-surface-900/90 shadow-2xl overflow-hidden backdrop-blur-md">
      {/* Product Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 py-4 border-b border-border/60 bg-surface-200/50 dark:bg-surface-950/50 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-violet-500/20 text-violet-400 flex items-center justify-center font-bold">
            <Briefcase className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-foreground">ScaleHQ Agency OS</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-violet-500/10 text-violet-400 border border-violet-500/20">
                Interactive Showcase
              </span>
            </div>
            <span className="text-xs text-muted-foreground font-mono">Modern Product Agency Operations &amp; Delivery</span>
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
                  ? 'bg-violet-600 text-white font-bold shadow-xs'
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
        {/* SCREEN 1: Operations Overview */}
        {activeScreen === 'scale-overview' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Design &amp; Engineering Agency Operations</h4>
                <p className="text-xs text-muted-foreground font-mono">18 Active Client Retainers &middot; 24 Team Members &middot; 84% Billable Target</p>
              </div>
              <span className="text-xs font-mono text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-xl">
                Retainer MRR: $242,000 / mo
              </span>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Team Billable Rate</span>
                <div className="text-2xl font-bold font-mono text-foreground">84.2%</div>
                <span className="text-[11px] text-emerald-400 font-mono">+3.8% vs last month</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Average Blended Rate</span>
                <div className="text-2xl font-bold font-mono text-foreground">$175/hr</div>
                <span className="text-[11px] text-muted-foreground font-mono">Design: $165 &middot; Eng: $190</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Deliverables on Schedule</span>
                <div className="text-2xl font-bold font-mono text-foreground">96.8%</div>
                <span className="text-[11px] text-emerald-400 font-mono">0 blocking milestones</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Unbilled Scope Creep</span>
                <div className="text-2xl font-bold font-mono text-foreground">$14,500</div>
                <span className="text-[11px] text-rose-400 font-mono">2 change orders pending</span>
              </div>
            </div>

            {/* Top Retainers */}
            <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-3">
              <span className="text-xs font-mono text-muted-foreground uppercase">Key Retainer Health Status</span>
              <div className="space-y-2.5">
                {[
                  { name: 'Supersonic Health', retainer: '$28,000/mo', hours: '140 / 160 hrs', burn: '87.5%', status: 'HEALTHY', lead: 'Sarah T. (Design Lead)' },
                  { name: 'Fintech Velocity', retainer: '$35,000/mo', hours: '198 / 200 hrs', burn: '99.0%', status: 'CAP_REACHED', lead: 'David K. (Eng Lead)' },
                  { name: 'Omni Retail Global', retainer: '$22,500/mo', hours: '82 / 130 hrs', burn: '63.0%', status: 'UNDER_PACED', lead: 'Prince Singh Rana (Principal)' },
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-surface-200/40 dark:bg-surface-800/30 border border-border/40 flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <strong className="text-foreground text-sm font-sans">{item.name}</strong>
                        <span className="text-xs font-mono text-violet-400 font-bold">{item.retainer}</span>
                      </div>
                      <span className="text-xs text-muted-foreground font-mono">Lead: {item.lead}</span>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono">
                      <span>{item.hours} ({item.burn})</span>
                      <span className={`px-2.5 py-0.5 rounded-full border text-[11px] font-bold ${
                        item.status === 'HEALTHY'
                          ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                          : item.status === 'CAP_REACHED'
                          ? 'text-rose-400 bg-rose-500/10 border-rose-500/20'
                          : 'text-amber-400 bg-amber-500/10 border-amber-500/20'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 2: Client Workspace & Health */}
        {activeScreen === 'scale-clients' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Client Workspace: Fintech Velocity Inc.</h4>
                <p className="text-xs text-muted-foreground font-mono">Dedicated Product Pod &middot; Sprint 24 &middot; Contract renewal in 42 days</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                Client NPS: 10/10 &middot; Retainer Since Jan 2024
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Retainer Burn Gauge */}
              <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-4">
                <span className="text-xs font-mono text-muted-foreground uppercase flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-violet-400" />
                  Monthly Retainer Burn Velocity (198 / 200 Hours)
                </span>

                <div className="space-y-2">
                  <div className="h-3 w-full bg-surface-200 dark:bg-surface-800 rounded-full overflow-hidden">
                    <div className="h-full bg-rose-500 rounded-full" style={{ width: '99%' }} />
                  </div>
                  <div className="flex justify-between text-xs font-mono text-muted-foreground">
                    <span>Day 24 of 30 in Billing Cycle</span>
                    <span className="text-rose-400 font-bold">2 Hours Remaining</span>
                  </div>
                </div>

                {/* Scope Creep Alert */}
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-amber-400 font-semibold font-mono">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Autonomous Scope Creep Detector
                  </div>
                  <p className="text-muted-foreground">
                    Detected 3 feature requests in Slack channel (#proj-velocity-mobile) outside the SOW boundary. Change order draft auto-prepared ($6,800).
                  </p>
                </div>
              </div>

              {/* Active Milestone Deliverables */}
              <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-3">
                <span className="text-xs font-mono text-muted-foreground uppercase flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-violet-400" />
                  Current Sprint Deliverables
                </span>

                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 border border-border/40 flex items-center justify-between">
                    <span>Card Issuance KYC Workflow</span>
                    <span className="text-emerald-400 font-bold">Approved by VP Prod</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 border border-border/40 flex items-center justify-between">
                    <span>Plaid Link iOS Component</span>
                    <span className="text-violet-400 font-bold">In QA Review</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 border border-border/40 flex items-center justify-between">
                    <span>Design Token Migration</span>
                    <span className="text-amber-400 font-bold">In Progress</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 3: Delivery Kanban */}
        {activeScreen === 'scale-delivery' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Multi-Client Production Kanban Board</h4>
                <p className="text-xs text-muted-foreground font-mono">Active deliverables across 4 engineering &amp; design pods</p>
              </div>
              <span className="text-xs font-mono text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-xl">
                12 Items Active &middot; Sprint Velocity: 48 pts
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Column 1: In Design */}
              <div className="p-4 rounded-2xl bg-surface-200/30 dark:bg-surface-950/40 border border-border/60 space-y-3">
                <div className="flex justify-between items-center text-xs font-mono font-bold text-foreground">
                  <span>IN DESIGN (3)</span>
                  <span className="text-violet-400">Figma Specs</span>
                </div>
                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-background/90 border border-border/50 space-y-1 shadow-xs">
                    <span className="text-[10px] font-mono text-violet-400">#ACME-104</span>
                    <h5 className="text-xs font-semibold text-foreground">Checkout Redesign V2</h5>
                    <span className="text-[11px] text-muted-foreground block">Assignee: Elena R. (Design)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-background/90 border border-border/50 space-y-1 shadow-xs">
                    <span className="text-[10px] font-mono text-violet-400">#SUPER-89</span>
                    <h5 className="text-xs font-semibold text-foreground">Patient Telehealth Portal</h5>
                    <span className="text-[11px] text-muted-foreground block">Assignee: Marcus T.</span>
                  </div>
                </div>
              </div>

              {/* Column 2: In Code / Review */}
              <div className="p-4 rounded-2xl bg-surface-200/30 dark:bg-surface-950/40 border border-border/60 space-y-3">
                <div className="flex justify-between items-center text-xs font-mono font-bold text-foreground">
                  <span>IN CODE &amp; REVIEW (4)</span>
                  <span className="text-amber-400">GitHub PRs</span>
                </div>
                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-background/90 border border-border/50 space-y-1 shadow-xs">
                    <span className="text-[10px] font-mono text-amber-400">#VEL-202</span>
                    <h5 className="text-xs font-semibold text-foreground">Apple Pay PassKit Integration</h5>
                    <span className="text-[11px] text-muted-foreground block">Assignee: Prince Singh Rana (Lead)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-background/90 border border-border/50 space-y-1 shadow-xs">
                    <span className="text-[10px] font-mono text-amber-400">#OMNI-14</span>
                    <h5 className="text-xs font-semibold text-foreground">Shopify Headless Storefront</h5>
                    <span className="text-[11px] text-muted-foreground block">Assignee: Liam O.</span>
                  </div>
                </div>
              </div>

              {/* Column 3: Client Sign-off */}
              <div className="p-4 rounded-2xl bg-surface-200/30 dark:bg-surface-950/40 border border-border/60 space-y-3">
                <div className="flex justify-between items-center text-xs font-mono font-bold text-foreground">
                  <span>CLIENT SIGN-OFF (2)</span>
                  <span className="text-emerald-400">Ready to Deploy</span>
                </div>
                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-background/90 border border-border/50 space-y-1 shadow-xs">
                    <span className="text-[10px] font-mono text-emerald-400">#VEL-199</span>
                    <h5 className="text-xs font-semibold text-foreground">Multi-Factor Auth Revamp</h5>
                    <span className="text-[11px] text-emerald-400 font-mono block">Accepted by Client</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 4: Capacity & Utilization */}
        {activeScreen === 'scale-capacity' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Team Capacity &amp; Burnout Risk Heatmap</h4>
                <p className="text-xs text-muted-foreground font-mono">Weekly load allocation across senior, staff, and contract resources</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                Agency Utilization Target (85%) Healthy
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-background/80 border border-border/60 space-y-3">
              <div className="space-y-3 text-xs font-mono">
                {[
                  { name: 'Prince Singh Rana', role: 'Principal Architect', hours: '38 / 40 hrs', util: '95%', clients: 'Fintech Velocity, Omni Retail', status: 'FULL_LOAD' },
                  { name: 'Elena Rostova', role: 'Staff Product Designer', hours: '34 / 40 hrs', util: '85%', clients: 'Supersonic Health, Acme', status: 'OPTIMAL' },
                  { name: 'David Kim', role: 'Senior Full-Stack Engineer', hours: '42 / 40 hrs', util: '105%', clients: 'Fintech Velocity, Core Ops', status: 'OVER_CAPACITY' },
                  { name: 'Sarah Miller', role: 'Senior UI/UX Designer', hours: '30 / 40 hrs', util: '75%', clients: 'Supersonic Health', status: 'CAPACITY_AVAILABLE' },
                ].map((person, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-surface-200/40 dark:bg-surface-800/30 border border-border/40 flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <strong className="text-foreground text-sm font-sans">{person.name}</strong>
                        <span className="text-[10px] text-muted-foreground font-mono">({person.role})</span>
                      </div>
                      <span className="text-muted-foreground text-[11px]">Allocated to: {person.clients}</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="font-bold text-foreground">{person.hours} ({person.util})</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                        person.status === 'OVER_CAPACITY'
                          ? 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                          : person.status === 'FULL_LOAD' || person.status === 'OPTIMAL'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                          : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                      }`}>
                        {person.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 5: Retainer Burn & Billing */}
        {activeScreen === 'scale-ledger' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Monthly Invoicing &amp; Retainer Reconciliation</h4>
                <p className="text-xs text-muted-foreground font-mono">Automated Stripe Billing &amp; QuickBooks sync with time audit trails</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                Upcoming Month 1st Invoicing: $256,500
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-background/80 border border-border/60 space-y-3">
              <span className="text-xs font-mono text-muted-foreground uppercase">Scheduled Invoices for Next Cycle</span>
              
              <div className="space-y-2 text-xs font-mono">
                {[
                  { inv: 'INV-2024-1101', client: 'Fintech Velocity Inc.', base: '$35,000', oos: '+$6,800 (Change Order #2)', total: '$41,800', status: 'AUTO_CHARGE_SCHEDULED' },
                  { inv: 'INV-2024-1102', client: 'Supersonic Health LLC', base: '$28,000', oos: '$0', total: '$28,000', status: 'AUTO_CHARGE_SCHEDULED' },
                  { inv: 'INV-2024-1103', client: 'Omni Retail Global', base: '$22,500', oos: '$0', total: '$22,500', status: 'PO_MATCH_REQUIRED' },
                ].map((row, i) => (
                  <div key={i} className="p-3 rounded-xl bg-surface-200/40 dark:bg-surface-800/30 border border-border/40 flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-violet-400 font-bold">{row.inv}</span>
                        <strong className="text-foreground text-sm font-sans">{row.client}</strong>
                      </div>
                      <span className="text-muted-foreground text-[11px]">Base Retainer: {row.base} &middot; Out-of-Scope: {row.oos}</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-sm font-bold text-foreground">{row.total}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-surface-200 dark:bg-surface-800 text-muted-foreground border border-border">
                        {row.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
