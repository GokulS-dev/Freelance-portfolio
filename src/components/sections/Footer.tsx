import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border-light)] safe-bottom">
      <div className="container py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[12px] text-[var(--color-text-tertiary)] font-[family-name:var(--font-mono)]">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-[family-name:var(--font-mono)] text-[11px] tracking-wider text-[var(--color-text-tertiary)]">
            Build · Create · Solve · Repeat
          </p>
        </div>
      </div>
    </footer>
  );
}
