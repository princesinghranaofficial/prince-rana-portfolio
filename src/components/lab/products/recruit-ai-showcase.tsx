'use client';

import * as React from 'react';
import { 
  UserCheck, 
  Users, 
  FileText, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  EyeOff, 
  Award, 
  ChevronRight, 
  Sliders,
  ShieldCheck
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const screens = [
  { id: 'recruit-pipeline', title: '01. Hiring Pipeline', type: 'Candidate Funnel' },
  { id: 'recruit-scorecard', title: '02. Structured Scorecards', type: 'Calibrated Rubrics' },
  { id: 'recruit-blind', title: '03. Blind Screening', type: 'Bias Elimination' },
  { id: 'recruit-velocity', title: '04. Hiring Velocity', type: 'Talent Telemetry' },
  { id: 'recruit-interviews', title: '05. Question Bank', type: 'Calibrated Prompts' },
];

export function RecruitAIShowcase() {
  const [activeScreen, setActiveScreen] = React.useState<string>('recruit-pipeline');

  const handleScreenChange = (screenId: string) => {
    setActiveScreen(screenId);
    trackEvent('lab_screen_engaged', { slug: 'recruit-ai', screenId });
  };

  return (
    <div className="rounded-3xl border border-purple-500/30 bg-surface-100/90 dark:bg-surface-900/90 shadow-2xl overflow-hidden backdrop-blur-md">
      {/* Product Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 py-4 border-b border-border/60 bg-surface-200/50 dark:bg-surface-950/50 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
            <UserCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-foreground">Recruit AI Talent Suite</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20">
                Interactive Showcase
              </span>
            </div>
            <span className="text-xs text-muted-foreground font-mono">Structured Technical Hiring &amp; Bias Elimination</span>
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
                  ? 'bg-purple-600 text-white font-bold shadow-xs'
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
        {/* SCREEN 1: Hiring Pipeline */}
        {activeScreen === 'recruit-pipeline' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Engineering Hiring Pipeline &middot; Staff Distributed Systems</h4>
                <p className="text-xs text-muted-foreground font-mono">42 Applicants &middot; 8 Screened &middot; 3 Onsite &middot; 1 Offer Extended</p>
              </div>
              <span className="text-xs font-mono text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-xl">
                Offer Acceptance Rate: 88%
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-surface-200/40 dark:bg-surface-800/30 border border-border/50 space-y-3">
                <div className="flex justify-between items-center text-xs font-mono font-bold text-foreground">
                  <span>TECHNICAL SCREEN (4)</span>
                  <span className="text-purple-400">Coding Lab</span>
                </div>
                <div className="p-3 rounded-xl bg-background/90 border border-border/50 space-y-1 shadow-xs">
                  <div className="flex justify-between items-center">
                    <strong className="text-xs text-foreground">Candidate #C-840</strong>
                    <span className="text-[10px] font-mono font-bold text-emerald-400">Score: 94%</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono block">Raft Consensus Lab &middot; 42m</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono">Recommended for Onsite</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface-200/40 dark:bg-surface-800/30 border border-border/50 space-y-3">
                <div className="flex justify-between items-center text-xs font-mono font-bold text-foreground">
                  <span>ONSITE PANELS (3)</span>
                  <span className="text-purple-400">System Design</span>
                </div>
                <div className="p-3 rounded-xl bg-background/90 border border-border/50 space-y-1 shadow-xs">
                  <div className="flex justify-between items-center">
                    <strong className="text-xs text-foreground">Candidate #C-832</strong>
                    <span className="text-[10px] font-mono font-bold text-emerald-400">Score: 96%</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono block">High-Throughput Ingestion Design</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 font-mono">3/3 Strong Hires</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface-200/40 dark:bg-surface-800/30 border border-border/50 space-y-3">
                <div className="flex justify-between items-center text-xs font-mono font-bold text-foreground">
                  <span>OFFER STAGE (1)</span>
                  <span className="text-emerald-400">Closing</span>
                </div>
                <div className="p-3 rounded-xl bg-background/90 border border-border/50 space-y-1 shadow-xs">
                  <div className="flex justify-between items-center">
                    <strong className="text-xs text-foreground">Candidate #C-819</strong>
                    <span className="text-[10px] font-mono font-bold text-emerald-400">Signed</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono block">Staff Architect &middot; Starts Dec 1</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono">Offer Accepted</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 2: Structured Scorecards */}
        {activeScreen === 'recruit-scorecard' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Objective Competency Scorecard: System Architecture Panel</h4>
                <p className="text-xs text-muted-foreground font-mono">Anchored behavioral rubrics preventing interviewer halo effects</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                Interviewer Consensus: Strong Hire (4.8 / 5.0)
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-background/80 border border-border/60 space-y-3">
              <div className="space-y-2 text-xs font-mono">
                {[
                  { dim: 'Scalability & Sharding', score: '5 / 5', notes: 'Identified consistent hashing with virtual nodes without prompt.' },
                  { dim: 'Failure Modes & Recovery', score: '5 / 5', notes: 'Articulated split-brain network partition handling cleanly.' },
                  { dim: 'API Contract Design', score: '4 / 5', notes: 'Clear idempotency keys and error semantics specified.' },
                  { dim: 'Collaborative Communication', score: '5 / 5', notes: 'Clarified requirements systematically, receptive to feedback.' },
                ].map((row, i) => (
                  <div key={i} className="p-3 rounded-xl bg-surface-200/40 dark:bg-surface-800/30 border border-border/40 flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <strong className="text-foreground text-sm font-sans">{row.dim}</strong>
                      <span className="text-muted-foreground text-[11px] block mt-0.5">Evidence: {row.notes}</span>
                    </div>
                    <span className="text-purple-400 font-bold self-start md:self-auto">{row.score}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 3: Blind Screening */}
        {activeScreen === 'recruit-blind' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Blind Candidate Resume Redaction Engine</h4>
                <p className="text-xs text-muted-foreground font-mono">Stripping names, schools, gender pronouns, and photos to ensure merit-only review</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                Equal Opportunity Bias Shield: 100% Active
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 font-bold">
                <EyeOff className="w-4 h-4" />
                <span>Sanitized Technical Profile &middot; Candidate ID #C-840</span>
              </div>

              <div className="p-4 rounded-xl bg-surface-200/40 dark:bg-surface-950/50 border border-border/40 text-xs font-mono space-y-2 text-foreground">
                <p><span className="text-muted-foreground">[NAME REDACTED]</span> &middot; Senior Infrastructure Engineer (7 Years Experience)</p>
                <p className="text-muted-foreground">[EDUCATION REDACTED: Accredited CS Degree]</p>
                <div className="pt-2 border-t border-border/40 space-y-1 text-[11px]">
                  <div>&#10003; Architected event-streaming pipeline handling 1.2B events/day using Go and Apache Kafka.</div>
                  <div>&#10003; Reduced cloud infrastructure compute cost by 38% via Kubernetes spot instance autoscaling.</div>
                  <div>&#10003; Authored internal distributed locking library using Redis Redlock consensus.</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 4: Hiring Velocity */}
        {activeScreen === 'recruit-velocity' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Talent Acquisition Velocity &amp; Quality Metrics</h4>
                <p className="text-xs text-muted-foreground font-mono">Benchmarked against high-growth international tech startups</p>
              </div>
              <span className="text-xs font-mono text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-xl">
                Time-to-Hire: 21 Days
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Median Time to Hire</span>
                <div className="text-2xl font-bold font-mono text-foreground">21.4 days</div>
                <span className="text-[11px] text-emerald-400 font-mono">-14 days vs benchmark</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Candidate NPS</span>
                <div className="text-2xl font-bold font-mono text-foreground">+78</div>
                <span className="text-[11px] text-purple-400 font-mono">Praise for fast feedback</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Offer Accept Rate</span>
                <div className="text-2xl font-bold font-mono text-foreground">88.2%</div>
                <span className="text-[11px] text-emerald-400 font-mono">15 of 17 accepted</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">90-Day Retention</span>
                <div className="text-2xl font-bold font-mono text-foreground">100%</div>
                <span className="text-[11px] text-emerald-400 font-mono">Zero early regreful churn</span>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 5: Question Bank */}
        {activeScreen === 'recruit-interviews' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Calibrated Technical Interview Question Bank</h4>
                <p className="text-xs text-muted-foreground font-mono">Tested prompts with exact evaluation rubrics for interviewers</p>
              </div>
              <span className="text-xs font-mono text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-xl">
                24 Calibrated Prompts
              </span>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div className="p-3.5 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 border border-border/40 space-y-1">
                <div className="flex justify-between items-center">
                  <strong className="text-foreground text-sm font-sans">Distributed Rate Limiter Design</strong>
                  <span className="text-purple-400 font-bold">System Design &middot; 45m</span>
                </div>
                <p className="text-muted-foreground">Prompt: Design an edge-rate limiter handling 500k RPS with sliding window counter.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 border border-border/40 space-y-1">
                <div className="flex justify-between items-center">
                  <strong className="text-foreground text-sm font-sans">Conflict-Free Replicated Data Types (CRDT)</strong>
                  <span className="text-purple-400 font-bold">Algorithms &middot; 30m</span>
                </div>
                <p className="text-muted-foreground">Prompt: Implement a state-based PN-Counter with eventual convergence proofs.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Ethical AI & Fairness Notice */}
      <div className="px-6 py-3 border-t border-border/60 bg-surface-200/40 dark:bg-surface-950/40 text-[11px] font-mono text-muted-foreground flex items-center gap-2">
        <ShieldCheck className="w-3.5 h-3.5 text-purple-400 shrink-0" aria-hidden="true" />
        <span>
          <strong>Ethical AI &amp; Fair Hiring Notice:</strong> Recruit AI assists interview consistency and rubric calibration. It does not perform autonomous candidate rejection, protected-class inference, or video emotion scoring. All employment evaluations require human decision-making by hiring teams.
        </span>
      </div>
    </div>
  );
}
