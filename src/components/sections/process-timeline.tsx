'use client';

import * as React from 'react';
import {
  Search,
  Compass,
  Palette,
  Code2,
  CheckCircle2,
  Rocket,
  TrendingUp
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { trackEvent } from '@/lib/analytics';

interface ProcessStep {
  step: string;
  title: string;
  phase: string;
  duration: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  deliverables: string[];
}

const steps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    phase: 'Commercial Validation',
    duration: 'Week 1',
    icon: Search,
    description: 'Deconstruct business model, target audience, core user friction, and quantifiable success metrics.',
    deliverables: ['Product Scope Document', 'Commercial Goals Map', 'Risk Assessment'],
  },
  {
    step: '02',
    title: 'Strategy',
    phase: 'Architecture & Modeling',
    duration: 'Week 1–2',
    icon: Compass,
    description: 'Design the relational database schema, user permission boundaries, API contracts, and AI pipelines.',
    deliverables: ['Entity Relationship Diagram', 'API Specification', 'Tech Stack Plan'],
  },
  {
    step: '03',
    title: 'Design',
    phase: 'High-Fidelity UI/UX',
    duration: 'Week 2–3',
    icon: Palette,
    description: 'Craft high-converting product interfaces, design token systems, and responsive operational layouts.',
    deliverables: ['Production Component Tokens', 'Responsive UI States', 'Interaction Flows'],
  },
  {
    step: '04',
    title: 'Build',
    phase: 'Full-Stack Implementation',
    duration: 'Week 3–5',
    icon: Code2,
    description: 'Implement type-safe Next.js App Router frontend, Supabase PostgreSQL with RLS, and AI workflows.',
    deliverables: ['Type-Safe Next.js Code', 'PostgreSQL RLS Policies', 'AI Tool Integrations'],
  },
  {
    step: '05',
    title: 'Test',
    phase: 'Rigorous Verification',
    duration: 'Week 5–6',
    icon: CheckCircle2,
    description: 'Verify edge cases, test database security policies, validate cross-browser layouts, and run audits.',
    deliverables: ['Security RLS Audit', 'Lighthouse Performance Audit', 'Accessibility Evaluation'],
  },
  {
    step: '06',
    title: 'Launch',
    phase: 'Production Deployment',
    duration: 'Week 6',
    icon: Rocket,
    description: 'Deploy to Vercel and Cloudflare with custom domains, automated CI/CD, SSL, and error monitoring.',
    deliverables: ['Vercel Edge Deployment', 'Cloudflare DNS / SSL', 'Sentry Telemetry'],
  },
  {
    step: '07',
    title: 'Improve',
    phase: 'Continuous Iteration',
    duration: 'Ongoing',
    icon: TrendingUp,
    description: 'Analyze real-world telemetry, monitor user conversion funnels, and iterate on feature roadmaps.',
    deliverables: ['Funnel Telemetry Review', 'Performance Tuning', 'Next Sprint Roadmap'],
  },
];

export function ProcessTimeline() {
  const [activeStepIndex, setActiveStepIndex] = React.useState(0);
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

  const handleStepClick = (idx: number) => {
    setActiveStepIndex(idx);
    const item = steps[idx];
    trackEvent('process_engaged', { step: item.step, title: item.title });
  };

  // Arrow key navigation between tabs (ARIA Authoring Practices Guide)
  const handleTabKeyDown = (e: React.KeyboardEvent, idx: number) => {
    let newIdx: number | null = null;
    if (e.key === 'ArrowRight') {
      newIdx = (idx + 1) % steps.length;
    } else if (e.key === 'ArrowLeft') {
      newIdx = (idx - 1 + steps.length) % steps.length;
    } else if (e.key === 'Home') {
      newIdx = 0;
    } else if (e.key === 'End') {
      newIdx = steps.length - 1;
    }
    if (newIdx !== null) {
      e.preventDefault();
      setActiveStepIndex(newIdx);
      tabRefs.current[newIdx]?.focus();
      trackEvent('process_engaged', { step: steps[newIdx].step, title: steps[newIdx].title });
    }
  };

  const activeStep = steps[activeStepIndex];
  const panelId = 'process-panel';

  return (
    <section className="py-20 md:py-32 border-t border-border/80 bg-background relative">
      <Container size="wide">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Execution Framework"
          title="From concept to commercial launch."
          description="A structured 7-step engineering timeline engineered to eliminate ambiguity, mitigate technical risk, and ship production SaaS on schedule."
          align="left"
        />

        {/* Desktop/Tablet Interactive Timeline Steps */}
        <div className="mt-12 space-y-8">
          {/* Step Selector — ARIA Tablist */}
          <div
            role="tablist"
            aria-label="Development process phases"
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2"
          >
            {steps.map((item, idx) => {
              const isActive = idx === activeStepIndex;
              const Icon = item.icon;
              const tabId = `process-tab-${idx}`;

              return (
                <button
                  key={item.step}
                  id={tabId}
                  ref={(el) => { tabRefs.current[idx] = el; }}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={panelId}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => handleStepClick(idx)}
                  onKeyDown={(e) => handleTabKeyDown(e, idx)}
                  className={`text-left p-3.5 rounded-xl border transition-all relative ${
                    isActive
                      ? 'border-accent bg-surface shadow-xs text-text-primary ring-1 ring-accent'
                      : 'border-border bg-surface-muted/60 text-text-secondary hover:border-border-strong hover:text-text-primary'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className={isActive ? 'text-accent font-bold' : 'text-text-secondary'}>
                      {item.step}
                    </span>
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-accent' : 'text-text-secondary'}`} aria-hidden="true" />
                  </div>
                  <div className="font-semibold text-sm tracking-tight">{item.title}</div>
                  <div className="text-[11px] font-mono text-text-secondary mt-0.5 truncate">{item.duration}</div>
                </button>
              );
            })}
          </div>

          {/* Active Step Panel — ARIA Tabpanel */}
          <div
            id={panelId}
            role="tabpanel"
            aria-labelledby={`process-tab-${activeStepIndex}`}
            tabIndex={0}
            className="rounded-2xl border border-border-strong bg-surface p-6 sm:p-10 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Details */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-accent px-2.5 py-1 rounded-md bg-accent-muted border border-accent/20">
                    STEP {activeStep.step}
                  </span>
                  <span className="text-xs font-mono text-text-secondary uppercase tracking-wider">
                    {activeStep.phase} • {activeStep.duration}
                  </span>
                </div>

                <h3 className="type-h2 text-text-primary">
                  {activeStep.step}. {activeStep.title} — {activeStep.phase}
                </h3>

                <p className="type-body text-text-secondary">
                  {activeStep.description}
                </p>
              </div>

              {/* Right Deliverables Column */}
              <div className="lg:col-span-4 p-5 rounded-xl border border-border bg-surface-muted space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-text-secondary font-bold block">
                  Key Deliverables & Artifacts
                </span>
                <ul className="space-y-2">
                  {activeStep.deliverables.map((del) => (
                    <li key={del} className="flex items-start gap-2 text-xs font-mono text-text-primary">
                      <span className="text-accent mt-0.5" aria-hidden="true">•</span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Step Navigation Controls */}
            <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between text-xs font-mono">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => handleStepClick(activeStepIndex - 1)}
                aria-label={activeStepIndex > 0 ? `Go to step ${activeStepIndex}: ${steps[activeStepIndex - 1].title}` : undefined}
                className="px-3 py-1.5 rounded-lg border border-border disabled:opacity-40 disabled:cursor-not-allowed hover:bg-surface-muted transition-colors text-text-secondary"
              >
                ← Previous Step
              </button>

              <span className="text-text-secondary hidden sm:inline-block" aria-live="polite" aria-atomic="true">
                Step {activeStepIndex + 1} of {steps.length}
              </span>

              <button
                disabled={activeStepIndex === steps.length - 1}
                onClick={() => handleStepClick(activeStepIndex + 1)}
                aria-label={activeStepIndex < steps.length - 1 ? `Go to step ${activeStepIndex + 2}: ${steps[activeStepIndex + 1].title}` : undefined}
                className="px-3 py-1.5 rounded-lg border border-border disabled:opacity-40 disabled:cursor-not-allowed hover:bg-surface-muted transition-colors text-text-primary font-semibold flex items-center gap-1"
              >
                Next Step →
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
