'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { H1, TextLead } from '@/components/ui/typography';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/lib/analytics';

export function AICFOHero() {
  const handleBookCall = () => {
    trackEvent('ai_cfo_book_call_clicked', { source: 'hero' });
  };

  return (
    <section className="relative pt-32 pb-16 overflow-hidden border-b border-border/50 bg-gradient-to-b from-surface-50/40 via-background to-background">
      {/* Subtle ambient lighting - deep slate & emerald fintech tone */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[480px] pointer-events-none opacity-20 dark:opacity-25 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle at 50% 15%, rgba(16, 185, 129, 0.25), rgba(59, 130, 246, 0.15), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <Container size="default">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to All Work</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="max-w-4xl space-y-6">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="real-product" size="sm" className="font-mono text-xs uppercase tracking-wider">
              REAL PRODUCT
            </Badge>
            <Badge variant="outline" size="sm" className="font-mono text-xs text-emerald-500 border-emerald-500/30 bg-emerald-500/10">
              AI Financial Intelligence SaaS
            </Badge>
            <span className="text-xs font-mono text-muted-foreground">
              Production Architecture &middot; 2025
            </span>
          </div>

          {/* Headline & Lead */}
          <div className="space-y-4">
            <H1 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight text-foreground font-bold">
              AI CFO & Copilot
            </H1>
            <p className="text-xl sm:text-2xl font-medium text-emerald-500 dark:text-emerald-400 leading-snug">
              Financial intelligence built for better business decisions.
            </p>
            <TextLead className="text-muted-foreground text-base sm:text-lg max-w-3xl leading-relaxed">
              A financial intelligence platform designed to bring multi-account cash flow, transaction intelligence, scenario forecasting, and AI-assisted analysis into one unified decision-making workspace.
            </TextLead>
          </div>

          {/* Quick Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/contact" onClick={handleBookCall}>
              <Button size="md" className="shadow-md shadow-accent/20">
                <Calendar className="w-4 h-4 mr-2" />
                Book Architecture Discussion
              </Button>
            </Link>
            <a href="#command-center" className="text-xs font-semibold text-foreground hover:text-accent transition-colors flex items-center gap-1.5 px-3 py-2">
              <span>Inspect Financial Command Center</span>
              <span>&darr;</span>
            </a>
          </div>

          {/* Project Metadata Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl border border-border/70 bg-surface-100/70 dark:bg-surface-900/50 backdrop-blur-sm text-xs font-mono mt-8">
            <div className="space-y-1">
              <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Project Type</span>
              <span className="font-semibold text-foreground">AI Financial SaaS</span>
            </div>
            <div className="space-y-1">
              <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">My Role</span>
              <span className="font-semibold text-foreground">Product Strategy, UX & Full-Stack</span>
            </div>
            <div className="space-y-1">
              <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Key Capabilities</span>
              <span className="font-semibold text-emerald-400">Cash Flow, Forecasts, Copilot</span>
            </div>
            <div className="space-y-1">
              <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Core Stack</span>
              <span className="font-semibold text-foreground">Next.js 15, Supabase, Node.js</span>
            </div>
          </div>
        </div>

        {/* Hero Visual: Editorial Financial Command Center Preview */}
        <div className="mt-12 rounded-3xl border border-border/80 bg-surface-100/90 dark:bg-surface-900/90 shadow-2xl overflow-hidden backdrop-blur-md">
          {/* Mock Browser Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-border/60 bg-surface-200/50 dark:bg-surface-950/50 text-[11px] font-mono text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-border" />
                <span className="w-2.5 h-2.5 rounded-full bg-border" />
                <span className="w-2.5 h-2.5 rounded-full bg-border" />
              </div>
              <span className="hidden sm:inline text-xs text-foreground font-semibold ml-2">app.aicfo.internal/workspace</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                Deterministic Demo Dataset
              </span>
              <span className="text-muted-foreground">Q3 Fiscal Year</span>
            </div>
          </div>

          {/* Main Financial Composition */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Top Row: Executive Financial Position */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-surface-50 dark:bg-surface-950/60 border border-border/60 space-y-1">
                <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground uppercase">
                  <span>Net Cash Liquidity</span>
                  <span className="text-emerald-400 font-bold">+6.4% MoM</span>
                </div>
                <div className="text-2xl font-bold font-mono tracking-tight text-foreground">$342,850</div>
                <span className="text-[11px] text-muted-foreground block">Across 3 Operating & Treasury Accounts</span>
              </div>

              <div className="p-4 rounded-2xl bg-surface-50 dark:bg-surface-950/60 border border-border/60 space-y-1">
                <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground uppercase">
                  <span>30-Day Net Cash Flow</span>
                  <span className="text-emerald-400 font-bold">Inflow &gt; Outflow</span>
                </div>
                <div className="text-2xl font-bold font-mono tracking-tight text-emerald-500">+$28,400</div>
                <span className="text-[11px] text-muted-foreground block">$94.2K Inflows &middot; $65.8K Outflows</span>
              </div>

              <div className="p-4 rounded-2xl bg-surface-50 dark:bg-surface-950/60 border border-border/60 space-y-1">
                <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground uppercase">
                  <span>Forecast Runway</span>
                  <span className="text-blue-400 font-bold">Base Model</span>
                </div>
                <div className="text-2xl font-bold font-mono tracking-tight text-foreground">14.2 Months</div>
                <span className="text-[11px] text-muted-foreground block">Net Monthly Burn: $24.1K</span>
              </div>

              <div className="p-4 rounded-2xl bg-surface-50 dark:bg-surface-950/60 border border-border/60 space-y-1">
                <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground uppercase">
                  <span>Upcoming Obligations</span>
                  <span className="text-amber-400 font-bold">14 Days</span>
                </div>
                <div className="text-2xl font-bold font-mono tracking-tight text-foreground">$31,200</div>
                <span className="text-[11px] text-muted-foreground block">Payroll, Cloud Infrastructure & Taxes</span>
              </div>
            </div>

            {/* Middle Row: Visual Cash Flow & Forecast Curve */}
            <div className="p-6 rounded-2xl bg-surface-50 dark:bg-surface-950/60 border border-border/60 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block">
                    Cash Curve &amp; 6-Month Predictive Horizon
                  </span>
                  <p className="text-sm font-semibold text-foreground">
                    Historical Actuals vs. Forward Scenario Trajectory
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-0.5 bg-emerald-500" />
                    <span className="text-foreground">Actuals (Solid)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-0.5 border-t-2 border-dashed border-amber-400" />
                    <span className="text-foreground">Forecast (Dashed)</span>
                  </div>
                </div>
              </div>

              {/* Simplified SVG Trajectory Chart */}
              <div className="relative w-full h-44 sm:h-52 pt-4">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 700 180" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="actualsGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="forecastGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Background Grid Lines */}
                  <line x1="0" y1="30" x2="700" y2="30" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="3 3" />
                  <line x1="0" y1="80" x2="700" y2="80" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="3 3" />
                  <line x1="0" y1="130" x2="700" y2="130" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="3 3" />

                  {/* Actuals Area & Path (Jan to Jun: x=0 to 350) */}
                  <path
                    d="M 0 140 Q 90 120, 160 110 T 260 85 T 350 70 L 350 180 L 0 180 Z"
                    fill="url(#actualsGrad)"
                  />
                  <path
                    d="M 0 140 Q 90 120, 160 110 T 260 85 T 350 70"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Forecast Area & Path (Jul to Dec: x=350 to 700) */}
                  <path
                    d="M 350 70 Q 440 60, 520 50 T 620 40 T 700 32 L 700 180 L 350 180 Z"
                    fill="url(#forecastGrad)"
                  />
                  <path
                    d="M 350 70 Q 440 60, 520 50 T 620 40 T 700 32"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2.5"
                    strokeDasharray="5 5"
                    strokeLinecap="round"
                  />

                  {/* Boundary Indicator between Actuals & Forecast */}
                  <line x1="350" y1="20" x2="350" y2="175" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="2 2" />
                  <circle cx="350" cy="70" r="4" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
                </svg>

                {/* X-Axis labels */}
                <div className="flex justify-between text-[10px] font-mono text-muted-foreground pt-2">
                  <span>Jan (Actual)</span>
                  <span>Mar (Actual)</span>
                  <span>May (Actual)</span>
                  <span className="text-emerald-400 font-bold">Jun (Today)</span>
                  <span className="text-amber-400">Aug (Forecast)</span>
                  <span className="text-amber-400">Oct (Forecast)</span>
                  <span className="text-amber-400">Dec (Forecast)</span>
                </div>
              </div>
            </div>

            {/* Bottom Row: AI Copilot Strategic Summary Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider">
                      AI CFO Strategic Brief
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground">Confidence: 94%</span>
                  </div>
                  <p className="text-xs text-foreground leading-relaxed max-w-2xl">
                    Operating expenses stabilized at $65.8K/mo. Projected cash reserves comfortably absorb the planned Q3 senior hire while preserving 12+ months of runway buffer.
                  </p>
                </div>
              </div>

              <div className="text-[11px] font-mono text-muted-foreground shrink-0 pl-11 sm:pl-0">
                <span>Model: Claude 3.5 Sonnet / Structured JSON</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
