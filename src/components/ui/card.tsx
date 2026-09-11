import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ProjectStatus } from '@/components/ui/project-status';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/types/project';
import { Service } from '@/types/service';
import { InsightArticle } from '@/types/insight';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glass?: boolean;
  surface?: 'default' | 'elevated' | 'muted';
}

export function Card({
  className,
  hoverEffect = false,
  glass = false,
  surface = 'default',
  children,
  ...props
}: CardProps) {
  const surfaceClasses = {
    default: 'bg-surface border-border',
    elevated: 'bg-surface-elevated border-border shadow-sm',
    muted: 'bg-surface-muted/60 border-border',
  };

  return (
    <div
      className={cn(
        'rounded-xl border transition-all duration-200 ease-out overflow-hidden',
        surfaceClasses[surface],
        glass && 'backdrop-blur-md bg-background/80 border-border/60',
        hoverEffect &&
          'hover:border-border-strong hover:shadow-md hover:-translate-y-0.5 active:translate-y-0',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6 space-y-2', className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn('text-lg sm:text-xl font-semibold tracking-tight text-foreground', className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('text-xs sm:text-sm text-text-secondary leading-relaxed', className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6 pt-0', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'p-6 pt-0 flex items-center justify-between border-t border-border/50 mt-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Requirement 23 & Phase 5: Reusable, accessible ProjectCard foundation
 * Image scale 1.01-1.03 on hover, arrow movement, no dramatic tilt, touch friendly
 */
export interface ProjectCardProps {
  project: Project;
  className?: string;
  featured?: boolean;
}

export function ProjectCard({ project, className, featured = false }: ProjectCardProps) {
  const isRealProduct = project.projectType === 'REAL PRODUCT';
  const targetHref = isRealProduct ? `/work/${project.slug}` : `/lab/${project.slug}`;
  const ctaText = project.caseStudyAvailable
    ? 'View Case Study →'
    : isRealProduct
    ? 'Preview Project →'
    : 'Inspect Lab Architecture →';

  return (
    <Card hoverEffect className={cn('h-full flex flex-col justify-between group', className)}>
      <div>
        {/* Cover Image Container */}
        <div className={cn(
          'relative w-full overflow-hidden bg-surface-100 dark:bg-surface-900 border-b border-border/60',
          featured ? 'aspect-[16/9]' : 'aspect-[16/10]'
        )}>
          <Image
            src={project.coverImage}
            alt={`${project.title} - ${project.subtitle}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          />
          {/* Status Badge in overlay */}
          <div className="absolute top-3 left-3">
            <ProjectStatus status={project.projectType} size="sm" />
          </div>
        </div>

        <CardHeader>
          <div className="flex items-center justify-between text-xs font-mono text-text-tertiary mb-1">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
          <CardTitle className="group-hover:text-accent transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight className="w-4 h-4 text-text-tertiary transition-transform duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </CardTitle>
          <p className="text-xs font-medium text-accent">{project.subtitle}</p>
          <CardDescription className="line-clamp-2 mt-2">
            {project.description}
          </CardDescription>
        </CardHeader>
      </div>

      <CardContent className="pt-0 space-y-4">
        {/* Capabilities or Tech tags */}
        {project.capabilities && project.capabilities.length > 0 ? (
          <div className="flex flex-wrap gap-1">
            {project.capabilities.slice(0, 3).map((cap) => (
              <span
                key={cap}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-100 text-text-secondary border border-border/50"
              >
                {cap}
              </span>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-100 text-text-secondary border border-border/50"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <Link
          href={targetHref}
          className="block pt-2 border-t border-border/50 text-xs font-semibold text-foreground group-hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xs"
        >
          {ctaText}
        </Link>
      </CardContent>
    </Card>
  );
}

/**
 * Specialized ServiceCard
 */
export interface ServiceCardProps {
  service: Service;
  icon?: React.ReactNode;
  className?: string;
}

export function ServiceCard({ service, icon, className }: ServiceCardProps) {
  return (
    <Card hoverEffect className={cn('h-full flex flex-col justify-between group', className)}>
      <CardHeader>
        {icon && (
          <div className="w-10 h-10 rounded-lg bg-surface-100 text-accent flex items-center justify-center mb-3 border border-border/60 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
            {icon}
          </div>
        )}
        <CardTitle className="group-hover:text-accent transition-colors">
          {service.title}
        </CardTitle>
        <p className="text-xs font-medium text-accent/90">{service.tagline}</p>
        <CardDescription className="mt-2 line-clamp-3">
          {service.shortDescription}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0 space-y-4">
        <Link
          href={`/services/${service.slug}`}
          className="block pt-2 border-t border-border/50 text-xs font-semibold text-foreground group-hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xs"
        >
          Explore Capability &rarr;
        </Link>
      </CardContent>
    </Card>
  );
}

/**
 * Specialized InsightCard
 */
export interface InsightCardProps {
  article: InsightArticle;
  className?: string;
}

export function InsightCard({ article, className }: InsightCardProps) {
  return (
    <Card hoverEffect className={cn('h-full flex flex-col justify-between group', className)}>
      <CardHeader>
        <div className="flex items-center justify-between text-xs font-mono text-text-tertiary mb-2">
          <Badge variant="accent" size="sm">{article.category}</Badge>
          <span>{article.readingTime}</span>
        </div>
        <CardTitle className="group-hover:text-accent transition-colors text-lg">
          {article.title}
        </CardTitle>
        <CardDescription className="mt-2 line-clamp-2">
          {article.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex items-center justify-between pt-3 border-t border-border/50 text-xs">
          <span className="font-mono text-text-tertiary">{article.publishedAt}</span>
          <Link
            href={`/insights/${article.slug}`}
            className="font-semibold text-foreground group-hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xs"
          >
            Read Article &rarr;
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
