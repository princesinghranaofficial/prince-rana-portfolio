'use client';

import * as React from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Database, 
  Layers, 
  Sparkles,
  CheckCircle2,
  Globe2,
  Mail,
  Instagram,
  Twitter,
  Linkedin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/lib/analytics';

export function AboutHeroIdentity() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      {/* Left: Headline & Concise Story */}
      <div className="lg:col-span-7 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-muted text-accent text-xs font-mono border border-accent/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for Selected International Engagements</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.08]">
          I design and build software from product idea to production.
        </h1>

        <p className="text-lg sm:text-xl text-text-secondary leading-relaxed font-normal">
          I’m a full-stack SaaS and AI product developer focused on turning complex product ideas into clear, usable, and production-minded software.
        </p>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Based in India, collaborating with founders, startups, and product teams internationally across North America, Europe, and Asia. I operate as a dedicated senior technical partner—bringing product strategy, visual UI/UX design, and hardened full-stack engineering together under one accountable workflow.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap gap-4 items-center">
          <Link href="/start-project" onClick={() => trackEvent('about_start_project_clicked')}>
            <Button variant="primary" size="lg" rightIcon={<ArrowUpRight className="w-4 h-4" />}>
              Start a Project
            </Button>
          </Link>
          <Link href="/book" onClick={() => trackEvent('about_book_call_clicked')}>
            <Button variant="outline" size="lg">
              Book a Discovery Call
            </Button>
          </Link>
          <Link href="/work" onClick={() => trackEvent('about_work_clicked')}>
            <Button variant="ghost" size="lg" className="text-xs font-mono">
              View Verified Work &rarr;
            </Button>
          </Link>
        </div>

        {/* Verified Profile Links */}
        <div className="flex items-center gap-6 pt-4 border-t border-border/60 text-xs font-mono text-muted-foreground">
          <span className="text-foreground font-semibold">Direct Connect:</span>
          <a
            href="https://www.linkedin.com/in/prince-kumar-b2053a200/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://x.com/SinghRana86251"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            <Twitter className="w-3.5 h-3.5" />
            <span>Twitter</span>
          </a>
          <a
            href="https://www.instagram.com/itprince.ai?stkn=MWVrMzE2cWc0dXp2OA=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>Instagram</span>
          </a>
          <a
            href="mailto:princesinghranaofficial@gmail.com"
            className="hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>
      </div>

      {/* Right: Bespoke Editorial Identity Showcase (No Fake Human Portrait) */}
      <div className="lg:col-span-5">
        <div className="rounded-3xl border border-border/80 bg-surface-50/70 dark:bg-surface-900/70 p-6 md:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden space-y-6">
          {/* Subtle architectural background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(120,120,120,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,0.05)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />

          {/* Header Badge */}
          <div className="flex items-center justify-between border-b border-border/60 pb-5 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-foreground text-background flex items-center justify-center font-mono text-lg font-black tracking-tight shadow-md">
                PSR
              </div>
              <div>
                <span className="text-base font-bold text-foreground block">Prince Singh Rana</span>
                <span className="text-xs font-mono text-accent">Full-Stack SaaS & AI Developer</span>
              </div>
            </div>
            <div className="p-2 rounded-xl bg-surface-100 dark:bg-surface-800 border border-border/50 text-foreground">
              <Terminal className="w-4 h-4 text-accent" />
            </div>
          </div>

          {/* Architectural Positioning Summary */}
          <div className="space-y-3 relative z-10">
            <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
              Operating Profile
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-surface-100/70 dark:bg-surface-950/70 border border-border/60 space-y-1">
                <span className="text-muted-foreground block text-[10px] font-mono">ROLE</span>
                <span className="font-bold text-foreground block">Solo Lead Engineer</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-100/70 dark:bg-surface-950/70 border border-border/60 space-y-1">
                <span className="text-muted-foreground block text-[10px] font-mono">OVERHEAD</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 block">Zero Agency Bloat</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-100/70 dark:bg-surface-950/70 border border-border/60 space-y-1">
                <span className="text-muted-foreground block text-[10px] font-mono">ENGAGEMENT</span>
                <span className="font-bold text-foreground block">$1.5K–$15K+ Scope</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-100/70 dark:bg-surface-950/70 border border-border/60 space-y-1">
                <span className="text-muted-foreground block text-[10px] font-mono">AVAILABILITY</span>
                <span className="font-bold text-foreground block">Selected Projects</span>
              </div>
            </div>
          </div>

          {/* Monitored Verification Checklist */}
          <div className="space-y-2.5 pt-2 border-t border-border/60 relative z-10">
            <div className="flex items-center gap-2.5 text-xs text-foreground/90 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Full-Stack Architecture from Relational DB to Fluid UI</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-foreground/90 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Row Level Security (RLS) Multi-Tenant Isolation</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-foreground/90 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Deterministic AI Workflows with Strict Zod Extraction</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-foreground/90 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Direct Technical Communication via Loom & Slack</span>
            </div>
          </div>

          {/* Location & Client Scope Strip */}
          <div className="p-3 rounded-xl bg-accent-muted/40 border border-accent/20 text-xs font-mono flex items-center justify-between text-foreground relative z-10">
            <div className="flex items-center gap-2">
              <Globe2 className="w-3.5 h-3.5 text-accent" />
              <span>Global Client Base (US, EU, APAC)</span>
            </div>
            <span className="text-[10px] text-accent font-bold uppercase">Remote</span>
          </div>
        </div>
      </div>
    </div>
  );
}
