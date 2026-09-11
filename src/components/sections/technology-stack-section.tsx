import * as React from 'react';
import { 
  LayoutGrid, 
  Cpu, 
  Database, 
  Cloud 
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';

interface ArchitectureLayer {
  layer: string;
  name: string;
  category: string;
  description: string;
  technologies: { name: string; role: string }[];
  icon: React.ComponentType<{ className?: string }>;
}

const architectureLayers: ArchitectureLayer[] = [
  {
    layer: '01',
    name: 'Product Interface',
    category: 'Client & Edge Presentation',
    icon: LayoutGrid,
    description: 'Sub-second interaction models, responsive viewport math, and tokenized design systems.',
    technologies: [
      { name: 'Next.js 15 (App Router)', role: 'Streaming Server Components' },
      { name: 'React 19', role: 'Concurrent rendering & optimistic actions' },
      { name: 'TypeScript', role: 'End-to-end static contract safety' },
      { name: 'Tailwind CSS', role: 'Tokenized design system & dark theme' },
      { name: 'Framer Motion', role: 'Apple-grade physics-based micro-interactions' },
    ],
  },
  {
    layer: '02',
    name: 'Application Core & AI',
    category: 'Business Logic & Intelligence',
    icon: Cpu,
    description: 'Autonomous agent execution, streaming LLM completions, and secure server mutations.',
    technologies: [
      { name: 'Server Actions', role: 'Zero-waterfall type-safe API mutations' },
      { name: 'LLM Tool Calling', role: 'Structured JSON agent schemas & actions' },
      { name: 'Vector Search / RAG', role: 'PostgreSQL pgvector semantic search' },
      { name: 'Streaming Tokens', role: 'Low-latency AI response streaming' },
      { name: 'Node.js Engine', role: 'High-concurrency async background workers' },
    ],
  },
  {
    layer: '03',
    name: 'Backend & Data Services',
    category: 'Persistence & Security',
    icon: Database,
    description: 'Relational data integrity, multi-tenant partitioning, and real-time synchronization.',
    technologies: [
      { name: 'PostgreSQL', role: 'ACID-compliant relational database storage' },
      { name: 'Supabase Engine', role: 'Auto-managed auth, storage & REST layer' },
      { name: 'Row Level Security (RLS)', role: 'Database-enforced multi-tenant isolation' },
      { name: 'Realtime WebSockets', role: 'Instant collaborative state updates' },
      { name: 'Redis / Upstash', role: 'Sub-millisecond caching & rate limiting' },
    ],
  },
  {
    layer: '04',
    name: 'Infrastructure & Integrations',
    category: 'Cloud, Billing & Reliability',
    icon: Cloud,
    description: 'Global edge delivery, automated subscription billing, and real-time observability.',
    technologies: [
      { name: 'Vercel Edge Network', role: 'Zero-configuration global CI/CD deployments' },
      { name: 'Cloudflare', role: 'Edge DNS, DDoS protection & CDN caching' },
      { name: 'Stripe & Razorpay', role: 'Subscription billing, invoices & webhooks' },
      { name: 'Resend & Postmark', role: 'Transactional notification delivery' },
      { name: 'Telemetry & Sentry', role: 'Real-time error tracking & Core Web Vitals' },
    ],
  },
];

export function TechnologyStackSection() {
  return (
    <section className="py-20 md:py-32 border-t border-border/80 bg-surface-muted/20 relative">
      <Container size="wide">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Technology Architecture"
          title="Organized by responsibility, not a logo dump."
          description="Software should be chosen for architectural integrity, long-term maintainability, and production velocity. Here is how I structure SaaS systems across distinct architectural boundaries."
          align="left"
        />

        {/* 4 Architecture Layers */}
        <div className="mt-12 space-y-4">
          {architectureLayers.map((layer) => {
            const Icon = layer.icon;

            return (
              <div
                key={layer.layer}
                className="rounded-2xl border border-border bg-surface p-6 sm:p-8 hover:border-border-strong transition-all shadow-xs"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  {/* Layer Meta Column */}
                  <div className="lg:col-span-4 space-y-2">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded-md bg-accent-muted border border-accent/20">
                        LAYER {layer.layer}
                      </span>
                      <span className="font-mono text-[11px] text-text-secondary uppercase tracking-wider">
                        {layer.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 pt-1">
                      <div className="p-2 rounded-lg bg-surface-muted text-accent border border-border">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="type-h3 text-text-primary">{layer.name}</h3>
                    </div>

                    <p className="type-body-small text-text-secondary pt-1">
                      {layer.description}
                    </p>
                  </div>

                  {/* Technologies Badges Grid */}
                  <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {layer.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="p-3.5 rounded-xl border border-border/70 bg-surface-muted/60 space-y-1 hover:border-border-strong transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-text-primary">
                            {tech.name}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <p className="text-[11px] font-mono text-text-secondary">
                          {tech.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
