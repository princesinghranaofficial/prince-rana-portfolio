'use client';

import * as React from 'react';
import { 
  BarChart2, 
  TrendingUp, 
  Users, 
  Layers, 
  Activity, 
  Filter, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Share2, 
  Compass,
  Clock
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const screens = [
  { id: 'pulse-funnels', title: '01. Funnel Dropoff', type: 'Conversion Analysis' },
  { id: 'pulse-paths', title: '02. User Journey Flows', type: 'Sankey Paths' },
  { id: 'pulse-retention', title: '03. Feature Retention', type: 'N-Day Curves' },
  { id: 'pulse-live', title: '04. Live Event Stream', type: 'Real-Time Clickstream' },
  { id: 'pulse-audiences', title: '05. Behavioral Cohorts', type: 'Audience Segmentation' },
];

export function PulseAnalyticsShowcase() {
  const [activeScreen, setActiveScreen] = React.useState<string>('pulse-funnels');

  const handleScreenChange = (screenId: string) => {
    setActiveScreen(screenId);
    trackEvent('lab_screen_engaged', { slug: 'pulse-analytics', screenId });
  };

  return (
    <div className="rounded-3xl border border-blue-500/30 bg-surface-100/90 dark:bg-surface-900/90 shadow-2xl overflow-hidden backdrop-blur-md">
      {/* Product Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 py-4 border-b border-border/60 bg-surface-200/50 dark:bg-surface-950/50 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
            <BarChart2 className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-foreground">Pulse Product Analytics</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Interactive Showcase
              </span>
            </div>
            <span className="text-xs text-muted-foreground font-mono">High-Resolution Cohorts &amp; Sub-Second Funnels</span>
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
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
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
        {/* SCREEN 1: Conversion Funnel Explorer */}
        {activeScreen === 'pulse-funnels' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">SaaS Self-Serve Activation Funnel</h4>
                <p className="text-xs text-muted-foreground font-mono">Date Range: Last 30 Days &middot; 48,200 Unique Sessions Ingested</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                Overall Funnel Conversion: 12.8%
              </span>
            </div>

            {/* Funnel Steps */}
            <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-4">
              <span className="text-xs font-mono text-muted-foreground uppercase">Step Conversion &amp; Median Time-to-Next</span>

              <div className="space-y-3">
                {[
                  { step: '1. Landing Page Visit', users: '48,200', pct: '100%', drop: '0%', time: '-' },
                  { step: '2. Started Free Trial / Sign-up', users: '19,760', pct: '41.0%', drop: '-59.0%', time: '1m 14s' },
                  { step: '3. Invited Team Member (Collaborate)', users: '11,065', pct: '23.0%', drop: '-44.0%', time: '14m 20s' },
                  { step: '4. First Query Executed (Aha Moment)', users: '8,194', pct: '17.0%', drop: '-26.0%', time: '2h 05m' },
                  { step: '5. Upgraded to Paid Tier ($49/mo)', users: '6,169', pct: '12.8%', drop: '-24.7%', time: '4.2 days' },
                ].map((st, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="font-semibold text-foreground">{st.step}</span>
                      <div className="flex gap-4">
                        <span className="text-muted-foreground">{st.users} users ({st.pct})</span>
                        <span className="text-muted-foreground">Med Time: {st.time}</span>
                        {i > 0 && <span className="text-rose-400 font-bold">{st.drop}</span>}
                      </div>
                    </div>
                    <div className="h-3 w-full bg-surface-200 dark:bg-surface-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full transition-all duration-300"
                        style={{ width: st.pct }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 2: User Journey Flows */}
        {activeScreen === 'pulse-paths' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Sankey User Path Analysis: Post-Sign-Up Behavior</h4>
                <p className="text-xs text-muted-foreground font-mono">Tracing where users navigate within the first 10 minutes of account creation</p>
              </div>
              <span className="text-xs font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-xl">
                Primary Happy Path: 64% of cohort
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 border border-border/40 space-y-2">
                  <span className="text-muted-foreground block text-[10px] uppercase">Path A: Interactive Quickstart (64%)</span>
                  <strong className="text-foreground text-sm block font-sans">Template Picker &#8594; Demo Data &#8594; Share</strong>
                  <p className="text-emerald-400 font-bold">88% 7-Day Retention</p>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 border border-border/40 space-y-2">
                  <span className="text-muted-foreground block text-[10px] uppercase">Path B: Direct API Setup (24%)</span>
                  <strong className="text-foreground text-sm block font-sans">Settings &#8594; API Key &#8594; Documentation</strong>
                  <p className="text-blue-400 font-bold">72% 7-Day Retention</p>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 border border-border/40 space-y-2">
                  <span className="text-muted-foreground block text-[10px] uppercase">Path C: Idle Abandonment (12%)</span>
                  <strong className="text-foreground text-sm block font-sans">Dashboard &#8594; Blank State &#8594; Logout</strong>
                  <p className="text-rose-400 font-bold">14% 7-Day Retention (Churn Risk)</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 3: Feature Retention */}
        {activeScreen === 'pulse-retention' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Feature Stickiness &amp; N-Day Cohort Retention</h4>
                <p className="text-xs text-muted-foreground font-mono">Determining which specific product capabilities drive long-term habit formation</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                Stickiest: Slack Integration Alerts
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-background/80 border border-border/60 space-y-3">
              <div className="space-y-2.5 text-xs font-mono">
                {[
                  { feature: 'Configured Slack/Teams Anomaly Alert', d1: '94%', d7: '82%', d30: '74%', impact: 'High (+42% LTV)' },
                  { feature: 'Created Custom Dashboard Card', d1: '88%', d7: '71%', d30: '58%', impact: 'High (+28% LTV)' },
                  { feature: 'Exported CSV Raw Data', d1: '62%', d7: '34%', d30: '19%', impact: 'Low (Ad-hoc users)' },
                  { feature: 'Shared Public View-Only Link', d1: '79%', d7: '64%', d30: '52%', impact: 'Medium (+18% Viral)' },
                ].map((feat, i) => (
                  <div key={i} className="p-3 rounded-xl bg-surface-200/40 dark:bg-surface-800/30 border border-border/40 flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <strong className="text-foreground text-sm font-sans">{feat.feature}</strong>
                      <span className="text-muted-foreground text-[11px] block">Business Impact: {feat.impact}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                      <span>Day 1: <strong className="text-foreground">{feat.d1}</strong></span>
                      <span>Day 7: <strong className="text-foreground">{feat.d7}</strong></span>
                      <span>Day 30: <strong className="text-blue-400">{feat.d30}</strong></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 4: Live Event Stream */}
        {activeScreen === 'pulse-live' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Sub-Second Clickstream Event Ingestion Engine</h4>
                <p className="text-xs text-muted-foreground font-mono">Ingesting 14,200 events/sec via Apache Kafka &amp; ClickHouse OLAP</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Stream Latency: 18ms
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-surface-950 text-blue-400 font-mono text-xs border border-blue-500/30 space-y-2">
              {[
                { time: '12:04:18.420', event: 'chart_query_executed', user: 'usr_8410b', org: 'stripe.com', dur: '42ms' },
                { time: '12:04:18.310', event: 'dashboard_exported_pdf', user: 'usr_1922c', org: 'airbnb.com', dur: '184ms' },
                { time: '12:04:18.190', event: 'funnel_step_dropped', user: 'usr_9411e', org: 'uber.com', dur: '12ms' },
                { time: '12:04:17.980', event: 'subscription_upgraded_annual', user: 'usr_3310a', org: 'gusto.com', dur: '310ms' },
              ].map((ev, i) => (
                <div key={i} className="p-2 rounded bg-surface-900/60 border border-blue-500/20 flex items-center justify-between">
                  <span>[{ev.time}] <strong className="text-foreground">{ev.event}</strong> (user: {ev.user}, org: {ev.org})</span>
                  <span className="text-[10px] text-muted-foreground">{ev.dur}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SCREEN 5: Behavioral Cohorts */}
        {activeScreen === 'pulse-audiences' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Dynamic Behavioral Cohorts &amp; Sync</h4>
                <p className="text-xs text-muted-foreground font-mono">Syncing real-time user segments directly to Customer.io, Braze, and HubSpot</p>
              </div>
              <span className="text-xs font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-xl">
                4 Active Sync Pipelines
              </span>
            </div>

            <div className="space-y-3 text-xs font-mono">
              {[
                { name: 'Power Analysts (&gt;15 queries/day)', size: '2,840 users', sync: 'Braze In-App Notification', status: 'SYNCED (1m ago)' },
                { name: 'At-Risk Inactive Founders (No visits in 7d)', size: '890 users', sync: 'Customer.io Email Automation', status: 'SYNCED (5m ago)' },
                { name: 'Self-Serve Ready for Enterprise Upgrade', size: '340 accounts', sync: 'Salesforce &amp; Slack #rev-leads', status: 'SYNCED (12m ago)' },
              ].map((seg, i) => (
                <div key={i} className="p-4 rounded-xl bg-background/80 border border-border/60 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <strong className="text-sm font-semibold text-foreground font-sans block">{seg.name}</strong>
                    <span className="text-muted-foreground text-[11px]">Audience Size: {seg.size} &middot; Target: {seg.sync}</span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-xl">
                    {seg.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
