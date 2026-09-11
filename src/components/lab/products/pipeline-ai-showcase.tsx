'use client';

import * as React from 'react';
import { 
  Target, 
  DollarSign, 
  TrendingUp, 
  Users, 
  PhoneCall, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ChevronRight, 
  Mail,
  Zap
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const screens = [
  { id: 'pipe-deals', title: '01. Opportunity Board', type: 'Weighted Forecast' },
  { id: 'pipe-call', title: '02. Meeting Intelligence', type: 'MEDDPICC & Transcript' },
  { id: 'pipe-intent', title: '03. Buyer Intent Radar', type: 'Account Signals' },
  { id: 'pipe-playbooks', title: '04. AI Sales Follow-Up', type: 'Email Copilot' },
  { id: 'pipe-analytics', title: '05. Win/Loss Analytics', type: 'Competitor Intel' },
];

export function PipelineAIShowcase() {
  const [activeScreen, setActiveScreen] = React.useState<string>('pipe-deals');

  const handleScreenChange = (screenId: string) => {
    setActiveScreen(screenId);
    trackEvent('lab_screen_engaged', { slug: 'pipeline-ai', screenId });
  };

  return (
    <div className="rounded-3xl border border-rose-500/30 bg-surface-100/90 dark:bg-surface-900/90 shadow-2xl overflow-hidden backdrop-blur-md">
      {/* Product Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 py-4 border-b border-border/60 bg-surface-200/50 dark:bg-surface-950/50 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold">
            <Target className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-foreground">Pipeline AI Sales CRM</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-rose-500/10 text-rose-400 border border-rose-500/20">
                Interactive Showcase
              </span>
            </div>
            <span className="text-xs text-muted-foreground font-mono">B2B Revenue Execution &amp; Conversation Intelligence</span>
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
                  ? 'bg-rose-600 text-white font-bold shadow-xs'
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
        {/* SCREEN 1: Opportunity Board */}
        {activeScreen === 'pipe-deals' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Q4 Enterprise Pipeline Forecast &middot; North America</h4>
                <p className="text-xs text-muted-foreground font-mono">24 Active Qualified Deals &middot; AI Predicted Close: $1.85M</p>
              </div>
              <span className="text-xs font-mono text-rose-400 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-xl">
                Win Rate: 38.4% (+6.2% vs Q3)
              </span>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Weighted Pipeline</span>
                <div className="text-2xl font-bold font-mono text-foreground">$1,854,000</div>
                <span className="text-[11px] text-emerald-400 font-mono">Quota Coverage: 2.8x</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Average Deal Cycle</span>
                <div className="text-2xl font-bold font-mono text-foreground">34 Days</div>
                <span className="text-[11px] text-emerald-400 font-mono">-8 days via AI follow-ups</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Deals at Risk</span>
                <div className="text-2xl font-bold font-mono text-foreground">2 Deals ($140K)</div>
                <span className="text-[11px] text-rose-400 font-mono">Missing Economic Buyer</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Commit Forecast</span>
                <div className="text-2xl font-bold font-mono text-foreground">$920,000</div>
                <span className="text-[11px] text-emerald-400 font-mono">92% AI Confidence</span>
              </div>
            </div>

            {/* Deal Kanban Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-surface-200/40 dark:bg-surface-800/30 border border-border/50 space-y-3">
                <div className="flex justify-between items-center text-xs font-mono font-bold text-foreground">
                  <span>DISCOVERY &amp; DEMO (8)</span>
                  <span className="text-rose-400">$480K</span>
                </div>
                <div className="p-3 rounded-xl bg-background/90 border border-border/50 space-y-1.5 shadow-xs">
                  <div className="flex justify-between items-center">
                    <strong className="text-xs text-foreground">Acme FinCorp</strong>
                    <span className="text-[10px] font-mono font-bold text-emerald-400">Health: 92%</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono block">$65K ACV &middot; Lead: Sarah M.</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-surface-200 dark:bg-surface-800 text-muted-foreground font-mono">Pain Point Confirmed</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface-200/40 dark:bg-surface-800/30 border border-border/50 space-y-3">
                <div className="flex justify-between items-center text-xs font-mono font-bold text-foreground">
                  <span>EVALUATION &amp; POC (5)</span>
                  <span className="text-rose-400">$640K</span>
                </div>
                <div className="p-3 rounded-xl bg-background/90 border border-border/50 space-y-1.5 shadow-xs">
                  <div className="flex justify-between items-center">
                    <strong className="text-xs text-foreground">Vanguard Logistics</strong>
                    <span className="text-[10px] font-mono font-bold text-emerald-400">Health: 88%</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono block">$120K ACV &middot; Lead: Prince Singh Rana</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono">POC Success Criteria Met</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface-200/40 dark:bg-surface-800/30 border border-border/50 space-y-3">
                <div className="flex justify-between items-center text-xs font-mono font-bold text-foreground">
                  <span>LEGAL &amp; PROCURE (4)</span>
                  <span className="text-rose-400">$734K</span>
                </div>
                <div className="p-3 rounded-xl bg-background/90 border border-border/50 space-y-1.5 shadow-xs">
                  <div className="flex justify-between items-center">
                    <strong className="text-xs text-foreground">Global HealthTech</strong>
                    <span className="text-[10px] font-mono font-bold text-amber-400">Health: 74%</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono block">$180K ACV &middot; Redlining MSA</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-mono">BAA Security Review</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 2: Meeting Intelligence */}
        {activeScreen === 'pipe-call' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">AI Conversation Analysis: Vanguard Logistics ($120K)</h4>
                <p className="text-xs text-muted-foreground font-mono">Executive Sponsor Call &middot; Participants: Prince Singh Rana, VP Supply Chain</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                Buyer Sentiment: Highly Favorable (+84)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* MEDDPICC Scoring */}
              <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-3">
                <span className="text-xs font-mono text-muted-foreground uppercase flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" />
                  MEDDPICC Qualification Status
                </span>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between p-2 rounded bg-surface-200/40 dark:bg-surface-800/40">
                    <span>[M] Metrics:</span>
                    <span className="text-emerald-400 font-bold">14 hrs/week saved confirmed</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-surface-200/40 dark:bg-surface-800/40">
                    <span>[E] Economic Buyer:</span>
                    <span className="text-emerald-400 font-bold">VP Finance attended demo</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-surface-200/40 dark:bg-surface-800/40">
                    <span>[D] Decision Criteria:</span>
                    <span className="text-emerald-400 font-bold">SOC 2 + API Speed prioritized</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-surface-200/40 dark:bg-surface-800/40">
                    <span>[P] Paper Process:</span>
                    <span className="text-amber-400 font-bold">Legal team SLA: 10 business days</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-surface-200/40 dark:bg-surface-800/40">
                    <span>[C] Champion:</span>
                    <span className="text-emerald-400 font-bold">Head of Logistics Eng (Strong)</span>
                  </div>
                </div>
              </div>

              {/* Action Items & Objections */}
              <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-3">
                <span className="text-xs font-mono text-muted-foreground uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                  Detected Objections &amp; Action Items
                </span>

                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1">
                    <span className="font-mono font-bold text-amber-400 text-[11px] block">OBJECTION DETECTED (24:12):</span>
                    <p className="text-muted-foreground">&quot;Concerned about migration downtime from existing legacy SAP gateway.&quot;</p>
                    <span className="text-foreground font-mono text-[10px] block mt-1">&#8594; Recommended: Send Zero-Downtime Blue-Green Whitepaper</span>
                  </div>

                  <div className="p-3 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 border border-border/40 space-y-1">
                    <span className="font-mono font-bold text-rose-400 text-[11px] block">ACTION ITEM ASSIGNED:</span>
                    <p className="text-foreground">Send custom mutual action plan (MAP) with milestone completion targets by Friday 5 PM.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 3: Buyer Intent Radar */}
        {activeScreen === 'pipe-intent' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Anonymous Account Deanonymization &amp; Intent Radar</h4>
                <p className="text-xs text-muted-foreground font-mono">Reverse IP lookup cross-referenced against Bombora and Clearbit intent data</p>
              </div>
              <span className="text-xs font-mono text-rose-400 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-xl">
                18 High-Surge Target Accounts
              </span>
            </div>

            <div className="space-y-2.5 text-xs font-mono">
              {[
                { account: 'Datadog Inc.', employees: '5,000+', surge: 'Extreme (9.8/10)', signal: '5 engineers viewed Pricing &amp; Enterprise Security documentation in past 24h', tier: 'Tier 1 Target' },
                { account: 'Snowflake Inc.', employees: '6,800+', surge: 'High (8.4/10)', signal: 'VP Architecture downloaded API SDK documentation from San Mateo IP', tier: 'Tier 1 Target' },
                { account: 'Klarna AB', employees: '4,000+', surge: 'Surging (7.9/10)', signal: 'Hiring surge for 12 Senior Cloud Architects matching product profile', tier: 'Tier 2 Target' },
              ].map((acc, i) => (
                <div key={i} className="p-4 rounded-xl bg-background/80 border border-border/60 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <strong className="text-sm font-semibold text-foreground font-sans">{acc.account}</strong>
                      <span className="text-[10px] text-muted-foreground">({acc.employees})</span>
                      <span className="text-[10px] font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">{acc.surge}</span>
                    </div>
                    <span className="text-muted-foreground text-[11px] block mt-1">{acc.signal}</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 self-start md:self-auto">{acc.tier}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SCREEN 4: AI Sales Follow-Up */}
        {activeScreen === 'pipe-playbooks' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Autonomous Post-Call Follow-Up Generator</h4>
                <p className="text-xs text-muted-foreground font-mono">Synthesizing call notes, buyer questions, and attachments into 1-click email drafts</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                Ready for Rep Review &amp; Send
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-4">
              <div className="flex justify-between items-center border-b border-border/40 pb-3 text-xs font-mono">
                <span className="text-muted-foreground">To: david.sterling@vanguardlogistics.com</span>
                <span className="text-rose-400 font-bold">Subject: Vanguard Logistics &amp; Pipeline AI - Architecture Follow-Up</span>
              </div>

              <div className="p-4 rounded-xl bg-surface-200/40 dark:bg-surface-950/50 border border-border/40 text-xs font-mono leading-relaxed space-y-2 text-foreground">
                <p>Hi David,</p>
                <p>Great speaking today alongside your logistics engineering team. As discussed, here is a concise recap of our alignment:</p>
                <p className="text-muted-foreground pl-2 border-l-2 border-rose-500">
                  1. <strong>Migration Assurance:</strong> Attached is our zero-downtime SAP migration protocol explaining how dual-write replication guarantees no disrupted manifests during cutover.<br />
                  2. <strong>Security &amp; SOC 2:</strong> Our complete Type II audit package and penetration test summary are accessible via your dedicated data room link below.<br />
                  3. <strong>Target Pilot Date:</strong> We have penciled in next Tuesday, Nov 12th for the sandbox credential exchange.
                </p>
                <p>Looking forward to partnering with Vanguard,</p>
                <p className="text-rose-400">Prince Singh Rana &middot; Principal Solutions Architect</p>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-mono text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Approve &amp; Send via Gmail
                </button>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 5: Win/Loss Analytics */}
        {activeScreen === 'pipe-analytics' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Competitive Win/Loss Reason Analysis</h4>
                <p className="text-xs text-muted-foreground font-mono">Aggregated insights across 84 closed deals in the last 2 quarters</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                Win Rate vs Legacy Incumbents: 68%
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-2">
                <span className="text-muted-foreground uppercase text-[10px]">Primary Win Factor (54%)</span>
                <strong className="text-foreground text-sm block font-sans">API Modernity &amp; DX</strong>
                <p className="text-muted-foreground text-[11px]">Buyers cited rapid custom integration capabilities as decisive differentiator.</p>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-2">
                <span className="text-muted-foreground uppercase text-[10px]">Primary Loss Factor (28%)</span>
                <strong className="text-foreground text-sm block font-sans">Incumbent Bundle Pricing</strong>
                <p className="text-muted-foreground text-[11px]">Legacy vendors discounting enterprise suite packages by 40%+.</p>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-2">
                <span className="text-muted-foreground uppercase text-[10px]">Displacement Champion</span>
                <strong className="text-foreground text-sm block font-sans">Salesforce CRM Displacements</strong>
                <p className="text-emerald-400 text-[11px]">14 enterprise accounts replaced clunky legacy CRM workflows in Q3.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
