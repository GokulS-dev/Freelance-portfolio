"use client";

import Image from "next/image";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  isReversed?: boolean;
}

export function ProjectCard({ project, onSelect, isReversed = false }: ProjectCardProps) {
  return (
    <article className="group bg-[var(--color-surface)] border border-[var(--color-border-light)] rounded-[18px] p-5 sm:p-7 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.07)] transition-all duration-300">
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center ${
          isReversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Project Visual in Editorial Showcase Frame — 7 cols */}
        <div className="lg:col-span-7">
          <div
            onClick={() => onSelect(project)}
            className="cursor-pointer rounded-[14px] overflow-hidden border border-[var(--color-border-light)] bg-gradient-to-b from-[#fcfcfb] to-[#f4f4f1] p-2 sm:p-3 shadow-sm group-hover:border-[var(--color-text-tertiary)]/60 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
          >
            <div className="relative rounded-[10px] overflow-hidden bg-white">
              <Image
                src={project.image}
                alt={`${project.title} — ${project.client}`}
                width={1024}
                height={588}
                className="w-full h-auto object-contain block group-hover:scale-[1.015] transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 650px"
              />
            </div>
          </div>
        </div>

        {/* Project Content — 5 cols */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            {/* Metadata: Index & Category */}
            <div className="flex items-center gap-2 mb-3">
              <span className="font-[family-name:var(--font-mono)] text-[11px] font-semibold text-[#2563eb] tracking-wider uppercase">
                {project.index}
              </span>
              <span className="text-gray-300">/</span>
              <span className="font-[family-name:var(--font-mono)] text-[10.5px] uppercase tracking-wider text-[var(--color-text-tertiary)]">
                {project.category}
              </span>
            </div>

            {/* Client Name */}
            <p className="text-[12.5px] font-semibold tracking-wide uppercase font-[family-name:var(--font-mono)] text-[var(--color-text-secondary)] mb-1.5">
              Client: <span className="text-[var(--color-primary)] font-bold">{project.client}</span>
            </p>

            {/* Title */}
            <h3 className="font-[family-name:var(--font-display)] text-[22px] sm:text-[24px] md:text-[26px] font-bold text-[var(--color-primary)] leading-tight mb-3 tracking-tight">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-[14px] leading-[1.65] text-[var(--color-text-secondary)] mb-5">
              {project.description}
            </p>

            {/* Technology Badges */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[var(--color-surface-alt)] text-[var(--color-text-secondary)] border border-[var(--color-border-light)] font-[family-name:var(--font-mono)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* View Project Button */}
          <div>
            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-2 h-[44px] px-5 rounded-full bg-white border border-[var(--color-border)] text-[13.5px] font-semibold text-[var(--color-primary)] hover:border-[#2563eb] hover:text-[#2563eb] hover:bg-blue-50/40 transition-all duration-200 shadow-sm"
            >
              <span>View Project</span>
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
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
