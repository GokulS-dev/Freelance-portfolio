import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function Textarea({ label, id, className, required, ...props }: TextareaProps) {
  const textareaId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={textareaId}
        className="font-[family-name:var(--font-primary)] text-[14px] font-medium text-[var(--color-primary)] flex items-center gap-1"
      >
        <span>{label}</span>
        {required && (
          <span className="text-red-500 text-[13px] leading-none" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <textarea
        id={textareaId}
        required={required}
        className={cn(
          "w-full min-h-[140px] px-4 py-3",
          "bg-[var(--color-surface)] text-[var(--color-text)]",
          "border border-[var(--color-border)] rounded-[6px]",
          "font-[family-name:var(--font-primary)] text-[15px]",
          "placeholder:text-[var(--color-text-tertiary)]",
          "transition-colors duration-200 resize-vertical",
          "hover:border-[var(--color-text-tertiary)]",
          "focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]",
          className
        )}
        {...props}
      />
    </div>
  );
}
