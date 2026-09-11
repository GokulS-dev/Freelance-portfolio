import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-primary)] !text-white text-white hover:bg-black/90 border border-transparent shadow-sm",
  secondary:
    "bg-white text-[var(--color-primary)] border border-[var(--color-border)] hover:border-[var(--color-text-tertiary)] hover:bg-[var(--color-surface-alt)] shadow-xs",
  ghost:
    "bg-transparent text-[var(--color-text-secondary)] border border-transparent hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-alt)]",
};

export function Button({
  variant = "primary",
  href,
  fullWidth = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center gap-2",
    "font-[family-name:var(--font-primary)] font-medium text-[15px]",
    "h-[48px] px-7 rounded-[6px]",
    "transition-colors duration-200 ease-in-out",
    "cursor-pointer select-none",
    "min-w-[44px] min-h-[44px]",
    variantStyles[variant],
    fullWidth && "w-full",
    className
  );

  if (href) {
    return (
      <a href={href} className={baseStyles}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseStyles} {...props}>
      {children}
    </button>
  );
}
