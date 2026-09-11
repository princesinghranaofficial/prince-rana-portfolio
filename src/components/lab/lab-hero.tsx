import * as React from 'react';
import { FlaskConical, ShieldCheck, Sparkles, Layers, Cpu, Compass } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { H1, TextLead } from '@/components/ui/typography';

export function LabHero() {
  return (
    <section className="relative pt-32 pb-14 overflow-hidden border-b border-border/40 bg-surface-50/50 dark:bg-surface-950/40">
      {/* Subtle ambient lighting */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-20 dark:opacity-30 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle at 50% 20%, rgba(99, 102, 241, 0.25), rgba(16, 185, 129, 0.15), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <Container size="default">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-muted text-accent text-xs font-mono border border-accent/20">
            <FlaskConical className="w-3.5 h-3.5 animate-pulse" />
            <span>THE PRODUCT LAB &middot; ARCHITECTURAL EXPLORATIONS</span>
          </div>

          {/* Headline */}
          <div>
            <H1 className="tracking-tight text-3xl sm:text-5xl lg:text-6xl">
              15 SaaS & AI Product Architectures
            </H1>
          </div>

          {/* Subtitle */}
          <div>
            <TextLead className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              An experimental product studio showcasing 15 self-directed software architectures. Designed to demonstrate full-stack depth, domain intelligence, and SaaS systems design across diverse industries.
            </TextLead>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-2 pb-2 text-xs font-mono text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-accent" />
              <span><strong className="text-foreground">15</strong> Product Concepts</span>
            </div>
            <span className="hidden sm:inline text-border">&bull;</span>
            <div className="flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-emerald-400" />
              <span><strong className="text-foreground">15</strong> Industry Domains</span>
            </div>
            <span className="hidden sm:inline text-border">&bull;</span>
            <div className="flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-indigo-400" />
              <span><strong className="text-foreground">75</strong> Screen Specifications</span>
            </div>
            <span className="hidden sm:inline text-border">&bull;</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span><strong className="text-foreground">Zero</strong> Fabricated Metrics</span>
            </div>
          </div>

          {/* Transparency Callout */}
          <div className="p-4 sm:p-5 rounded-2xl border border-amber-500/25 bg-amber-500/5 dark:bg-amber-500/10 text-left max-w-3xl mx-auto space-y-2 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-semibold text-xs uppercase tracking-wider font-mono">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Product Lab Transparency Notice</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Every project in the Product Lab is a <strong>self-directed architectural concept</strong> and engineering exploration designed and coded by Prince Singh Rana. No fabricated client names, false ARR numbers, or mock testimonials are presented. Each entry reflects authentic SaaS problem analysis, production-grade technical blueprints, and scalable interface design.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
