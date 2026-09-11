import * as React from 'react';
import { 
  Cpu, 
  Database, 
  ShieldCheck, 
  Lock, 
  Layers, 
  Zap, 
  Smartphone, 
  Monitor, 
  Check, 
  AlertCircle, 
  KeyRound, 
  Server, 
  GitBranch, 
  ArrowDown 
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';

export function CollectAIEngineering() {
  return (
    <div className="space-y-28 py-20 border-b border-border/60" id="architecture">
      {/* ========================================================================= */}
      {/* 15 & 36 & 37 TECHNICAL ARCHITECTURE DIAGRAM */}
      {/* ========================================================================= */}
      <Container size="wide">
        <SectionHeader
          eyebrow="Technical Architecture"
          title="Architecture engineered beyond the prototype."
          description="CollectAI was built with strict architectural boundaries separating presentation, business logic, multi-tenant persistence, and third-party webhook ingestion."
          align="left"
        />

        {/* Responsive HTML/CSS Architecture Diagram */}
        <div className="mt-14 rounded-3xl border border-border bg-surface p-6 sm:p-10 space-y-8 font-mono text-xs shadow-sm">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <span className="font-bold text-accent uppercase tracking-wider">
              System Architecture Flow
            </span>
            <span className="text-[11px] text-text-tertiary">
              Verified Production Stack
            </span>
          </div>

          <div className="space-y-4">
            {/* Layer 1: Client / Presentation */}
            <div className="p-4 rounded-xl border border-border bg-surface-muted/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] text-accent uppercase font-bold block">Layer 01 • Presentation Layer</span>
                <h4 className="font-bold text-text-primary text-sm">Next.js 15 (App Router) + React 19 + Tailwind CSS</h4>
                <p className="text-[11px] text-text-secondary">Server Components streaming UI, concurrent state transitions, and responsive financial tables.</p>
              </div>
              <span className="px-2.5 py-1 rounded bg-surface border border-border text-text-primary text-[11px] shrink-0">
                Client Viewport
              </span>
            </div>

            <div className="flex justify-center text-text-tertiary">
              <ArrowDown className="w-4 h-4" />
            </div>

            {/* Layer 2: Application / Logic */}
            <div className="p-4 rounded-xl border border-purple-500/30 bg-purple-500/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] text-purple-600 dark:text-purple-300 uppercase font-bold block">Layer 02 • Application Core & AI</span>
                <h4 className="font-bold text-text-primary text-sm">Server Actions + Node.js Workers + LLM Tool Calling</h4>
                <p className="text-[11px] text-text-secondary">Zero-waterfall type-safe API mutations, structured JSON agent schemas, and automated aging cron workers.</p>
              </div>
              <span className="px-2.5 py-1 rounded bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20 text-[11px] shrink-0">
                Server Actions
              </span>
            </div>

            <div className="flex justify-center text-text-tertiary">
              <ArrowDown className="w-4 h-4" />
            </div>

            {/* Layer 3: Persistence & Security */}
            <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 uppercase font-bold block">Layer 03 • Persistence & Security</span>
                <h4 className="font-bold text-text-primary text-sm">Supabase PostgreSQL + Row Level Security (RLS)</h4>
                <p className="text-[11px] text-text-secondary">Strict multi-tenant organization partitioning, JWT session verification, and indexed receivables views.</p>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] shrink-0">
                RLS Policies
              </span>
            </div>

            <div className="flex justify-center text-text-tertiary">
              <ArrowDown className="w-4 h-4" />
            </div>

            {/* Layer 4: Infrastructure & Integrations */}
            <div className="p-4 rounded-xl border border-border bg-surface-muted/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] text-text-tertiary uppercase font-bold block">Layer 04 • Settlement & Infrastructure</span>
                <h4 className="font-bold text-text-primary text-sm">Razorpay Webhooks + Vercel Edge + Cloudflare CDN</h4>
                <p className="text-[11px] text-text-secondary">Cryptographically verified payment callbacks, sub-second edge distribution, and automated SSL termination.</p>
              </div>
              <span className="px-2.5 py-1 rounded bg-surface border border-border text-text-primary text-[11px] shrink-0">
                Edge Delivery
              </span>
            </div>
          </div>
        </div>
      </Container>

      {/* ========================================================================= */}
      {/* 16 & 38 & 39 DATA ARCHITECTURE & MULTI-TENANCY */}
      {/* ========================================================================= */}
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              eyebrow="Data Architecture"
              title="Multi-tenant schema with strict relational integrity."
              description="In a B2B financial application, data leakage between accounts is an existential risk. Multi-tenancy is enforced directly inside the PostgreSQL database engine using Row Level Security (RLS)."
              align="left"
            />

            <div className="space-y-4 type-body text-text-secondary">
              <p>
                Every table in CollectAI contains an indexed <code className="text-accent bg-surface-muted px-1.5 py-0.5 rounded font-mono text-xs">org_id</code> foreign key referencing the parent organization. When a user authenticates, their verified tenant ID is injected into the database session context.
              </p>
              <p>
                PostgreSQL evaluates access rules on every read and mutation before executing queries, guaranteeing that users can never access records belonging to another company.
              </p>
            </div>
          </div>

          {/* Core Relational Domain Model Card */}
          <div className="lg:col-span-6 p-6 rounded-3xl border border-border bg-surface space-y-4 font-mono text-xs shadow-xs">
            <span className="text-text-tertiary text-[10px] uppercase font-bold block">
              Core Data Entities & Relationships
            </span>

            <div className="divide-y divide-border/60">
              {[
                { entity: 'organizations', desc: 'Root tenant partition; billing tier, settings & currency config.' },
                { entity: 'users', desc: 'Organization members linked to Supabase auth with role-based permissions.' },
                { entity: 'customers', desc: 'Debtor entities; payment terms, billing contacts, and dispute notes.' },
                { entity: 'invoices', desc: 'Line items, issue dates, due dates, payment status, and balance due.' },
                { entity: 'collection_activities', desc: 'Immutable audit log of all automated & manual follow-up actions.' },
                { entity: 'workflows', desc: 'Configurable multi-stage escalation rules and cooldown schedules.' },
                { entity: 'payments', desc: 'Captured transactions, Razorpay payment IDs, and reconciliation timestamps.' },
              ].map((item) => (
                <div key={item.entity} className="py-2.5 flex items-start gap-3">
                  <span className="font-bold text-accent shrink-0 w-36">{item.entity}</span>
                  <span className="text-text-secondary text-[11px]">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* ========================================================================= */}
      {/* 17 & 41 SECURITY IMPLEMENTATION */}
      {/* ========================================================================= */}
      <div className="bg-surface-muted/30 py-20 border-y border-border/60">
        <Container size="wide">
          <SectionHeader
            eyebrow="Security Posture"
            title="Financial software requires deliberate boundaries."
            description="Security was not added as a post-launch patch; it was architected into every API route, database query, and third-party webhook handler."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 font-mono text-xs">
            <div className="p-5 rounded-2xl border border-border bg-surface space-y-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <h4 className="font-bold text-text-primary text-sm">Row Level Security</h4>
              <p className="text-text-secondary text-[11px] leading-relaxed">
                Database-level policies restrict tenant visibility automatically on every SQL SELECT, UPDATE, and DELETE.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-border bg-surface space-y-2">
              <Lock className="w-5 h-5 text-accent" />
              <h4 className="font-bold text-text-primary text-sm">Server Validation</h4>
              <p className="text-text-secondary text-[11px] leading-relaxed">
                Strict runtime validation on all mutations via Zod schemas, stripping unexpected parameters before queries run.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-border bg-surface space-y-2">
              <KeyRound className="w-5 h-5 text-purple-600" />
              <h4 className="font-bold text-text-primary text-sm">Webhook Verification</h4>
              <p className="text-text-secondary text-[11px] leading-relaxed">
                Cryptographic HMAC SHA256 signature verification on Razorpay events to prevent payment spoofing.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-border bg-surface space-y-2">
              <Server className="w-5 h-5 text-emerald-500" />
              <h4 className="font-bold text-text-primary text-sm">Zero Secret Exposure</h4>
              <p className="text-text-secondary text-[11px] leading-relaxed">
                Private API keys, database connection strings, and webhook secrets are quarantined exclusively to server runtimes.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* ========================================================================= */}
      {/* 20 & 47 & 48 ENGINEERING CHALLENGES (CHALLENGE / DECISION / RESULT) */}
      {/* ========================================================================= */}
      <Container size="wide" id="engineering">
        <SectionHeader
          eyebrow="Engineering Depth"
          title="Problems solved while building the product."
          description="Real-world software engineering involves trade-offs and edge cases. Here are three technical hurdles solved during the development of CollectAI."
          align="left"
        />

        <div className="space-y-8 mt-12 font-mono text-xs">
          {/* Challenge 1 */}
          <div className="p-6 sm:p-8 rounded-3xl border border-border bg-surface space-y-4 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-accent-muted text-accent font-bold">
                CHALLENGE 01
              </span>
              <h4 className="font-bold text-base text-text-primary">
                Financial Aging Cohort Calculations & Database Latency
              </h4>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
              <div className="p-4 rounded-xl bg-surface-muted/60 border border-border space-y-1">
                <span className="text-[10px] text-text-tertiary uppercase font-bold block">The Difficulty</span>
                <p className="text-text-secondary text-[11px] leading-relaxed">
                  Computing aging brackets (0–30, 31–60, 61–90, 90+ days) across thousands of invoices on every page request caused high database CPU usage and slow response times.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-muted/60 border border-border space-y-1">
                <span className="text-[10px] text-accent uppercase font-bold block">The Decision</span>
                <p className="text-text-secondary text-[11px] leading-relaxed">
                  Created compound database indexes on <code className="text-accent">(org_id, status, due_date)</code> and materialized cohort groupings into cached database views refreshed on invoice mutations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-1">
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 uppercase font-bold block">The Technical Result</span>
                <p className="text-emerald-700 dark:text-emerald-300 text-[11px] leading-relaxed">
                  Aging schedule dashboard load times dropped from 840ms to under 45ms, maintaining instant sub-second page rendering even with dense multi-currency tables.
                </p>
              </div>
            </div>
          </div>

          {/* Challenge 2 */}
          <div className="p-6 sm:p-8 rounded-3xl border border-border bg-surface space-y-4 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-accent-muted text-accent font-bold">
                CHALLENGE 02
              </span>
              <h4 className="font-bold text-base text-text-primary">
                Multi-Tenant Database Isolation with Row Level Security
              </h4>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
              <div className="p-4 rounded-xl bg-surface-muted/60 border border-border space-y-1">
                <span className="text-[10px] text-text-tertiary uppercase font-bold block">The Difficulty</span>
                <p className="text-text-secondary text-[11px] leading-relaxed">
                  Relying purely on application middleware for tenant isolation leaves open the risk of developer oversight in individual query endpoints.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-muted/60 border border-border space-y-1">
                <span className="text-[10px] text-accent uppercase font-bold block">The Decision</span>
                <p className="text-text-secondary text-[11px] leading-relaxed">
                  Implemented PostgreSQL Row Level Security (RLS) policies linking <code className="text-accent">auth.uid()</code> to verified organization memberships, making data isolation native to the database engine.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-1">
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 uppercase font-bold block">The Technical Result</span>
                <p className="text-emerald-700 dark:text-emerald-300 text-[11px] leading-relaxed">
                  Zero possibility of cross-tenant data leakage. Automated test suites verify that attempting queries across organization boundaries fails unconditionally.
                </p>
              </div>
            </div>
          </div>

          {/* Challenge 3 */}
          <div className="p-6 sm:p-8 rounded-3xl border border-border bg-surface space-y-4 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-accent-muted text-accent font-bold">
                CHALLENGE 03
              </span>
              <h4 className="font-bold text-base text-text-primary">
                Safe Human-in-the-Loop AI Tool Calling
              </h4>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
              <div className="p-4 rounded-xl bg-surface-muted/60 border border-border space-y-1">
                <span className="text-[10px] text-text-tertiary uppercase font-bold block">The Difficulty</span>
                <p className="text-text-secondary text-[11px] leading-relaxed">
                  Allowing an LLM to autonomously trigger financial emails or escalate invoices creates hallucination risk and client relationship damage.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-muted/60 border border-border space-y-1">
                <span className="text-[10px] text-accent uppercase font-bold block">The Decision</span>
                <p className="text-text-secondary text-[11px] leading-relaxed">
                  Structured AI outputs as strictly validated JSON draft objects deposited into an approval queue rather than executing direct communication sends.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-1">
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 uppercase font-bold block">The Technical Result</span>
                <p className="text-emerald-700 dark:text-emerald-300 text-[11px] leading-relaxed">
                  Finance teams gain 90% time savings on drafting reminder copy while retaining 100% human oversight before any communication leaves the organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* ========================================================================= */}
      {/* 21 & 49 WHAT I BUILT / SCOPE OF OWNERSHIP */}
      {/* ========================================================================= */}
      <Container size="wide">
        <div className="rounded-3xl border border-border bg-surface p-6 sm:p-10 space-y-8 font-mono text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
            <div className="space-y-1">
              <span className="text-[10px] text-accent uppercase font-bold block">Scope of Ownership</span>
              <h3 className="font-bold text-lg text-text-primary">What I designed and built for CollectAI</h3>
            </div>
            <span className="text-emerald-500 font-semibold">100% Solo Architecture & Execution</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Product Strategy & Modeling', desc: 'Defined customer data models, aging logic, and collection workflow states.' },
              { title: 'UI/UX & Design System', desc: 'Engineered high-density dashboard layouts, responsive tables, and typography scale.' },
              { title: 'Full-Stack Next.js 15', desc: 'Developed type-safe frontend, server components, and responsive navigation.' },
              { title: 'Database Architecture', desc: 'Designed PostgreSQL schema, indexes, migrations, and Row Level Security policies.' },
              { title: 'AI Integration & Prompts', desc: 'Engineered AI Collector prompts, tone parameters, and structured JSON schemas.' },
              { title: 'Payment Webhook Engine', desc: 'Integrated Razorpay dynamic checkout links and real-time ledger settlement.' },
            ].map((item) => (
              <div key={item.title} className="p-4 rounded-xl border border-border bg-surface-muted/60 space-y-1">
                <div className="flex items-center gap-2 font-bold text-text-primary">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>{item.title}</span>
                </div>
                <p className="text-text-secondary text-[11px] leading-relaxed pt-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
