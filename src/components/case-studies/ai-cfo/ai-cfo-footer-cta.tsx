'use client';

import * as React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  TrendingUp, 
  Layers, 
  FlaskConical 
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { H2, H3, TextLead } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { trackEvent } from '@/lib/analytics';

export function AICFOFooterCTA() {
  const handleBookCall = () => {
    trackEvent('ai_cfo_book_call_clicked', { source: 'case_study_footer' });
  };

  const handleStartProject = () => {
    trackEvent('ai_cfo_start_project_clicked', { source: 'case_study_footer' });
  };

  return (
    <div className="space-y-20 pb-20">
      {/* 22. Outcome, Current State & Demonstrations */}
      <section className="pt-20 border-t border-border/50 bg-background">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Product Result & Status */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest font-semibold block">
                  14 &middot; OUTCOME &amp; CURRENT STATUS
                </span>
                <H2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  A complete financial intelligence operating system.
                </H2>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                The result is a production-grade financial intelligence workspace that connects multi-account cash flow, transaction intelligence, scenario forecasting, and AI-assisted analysis into one unified decision-making product.
              </p>

              <div className="p-5 rounded-2xl bg-surface-100/70 dark:bg-surface-900/60 border border-border/70 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-muted-foreground uppercase">Current Implementation State</span>
                  <Badge variant="real-product" size="sm" className="font-mono text-[10px]">
                    LAUNCH READY &middot; V1 PRODUCTION
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  All transaction ingestion pipelines, double-entry balance constraints, rolling 18-month forecast calculators, and structured Claude 3.5 Sonnet JSON tool calling endpoints are fully functional and verified.
                </p>
              </div>
            </div>

            {/* Right: What This Project Proves */}
            <div className="lg:col-span-5 space-y-4">
              <H3 className="text-sm font-mono uppercase tracking-wider text-foreground">
                What This Project Demonstrates
              </H3>

              <ul className="space-y-2.5 text-xs text-muted-foreground">
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-100/60 dark:bg-surface-900/40 border border-border/50">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Fintech Domain UX:</strong> Cash bridge waterfalls, liquidity tiers, and amortization schedules.</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-100/60 dark:bg-surface-900/40 border border-border/50">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Accessible Data Visualization:</strong> Visual separation of actuals vs. forward forecasts with confidence intervals.</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-100/60 dark:bg-surface-900/40 border border-border/50">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>In-Context AI Architecture:</strong> Zero-hallucination structured responses grounded in verified SQL views.</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-100/60 dark:bg-surface-900/40 border border-border/50">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Enterprise Security:</strong> Multi-tenant isolation enforced via PostgreSQL Row-Level Security.</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 23. Previous Project Navigation & Next Exploration */}
      <section className="py-12 border-t border-border/50 bg-surface-50/40 dark:bg-surface-950/40">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Previous: CollectAI */}
            <Link
              href="/work/collectai"
              className="group p-6 rounded-3xl bg-surface-100/80 dark:bg-surface-900/80 border border-border/70 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-1.5">
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  Previous Flagship Case Study
                </span>
                <div className="text-lg font-bold text-foreground group-hover:text-emerald-400 transition-colors">
                  CollectAI &middot; Accounts Receivable
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  Autonomous receivables workflows, escalation state machines, and invoice payment recovery.
                </p>
              </div>
              <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1">
                Read CollectAI Case Study &rarr;
              </span>
            </Link>

            {/* Next: Product Lab */}
            <Link
              href="/lab"
              className="group p-6 rounded-3xl bg-surface-100/80 dark:bg-surface-900/80 border border-border/70 hover:border-accent/40 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest flex items-center gap-1.5">
                  Next Exploration
                  <FlaskConical className="w-3.5 h-3.5" />
                </span>
                <div className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                  The Product Lab (/lab)
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  Explore 15 distinct conceptual SaaS architectures across healthcare, cybersecurity, CRM, and analytics.
                </p>
              </div>
              <span className="text-xs font-mono text-accent font-semibold flex items-center gap-1">
                Explore All 15 Architectures &rarr;
              </span>
            </Link>
          </div>
        </Container>
      </section>

      {/* 24. High-Intent Final Conversion Banner */}
      <section className="pt-8">
        <Container size="default">
          <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 lg:p-16 border border-border/80 bg-surface-100/90 dark:bg-surface-900/90 backdrop-blur-md shadow-2xl relative overflow-hidden text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>BUILDING A DATA-HEAVY SAAS PRODUCT?</span>
            </div>

            <div className="space-y-4 max-w-2xl mx-auto">
              <H2 className="text-2xl sm:text-4xl lg:text-5xl tracking-tight text-foreground font-bold">
                Let&apos;s turn complex financial data into a product people actually love using.
              </H2>
              <TextLead className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                If you&apos;re building a financial platform, AI product, analytics system, or complex B2B SaaS application, I partner with founders to design and build production-ready software.
              </TextLead>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link href="/contact" onClick={handleBookCall} className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-emerald-500/20 text-sm font-semibold h-12 px-8 bg-emerald-500 hover:bg-emerald-600 text-white">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book a Discovery Call
                </Button>
              </Link>

              <Link href="/contact?type=project" onClick={handleStartProject} className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-sm font-semibold h-12 px-8 border-border hover:bg-surface-200 dark:hover:bg-surface-800"
                >
                  Start a Project Brief
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <p className="text-[11px] font-mono text-muted-foreground">
              Typically booking $1.5K–$15K+ full-stack and AI product builds &middot; Available for direct founder partnerships
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
