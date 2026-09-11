"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { Project } from "@/types";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Reset scroll to top and handle ESC key & body scroll lock
  useEffect(() => {
    if (!project) return;

    // Immediately reset scroll positions to top
    if (outerRef.current) {
      outerRef.current.scrollTop = 0;
    }
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }

    // Focus the top close button so browser never auto-scrolls to bottom buttons
    const focusTimer = setTimeout(() => {
      if (closeButtonRef.current) {
        closeButtonRef.current.focus({ preventScroll: true });
      }
    }, 30);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl !== "#");
  const hasReview = Boolean(project.caseStudy?.clientReview?.quote);
  const screenshots = project.caseStudy?.screenshots || [project.image];

  return (
    <div
      ref={outerRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
      className="fixed inset-0 z-50 flex justify-center items-start p-0 md:p-6 lg:p-10 bg-black/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Modal Container — Aligned to top, never overflows negative space */}
      <div className="relative w-full max-w-4xl min-h-screen md:min-h-0 md:max-h-[88vh] bg-[#fafaf9] md:rounded-[20px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] border border-[var(--color-border)] flex flex-col overflow-hidden my-0 md:my-auto">
        {/* Sticky Top Bar / Header */}
        <header className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6 h-[58px] bg-[#fafaf9]/95 backdrop-blur-md border-b border-[var(--color-border-light)] safe-top shrink-0">
          {/* Mobile Back Button / Desktop Index Tag */}
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="md:hidden flex items-center gap-1.5 h-[44px] px-2.5 -ml-2 rounded-lg text-[14px] font-semibold text-[var(--color-primary)] hover:bg-gray-100 transition-colors"
              aria-label="Back to projects"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
              <span>Back</span>
            </button>

            <div className="hidden md:flex items-center gap-2">
              <span className="font-[family-name:var(--font-mono)] text-[11px] font-semibold text-[#2563eb] tracking-wider uppercase">
                PROJECT {project.index}
              </span>
              <span className="text-gray-300">/</span>
              <span className="font-[family-name:var(--font-mono)] text-[10.5px] uppercase tracking-wider text-[var(--color-text-tertiary)]">
                {project.category}
              </span>
            </div>
          </div>

          {/* Close button */}
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="flex items-center justify-center w-[44px] h-[44px] rounded-full hover:bg-gray-200/80 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-all"
            aria-label="Close project details"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </header>

        {/* Scrollable Content Body — Explicitly reset to top on mount */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-5 sm:p-8 md:p-10 space-y-8 safe-bottom"
        >
          {/* Main Title & Metadata */}
          <div>
            <div className="flex items-center gap-2 mb-3 md:hidden">
              <span className="font-[family-name:var(--font-mono)] text-[10.5px] font-semibold text-[#2563eb] tracking-wider uppercase">
                PROJECT {project.index}
              </span>
              <span className="text-gray-300">·</span>
              <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-[var(--color-text-tertiary)]">
                {project.category}
              </span>
            </div>

            <h2
              id="project-detail-title"
              className="font-[family-name:var(--font-display)] text-[24px] sm:text-[30px] md:text-[36px] font-bold text-[var(--color-primary)] leading-[1.15] tracking-tight mb-2.5"
            >
              {project.title}
            </h2>

            <p className="text-[14px] sm:text-[15px] font-medium text-[var(--color-text-secondary)] mb-4">
              <span className="text-[var(--color-text-tertiary)] uppercase font-[family-name:var(--font-mono)] text-[11px] tracking-wider mr-1.5">
                Client:
              </span>
              {project.client}
            </p>

            <p className="text-[15px] sm:text-[16px] leading-[1.7] text-[var(--color-text-secondary)] max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Primary Screenshot in Editorial Showcase Frame */}
          <div className="rounded-[16px] overflow-hidden border border-[var(--color-border-light)] bg-gradient-to-b from-[#fcfcfb] to-[#f4f4f1] p-2 sm:p-4 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <div className="relative rounded-[10px] overflow-hidden bg-white shadow-sm">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                width={1376}
                height={768}
                priority
                className="w-full h-auto object-contain block"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>
          </div>

          {/* Structured Case Study Context: Challenge & Solution */}
          {project.caseStudy && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              <div className="p-5 sm:p-6 rounded-[14px] bg-[var(--color-surface)] border border-[var(--color-border-light)]">
                <div className="font-[family-name:var(--font-mono)] text-[10.5px] uppercase tracking-wider text-[#2563eb] font-semibold mb-2">
                  THE CHALLENGE
                </div>
                <p className="text-[14px] leading-[1.65] text-[var(--color-text-secondary)]">
                  {project.caseStudy.challenge}
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-[14px] bg-[var(--color-surface)] border border-[var(--color-border-light)]">
                <div className="font-[family-name:var(--font-mono)] text-[10.5px] uppercase tracking-wider text-emerald-600 font-semibold mb-2">
                  THE SOLUTION
                </div>
                <p className="text-[14px] leading-[1.65] text-[var(--color-text-secondary)]">
                  {project.caseStudy.solution}
                </p>
              </div>
            </div>
          )}

          {/* Project Details Grid */}
          <div className="p-5 sm:p-6 rounded-[14px] bg-[var(--color-surface)] border border-[var(--color-border-light)] grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-[var(--color-text-tertiary)] mb-1">
                Client Organization
              </div>
              <div className="text-[13.5px] font-semibold text-[var(--color-primary)]">
                {project.client}
              </div>
            </div>

            <div>
              <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-[var(--color-text-tertiary)] mb-1">
                Project Category
              </div>
              <div className="text-[13.5px] font-semibold text-[var(--color-primary)]">
                {project.category}
              </div>
            </div>

            {project.location && (
              <div className="sm:col-span-2 pt-2 border-t border-[var(--color-border-light)]">
                <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-[var(--color-text-tertiary)] mb-1">
                  Client Location
                </div>
                <div className="text-[13px] text-[var(--color-text-secondary)]">
                  {project.location}
                </div>
              </div>
            )}

            <div className="sm:col-span-2 pt-2 border-t border-[var(--color-border-light)]">
              <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-[var(--color-text-tertiary)] mb-2">
                Technologies Used
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md text-[12px] font-medium bg-[var(--color-surface-alt)] text-[var(--color-primary)] border border-[var(--color-border-light)] font-[family-name:var(--font-mono)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Screenshots Gallery (if more than 1) */}
          {screenshots.length > 1 && (
            <div className="space-y-4 pt-2">
              <div className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-[var(--color-text-tertiary)]">
                PROJECT GALLERY
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {screenshots.slice(1).map((src, i) => (
                  <div
                    key={i}
                    className="rounded-[12px] overflow-hidden border border-[var(--color-border)] bg-white relative aspect-[16/10]"
                  >
                    <Image
                      src={src}
                      alt={`${project.title} gallery image ${i + 2}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 450px"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Client Review (Option A: only rendered when real review exists) */}
          {hasReview && (
            <div className="p-6 rounded-[14px] bg-white border border-[var(--color-border)] shadow-sm">
              <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-[#2563eb] font-semibold mb-2">
                CLIENT FEEDBACK
              </div>
              <blockquote className="text-[15px] italic text-[var(--color-primary)] mb-3">
                &ldquo;{project.caseStudy?.clientReview?.quote}&rdquo;
              </blockquote>
              {project.caseStudy?.clientReview?.author && (
                <div className="text-[13px] font-medium text-[var(--color-text-secondary)]">
                  {project.caseStudy.clientReview.author}
                  {project.caseStudy.clientReview.role && ` · ${project.caseStudy.clientReview.role}`}
                </div>
              )}
            </div>
          )}

          {/* Footer Action Bar */}
          <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border-light)]">
            <button
              onClick={onClose}
              className="h-[44px] px-5 rounded-full border border-[var(--color-border)] text-[14px] font-medium text-[var(--color-text-secondary)] hover:bg-gray-100 transition-colors"
            >
              Close Presentation
            </button>

            {hasLiveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-[44px] px-6 rounded-full bg-[var(--color-primary)] !text-white text-white text-[14px] font-medium hover:bg-black transition-all shadow-sm"
              >
                <span>Visit Live Project</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
