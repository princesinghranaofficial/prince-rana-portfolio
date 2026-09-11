import * as React from 'react';
import { Lightbulb, Layers, ShieldCheck, MessageSquareCode } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';

const principles = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Business Before Features',
    tagline: 'Validate the commercial engine before writing code.',
    description:
      'Before defining database tables or UI states, we establish the commercial objective: who pays, why they convert, where friction causes drop-off, and the exact unit economics of the software workflow.',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Design & Code in Lockstep',
    tagline: 'No disconnected prototypes or handoff friction.',
    description:
      'Eliminating the gap between static Figma canvases and production Next.js code. Interfaces are engineered with responsive math, loading skeletons, error states, and real database constraints from day one.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Built for Production from Day One',
    tagline: 'Multi-tenant schemas, strict security, and sub-second speed.',
    description:
      'PostgreSQL schemas protected by Row Level Security (RLS), type-safe end-to-end contracts, automated migrations, and global edge delivery. No fragile throwaway prototypes that require total rewrites.',
  },
  {
    number: '04',
    icon: MessageSquareCode,
    title: 'Transparent, Direct Collaboration',
    tagline: 'Direct access to the senior builder with zero agency bloat.',
    description:
      'Direct communication with the engineer designing and coding your software. Weekly production builds, transparent async progress tracking, and zero account manager overhead or communication delays.',
  },
];

export function HowIWorkSection() {
  return (
    <section className="py-20 md:py-32 border-t border-border/80 bg-surface-muted/20 relative">
      <Container size="wide">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Working Philosophy"
          title="How I work."
          description="Building production-grade SaaS products is an end-to-end discipline combining product strategy, interface engineering, and reliable backend infrastructure."
          align="left"
        />

        {/* 4 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="rounded-2xl border border-border bg-surface p-7 sm:p-9 space-y-5 hover:border-border-strong transition-all group shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-accent tracking-wider">
                      {item.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-surface-muted text-text-secondary border border-border group-hover:text-accent group-hover:border-accent/30 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="type-h3 text-text-primary group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-mono text-xs text-text-secondary mt-1 font-medium">
                      {item.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="type-body-small text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-text-secondary">
                  <span>Principle {item.number}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Standard Practice</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
