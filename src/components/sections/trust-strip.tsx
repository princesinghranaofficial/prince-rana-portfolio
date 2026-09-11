import * as React from 'react';
import { Container } from '@/components/ui/container';
import { Code2, Cpu, Layers, Rocket, ShieldCheck } from 'lucide-react';

const trustItems = [
  { icon: Layers, label: '15+ Product Concepts', desc: 'SaaS & AI Architectures' },
  { icon: Code2, label: 'Full-Stack Development', desc: 'Production Frontend & Backend' },
  { icon: Cpu, label: 'AI Integration', desc: 'Copilots & Automated Workflows' },
  { icon: ShieldCheck, label: 'SaaS Architecture', desc: 'Database & Auth Systems' },
  { icon: Rocket, label: 'Production Deployment', desc: 'Vercel, Cloudflare & Supabase' },
];

export function TrustStrip() {
  return (
    <div className="border-y border-border/60 bg-surface-50/50 dark:bg-surface-50/20 py-8">
      <Container size="default">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center md:text-left">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <div className="p-2 rounded-lg bg-surface-100 dark:bg-surface-50 text-foreground shrink-0 border border-border/40">
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground tracking-tight">{item.label}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
