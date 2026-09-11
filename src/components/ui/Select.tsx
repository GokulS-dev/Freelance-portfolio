import { cn } from "@/lib/utils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export function Select({ label, id, options, placeholder, className, ...props }: SelectProps) {
  const selectId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={selectId}
        className="font-[family-name:var(--font-primary)] text-[14px] font-medium text-[var(--color-primary)]"
      >
        {label}
      </label>
      <select
        id={selectId}
        className={cn(
          "w-full h-[48px] px-4",
          "bg-[var(--color-surface)] text-[var(--color-text)]",
          "border border-[var(--color-border)] rounded-[6px]",
          "font-[family-name:var(--font-primary)] text-[15px]",
          "transition-colors duration-200 appearance-none",
          "hover:border-[var(--color-text-tertiary)]",
          "focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]",
          "bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239ca3af%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')]",
          "bg-[length:12px] bg-[position:right_16px_center] bg-no-repeat",
          className
        )}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
