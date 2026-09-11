'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Layers, 
  Bot, 
  Code2, 
  Rocket, 
  Globe, 
  BarChart3, 
  Key, 
  Layout 
} from 'lucide-react';
import { Container, Section } from '@/components/ui/container';
import { H2, TextLead } from '@/components/ui/typography';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { servicesData } from '@/data/services';

const serviceIcons = [Layers, Bot, Code2, Rocket, Globe, BarChart3];

export function CapabilitiesSection() {
  return (
    <Section spacing="default" className="relative">
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono text-accent uppercase tracking-widest">
                Capabilities & Services
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </div>
            <H2 className="max-w-2xl">
              Engineering Solutions Tailored for SaaS Founders
            </H2>
            <TextLead className="max-w-xl mt-3">
              From initial product architecture to AI integration, database security, and high-performance frontend interfaces.
            </TextLead>
          </div>
          <Link href="/services">
            <Button variant="outline" rightIcon={<ArrowUpRight className="w-4 h-4" />}>
              View All Services
            </Button>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => {
            const Icon = serviceIcons[idx % serviceIcons.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Card hoverEffect className="h-full flex flex-col justify-between group">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-surface-100 dark:bg-surface-50 text-accent flex items-center justify-center mb-4 border border-border/50 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="group-hover:text-accent transition-colors">
                      {service.title}
                    </CardTitle>
                    <p className="text-xs font-medium text-accent/90">{service.tagline}</p>
                    <CardDescription className="mt-2 line-clamp-3">
                      {service.shortDescription}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0 space-y-4">
                    <div className="space-y-1.5 border-t border-border/40 pt-3">
                      {service.capabilities.slice(0, 2).map((cap, cIdx) => (
                        <div key={cIdx} className="text-xs text-muted-foreground flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-accent" />
                          <span>{cap.title}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={`/services/${service.slug}`} className="block">
                      <span className="text-xs font-semibold text-foreground group-hover:text-accent flex items-center gap-1">
                        Explore Capability &rarr;
                      </span>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
