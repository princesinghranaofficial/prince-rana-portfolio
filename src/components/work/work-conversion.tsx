import * as React from 'react';
import Link from 'next/link';
import { Calendar, MessageSquare, ArrowUpRight, Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export function WorkConversion() {
  return (
    <section className="py-24 md:py-36 border-b border-border/60 bg-surface-muted/30 relative overflow-hidden">
      {/* Background Accent Radial Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-accent/8 blur-[120px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <Container size="narrow">
        <div className="rounded-3xl border border-border bg-surface p-8 sm:p-14 text-center space-y-8 shadow-sm relative">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-muted text-accent text-xs font-mono border border-accent/20">
            <span>BUILDING SOMETHING?</span>
          </div>

          {/* Headline & Body */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
              Let&apos;s turn your product idea into something people can actually use.
            </h2>
            <p className="type-body text-text-secondary">
              Whether you&apos;re building a SaaS platform, AI product or high-performance web application, let&apos;s discuss the product, scope and technical approach.
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
                Book a Call
              </Button>
            </Link>

            <Link href="/start-project" className="w-full sm:w-auto">
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

          {/* Value Badges */}
          <div className="pt-6 border-t border-border/60 flex flex-wrap items-center justify-center gap-6 text-xs text-text-secondary font-mono">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              Direct Developer Access
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              Starts at $1,500
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              Production Architecture
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
