'use client';

import * as React from 'react';
import { 
  Radar, 
  Eye, 
  TrendingUp, 
  GitCompare, 
  Users, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  AlertCircle,
  Activity
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const screens = [
  { id: 'signal-radar', title: '01. Competitor Radar', type: 'Landscape Matrix' },
  { id: 'signal-diffs', title: '02. Pricing & Web Diffs', type: 'Visual DOM Watch' },
  { id: 'signal-moves', title: '03. Executive & Hiring Moves', type: 'Talent Signals' },
  { id: 'signal-brief', title: '04. Strategic AI Briefing', type: 'Weekly Digest' },
  { id: 'signal-sources', title: '05. Ingestion Pipeline Health', type: 'Crawler Telemetry' },
];

export function SignalAIShowcase() {
  const [activeScreen, setActiveScreen] = React.useState<string>('signal-radar');

  const handleScreenChange = (screenId: string) => {
    setActiveScreen(screenId);
    trackEvent('lab_screen_engaged', { slug: 'signal-ai', screenId });
  };

  return (
    <div className="rounded-3xl border border-indigo-500/30 bg-surface-100/90 dark:bg-surface-900/90 shadow-2xl overflow-hidden backdrop-blur-md">
      {/* Product Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 py-4 border-b border-border/60 bg-surface-200/50 dark:bg-surface-950/50 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
            <Radar className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-foreground">Signal AI Strategic Radar</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                Interactive Showcase
              </span>
            </div>
            <span className="text-xs text-muted-foreground font-mono">Autonomous Competitive Intelligence &amp; Market Telemetry</span>
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
                  ? 'bg-indigo-600 text-white font-bold shadow-xs'
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
        {/* SCREEN 1: Competitor Radar */}
        {activeScreen === 'signal-radar' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Competitive Market Landscape &middot; AI Infrastructure</h4>
                <p className="text-xs text-muted-foreground font-mono">14 Competitors Monitored &middot; Continuous scraping of changelogs, pricing &amp; jobs</p>
              </div>
              <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-xl">
                3 Critical Moves in Past 48h
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-surface-200/40 dark:bg-surface-800/30 border border-border/60 space-y-2">
                <span className="text-xs font-mono text-indigo-400 font-bold block uppercase">Competitor Alpha</span>
                <strong className="text-sm font-semibold text-foreground block">Launched Enterprise VPC Tier</strong>
                <p className="text-xs text-muted-foreground font-mono">Pricing: $1,200/mo minimum commitment with SOC 2 compliance guarantee.</p>
                <span className="text-[10px] font-mono text-amber-400 block mt-2">Threat Level: Moderate</span>
              </div>

              <div className="p-4 rounded-2xl bg-surface-200/40 dark:bg-surface-800/30 border border-indigo-500/40 space-y-2">
                <span className="text-xs font-mono text-indigo-400 font-bold block uppercase">Competitor Beta</span>
                <strong className="text-sm font-semibold text-foreground block">Removed Free Community Plan</strong>
                <p className="text-xs text-muted-foreground font-mono">Forced migration to $29/mo starter plan triggering customer backlash on Reddit/HN.</p>
                <span className="text-[10px] font-mono text-emerald-400 block mt-2">Acquisition Opportunity: High</span>
              </div>

              <div className="p-4 rounded-2xl bg-surface-200/40 dark:bg-surface-800/30 border border-border/60 space-y-2">
                <span className="text-xs font-mono text-indigo-400 font-bold block uppercase">Competitor Gamma</span>
                <strong className="text-sm font-semibold text-foreground block">Hired VP Enterprise Sales</strong>
                <p className="text-xs text-muted-foreground font-mono">Ex-Snowflake sales director joined to build 12-person outbound SDR team.</p>
                <span className="text-[10px] font-mono text-blue-400 block mt-2">Signal: Moving Upmarket</span>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 2: Pricing & Web Diffs */}
        {activeScreen === 'signal-diffs' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Visual DOM &amp; Pricing Tier Mutation Diff</h4>
                <p className="text-xs text-muted-foreground font-mono">Captured: Competitor Beta /pricing page mutation (Yesterday 14:22 UTC)</p>
              </div>
              <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-xl">
                Diff Type: Pricing Increase (+25%)
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-surface-950 font-mono text-xs border border-indigo-500/30 space-y-3">
              <div className="flex justify-between items-center text-muted-foreground border-b border-border/40 pb-2">
                <span>https://competitor-beta.com/pricing</span>
                <span className="text-indigo-400">Headless Playwright Crawler</span>
              </div>

              <div className="space-y-1 text-[11px] leading-relaxed">
                <div className="text-rose-400 bg-rose-500/10 p-1 rounded">
                  - &lt;div class=&quot;price-starter&quot;&gt;Free Forever (Up to 10k events/mo)&lt;/div&gt;
                </div>
                <div className="text-emerald-400 bg-emerald-500/10 p-1 rounded">
                  + &lt;div class=&quot;price-starter&quot;&gt;$29/mo (Includes 25k events/mo)&lt;/div&gt;
                </div>
                <div className="text-zinc-400 p-1">
                  &nbsp;&nbsp;&lt;div class=&quot;price-pro&quot;&gt;$149/mo (Unlimited team members)&lt;/div&gt;
                </div>
              </div>

              <div className="p-3 rounded-xl bg-surface-900 border border-indigo-500/20 text-xs text-foreground space-y-1">
                <strong className="text-indigo-400 font-bold block">TACTICAL RECOMMENDATION:</strong>
                <p className="text-muted-foreground">
                  Launch targeted Google Ads campaign against keyword &quot;Competitor Beta alternative&quot; highlighting our transparent free tier.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 3: Executive & Hiring Moves */}
        {activeScreen === 'signal-moves' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Talent Flow &amp; Job Requisition Intelligence</h4>
                <p className="text-xs text-muted-foreground font-mono">Aggregating Greenhouse, Lever, and LinkedIn hiring spikes across competitors</p>
              </div>
              <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-xl">
                Trend: 82% Increase in AI Research Roles
              </span>
            </div>

            <div className="space-y-3 text-xs font-mono">
              {[
                { company: 'Competitor Alpha', opening: 'Lead Distributed Systems Architect (x3)', dept: 'Infrastructure Core', signal: 'Rebuilding storage engine from MongoDB to ClickHouse' },
                { company: 'Competitor Delta', opening: 'Staff Security &amp; FedRAMP Specialist', dept: 'Compliance', signal: 'Preparing for US Federal Government procurement RFP' },
                { company: 'Competitor Beta', opening: 'VP Customer Success &amp; Renewals', dept: 'Operations', signal: 'Challenged retention following recent pricing shift' },
              ].map((job, i) => (
                <div key={i} className="p-4 rounded-xl bg-background/80 border border-border/60 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <strong className="text-foreground text-sm font-sans">{job.company}</strong>
                      <span className="text-indigo-400 font-bold">{job.opening}</span>
                    </div>
                    <span className="text-muted-foreground text-[11px] mt-0.5 block">{job.signal}</span>
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded-xl bg-surface-200 dark:bg-surface-800 text-muted-foreground border border-border">
                    {job.dept}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SCREEN 4: Strategic AI Briefing */}
        {activeScreen === 'signal-brief' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Weekly Executive Market Briefing Digest</h4>
                <p className="text-xs text-muted-foreground font-mono">Auto-compiled synthesis for Founder &amp; Executive Leadership</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                Generated Today 07:00 UTC
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-4 text-xs font-mono">
              <div className="p-3.5 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 border border-border/40 space-y-2">
                <strong className="text-sm font-semibold text-foreground font-sans block">EXECUTIVE SUMMARY (WEEK 44)</strong>
                <p className="text-foreground leading-relaxed">
                  1. <strong>Pricing Pressures:</strong> Mid-market competitors are aggressively discontinuing freemium tiers in favor of $25-$35 minimum monthly plans to offset AI inference compute costs.<br />
                  2. <strong>Enterprise Positioning:</strong> 3 competitors published SOC 2 Type II compliance badges in the past 14 days, demonstrating accelerating move toward enterprise procurement.<br />
                  3. <strong>Immediate Opportunity:</strong> Competitor Beta user revolt creates an ideal window to launch migration tooling and offer 3 months free to migrating accounts.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 5: Ingestion Pipeline Health */}
        {activeScreen === 'signal-sources' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Crawler Ingestion Pipeline &amp; Proxy Health</h4>
                <p className="text-xs text-muted-foreground font-mono">Automated scraping workers with anti-bot bypass &amp; screenshot diffing</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                All 48 Ingestion Workers Healthy
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">URLs Monitored</span>
                <div className="text-2xl font-bold font-mono text-foreground">340 URLs</div>
                <span className="text-[11px] text-muted-foreground font-mono">Checked every 2 hours</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">DOM Mutations Detected</span>
                <div className="text-2xl font-bold font-mono text-foreground">18 / Week</div>
                <span className="text-[11px] text-indigo-400 font-mono">Parsed via LLM</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Job Postings Tracked</span>
                <div className="text-2xl font-bold font-mono text-foreground">1,240</div>
                <span className="text-[11px] text-emerald-400 font-mono">Greenhouse &amp; Lever APIs</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Crawler Uptime</span>
                <div className="text-2xl font-bold font-mono text-foreground">99.9%</div>
                <span className="text-[11px] text-emerald-400 font-mono">0 blocked IP addresses</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
