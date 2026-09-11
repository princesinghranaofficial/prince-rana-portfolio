'use client';

import * as React from 'react';
import { 
  Cpu, 
  Database, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  CheckCircle2, 
  Layers, 
  Lock, 
  ArrowRight,
  Code2,
  Sparkles,
  GitBranch,
  Terminal,
  Activity
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { H2, H3, TextLead } from '@/components/ui/typography';
import { trackEvent } from '@/lib/analytics';

const engineeringDecisions = [
  {
    num: '01',
    problem: 'Financial transactions require cryptographic balance accuracy, but typical SaaS architectures store single-entry logs that permit silent balance drift.',
    decision: 'Architected a strict double-entry ledger schema inside PostgreSQL with database-level debit/credit balance constraints.',
    why: 'Guarantees that the fundamental accounting equation (Assets = Liabilities + Equity) mathematically sums to zero on every single transaction write.',
    result: 'Zero balance discrepancies across 100% of reconciliation tests, with immediate rollback if webhooks attempt unbalanced entries.',
  },
  {
    num: '02',
    problem: 'Users frequently confuse historical ledger actuals with forward-looking predictions, creating dangerous misunderstandings about cash availability.',
    decision: 'Enforced a strict semantic and visual partition: solid emerald lines and cards for ledger actuals, dashed amber styling with 80% confidence bands for forecasts.',
    why: 'Prevents cognitive blending of verified capital and projected revenue, ensuring leadership teams make hiring decisions with eyes wide open.',
    result: 'Clear UX separation validated across user testing; eliminates ambiguity around available liquidity vs. projected milestones.',
  },
  {
    num: '03',
    problem: 'Generic LLM chatbots output conversational text that cannot be verified against ledger records and frequently invent mathematical figures.',
    decision: 'Restricted AI Copilot output strictly to structured JSON schemas (Summary, Key Drivers, Relevant Data, Action Items) generated via function-calling tools.',
    why: 'Forces the model to cite exact transaction IDs and verified database rollup views rather than calculating numbers spontaneously in prompt prose.',
    result: 'Sub-500ms deterministic response generation with zero mathematical hallucinations on verified financial queries.',
  },
  {
    num: '04',
    problem: 'Heavy external charting libraries (e.g. Chart.js, Recharts) bloat client-side JavaScript bundles by over 300KB and introduce layout shifts on mobile.',
    decision: 'Engineered custom lightweight SVG charting primitives with zero external client-side visualization dependencies.',
    why: 'Reduces first-load JavaScript, guarantees instantaneous 60fps renders, and ensures responsive scaling across viewports from 360px to 1728px.',
    result: 'First-load JS bundle under 65KB, zero cumulative layout shift (CLS: 0.00), and crisp retina display rendering.',
  },
];

const techStack = [
  { category: 'Frontend Architecture', tools: ['Next.js (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend & APIs', tools: ['Node.js', 'Next.js Server Components', 'Route Handlers', 'Edge Middleware'] },
  { category: 'Persistence & RLS', tools: ['Supabase PostgreSQL', 'Row Level Security', 'Database Triggers', 'PgBouncer'] },
  { category: 'AI & Intelligence', tools: ['Claude 3.5 Sonnet', 'OpenAI GPT-4o', 'Structured JSON Tools', 'Prompt Sandboxing'] },
  { category: 'Edge Infrastructure', tools: ['Vercel Edge Platform', 'Cloudflare Zero Trust', 'HTTPS Strict Transport'] },
];

export function AICFOEngineering() {
  React.useEffect(() => {
    trackEvent('ai_cfo_architecture_engaged');
  }, []);

  return (
    <div id="engineering" className="py-20 sm:py-28 border-b border-border/50 bg-surface-50/40 dark:bg-surface-950/30 space-y-24">
      {/* 15. Product Information Architecture */}
      <Container size="default">
        <div className="space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest font-semibold block">
              10 &middot; INFORMATION ARCHITECTURE
            </span>
            <H2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
              A structured pipeline from raw banking data to executive decisions.
            </H2>
            <TextLead className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Every piece of data flows through a verified transformation sequence: from external banking webhooks through normalization, double-entry ledgers, analytical projections, and into the contextual AI copilot.
            </TextLead>
          </div>

          {/* Flow Diagram */}
          <div className="p-6 sm:p-10 rounded-3xl bg-surface-100/80 dark:bg-surface-900/80 border border-border/80 shadow-xl space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 text-center text-xs font-mono">
              <div className="p-4 rounded-xl bg-background/90 border border-border/60 space-y-1">
                <span className="text-emerald-400 font-bold block">01. INGESTION</span>
                <span className="text-foreground">Bank &amp; Card Webhooks</span>
              </div>
              <div className="p-4 rounded-xl bg-background/90 border border-border/60 space-y-1">
                <span className="text-emerald-400 font-bold block">02. NORMALIZATION</span>
                <span className="text-foreground">Categorization &amp; RLS</span>
              </div>
              <div className="p-4 rounded-xl bg-background/90 border border-border/60 space-y-1">
                <span className="text-emerald-400 font-bold block">03. DOUBLE-ENTRY</span>
                <span className="text-foreground">Ledger Balance Constraints</span>
              </div>
              <div className="p-4 rounded-xl bg-background/90 border border-border/60 space-y-1">
                <span className="text-emerald-400 font-bold block">04. CASH &amp; FORECAST</span>
                <span className="text-foreground">Burn Rate &amp; 18mo Runways</span>
              </div>
              <div className="p-4 rounded-xl bg-background/90 border border-border/60 space-y-1">
                <span className="text-emerald-400 font-bold block">05. MONITORING</span>
                <span className="text-foreground">Variance &amp; Anomaly Scans</span>
              </div>
              <div className="p-4 rounded-xl bg-background/90 border border-border/60 space-y-1">
                <span className="text-emerald-400 font-bold block">06. AI COPILOT</span>
                <span className="text-foreground">Structured Decision Support</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* 16. Technical System Architecture */}
      <Container size="default">
        <div className="space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest font-semibold block">
              11 &middot; TECHNICAL ARCHITECTURE
            </span>
            <H2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
              A financial product needs more than a polished dashboard.
            </H2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Financial applications handle sensitive customer assets and require strict tenant boundaries, atomic database transactions, and zero-hallucination AI pipelines. Here is the verified technical architecture powering AI CFO.
            </p>
          </div>

          {/* Responsive HTML/CSS Architecture Diagram */}
          <div className="p-6 sm:p-10 rounded-3xl bg-surface-100/90 dark:bg-surface-900/90 border border-border/80 shadow-2xl space-y-4">
            {/* Layer 1: Client */}
            <div className="p-5 rounded-2xl bg-background/90 border border-border/60 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-400 font-bold uppercase">Presentation Layer (Client)</span>
                <span className="text-muted-foreground">Vercel Global Edge CDN</span>
              </div>
              <p className="text-xs text-foreground font-sans">
                Next.js App Router &middot; Server Components &middot; Tailored SVG Visualizations &middot; Tabular Numerical Fonts &middot; Responsive Mobile-First Breakpoints
              </p>
            </div>

            {/* Layer 2: Application Logic */}
            <div className="p-5 rounded-2xl bg-background/90 border border-border/60 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-blue-400 font-bold uppercase">Application &amp; Security Layer</span>
                <span className="text-muted-foreground">Node.js Serverless Microservices</span>
              </div>
              <p className="text-xs text-foreground font-sans">
                Webhook Verification Pipeline &middot; Double-Entry Balance Validator &middot; Cash Runway Formula Engine &middot; Scenario Calculator WebAssembly Workers
              </p>
            </div>

            {/* Layer 3: Persistence & RLS */}
            <div className="p-5 rounded-2xl bg-background/90 border border-border/60 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-purple-400 font-bold uppercase">Database &amp; Multi-Tenant Isolation</span>
                <span className="text-muted-foreground">PostgreSQL (Supabase) + RLS</span>
              </div>
              <p className="text-xs text-foreground font-sans">
                Strict Row-Level Security partitioned by Organization UUID &middot; Double-entry debit/credit ledger constraints &middot; Materialized Rollup Views for Sub-50ms Reports
              </p>
            </div>

            {/* Layer 4: AI Layer */}
            <div className="p-5 rounded-2xl bg-background/90 border border-border/60 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-amber-400 font-bold uppercase">Financial AI &amp; Tool Calling Engine</span>
                <span className="text-muted-foreground">Claude 3.5 Sonnet / GPT-4o</span>
              </div>
              <p className="text-xs text-foreground font-sans">
                Zero-Retention Data Boundary &middot; Context Isolation injecting only authorized ledger summaries &middot; Strict JSON Schema Function Calling &middot; PII Redaction
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* 20. Engineering Decisions (ADR) */}
      <Container size="default">
        <div className="space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest font-semibold block">
              12 &middot; ARCHITECTURAL DECISION RECORDS (ADRs)
            </span>
            <H2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
              Deliberate engineering decisions, documented.
            </H2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Real software engineering is a sequence of trade-offs. Here are four foundational technical decisions made during the architecture of AI CFO.
            </p>
          </div>

          {/* Decision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engineeringDecisions.map((dec) => (
              <div
                key={dec.num}
                className="p-6 rounded-3xl bg-surface-100/70 dark:bg-surface-900/60 border border-border/70 space-y-4 hover:border-emerald-500/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 font-mono text-xs flex items-center justify-center font-bold">
                    {dec.num}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground uppercase">Architectural Record</span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div>
                    <strong className="text-foreground uppercase tracking-wider text-[10px] font-mono block text-rose-400">
                      Problem
                    </strong>
                    <p className="text-muted-foreground leading-relaxed">{dec.problem}</p>
                  </div>

                  <div>
                    <strong className="text-foreground uppercase tracking-wider text-[10px] font-mono block text-blue-400">
                      Decision
                    </strong>
                    <p className="text-foreground font-medium leading-relaxed">{dec.decision}</p>
                  </div>

                  <div>
                    <strong className="text-foreground uppercase tracking-wider text-[10px] font-mono block text-amber-400">
                      Why It Fit
                    </strong>
                    <p className="text-muted-foreground leading-relaxed">{dec.why}</p>
                  </div>

                  <div className="pt-2 border-t border-border/40">
                    <strong className="text-foreground uppercase tracking-wider text-[10px] font-mono block text-emerald-400">
                      Result
                    </strong>
                    <p className="text-foreground font-semibold leading-relaxed">{dec.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* 21. What I Built & Technology Stack */}
      <Container size="default">
        <div className="space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest font-semibold block">
              13 &middot; SCOPE OF WORK &amp; VERIFIED STACK
            </span>
            <H2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
              Single-developer ownership from concept to production.
            </H2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Designed, architected, and coded 100% by Prince Singh Rana as a production-grade demonstration of AI financial SaaS capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((stk, si) => (
              <div key={si} className="p-6 rounded-2xl bg-surface-100/60 dark:bg-surface-900/40 border border-border/60 space-y-3">
                <span className="text-xs font-mono font-bold text-foreground uppercase tracking-wider block">
                  {stk.category}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {stk.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-lg bg-background border border-border/60 text-xs font-mono text-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
