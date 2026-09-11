'use client';

import * as React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Search, 
  Compass, 
  Database, 
  Palette, 
  Code2, 
  CheckCircle2, 
  Rocket, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  Eye, 
  FileCode2, 
  ChevronRight,
  Sparkles,
  Layers,
  HelpCircle,
  Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { trackEvent } from '@/lib/analytics';

export interface ProcessStage {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  timelineEstimate: string;
  icon: React.ComponentType<{ className?: string }>;
  objective: string;
  deliverables: string[];
  clientInvolvement: string;
  embeddedDisciplines: {
    name: 'Security' | 'Responsiveness' | 'Accessibility' | 'Performance';
    detail: string;
  }[];
}

export const detailedProcessStages: ProcessStage[] = [
  {
    id: 'discover',
    step: '01',
    title: 'Discover',
    subtitle: 'Commercial & Requirements Alignment',
    timelineEstimate: 'Days 1–3',
    icon: Search,
    objective: 'Deconstruct your business model, target customer personas, primary operational friction, and quantitative goals before writing code.',
    deliverables: [
      'Commercial Goals & Unit Economics Map',
      'Target User Persona Workflows',
      'Technical Constraints & Dependency Audit',
      'Initial Product Scope Brief',
    ],
    clientInvolvement: 'Kickoff discovery interview (45–60 min), sharing existing documentation or competitor benchmarks.',
    embeddedDisciplines: [
      {
        name: 'Performance',
        detail: 'Identify latency-critical workflows early to determine caching and database indexing strategies.',
      },
    ],
  },
  {
    id: 'define',
    step: '02',
    title: 'Define',
    subtitle: 'Feature Scoping & MVP Boundaries',
    timelineEstimate: 'Days 3–6',
    icon: Compass,
    objective: 'Ruthlessly prioritize core functionality into Must-Have Production Core vs Stage 2 Deferrals, eliminating scope creep.',
    deliverables: [
      'Prioritized Feature Matrix (Must-Have vs Later)',
      'Step-by-Step User Journey State Trees',
      'Information Architecture & Navigation Taxonomy',
      'Milestone Timeline & Acceptance Criteria',
    ],
    clientInvolvement: 'Review and sign-off on the scope boundaries and prioritized milestone plan.',
    embeddedDisciplines: [
      {
        name: 'Accessibility',
        detail: 'Define predictable keyboard navigation patterns and semantic landmark hierarchy during journey mapping.',
      },
    ],
  },
  {
    id: 'architect',
    step: '03',
    title: 'Architect',
    subtitle: 'Data Schema, RLS & Security Boundaries',
    timelineEstimate: 'Week 2',
    icon: Database,
    objective: 'Engineer the foundational data model, relational foreign keys, multi-tenant isolation, and third-party API contracts.',
    deliverables: [
      'Normalized PostgreSQL Entity Relationship Diagram (ERD)',
      'Supabase Row Level Security (RLS) Policy Specifications',
      'Authentication & RBAC Permission Matrix',
      'External API & Webhook Contract Documentation',
    ],
    clientInvolvement: 'Approve permission tiers (Admin, Member, Billing) and provide required third-party API keys.',
    embeddedDisciplines: [
      {
        name: 'Security',
        detail: 'Tenant data isolation is enforced at the database engine level via PostgreSQL RLS policies from day one.',
      },
      {
        name: 'Performance',
        detail: 'Composite index planning and relational query planning to guarantee sub-50ms database responses.',
      },
    ],
  },
  {
    id: 'design',
    step: '04',
    title: 'Design',
    subtitle: 'Tokenized UI System & Operational Ergonomics',
    timelineEstimate: 'Weeks 2–3',
    icon: Palette,
    objective: 'Craft high-density operational dashboards and design system tokens with Apple-inspired visual restraint and WCAG accessibility.',
    deliverables: [
      'Tokenized Design System (Tailwind CSS, typography scale, surface colors)',
      'Responsive Operational Dashboard Layouts',
      'Complete Interaction States (Loading skeletons, empty states, error triggers)',
      'Interactive Staging Prototype Preview',
    ],
    clientInvolvement: 'Provide feedback on interactive visual flows via Loom or private staging URL.',
    embeddedDisciplines: [
      {
        name: 'Responsiveness',
        detail: 'Component designs incorporate fluid typography clamp scaling across 9 viewport targets (360px to 1728px).',
      },
      {
        name: 'Accessibility',
        detail: 'Strict adherence to WCAG 2.1 AA 4.5:1 contrast ratios and visible focus rings.',
      },
    ],
  },
  {
    id: 'build',
    step: '05',
    title: 'Build',
    subtitle: 'Full-Stack Implementation & Integration',
    timelineEstimate: 'Weeks 3–6',
    icon: Code2,
    objective: 'Write clean, zero-warning TypeScript code utilizing Next.js 16 App Router, Supabase Server Actions, AI pipelines, and Stripe webhooks.',
    deliverables: [
      'Strict Type-Safe TypeScript Codebase',
      'Server Actions with Zod Schema Validation',
      'Automated Database Migrations & Seed Scripts',
      'Integrated Stripe / Payment Webhook Handlers',
    ],
    clientInvolvement: 'Participate in weekly sprint demo recordings and test preview branches.',
    embeddedDisciplines: [
      {
        name: 'Security',
        detail: 'Server action inputs are strictly sanitized with Zod schemas; API secrets are isolated in secure environment vaults.',
      },
      {
        name: 'Performance',
        detail: 'Next.js server-first rendering eliminates excess client bundle payloads for instant first contentful paint.',
      },
    ],
  },
  {
    id: 'validate',
    step: '06',
    title: 'Validate',
    subtitle: 'Typecheck, Security Tests & Device QA',
    timelineEstimate: 'Week 6',
    icon: CheckCircle2,
    objective: 'Subject the entire application to rigorous automated static analysis, cross-tenant penetration audits, and real device QA.',
    deliverables: [
      'Zero-Error TypeScript & ESLint Verification Log',
      'Multi-Tenant RLS Security Test Results',
      '9-Breakpoint Responsive Verification Report',
      'Lighthouse Performance Audit Report (90+ Targets)',
    ],
    clientInvolvement: 'Perform user acceptance testing (UAT) on staging with your team using real operational scenarios.',
    embeddedDisciplines: [
      {
        name: 'Security',
        detail: 'Simulated cross-tenant exploit attempts to verify that users cannot query another workspace’s data.',
      },
      {
        name: 'Responsiveness',
        detail: 'Audit on actual physical mobile devices (iPhone, Pixel), iPads, and 4K displays.',
      },
    ],
  },
  {
    id: 'launch',
    step: '07',
    title: 'Launch',
    subtitle: 'Production Cutover & Deployment',
    timelineEstimate: 'Week 7',
    icon: Rocket,
    objective: 'Deploy the hardened application to Vercel global edge network, configure custom domain SSL certificates, and execute handover.',
    deliverables: [
      'Live Production URL & Edge CDN Configuration',
      'Custom Domain DNS & SSL Certificate Setup',
      'Production Environment Secrets Vault',
      'Repository Handover & Technical Documentation',
    ],
    clientInvolvement: 'Update DNS records or grant domain access for immediate live production launch.',
    embeddedDisciplines: [
      {
        name: 'Security',
        detail: 'SSL pinning, HTTP security headers (CSP, HSTS), and rate limiting on public auth endpoints.',
      },
    ],
  },
  {
    id: 'iterate',
    step: '08',
    title: 'Iterate',
    subtitle: 'Telemetry Analysis & Phased Expansion',
    timelineEstimate: 'Post-Launch',
    icon: TrendingUp,
    objective: 'Observe real user interactions via telemetry, optimize emergent bottlenecks, and execute agreed roadmap enhancements.',
    deliverables: [
      'Post-Launch Telemetry & Conversion Review',
      'Database Query Latency Optimization',
      'Phase 2 Feature Roadmap Recommendations',
      'Ongoing Technical Advisory (Under Agreed Scope)',
    ],
    clientInvolvement: 'Share user feedback, conversion metrics, and feature requests for prioritization.',
    embeddedDisciplines: [
      {
        name: 'Performance',
        detail: 'Continuous telemetry monitoring of real-world TTFB, API response times, and database query costs.',
      },
    ],
  },
];

export function InteractiveProcessFlow() {
  const [activeStageId, setActiveStageId] = React.useState<string>('discover');
  const shouldReduceMotion = useReducedMotion();

  const currentStage =
    detailedProcessStages.find((s) => s.id === activeStageId) || detailedProcessStages[0];

  return (
    <div className="space-y-12">
      {/* Visual Navigation Bar (Horizontal on Desktop, Scrollable/Grid on Mobile) */}
      <div className="rounded-2xl border border-border/80 bg-surface-50/70 dark:bg-surface-900/70 p-4 backdrop-blur-md">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {detailedProcessStages.map((stage) => {
            const Icon = stage.icon;
            const isActive = stage.id === activeStageId;

            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => {
                  setActiveStageId(stage.id);
                  trackEvent('process_viewed', { stage: stage.title });
                }}
                className={cn(
                  'p-3 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between space-y-2 group',
                  isActive
                    ? 'border-accent bg-accent-muted/40 shadow-sm'
                    : 'border-border/40 bg-surface-50/50 dark:bg-surface-950/40 hover:border-border hover:bg-surface-100/50'
                )}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      'font-mono text-xs font-bold px-1.5 py-0.5 rounded',
                      isActive
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-surface-200 dark:bg-surface-800 text-muted-foreground'
                    )}
                  >
                    {stage.step}
                  </span>
                  <Icon
                    className={cn(
                      'w-3.5 h-3.5 transition-colors',
                      isActive ? 'text-accent' : 'text-muted-foreground group-hover:text-foreground'
                    )}
                  />
                </div>
                <div className="text-xs font-bold text-foreground truncate">{stage.title}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Stage Deep-Dive Card */}
      <div className="rounded-3xl border border-border/80 bg-surface-50/80 dark:bg-surface-900/80 p-6 md:p-10 shadow-xl overflow-hidden min-h-[420px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage.id}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            {/* Top Meta Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-border/60 gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-base font-bold text-accent px-3 py-1 rounded-lg bg-accent-muted border border-accent/20">
                  STAGE {currentStage.step}
                </span>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                    {currentStage.title}
                  </h3>
                  <p className="text-xs font-mono text-accent">{currentStage.subtitle}</p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground bg-surface-100 dark:bg-surface-800 px-3 py-1.5 rounded-full border border-border/50 self-start sm:self-auto">
                <Clock className="w-3.5 h-3.5 text-accent" />
                <span>Timeline: {currentStage.timelineEstimate}</span>
              </div>
            </div>

            {/* Objective */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                Stage Objective
              </span>
              <p className="text-base sm:text-lg text-foreground font-medium leading-relaxed">
                {currentStage.objective}
              </p>
            </div>

            {/* Two-Column Breakdown: Deliverables vs Embedded Disciplines */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-border/60">
              {/* Deliverables List */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-foreground">
                  <FileCode2 className="w-4 h-4 text-accent" />
                  <span>Concrete Deliverables Received</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentStage.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-surface-100/70 dark:bg-surface-950/70 border border-border/60 text-xs text-foreground flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Embedded Disciplines & Client Role */}
              <div className="lg:col-span-5 space-y-5">
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold uppercase text-foreground block">
                    Embedded Quality Guardrails
                  </span>
                  <div className="space-y-2">
                    {currentStage.embeddedDisciplines.map((disc, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-surface-100/50 dark:bg-surface-950/50 border border-border/60 space-y-1"
                      >
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-accent-muted text-accent font-bold">
                          {disc.name}
                        </span>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {disc.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-surface-100/60 dark:bg-surface-950/60 border border-border/60 space-y-1.5">
                  <span className="text-xs font-mono font-bold uppercase text-foreground block">
                    Client Time Commitment
                  </span>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {currentStage.clientInvolvement}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// ==========================================
// SCOPE MANAGEMENT & TIMELINE REALITY
// ==========================================
export function ProcessTimelineAndScope() {
  const scopeTiers = [
    {
      type: 'Proof of Concept / Prototype',
      duration: '1–2 Weeks',
      scope: 'Single core workflow, isolated database schema, functional prototype to validate with initial users.',
      idealFor: 'Founders testing feasibility before committing to full production build.',
    },
    {
      type: 'Production SaaS MVP',
      duration: '3–5 Weeks',
      scope: 'Multi-tenant auth, core business workflow, Stripe billing, PostgreSQL RLS security, and production deployment.',
      idealFor: 'Early-stage startups ready to acquire paying pilot customers.',
    },
    {
      type: 'Comprehensive SaaS Platform',
      duration: '6–10 Weeks',
      scope: 'Complex workflow engines, AI copilot pipelines, advanced analytics dashboards, RBAC permissions, and integrations.',
      idealFor: 'Funded startups and established businesses launching serious commercial software.',
    },
  ];

  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
          Execution Predictability
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Engagement Timelines & Scope Reality
        </h2>
        <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
          I do not promise fantasy 48-hour turnarounds for complex enterprise software. Real SaaS engineering requires deliberate architectural scoping.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {scopeTiers.map((tier) => (
          <div
            key={tier.type}
            className="p-6 rounded-2xl border border-border/80 bg-surface-50/60 dark:bg-surface-900/60 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-accent font-bold">{tier.duration}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{tier.type}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{tier.scope}</p>
            </div>

            <div className="pt-4 border-t border-border/60">
              <span className="text-[11px] font-mono text-muted-foreground uppercase block mb-1">
                Ideal For:
              </span>
              <span className="text-xs font-medium text-foreground">{tier.idealFor}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Scope Evolution & Change Management Box */}
      <div className="p-8 rounded-2xl border border-border/80 bg-surface-50/70 dark:bg-surface-950/70 space-y-4">
        <div className="flex items-center gap-3">
          <Layers className="w-5 h-5 text-accent" />
          <h3 className="text-xl font-bold text-foreground">
            How Scope Changes Are Handled
          </h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
          It is completely normal for new ideas to emerge once you interact with live software on staging. When a client requests a new feature mid-sprint, we do not dismiss it. Instead, we document the addition and transparently evaluate its impact on <strong className="text-foreground">timeline, complexity, and budget</strong>. You decide whether to swap an existing low-priority feature, add it to a subsequent milestone, or expand the sprint scope.
        </p>
      </div>
    </div>
  );
}

// ==========================================
// PROCESS FAQS
// ==========================================
export function ProcessFAQs() {
  const [openIdx, setOpenIdx] = React.useState<number | null>(0);

  const faqs = [
    {
      q: 'How do we communicate throughout the project?',
      a: 'We communicate primarily async through Slack and Loom video walkthroughs, supplemented by weekly milestone check-ins. You receive clear written updates, staging links to click and test, and direct answers from the senior developer building your code.',
    },
    {
      q: 'What assets or accounts do I need to provide before we start?',
      a: 'During Stage 01 (Discover), we gather necessary credentials for Supabase, GitHub, Vercel, and Stripe. If you have existing brand tokens, Figma files, or domain DNS access, we incorporate those seamlessly.',
    },
    {
      q: 'Do I own the full intellectual property and code?',
      a: 'Yes, 100%. Upon final milestone completion and invoice settlement, all code repositories, database schemas, deployment pipelines, and design files are transferred entirely to your organizational accounts with zero proprietary lock-in.',
    },
    {
      q: 'How do you handle revisions and feedback?',
      a: 'Each stage includes built-in review gates. You receive interactive staging URLs on Vercel to click through real states, test edge cases, and submit feedback before that milestone is finalized.',
    },
    {
      q: 'Can we build in stages or start with an MVP?',
      a: 'Yes, this is my recommended approach for early-stage products. We build a disciplined, high-quality production MVP (typically 3–5 weeks) to test with real users, then prioritize subsequent roadmap features based on empirical data.',
    },
    {
      q: 'What happens after launch?',
      a: 'Every launch includes a standard handover period covering bug fixes and deployment stability. If you require ongoing feature development, architectural advisory, or performance optimization, we can transition into an agreed monthly advisory or sprint block.',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
          Common Inquiries
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Frequently Asked Questions About the Process
        </h2>
        <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
          Transparent answers about expectations, communication, ownership, and revisions.
        </p>
      </div>

      <div className="divide-y divide-border/60 border-y border-border/60">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={faq.q} className="py-5">
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full text-left flex items-center justify-between gap-4 group"
              >
                <span className="text-base sm:text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                  {faq.q}
                </span>
                <span
                  className={cn(
                    'font-mono text-base text-accent transition-transform duration-200',
                    isOpen && 'rotate-45'
                  )}
                >
                  +
                </span>
              </button>

              {isOpen && (
                <div className="pt-3 pr-8 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
