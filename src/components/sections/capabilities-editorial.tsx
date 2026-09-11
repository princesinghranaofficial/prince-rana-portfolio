import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';

const capabilitiesList = [
  {
    number: '01',
    title: 'SaaS Product Development',
    tagline: 'Multi-tenant software architectures built for scale.',
    deliverables: [
      'Multi-tenant database schema & Row Level Security (RLS)',
      'Secure authentication & role-based access control (RBAC)',
      'Automated subscription billing, invoices & webhooks (Razorpay/Stripe)',
      'Production dashboards & high-density operational data tables',
    ],
    href: '/services/saas-development',
  },
  {
    number: '02',
    title: 'AI Product Development',
    tagline: 'Intelligent AI copilots and autonomous background agent workflows.',
    deliverables: [
      'Custom conversational AI copilots embedded into SaaS workflows',
      'Autonomous multi-step background worker execution',
      'Semantic document retrieval, RAG & vector embeddings',
      'Structured JSON tool-calling schemas & streaming response tokens',
    ],
    href: '/services/ai-saas-development',
  },
  {
    number: '03',
    title: 'Full-Stack Engineering',
    tagline: 'End-to-end production frontend and backend engineering.',
    deliverables: [
      'Strict type safety from PostgreSQL database schemas to React UI',
      'Clean RESTful & streaming server action API endpoints',
      'PostgreSQL query indexing, performance tuning & relational migrations',
      'Production-ready CI/CD pipelines on Vercel & Cloudflare Edge',
    ],
    href: '/services/full-stack-development',
  },
  {
    number: '04',
    title: 'Premium Web Experiences',
    tagline: 'Marketing websites and product launch experiences that convert.',
    deliverables: [
      'Apple-inspired editorial typography & responsive layout math',
      'Technical SEO, JSON-LD schemas & Open Graph cards',
      'Sub-second Core Web Vitals (LCP, CLS, INP)',
      'Multi-step lead qualification funnels & discovery call booking',
    ],
    href: '/services/website-development',
  },
];

export function CapabilitiesEditorial() {
  return (
    <section className="py-20 md:py-32 border-t border-border/80 bg-background relative">
      <Container size="wide">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Capabilities"
          title="From product idea to production."
          description="I don't just write frontend code or isolated scripts. I architect, engineer, and deploy complete digital products tailored for SaaS founders."
          action={
            <Link href="/services">
              <Button variant="outline" size="sm" rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}>
                Explore All Services
              </Button>
            </Link>
          }
          align="split"
        />

        {/* Large Editorial Numbered Rows */}
        <div className="divide-y divide-border border-y border-border mt-12">
          {capabilitiesList.map((cap) => (
            <div
              key={cap.number}
              className="py-10 md:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start group hover:bg-surface-50/40 transition-colors px-2 sm:px-4 rounded-xl"
            >
              {/* Number & Title */}
              <div className="lg:col-span-5 space-y-2">
                <span className="font-mono text-xs font-bold text-accent tracking-widest block">
                  {cap.number}
                </span>
                <h3 className="type-h3 text-text-primary group-hover:text-accent transition-colors">
                  {cap.title}
                </h3>
                <p className="type-body-small text-text-secondary">
                  {cap.tagline}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="lg:col-span-5 space-y-2.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-text-secondary block mb-2 font-semibold">
                  Core Engineering Deliverables
                </span>
                {cap.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Link */}
              <div className="lg:col-span-2 lg:text-right pt-2 lg:pt-0">
                <Link
                  href={cap.href}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-text-primary group-hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xs"
                >
                  <span>Explore {cap.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
