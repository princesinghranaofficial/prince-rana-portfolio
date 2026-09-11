import * as React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Workflow, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Code2,
  ExternalLink,
  Layers
} from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Container, Section } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { AboutHeroIdentity } from '@/components/about/about-hero-identity';
import { 
  EditorialPrinciples, 
  CapabilitiesWithProof, 
  TechnicalPhilosophy, 
  ClientCollaborationSection, 
  WhatIOptimizeFor 
} from '@/components/about/about-editorial';
import { 
  ProductArchitectureVisual, 
  AISystemPhilosophyVisual 
} from '@/components/about/about-architecture-visual';

import { BreadcrumbJsonLd, JsonLdScript } from '@/components/seo/json-ld';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'About — Full-Stack SaaS & AI Product Developer',
  description:
    'Full-Stack SaaS and AI product developer turning complex product ideas into clear, usable, and production-minded software. Product thinking and engineering in one workflow.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Prince Singh Rana — Full-Stack SaaS & AI Product Developer',
    description:
      'Full-Stack SaaS and AI product developer turning complex product ideas into clear, usable, and production-minded software. Product thinking and engineering in one workflow.',
    url: '/about',
    type: 'profile',
  },
};

export default function AboutPage() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author.name,
    jobTitle: siteConfig.primaryPositioning,
    description:
      'Senior full-stack product developer specializing in multi-tenant SaaS platforms, production AI copilots, and high-conversion web applications.',
    url: siteConfig.url,
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.instagram,
    ].filter(Boolean),
    knowsAbout: [
      'SaaS Architecture',
      'Artificial Intelligence & LLM Integration',
      'Full-Stack Web Development',
      'Next.js & React',
      'PostgreSQL & Supabase Row Level Security',
      'Product UI/UX Design Systems',
    ],
  };

  const productThinkingSteps = [
    { title: 'Problem', subtitle: 'Commercial friction & user pain' },
    { title: 'User', subtitle: 'Motivation, habits & incentives' },
    { title: 'Workflow', subtitle: 'State transitions & journey map' },
    { title: 'System', subtitle: 'Data models & RLS boundary' },
    { title: 'Interface', subtitle: 'Ergonomics & responsive UI' },
    { title: 'Engineering', subtitle: 'Type-safe server actions & APIs' },
    { title: 'Outcome', subtitle: 'Measurable client conversion' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent/20 selection:text-accent">
      {/* Structured Data */}
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ]}
      />
      <JsonLdScript data={personSchema} />

      <Navbar />

      <main id="main-content" className="flex-1 pt-32 pb-24 space-y-24 md:space-y-32">
        {/* Section 01: Hero & Personal Identity */}
        <section>
          <Container size="default">
            <AboutHeroIdentity />
          </Container>
        </section>

        {/* Section 02: Core Positioning — "I Don't Separate Product Thinking From Engineering" */}
        <section className="py-16 md:py-24 border-y border-border/70 bg-surface-50/40 dark:bg-surface-950/40">
          <Container size="default">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
                  Core Differentiator
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
                  I don&apos;t separate product thinking from engineering.
                </h2>
              </div>

              <div className="lg:col-span-7 space-y-6 text-base text-muted-foreground leading-relaxed">
                <p>
                  In traditional agency structures, product managers write PRDs, designers draw static Figma artboards, and developers write code to match screenshots without understanding commercial intent. The result is almost always the same: mismatched data structures, awkward edge cases, ballooning timelines, and fragile software.
                </p>
                <p>
                  High-performing SaaS requires thinking about <strong className="text-foreground">users, workflows, information architecture, relational database constraints, API boundaries, and business goals simultaneously</strong> before writing components.
                </p>
                <p className="text-foreground font-medium border-l-2 border-accent pl-4">
                  When the person architecting the PostgreSQL database also designs the responsive interaction state, every edge case is handled natively and features ship in days instead of months.
                </p>
              </div>
            </div>

            {/* Product Thinking Pipeline */}
            <div className="mt-16 pt-12 border-t border-border/60 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-mono uppercase tracking-wider font-bold text-foreground">
                  The Product Thinking Progression
                </span>
                <span className="text-xs font-mono text-muted-foreground">
                  Development starts long before writing UI components
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                {productThinkingSteps.map((stg, idx) => (
                  <div
                    key={stg.title}
                    className="p-4 rounded-xl border border-border/60 bg-surface-50 dark:bg-surface-900 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-accent">0{idx + 1}</span>
                      {idx < productThinkingSteps.length - 1 && (
                        <span className="text-muted-foreground/40 text-xs hidden lg:inline">&rarr;</span>
                      )}
                    </div>
                    <div className="text-xs font-bold text-foreground">{stg.title}</div>
                    <div className="text-[11px] text-muted-foreground leading-tight">{stg.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Section 03: 4 Core Editorial Principles (No Generic Cards) */}
        <section>
          <Container size="default">
            <EditorialPrinciples />
          </Container>
        </section>

        {/* Section 04: End-to-End Product Architecture Visual */}
        <section>
          <Container size="default">
            <ProductArchitectureVisual />
          </Container>
        </section>

        {/* Section 05: Complexity Philosophy */}
        <section className="py-16 md:py-20 border-y border-border/70 bg-surface-50/40 dark:bg-surface-950/40">
          <Container size="default">
            <div className="max-w-3xl space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
                SaaS Ergonomics
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Complex software does not need to feel complicated.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Whether you are managing multi-currency cash flow forecasting or enterprise accounts receivable collections, operational complexity is inevitable. But cognitive exhaustion is a design failure.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                By pairing strict information hierarchy with predictable keyboard navigation, contextual data density, and deterministic status feedback, I turn high-stakes enterprise tools into clean, calm, and trustworthy workflows that non-technical operators master immediately.
              </p>
            </div>
          </Container>
        </section>

        {/* Section 06: AI Product Philosophy & Deterministic Pipeline */}
        <section>
          <Container size="default">
            <AISystemPhilosophyVisual />
          </Container>
        </section>

        {/* Section 07: Verified Capabilities Connected to Proof */}
        <section>
          <Container size="default">
            <CapabilitiesWithProof />
          </Container>
        </section>

        {/* Section 08: Technical Philosophy & Contextual Tech Stack */}
        <section>
          <Container size="default">
            <TechnicalPhilosophy />
          </Container>
        </section>

        {/* Section 09: What I Optimize For */}
        <section>
          <Container size="default">
            <WhatIOptimizeFor />
          </Container>
        </section>

        {/* Section 10: Client Collaboration & Milestone Transparency */}
        <section>
          <Container size="default">
            <ClientCollaborationSection />
          </Container>
        </section>

        {/* Section 11: The Work Behind the Approach (CollectAI, AI CFO, Product Lab) */}
        <section className="py-16 md:py-20 border-t border-border/70 bg-surface-50/40 dark:bg-surface-950/40">
          <Container size="default">
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-3 max-w-2xl">
                  <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
                    Documented Evidence
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                    The Work Behind the Approach
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Explore the production architectures and multi-screen showcases referenced throughout this portfolio.
                  </p>
                </div>
                <Link href="/work">
                  <Button variant="outline" size="sm" rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}>
                    View All Work
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* CollectAI Card */}
                <div className="p-6 rounded-2xl border border-border/80 bg-surface-50 dark:bg-surface-900 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        BUILT PRODUCT
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">B2B Fintech SaaS</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">CollectAI</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      AI accounts receivable recovery agent. Demonstrates automated dunning workflows, multi-tenant org models, audit logs, and Stripe webhooks.
                    </p>
                  </div>
                  <Link href="/work/collectai">
                    <Button variant="ghost" size="sm" className="w-full justify-between text-xs font-mono">
                      <span>Read Flagship Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>

                {/* AI CFO Card */}
                <div className="p-6 rounded-2xl border border-border/80 bg-surface-50 dark:bg-surface-900 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        BUILT PRODUCT
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">Financial Intelligence</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">AI CFO & Copilot</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Autonomous financial analyst for SaaS. Demonstrates multi-currency cash flow modeling, deterministic forecasting, and scenario planning.
                    </p>
                  </div>
                  <Link href="/work/ai-cfo">
                    <Button variant="ghost" size="sm" className="w-full justify-between text-xs font-mono">
                      <span>Read Flagship Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>

                {/* Product Lab Card */}
                <div className="p-6 rounded-2xl border border-border/80 bg-surface-50 dark:bg-surface-900 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full font-bold bg-accent/10 text-accent border border-accent/20">
                        SELF-DIRECTED PRODUCT CONCEPTS
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">15 Full Products</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Product Lab</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      75 specialized screens across Healthcare, Cybersecurity, Real Estate, and Developer Tooling, proving domain range and specialized UX patterns.
                    </p>
                  </div>
                  <Link href="/lab">
                    <Button variant="ghost" size="sm" className="w-full justify-between text-xs font-mono">
                      <span>Explore Product Lab</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 12: Final Conversion CTA */}
        <section>
          <Container size="default">
            <div className="p-8 sm:p-14 rounded-3xl border border-accent/30 bg-surface-50/80 dark:bg-surface-900/80 backdrop-blur-md text-center space-y-8 shadow-xl">
              <div className="space-y-3 max-w-2xl mx-auto">
                <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
                  Work Together
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                  Have a product worth building properly?
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  If you&apos;re planning a SaaS platform, AI product, or high-quality web experience, tell me what you&apos;re building and where you need help.
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

              <div className="pt-4 border-t border-border/60 max-w-lg mx-auto flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-muted-foreground">
                <span>Engagements: $1.5K–$15K+</span>
                <span>&bull;</span>
                <span>Fixed Scope Milestones</span>
                <span>&bull;</span>
                <span>Global Remote</span>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
