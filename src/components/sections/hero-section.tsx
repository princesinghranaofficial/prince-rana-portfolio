import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { DisplayXL, BodyLarge } from '@/components/ui/typography';
import { HeroProductShowcase } from '@/components/sections/hero-product-showcase';

const techStack = [
  'TypeScript',
  'Node.js',
  'Supabase',
  'PostgreSQL',
  'Cloudflare',
  'Vercel',
];

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle Restrained Ambient Canvas Tonal Shift */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[480px] bg-gradient-to-b from-accent-muted/40 via-transparent to-transparent pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container size="wide">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* POSITIONING LABEL (UNDERSTATED EYEBROW) */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-border text-[11px] font-mono uppercase tracking-widest text-text-secondary select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
              <span>Prince Rana — SaaS Developer &amp; AI Automation Developer</span>
            </div>
          </div>

          {/* PRIMARY HEADLINE - LCP ELEMENT: INSTANT SERVER RENDER */}
          <DisplayXL className="max-w-3xl mx-auto leading-[1.06] text-foreground">
            SaaS Developer Building AI-Powered Products &amp; Automation Systems
          </DisplayXL>

          {/* CONCISE SUPPORTING COPY */}
          <BodyLarge className="max-w-2xl mx-auto text-text-secondary">
            I design and engineer production-ready SaaS platforms, AI automation systems, and high-performance web applications with Next.js, TypeScript, and Supabase.
          </BodyLarge>

          {/* PRIMARY & SECONDARY CTA GROUP */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link href="/book" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto font-semibold shadow-sm hover:shadow-md"
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
              >
                Book a Call
              </Button>
            </Link>

            <Link href="/work" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto font-medium"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                View My Work
              </Button>
            </Link>
          </div>

          {/* RESTRAINED AVAILABILITY STATUS */}
          <div className="flex items-center justify-center gap-2 pt-1 text-xs font-mono text-text-secondary">
            <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
            <span>Available for selected SaaS &amp; AI engagements ($1.5K–$15K+)</span>
          </div>
        </div>

        {/* HERO PRODUCT SHOWCASE (COLLECTAI & AI CFO COMPOSITION) */}
        <div className="pt-2">
          <HeroProductShowcase />
        </div>

        {/* CREDIBILITY & TECHNOLOGY ARCHITECTURE STRIP */}
        <div className="pt-6 pb-4 border-t border-border/60 max-w-4xl mx-auto text-center space-y-3">
          <p className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">
            Core Production Architecture &amp; Technology Standards
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded-full bg-surface-100 text-text-secondary border border-border hover:border-border-strong hover:text-text-primary transition-colors select-none"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
