import * as React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  HelpCircle, 
  Code2, 
  Layers, 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  Cpu, 
  Zap, 
  ChevronRight,
  Database,
  Lock,
  Globe
} from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Container } from '@/components/ui/container';
import { H1, H2, H3, TextLead } from '@/components/ui/typography';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { servicesData } from '@/data/services';
import { ServiceArchitectureVisual } from '@/components/services/service-architecture-visuals';
import { BreadcrumbJsonLd, JsonLdScript } from '@/components/seo/json-ld';
import { siteConfig, absoluteUrl } from '@/config/site';

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found | Prince Rana',
    };
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url: `/services/${service.slug}`,
      siteName: 'Prince Rana',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.seo.title,
      description: service.seo.description,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Schema.org Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(`/services/${service.slug}`)}#service`,
    name: service.title,
    description: service.shortDescription,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#person`,
      name: siteConfig.author.name,
      jobTitle: siteConfig.primaryPositioning,
      url: `${siteConfig.url}/`,
    },
    serviceType: service.title,
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.title,
      itemListElement: service.capabilities.map((cap) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: cap.title,
          description: cap.description,
        },
      })),
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${absoluteUrl(`/services/${service.slug}`)}#faq`,
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent/20 selection:text-accent">
      {/* Structured Data */}
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      />
      <JsonLdScript data={jsonLd} />
      <JsonLdScript data={faqJsonLd} />

      <Navbar />

      <main id="main-content" className="flex-1 pt-28 pb-20">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-border/40 py-3.5 bg-surface-50/40 dark:bg-surface-950/40">
          <Container size="default">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <Link href="/services" className="hover:text-foreground transition-colors">
                Services
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-border" />
              <span className="text-foreground font-medium truncate">{service.shortTitle}</span>
            </div>
          </Container>
        </div>

        {/* HERO SECTION */}
        <section className="pt-10 pb-14 border-b border-border/40 bg-gradient-to-b from-surface-50/30 dark:from-surface-950/30 to-background">
          <Container size="default">
            <div className="max-w-4xl space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-accent-muted text-accent text-xs font-mono font-semibold border border-accent/20">
                  {service.shortTitle} Expertise
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-200 dark:bg-surface-800 text-muted-foreground text-xs font-mono border border-border/50">
                  Production-Ready Architecture
                </span>
              </div>

              <H1 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
                {service.title}
              </H1>

              <TextLead className="text-accent font-medium text-lg sm:text-xl">
                {service.tagline}
              </TextLead>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
                {service.fullDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/start-project">
                  <Button size="lg" className="shadow-md shadow-accent/20">
                    Start a Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>

                <Link href="/book">
                  <Button variant="outline" size="lg">
                    Book a Call
                    <Calendar className="w-4 h-4 ml-2" />
                  </Button>
                </Link>

                <Link href="/services" className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors px-2 py-1">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  All Services
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* CONTENT BODY */}
        <section className="py-14">
          <Container size="default">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Deep Architectural Details */}
              <div className="lg:col-span-8 space-y-14">
                {/* 1. Problem & Solution Split */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider font-semibold">
                    <Zap className="w-4 h-4" />
                    <span>01 &middot; Problem &amp; Engineered Solution</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-surface-100/60 dark:bg-surface-900/40 border border-border/70 space-y-2.5">
                      <H3 className="text-sm font-bold font-mono text-rose-500 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                        The Domain Challenge
                      </H3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {service.problem}
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-surface-100/60 dark:bg-surface-900/40 border border-border/70 space-y-2.5">
                      <H3 className="text-sm font-bold font-mono text-emerald-500 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        The Engineered Solution
                      </H3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {service.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Differentiated Domain Architecture Visual */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider font-semibold">
                      <Cpu className="w-4 h-4" />
                      <span>02 &middot; Technical Architecture Blueprint</span>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">
                      Engineered System Design
                    </span>
                  </div>

                  <ServiceArchitectureVisual type={service.architectureType} />
                </div>

                {/* 3. Deliverables Scope */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>03 &middot; Production Deliverables</span>
                  </div>

                  <div className="p-6 rounded-3xl bg-surface-100/60 dark:bg-surface-900/40 border border-border/70 space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-background/80 border border-border/50 flex items-start gap-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                          <span className="text-foreground leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 4. Execution Process */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider font-semibold">
                    <Layers className="w-4 h-4" />
                    <span>04 &middot; Engagement Process</span>
                  </div>

                  <div className="space-y-3">
                    {service.process.map((step, sIdx) => (
                      <div
                        key={step.step}
                        className="p-5 rounded-2xl bg-surface-100/60 dark:bg-surface-900/40 border border-border/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-lg font-bold text-accent w-8 shrink-0">
                            {step.step}
                          </span>
                          <div>
                            <strong className="text-sm font-semibold text-foreground block">
                              {step.title}
                            </strong>
                            <span className="text-xs text-muted-foreground leading-relaxed mt-0.5 block">
                              {step.description}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. Frequently Asked Questions */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider font-semibold">
                    <HelpCircle className="w-4 h-4" />
                    <span>05 &middot; Service Questions &amp; Answers</span>
                  </div>

                  <div className="space-y-3">
                    {service.faqs.map((faq, fIdx) => (
                      <div
                        key={fIdx}
                        className="p-5 rounded-2xl bg-surface-100/60 dark:bg-surface-900/40 border border-border/70 space-y-2"
                      >
                        <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                          <HelpCircle className="w-4 h-4 text-accent shrink-0" />
                          <span>{faq.question}</span>
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Sidebar (Audience, Proof, Stack, CTA) */}
              <div className="lg:col-span-4 space-y-8">
                {/* Target Audience */}
                <div className="p-6 rounded-3xl bg-surface-100/60 dark:bg-surface-900/40 border border-border/70 space-y-3">
                  <span className="text-xs font-mono text-accent uppercase tracking-wider font-semibold block">
                    Target Audience
                  </span>
                  <H3 className="text-sm font-bold text-foreground">Who This Is Best Suited For</H3>
                  <ul className="space-y-2.5 text-xs text-muted-foreground">
                    {service.audience.map((aud, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        <span className="leading-snug">{aud}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Connected Portfolio Proof */}
                <div className="p-6 rounded-3xl bg-surface-100/60 dark:bg-surface-900/40 border border-border/70 space-y-4">
                  <span className="text-xs font-mono text-accent uppercase tracking-wider font-semibold block">
                    Portfolio Proof
                  </span>
                  <H3 className="text-sm font-bold text-foreground">Demonstrated Capability</H3>
                  <div className="space-y-3">
                    {service.connectedProof.map((proof, pIdx) => (
                      <Link
                        key={pIdx}
                        href={proof.route}
                        className="group p-3.5 rounded-2xl bg-background/80 border border-border/60 hover:border-accent/40 transition-colors block space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <strong className="text-xs font-bold text-foreground group-hover:text-accent transition-colors">
                            {proof.title}
                          </strong>
                          <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold ${
                            proof.type === 'REAL PRODUCT'
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                              : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                          }`}>
                            {proof.type === 'REAL PRODUCT' ? 'Built Product' : proof.type}
                          </span>
                        </div>
                        <p className="text-[11px] text-muted-foreground leading-relaxed">
                          {proof.description}
                        </p>
                        <span className="text-[10px] font-mono text-accent flex items-center gap-1 pt-1 font-semibold">
                          View Work <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Engagement Models */}
                <div className="p-6 rounded-3xl bg-surface-100/60 dark:bg-surface-900/40 border border-border/70 space-y-3">
                  <span className="text-xs font-mono text-accent uppercase tracking-wider font-semibold block">
                    Engagement Options
                  </span>
                  <H3 className="text-sm font-bold text-foreground">How We Can Work Together</H3>
                  <div className="space-y-3">
                    {service.engagementModels.map((eng, eIdx) => (
                      <div key={eIdx} className="p-3 rounded-xl bg-background/80 border border-border/50 space-y-1 text-xs">
                        <div className="flex justify-between items-center">
                          <strong className="font-semibold text-foreground">{eng.model}</strong>
                          <span className="text-[10px] font-mono text-accent">{eng.typicalFit}</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground leading-relaxed">{eng.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="p-6 rounded-3xl bg-surface-100/60 dark:bg-surface-900/40 border border-border/70 space-y-3">
                  <span className="text-xs font-mono text-accent uppercase tracking-wider font-semibold block">
                    Implementation Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2.5 py-1 rounded bg-surface-200 dark:bg-surface-800 text-muted-foreground border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sticky Action Box with Commercial Starting Investment */}
                <div className="p-6 rounded-3xl border border-accent/40 bg-accent-muted/20 text-center space-y-4 shadow-lg">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-accent uppercase tracking-wider font-bold block">
                      Starting Investment
                    </span>
                    <div className="text-2xl font-extrabold text-foreground font-sans">
                      {service.startingInvestment || '$3,000+'}
                    </div>
                    <span className="text-[11px] font-mono text-muted-foreground block">
                      Custom scope &middot; Milestones based
                    </span>
                  </div>

                  <div className="pt-3 border-t border-border/50">
                    <h4 className="text-base font-bold text-foreground">
                      {service.ctaHeadline}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                      {service.ctaDescription}
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <Link href="/start-project" className="block">
                      <Button size="md" className="w-full font-bold">
                        Start a Project
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Link href="/book" className="block">
                      <Button variant="outline" size="md" className="w-full">
                        Book a Technical Call
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
