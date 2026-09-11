'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container, Section } from '@/components/ui/container';
import { H2, TextLead } from '@/components/ui/typography';
import { Search, Compass, Palette, Code, CheckCircle, Rocket, TrendingUp } from 'lucide-react';

const processSteps = [
  {
    step: '01',
    title: 'Discover',
    icon: Search,
    description: 'Understand business model, target users, technical requirements, and core success metrics.',
  },
  {
    step: '02',
    title: 'Strategy',
    icon: Compass,
    description: 'Define relational database architecture, user flows, API boundaries, and technical stack selection.',
  },
  {
    step: '03',
    title: 'Design',
    icon: Palette,
    description: 'Create high-converting user experience patterns, editorial typography scale, and responsive component systems.',
  },
  {
    step: '04',
    title: 'Build',
    icon: Code,
    description: 'Develop type-safe Next.js frontend code, Supabase PostgreSQL schemas, server actions, and AI integration pipelines.',
  },
  {
    step: '05',
    title: 'Test',
    icon: CheckCircle,
    description: 'Perform rigorous static typechecking, cross-browser sanity testing, security RLS audits, and Lighthouse performance checks.',
  },
  {
    step: '06',
    title: 'Launch',
    icon: Rocket,
    description: 'Production deployment to Vercel/Cloudflare with automated CI/CD pipelines, SSL, and error monitoring.',
  },
  {
    step: '07',
    title: 'Improve',
    icon: TrendingUp,
    description: 'Iterate based on telemetry data, user feedback loops, and expanding feature roadmaps.',
  },
];

export function ProcessSection() {
  return (
    <Section spacing="default" className="bg-surface-50/40 dark:bg-surface-50/10 border-y border-border/50 relative">
      <Container size="default">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-muted text-accent text-xs font-mono mb-4 border border-accent/20">
            <span>Engineering Discipline</span>
          </div>
          <H2>A Predictable, Production-Ready Development Process</H2>
          <TextLead className="mt-4">
            Building complex SaaS products requires clear execution milestones. Here is how we turn ideas into scalable digital products.
          </TextLead>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="relative rounded-xl border border-border/70 bg-background/80 p-6 space-y-4 shadow-xs hover:border-foreground/20 transition-all group"
              >
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-accent/80 group-hover:text-accent transition-colors">
                    {item.step}
                  </span>
                  <div className="p-2 rounded-lg bg-surface-100 dark:bg-surface-50 text-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground tracking-tight">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-2">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
