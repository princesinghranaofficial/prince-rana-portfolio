'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, FlaskConical, Sparkles, Layers, Cpu } from 'lucide-react';
import { Container, Section } from '@/components/ui/container';
import { H2, TextLead } from '@/components/ui/typography';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { projectsData } from '@/data/projects';

export function ProductLabPreview() {
  const labConcepts = projectsData.filter((p) => !p.featured).slice(0, 6);

  return (
    <Section spacing="default" className="bg-surface-50/30 dark:bg-surface-50/10 border-y border-border/50">
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FlaskConical className="w-4 h-4 text-accent" />
              <span className="text-xs font-mono text-accent uppercase tracking-widest">
                The Product Lab (/lab)
              </span>
            </div>
            <H2 className="max-w-2xl">
              15 Conceptual SaaS & AI Product Architectures
            </H2>
            <TextLead className="max-w-xl mt-3">
              Fully designed product prototypes exploring enterprise AI operations, fintech tools, healthcare systems, cybersecurity dashboards, and CRM engines.
            </TextLead>
          </div>
          <Link href="/lab">
            <Button variant="primary" rightIcon={<ArrowUpRight className="w-4 h-4" />}>
              Explore Full Product Lab (15)
            </Button>
          </Link>
        </div>

        {/* Demo Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labConcepts.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <Card hoverEffect className="h-full flex flex-col justify-between group">
                <CardHeader>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Badge variant={project.projectType === 'CONCEPT' ? 'concept' : 'prototype'} size="sm">
                      {project.projectType}
                    </Badge>
                    <span className="text-[11px] font-mono text-muted-foreground">{project.category}</span>
                  </div>
                  <CardTitle className="group-hover:text-accent transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                  </CardTitle>
                  <p className="text-xs font-medium text-accent/90">{project.subtitle}</p>
                  <CardDescription className="line-clamp-2 mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-100 dark:bg-surface-50 text-muted-foreground border border-border/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link href={`/lab/${project.slug}`} className="block">
                    <span className="text-xs font-semibold text-foreground group-hover:text-accent flex items-center gap-1">
                      View Concept Architecture &rarr;
                    </span>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
