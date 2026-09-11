import * as React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, ShieldAlert, Layers } from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Container, Section } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { 
  InteractiveProcessFlow, 
  ProcessTimelineAndScope, 
  ProcessFAQs 
} from '@/components/process/process-flow';

import { BreadcrumbJsonLd, JsonLdScript } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Product Development Process',
  description:
    'A structured 8-stage engineering methodology from commercial discovery and PostgreSQL schema architecture to full-stack build, validation, and production deployment.',
  alternates: {
    canonical: '/process',
  },
  openGraph: {
    title: 'Product Development Process | Prince Singh Rana',
    description:
      'A structured 8-stage engineering methodology from commercial discovery and PostgreSQL schema architecture to full-stack build, validation, and production deployment.',
    url: '/process',
    type: 'website',
  },
};

export default function ProcessPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'SaaS Product Development Process',
    description: 'The 8-stage engineering lifecycle used by Prince Singh Rana to build production SaaS products.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Discover',
        text: 'Deconstruct commercial requirements, target audience, and business goals.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Define',
        text: 'Establish MVP boundaries, core workflow state machines, and acceptance criteria.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Architect',
        text: 'Design normalized PostgreSQL schema, Row Level Security rules, and API boundaries.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Design',
        text: 'Create tokenized UI design system, responsive dashboards, and accessible components.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Build',
        text: 'Implement type-safe TypeScript code, Next.js server actions, AI pipelines, and payments.',
      },
      {
        '@type': 'HowToStep',
        position: 6,
        name: 'Validate',
        text: 'Run automated type checks, cross-tenant security audits, and 9-breakpoint responsive QA.',
      },
      {
        '@type': 'HowToStep',
        position: 7,
        name: 'Launch',
        text: 'Deploy to Vercel edge network with custom domain SSL, secrets vaults, and handover.',
      },
      {
        '@type': 'HowToStep',
        position: 8,
        name: 'Iterate',
        text: 'Analyze user telemetry and execute phased feature roadmap enhancements.',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent/20 selection:text-accent">
      {/* Structured Data */}
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Process', path: '/process' },
        ]}
      />
      <JsonLdScript data={howToSchema} />

      <Navbar />

      <main id="main-content" className="flex-1 pt-32 pb-24 space-y-24 md:space-y-32">
        {/* Hero Section */}
        <section>
          <Container size="default">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-muted text-accent text-xs font-mono border border-accent/20">
                <span>Predictable Delivery</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                A clear path from product idea to production.
              </h1>
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
                A structured development process reduces ambiguity, catches technical risks early, and keeps product decisions connected to the original business problem.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Link href="/start-project">
                  <Button variant="primary" size="lg" rightIcon={<ArrowUpRight className="w-4 h-4" />}>
                    Initiate Stage 01
                  </Button>
                </Link>
                <Link href="/book">
                  <Button variant="outline" size="lg">
                    Book an Intro Call
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 01: 8-Stage Interactive Process Flow */}
        <section>
          <Container size="default">
            <InteractiveProcessFlow />
          </Container>
        </section>

        {/* Section 02: Timeline & Scope Reality */}
        <section className="py-16 md:py-24 border-y border-border/70 bg-surface-50/40 dark:bg-surface-950/40">
          <Container size="default">
            <ProcessTimelineAndScope />
          </Container>
        </section>

        {/* Section 03: Client Responsibilities & Collaboration */}
        <section>
          <Container size="default">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
                  Two-Way Partnership
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  What Improves Project Momentum
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Building exceptional software is an active collaboration. Projects move fastest and deliver the highest ROI when both sides uphold practical operational habits.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="p-5 rounded-2xl border border-border/70 bg-surface-50/60 dark:bg-surface-900/60 space-y-2">
                  <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Designated Decision-Maker</span>
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Having a single, clear product owner who signs off on sprint milestones prevents conflicting team opinions and keeps development sprints moving forward.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-border/70 bg-surface-50/60 dark:bg-surface-900/60 space-y-2">
                  <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Timely Milestone Feedback</span>
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Testing interactive staging previews within 48 hours allows feedback to be implemented while the code context is fresh, avoiding scheduling bottlenecks.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-border/70 bg-surface-50/60 dark:bg-surface-900/60 space-y-2">
                  <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Domain & Credentials Access</span>
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Providing API credentials (Stripe, GitHub, Supabase) during Stage 01 ensures zero friction when connecting integrations and testing staging environments.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 04: FAQs */}
        <section>
          <Container size="default">
            <ProcessFAQs />
          </Container>
        </section>

        {/* Section 05: Final Process CTA */}
        <section>
          <Container size="default">
            <div className="p-8 sm:p-14 rounded-3xl border border-accent/30 bg-surface-50/80 dark:bg-surface-900/80 backdrop-blur-md text-center space-y-8 shadow-xl">
              <div className="space-y-3 max-w-2xl mx-auto">
                <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
                  Start Step 01
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                  Ready to map your product roadmap?
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Tell me about your product concept, target audience, and ideal timeline. I&apos;ll provide an initial scope breakdown and architectural recommendation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
                <Link href="/start-project">
                  <Button variant="primary" size="lg" rightIcon={<ArrowUpRight className="w-4 h-4" />}>
                    Start a Project
                  </Button>
                </Link>
                <Link href="/book">
                  <Button variant="outline" size="lg">
                    Book a Discovery Call
                  </Button>
                </Link>
              </div>

              <div className="pt-4 border-t border-border/60 max-w-md mx-auto text-xs font-mono text-muted-foreground">
                <span>Stage 01 Kickoff within 3–5 Business Days of Scope Sign-Off</span>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
