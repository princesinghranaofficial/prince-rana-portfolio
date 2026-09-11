'use client';

import * as React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Database, 
  CreditCard, 
  CheckCircle2, 
  Clock
} from 'lucide-react';

interface VisualProps {
  type: 'saas' | 'ai-saas' | 'full-stack' | 'website' | 'mvp' | 'dashboard';
}

export function ServiceArchitectureVisual({ type }: VisualProps) {
  switch (type) {
    case 'saas':
      return <SaaSArchitectureVisual />;
    case 'ai-saas':
      return <AISaaSArchitectureVisual />;
    case 'full-stack':
      return <FullStackArchitectureVisual />;
    case 'website':
      return <WebsiteConversionVisual />;
    case 'mvp':
      return <SaaSMVPArchitectureVisual />;
    default:
      return <SaaSArchitectureVisual />;
  }
}

/**
 * 01. SaaS Platform Architecture Visual
 * System Flow: AUTH -> WORKSPACE -> CORE DOMAIN -> DATA -> BILLING -> INTEGRATIONS -> ADMIN -> ANALYTICS -> DEPLOYMENT
 */
function SaaSArchitectureVisual() {
  return (
    <div className="rounded-3xl border border-indigo-500/30 bg-surface-100/90 dark:bg-surface-900/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border/60">
        <div>
          <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider block">
            System Topology &middot; Multi-Tenant Core
          </span>
          <h4 className="text-base sm:text-lg font-bold text-foreground">Production SaaS Architecture Blueprint</h4>
        </div>
        <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Row Level Security Isolated
        </span>
      </div>

      {/* Connected Architecture Flow */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Step 1: Ingress & Identity */}
        <div className="p-4 rounded-2xl bg-surface-200/50 dark:bg-surface-950/60 border border-border/60 space-y-2.5">
          <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase">
            <Lock className="w-3.5 h-3.5" />
            <span>01 &middot; Auth &amp; Workspace</span>
          </div>
          <div className="space-y-1.5 text-xs">
            <div className="p-2 rounded-lg bg-background/80 border border-border/40 font-mono flex items-center justify-between">
              <span>Tenant Partitioning</span>
              <span className="text-[10px] text-indigo-400 font-bold">RLS Guard</span>
            </div>
            <div className="p-2 rounded-lg bg-background/80 border border-border/40 font-mono flex items-center justify-between">
              <span>RBAC Permissions</span>
              <span className="text-[10px] text-muted-foreground">Owner / Member</span>
            </div>
          </div>
        </div>

        {/* Step 2: Core Domain & Data */}
        <div className="p-4 rounded-2xl bg-surface-200/50 dark:bg-surface-950/60 border border-indigo-500/30 space-y-2.5">
          <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase">
            <Database className="w-3.5 h-3.5" />
            <span>02 &middot; Domain &amp; Ledger</span>
          </div>
          <div className="space-y-1.5 text-xs">
            <div className="p-2 rounded-lg bg-background/80 border border-border/40 font-mono flex items-center justify-between">
              <span>PostgreSQL Schema</span>
              <span className="text-[10px] text-emerald-400 font-bold">ACID Compliant</span>
            </div>
            <div className="p-2 rounded-lg bg-background/80 border border-border/40 font-mono flex items-center justify-between">
              <span>Core Workflows</span>
              <span className="text-[10px] text-indigo-400 font-bold">State Machine</span>
            </div>
          </div>
        </div>

        {/* Step 3: Billing & Ops */}
        <div className="p-4 rounded-2xl bg-surface-200/50 dark:bg-surface-950/60 border border-border/60 space-y-2.5">
          <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase">
            <CreditCard className="w-3.5 h-3.5" />
            <span>03 &middot; Revenue &amp; Edge</span>
          </div>
          <div className="space-y-1.5 text-xs">
            <div className="p-2 rounded-lg bg-background/80 border border-border/40 font-mono flex items-center justify-between">
              <span>Stripe / Razorpay</span>
              <span className="text-[10px] text-emerald-400 font-bold">Webhooks Active</span>
            </div>
            <div className="p-2 rounded-lg bg-background/80 border border-border/40 font-mono flex items-center justify-between">
              <span>Edge Delivery</span>
              <span className="text-[10px] text-muted-foreground">Global CDN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Pipeline Bar */}
      <div className="p-4 rounded-2xl bg-surface-200/30 dark:bg-surface-950/40 border border-border/50 text-[11px] font-mono flex flex-wrap items-center justify-between gap-2 text-muted-foreground">
        <span className="text-foreground font-semibold">End-to-End Pipeline:</span>
        <span className="text-indigo-400">AUTH</span> &rarr;
        <span>WORKSPACE</span> &rarr;
        <span className="text-indigo-400">CORE WORKFLOW</span> &rarr;
        <span>DATA RLS</span> &rarr;
        <span className="text-emerald-400">BILLING</span> &rarr;
        <span>ADMIN TELEMETRY</span> &rarr;
        <span className="text-foreground font-bold">DEPLOYMENT</span>
      </div>
    </div>
  );
}

/**
 * 02. AI SaaS Architecture Visual
 * Flow: USER -> PRODUCT WORKFLOW -> AUTHORIZED CONTEXT -> AI LAYER -> STRUCTURED OUTPUT -> HUMAN / PRODUCT ACTION
 */
function AISaaSArchitectureVisual() {
  const [humanReviewActive, setHumanReviewActive] = React.useState<boolean>(true);

  return (
    <div className="rounded-3xl border border-teal-500/30 bg-surface-100/90 dark:bg-surface-900/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border/60">
        <div>
          <span className="text-xs font-mono text-teal-400 font-bold uppercase tracking-wider block">
            AI Product Architecture &middot; Disciplined RAG
          </span>
          <h4 className="text-base sm:text-lg font-bold text-foreground">Grounded AI Workflow &amp; Guardrail Pipeline</h4>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-xl">
            Zero Raw Unvalidated Prompts
          </span>
        </div>
      </div>

      {/* Pipeline Blocks */}
      <div className="space-y-3">
        {[
          { step: '01', title: 'User Action & Intent Routing', desc: 'Triggered from native UI component, not a generic open chat prompt.', badge: 'Client Context', color: 'text-foreground' },
          { step: '02', title: 'Context Retrieval & RAG Isolation', desc: 'Semantic search strictly scoped to authenticated tenant ID via pgvector.', badge: 'Cosine Filter', color: 'text-teal-400' },
          { step: '03', title: 'LLM Inference & Tool Schema', desc: 'Strict Zod JSON output formatting with deterministic function calling.', badge: 'Structured Output', color: 'text-blue-400' },
          { step: '04', title: 'Anti-Hallucination & Safety Gate', desc: 'Confidence validation, PII redaction, and semantic bounds checking.', badge: 'Guardrail Layer', color: 'text-amber-400' },
          { step: '05', title: 'Human Oversight & System Mutation', desc: 'Human-in-the-loop review drawer before executing sensitive operational database writes.', badge: 'Human in the Loop', color: 'text-emerald-400' },
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-surface-200/40 dark:bg-surface-950/60 border border-border/50 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs"
          >
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold flex items-center justify-center shrink-0">
                {item.step}
              </span>
              <div>
                <strong className={`font-mono text-sm block ${item.color}`}>{item.title}</strong>
                <span className="text-muted-foreground">{item.desc}</span>
              </div>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-surface-100 dark:bg-surface-800 border border-border text-muted-foreground self-start md:self-auto">
              {item.badge}
            </span>
          </div>
        ))}
      </div>

      {/* Safety Toggle Demo */}
      <div className="p-4 rounded-2xl bg-teal-500/5 border border-teal-500/20 flex items-center justify-between gap-4 text-xs font-mono">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
          <span className="text-foreground">Human-in-the-Loop Sign-off Requirement:</span>
        </div>
        <button
          type="button"
          onClick={() => setHumanReviewActive(!humanReviewActive)}
          className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
            humanReviewActive ? 'bg-teal-600 text-white shadow-xs' : 'bg-surface-200 dark:bg-surface-800 text-muted-foreground'
          }`}
        >
          {humanReviewActive ? 'ENFORCED (Audit Log Active)' : 'BYPASS (Dev Only)'}
        </button>
      </div>
    </div>
  );
}

/**
 * 03. Full-Stack Architecture Visual
 * System Flow: INTERFACE -> APPLICATION -> DATA -> INTEGRATIONS -> INFRASTRUCTURE
 */
function FullStackArchitectureVisual() {
  return (
    <div className="rounded-3xl border border-blue-500/30 bg-surface-100/90 dark:bg-surface-900/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border/60">
        <div>
          <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider block">
            End-to-End Type Safety
          </span>
          <h4 className="text-base sm:text-lg font-bold text-foreground">Unified 5-Tier Full-Stack Stack</h4>
        </div>
        <span className="text-xs font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-xl">
          0 `any` Types &middot; 100% Strict TypeScript
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs font-mono">
        <div className="p-4 rounded-2xl bg-surface-200/40 dark:bg-surface-950/60 border border-border/60 space-y-2">
          <span className="text-[10px] text-muted-foreground uppercase block font-bold">1. Interface</span>
          <strong className="text-foreground text-sm font-sans block">Next.js &amp; React</strong>
          <span className="text-[11px] text-muted-foreground block">Tailwind CSS, Radix UI, Framer Motion</span>
        </div>

        <div className="p-4 rounded-2xl bg-surface-200/40 dark:bg-surface-950/60 border border-blue-500/30 space-y-2">
          <span className="text-[10px] text-blue-400 uppercase block font-bold">2. Application</span>
          <strong className="text-foreground text-sm font-sans block">Server Actions &amp; APIs</strong>
          <span className="text-[11px] text-muted-foreground block">Node.js, Zod schemas, rate limiters</span>
        </div>

        <div className="p-4 rounded-2xl bg-surface-200/40 dark:bg-surface-950/60 border border-border/60 space-y-2">
          <span className="text-[10px] text-muted-foreground uppercase block font-bold">3. Data Layer</span>
          <strong className="text-foreground text-sm font-sans block">PostgreSQL / Supabase</strong>
          <span className="text-[11px] text-muted-foreground block">RLS security, migrations, PgBouncer</span>
        </div>

        <div className="p-4 rounded-2xl bg-surface-200/40 dark:bg-surface-950/60 border border-border/60 space-y-2">
          <span className="text-[10px] text-muted-foreground uppercase block font-bold">4. Integrations</span>
          <strong className="text-foreground text-sm font-sans block">Stripe / Webhooks</strong>
          <span className="text-[11px] text-muted-foreground block">Resend email, S3 storage, OpenAI</span>
        </div>

        <div className="p-4 rounded-2xl bg-surface-200/40 dark:bg-surface-950/60 border border-border/60 space-y-2">
          <span className="text-[10px] text-muted-foreground uppercase block font-bold">5. Edge Cloud</span>
          <strong className="text-foreground text-sm font-sans block">Vercel &amp; Cloudflare</strong>
          <span className="text-[11px] text-muted-foreground block">Edge caching, SSL, Sentry monitoring</span>
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-muted-foreground flex items-center justify-between">
        <span className="text-blue-400 font-bold">{'// SINGLE ARCHITECTURAL SOURCE OF TRUTH:'}</span>
        <span className="text-foreground">Database Schema &rarr; TypeScript Types &rarr; API Validations &rarr; React Props</span>
      </div>
    </div>
  );
}

/**
 * 04. SaaS MVP Prioritization Scope Visual
 * Matrix: MUST HAVE vs LATER
 * Flow: IDEA -> CORE ASSUMPTION -> CORE USER -> CORE WORKFLOW -> MVP -> REAL FEEDBACK
 */
function SaaSMVPArchitectureVisual() {
  return (
    <div className="rounded-3xl border border-emerald-500/30 bg-surface-100/90 dark:bg-surface-900/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border/60">
        <div>
          <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block">
            Scope Slicing Framework &middot; 3-5 Week Delivery
          </span>
          <h4 className="text-base sm:text-lg font-bold text-foreground">MVP Product Prioritization &amp; Extensibility Matrix</h4>
        </div>
        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
          Extensible Codebase &middot; Zero Throwaway
        </span>
      </div>

      {/* Prioritization Quadrants */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Must Have */}
        <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <strong className="text-sm font-mono text-emerald-400 uppercase tracking-wider font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              MUST HAVE (Day-One Launch Scope)
            </strong>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
              3-5 Weeks
            </span>
          </div>
          <div className="space-y-2 text-xs font-mono">
            <div className="p-2.5 rounded-lg bg-background/90 border border-emerald-500/20 text-foreground">
              &#10003; Primary Core Value Workflow (The single reason users pay)
            </div>
            <div className="p-2.5 rounded-lg bg-background/90 border border-emerald-500/20 text-foreground">
              &#10003; Frictionless Sign-up &amp; Authentication (OAuth + Magic Links)
            </div>
            <div className="p-2.5 rounded-lg bg-background/90 border border-emerald-500/20 text-foreground">
              &#10003; Essential Data Schema &amp; Storage (PostgreSQL + RLS)
            </div>
            <div className="p-2.5 rounded-lg bg-background/90 border border-emerald-500/20 text-foreground">
              &#10003; Stripe Checkout / Subscription Billing Gating
            </div>
            <div className="p-2.5 rounded-lg bg-background/90 border border-emerald-500/20 text-foreground">
              &#10003; Production Domain Deployment with Error Instrumentation
            </div>
          </div>
        </div>

        {/* Later */}
        <div className="p-5 rounded-2xl bg-surface-200/40 dark:bg-surface-950/60 border border-border/60 space-y-3">
          <div className="flex items-center justify-between">
            <strong className="text-sm font-mono text-muted-foreground uppercase tracking-wider font-bold flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-muted-foreground" />
              LATER (Post-Validation Iteration)
            </strong>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-200 dark:bg-surface-800 text-muted-foreground">
              Phase 2
            </span>
          </div>
          <div className="space-y-2 text-xs font-mono text-muted-foreground">
            <div className="p-2.5 rounded-lg bg-surface-100/50 dark:bg-surface-900/40 border border-border/30">
              &times; Complex multi-tier custom permission matrices
            </div>
            <div className="p-2.5 rounded-lg bg-surface-100/50 dark:bg-surface-900/40 border border-border/30">
              &times; Nice-to-have third-party peripheral integrations
            </div>
            <div className="p-2.5 rounded-lg bg-surface-100/50 dark:bg-surface-900/40 border border-border/30">
              &times; Advanced enterprise compliance auditing dashboards
            </div>
            <div className="p-2.5 rounded-lg bg-surface-100/50 dark:bg-surface-900/40 border border-border/30">
              &times; Automated self-serve referral &amp; affiliate networks
            </div>
          </div>
        </div>
      </div>

      {/* Validation Progression */}
      <div className="p-3.5 rounded-xl bg-surface-200/40 dark:bg-surface-950/40 border border-border/40 text-xs font-mono flex flex-wrap items-center justify-between gap-2 text-muted-foreground">
        <span className="text-foreground font-semibold">Validation Path:</span>
        <span className="text-emerald-400">IDEA</span> &rarr;
        <span>CORE ASSUMPTION</span> &rarr;
        <span className="text-emerald-400">CORE WORKFLOW</span> &rarr;
        <span>PAYING CUSTOMER</span> &rarr;
        <span className="text-foreground font-bold">EXPANDED SCALE</span>
      </div>
    </div>
  );
}

/**
 * 05. Website Conversion Architecture Visual
 * Anatomy: POSITIONING -> STORY -> PROOF -> PRODUCT -> TRUST -> CONVERSION
 */
function WebsiteConversionVisual() {
  return (
    <div className="rounded-3xl border border-orange-500/30 bg-surface-100/90 dark:bg-surface-900/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border/60">
        <div>
          <span className="text-xs font-mono text-orange-400 font-bold uppercase tracking-wider block">
            Conversion Rate Architecture &middot; B2B SaaS
          </span>
          <h4 className="text-base sm:text-lg font-bold text-foreground">7-Step Commercial Conversion Anatomy</h4>
        </div>
        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
          Core Web Vitals Optimization &middot; Fast LCP Delivery
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs font-mono">
        {[
          { step: '01', title: 'Positioning', desc: 'Clarity in first 5s. What you build and who it is for.', color: 'border-orange-500/40 text-orange-400' },
          { step: '02', title: 'Problem Story', desc: 'Validating the buyer pain and why status quo fails.', color: 'border-border/60 text-foreground' },
          { step: '03', title: 'Concrete Proof', desc: 'Case studies, live demos, and verifiable capabilities.', color: 'border-border/60 text-emerald-400' },
          { step: '04', title: 'Product Tour', desc: 'Interactive screens and authentic interface frames.', color: 'border-border/60 text-foreground' },
          { step: '05', title: 'Trust & Safety', desc: 'Security, architecture transparency, and process.', color: 'border-border/60 text-teal-400' },
          { step: '06', title: 'Action Funnel', desc: 'Frictionless project scoping and calendar booking.', color: 'border-orange-500/40 text-orange-400' },
        ].map((block, i) => (
          <div key={i} className={`p-3.5 rounded-2xl bg-surface-200/40 dark:bg-surface-950/60 border ${block.color} space-y-1.5`}>
            <span className="text-[10px] text-muted-foreground font-bold">{block.step}</span>
            <strong className="text-xs font-sans block text-foreground">{block.title}</strong>
            <p className="text-[11px] text-muted-foreground leading-relaxed">{block.desc}</p>
          </div>
        ))}
      </div>

      <div className="p-3.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-xs font-mono text-foreground flex items-center justify-between">
        <span className="text-orange-400 font-bold">{'// CONVERSION PRINCIPLE:'}</span>
        <span className="text-muted-foreground">Speed + Clarity + Verifiable Product Proof = Maximum Client Conversion</span>
      </div>
    </div>
  );
}
