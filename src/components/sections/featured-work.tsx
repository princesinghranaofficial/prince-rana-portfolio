'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Sparkles, Code2, Database, ShieldCheck } from 'lucide-react';
import { Container, Section } from '@/components/ui/container';
import { H2, TextLead, TextRegular } from '@/components/ui/typography';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/data/projects';

export function FeaturedWork() {
  const flagshipProjects = projectsData.filter((p) => p.featured);

  return (
    <Section spacing="default" className="relative">
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono text-accent uppercase tracking-widest">
                Selected Flagship Work
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </div>
            <H2 className="max-w-2xl">
              Production SaaS & AI Product Engineering Case Studies
            </H2>
          </div>
          <Link href="/work">
            <Button variant="outline" rightIcon={<ArrowUpRight className="w-4 h-4" />}>
              View All Work
            </Button>
          </Link>
        </div>

        {/* Flagship Projects Stack */}
        <div className="space-y-24">
          {flagshipProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-border/80 bg-surface-50/40 dark:bg-surface-50/20 p-6 lg:p-10 overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Left Info Column */}
                  <div className={`lg:col-span-5 space-y-6 ${isEven ? '' : 'lg:order-2'}`}>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-muted-foreground font-semibold">
                          PROJECT 0{idx + 1}
                        </span>
                        <Badge variant="real-product" size="sm">
                          {project.projectType}
                        </Badge>
                        <Badge variant="outline" size="sm">
                          {project.category}
                        </Badge>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-accent">
                        {project.subtitle}
                      </p>
                    </div>

                    <TextRegular className="text-foreground/80">
                      {project.description}
                    </TextRegular>

                    {/* Highlights */}
                    <div className="space-y-2.5 pt-2 border-t border-border/50">
                      {project.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-foreground font-semibold">{feat.title}:</strong> {feat.description}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-surface-100 dark:bg-surface-50 text-foreground/80 border border-border/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Link */}
                    <div className="pt-4">
                      <Link href={`/work/${project.slug}`}>
                        <Button variant="primary" rightIcon={<ArrowUpRight className="w-4 h-4" />}>
                          Explore Case Study
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Right Media Column */}
                  <div className={`lg:col-span-7 ${isEven ? '' : 'lg:order-1'}`}>
                    <div className="relative group rounded-xl border border-border/80 overflow-hidden bg-surface-100 dark:bg-surface-900 shadow-xl">
                      <div className="relative aspect-[16/10] w-full">
                        <Image
                          src={project.coverImage}
                          alt={`${project.title} — ${project.category} software interface`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80" />
                      </div>

                      {/* Overlaid UI Preview Bar */}
                      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-background/90 backdrop-blur-md border border-border/60 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                          <span className="font-semibold text-foreground">{project.status}</span>
                        </div>
                        <span className="font-mono text-muted-foreground">{project.year} Release</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
