'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container, Section } from '@/components/ui/container';
import { H2, TextLead } from '@/components/ui/typography';
import { Cpu, Database, CreditCard, Shield, Cloud, LayoutGrid } from 'lucide-react';

const techLayers = [
  {
    category: 'Frontend & UI Engineering',
    icon: LayoutGrid,
    technologies: [
      { name: 'Next.js', desc: 'App Router, Server Components & Dynamic Bundling' },
      { name: 'React 19', desc: 'Concurrent rendering & optimistic UI state' },
      { name: 'TypeScript', desc: 'Strict static type safety across components' },
      { name: 'Tailwind CSS', desc: 'Tokenized responsive styling & dark theme' },
    ],
  },
  {
    category: 'Backend & Data Services',
    icon: Cpu,
    technologies: [
      { name: 'Node.js', desc: 'Asynchronous event-driven server runtime' },
      { name: 'Supabase', desc: 'PostgreSQL, auth, real-time channels & storage' },
      { name: 'PostgreSQL', desc: 'Relational data models with Row Level Security' },
      { name: 'Vector DB / RAG', desc: 'Embeddings storage for AI semantic search' },
    ],
  },
  {
    category: 'Integrations & Infrastructure',
    icon: Cloud,
    technologies: [
      { name: 'Razorpay / Stripe', desc: 'Secure payment links, subscriptions & webhooks' },
      { name: 'Cloudflare', desc: 'Global DNS, CDN edge caching & DDoS protection' },
      { name: 'Vercel', desc: 'Edge deployment CI/CD pipeline & analytics' },
      { name: 'REST & AI APIs', desc: 'LLM tool-calling schemas & third-party webhooks' },
    ],
  },
];

export function TechArchitectureSection() {
  return (
    <Section spacing="default" className="relative">
      <Container size="default">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 dark:bg-surface-50 text-foreground text-xs font-mono mb-4 border border-border/60">
            <span>Production Stack</span>
          </div>
          <H2>Technology Architecture Organized by Responsibility</H2>
          <TextLead className="mt-4">
            Instead of displaying dozens of disconnected technology logos, I structure software around strict architectural boundaries.
          </TextLead>
        </div>

        {/* Stack Layers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techLayers.map((layer, idx) => {
            const Icon = layer.icon;

            return (
              <motion.div
                key={layer.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl border border-border/80 bg-surface-50/40 dark:bg-surface-50/20 p-6 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3 border-b border-border/50 pb-4">
                    <div className="p-2.5 rounded-lg bg-surface-100 dark:bg-surface-50 text-accent border border-border/50">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground tracking-tight">{layer.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {layer.technologies.map((tech) => (
                      <div key={tech.name} className="space-y-1">
                        <div className="flex items-center justify-between text-xs font-mono font-bold text-foreground">
                          <span>{tech.name}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{tech.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/40 text-[11px] font-mono text-muted-foreground flex items-center justify-between">
                  <span>Layer {idx + 1} Boundary</span>
                  <span className="text-accent">Verified Production</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
