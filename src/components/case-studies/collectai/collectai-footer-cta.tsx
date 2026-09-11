'use client';

import * as React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Calendar, 
  MessageSquare, 
  Check, 
  Bot, 
  TrendingUp, 
  Layers, 
  ShieldCheck 
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/lib/analytics';

export function CollectAIFooterCTA() {
  const handleBookCall = () => {
    trackEvent('collectai_book_call_clicked', { source: 'case_study_footer' });
  };

  const handleStartProject = () => {
    trackEvent('collectai_start_project_clicked', { source: 'case_study_footer' });
  };

  return (
    <div className="space-y-24 py-20 bg-background">
      {/* ========================================================================= */}
      {/* 22 & 51 & 52 OUTCOME & CURRENT STATUS */}
      {/* ========================================================================= */}
      <Container size="wide">
        <div className="rounded-3xl border border-border bg-surface p-6 sm:p-10 space-y-6 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <span className="font-bold text-accent uppercase tracking-wider">
              Project Outcome & Current Deployment State
            </span>
            <span className="text-emerald-500 font-semibold">
              ● Launch-Ready Commercial Architecture
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="type-h3 text-text-primary">
                A production-grade foundation for accounts receivable operations.
              </h3>
              <p className="type-body-small text-text-secondary leading-relaxed">
                The result of this build is a unified SaaS foundation that replaces ad-hoc spreadsheets with deterministic collection workflows, real-time aging cohorts, and human-supervised AI reminders.
              </p>
              <p className="type-body-small text-text-secondary leading-relaxed">
                Rather than fabricating inflated marketing metrics, CollectAI stands as tangible proof of complete full-stack product capability: from database schemas and security policies to high-density financial interfaces and payment gateways.
              </p>
            </div>

            {/* What this project demonstrates */}
            <div className="lg:col-span-4 p-5 rounded-2xl border border-border bg-surface-muted/60 space-y-3">
              <span className="text-[10px] uppercase font-bold text-text-tertiary block">
                What This Build Demonstrates
              </span>
              <ul className="space-y-2 text-[11px] text-text-secondary">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Domain modeling for high-compliance fintech workflows.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                  <span>AI integrated as an operational workflow partner, not a toy gimmick.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Optimized multi-tenant PostgreSQL queries via index-backed RLS.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* ========================================================================= */}
      {/* 54 NEXT PROJECT: AI CFO & COPILOT */}
      {/* ========================================================================= */}
      <Container size="wide">
        <div className="rounded-3xl border border-border bg-surface-muted/30 p-8 sm:p-12 transition-colors hover:border-border-strong group">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest block">
                Next Flagship Case Study
              </span>
              <h3 className="type-h2 text-text-primary group-hover:text-accent transition-colors">
                AI CFO & Copilot &rarr;
              </h3>
              <p className="type-body text-text-secondary max-w-xl">
                Real-time financial intelligence, predictive cash runway modeling, and conversational scenario simulation for founders and CFOs.
              </p>
            </div>

            <Link href="/work/ai-cfo-copilot">
              <Button variant="outline" size="lg" className="font-semibold" rightIcon={<ArrowUpRight className="w-4 h-4" />}>
                View Next Project
              </Button>
            </Link>
          </div>
        </div>
      </Container>

      {/* ========================================================================= */}
      {/* 55 FINAL CONVERSION */}
      {/* ========================================================================= */}
      <Container size="narrow">
        <div className="rounded-3xl border border-border bg-surface p-8 sm:p-14 text-center space-y-8 shadow-sm relative overflow-hidden">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/8 blur-[120px] rounded-full pointer-events-none -z-10" 
            aria-hidden="true" 
          />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-muted text-accent text-xs font-mono border border-accent/20">
            <span>BUILDING A SAAS PRODUCT?</span>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
              Let&apos;s build the system behind your idea.
            </h2>
            <p className="type-body text-text-secondary">
              If you&apos;re planning a SaaS platform, AI product or complex business application, let&apos;s discuss the product, architecture and path to launch.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link href="/book" onClick={handleBookCall} className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto font-semibold shadow-sm"
                leftIcon={<Calendar className="w-4 h-4" />}
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
              >
                Book a Call
              </Button>
            </Link>

            <Link href="/start-project" onClick={handleStartProject} className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto font-medium"
                leftIcon={<MessageSquare className="w-4 h-4" />}
              >
                Start a Project
              </Button>
            </Link>
          </div>

          <div className="pt-6 border-t border-border/60 flex flex-wrap items-center justify-center gap-6 text-xs text-text-tertiary font-mono">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              Direct Developer Communication
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              Starts at $1,500
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              Production-Ready Delivery
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}
