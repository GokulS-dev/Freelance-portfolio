import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, id, className, ...props }: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={inputId}
        className="font-[family-name:var(--font-primary)] text-[14px] font-medium text-[var(--color-primary)]"
      >
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          "w-full h-[48px] px-4",
          "bg-[var(--color-surface)] text-[var(--color-text)]",
          "border border-[var(--color-border)] rounded-[6px]",
          "font-[family-name:var(--font-primary)] text-[15px]",
          "placeholder:text-[var(--color-text-tertiary)]",
          "transition-colors duration-200",
          "hover:border-[var(--color-text-tertiary)]",
          "focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]",
          className
        )}
        {...props}
      />
    </div>
  );
}
