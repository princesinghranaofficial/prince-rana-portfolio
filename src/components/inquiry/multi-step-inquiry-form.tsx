'use client';

import * as React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ArrowUpRight,
  Sparkles,
  Calendar,
  Globe2,
  Lock,
  Edit3
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { stepSlideVariants } from '@/lib/motion';
import { trackEvent } from '@/lib/analytics';
import { cn } from '@/lib/utils';
import {
  ProjectType,
  ProjectStage,
  ScopeOption,
  BudgetRange,
  TimelineRange,
  PreferredContactMethod,
  ProjectInquiry,
} from '@/types/inquiry';

const projectTypes: { type: ProjectType; description: string }[] = [
  { type: 'SaaS Product', description: 'Multi-tenant web platform with recurring billing and workflow engines.' },
  { type: 'AI SaaS / AI Product', description: 'Deterministic LLM integration, copilot workflows, or vector search.' },
  { type: 'SaaS MVP', description: 'Fast, disciplined 3–5 week launch focusing on the core value workflow.' },
  { type: 'Full-Stack Application', description: 'Complete web application with relational database and custom logic.' },
  { type: 'Premium Website', description: 'High-converting marketing site designed to convert enterprise buyers.' },
  { type: 'Dashboard / Internal Tool', description: 'High-density operational console or business intelligence portal.' },
  { type: 'Existing Product Improvement', description: 'Refactoring, performance optimization, or adding new features.' },
  { type: 'API / Platform Integration', description: 'Stripe, AI models, custom webhooks, or third-party CRM sync.' },
  { type: 'Other', description: 'Custom technical project with specialized requirements.' },
];

const projectStages: { stage: ProjectStage; description: string }[] = [
  { stage: 'Idea', description: 'Conceptual phase; validating market need and technical feasibility.' },
  { stage: 'Requirements defined', description: 'Feature specifications, user flows, or PRD are documented.' },
  { stage: 'UI/UX exists', description: 'Figma wireframes or visual mockups are ready for implementation.' },
  { stage: 'Prototype exists', description: 'Clickable prototype or basic proof-of-concept exists.' },
  { stage: 'MVP exists', description: 'Initial version built; ready to upgrade to production architecture.' },
  { stage: 'Existing live product', description: 'Live software with active users needing scaling or extensions.' },
  { stage: 'Existing codebase needs improvement', description: 'Refactoring legacy code, performance tuning, or bug fixing.' },
];

const scopeOptions: ScopeOption[] = [
  'Product Strategy',
  'UI/UX',
  'Frontend',
  'Backend',
  'Database',
  'Authentication',
  'AI Integration',
  'Payments',
  'Third-Party APIs',
  'Admin System',
  'Analytics',
  'Deployment',
  'Performance',
  'Existing Codebase',
  'Other',
];

const budgetRanges: { range: BudgetRange; label: string; note: string }[] = [
  { range: 'Under $1,500', label: 'Under $1,500', note: 'Discovery audits or targeted small fixes' },
  { range: '$1,500–$3,000', label: '$1,500 – $3,000', note: 'High-performance marketing sites or sprints' },
  { range: '$3,000–$5,000', label: '$3,000 – $5,000', note: 'Focused lean SaaS MVPs with core workflows' },
  { range: '$5,000–$10,000', label: '$5,000 – $10,000', note: 'Full-stack SaaS platforms & AI copilots' },
  { range: '$10,000–$15,000', label: '$10,000 – $15,000', note: 'Complex multi-system SaaS architectures' },
  { range: '$15,000+', label: '$15,000+', note: 'Comprehensive multi-product engineering' },
  { range: 'Not sure yet', label: 'Not sure yet', note: 'Let’s evaluate scope together on a call' },
];

const timelineOptions: TimelineRange[] = [
  'As soon as possible',
  'Within 2–4 weeks',
  'Within 1–2 months',
  '2–3 months',
  'Flexible',
];

const queryTypeAllowlist: Record<string, ProjectType> = {
  website: 'Premium Website',
  'saas-mvp': 'SaaS MVP',
  saas: 'SaaS Product',
  'ai-saas': 'AI SaaS / AI Product',
  custom: 'Full-Stack Application',
};

export function MultiStepInquiryForm() {
  const [step, setStep] = React.useState<number>(1);
  const [direction, setDirection] = React.useState<number>(1);
  const shouldReduceMotion = useReducedMotion();
  const startTimeRef = React.useRef<number>(Date.now());

  // Form State
  const [projectType, setProjectType] = React.useState<ProjectType | null>(null);
  const [projectStage, setProjectStage] = React.useState<ProjectStage | null>(null);
  const [selectedScope, setSelectedScope] = React.useState<ScopeOption[]>([]);
  const [description, setDescription] = React.useState('');
  const [referenceUrl, setReferenceUrl] = React.useState('');
  const [budgetRange, setBudgetRange] = React.useState<BudgetRange | null>(null);
  const [timeline, setTimeline] = React.useState<TimelineRange | null>(null);
  const [targetLaunchDate, setTargetLaunchDate] = React.useState('');

  // Contact Info
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [companyWebsite, setCompanyWebsite] = React.useState('');
  const [countryOrTimezone, setCountryOrTimezone] = React.useState('');
  const [preferredContact, setPreferredContact] = React.useState<PreferredContactMethod>('Email');
  const [honeypot, setHoneypot] = React.useState(''); // Bot trap field

  // Safe query-based preselection with strict allowlist
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const params = new URLSearchParams(window.location.search);
        const rawType = params.get('type');
        if (rawType && rawType in queryTypeAllowlist) {
          setProjectType(queryTypeAllowlist[rawType]);
        }
      } catch {
        // Fallback gracefully on parsing error
      }
    }
  }, []);

  // Submission State
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [stepError, setStepError] = React.useState<string | null>(null);

  // Success focus management — move focus to heading for screen reader users
  const successHeadingRef = React.useRef<HTMLHeadingElement>(null);
  React.useEffect(() => {
    if (status === 'success') {
      successHeadingRef.current?.focus();
    }
  }, [status]);

  // Track initial start
  React.useEffect(() => {
    trackEvent('inquiry_started');
  }, []);

  const toggleScope = (scope: ScopeOption) => {
    if (selectedScope.includes(scope)) {
      setSelectedScope(selectedScope.filter((s) => s !== scope));
    } else {
      setSelectedScope([...selectedScope, scope]);
    }
  };

  const jumpToStep = (target: number) => {
    setStepError(null);
    setDirection(target < step ? -1 : 1);
    setStep(target);
  };

  const handleNext = () => {
    setStepError(null);

    if (step === 1) {
      if (!projectType) {
        setStepError('Please select what type of product you are building.');
        return;
      }
      trackEvent('inquiry_step_completed', { step: 1, type: projectType });
    }

    if (step === 2) {
      if (!projectStage) {
        setStepError('Please select the current stage of your project.');
        return;
      }
      trackEvent('inquiry_step_completed', { step: 2 });
    }

    if (step === 3) {
      if (selectedScope.length === 0) {
        setStepError('Please select at least one area you need help with.');
        return;
      }
      if (description.trim().length < 10) {
        setStepError('Please provide a brief project description (at least 10 characters).');
        return;
      }
      if (referenceUrl.trim() && !/^https?:\/\/.+/i.test(referenceUrl.trim())) {
        setStepError('Reference URL must begin with http:// or https://');
        return;
      }
      trackEvent('inquiry_step_completed', { step: 3 });
    }

    if (step === 4) {
      if (!budgetRange) {
        setStepError('Please select an anticipated budget range.');
        return;
      }
      trackEvent('inquiry_budget_selected', { budget: budgetRange });
      trackEvent('inquiry_step_completed', { step: 4 });
    }

    if (step === 5) {
      if (!timeline) {
        setStepError('Please select your preferred start timeline.');
        return;
      }
      trackEvent('inquiry_step_completed', { step: 5 });
    }

    if (step === 6) {
      if (name.trim().length < 2) {
        setStepError('Please enter your name.');
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        setStepError('Please enter a valid email address.');
        return;
      }
      trackEvent('inquiry_step_completed', { step: 6 });
      trackEvent('inquiry_reviewed');
    }

    setDirection(1);
    setStep((prev) => prev + 1);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleBack = () => {
    setStepError(null);
    setDirection(-1);
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');
    setErrorMessage(null);

    const formTimeMs = Date.now() - startTimeRef.current;

    const payload: Partial<ProjectInquiry> = {
      projectType: projectType || 'Other',
      projectStage: projectStage || 'Idea',
      scope: selectedScope,
      description: description.trim(),
      referenceUrl: referenceUrl.trim() || undefined,
      budgetRange: budgetRange || 'Not sure yet',
      timeline: timeline || 'Flexible',
      targetLaunchDate: targetLaunchDate.trim() || undefined,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company.trim() || undefined,
      companyWebsite: companyWebsite.trim() || undefined,
      countryOrTimezone: countryOrTimezone.trim() || undefined,
      preferredContact,
      honeypot: honeypot.trim() || undefined,
      formTimeMs,
    };

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Server rejected the submission.');
      }

      setStatus('success');
      trackEvent('inquiry_completed', {
        projectType: projectType || 'Other',
        budgetRange: budgetRange || 'Not sure yet',
        timeline: timeline || 'Flexible',
      });
      window.scrollTo({ top: 200, behavior: 'smooth' });
    } catch (err) {
      console.error('[Inquiry Submission Error]:', err);
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Something went wrong while sending your project. Please email directly at princesinghranaofficial@gmail.com.'
      );
      trackEvent('inquiry_failed');
    }
  };

  // SUCCESS EXPERIENCE
  if (status === 'success') {
    return (
      <div className="p-8 sm:p-14 rounded-3xl border border-emerald-500/30 bg-surface-50/80 dark:bg-surface-900/80 backdrop-blur-md text-center space-y-8 shadow-2xl animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/20">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-3 max-w-xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-500 font-bold">
            Inquiry Confirmed
          </span>
          <h2
            ref={successHeadingRef}
            tabIndex={-1}
            className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight focus-visible:outline-none"
          >
            Project received.
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Thanks for sharing the details, <strong className="text-foreground">{name}</strong>. I will personally review your project requirements, scope boundaries, and technical architecture to prepare for our conversation.
          </p>
        </div>

        <div className="pt-4 border-t border-border/60 max-w-md mx-auto space-y-3">
          <p className="text-xs font-mono text-muted-foreground">
            Want to discuss feasibility immediately?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/book">
              <Button variant="primary" className="w-full sm:w-auto" rightIcon={<Calendar className="w-4 h-4" />}>
                Book a Discovery Call
              </Button>
            </Link>
            <Link href="/work">
              <Button variant="outline" className="w-full sm:w-auto">
                Explore Work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-border/80 bg-surface-50/70 dark:bg-surface-900/70 p-6 sm:p-10 backdrop-blur-md shadow-xl space-y-8">
      {/* Progress & Step Bar */}
      <div className="flex items-center justify-between border-b border-border/60 pb-5">
        <div className="flex items-center gap-3">
          {/* Visually hidden live region for screen reader step announcements */}
          <span
            className="sr-only"
            aria-live="polite"
            aria-atomic="true"
          >
            {step === 1 && 'Step 1 of 7 — Project Type'}
            {step === 2 && 'Step 2 of 7 — Current Stage'}
            {step === 3 && 'Step 3 of 7 — Scope & Context'}
            {step === 4 && 'Step 4 of 7 — Budget Qualification'}
            {step === 5 && 'Step 5 of 7 — Timeline'}
            {step === 6 && 'Step 6 of 7 — Contact Information'}
            {step === 7 && 'Step 7 of 7 — Review & Submit'}
          </span>
          <span className="font-mono text-xs font-bold text-accent px-2.5 py-1 rounded-md bg-accent-muted border border-accent/20" aria-hidden="true">
            STEP {step} OF 7
          </span>
          <span className="text-xs font-mono text-muted-foreground uppercase hidden sm:inline-block" aria-hidden="true">
            {step === 1 && 'Project Type'}
            {step === 2 && 'Current Stage'}
            {step === 3 && 'Scope & Context'}
            {step === 4 && 'Budget Qualification'}
            {step === 5 && 'Timeline'}
            {step === 6 && 'Contact Information'}
            {step === 7 && 'Review & Submit'}
          </span>
        </div>

        {/* Visual Progress Bar with accessible semantics */}
        <div
          role="progressbar"
          aria-valuenow={step}
          aria-valuemin={1}
          aria-valuemax={7}
          aria-label={`Form progress: step ${step} of 7`}
          className="w-28 sm:w-44 h-2 rounded-full bg-surface-200 dark:bg-surface-800 overflow-hidden"
        >
          <div
            className="h-full bg-accent transition-all duration-300"
            style={{ width: `${(step / 7) * 100}%` }}
          />
        </div>
      </div>

      {/* Honeypot hidden input for spam bots */}
      <div aria-hidden="true" className="opacity-0 absolute -left-[5000px] pointer-events-none">
        <label htmlFor="website_hp">Do not fill this field</label>
        <input
          id="website_hp"
          type="text"
          name="website_hp"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {/* Inline Error Notification */}
      {stepError && (
        <div
          role="alert"
          aria-live="assertive"
          className="p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400 text-xs flex items-center gap-2.5 animate-shake"
        >
          <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>{stepError}</span>
        </div>
      )}

      {/* STEPS CONTAINER WITH DIRECTIONAL MOTION */}
      <div className="relative min-h-[380px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={stepSlideVariants}
            initial={shouldReduceMotion ? undefined : 'enter'}
            animate="center"
            exit={shouldReduceMotion ? undefined : 'exit'}
            className="w-full"
          >
            {/* STEP 1: PROJECT TYPE */}
            {step === 1 && (
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              What are you looking to build?
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Select the primary category that best describes your project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {projectTypes.map((item) => {
              const isSelected = projectType === item.type;
              return (
                <button
                  key={item.type}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => {
                    setProjectType(item.type);
                    setStepError(null);
                  }}
                  className={cn(
                    'p-4 rounded-2xl border text-left transition-all duration-150 flex flex-col justify-between space-y-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                    isSelected
                      ? 'border-accent bg-accent-muted/40 shadow-xs'
                      : 'border-border/60 bg-surface-50 dark:bg-surface-950 hover:border-border hover:bg-surface-100/50'
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">
                      {item.type}
                    </span>
                    <div
                      className={cn(
                        'w-4 h-4 rounded-full border flex items-center justify-center shrink-0',
                        isSelected
                          ? 'border-accent bg-accent text-accent-foreground'
                          : 'border-border/60 bg-transparent'
                      )}
                    >
                      {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </div>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* STEP 2: PROJECT STAGE */}
      {step === 2 && (
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Where is the project today?
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              This helps me understand the current assets, documentation, and technical maturity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {projectStages.map((item) => {
              const isSelected = projectStage === item.stage;
              return (
                <button
                  key={item.stage}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => {
                    setProjectStage(item.stage);
                    setStepError(null);
                  }}
                  className={cn(
                    'p-4 rounded-2xl border text-left transition-all duration-150 flex items-start justify-between gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                    isSelected
                      ? 'border-accent bg-accent-muted/40 shadow-xs'
                      : 'border-border/60 bg-surface-50 dark:bg-surface-950 hover:border-border hover:bg-surface-100/50'
                  )}
                >
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">
                      {item.stage}
                    </div>
                    <div className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </div>
                  </div>
                  <div
                    className={cn(
                      'w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5',
                      isSelected
                        ? 'border-accent bg-accent text-accent-foreground'
                        : 'border-border/60 bg-transparent'
                    )}
                  >
                    {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* STEP 3: SCOPE & CONTEXT */}
      {step === 3 && (
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              What do you need help with?
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Select all scope requirements that apply to your engagement.
            </p>
          </div>

          {/* Scope Checkbox Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5" role="group" aria-label="Scope requirements — select all that apply">
            {scopeOptions.map((scope) => {
              const isSelected = selectedScope.includes(scope);
              return (
                <button
                  key={scope}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => toggleScope(scope)}
                  className={cn(
                    'p-3 rounded-xl border text-left text-xs font-medium transition-all duration-150 flex items-center justify-between gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                    isSelected
                      ? 'border-accent bg-accent text-accent-foreground font-bold'
                      : 'border-border/60 bg-surface-50 dark:bg-surface-950 text-muted-foreground hover:text-foreground hover:bg-surface-100/60'
                  )}
                >
                  <span className="truncate">{scope}</span>
                  {isSelected && <Check className="w-3 h-3 shrink-0" aria-hidden="true" />}
                </button>
              );
            })}
          </div>

          {/* Project Description */}
          <div className="space-y-2">
            <label htmlFor="description" className="block text-xs font-mono font-bold uppercase text-foreground">
              Tell me about the product <span className="text-error" aria-hidden="true">*</span>
            </label>
            <p id="description-hint" className="text-[11px] text-muted-foreground">
              What problem does it solve, who will use it, and what are the core workflows you need to launch?
            </p>
            <textarea
              id="description"
              rows={4}
              required
              aria-required="true"
              aria-describedby="description-hint"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. Building a multi-tenant B2B compliance tool for clinics. Needs HIPAA-compliant database schemas, patient appointment state transitions, and automated PDF export..."
              className="w-full p-4 rounded-xl bg-surface-100 dark:bg-surface-950 border border-border/70 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-accent transition-all"
            />
          </div>

          {/* Optional Reference URL */}
          <div className="space-y-2">
            <label htmlFor="referenceUrl" className="block text-xs font-mono font-bold uppercase text-foreground">
              Reference website or product (Optional)
            </label>
            <input
              id="referenceUrl"
              type="url"
              value={referenceUrl}
              onChange={(e) => setReferenceUrl(e.target.value)}
              placeholder="https://example.com or Figma link"
              className="w-full px-4 py-2.5 rounded-xl bg-surface-100 dark:bg-surface-950 border border-border/70 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-accent transition-all"
            />
          </div>
        </div>
      )}

      {/* STEP 4: BUDGET QUALIFICATION */}
      {step === 4 && (
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              What is your anticipated budget range?
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              This is not a pricing package. It helps me qualify the appropriate architectural scope, speed, and engineering approach.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {budgetRanges.map((item) => {
              const isSelected = budgetRange === item.range;
              return (
                <button
                  key={item.range}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => {
                    setBudgetRange(item.range);
                    setStepError(null);
                  }}
                  className={cn(
                    'p-4 rounded-2xl border text-left transition-all duration-150 flex items-start justify-between gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                    isSelected
                      ? 'border-accent bg-accent-muted/40 shadow-xs'
                      : 'border-border/60 bg-surface-50 dark:bg-surface-950 hover:border-border hover:bg-surface-100/50'
                  )}
                >
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-foreground group-hover:text-accent transition-colors font-mono">
                      {item.label}
                    </div>
                    <div className="text-xs text-muted-foreground leading-relaxed">
                      {item.note}
                    </div>
                  </div>
                  <div
                    className={cn(
                      'w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5',
                      isSelected
                        ? 'border-accent bg-accent text-accent-foreground'
                        : 'border-border/60 bg-transparent'
                    )}
                    aria-hidden="true"
                  >
                    {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* STEP 5: TIMELINE */}
      {step === 5 && (
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              When would you like to start?
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Indicate your kickoff availability and target launch horizon.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {timelineOptions.map((opt) => {
              const isSelected = timeline === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => {
                    setTimeline(opt);
                    setStepError(null);
                  }}
                  className={cn(
                    'p-4 rounded-2xl border text-left transition-all duration-150 flex items-center justify-between gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                    isSelected
                      ? 'border-accent bg-accent-muted/40 shadow-xs'
                      : 'border-border/60 bg-surface-50 dark:bg-surface-950 hover:border-border hover:bg-surface-100/50'
                  )}
                >
                  <span className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">
                    {opt}
                  </span>
                  <div
                    className={cn(
                      'w-4 h-4 rounded-full border flex items-center justify-center shrink-0',
                      isSelected
                        ? 'border-accent bg-accent text-accent-foreground'
                        : 'border-border/60 bg-transparent'
                    )}
                    aria-hidden="true"
                  >
                    {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Optional Target Launch Date */}
          <div className="space-y-2 pt-4 border-t border-border/60">
            <label htmlFor="targetLaunchDate" className="block text-xs font-mono font-bold uppercase text-foreground">
              Do you have a target launch date? (Optional)
            </label>
            <input
              id="targetLaunchDate"
              type="text"
              value={targetLaunchDate}
              onChange={(e) => setTargetLaunchDate(e.target.value)}
              placeholder="e.g. In 4–6 weeks, or before launch date"
              className="w-full px-4 py-2.5 rounded-xl bg-surface-100 dark:bg-surface-950 border border-border/70 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-accent transition-all"
            />
          </div>
        </div>
      )}

      {/* STEP 6: CONTACT INFORMATION */}
      {step === 6 && (
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Your contact details
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              I will use this information exclusively to communicate about your project. Zero spam.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-xs font-mono font-bold uppercase text-foreground">
                Your Name <span className="text-error" aria-hidden="true">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                aria-required="true"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Mercer"
                className="w-full px-4 py-2.5 rounded-xl bg-surface-100 dark:bg-surface-950 border border-border/70 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-accent transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-mono font-bold uppercase text-foreground">
                Email Address <span className="text-error" aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                aria-required="true"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@company.com"
                className="w-full px-4 py-2.5 rounded-xl bg-surface-100 dark:bg-surface-950 border border-border/70 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-accent transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="company" className="block text-xs font-mono font-bold uppercase text-foreground">
                Company / Project Name (Optional)
              </label>
              <input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Acme Corp"
                className="w-full px-4 py-2.5 rounded-xl bg-surface-100 dark:bg-surface-950 border border-border/70 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-accent transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="countryOrTimezone" className="block text-xs font-mono font-bold uppercase text-foreground">
                Country / Timezone (Optional)
              </label>
              <input
                id="countryOrTimezone"
                type="text"
                value={countryOrTimezone}
                onChange={(e) => setCountryOrTimezone(e.target.value)}
                placeholder="e.g. San Francisco (PST) or London (GMT)"
                className="w-full px-4 py-2.5 rounded-xl bg-surface-100 dark:bg-surface-950 border border-border/70 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-accent transition-all"
              />
            </div>
          </div>

          {/* Preferred Communication Mode */}
          <div className="space-y-2 pt-2">
            <span id="contact-method-label" className="block text-xs font-mono font-bold uppercase text-foreground">
              Preferred Communication Method
            </span>
            <div className="flex flex-wrap gap-2" role="group" aria-labelledby="contact-method-label">
              {(['Email', 'Discovery Call', 'Async (Slack / Loom)'] as PreferredContactMethod[]).map((method) => {
                const isSelected = preferredContact === method;
                return (
                  <button
                    key={method}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setPreferredContact(method)}
                    className={cn(
                      'px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                      isSelected
                        ? 'bg-accent text-accent-foreground font-bold'
                        : 'bg-surface-100 dark:bg-surface-950 text-muted-foreground border border-border/60 hover:text-foreground'
                    )}
                  >
                    {method}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* STEP 7: REVIEW & SUBMIT */}
      {step === 7 && (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Review your project summary
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Verify your information below before submitting. Click &ldquo;Edit&rdquo; on any section to revise.
            </p>
          </div>

          <div className="divide-y divide-border/60 border-y border-border/60 text-xs sm:text-sm">
            {/* Section 1: Project & Stage */}
            <div className="py-4 flex items-start justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase text-muted-foreground font-semibold">
                  Product &amp; Stage
                </span>
                <div className="font-bold text-foreground">{projectType}</div>
                <div className="text-muted-foreground text-xs">Stage: {projectStage}</div>
              </div>
              <button
                type="button"
                onClick={() => jumpToStep(1)}
                className="text-xs font-mono text-accent hover:underline flex items-center gap-1"
              >
                <Edit3 className="w-3 h-3" />
                <span>Edit</span>
              </button>
            </div>

            {/* Section 2: Scope & Description */}
            <div className="py-4 flex items-start justify-between gap-4">
              <div className="space-y-2 max-w-xl">
                <span className="text-[11px] font-mono uppercase text-muted-foreground font-semibold">
                  Scope &amp; Description
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedScope.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded bg-surface-100 dark:bg-surface-800 text-[11px] font-mono text-foreground border border-border/40"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed italic">
                  &ldquo;{description}&rdquo;
                </p>
                {referenceUrl && (
                  <div className="text-xs font-mono text-accent truncate">
                    Ref: {referenceUrl}
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={() => jumpToStep(3)}
                className="text-xs font-mono text-accent hover:underline flex items-center gap-1 shrink-0"
              >
                <Edit3 className="w-3 h-3" />
                <span>Edit</span>
              </button>
            </div>

            {/* Section 3: Budget & Timeline */}
            <div className="py-4 flex items-start justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase text-muted-foreground font-semibold">
                  Budget &amp; Timeline
                </span>
                <div className="font-bold font-mono text-foreground">{budgetRange}</div>
                <div className="text-muted-foreground text-xs">Kickoff: {timeline}</div>
                {targetLaunchDate && (
                  <div className="text-xs text-muted-foreground">Target: {targetLaunchDate}</div>
                )}
              </div>
              <button
                type="button"
                onClick={() => jumpToStep(4)}
                className="text-xs font-mono text-accent hover:underline flex items-center gap-1"
              >
                <Edit3 className="w-3 h-3" />
                <span>Edit</span>
              </button>
            </div>

            {/* Section 4: Contact Information */}
            <div className="py-4 flex items-start justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase text-muted-foreground font-semibold">
                  Contact
                </span>
                <div className="font-bold text-foreground">{name} ({email})</div>
                {company && <div className="text-xs text-muted-foreground">Company: {company}</div>}
                {countryOrTimezone && (
                  <div className="text-xs text-muted-foreground">Location: {countryOrTimezone}</div>
                )}
                <div className="text-xs font-mono text-accent">Preferred: {preferredContact}</div>
              </div>
              <button
                type="button"
                onClick={() => jumpToStep(6)}
                className="text-xs font-mono text-accent hover:underline flex items-center gap-1"
              >
                <Edit3 className="w-3 h-3" />
                <span>Edit</span>
              </button>
            </div>
          </div>

          {/* Submission Error Banner */}
          {errorMessage && (
            <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400 text-xs space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" />
                <span>Submission Failed</span>
              </div>
              <p>{errorMessage}</p>
            </div>
          )}

          {/* Final Submit Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={handleBack}
              className="text-xs font-mono text-muted-foreground hover:text-foreground flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Contact Details</span>
            </button>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={status === 'submitting'}
              rightIcon={
                status === 'submitting' ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )
              }
            >
              {status === 'submitting' ? 'Submitting Project...' : 'Submit Project Inquiry'}
            </Button>
          </div>
        </form>
      )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Action Bar for Steps 1 through 6 */}
      {step < 7 && (
        <div className="pt-6 border-t border-border/60 flex items-center justify-between gap-4">
          {step > 1 ? (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleBack}
              leftIcon={<ArrowLeft className="w-4 h-4" />}
            >
              Back
            </Button>
          ) : (
            <span className="text-xs font-mono text-muted-foreground">
              Direct &amp; Confidential
            </span>
          )}

          <Button
            type="button"
            variant="primary"
            size="md"
            onClick={handleNext}
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Continue
          </Button>
        </div>
      )}
    </div>
  );
}
