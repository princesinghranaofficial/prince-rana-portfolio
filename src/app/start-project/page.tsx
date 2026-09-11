import * as React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Container } from '@/components/ui/container';
import { MultiStepInquiryForm } from '@/components/inquiry/multi-step-inquiry-form';
import { ShieldCheck, Calendar, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Start a Project — SaaS & AI Development Qualification',
  description:
    'Share your product requirements, current stage, scope, and budget. Direct technical qualification with Prince Rana for SaaS platforms, AI automation systems, and web engineering.',
  alternates: {
    canonical: '/start-project',
  },
  openGraph: {
    title: 'Start a Project — SaaS & AI Development Qualification | Prince Rana',
    description:
      'Share your product requirements, current stage, scope, and budget. Direct technical qualification with Prince Rana for SaaS platforms, AI automation systems, and web engineering.',
    url: '/start-project',
    siteName: 'Prince Rana',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start a Project — SaaS & AI Development Qualification | Prince Rana',
    description:
      'Share your product requirements, current stage, scope, and budget. Direct technical qualification with Prince Rana for SaaS platforms, AI automation systems, and web engineering.',
  },
};

const trustPillars = [
  'SaaS Platforms',
  'AI Copilots & Workflows',
  'Full-Stack Architecture',
  'Conversion Websites',
  'International Engagements',
];

export default function StartProjectPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent/20 selection:text-accent">
      {/* Structured Data */}
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Start a Project', path: '/start-project' },
        ]}
      />

      <Navbar />

      <main id="main-content" className="flex-1 pt-32 pb-24 space-y-12">
        <Container size="default">
          {/* Header */}
          <div className="max-w-3xl space-y-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-muted text-accent text-xs font-mono border border-accent/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Project Scoping &amp; Qualification</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.08]">
              Tell me what you&apos;re building.
            </h1>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Share the product, current stage, requirements, and budget. This gives me enough context to understand the technical architecture before we speak.
            </p>
          </div>

          {/* Compact Trust Row */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 pb-8 text-xs font-mono text-muted-foreground border-b border-border/60">
            <span className="text-foreground font-semibold">Specialized In:</span>
            {trustPillars.map((pillar, idx) => (
              <React.Fragment key={pillar}>
                <span className="text-foreground/90">{pillar}</span>
                {idx < trustPillars.length - 1 && (
                  <span className="text-border select-none">&bull;</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Multi-Step Onboarding Form */}
          <div className="mt-8 max-w-4xl mx-auto">
            <MultiStepInquiryForm />
          </div>

          {/* Alternative Conversion Link */}
          <div className="mt-16 text-center text-xs text-muted-foreground max-w-md mx-auto space-y-2">
            <p>
              Prefer an exploratory conversation before submitting full details?
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-1.5 font-mono text-accent hover:underline font-bold"
            >
              <span>Book a 30-Minute Discovery Call instead &rarr;</span>
            </Link>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
