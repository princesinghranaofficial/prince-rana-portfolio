import * as React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { H2, TextLead } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';

export function LabConversion() {
  return (
    <section className="py-20 sm:py-28 border-t border-border/50 bg-gradient-to-b from-background via-surface-50/50 dark:via-surface-950/40 to-background relative overflow-hidden">
      {/* Background glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 pointer-events-none opacity-25 dark:opacity-30 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.3), rgba(20, 184, 166, 0.2), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <Container size="default">
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 lg:p-16 border border-border/80 bg-surface-100/80 dark:bg-surface-900/80 backdrop-blur-md shadow-2xl relative overflow-hidden text-center space-y-8">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-muted text-accent text-xs font-mono border border-accent/25">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FROM ARCHITECTURAL CONCEPT TO PRODUCTION SAAS</span>
          </div>

          {/* Heading */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <H2 className="text-2xl sm:text-4xl lg:text-5xl tracking-tight">
              Have a Product Idea You Want to Build?
            </H2>
            <TextLead className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Whether you need an end-to-end MVP built in weeks, an enterprise AI workflow, or a refined redesign of an existing SaaS product, I provide the architecture, UI/UX systems, and full-stack engineering to bring it to life.
            </TextLead>
          </div>

          {/* Value pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-left max-w-2xl mx-auto">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-background/50 border border-border/40">
              <Zap className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-semibold block text-foreground">Rapid Turnaround</span>
                <span className="text-muted-foreground">Production MVPs launched in 2 to 6 weeks.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-background/50 border border-border/40">
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-semibold block text-foreground">Enterprise Ready</span>
                <span className="text-muted-foreground">Row-level security, clean APIs, and audit trails.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-background/50 border border-border/40">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-semibold block text-foreground">Direct Partnership</span>
                <span className="text-muted-foreground">Zero agency overhead; work directly with the builder.</span>
              </div>
            </div>
          </div>

          {/* CTA Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/book" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto shadow-lg shadow-accent/20 text-sm font-semibold h-12 px-8"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book a Discovery Call
              </Button>
            </Link>

            <Link href="/start-project" className="w-full sm:w-auto">
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
            Typically booking $1.5K–$15K+ full-stack and AI product engagements &middot; Flexible sprints or milestone billing
          </p>
        </div>
      </Container>
    </section>
  );
}
