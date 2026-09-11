'use client';

import * as React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Target, 
  Users, 
  GitBranch, 
  LayoutGrid, 
  Cpu, 
  Database, 
  Webhook, 
  Cloud, 
  Sparkles,
  Bot,
  CheckCircle2,
  ShieldCheck,
  Fingerprint
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ArchitectureNode {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  category: 'product' | 'design' | 'engineering' | 'infrastructure';
  icon: React.ComponentType<{ className?: string }>;
  details: string;
}

const architectureNodes: ArchitectureNode[] = [
  {
    id: 'problem',
    step: '01',
    title: 'Product Problem',
    subtitle: 'Commercial & user friction',
    category: 'product',
    icon: Target,
    details: 'Uncovering the root commercial inefficiency, user pain point, and quantified business outcome before touching code.',
  },
  {
    id: 'workflow',
    step: '02',
    title: 'User Workflow',
    subtitle: 'Human journey & decision states',
    category: 'product',
    icon: Users,
    details: 'Mapping step-by-step user journeys, permission states, and edge cases to eliminate friction before UI layout begins.',
  },
  {
    id: 'info-arch',
    step: '03',
    title: 'Information Architecture',
    subtitle: 'Hierarchy, entities & taxonomy',
    category: 'design',
    icon: GitBranch,
    details: 'Structuring content models, navigation taxonomy, and relational data trees for intuitive operational comprehension.',
  },
  {
    id: 'interface',
    step: '04',
    title: 'Interface Design System',
    subtitle: 'Tokens, ergonomics & states',
    category: 'design',
    icon: LayoutGrid,
    details: 'Building high-density, accessible UI components with strict spacing scales, typography hierarchy, and fluid responsiveness.',
  },
  {
    id: 'logic',
    step: '05',
    title: 'Application Logic',
    subtitle: 'Type-safe server actions & APIs',
    category: 'engineering',
    icon: Cpu,
    details: 'Writing end-to-end type-safe TypeScript handlers, deterministic state machines, and resilient error boundary handlers.',
  },
  {
    id: 'data',
    step: '06',
    title: 'Data & Security Layer',
    subtitle: 'PostgreSQL, RLS & migrations',
    category: 'engineering',
    icon: Database,
    details: 'Engineering relational schema tables, foreign key constraints, Row Level Security policies, and atomic transactions.',
  },
  {
    id: 'integrations',
    step: '07',
    title: 'Integrations & Webhooks',
    subtitle: 'Stripe, AI, Auth & external APIs',
    category: 'engineering',
    icon: Webhook,
    details: 'Connecting billing webhooks, LLM APIs, transactional email pipelines, and enterprise identity providers safely.',
  },
  {
    id: 'infrastructure',
    step: '08',
    title: 'Cloud Infrastructure',
    subtitle: 'Edge CDN, CI/CD & monitoring',
    category: 'infrastructure',
    icon: Cloud,
    details: 'Deploying to serverless edge clusters with automated CI/CD builds, SSL isolation, error logging, and high-availability caching.',
  },
];

export function ProductArchitectureVisual() {
  const [activeNode, setActiveNode] = React.useState<string>('problem');
  const shouldReduceMotion = useReducedMotion();

  const selectedNode = architectureNodes.find((n) => n.id === activeNode) || architectureNodes[0];

  return (
    <div className="w-full rounded-2xl border border-border/80 bg-surface-50/40 dark:bg-surface-900/40 p-6 md:p-8 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-border/60 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent font-semibold mb-1">
            <Cpu className="w-3.5 h-3.5" />
            <span>End-to-End System Integration</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            The Product-to-Production Pipeline
          </h3>
        </div>
        <p className="text-xs text-muted-foreground max-w-md font-mono">
          Select any phase to inspect how product thinking connects directly to engineering execution.
        </p>
      </div>

      {/* Interactive Node Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-start">
        {/* Stages Progression */}
        <div className="lg:col-span-7 space-y-2">
          {architectureNodes.map((node) => {
            const Icon = node.icon;
            const isSelected = node.id === activeNode;

            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setActiveNode(node.id)}
                className={cn(
                  'w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between group',
                  isSelected
                    ? 'border-accent/80 bg-accent-muted/40 shadow-sm'
                    : 'border-border/60 bg-surface-50/60 dark:bg-surface-950/40 hover:border-border hover:bg-surface-100/50'
                )}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <span
                    className={cn(
                      'font-mono text-xs px-2 py-0.5 rounded font-bold transition-colors',
                      isSelected
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-surface-200 dark:bg-surface-800 text-muted-foreground group-hover:text-foreground'
                    )}
                  >
                    {node.step}
                  </span>
                  <div className="p-2 rounded-lg bg-surface-100 dark:bg-surface-800 text-foreground border border-border/40 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-foreground truncate flex items-center gap-2">
                      {node.title}
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">{node.subtitle}</div>
                  </div>
                </div>

                <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded-full border border-border/60 text-muted-foreground shrink-0 hidden sm:inline-block">
                  {node.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Inspector Panel */}
        <div className="lg:col-span-5 sticky top-28">
          <div className="rounded-xl border border-accent/30 bg-surface-50 dark:bg-surface-950 p-6 shadow-lg min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedNode.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -6 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-5"
              >
                <div className="flex items-center justify-between border-b border-border/60 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-muted border border-accent/20">
                      STAGE {selectedNode.step}
                    </span>
                    <span className="text-xs font-mono uppercase text-muted-foreground">
                      {selectedNode.category}
                    </span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">
                    {selectedNode.title}
                  </h4>
                  <p className="text-xs font-mono text-accent">
                    {selectedNode.subtitle}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedNode.details}
                </p>

                <div className="pt-3 border-t border-border/60">
                  <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-2 font-semibold">
                    Guaranteed Output:
                  </div>
                  <div className="p-3 rounded-lg bg-surface-100/60 dark:bg-surface-900/60 border border-border/50 text-xs font-mono text-foreground flex items-start gap-2">
                    <span className="text-accent select-none">&rarr;</span>
                    <span>
                      {selectedNode.id === 'problem' && 'Validated commercial problem statement & success metrics.'}
                      {selectedNode.id === 'workflow' && 'Complete operational states & decision tree documentation.'}
                      {selectedNode.id === 'info-arch' && 'Content models, entity hierarchy & schema taxonomy map.'}
                      {selectedNode.id === 'interface' && 'Responsive, tokenized design components adhering to WCAG.'}
                      {selectedNode.id === 'logic' && 'Type-safe server actions & deterministic state handlers.'}
                      {selectedNode.id === 'data' && 'Normalized PostgreSQL schema with RLS security policies.'}
                      {selectedNode.id === 'integrations' && 'Idempotent webhook consumers & authenticated API bridges.'}
                      {selectedNode.id === 'infrastructure' && 'Zero-downtime edge deployment with SSL & error telemetry.'}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AISystemPhilosophyVisual() {
  const steps = [
    {
      title: 'User Intent',
      desc: 'Natural language request or system trigger',
      icon: Users,
    },
    {
      title: 'Product Context',
      desc: 'Scoped workspace parameters & role permissions',
      icon: ShieldCheck,
    },
    {
      title: 'Authorized Data',
      desc: 'Isolated RLS records & relevant vector chunks',
      icon: Fingerprint,
    },
    {
      title: 'Model Orchestration',
      desc: 'Prompt chain with strict token & temperature limits',
      icon: Bot,
    },
    {
      title: 'Structured Result',
      desc: 'Zod-validated JSON payload, never raw markdown',
      icon: Sparkles,
    },
    {
      title: 'Human / System Action',
      desc: 'Audited user confirmation or automated dispatch',
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="w-full rounded-2xl border border-border/80 bg-surface-50/40 dark:bg-surface-900/40 p-6 md:p-8 backdrop-blur-sm space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Production AI Architecture</span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground">
          Deterministic AI Pipeline (No Chatbot Toys)
        </h3>
        <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
          AI should never be an unvetted magic trick. In production software, LLMs operate inside strict boundaries: authenticated context, validated schemas, and human review gates.
        </p>
      </div>

      {/* Step Sequence */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 pt-4">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className="p-4 rounded-xl border border-border/70 bg-surface-50 dark:bg-surface-950 flex flex-col justify-between space-y-3 relative group hover:border-accent/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground font-bold">
                  0{idx + 1}
                </span>
                <div className="p-1.5 rounded-md bg-surface-100 dark:bg-surface-900 text-foreground">
                  <Icon className="w-3.5 h-3.5 text-accent" />
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-foreground mb-1 leading-snug">
                  {step.title}
                </h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-muted-foreground/40">
                  <span className="text-xs font-bold">&rarr;</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
