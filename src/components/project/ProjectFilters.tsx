"use client";

interface ProjectFiltersProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export function ProjectFilters({
  categories,
  activeCategory,
  onSelectCategory,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter projects by category">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectCategory(category)}
            className={`h-[36px] px-4 rounded-full text-[13px] font-medium font-[family-name:var(--font-primary)] transition-all duration-200 ${
              isActive
                ? "bg-[var(--color-primary)] !text-white text-white shadow-sm"
                : "bg-[var(--color-surface)] text-[var(--color-text-secondary)] border border-[var(--color-border-light)] hover:border-[var(--color-text-tertiary)] hover:text-[var(--color-primary)]"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
