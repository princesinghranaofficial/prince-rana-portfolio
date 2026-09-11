'use client';

import * as React from 'react';
import { 
  GraduationCap, 
  Code2, 
  Terminal, 
  Play, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  BookOpen, 
  ChevronRight, 
  Cpu, 
  HelpCircle,
  Lightbulb
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const screens = [
  { id: 'mentor-tree', title: '01. Skill Mastery Graph', type: 'Curriculum DAG' },
  { id: 'mentor-lab', title: '02. In-Browser Code Lab', type: 'Interactive Sandbox' },
  { id: 'mentor-assistant', title: '03. Socratic AI Tutor', type: 'Pedagogical Assistant' },
  { id: 'mentor-review', title: '04. AST Code Analyzer', type: 'Complexity & Linter' },
  { id: 'mentor-progress', title: '05. Mastery Telemetry', type: 'Cohort Analytics' },
];

export function MentorAIShowcase() {
  const [activeScreen, setActiveScreen] = React.useState<string>('mentor-lab');
  const [testPassed, setTestPassed] = React.useState<boolean>(false);
  const [runningCode, setRunningCode] = React.useState<boolean>(false);

  const handleScreenChange = (screenId: string) => {
    setActiveScreen(screenId);
    trackEvent('lab_screen_engaged', { slug: 'mentor-ai', screenId });
  };

  const handleRunTests = () => {
    setRunningCode(true);
    setTimeout(() => {
      setRunningCode(false);
      setTestPassed(true);
    }, 600);
  };

  return (
    <div className="rounded-3xl border border-yellow-500/30 bg-surface-100/90 dark:bg-surface-900/90 shadow-2xl overflow-hidden backdrop-blur-md">
      {/* Product Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 py-4 border-b border-border/60 bg-surface-200/50 dark:bg-surface-950/50 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-bold">
            <GraduationCap className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-foreground">Mentor AI Engineering Academy</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                Interactive Showcase
              </span>
            </div>
            <span className="text-xs text-muted-foreground font-mono">Socratic Engineering Education &amp; In-Browser Labs</span>
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
                  ? 'bg-yellow-600 text-white font-bold shadow-xs'
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
        {/* SCREEN 1: Skill Mastery Graph */}
        {activeScreen === 'mentor-tree' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Distributed Systems Architecture Mastery Tree</h4>
                <p className="text-xs text-muted-foreground font-mono">Prerequisite graph guiding senior engineers through production-grade protocols</p>
              </div>
              <span className="text-xs font-mono text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 px-3 py-1 rounded-xl">
                Track Progress: 82% Mastered
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-surface-200/40 dark:bg-surface-800/30 border border-border/60 space-y-2">
                <span className="text-xs font-mono text-emerald-400 font-bold block">1. Consensus Protocols (Completed)</span>
                <p className="text-xs text-muted-foreground">Raft leader election, log replication &amp; Paxos split-brain invariants.</p>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 mt-2">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 8 Labs Verified
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-surface-200/40 dark:bg-surface-800/30 border border-yellow-500/40 space-y-2">
                <span className="text-xs font-mono text-yellow-400 font-bold block">2. Vector Search &amp; HNSW (Active)</span>
                <p className="text-xs text-muted-foreground">Navigable Small World graphs, quantization &amp; sub-millisecond nearest neighbors.</p>
                <span className="text-[10px] font-mono text-yellow-400 flex items-center gap-1 mt-2">
                  <Sparkles className="w-3.5 h-3.5" /> In Progress (Lab 3 of 4)
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-surface-200/40 dark:bg-surface-800/30 border border-border/60 space-y-2 opacity-60">
                <span className="text-xs font-mono text-muted-foreground font-bold block">3. Distributed Transaction Engines</span>
                <p className="text-xs text-muted-foreground">Two-Phase Commit (2PC), Google Spanner TrueTime &amp; Snapshot Isolation.</p>
                <span className="text-[10px] font-mono text-muted-foreground block mt-2">Prerequisite: Lab 2 Completion</span>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 2: In-Browser Code Lab */}
        {activeScreen === 'mentor-lab' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Lab #24: Implementing Raft Heartbeat &amp; Lease Election</h4>
                <p className="text-xs text-muted-foreground font-mono">TypeScript / WebAssembly Runtime &middot; Strict Test Harness</p>
              </div>
              <button
                type="button"
                onClick={handleRunTests}
                disabled={runningCode}
                className="px-4 py-1.5 rounded-xl bg-yellow-600 hover:bg-yellow-500 text-white font-mono text-xs font-semibold flex items-center gap-2 transition-all shadow-xs"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                {runningCode ? 'Executing Test Suite...' : 'Run Test Suite'}
              </button>
            </div>

            {/* Monaco-Style Code Block */}
            <div className="p-4 rounded-2xl bg-surface-950 font-mono text-xs border border-yellow-500/30 space-y-3">
              <div className="flex justify-between items-center text-muted-foreground border-b border-border/40 pb-2">
                <span>raft_node.ts &middot; Node.js v20 Sandbox</span>
                <span className="text-yellow-400 text-[11px]">LeaderElectionState: Candidate</span>
              </div>

              <pre className="text-zinc-300 leading-relaxed overflow-x-auto text-[11px]">
{`export class RaftNode {
  private currentTerm: number = 0;
  private role: 'FOLLOWER' | 'CANDIDATE' | 'LEADER' = 'FOLLOWER';
  private votesReceived: Set<string> = new Set();

  public handleHeartbeatTimeout(): void {
    this.role = 'CANDIDATE';
    this.currentTerm += 1;
    this.votesReceived.clear();
    this.votesReceived.add(this.nodeId); // Vote for self

    // Dispatch RequestVote RPC to all peer nodes in cluster
    this.broadcastRequestVoteRPC({
      term: this.currentTerm,
      candidateId: this.nodeId,
      lastLogIndex: this.log.length,
    });
  }
}`}
              </pre>

              {/* Test Output Panel */}
              <div className="pt-2 border-t border-border/40">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-muted-foreground uppercase">Harness Output:</span>
                  <span className={testPassed ? 'text-emerald-400 font-bold' : 'text-zinc-400'}>
                    {testPassed ? '2 / 2 Tests Passed' : 'Tests Pending Execution'}
                  </span>
                </div>

                {testPassed && (
                  <div className="mt-2 p-2.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] space-y-1">
                    <div>&#10003; test_election_timeout_increments_term: PASSED (14ms)</div>
                    <div>&#10003; test_majority_quorum_establishes_leader: PASSED (22ms)</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 3: Socratic AI Tutor */}
        {activeScreen === 'mentor-assistant' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Socratic Pedagogical Dialogue Engine</h4>
                <p className="text-xs text-muted-foreground font-mono">Guiding learners to conceptual breakthroughs without spoiling solutions</p>
              </div>
              <span className="text-xs font-mono text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 px-3 py-1 rounded-xl">
                Socratic Policy: Active Guidance
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-4">
              <div className="p-3 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 border border-border/40">
                <span className="text-[10px] font-mono text-yellow-400 font-bold uppercase block mb-1">LEARNER QUESTION:</span>
                <p className="text-xs text-foreground">&quot;Why can&apos;t a candidate immediately assume leadership if it receives a vote from just 2 nodes out of 5?&quot;</p>
              </div>

              <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 space-y-2 text-xs">
                <span className="font-mono text-yellow-400 font-bold flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5" />
                  MENTOR SOCRATIC HINT:
                </span>
                <p className="text-foreground leading-relaxed">
                  Consider what could happen in a network partition. If 2 nodes vote for Candidate A in Partition 1, what prevents another candidate from receiving 2 votes in Partition 2 at the exact same term?
                </p>
                <p className="text-muted-foreground font-mono text-[11px] pt-1">
                  &#8594; Key Concept to Reflect On: What is the mathematical definition of a strict majority (Quorum = N/2 + 1)?
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 4: AST Code Analyzer */}
        {activeScreen === 'mentor-review' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Automated Abstract Syntax Tree (AST) Inspection</h4>
                <p className="text-xs text-muted-foreground font-mono">Evaluating computational complexity, memory allocation &amp; code cleanliness</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                Code Grade: A (Production Quality)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-2">
                <span className="text-muted-foreground uppercase text-[10px]">Time Complexity</span>
                <strong className="text-emerald-400 text-sm block">O(log N) Search</strong>
                <p className="text-muted-foreground text-[11px]">Binary tree traversal adheres to optimal asymptotic bounds.</p>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-2">
                <span className="text-muted-foreground uppercase text-[10px]">Cyclomatic Complexity</span>
                <strong className="text-foreground text-sm block">Rating: 4 (Low Risk)</strong>
                <p className="text-muted-foreground text-[11px]">Control flow branches are clean and easily testable.</p>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-2">
                <span className="text-muted-foreground uppercase text-[10px]">Zero-Copy Memory</span>
                <strong className="text-emerald-400 text-sm block">ArrayBuffer Sliced</strong>
                <p className="text-muted-foreground text-[11px]">Zero garbage collection pauses incurred in packet parsing.</p>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 5: Mastery Telemetry */}
        {activeScreen === 'mentor-progress' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Cohort Engineering Retention &amp; Velocity</h4>
                <p className="text-xs text-muted-foreground font-mono">Telemetry across 340 enterprise engineering learners</p>
              </div>
              <span className="text-xs font-mono text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 px-3 py-1 rounded-xl">
                Completion Rate: 91.4%
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Average Lab Duration</span>
                <div className="text-2xl font-bold font-mono text-foreground">38 mins</div>
                <span className="text-[11px] text-muted-foreground font-mono">Target: 45m</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Hint Utilization</span>
                <div className="text-2xl font-bold font-mono text-foreground">1.4 hints/lab</div>
                <span className="text-[11px] text-emerald-400 font-mono">High self-sufficiency</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Concept Retention (30d)</span>
                <div className="text-2xl font-bold font-mono text-foreground">89.2%</div>
                <span className="text-[11px] text-yellow-400 font-mono">Spaced repetition</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">PR Quality Boost</span>
                <div className="text-2xl font-bold font-mono text-foreground">+34%</div>
                <span className="text-[11px] text-emerald-400 font-mono">Fewer production bugs</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
