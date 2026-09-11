'use client';

import * as React from 'react';
import { 
  Bot, 
  Cpu, 
  Workflow, 
  Search, 
  Sliders, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ArrowRight, 
  Play, 
  Pause, 
  Layers, 
  FileText, 
  Sparkles, 
  Terminal,
  Activity
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const screens = [
  { id: 'command-center', title: '01. Operations Command Center', type: 'Operations View' },
  { id: 'agent-directory', title: '02. AI Agent Studio', type: 'Agent Management' },
  { id: 'workflow-canvas', title: '03. Workflow Builder (DAG)', type: 'Visual Canvas' },
  { id: 'knowledge-search', title: '04. Vector Knowledge Search', type: 'Semantic Search' },
  { id: 'agent-detail', title: '05. Agent Inspector & Safety', type: 'Guardrail Config' },
];

export function AuraAIShowcase() {
  const [activeScreen, setActiveScreen] = React.useState<string>('command-center');

  const handleScreenChange = (screenId: string) => {
    setActiveScreen(screenId);
    trackEvent('lab_screen_engaged', { slug: 'aura-ai', screenId });
  };

  return (
    <div className="rounded-3xl border border-indigo-500/30 bg-surface-100/90 dark:bg-surface-900/90 shadow-2xl overflow-hidden backdrop-blur-md">
      {/* Product Top Header & Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 py-4 border-b border-border/60 bg-surface-200/50 dark:bg-surface-950/50 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-foreground">Aura AI Workspace</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                Interactive Showcase
              </span>
            </div>
            <span className="text-xs text-muted-foreground font-mono">Enterprise Agent Orchestration</span>
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
        {/* SCREEN 1: Operations Command Center */}
        {activeScreen === 'command-center' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Agent Operations Command Center</h4>
                <p className="text-xs text-muted-foreground font-mono">Real-time execution telemetry across 6 active agents</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Cluster Healthy &middot; 99.8% Uptime
              </span>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Active Agents</span>
                <div className="text-2xl font-bold font-mono text-foreground">6 Running</div>
                <span className="text-[11px] text-muted-foreground">0 Failing &middot; 2 Idle</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Workflows Executed</span>
                <div className="text-2xl font-bold font-mono text-indigo-400">1,428 / 24h</div>
                <span className="text-[11px] text-muted-foreground">+18% vs yesterday</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Pending Human Review</span>
                <div className="text-2xl font-bold font-mono text-amber-400">3 Approvals</div>
                <span className="text-[11px] text-muted-foreground">Action required</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Median Latency</span>
                <div className="text-2xl font-bold font-mono text-foreground">340ms</div>
                <span className="text-[11px] text-muted-foreground">Sub-500ms SLA met</span>
              </div>
            </div>

            {/* Pending Approvals Table */}
            <div className="p-5 rounded-2xl bg-surface-50 dark:bg-surface-950/60 border border-border/60 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-semibold text-foreground uppercase">Human-in-the-Loop Oversight Queue</span>
                <span className="text-amber-400 font-medium">3 Tasks Awaiting Sign-Off</span>
              </div>

              <div className="space-y-2">
                {[
                  { agent: 'Contracts Reviewer', task: 'Approve MSA liability clause waiver for Enterprise Client', risk: 'HIGH RISK', time: '4m ago' },
                  { agent: 'Customer Escalations', task: 'Authorize $250 promotional credit for delayed shipment', risk: 'MEDIUM', time: '18m ago' },
                  { agent: 'Data Pipeline Sync', task: 'Verify schema migration on Notion Knowledge Collection', risk: 'LOW', time: '32m ago' },
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-background border border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">{item.agent}</span>
                        <span className={`px-1.5 py-0.2 rounded text-[10px] font-mono ${item.risk === 'HIGH RISK' ? 'bg-rose-500/20 text-rose-400' : 'bg-amber-500/20 text-amber-400'}`}>
                          {item.risk}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{item.task}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button type="button" className="px-3 py-1 rounded bg-indigo-600 text-white font-mono text-[11px] font-semibold hover:bg-indigo-700 transition-colors">
                        Approve
                      </button>
                      <button type="button" className="px-3 py-1 rounded bg-surface-200 dark:bg-surface-800 text-muted-foreground font-mono text-[11px] hover:text-foreground transition-colors">
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 2: Agent Studio */}
        {activeScreen === 'agent-directory' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">AI Agent Directory &amp; Permissions</h4>
                <p className="text-xs text-muted-foreground font-mono">Configured autonomous and supervised agents</p>
              </div>
              <button type="button" className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-mono font-semibold hover:bg-indigo-700 transition-colors">
                + Deploy New Agent
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'Support Resolver', model: 'Claude 3.5 Sonnet', tools: ['Zendesk', 'Linear', 'Postgres'], status: 'Active', tasks: '1,420 handled', guardrail: 'High Strictness' },
                { name: 'Financial Auditor', model: 'GPT-4o Mini', tools: ['QuickBooks', 'Stripe', 'Slack'], status: 'Active', tasks: '840 handled', guardrail: 'Zero Free Text' },
                { name: 'Knowledge Synthesizer', model: 'Claude 3.5 Haiku', tools: ['Notion', 'Google Drive', 'Qdrant'], status: 'Active', tasks: '2,900 handled', guardrail: 'Read-Only' },
              ].map((agent, i) => (
                <div key={i} className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-400 font-mono text-xs flex items-center justify-center font-bold">
                      A{i+1}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {agent.status}
                    </span>
                  </div>

                  <div>
                    <h5 className="font-semibold text-sm text-foreground">{agent.name}</h5>
                    <span className="text-[11px] font-mono text-muted-foreground">Model: {agent.model}</span>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-border/40 text-xs font-mono text-muted-foreground">
                    <div>Tools: <strong className="text-foreground">{agent.tools.join(', ')}</strong></div>
                    <div>Safety: <strong className="text-indigo-400">{agent.guardrail}</strong></div>
                    <div>Activity: {agent.tasks}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SCREEN 3: Workflow Canvas */}
        {activeScreen === 'workflow-canvas' && (
          <div className="space-y-6">
            <div className="pb-3 border-b border-border/50">
              <h4 className="text-base font-semibold text-foreground">Visual Workflow Builder (Directed Acyclic Graph)</h4>
              <p className="text-xs text-muted-foreground font-mono">Invoice Exception Escalation Workflow</p>
            </div>

            {/* Simulated Interactive Workflow Canvas */}
            <div className="p-6 rounded-2xl bg-surface-50 dark:bg-surface-950/80 border border-border/60 space-y-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Node 1 */}
                <div className="w-full md:w-56 p-4 rounded-xl bg-background border border-border/80 text-xs space-y-1 shadow-sm">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase block">Node 1: Trigger</span>
                  <div className="font-semibold text-foreground">Webhook Received</div>
                  <span className="text-muted-foreground text-[11px]">Invoice overdue &gt; 15 days</span>
                </div>

                <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0 rotate-90 md:rotate-0" />

                {/* Node 2 */}
                <div className="w-full md:w-56 p-4 rounded-xl bg-background border border-indigo-500/40 text-xs space-y-1 shadow-sm">
                  <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase block">Node 2: AI Evaluation</span>
                  <div className="font-semibold text-foreground">Risk &amp; Tone Analyzer</div>
                  <span className="text-muted-foreground text-[11px]">Evaluate past payment behavior</span>
                </div>

                <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0 rotate-90 md:rotate-0" />

                {/* Node 3 */}
                <div className="w-full md:w-56 p-4 rounded-xl bg-background border border-amber-500/40 text-xs space-y-1 shadow-sm">
                  <span className="text-[10px] font-mono text-amber-400 font-bold uppercase block">Node 3: Condition Gate</span>
                  <div className="font-semibold text-foreground">Amount &gt; $5,000?</div>
                  <span className="text-muted-foreground text-[11px]">Route to Human Sign-Off</span>
                </div>

                <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0 rotate-90 md:rotate-0" />

                {/* Node 4 */}
                <div className="w-full md:w-56 p-4 rounded-xl bg-background border border-emerald-500/40 text-xs space-y-1 shadow-sm">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase block">Node 4: Dispatch</span>
                  <div className="font-semibold text-foreground">Send Tailored Email</div>
                  <span className="text-muted-foreground text-[11px]">Attach Razorpay dynamic link</span>
                </div>
              </div>

              <div className="pt-4 border-t border-border/40 flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span>DAG State: Validated (Zero cyclic loops detected)</span>
                <span className="text-indigo-400 font-semibold cursor-pointer hover:underline">Execute Test Run &rarr;</span>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 4: Vector Knowledge Search */}
        {activeScreen === 'knowledge-search' && (
          <div className="space-y-6">
            <div className="pb-3 border-b border-border/50">
              <h4 className="text-base font-semibold text-foreground">Enterprise Vector Knowledge Store</h4>
              <p className="text-xs text-muted-foreground font-mono">Semantic search and document chunk inspection across corporate datasets</p>
            </div>

            <div className="p-4 rounded-2xl bg-background border border-border/60 flex items-center gap-3">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                readOnly
                value="What is our SLA for enterprise payment dispute resolution?"
                className="w-full bg-transparent text-xs font-mono text-foreground focus:outline-none"
              />
              <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 text-[10px] font-mono">
                Cosine Similarity: 0.92
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-surface-50 dark:bg-surface-950/60 border border-border/60 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-foreground font-semibold">Synthesized Answer (Grounded in Verified Chunk)</span>
                <span className="text-muted-foreground">Source: contracts/SLA_Master_2025.pdf #Chunk-84</span>
              </div>

              <p className="text-xs text-foreground leading-relaxed">
                Under Section 4.2 of the Enterprise Agreement, Tier-1 payment disputes must be formally acknowledged within 4 business hours and resolved within 2 business days. Escrow holds automatically expire after 10 calendar days unless a formal dispute ticket is escalated.
              </p>

              <div className="pt-2 border-t border-border/40 flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Hallucination Guarantee &middot; Direct Citation Attached</span>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 5: Agent Detail */}
        {activeScreen === 'agent-detail' && (
          <div className="space-y-6">
            <div className="pb-3 border-b border-border/50">
              <h4 className="text-base font-semibold text-foreground">Agent Inspector: Financial Auditor #A2</h4>
              <p className="text-xs text-muted-foreground font-mono">Detailed instruction guardrails, tool sandbox, and rate limits</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-5 rounded-2xl bg-background border border-border/60 space-y-3">
                <span className="text-[10px] text-muted-foreground uppercase font-bold block">System Prompt Guardrails</span>
                <div className="p-3 rounded-lg bg-surface-100 dark:bg-surface-900 text-[11px] text-muted-foreground font-mono leading-relaxed">
                  You are an autonomous auditor. You NEVER execute wire transfers directly. You only read transaction ledgers and output structured JSON variance reports. PII must be redacted prior to external API dispatch.
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-background border border-border/60 space-y-3">
                <span className="text-[10px] text-muted-foreground uppercase font-bold block">Security Sandboxing &amp; Quota</span>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Token Budget (Hourly):</span>
                    <strong className="text-foreground">84,000 / 250,000</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>API Write Permissions:</span>
                    <strong className="text-rose-400">DISABLED (Read-Only)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>PII Interceptor:</span>
                    <strong className="text-emerald-400">ENABLED (Regex + NER)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Approval Trigger:</span>
                    <strong className="text-foreground">Transactions &gt; $2,500</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
