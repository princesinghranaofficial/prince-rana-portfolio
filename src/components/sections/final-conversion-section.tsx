import * as React from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  MessageSquare, 
  ArrowUpRight, 
  Check 
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export function FinalConversionSection() {
  return (
    <section className="py-24 md:py-36 border-t border-border/80 bg-surface-muted/30 relative overflow-hidden">
      {/* Background Subtle Radial Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent/8 blur-[120px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <Container size="narrow">
        <div className="rounded-3xl border border-border bg-surface p-8 sm:p-14 text-center space-y-8 shadow-sm relative">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-muted text-accent text-xs font-mono border border-accent/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Q2 / Sprints Booking</span>
          </div>

          {/* Headline & Body */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
              Let&apos;s build something worth using.
            </h2>
            <p className="type-body text-text-secondary">
              Whether you need a complete SaaS platform designed and engineered from scratch, an AI copilot embedded into your application, or a high-converting web experience — let&apos;s discuss your roadmap.
            </p>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link href="/book" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto font-semibold shadow-sm"
                leftIcon={<Calendar className="w-4 h-4" />}
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
              >
                Book a 30-Min Call
              </Button>
            </Link>

            <Link href="/start-project" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto font-medium"
                leftIcon={<MessageSquare className="w-4 h-4" />}
              >
                Start a Project Inquiry
              </Button>
            </Link>
          </div>

          {/* Commercial & Contact Metadata Strip */}
          <div className="pt-8 border-t border-border/60 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-text-secondary">
            <div className="p-3 rounded-xl bg-surface-muted/60 border border-border/50 space-y-1">
              <span className="text-[10px] uppercase text-text-secondary font-bold block">Typical Engagements</span>
              <span className="text-text-primary font-semibold block">Starts at $1,500</span>
            </div>

            <div className="p-3 rounded-xl bg-surface-muted/60 border border-border/50 space-y-1">
              <span className="text-[10px] uppercase text-text-secondary font-bold block">Sprint Turnaround</span>
              <span className="text-text-primary font-semibold block">2–6 Weeks Delivery</span>
            </div>

            <div className="p-3 rounded-xl bg-surface-muted/60 border border-border/50 space-y-1">
              <span className="text-[10px] uppercase text-text-secondary font-bold block">Direct Developer Email</span>
              <a 
                href="mailto:princesinghranaofficial@gmail.com" 
                className="text-text-primary font-semibold block hover:text-accent transition-colors truncate"
              >
                princesinghranaofficial@gmail.com
              </a>
            </div>
          </div>

          {/* Understated Commercial Qualification Note */}
          <div className="pt-1 text-center">
            <p className="text-xs text-text-secondary font-mono">
              Projects typically start at $1,500, with larger SaaS and AI builds scoped individually.{' '}
              <Link 
                href="/services#investment"
                className="text-accent hover:underline font-semibold inline-flex items-center gap-0.5 ml-1"
              >
                <span>View Services &amp; Investment</span>
                <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
              </Link>
            </p>
          </div>

          {/* Trust Value Badges */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-text-secondary font-mono">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              Direct Developer Communication
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              Zero Agency Overhead
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              Production-Grade TypeScript
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
