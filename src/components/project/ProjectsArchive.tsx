"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import type { Project } from "@/types";
import { ProjectFilters } from "./ProjectFilters";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetailModal } from "./ProjectDetailModal";

export function ProjectsArchive() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Derive unique categories from real projects
  const categories = useMemo(() => {
    const cats = Array.from(new Set(projects.map((p) => p.category)));
    return ["All", ...cats];
  }, []);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="py-8 md:py-12">
      <div className="container">
        {/* Navigation Breadcrumb / Back Link */}
        <div className="mb-5">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-[13.5px] font-medium text-[var(--color-text-secondary)] hover:text-[#2563eb] transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--color-border-light)] mb-7 md:mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              <span className="font-[family-name:var(--font-mono)] text-[11px] font-semibold uppercase tracking-wider text-[#2563eb]">
                PROJECT ARCHIVE
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-[34px] sm:text-[42px] md:text-[48px] font-extrabold tracking-tight text-[var(--color-primary)] mb-3">
              My Work
            </h1>
            <p className="text-[16px] md:text-[17px] text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
              Projects, experiments and digital solutions I&apos;ve built for businesses.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="self-start md:self-auto">
            <ProjectFilters
              categories={categories}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
          </div>
        </div>

        {/* Project List */}
        {filteredProjects.length > 0 ? (
          <div className="space-y-6 md:space-y-7">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
                isReversed={idx % 2 === 1}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-[16px] bg-[var(--color-surface)] border border-[var(--color-border-light)]">
            <p className="text-[15px] text-[var(--color-text-secondary)]">
              No projects found in this category yet.
            </p>
          </div>
        )}
      </div>

      {/* Shared Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
