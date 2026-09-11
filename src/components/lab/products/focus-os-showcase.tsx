'use client';

import * as React from 'react';
import { 
  Clock, 
  CheckSquare, 
  Calendar, 
  BatteryCharging, 
  BarChart, 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  Flame
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const screens = [
  { id: 'focus-planner', title: '01. Daily Time Architecture', type: 'Time Blocking' },
  { id: 'focus-session', title: '02. Zen Deep Work Session', type: 'Focus Timer' },
  { id: 'focus-tasks', title: '03. Eisenhower Matrix', type: 'Priority Sorting' },
  { id: 'focus-energy', title: '04. Circadian Energy Curve', type: 'Cognitive Rhythm' },
  { id: 'focus-retro', title: '05. Weekly Execution Retro', type: 'Deep Work Hours' },
];

export function FocusOSShowcase() {
  const [activeScreen, setActiveScreen] = React.useState<string>('focus-planner');
  const [timerSeconds, setTimerSeconds] = React.useState<number>(1500); // 25 mins
  const [timerRunning, setTimerRunning] = React.useState<boolean>(false);

  React.useEffect(() => {
    let interval: any = null;
    if (timerRunning && timerSeconds > 0) {
      interval = setInterval(() => setTimerSeconds((prev) => prev - 1), 1000);
    } else if (timerSeconds === 0) {
      setTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timerSeconds]);

  const handleScreenChange = (screenId: string) => {
    setActiveScreen(screenId);
    trackEvent('lab_screen_engaged', { slug: 'focus-os', screenId });
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="rounded-3xl border border-zinc-500/30 bg-surface-100/90 dark:bg-surface-900/90 shadow-2xl overflow-hidden backdrop-blur-md">
      {/* Product Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 py-4 border-b border-border/60 bg-surface-200/50 dark:bg-surface-950/50 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-zinc-500/20 text-zinc-300 flex items-center justify-center font-bold">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-foreground">Focus OS Founder Workspace</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-500/10 text-zinc-400 border border-zinc-500/20">
                Interactive Showcase
              </span>
            </div>
            <span className="text-xs text-muted-foreground font-mono">Cognitive Energy Architecture &amp; Deep Work</span>
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
                  ? 'bg-zinc-700 text-white font-bold shadow-xs'
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
        {/* SCREEN 1: Daily Time Architecture */}
        {activeScreen === 'focus-planner' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Daily Time Architecture &middot; Wednesday</h4>
                <p className="text-xs text-muted-foreground font-mono">5.5 Hours Deep Work Scheduled &middot; Zero Context Switching Protocol</p>
              </div>
              <span className="text-xs font-mono text-zinc-400 bg-zinc-500/10 border border-zinc-500/20 px-3 py-1 rounded-xl">
                Distraction Shield: ACTIVE
              </span>
            </div>

            {/* Time Blocks */}
            <div className="space-y-3">
              {[
                { time: '08:00 - 10:30 AM', title: 'Deep Work Block I: Distributed Ledger Core Implementation', category: 'High Cognitive Load', tag: 'Architecture', completed: true },
                { time: '10:30 - 11:00 AM', title: 'Physical Reset: 30-min outdoor walk &amp; hydration', category: 'Recovery', tag: 'Health', completed: true },
                { time: '11:00 - 01:00 PM', title: 'Deep Work Block II: SOC 2 Infrastructure Policy Authoring', category: 'High Cognitive Load', tag: 'Security', completed: false, current: true },
                { time: '01:00 - 02:00 PM', title: 'Asynchronous Comms Batch: Slack, PR reviews &amp; Email', category: 'Low Cognitive Load', tag: 'Comms', completed: false },
                { time: '02:00 - 03:00 PM', title: 'Executive Sync: Technical Product Demo with Lead Partner', category: 'External Sync', tag: 'Meeting', completed: false },
              ].map((blk, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-2xl border transition-all flex flex-col md:flex-row md:items-center justify-between gap-3 ${
                    blk.current
                      ? 'bg-zinc-800/40 border-zinc-400/50 shadow-md'
                      : 'bg-background/80 border-border/60'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="font-mono text-xs font-bold text-zinc-400 w-32">
                      {blk.time}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <strong className="text-sm text-foreground">{blk.title}</strong>
                        {blk.current && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-500/20 text-zinc-300 border border-zinc-500/30 animate-pulse">
                            Current Block
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground font-mono">{blk.category}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-surface-200 dark:bg-surface-800 text-muted-foreground border border-border/50">
                      {blk.tag}
                    </span>
                    {blk.completed ? (
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Done
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleScreenChange('focus-session')}
                        className="px-3 py-1 rounded-xl bg-zinc-700 hover:bg-zinc-600 text-white font-mono text-xs transition-colors"
                      >
                        Enter Focus
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SCREEN 2: Zen Deep Work Session */}
        {activeScreen === 'focus-session' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Deep Work Zen Session &middot; Sprint Mode</h4>
                <p className="text-xs text-muted-foreground font-mono">Task: SOC 2 Infrastructure Policy Authoring &middot; Strict Distraction Shield</p>
              </div>
              <span className="text-xs font-mono text-zinc-400 bg-zinc-500/10 border border-zinc-500/20 px-3 py-1 rounded-xl">
                Soundscape: Brown Noise (432Hz)
              </span>
            </div>

            {/* Big Zen Timer */}
            <div className="p-10 rounded-3xl bg-surface-950 border border-zinc-700/50 flex flex-col items-center justify-center text-center space-y-6">
              <div className="text-6xl sm:text-8xl font-mono font-bold tracking-tighter text-zinc-100">
                {formatTimer(timerSeconds)}
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setTimerRunning(!timerRunning)}
                  className="px-6 py-2.5 rounded-2xl bg-zinc-100 hover:bg-white text-zinc-900 font-mono text-sm font-bold flex items-center gap-2 transition-all shadow-lg"
                >
                  {timerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  {timerRunning ? 'Pause Session' : 'Start Focus Sprint'}
                </button>
                <button
                  type="button"
                  onClick={() => { setTimerRunning(false); setTimerSeconds(1500); }}
                  className="p-2.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-zinc-400 font-mono max-w-sm">
                Notifications muted. Slack status set to &quot;Deep Focus until 01:00 PM&quot;. 0 distractions permitted.
              </p>
            </div>
          </div>
        )}

        {/* SCREEN 3: Eisenhower Matrix */}
        {activeScreen === 'focus-tasks' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Eisenhower Strategic Priority Quadrants</h4>
                <p className="text-xs text-muted-foreground font-mono">Categorized by systemic leverage and urgent deadlines</p>
              </div>
              <span className="text-xs font-mono text-zinc-400 bg-zinc-500/10 border border-zinc-500/20 px-3 py-1 rounded-xl">
                Quadrant 2 (Long-term Leverage): 60% Focus
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-surface-200/40 dark:bg-surface-800/30 border border-border/60 space-y-2">
                <span className="text-xs font-mono font-bold text-rose-400 block uppercase">Q1: Urgent &amp; Important (Do Now)</span>
                <div className="space-y-1.5 text-xs">
                  <div className="p-2 rounded bg-background/80 border border-border/40 text-foreground">Fix AWS VPC security group egress leak</div>
                  <div className="p-2 rounded bg-background/80 border border-border/40 text-foreground">Sign enterprise vendor MSA for Q4 renewal</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface-200/40 dark:bg-surface-800/30 border border-border/60 space-y-2">
                <span className="text-xs font-mono font-bold text-emerald-400 block uppercase">Q2: Not Urgent, Highly Important (Strategic)</span>
                <div className="space-y-1.5 text-xs">
                  <div className="p-2 rounded bg-background/80 border border-border/40 text-foreground">Author distributed transaction state machine spec</div>
                  <div className="p-2 rounded bg-background/80 border border-border/40 text-foreground">Interview senior distributed systems engineer candidates</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface-200/40 dark:bg-surface-800/30 border border-border/60 space-y-2">
                <span className="text-xs font-mono font-bold text-amber-400 block uppercase">Q3: Urgent, Not Important (Delegate)</span>
                <div className="space-y-1.5 text-xs">
                  <div className="p-2 rounded bg-background/80 border border-border/40 text-muted-foreground">Logistics receipt filing (Handed off to EA)</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface-200/40 dark:bg-surface-800/30 border border-border/60 space-y-2">
                <span className="text-xs font-mono font-bold text-zinc-400 block uppercase">Q4: Not Urgent, Not Important (Eliminate)</span>
                <div className="space-y-1.5 text-xs">
                  <div className="p-2 rounded bg-background/80 border border-border/40 text-muted-foreground line-through">Attending recurring weekly status calls without agenda</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 4: Circadian Energy Curve */}
        {activeScreen === 'focus-energy' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Founder Circadian Rhythm &amp; Cognitive Energy Model</h4>
                <p className="text-xs text-muted-foreground font-mono">Aligning hardest architectural tasks with biological peak alertness</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                Peak Window: 08:30 - 11:45 AM
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-4">
              <span className="text-xs font-mono text-muted-foreground uppercase">24-Hour Cognitive Alertness Curve</span>

              <div className="h-28 flex items-end justify-between gap-2 px-2 pt-4 border-b border-border/40">
                {[
                  { hour: '06 AM', val: 50, peak: false },
                  { hour: '08 AM', val: 90, peak: true },
                  { hour: '10 AM', val: 98, peak: true },
                  { hour: '12 PM', val: 70, peak: false },
                  { hour: '02 PM', val: 45, peak: false }, // Post-lunch trough
                  { hour: '04 PM', val: 82, peak: true },  // Second wind
                  { hour: '06 PM', val: 65, peak: false },
                  { hour: '08 PM', val: 40, peak: false },
                ].map((pt, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className={`w-full rounded-t ${pt.peak ? 'bg-zinc-200 dark:bg-zinc-300' : 'bg-zinc-500/40'}`}
                      style={{ height: `${pt.val}%` }}
                    />
                    <span className="text-[10px] font-mono text-muted-foreground">{pt.hour}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono pt-2">
                <div className="p-3 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 space-y-1">
                  <strong className="text-foreground">Morning Prime (08:30 - 11:30 AM):</strong>
                  <p className="text-muted-foreground text-[11px]">System architecture, complex code reviews, core algorithm design.</p>
                </div>
                <div className="p-3 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 space-y-1">
                  <strong className="text-foreground">Afternoon Trough (01:30 - 03:00 PM):</strong>
                  <p className="text-muted-foreground text-[11px]">Administrative emails, team catch-ups, low-cognitive task execution.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 5: Weekly Execution Retro */}
        {activeScreen === 'focus-retro' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Weekly Deep Work Execution Telemetry</h4>
                <p className="text-xs text-muted-foreground font-mono">Week 44 Summary &middot; 28.5 Hours of High-Leverage Deep Work Logged</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                Execution Score: 92% (Top Decile)
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Total Deep Work</span>
                <div className="text-2xl font-bold font-mono text-foreground">28.5 hrs</div>
                <span className="text-[11px] text-emerald-400 font-mono">Target: 25 hrs exceeded</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Context Switching Tax</span>
                <div className="text-2xl font-bold font-mono text-foreground">1.8 hrs</div>
                <span className="text-[11px] text-emerald-400 font-mono">-42% vs previous week</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Meetings Eliminated</span>
                <div className="text-2xl font-bold font-mono text-foreground">6 Calls</div>
                <span className="text-[11px] text-zinc-300 font-mono">Converted to async Loom/PRs</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Strategic Goals Met</span>
                <div className="text-2xl font-bold font-mono text-foreground">4 / 4</div>
                <span className="text-[11px] text-emerald-400 font-mono">100% Velocity</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
