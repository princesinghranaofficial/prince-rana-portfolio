import * as React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Layers,
  Layout,
  Sparkles,
  Zap,
} from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Container } from '@/components/ui/container';
import { H1, H2, H3, TextLead } from '@/components/ui/typography';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LabConversion } from '@/components/lab/lab-conversion';
import { labProjects } from '@/data/lab-projects';
import { LabProjectCard } from '@/components/lab/lab-card';
import { ProductShowcase } from '@/components/lab/product-showcase-registry';
import { BreadcrumbJsonLd, ProjectJsonLd } from '@/components/seo/json-ld';

interface LabSlugPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return labProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: LabSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = labProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Concept Architecture Not Found',
    };
  }

  return {
    title: `${project.title} — ${project.category} Concept Architecture | Product Lab`,
    description: `${project.tagline}. ${project.description}`,
    alternates: {
      canonical: `/lab/${project.slug}`,
    },
    // Substantive interactive screens deployed across all concepts
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `${project.title} — ${project.category} Architecture | Product Lab | Prince Singh Rana`,
      description: project.description,
      images: [project.coverImage],
      url: `/lab/${project.slug}`,
      siteName: 'Prince Singh Rana Portfolio',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — ${project.category} Architecture | Product Lab`,
      description: project.tagline,
    },
  };
}

export default async function LabConceptDetailPage({ params }: LabSlugPageProps) {
  const { slug } = await params;
  const project = labProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find related projects
  const relatedProjects = labProjects.filter((p) =>
    project.relatedProjects.includes(p.slug)
  );

  const complexityColor = {
    Focused: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    Standard: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    Advanced: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  }[project.complexity];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent/20 selection:text-accent">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Product Lab', path: '/lab' },
          { name: project.title, path: `/lab/${project.slug}` },
        ]}
      />
      <ProjectJsonLd
        name={project.title}
        description={project.description}
        path={`/lab/${project.slug}`}
        image={project.coverImage}
        dateCreated={project.year}
        category={project.industry}
        technologies={[
          ...project.stack.frontend,
          ...project.stack.backend,
          ...project.stack.database,
          ...(project.stack.ai || []),
        ]}
        isSoftware={false}
      />
      <Navbar />

      <main id="main-content" className="flex-1 pt-28 pb-20">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-border/40 py-3.5 bg-surface-50/40 dark:bg-surface-950/40">
          <Container size="default">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <Link href="/work" className="hover:text-foreground transition-colors">
                Work
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-border" />
              <Link href="/lab" className="hover:text-foreground transition-colors">
                Product Lab
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-border" />
              <span className="text-foreground font-medium truncate">{project.title}</span>
            </div>
          </Container>
        </div>

        {/* Hero Section */}
        <section className="pt-10 pb-12 border-b border-border/40 bg-gradient-to-b from-surface-50/30 dark:from-surface-950/30 to-background">
          <Container size="default">
            <div className="max-w-4xl space-y-6">
              {/* Badges bar */}
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant={project.status === 'CONCEPT' ? 'concept' : 'prototype'}
                  size="sm"
                  className="font-mono text-xs uppercase tracking-wider"
                >
                  {project.status}
                </Badge>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${complexityColor}`}>
                  {project.complexity} Complexity
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-surface-200/70 dark:bg-surface-800/70 text-muted-foreground border border-border/60">
                  {project.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-surface-200/70 dark:bg-surface-800/70 text-muted-foreground border border-border/60">
                  {project.industry}
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-3">
                <H1 className="text-3xl sm:text-5xl tracking-tight">
                  {project.title}
                </H1>
                <TextLead className="text-accent font-medium text-lg sm:text-xl">
                  {project.tagline}
                </TextLead>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
                  {project.description}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/contact">
                  <Button size="md" className="shadow-md shadow-accent/20">
                    <Calendar className="w-4 h-4 mr-2" />
                    Discuss This Architecture
                  </Button>
                </Link>

                <Link href="/lab">
                  <Button variant="outline" size="md">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Product Lab
                  </Button>
                </Link>
              </div>

              {/* Transparency Callout */}
              <div className="p-4 sm:p-5 rounded-2xl border border-amber-500/25 bg-amber-500/5 dark:bg-amber-500/10 text-left space-y-1.5 mt-6">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-semibold text-xs font-mono uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>Architectural Concept Transparency Notice</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {project.title} is an architectural system design and UI blueprint engineered by Prince Singh Rana to explore product mechanics, domain UX, and scalable multi-tenant infrastructure. No fake clients, vanity ARR metrics, or simulated testimonials are presented.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Content Body */}
        <section className="py-14">
          <Container size="default">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Deep Architectural Specs */}
              <div className="lg:col-span-8 space-y-14">
                {/* 1. Problem & Architectural Solution */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider">
                    <Zap className="w-4 h-4" />
                    <span>01 &middot; Problem & Solution Breakdown</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-surface-100/60 dark:bg-surface-900/40 border border-border/70 space-y-3">
                      <H3 className="text-base font-semibold text-foreground flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                        The Domain Challenge
                      </H3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-surface-100/60 dark:bg-surface-900/40 border border-border/70 space-y-3">
                      <H3 className="text-base font-semibold text-foreground flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        The Engineered Solution
                      </H3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Interactive Product Showcase & Multi-Screen Architecture */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider">
                      <Layout className="w-4 h-4" />
                      <span>02 &middot; Interactive Product Showcase &amp; Multi-Screen Architecture</span>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">
                      5-Screen Interactive Suite
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Explore the live interactive screens for {project.title} below. Switch between views to inspect operational telemetry, domain-specific UX workflows, and full-stack software architecture engineered by Prince Singh Rana.
                  </p>

                  {/* Interactive Showcase Sandbox */}
                  <ProductShowcase slug={project.slug} />

                  {/* Architectural UI Blueprint */}
                  <div className="pt-8 space-y-4">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      Architectural Screen Specifications
                    </h4>
                    <div className="space-y-3">
                      {project.screens.map((screen, sIdx) => (
                        <div
                          key={screen.id}
                          className="p-4 rounded-xl bg-surface-50 dark:bg-surface-900/30 border border-border/60 hover:border-accent/40 transition-colors space-y-1.5"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="flex items-center gap-2.5">
                              <span className="w-5 h-5 rounded-full bg-accent/10 text-accent font-mono text-xs flex items-center justify-center font-bold">
                                {sIdx + 1}
                              </span>
                              <span className="text-sm font-semibold text-foreground">
                                {screen.title}
                              </span>
                            </div>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-200 dark:bg-surface-800 text-muted-foreground border border-border/50">
                              {screen.badge}
                            </span>
                          </div>

                          <p className="text-xs text-muted-foreground pl-7 leading-relaxed">
                            {screen.description}
                          </p>

                          <div className="pl-7 text-[11px] font-mono text-foreground/75 flex items-start gap-1.5">
                            <span className="text-accent shrink-0">&bull; Layout:</span>
                            <span>{screen.layoutDescription}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. Core Capabilities & Key Features */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider">
                    <Layers className="w-4 h-4" />
                    <span>03 &middot; Key Features & Technical Details</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.keyFeatures.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="p-5 rounded-2xl bg-surface-100/50 dark:bg-surface-900/40 border border-border/60 space-y-2.5"
                      >
                        <H3 className="text-sm font-semibold text-foreground">
                          {feature.title}
                        </H3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                        {feature.technicalDetail && (
                          <div className="pt-2 border-t border-border/40 text-[11px] font-mono text-accent/90">
                            <strong>Implementation:</strong> {feature.technicalDetail}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Full-Stack System Architecture Blueprint */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider">
                    <Cpu className="w-4 h-4" />
                    <span>04 &middot; Full-Stack Architecture Blueprint</span>
                  </div>

                  <div className="p-6 rounded-2xl bg-surface-100/70 dark:bg-surface-900/60 border border-border/70 space-y-6">
                    <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-sans">
                      {project.architecture}
                    </p>

                    {/* Architecture Notes */}
                    {project.architectureNotes && project.architectureNotes.length > 0 && (
                      <div className="space-y-2.5 pt-4 border-t border-border/60">
                        <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block">
                          Architectural Decision Records (ADRs)
                        </span>
                        <ul className="space-y-2">
                          {project.architectureNotes.map((note, nIdx) => (
                            <li
                              key={nIdx}
                              className="text-xs text-muted-foreground flex items-start gap-2"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                              <span>{note}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Stack Matrix Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border/60 text-xs">
                      <div>
                        <span className="font-mono text-muted-foreground text-[10px] uppercase block mb-1.5">
                          Frontend & UI Layer
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {project.stack.frontend.map((item) => (
                            <span
                              key={item}
                              className="px-2 py-0.5 rounded bg-surface-200 dark:bg-surface-800 text-foreground text-[11px] font-mono border border-border/50"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="font-mono text-muted-foreground text-[10px] uppercase block mb-1.5">
                          Backend & Logic Layer
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {project.stack.backend.map((item) => (
                            <span
                              key={item}
                              className="px-2 py-0.5 rounded bg-surface-200 dark:bg-surface-800 text-foreground text-[11px] font-mono border border-border/50"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="font-mono text-muted-foreground text-[10px] uppercase block mb-1.5">
                          Database & Storage
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {project.stack.database.map((item) => (
                            <span
                              key={item}
                              className="px-2 py-0.5 rounded bg-surface-200 dark:bg-surface-800 text-foreground text-[11px] font-mono border border-border/50"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {project.stack.ai && (
                        <div>
                          <span className="font-mono text-muted-foreground text-[10px] uppercase block mb-1.5">
                            AI & Model Orchestration
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {project.stack.ai.map((item) => (
                              <span
                                key={item}
                                className="px-2 py-0.5 rounded bg-surface-200 dark:bg-surface-800 text-foreground text-[11px] font-mono border border-border/50"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Specifications Sidebar */}
              <div className="lg:col-span-4 space-y-6">
                {/* Visual Identity & UX Theming */}
                <div className="p-6 rounded-2xl bg-surface-100/60 dark:bg-surface-900/40 border border-border/70 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-accent" />
                    <span>Visual Identity & Theming</span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between border-b border-border/40 pb-2">
                      <span className="text-muted-foreground">Surface Aesthetic</span>
                      <span className="font-mono font-medium capitalize text-foreground">
                        {project.visualTheme.surfaceStyle}
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-b border-border/40 pb-2">
                      <span className="text-muted-foreground">Information Density</span>
                      <span className="font-mono font-medium capitalize text-foreground">
                        {project.visualTheme.visualDensity}
                      </span>
                    </div>

                    {project.visualTheme.chartStyle && (
                      <div className="flex items-center justify-between border-b border-border/40 pb-2">
                        <span className="text-muted-foreground">Analytical Charting</span>
                        <span className="font-mono font-medium capitalize text-foreground">
                          {project.visualTheme.chartStyle}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between border-b border-border/40 pb-2">
                      <span className="text-muted-foreground">Hero Treatment</span>
                      <span className="font-mono font-medium capitalize text-foreground">
                        {project.visualTheme.heroTreatment.replace('-', ' ')}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Target Personas</span>
                      <span className="text-right text-foreground font-medium text-[11px] max-w-[180px]">
                        {project.targetUsers}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Metadata Card */}
                <div className="p-6 rounded-2xl bg-surface-100/60 dark:bg-surface-900/40 border border-border/70 space-y-4 text-xs">
                  <span className="font-mono text-muted-foreground uppercase tracking-wider block text-[11px]">
                    Concept Information
                  </span>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-border/40 pb-2">
                      <span className="text-muted-foreground">Designed & Built By</span>
                      <span className="font-medium text-foreground">Prince Singh Rana</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-border/40 pb-2">
                      <span className="text-muted-foreground">Architectural Year</span>
                      <span className="font-mono text-foreground">{project.year}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-border/40 pb-2">
                      <span className="text-muted-foreground">Status</span>
                      <Badge
                        variant={project.status === 'CONCEPT' ? 'concept' : 'prototype'}
                        size="sm"
                        className="font-mono text-[10px]"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Product Type</span>
                      <span className="font-mono text-foreground">{project.productType}</span>
                    </div>
                  </div>
                </div>

                {/* Direct Conversion Callout */}
                <div className="p-6 rounded-2xl bg-surface-100/90 dark:bg-surface-900/90 border border-accent/30 space-y-4 shadow-lg shadow-accent/5">
                  <div className="space-y-1.5">
                    <span className="font-mono text-[11px] text-accent uppercase tracking-wider block font-semibold">
                      Build This Product
                    </span>
                    <H3 className="text-base font-semibold text-foreground">
                      Interested in launching a system like {project.title}?
                    </H3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      I partner directly with founders to take conceptual architectures to live, production-grade SaaS products.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <Link href="/contact" className="block w-full">
                      <Button size="sm" className="w-full text-xs font-semibold">
                        Book a Discovery Call
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                      </Button>
                    </Link>
                    <Link href="/contact?type=project" className="block w-full">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-xs"
                      >
                        Submit a Project Brief
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Related Architectural Concepts */}
        {relatedProjects.length > 0 && (
          <section className="py-16 border-t border-border/40 bg-surface-50/40 dark:bg-surface-950/40">
            <Container size="default">
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-accent uppercase tracking-wider">
                      Related Explorations
                    </span>
                    <H2 className="text-xl sm:text-2xl font-bold tracking-tight">
                      More Product Lab Architectures
                    </H2>
                  </div>
                  <Link href="/lab">
                    <Button variant="ghost" size="sm" className="text-xs font-mono">
                      View All 15 &rarr;
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedProjects.map((relProj, rIdx) => (
                    <LabProjectCard key={relProj.id} project={relProj} index={rIdx} />
                  ))}
                </div>
              </div>
            </Container>
          </section>
        )}

        {/* Global Conversion Section */}
        <LabConversion />
      </main>

      <Footer />
    </div>
  );
}
