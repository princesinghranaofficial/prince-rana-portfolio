import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { ProjectCard } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/data/projects';

export function SecondaryWorkPreview() {
  // Select 3 visually diverse concepts (Aura AI, Sentinel, Cliniq AI)
  const secondaryProjects = projectsData.filter((p) =>
    ['aura-ai', 'sentinel', 'cliniq-ai'].includes(p.slug)
  );

  return (
    <section className="py-20 md:py-28 border-t border-border/80 bg-background relative">
      <Container size="wide">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Conceptual Work"
          title="More product explorations."
          description="In addition to flagship commercial SaaS products, I build high-fidelity conceptual architectures to validate user experience and data models across diverse industries."
          action={
            <Link href="/work">
              <Button variant="outline" size="sm" rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}>
                View All Projects
              </Button>
            </Link>
          }
          align="split"
        />

        {/* 3 Diverse Concept Cards using Phase 2 ProjectCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
