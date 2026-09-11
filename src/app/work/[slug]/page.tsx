import * as React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Sparkles, 
  Code2, 
  Calendar,
  Lock,
  Zap
} from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Container, Section } from '@/components/ui/container';
import { H1, H2, H3, TextLead, TextRegular } from '@/components/ui/typography';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { projectsData } from '@/data/projects';
import { ProjectTracker } from '@/components/analytics/trackers';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData
    .filter((project) => project.slug !== 'collectai' && project.slug !== 'ai-cfo' && project.slug !== 'ai-cfo-copilot')
    .map((project) => ({
      slug: project.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  // Requirement 38 & 39: Title pattern: [Project] — [Category] | [Professional Name]
  // Search Engine Safety: Use noindex for conceptual/placeholder project pages until substantive case studies are built
  const isFlagship = project.slug === 'collectai' || project.slug === 'ai-cfo' || project.slug === 'ai-cfo-copilot';

  return {
    title: `${project.title} — ${project.category}`,
    description: project.description,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    robots: isFlagship
      ? { index: true, follow: true }
      : { index: false, follow: true },
    openGraph: {
      title: `${project.title} — ${project.category} | Prince Singh Rana`,
      description: project.description,
      images: [project.coverImage],
      url: `/work/${project.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — ${project.category} | Prince Singh Rana`,
      description: project.description,
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const projectIndex = projectsData.findIndex((p) => p.slug === slug);
  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <ProjectTracker slug={project.slug} name={project.title} />
      <Navbar />
      <main id="main-content" className="flex-1 pt-32 pb-24">
        <Container size="default">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Work</span>
            </Link>
          </div>

          {/* Hero Header */}
          <div className="space-y-6 mb-12">
            <div className="flex flex-wrap items-center gap-3">
              <Badge
                variant={
                  project.projectType === 'REAL PRODUCT'
                    ? 'real-product'
                    : project.projectType === 'CONCEPT'
                    ? 'concept'
                    : 'prototype'
                }
                size="md"
              >
                {project.projectType === 'REAL PRODUCT' ? 'Built Product' : project.projectType}
              </Badge>
              <Badge variant="outline" size="md">
                {project.category}
              </Badge>
              <span className="text-xs font-mono text-muted-foreground">{project.status}</span>
            </div>

            <H1>{project.title}</H1>
            <p className="text-xl font-medium text-accent">{project.subtitle}</p>
            <TextLead className="max-w-3xl">{project.description}</TextLead>

            {/* Quick Metadata Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl border border-border/80 bg-surface-50/50 dark:bg-surface-50/20 font-mono text-xs">
              <div>
                <span className="text-muted-foreground block text-[10px] uppercase">Year</span>
                <span className="font-bold text-foreground">{project.year}</span>
              </div>
              <div>
                <span className="text-muted-foreground block text-[10px] uppercase">Category</span>
                <span className="font-bold text-foreground">{project.category}</span>
              </div>
              <div>
                <span className="text-muted-foreground block text-[10px] uppercase">Status</span>
                <span className="font-bold text-emerald-500">{project.status}</span>
              </div>
              <div>
                <span className="text-muted-foreground block text-[10px] uppercase">Stack</span>
                <span className="font-bold text-foreground">{project.technologies.slice(0, 2).join(', ')}</span>
              </div>
            </div>

            {project.projectType !== 'REAL PRODUCT' && (
              <div className="p-4 sm:p-5 rounded-2xl border border-accent/40 bg-accent/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider block">
                    Product Lab Architecture
                  </span>
                  <p className="text-xs text-muted-foreground">
                    This project has dedicated architectural blueprints, planned screen manifests, and system design notes in the Product Lab.
                  </p>
                </div>
                <Link href={`/lab/${project.slug}`} className="shrink-0">
                  <Button size="sm" className="text-xs">
                    View Product Lab Specs &rarr;
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Cover Media */}
          <div className="relative aspect-[16/9] w-full rounded-2xl border border-border overflow-hidden bg-surface-100 dark:bg-surface-900 mb-16 shadow-2xl">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Core Case Study Sections Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            {/* Main Narrative Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Problem & Solution */}
              <div className="space-y-6">
                <H2>Problem & Product Strategy</H2>
                <div className="p-6 rounded-xl border border-red-500/20 bg-red-500/5 space-y-2">
                  <h3 className="text-sm font-bold text-red-600 dark:text-red-400 font-mono uppercase tracking-wider">
                    The Problem
                  </h3>
                  <TextRegular>{project.problem}</TextRegular>
                </div>
                <div className="p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 space-y-2">
                  <h3 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 font-mono uppercase tracking-wider">
                    The Solution
                  </h3>
                  <TextRegular>{project.solution}</TextRegular>
                </div>
              </div>

              {/* Core Features */}
              <div className="space-y-6">
                <H2>Core Feature Capabilities</H2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="p-5 rounded-xl border border-border/70 bg-surface-50/40 space-y-2">
                      <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{feat.title}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{feat.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Architecture */}
              <div className="space-y-4">
                <H2>Technical Architecture & Decisions</H2>
                <TextRegular className="leading-relaxed">{project.architecture}</TextRegular>
              </div>

              {/* Key Screens Showcase */}
              {project.screens.length > 0 && (
                <div className="space-y-6">
                  <H2>Interface & Key Screens Showcase</H2>
                  <div className="space-y-8">
                    {project.screens.map((screen) => (
                      <div key={screen.id} className="rounded-xl border border-border/80 bg-surface-50/50 overflow-hidden space-y-4 p-4">
                        <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-border/60">
                          <Image
                            src={screen.image}
                            alt={screen.title}
                            fill
                            sizes="100vw"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center justify-between">
                            <h3 className="text-base font-bold text-foreground">{screen.title}</h3>
                            {screen.badge && <Badge variant="outline" size="sm">{screen.badge}</Badge>}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{screen.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Security & Performance */}
              <div className="space-y-4 p-6 rounded-xl border border-border/80 bg-surface-50/30">
                <div className="flex items-center gap-2 text-accent font-bold text-sm">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Security & Performance Considerations</span>
                </div>
                <TextRegular className="text-xs">
                  Architected with strict Row Level Security (RLS) policies in PostgreSQL, JWT/OAuth auth boundaries, server-side parameter validation with Zod, and optimized asset delivery via Vercel Edge networks.
                </TextRegular>
              </div>

              {/* Outcome */}
              <div className="space-y-3 pt-6 border-t border-border/60">
                <H2>Engineering Outcome</H2>
                <TextRegular>{project.outcome}</TextRegular>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-8">
              {/* Technology Stack Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base font-bold flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-accent" />
                    <span>Technology Stack</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1 rounded-md bg-surface-100 dark:bg-surface-50 text-foreground border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Services Provided */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base font-bold flex items-center gap-2">
                    <Layers className="w-4 h-4 text-accent" />
                    <span>Services & Roles</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    {project.services.map((serv, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-foreground font-medium">{serv}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Next Project & CTA Card */}
              <div className="p-6 rounded-2xl border border-accent/30 bg-accent-muted/30 space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-accent uppercase tracking-wider font-bold">
                    Next Project
                  </span>
                  <h3 className="text-lg font-bold text-foreground">{nextProject.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{nextProject.subtitle}</p>
                </div>
                <Link href={`/work/${nextProject.slug}`}>
                  <Button variant="outline" size="sm" className="w-full justify-center" rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}>
                    View Next Case Study
                  </Button>
                </Link>
              </div>

              {/* Direct Booking CTA */}
              <div className="p-6 rounded-2xl border border-border/80 bg-background text-center space-y-4">
                <h3 className="text-lg font-bold text-foreground">Have a similar product idea?</h3>
                <p className="text-xs text-muted-foreground">
                  Let&apos;s discuss your architecture, scope, and technical roadmap on a 30-minute discovery call.
                </p>
                <Link href="/book">
                  <Button variant="primary" className="w-full justify-center" rightIcon={<ArrowUpRight className="w-4 h-4" />}>
                    Book a Call
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
