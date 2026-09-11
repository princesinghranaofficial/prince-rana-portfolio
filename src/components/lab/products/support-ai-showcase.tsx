'use client';

import * as React from 'react';
import { 
  Headphones, 
  MessageSquare, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Users, 
  Clock, 
  Sparkles, 
  Sliders, 
  ChevronRight, 
  Search,
  Bot
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const screens = [
  { id: 'support-inbox', title: '01. Autonomous Inbox', type: 'Live Ticket Queue' },
  { id: 'support-rag', title: '02. Guardrailed RAG & Citations', type: 'Knowledge Retrieval' },
  { id: 'support-handoff', title: '03. Human Escalation Handoff', type: 'Human-in-the-Loop' },
  { id: 'support-macros', title: '04. Policy & Refund Studio', type: 'Rules Engine' },
  { id: 'support-telemetry', title: '05. SLA & Deflection Telemetry', type: 'Quality Metrics' },
];

export function SupportAIShowcase() {
  const [activeScreen, setActiveScreen] = React.useState<string>('support-inbox');

  const handleScreenChange = (screenId: string) => {
    setActiveScreen(screenId);
    trackEvent('lab_screen_engaged', { slug: 'support-ai', screenId });
  };

  return (
    <div className="rounded-3xl border border-sky-500/30 bg-surface-100/90 dark:bg-surface-900/90 shadow-2xl overflow-hidden backdrop-blur-md">
      {/* Product Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 py-4 border-b border-border/60 bg-surface-200/50 dark:bg-surface-950/50 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
            <Headphones className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-foreground">Support AI Autonomous Ops</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">
                Interactive Showcase
              </span>
            </div>
            <span className="text-xs text-muted-foreground font-mono">Guardrailed Support Automation &amp; Human Handoff</span>
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
                  ? 'bg-sky-600 text-white font-bold shadow-xs'
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
        {/* SCREEN 1: Autonomous Inbox */}
        {activeScreen === 'support-inbox' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Tier-1 Autonomous Ticket Resolution Queue</h4>
                <p className="text-xs text-muted-foreground font-mono">Real-time resolution via verified RAG knowledge base &middot; 72% autonomous deflection</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Response Latency: 12 seconds
              </span>
            </div>

            <div className="space-y-3">
              {[
                { id: '#TICK-902', user: 'Rachel Green', subject: 'How do I rotate our team API keys without downtime?', status: 'AUTO_RESOLVED', conf: '98.4%', action: 'Documentation link + curl snippet sent' },
                { id: '#TICK-901', user: 'Liam Gallagher', subject: 'Refund request for unused enterprise seat ($180)', status: 'POLICY_APPROVED', conf: '96.2%', action: 'Stripe refund initiated via Policy #4' },
                { id: '#TICK-900', user: 'Sofia Martinez', subject: 'Custom SSO SAML Okta integration returning 403', status: 'ESCALATED_HUMAN', conf: '64.0%', action: 'Handed off to Staff Eng Pod' },
              ].map((tick, i) => (
                <div key={i} className="p-4 rounded-xl bg-background/80 border border-border/60 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-sky-400">{tick.id}</span>
                      <strong className="text-sm font-semibold text-foreground font-sans">{tick.subject}</strong>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono mt-0.5 block">Customer: {tick.user} &middot; Action: {tick.action}</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono">
                    <span className="text-muted-foreground">Confidence: {tick.conf}</span>
                    <span className={`px-2.5 py-1 rounded-xl font-bold ${
                      tick.status === 'AUTO_RESOLVED' || tick.status === 'POLICY_APPROVED'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}>
                      {tick.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SCREEN 2: Guardrailed RAG & Citations */}
        {activeScreen === 'support-rag' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Anti-Hallucination Retrieval Augmented Generation (RAG)</h4>
                <p className="text-xs text-muted-foreground font-mono">Verifying factual grounding against authoritative internal documentation before sending</p>
              </div>
              <span className="text-xs font-mono text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-xl">
                Grounding Score: 99.1%
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-4">
              <div className="p-3.5 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 border border-border/40 text-xs font-mono">
                <span className="text-muted-foreground block text-[10px] uppercase mb-1">Incoming Query:</span>
                <p className="text-foreground">&quot;Can I invite external contractors with read-only access to our analytics dashboard?&quot;</p>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <span className="text-sky-400 font-bold block">{'// EXTRACTED VERIFIED KNOWLEDGE CHUNKS:'}</span>
                <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 space-y-1">
                  <span className="text-foreground font-semibold">Doc: docs.vance.io/permissions/guest-roles.md (Cosine: 0.94)</span>
                  <p className="text-muted-foreground text-[11px]">
                    &quot;Guest and contractor accounts can be granted scoped read-only access without consuming a paid creator seat.&quot;
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono space-y-1">
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Hallucination Guardrail Check: PASSED
                </span>
                <p className="text-foreground">
                  Drafted response contains 0 ungrounded claims. Authorized for autonomous dispatch.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 3: Human Escalation Handoff */}
        {activeScreen === 'support-handoff' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Graceful Human-in-the-Loop Escalation Handoff</h4>
                <p className="text-xs text-muted-foreground font-mono">Seamless transition with AI context summary when confidence drops below 80%</p>
              </div>
              <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-xl">
                Escalated Ticket #TICK-900
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-3">
                <span className="text-xs font-mono text-muted-foreground uppercase flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5 text-sky-400" />
                  AI Context Brief for Support Engineer
                </span>
                <div className="space-y-2 text-xs font-mono leading-relaxed text-foreground">
                  <p><strong>Customer:</strong> Sofia Martinez (Head of IT, FinCorp Enterprise)</p>
                  <p><strong>Issue:</strong> Okta SAML certificate thumbprint mismatch after Okta certificate rotation.</p>
                  <p><strong>Why Escalated:</strong> Involves custom metadata XML upload requiring admin key override.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-3">
                <span className="text-xs font-mono text-muted-foreground uppercase flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-sky-400" />
                  Suggested Rep Reply (1-Click Insert)
                </span>
                <p className="text-xs font-mono text-muted-foreground leading-relaxed">
                  &quot;Hi Sofia, I see Okta rotated your IdP cert at 04:00 UTC. I have unlocked your SSO admin drawer so you can paste the new X.509 cert fingerprint directly. Let me know if you hit any certificate chain errors.&quot;
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 4: Policy & Refund Studio */}
        {activeScreen === 'support-macros' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Autonomous Policy Engine &amp; Action Guardrails</h4>
                <p className="text-xs text-muted-foreground font-mono">Defining deterministic bounds for autonomous financial and technical actions</p>
              </div>
              <span className="text-xs font-mono text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-xl">
                4 Active Guardrails
              </span>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div className="p-3.5 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 border border-border/40 flex justify-between items-center">
                <div>
                  <strong className="text-foreground text-sm font-sans block">Refund Cap Policy</strong>
                  <span className="text-muted-foreground">Autonomous refund limit without human sign-off</span>
                </div>
                <span className="text-emerald-400 font-bold">$250.00 / account / 90 days</span>
              </div>
              <div className="p-3.5 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 border border-border/40 flex justify-between items-center">
                <div>
                  <strong className="text-foreground text-sm font-sans block">API Rate Limit Reset</strong>
                  <span className="text-muted-foreground">Temporary quota boost for staging environments</span>
                </div>
                <span className="text-emerald-400 font-bold">+50% for 24 hours</span>
              </div>
              <div className="p-3.5 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 border border-border/40 flex justify-between items-center">
                <div>
                  <strong className="text-foreground text-sm font-sans block">PII Redaction Engine</strong>
                  <span className="text-muted-foreground">Scrub credit card numbers and passwords from ticket logs</span>
                </div>
                <span className="text-emerald-400 font-bold">100% Strict Redaction</span>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 5: SLA & Deflection Telemetry */}
        {activeScreen === 'support-telemetry' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Support Operations &amp; CSAT Quality Telemetry</h4>
                <p className="text-xs text-muted-foreground font-mono">Monthly statistics across 4,200 incoming support conversations</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                Customer Satisfaction (CSAT): 4.88 / 5.0
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Autonomous Deflection</span>
                <div className="text-2xl font-bold font-mono text-foreground">72.4%</div>
                <span className="text-[11px] text-emerald-400 font-mono">No human touch needed</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Median Response Time</span>
                <div className="text-2xl font-bold font-mono text-foreground">14 sec</div>
                <span className="text-[11px] text-sky-400 font-mono">-98% vs email queue</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Hallucination Incidents</span>
                <div className="text-2xl font-bold font-mono text-foreground">0</div>
                <span className="text-[11px] text-emerald-400 font-mono">Strict RAG grounding</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Support Cost / Ticket</span>
                <div className="text-2xl font-bold font-mono text-foreground">$1.84</div>
                <span className="text-[11px] text-emerald-400 font-mono">-82% vs industry avg</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
