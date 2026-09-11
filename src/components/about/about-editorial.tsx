'use client';

import * as React from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Check, 
  Code2, 
  Database, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  Workflow, 
  Cpu, 
  Zap, 
  Lock, 
  Smartphone, 
  Eye, 
  Sliders, 
  ExternalLink,
  Layers2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/lib/analytics';
import { cn } from '@/lib/utils';

// ==========================================
// 4 CORE EDITORIAL PRINCIPLES (NO GENERIC CARDS)
// ==========================================
const corePrinciples = [
  {
    number: '01',
    title: 'Business Before Features',
    premise: 'Understand the commercial problem before writing a single line of code.',
    narrative:
      'Most SaaS products do not fail because the database was too slow or a button lacked animation. They fail because founders and engineers built the wrong workflow for a user who had no incentive to adopt it. Before architecting schemas or selecting component libraries, we ruthlessly deconstruct the monetization engine, unit economics, conversion friction, and primary user habit loops.',
    impact: 'Prevents wasteful feature bloat and guarantees engineering aligns with commercial traction.',
  },
  {
    number: '02',
    title: 'Systems Before Screens',
    premise: 'Think about data models, relational entities, and state machines before UI mockups.',
    narrative:
      'A software interface is merely a visual projection of an underlying state machine. Designing pretty screens in isolation leads to brittle frontend code and post-launch architectural rewrites. We map relational entities, permission matrices, foreign key constraints, and transactional boundaries first—ensuring every screen has structural integrity.',
    impact: 'Eliminates structural rewrites and creates predictable, extensible domain models.',
  },
  {
    number: '03',
    title: 'Clarity Before Complexity',
    premise: 'Complex SaaS workflows must feel completely understandable to the end user.',
    narrative:
      'Enterprise tools, B2B fintech, and AI workflows carry inherent operational density. The engineer’s responsibility is not to dump that cognitive load onto the operator, but to engineer progressive disclosure, contextual hierarchy, and deterministic feedback. Dense operational data should feel calm, intuitive, and actionable.',
    impact: 'Drives high user retention, lowers onboarding friction, and eliminates support tickets.',
  },
  {
    number: '04',
    title: 'Production Before Polish Alone',
    premise: 'Visual restraint is essential, but it must be backed by hardened infrastructure.',
    narrative:
      'A sleek interface on an unsecured database is a liability. Every application is built with production standards from sprint one: Row Level Security (RLS) data isolation, end-to-end TypeScript contracts, sub-second latency, accessible DOM hierarchies (WCAG 2.1 AA), and zero-warning deployment pipelines.',
    impact: 'Protects customer data, prevents regressions, and scales cleanly without fragile hacks.',
  },
];

export function EditorialPrinciples() {
  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
          Core Methodology
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          How I Think About Products
        </h2>
        <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
          Four non-negotiable mental models that govern how product strategy, design systems, and engineering intersect.
        </p>
      </div>

      <div className="divide-y divide-border/70 border-y border-border/70">
        {corePrinciples.map((item) => (
          <div
            key={item.number}
            className="py-10 md:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start group"
          >
            {/* Massive Numbering & Sticky Title */}
            <div className="lg:col-span-4 space-y-2">
              <span className="font-mono text-4xl sm:text-5xl font-extrabold text-foreground/20 group-hover:text-accent transition-colors block">
                {item.number}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs font-mono text-accent font-medium leading-relaxed">
                {item.premise}
              </p>
            </div>

            {/* Narrative & Concrete Impact */}
            <div className="lg:col-span-8 space-y-5">
              <p className="text-base text-muted-foreground leading-relaxed">
                {item.narrative}
              </p>
              <div className="p-4 rounded-xl bg-surface-100/60 dark:bg-surface-900/60 border border-border/60 flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs font-mono text-foreground/90">
                  <strong className="text-foreground">Architectural Outcome:</strong> {item.impact}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// CAPABILITIES TIED TO VERIFIED PROOF
// ==========================================
interface CapabilityGroup {
  name: string;
  focus: string;
  items: string[];
  proofLabel: string;
  proofType: 'REAL PRODUCT' | 'SELF-DIRECTED PRODUCT CONCEPTS';
  proofDescription: string;
  proofHref: string;
}

const capabilityGroups: CapabilityGroup[] = [
  {
    name: 'Product Architecture',
    focus: 'Commercial clarity & system boundaries',
    items: [
      'Problem definition & monetization modeling',
      'MVP scope prioritization (Must-Have vs Later)',
      'Multi-tenant workspace isolation models',
      'User journey mapping & state transition specs',
    ],
    proofLabel: 'CollectAI',
    proofType: 'REAL PRODUCT',
    proofDescription: 'Accounts receivable collection automation platform with multi-tenant org hierarchy.',
    proofHref: '/work/collectai',
  },
  {
    name: 'UI/UX & Design Systems',
    focus: 'High-density operational ergonomics',
    items: [
      'Tokenized design systems (Tailwind CSS, Radix UI)',
      'Data-dense analytics dashboards & charts',
      'Fluid responsive viewports (360px to 1728px)',
      'Accessible interaction hierarchy (WCAG 2.1 AA)',
    ],
    proofLabel: 'AI CFO & Copilot',
    proofType: 'REAL PRODUCT',
    proofDescription: 'Data-dense financial intelligence cockpit with multi-currency cash flow models.',
    proofHref: '/work/ai-cfo',
  },
  {
    name: 'Full-Stack Engineering',
    focus: 'End-to-end type safety & edge execution',
    items: [
      'Next.js 16 App Router & Server Actions',
      'TypeScript strict mode across entire stack',
      'PostgreSQL database design & complex migrations',
      'Row Level Security (RLS) multi-tenant protection',
    ],
    proofLabel: 'CollectAI & AI CFO',
    proofType: 'REAL PRODUCT',
    proofDescription: 'Zero-warning builds, strict TypeScript schemas, and instant optimistic mutations.',
    proofHref: '/work',
  },
  {
    name: 'Platform & Infrastructure',
    focus: 'Security, payments & reliable automation',
    items: [
      'Stripe & Razorpay recurring subscription webhooks',
      'Edge middleware authentication (Clerk, Supabase)',
      'Idempotent background job processing',
      'Automated CI/CD deployments on Vercel & AWS',
    ],
    proofLabel: 'LedgerFlow & CloudShield',
    proofType: 'SELF-DIRECTED PRODUCT CONCEPTS',
    proofDescription: 'Subscription checkout pipelines, webhook telemetry, and RBAC admin consoles.',
    proofHref: '/lab',
  },
  {
    name: 'Production AI Integration',
    focus: 'Deterministic workflows & verified output',
    items: [
      'LLM orchestration (OpenAI, Anthropic, Claude)',
      'Zod-validated JSON output extraction',
      'Hybrid pgvector semantic retrieval (RAG)',
      'Human-in-the-loop review & approval gates',
    ],
    proofLabel: 'Cliniq AI & Aura AI',
    proofType: 'SELF-DIRECTED PRODUCT CONCEPTS',
    proofDescription: 'Deterministic clinical documentation and enterprise marketing asset generation.',
    proofHref: '/lab',
  },
];

export function CapabilitiesWithProof() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
          Verified Execution
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          What I Build — Connected to Concrete Proof
        </h2>
        <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
          I do not list abstract buzzwords. Every capability in my stack is validated against real working software and documented architectural implementations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilityGroups.map((group) => (
          <div
            key={group.name}
            className="p-6 rounded-2xl border border-border/80 bg-surface-50/60 dark:bg-surface-900/60 flex flex-col justify-between space-y-6 hover:border-accent/40 transition-colors"
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {group.name}
                </h3>
                <p className="text-xs font-mono text-accent">
                  {group.focus}
                </p>
              </div>

              <ul className="space-y-2.5">
                {group.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                    <span className="text-accent font-mono select-none">&bull;</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Proof Connector Card */}
            <div className="pt-4 border-t border-border/60 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                  Demonstrated Proof
                </span>
                <span
                  className={cn(
                    'text-[10px] font-mono px-2 py-0.5 rounded-full font-bold',
                    group.proofType === 'REAL PRODUCT'
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                      : 'bg-accent/10 text-accent border border-accent/20'
                  )}
                >
                  {group.proofType}
                </span>
              </div>

              <Link
                href={group.proofHref}
                onClick={() => trackEvent('about_work_clicked', { proof: group.proofLabel })}
                className="group/link flex items-center justify-between p-2.5 rounded-xl bg-surface-100 dark:bg-surface-950 border border-border/60 hover:border-accent/50 transition-colors"
              >
                <div>
                  <div className="text-xs font-bold text-foreground group-hover/link:text-accent transition-colors flex items-center gap-1.5">
                    <span>{group.proofLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[11px] text-muted-foreground line-clamp-1">
                    {group.proofDescription}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// TECHNICAL PHILOSOPHY & CONTEXTUAL STACK
// ==========================================
export function TechnicalPhilosophy() {
  const engineeringRules = [
    {
      title: 'End-to-End Type Safety',
      desc: 'Shared TypeScript types between database queries, server mutations, and client interfaces eliminate runtime payload mismatches.',
      icon: Code2,
    },
    {
      title: 'Row Level Security by Default',
      desc: 'Multi-tenant database tables enforce tenant isolation at the PostgreSQL engine level, preventing cross-tenant data leaks.',
      icon: ShieldCheck,
    },
    {
      title: 'Server-First Component Architecture',
      desc: 'Zero-bundle server components for high-speed initial paint, with isolated reactive client islands only where state requires it.',
      icon: Cpu,
    },
    {
      title: 'Performance-Focused Architecture',
      desc: 'Optimized image pipelines, font subsetting, edge caching, and atomic queries targeted to achieve 95+ Core Web Vitals.',
      icon: Zap,
    },
    {
      title: 'Fluid Mathematical Responsiveness',
      desc: 'Interfaces styled with CSS clamp and responsive container queries across 9 audited viewports from 360px to 1728px.',
      icon: Smartphone,
    },
    {
      title: 'Accessible Semantic Structure',
      desc: 'WCAG 2.1 AA contrast ratios, native landmark elements, ARIA dialog states, and predictable keyboard focus order.',
      icon: Eye,
    },
  ];

  const stackCategories = [
    {
      layer: 'Interface Layer',
      tech: 'TypeScript, Next.js 16 (App Router), React 19, Tailwind CSS, Framer Motion',
      rationale: 'Sub-second server rendering, fluid component animation, and zero-runtime CSS footprint.',
    },
    {
      layer: 'Application & Logic',
      tech: 'Node.js, Next.js Server Actions, Zod Schema Validation',
      rationale: 'Deterministic contract enforcement and secure server execution without separate API boilerplate.',
    },
    {
      layer: 'Data & Security',
      tech: 'PostgreSQL, Supabase, Row Level Security (RLS), Prisma / Drizzle',
      rationale: 'Relational data integrity, ACID transactional consistency, and enterprise tenant boundaries.',
    },
    {
      layer: 'Platform & Infrastructure',
      tech: 'Vercel Edge Network, Cloudflare CDN, AWS S3 / Cloud Storage',
      rationale: 'Global edge distribution, automated branch preview deployments, and sub-100ms TTFB.',
    },
    {
      layer: 'Payments & Automation',
      tech: 'Stripe, Razorpay, Webhook Handlers, Resend Transactional Email',
      rationale: 'Idempotent transaction state reconciliation and reliable customer lifecycle messaging.',
    },
  ];

  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
          Engineering Rigor
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          How I Engineer Products
        </h2>
        <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
          Technology is selected around product requirements and longevity rather than used as superficial decoration.
        </p>
      </div>

      {/* 6 Engineering Standards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {engineeringRules.map((rule) => {
          const Icon = rule.icon;
          return (
            <div
              key={rule.title}
              className="p-6 rounded-2xl border border-border/70 bg-surface-50/40 dark:bg-surface-900/40 space-y-3"
            >
              <div className="p-2.5 rounded-lg bg-surface-100 dark:bg-surface-800 text-foreground w-fit border border-border/50">
                <Icon className="w-4 h-4 text-accent" />
              </div>
              <h3 className="text-base font-bold text-foreground">
                {rule.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {rule.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Technology in Context */}
      <div className="p-8 rounded-2xl border border-border/80 bg-surface-50/70 dark:bg-surface-950/70 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-border/60 gap-4">
          <div>
            <h3 className="text-xl font-bold text-foreground">
              Production Stack in Context
            </h3>
            <p className="text-xs text-muted-foreground font-mono mt-1">
              Every tool in this stack is chosen for stability, developer ergonomics, and international scalability.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-muted text-accent text-xs font-mono border border-accent/20 shrink-0">
            <span>Zero Vendor Lock-in</span>
          </div>
        </div>

        <div className="divide-y divide-border/60">
          {stackCategories.map((cat) => (
            <div key={cat.layer} className="py-4 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline">
              <div className="md:col-span-3 text-xs font-mono uppercase tracking-wider font-bold text-foreground">
                {cat.layer}
              </div>
              <div className="md:col-span-4 text-xs font-bold text-accent font-mono">
                {cat.tech}
              </div>
              <div className="md:col-span-5 text-xs text-muted-foreground leading-relaxed">
                {cat.rationale}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// CLIENT COLLABORATION & MILESTONE TRANSPARENCY
// ==========================================
export function ClientCollaborationSection() {
  const collaborationPillars = [
    {
      title: 'Async-First, High-Context Updates',
      desc: 'Regular milestone video walkthroughs and written progress logs eliminate unproductive status meetings while keeping every decision transparent.',
    },
    {
      title: 'Fixed Sprint Scope & Protection',
      desc: 'Features and schemas are documented before implementation. If new ideas emerge mid-sprint, we assess the impact on timeline and budget before altering active work.',
    },
    {
      title: 'Direct Senior Access (No Bloat)',
      desc: 'You work directly with the developer architecting and coding your software. Zero account executives, junior delegators, or fragmented handoffs.',
    },
    {
      title: 'Real-Time Staging Previews',
      desc: 'Every feature branch generates a private Vercel preview URL where you can interact with live software, test edge cases, and approve functionality.',
    },
  ];

  const pipelineStages = [
    { name: 'Planned', desc: 'Requirements & ERD approved' },
    { name: 'In Progress', desc: 'Active feature branch implementation' },
    { name: 'Review', desc: 'Staging preview & interactive QA' },
    { name: 'Validated', desc: 'Automated typecheck & security verified' },
    { name: 'Shipped', desc: 'Merged to main & deployed to production' },
  ];

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
          Working Relationship
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          What Working Together Looks Like
        </h2>
        <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
          Clear communication, visible progress, and professional boundaries ensure projects land on schedule without friction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {collaborationPillars.map((pillar) => (
          <div
            key={pillar.title}
            className="p-6 rounded-2xl border border-border/80 bg-surface-50/50 dark:bg-surface-900/50 space-y-3"
          >
            <h3 className="text-base font-bold text-foreground">
              {pillar.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Project Transparency Pipeline */}
      <div className="p-6 md:p-8 rounded-2xl border border-border/80 bg-surface-50/70 dark:bg-surface-950/70 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold uppercase text-foreground">
            Milestone Transparency Model
          </span>
          <span className="text-xs font-mono text-accent">5-Stage Verification Gate</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
          {pipelineStages.map((stg, i) => (
            <div
              key={stg.name}
              className="p-3.5 rounded-xl border border-border/60 bg-surface-50 dark:bg-surface-900 space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-accent font-bold">0{i + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
              <div className="text-xs font-bold text-foreground">{stg.name}</div>
              <div className="text-[11px] text-muted-foreground leading-snug">{stg.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// WHAT I OPTIMIZE FOR
// ==========================================
export function WhatIOptimizeFor() {
  const metrics = [
    { label: 'Clarity', desc: 'Unambiguous user workflows and intuitive data presentation.' },
    { label: 'Usability', desc: 'Effortless operational ergonomics for high-frequency workflows.' },
    { label: 'Maintainability', desc: 'Clean, modular, zero-warning TypeScript codebases.' },
    { label: 'Performance', desc: 'Sub-second TTFB, edge-cached assets, and low client overhead.' },
    { label: 'Security', desc: 'Row Level Security data isolation and strict input sanitization.' },
    { label: 'Extensibility', desc: 'Modular domain architectures ready for future feature scaling.' },
  ];

  return (
    <div className="p-8 rounded-3xl border border-border/80 bg-surface-50/50 dark:bg-surface-900/50 space-y-6">
      <div className="space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
          System Priorities
        </span>
        <h3 className="text-2xl font-bold text-foreground">
          What I Optimize For in Every Build
        </h3>
        <p className="text-xs text-muted-foreground font-mono">
          Strict production quality standards—engineered from day one, not patched in at the end.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-2">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="p-4 rounded-xl border border-border/60 bg-surface-50 dark:bg-surface-950 space-y-2"
          >
            <span className="text-xs font-mono font-bold uppercase text-accent block">
              {m.label}
            </span>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              {m.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
