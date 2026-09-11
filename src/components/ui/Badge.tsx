import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center",
        "font-[family-name:var(--font-mono)] text-[12px] font-medium tracking-wide",
        "px-3 py-1.5 rounded-[4px]",
        "bg-[var(--color-surface-alt)] text-[var(--color-text-secondary)]",
        "border border-[var(--color-border-light)]",
        className
      )}
    >
      {children}
    </span>
  );
}
