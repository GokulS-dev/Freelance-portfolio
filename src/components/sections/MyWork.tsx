"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import type { Project } from "@/types";
import { ProjectCard } from "@/components/project/ProjectCard";
import { ProjectDetailModal } from "@/components/project/ProjectDetailModal";

export function MyWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-7 md:py-10" id="work">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 md:mb-7">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-[28px] md:text-[36px] font-bold tracking-[-0.03em] text-[var(--color-primary)] mb-2">
              My Work
            </h2>
            <p className="text-[15px] md:text-[16px] text-[var(--color-text-secondary)] max-w-xl">
              A selection of digital experiences and business solutions I&apos;ve designed and developed.
            </p>
          </div>

          <Link
            href="/projects"
            scroll={true}
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#2563eb] hover:text-[#1d4ed8] transition-colors self-start sm:self-auto"
          >
            <span>View All Projects</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Editorial Project List (Alternating large showcase format) */}
        <div className="space-y-6 md:space-y-7">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
              isReversed={idx % 2 === 1}
            />
          ))}
        </div>
      </div>

      {/* Case-Study Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
