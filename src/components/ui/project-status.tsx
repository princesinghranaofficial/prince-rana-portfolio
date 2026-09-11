import * as React from 'react';
import { CheckCircle2, FlaskConical, Cpu, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ProjectType } from '@/types/project';

export interface ProjectStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  status: ProjectType;
  size?: 'sm' | 'md';
  showDescription?: boolean;
}

const statusConfig: Record<
  ProjectType,
  {
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    description: string;
    containerClass: string;
    iconClass: string;
  }
> = {
  'REAL PRODUCT': {
    label: 'Built Product',
    icon: CheckCircle2,
    description: 'Fully built and deployed full-stack application',
    containerClass: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30',
    iconClass: 'text-emerald-600 dark:text-emerald-400',
  },
  'CONCEPT': {
    label: 'Concept',
    icon: FlaskConical,
    description: 'Architectural research & UI/UX product demo',
    containerClass: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30',
    iconClass: 'text-amber-600 dark:text-amber-400',
  },
  'PROTOTYPE': {
    label: 'Prototype',
    icon: Cpu,
    description: 'Interactive functional MVP exploration',
    containerClass: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/30',
    iconClass: 'text-purple-600 dark:text-purple-400',
  },
};

export function ProjectStatus({
  status,
  size = 'md',
  showDescription = false,
  className,
  ...props
}: ProjectStatusProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 font-mono uppercase tracking-wider font-semibold rounded-md border select-none',
        config.containerClass,
        size === 'sm' ? 'text-[10px] px-2 py-0.5' : 'text-xs px-2.5 py-1',
        className
      )}
      role="status"
      aria-label={`Project Status: ${config.label} (${config.description})`}
      {...props}
    >
      <Icon className={cn('shrink-0', size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5', config.iconClass)} aria-hidden="true" />
      <span>{config.label}</span>
      {showDescription && (
        <span className="normal-case opacity-75 font-sans font-normal ml-1 hidden sm:inline">
          — {config.description}
        </span>
      )}
    </div>
  );
}
