import * as React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Bot, 
  Code2, 
  Rocket, 
  Globe, 
  ShieldCheck, 
  Database, 
  Calendar, 
  Sparkles, 
  HelpCircle, 
  Terminal, 
  Zap, 
  ChevronRight,
  Clock,
  Briefcase,
  Sliders,
  DollarSign,
  Server,
  CreditCard
} from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Container } from '@/components/ui/container';
import { H1, H2, H3, TextLead } from '@/components/ui/typography';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { servicesData } from '@/data/services';
import { ProjectInvestment } from '@/components/services/project-investment';

import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'SaaS, AI & Full-Stack Development Services',
  description: 'Full-stack SaaS product engineering, embedded AI copilots, type-safe Next.js architecture, rapid MVP development, and high-performance websites for founders and startups.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'SaaS, AI & Full-Stack Development Services | Prince Singh Rana',
    description: 'From product idea to production-ready software. Full-stack SaaS platforms, AI product engineering, and high-converting technology websites.',
    url: '/services',
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent/20 selection:text-accent">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ]}
      />
      <Navbar />

      <main id="main-content" className="flex-1 pt-28 pb-20">
        {/* SECTION 1: HERO */}
        <section className="pt-10 pb-16 border-b border-border/40 bg-gradient-to-b from-surface-50/30 dark:from-surface-950/30 to-background">
          <Container size="default">
            <div className="max-w-4xl space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-muted text-accent text-xs font-mono border border-accent/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="uppercase tracking-wider font-semibold">Services</span>
              </div>

              {/* Headline */}
              <H1 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
                From product idea to production-ready software.
              </H1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                I help startups, founders and businesses design and build SaaS platforms, AI products and high-performance web experiences—from product architecture and UI systems to backend infrastructure and deployment.
              </p>

              {/* Primary, Secondary, Tertiary CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/start-project">
                  <Button size="lg" className="shadow-md shadow-accent/20">
                    Start a Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>

                <Link href="/work">
                  <Button variant="outline" size="lg">
                    View Work
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>

                <Link 
                  href="/book" 
                  className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors px-2 py-1 underline underline-offset-4"
                >
                  Book a 30-min Technical Call &rarr;
                </Link>
              </div>

              {/* 5-Second Qualification Chips */}
              <div className="pt-6 border-t border-border/40 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>Full-Stack SaaS</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>Embedded AI Copilots</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>PostgreSQL &amp; RLS</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>Production in 3-10 Wks</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 2: SOPHISTICATED PRODUCT-SYSTEM HERO VISUAL */}
        <section className="py-12 border-b border-border/40 bg-surface-50/40 dark:bg-surface-950/40">
          <Container size="default">
            <div className="rounded-3xl border border-border/80 bg-surface-100/90 dark:bg-surface-900/90 p-6 sm:p-8 backdrop-blur-md shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border/50">
                <div>
                  <span className="text-xs font-mono text-accent font-bold uppercase tracking-wider block">
                    The Complete Delivery Pipeline
                  </span>
                  <h3 className="text-sm sm:text-base font-semibold text-foreground">
                    Connected Product Engineering Architecture
                  </h3>
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  Single-source architectural ownership
                </span>
              </div>

              {/* 8 Connected Nodes */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-xs font-mono">
                {[
                  { step: '01', title: 'Strategy', desc: 'Scope Slicing', icon: Zap },
                  { step: '02', title: 'UI / UX', desc: 'Design Systems', icon: Layers },
                  { step: '03', title: 'Frontend', desc: 'Next.js & React', icon: Code2 },
                  { step: '04', title: 'Backend', desc: 'Node.js & APIs', icon: Server },
                  { step: '05', title: 'Database', desc: 'PostgreSQL RLS', icon: Database },
                  { step: '06', title: 'AI Layer', desc: 'Grounded RAG', icon: Bot },
                  { step: '07', title: 'Integrations', desc: 'Stripe & Webhooks', icon: CreditCard },
                  { step: '08', title: 'Deployment', desc: 'Edge Cloud', icon: Globe },
                ].map((node, i) => {
                  const Icon = node.icon;
                  return (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-surface-200/50 dark:bg-surface-950/60 border border-border/60 hover:border-accent/40 transition-colors space-y-1.5 text-center flex flex-col items-center justify-center"
                    >
                      <span className="text-[10px] text-accent font-bold">{node.step}</span>
                      <Icon className="w-4 h-4 text-foreground/80 my-0.5" />
                      <strong className="text-xs font-sans text-foreground block">{node.title}</strong>
                      <span className="text-[10px] text-muted-foreground leading-tight">{node.desc}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 3: POSITIONING — MORE THAN FRONTEND IMPLEMENTATION */}
        <section className="py-16 border-b border-border/40">
          <Container size="default">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono text-accent uppercase tracking-wider font-semibold block">
                  Product Positioning
                </span>
                <H2 className="text-2xl sm:text-4xl tracking-tight">
                  More than frontend implementation.
                </H2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Building serious commercial software requires more than translating Figma designs into code. I engineer the complete product layer—ensuring every frontend interaction is grounded in a rock-solid database schema, strict authentication rules, and performant backend APIs.
                </p>
                <div className="pt-2">
                  <Link href="/start-project">
                    <Button size="md">
                      Discuss Your Project Requirements
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Product Thinking', desc: 'Validating workflows and eliminating non-essential features before writing code.' },
                  { title: 'Information Architecture', desc: 'Structuring data hierarchies, tenant boundaries, and relational schemas.' },
                  { title: 'UI / UX Engineering', desc: 'Crafting responsive, accessible design systems with Apple-inspired restraint.' },
                  { title: 'Full-Stack Backend', desc: 'Node.js, Server Actions, PostgreSQL, Row-Level Security, and automated migrations.' },
                  { title: 'AI Workflows & RAG', desc: 'Embedding context-aware copilots, vector retrieval, and human-in-the-loop oversight.' },
                  { title: 'Payments & Production Edge', desc: 'Stripe/Razorpay billing, webhook listeners, CI/CD, and sub-second edge deployment.' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-surface-100/60 dark:bg-surface-900/40 border border-border/70 space-y-1.5"
                  >
                    <strong className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item.title}
                    </strong>
                    <p className="text-xs text-muted-foreground leading-relaxed pl-3.5">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 4: EDITORIAL CORE SERVICES (01 to 05) */}
        <section className="py-20 border-b border-border/40">
          <Container size="default">
            <div className="max-w-2xl mb-14 space-y-3">
              <span className="text-xs font-mono text-accent uppercase tracking-wider font-semibold block">
                Core Offerings
              </span>
              <H2 className="text-3xl sm:text-4xl tracking-tight">
                Architectural Services Engineered for Scale
              </H2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Each service is delivered with direct architectural ownership, transparent milestones, and zero agency fluff.
              </p>
            </div>

            <div className="space-y-14">
              {servicesData.map((service, idx) => (
                <div
                  key={service.id}
                  className="rounded-3xl border border-border/80 bg-surface-100/60 dark:bg-surface-900/40 p-6 sm:p-10 space-y-8 hover:border-accent/40 transition-colors"
                >
                  {/* Service Top Bar */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-border/60">
                    <div className="space-y-2">
                      <span className="font-mono text-xs text-accent font-bold tracking-wider">
                        SERVICE 0{idx + 1}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm font-medium text-accent">
                        {service.tagline}
                      </p>
                    </div>

                    <Link href={`/services/${service.slug}`}>
                      <Button variant="primary" size="md" rightIcon={<ArrowUpRight className="w-4 h-4" />}>
                        Explore {service.shortTitle}
                      </Button>
                    </Link>
                  </div>

                  {/* 2-Column Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column: Problem, Solution, Description */}
                    <div className="lg:col-span-6 space-y-5">
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {service.fullDescription}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 space-y-1 text-xs">
                          <span className="font-mono font-bold text-rose-500 uppercase tracking-wider block">
                            The Challenge
                          </span>
                          <p className="text-muted-foreground text-[11px] leading-relaxed">
                            {service.problem}
                          </p>
                        </div>

                        <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 space-y-1 text-xs">
                          <span className="font-mono font-bold text-emerald-500 uppercase tracking-wider block">
                            The Engineered Solution
                          </span>
                          <p className="text-muted-foreground text-[11px] leading-relaxed">
                            {service.solution}
                          </p>
                        </div>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="pt-2 flex flex-wrap gap-1.5">
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

                    {/* Right Column: Capabilities & Connected Proof */}
                    <div className="lg:col-span-6 space-y-6">
                      <div className="space-y-3">
                        <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider font-semibold">
                          Core Capabilities &amp; Architecture
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.capabilities.slice(0, 4).map((cap, cIdx) => (
                            <div
                              key={cIdx}
                              className="p-3 rounded-xl border border-border/60 bg-background/80 text-xs space-y-1"
                            >
                              <strong className="text-foreground block text-xs">{cap.title}</strong>
                              <span className="text-muted-foreground block text-[11px] leading-tight">
                                {cap.description}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Connected Portfolio Proof */}
                      <div className="p-4 rounded-2xl bg-surface-200/40 dark:bg-surface-950/60 border border-border/60 space-y-3">
                        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider block">
                          Connected Portfolio Proof
                        </span>
                        <div className="space-y-2">
                          {service.connectedProof.map((proof, pIdx) => (
                            <Link
                              key={pIdx}
                              href={proof.route}
                              className="group p-2.5 rounded-xl bg-background/80 border border-border/50 hover:border-accent/40 transition-colors flex items-center justify-between gap-3 text-xs"
                            >
                              <div>
                                <div className="flex items-center gap-2">
                                  <strong className="font-semibold text-foreground group-hover:text-accent transition-colors">
                                    {proof.title}
                                  </strong>
                                  <span className={`px-2 py-0.2 rounded text-[10px] font-mono font-bold ${
                                    proof.type === 'REAL PRODUCT'
                                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                      : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                                  }`}>
                                    {proof.type}
                                  </span>
                                </div>
                                <span className="text-[11px] text-muted-foreground line-clamp-1">
                                  {proof.metricOrHighlight}
                                </span>
                              </div>
                              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* SECTION 5: WHO I WORK WITH */}
        <section className="py-16 border-b border-border/40 bg-surface-50/30 dark:bg-surface-950/30">
          <Container size="default">
            <div className="max-w-2xl mb-12 space-y-2">
              <span className="text-xs font-mono text-accent uppercase tracking-wider font-semibold block">
                Target Profiles
              </span>
              <H2 className="text-2xl sm:text-4xl tracking-tight">Who I Work With</H2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                My services are calibrated for founders and teams where technical precision, speed, and architectural longevity directly impact company valuation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'SaaS Founders', desc: 'Early and growth-stage founders launching new software products, raising capital, or closing initial paying customers.' },
                { title: 'AI Startups', desc: 'Teams building AI-native tools who need high-converting UX, fast streaming APIs, and reliable RAG pipelines.' },
                { title: 'B2B Software Companies', desc: 'Product organizations looking to architect complex operational portals, client dashboards, or partner integrations.' },
                { title: 'Digital Product Agencies', desc: 'Agencies seeking a trusted senior technical partner to design and build production-grade web applications for clients.' },
                { title: 'Technology Companies', desc: 'Engineering teams needing a high-velocity full-stack developer to ship critical features without hiring a 5-person team.' },
                { title: 'Businesses Replacing Spreadsheets', desc: 'Established enterprises converting manual Excel and spreadsheet workflows into proprietary, secure cloud software.' },
              ].map((client, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-surface-100/60 dark:bg-surface-900/40 border border-border/70 space-y-2 hover:border-accent/40 transition-colors"
                >
                  <strong className="text-sm font-semibold text-foreground block">{client.title}</strong>
                  <p className="text-xs text-muted-foreground leading-relaxed">{client.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* SECTION 6: PROBLEM-BASED POSITIONING */}
        <section className="py-16 border-b border-border/40">
          <Container size="default">
            <div className="max-w-2xl mb-12 space-y-2">
              <span className="text-xs font-mono text-accent uppercase tracking-wider font-semibold block">
                Commercial Scenarios
              </span>
              <H2 className="text-2xl sm:text-4xl tracking-tight">Problems I Solve</H2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Most clients hire me because they are facing one of these six critical inflection points:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  prob: 'You have a SaaS idea but need the technical product built.',
                  sol: 'I take your concept, slice the scope to core value workflows, design the UI, and deliver a production-grade MVP in 3 to 5 weeks.',
                },
                {
                  prob: 'Your internal operations are still running on fragile spreadsheets.',
                  sol: 'I architect a secure, multi-tenant database application that centralizes your workflows, eliminates human data entry errors, and scales.',
                },
                {
                  prob: 'Your current SaaS UI feels clunky and dates your company.',
                  sol: 'I redesign and engineer a modern, high-density dashboard experience with Apple-inspired restraint, fast interactions, and dark mode.',
                },
                {
                  prob: 'You need AI integrated into a real business workflow, not a chatbot.',
                  sol: 'I embed context-aware copilots, vector retrieval, and structured JSON tool calling directly into your primary product actions.',
                },
                {
                  prob: 'Your MVP was built quickly and now needs to become production-ready.',
                  sol: 'I audit, refactor, and harden your architecture: migrating to PostgreSQL RLS, fixing state race conditions, and adding CI/CD.',
                },
                {
                  prob: 'Your marketing website fails to reflect the sophistication of your product.',
                  sol: 'I engineer a custom Next.js marketing site with editorial typography, sub-second LCP, and conversion-optimized CTA funnels.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-surface-100/50 dark:bg-surface-900/30 border border-border/70 space-y-3"
                >
                  <span className="text-[10px] font-mono font-bold text-accent uppercase">Scenario 0{idx + 1}</span>
                  <h4 className="text-sm font-semibold text-foreground leading-snug">&ldquo;{item.prob}&rdquo;</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.sol}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* SECTION 7: CAPABILITIES MATRIX */}
        <section className="py-16 border-b border-border/40 bg-surface-50/20 dark:bg-surface-950/20">
          <Container size="default">
            <div className="max-w-2xl mb-12 space-y-2">
              <span className="text-xs font-mono text-accent uppercase tracking-wider font-semibold block">
                Technical Matrix
              </span>
              <H2 className="text-2xl sm:text-4xl tracking-tight">Structured Capability Matrix</H2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Structured into five core engineering disciplines rather than an arbitrary logo cloud.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { group: 'PRODUCT', items: ['Product Architecture', 'Information Architecture', 'Feature Scope Slicing', 'User Flow State Machines', 'SaaS Unit Economics'] },
                { group: 'DESIGN', items: ['Design Token Systems', 'Dashboard & Portal UX', 'Responsive Layout Math', 'Data Visualizations', 'Dark / Light Theming'] },
                { group: 'ENGINEERING', items: ['Next.js App Router', 'Strict TypeScript', 'Node.js Microservices', 'PostgreSQL & Supabase', 'Row-Level Security'] },
                { group: 'PLATFORM', items: ['Authentication & RBAC', 'Stripe / Razorpay Billing', 'Idempotent Webhooks', 'Event Telemetry & Logs', 'Vercel / Cloudflare Edge'] },
                { group: 'AI & DATA', items: ['Context-Aware Copilots', 'pgvector & RAG Search', 'Structured JSON Schemas', 'Anti-Hallucination Guards', 'Human Oversight Queues'] },
              ].map((col, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-surface-100/70 dark:bg-surface-900/50 border border-border/70 space-y-3"
                >
                  <span className="font-mono text-xs text-accent font-bold uppercase tracking-wider block border-b border-border/40 pb-2">
                    {col.group}
                  </span>
                  <ul className="space-y-2 text-xs font-mono text-muted-foreground">
                    {col.items.map((it, iIdx) => (
                      <li key={iIdx} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* SECTION 8: HOW WE WORK TOGETHER (ENGAGEMENT MODELS) */}
        <section className="py-16 border-b border-border/40">
          <Container size="default">
            <div className="max-w-2xl mb-12 space-y-2">
              <span className="text-xs font-mono text-accent uppercase tracking-wider font-semibold block">
                Collaboration Models
              </span>
              <H2 className="text-2xl sm:text-4xl tracking-tight">How We Can Work Together</H2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Engagements are structured around clear deliverables and milestone checkpoints.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  model: 'Focused SaaS MVP',
                  duration: '3 to 5 Weeks',
                  desc: 'We slice your vision to the core value-driver workflow, build a production-grade application, and launch it on your custom domain with payments and onboarding.',
                  fit: 'Early-stage founders validating market demand or closing seed funding.',
                },
                {
                  model: 'Full Platform Build',
                  duration: '6 to 10 Weeks',
                  desc: 'Comprehensive end-to-end design and full-stack software development for multi-tenant commercial platforms, complex portals, or high-stakes business systems.',
                  fit: 'Funded startups, growing businesses, or enterprise product spinouts.',
                },
                {
                  model: 'Architecture & UX Overhaul',
                  duration: '4 to 8 Weeks',
                  desc: 'Modernizing an existing codebase: modernizing to Next.js App Router, restructuring database queries, elevating interface polish, or integrating AI copilots.',
                  fit: 'Established SaaS products experiencing UI friction or scaling limits.',
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-surface-100/70 dark:bg-surface-900/50 border border-border/70 hover:border-accent/40 transition-colors space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <strong className="text-lg font-bold text-foreground">{card.model}</strong>
                      <span className="text-xs font-mono text-accent font-bold px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                        {card.duration}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                  </div>

                  <div className="pt-3 border-t border-border/50 text-[11px] font-mono text-foreground/80 space-y-1">
                    <span className="text-accent uppercase block text-[10px] font-bold">Ideal For:</span>
                    <p className="text-muted-foreground">{card.fit}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Scope & Pricing Qualification Callout */}
            <div className="mt-8 p-6 rounded-2xl bg-surface-200/40 dark:bg-surface-950/40 border border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono text-accent font-bold uppercase block">
                  Transparent Scoping Approach
                </span>
                <p className="text-xs text-muted-foreground max-w-2xl">
                  Projects are scoped around technical complexity, number of primary workflows, third-party integrations, and launch requirements. Typical commercial engagements range from <strong className="text-foreground">$1,500 to $15,000+</strong>, avoiding cheap commodity packages while delivering dedicated, senior-level focus.
                </p>
              </div>
              <Link href="/start-project" className="shrink-0">
                <Button size="md">
                  Scope Your Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </Container>
        </section>

        {/* SECTION 9: 7-STEP DELIVERY PROCESS */}
        <section className="py-16 border-b border-border/40 bg-surface-50/20 dark:bg-surface-950/20">
          <Container size="default">
            <div className="max-w-2xl mb-12 space-y-2">
              <span className="text-xs font-mono text-accent uppercase tracking-wider font-semibold block">
                Execution Model
              </span>
              <H2 className="text-2xl sm:text-4xl tracking-tight">The 7-Step Delivery Process</H2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Structured progression ensuring full transparency and zero surprise roadblocks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 text-xs font-mono">
              {[
                { step: '01', name: 'Discover', desc: 'Understand business, user, and core problem.' },
                { step: '02', name: 'Define', desc: 'Clarify product scope and database architecture.' },
                { step: '03', name: 'Design', desc: 'Build the UI design system and user flows.' },
                { step: '04', name: 'Engineer', desc: 'Develop frontend, backend, APIs, and data models.' },
                { step: '05', name: 'Validate', desc: 'Test functionality, edge cases, and 9 breakpoints.' },
                { step: '06', name: 'Launch', desc: 'Deploy production infrastructure with monitoring.' },
                { step: '07', name: 'Iterate', desc: 'Refine based on live customer metrics where scoped.' },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-surface-100/80 dark:bg-surface-900/60 border border-border/70 space-y-2 flex flex-col justify-between"
                >
                  <span className="text-lg font-bold text-accent">{step.step}</span>
                  <div>
                    <strong className="text-xs font-bold text-foreground font-sans block">{step.name}</strong>
                    <span className="text-[11px] text-muted-foreground leading-tight block mt-1">{step.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* SECTION 10: WHAT CLIENTS RECEIVE & WHAT I DO NOT SELL */}
        <section className="py-16 border-b border-border/40">
          <Container size="default">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Deliverables Left */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-mono text-accent uppercase tracking-wider font-semibold block">
                    Deliverables
                  </span>
                  <H3 className="text-xl sm:text-2xl font-bold text-foreground mt-1">
                    What You Receive (Depending on Scope)
                  </H3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  {[
                    'Production-quality Next.js & React source code',
                    'PostgreSQL schema with automated migration files',
                    'Row-Level Security rules and RBAC permissions',
                    'Stripe / Razorpay subscription billing integrations',
                    'Fully responsive layouts across 9 breakpoints',
                    'Vercel/Cloudflare cloud deployment runbooks',
                    'Automated error tracking and logging instrumentation',
                    '100% repository transfer & architecture walkthrough',
                  ].map((deliv, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-surface-100 dark:bg-surface-900/40 border border-border/60 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What I Do Not Sell Right */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-surface-200/40 dark:bg-surface-950/50 border border-border/60 space-y-4">
                <span className="text-xs font-mono text-rose-400 uppercase tracking-wider font-bold block">
                  Professional Standards
                </span>
                <H3 className="text-lg font-bold text-foreground">What I Do Not Sell</H3>
                <div className="space-y-3 text-xs text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground block font-mono text-[11px]">&times; Generic Templates &amp; Clones</strong>
                    I do not re-skin cookie-cutter Webflow or ThemeForest templates. Every product interface is designed around its specific business workflow.
                  </p>
                  <p>
                    <strong className="text-foreground block font-mono text-[11px]">&times; Unnecessary Feature Bloat</strong>
                    I do not pad project hours building low-value settings pages or premature automations that distract from the core product.
                  </p>
                  <p>
                    <strong className="text-foreground block font-mono text-[11px]">&times; AI Added Purely for Marketing</strong>
                    I will not bolt a useless chatbot onto your app. AI is implemented only where it provides genuine operational speed or automation leverage.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 10.5: PROJECT INVESTMENT */}
        <ProjectInvestment />

        {/* SECTION 11: FREQUENTLY ASKED QUESTIONS */}
        <section className="py-16 border-b border-border/40">
          <Container size="default">
            <div className="max-w-2xl mb-12 space-y-2">
              <span className="text-xs font-mono text-accent uppercase tracking-wider font-semibold block">
                Transparency
              </span>
              <H2 className="text-2xl sm:text-4xl tracking-tight">Frequently Asked Questions</H2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Direct answers to questions international founders ask before kicking off a project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
              {[
                {
                  q: 'How much does a project cost?',
                  a: 'Projects are scoped individually. Premium websites typically start around $1,500, focused SaaS MVPs around $3,000, and larger SaaS or AI product builds around $5,000+. Complex product engagements may start at $10,000+. Final investment depends on scope, integrations, design requirements, timeline, and existing infrastructure.',
                },
                {
                  q: 'Do you offer fixed-price projects?',
                  a: 'Yes, when the scope is clearly defined. After understanding the product, requirements, and technical complexity, I can define the scope and project investment before development begins.',
                },
                {
                  q: 'Can you work with an existing product or codebase?',
                  a: 'Yes, depending on the project. Existing products may involve UI improvements, new features, performance optimization, AI integration, backend development, or architectural improvements. We scope work following a thorough codebase and architecture review.',
                },
                {
                  q: 'What types of SaaS products do you build?',
                  a: 'I build B2B SaaS platforms, workflow automation software, financial intelligence dashboards, clinical management portals, developer tools, and internal operational systems. I focus on products where data integrity, security, and intuitive workflow UX are paramount.',
                },
                {
                  q: 'Can you handle both frontend and backend engineering?',
                  a: 'Yes. I take single-source architectural ownership of the complete product layer: database design (PostgreSQL/Supabase), authentication (RBAC), backend application logic (Node.js/Server Actions), frontend UI (Next.js/React), payment gateways, and cloud deployment.',
                },
                {
                  q: 'What is the realistic timeline for an MVP or product build?',
                  a: 'A focused, scope-disciplined SaaS MVP typically takes 3 to 5 weeks from initial architecture to live production deployment. Comprehensive platforms or complex overhauls range from 6 to 10 weeks.',
                },
                {
                  q: 'Can you build custom AI functionality and copilots?',
                  a: 'Yes. I engineer context-aware AI copilots, semantic vector search (RAG), document intelligence, and automated tool-calling workflows with strict anti-hallucination guardrails and human-in-the-loop oversight.',
                },
                {
                  q: 'What happens after launch?',
                  a: 'Every project includes a comprehensive handover: source code repository transfer, environment configuration runbooks, and a post-launch warranty support window. Ongoing retainer support is available for select partners.',
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-surface-100/60 dark:bg-surface-900/40 border border-border/70 space-y-2"
                >
                  <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-accent shrink-0" />
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed pl-6">{faq.a}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* SECTION 12: FINAL CONVERSION SECTION */}
        <section className="py-20">
          <Container size="default">
            <div className="p-8 sm:p-14 rounded-3xl border border-accent/40 bg-gradient-to-b from-accent-muted/30 dark:from-accent-muted/10 to-surface-100/40 text-center space-y-6 max-w-4xl mx-auto shadow-2xl">
              <span className="text-xs font-mono text-accent uppercase tracking-wider font-bold block">
                Start a Project
              </span>
              <H2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                Have a SaaS or AI product you want to build?
              </H2>
              <p className="text-xs sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Tell me what you&apos;re building, where the product currently stands, and what you need help with. I&apos;ll use that context to understand the scope before we talk.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link href="/start-project">
                  <Button size="lg" className="shadow-lg shadow-accent/25 font-bold">
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
              </div>

              <span className="text-[11px] font-mono text-muted-foreground block pt-2">
                Projects typically start at $1,500 &middot; Production delivery in 3–10 weeks
              </span>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
