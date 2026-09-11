import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, label, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-5 md:mb-6", className)}>
      {label && (
        <span className="block font-[family-name:var(--font-mono)] text-[11px] md:text-[12px] tracking-wider uppercase text-[#2563eb] font-semibold mb-2">
          {label}
        </span>
      )}
      <h2 className="font-[family-name:var(--font-display)] text-[28px] md:text-[36px] font-bold tracking-[-0.03em] text-[var(--color-primary)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-[15px] md:text-[16px] text-[var(--color-text-secondary)] max-w-[560px] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
