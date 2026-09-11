'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Cpu, Layers, Sparkles, Activity } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ProductLabProject } from '@/types/lab';
import { trackEvent } from '@/lib/analytics';

interface LabProjectCardProps {
  project: ProductLabProject;
  index?: number;
}

export function LabProjectCard({ project, index = 0 }: LabProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const handleCardClick = () => {
    trackEvent('lab_project_opened', {
      slug: project.slug,
      title: project.title,
      category: project.category,
      complexity: project.complexity,
    });
  };

  const complexityColor = {
    Focused: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    Standard: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    Advanced: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  }[project.complexity];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.28,
        delay: shouldReduceMotion ? 0 : Math.min(index * 0.035, 0.3),
        ease: [0.16, 1, 0.3, 1],
      }}
      className="h-full"
    >
      <Card
        hoverEffect
        className="h-full flex flex-col justify-between group overflow-hidden border-border/60 hover:border-accent/40 transition-all duration-300 relative bg-surface-100/70 dark:bg-surface-900/60 backdrop-blur-sm"
      >
        {/* Subtle accent glow top border */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: project.visualTheme.accentGlow.replace('0.15', '0.8') }}
          aria-hidden="true"
        />

        <div>
          {/* Cover Media */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-200 dark:bg-surface-800 border-b border-border/50">
            <Image
              src={project.coverImage}
              alt={`${project.title} Architectural Concept`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-[1.02] transition-transform duration-300 ease-out"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80" />

            {/* Badges in header */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-1.5">
                <Badge
                  variant={project.status === 'CONCEPT' ? 'concept' : 'prototype'}
                  size="sm"
                  className="font-mono text-[10px] tracking-wider uppercase backdrop-blur-md"
                >
                  {project.status}
                </Badge>
                {project.featured && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                    <Sparkles className="w-2.5 h-2.5" />
                    Featured
                  </span>
                )}
              </div>

              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-medium border backdrop-blur-md ${complexityColor}`}>
                {project.complexity}
              </span>
            </div>

            {/* Bottom image overlay metadata */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-foreground/80 pointer-events-none">
              <span className="px-2 py-0.5 rounded bg-background/80 backdrop-blur-md border border-border/50">
                {project.category}
              </span>
              <span className="px-2 py-0.5 rounded bg-background/80 backdrop-blur-md border border-border/50">
                {project.screens.length} Screen Specs
              </span>
            </div>
          </div>

          <CardHeader className="pt-5 pb-3">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                {project.industry}
              </span>
            </div>

            <CardTitle className="text-lg font-semibold tracking-tight group-hover:text-accent transition-colors flex items-center justify-between">
              <span>{project.title}</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-accent shrink-0 ml-1" />
            </CardTitle>

            <p className="text-xs font-medium text-accent/90 line-clamp-1 mt-0.5">
              {project.tagline}
            </p>

            <CardDescription className="line-clamp-2 text-xs text-muted-foreground mt-2 leading-relaxed">
              {project.description}
            </CardDescription>
          </CardHeader>
        </div>

        <CardContent className="pt-0 pb-5 space-y-4">
          {/* Key Capabilities */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono text-muted-foreground/80 uppercase tracking-wider block">
              Core Capabilities
            </span>
            <div className="flex flex-wrap gap-1">
              {project.capabilities.slice(0, 3).map((cap) => (
                <span
                  key={cap}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-200/60 dark:bg-surface-800/60 text-foreground/80 border border-border/50"
                >
                  {cap}
                </span>
              ))}
              {project.capabilities.length > 3 && (
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded text-muted-foreground">
                  +{project.capabilities.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Action link */}
          <div className="pt-3 border-t border-border/50">
            <Link
              href={`/lab/${project.slug}`}
              onClick={handleCardClick}
              className="group/link flex items-center justify-between text-xs font-semibold text-foreground hover:text-accent transition-colors"
            >
              <span>Inspect Architecture & Specs</span>
              <span className="group-hover/link:translate-x-0.5 transition-transform">&rarr;</span>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
