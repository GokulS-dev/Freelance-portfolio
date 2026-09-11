import { EcosystemVisual } from "@/components/sections/EcosystemVisual";

export function Hero() {
  const industries = [
    {
      name: "Startups",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      ),
    },
    {
      name: "Small Businesses",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01" />
          <path d="M16 6h.01" />
          <path d="M8 10h.01" />
          <path d="M16 10h.01" />
          <path d="M8 14h.01" />
          <path d="M16 14h.01" />
        </svg>
      ),
    },
    {
      name: "Healthcare",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path d="M12 9v6" />
          <path d="M9 12h6" />
        </svg>
      ),
    },
    {
      name: "Education",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
    {
      name: "E-commerce",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="relative min-h-[calc(100dvh-60px)] lg:min-h-[calc(100vh-72px)] flex flex-col justify-between lg:justify-center py-2.5 sm:py-5 lg:py-10 overflow-hidden"
      id="hero"
    >
      <div className="container my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-7 lg:gap-10 xl:gap-14 2xl:gap-16 items-center">
          {/* Content — Left 6 or 7 cols */}
          <div className="lg:col-span-6 xl:col-span-6">

            {/* Headline */}
            <h1 className="font-[family-name:var(--font-display)] text-[23px] xs:text-[26px] sm:text-[36px] md:text-[46px] lg:text-[50px] xl:text-[56px] 2xl:text-[62px] font-extrabold leading-[1.15] sm:leading-[1.08] tracking-[-0.03em] text-[var(--color-primary)] mb-2.5 sm:mb-5">
              Building digital{" "}
              <span className="font-[family-name:var(--font-editorial)] italic font-normal text-[1.05em]">
                experiences
              </span>{" "}
              that help{" "}
              <span className="text-[#2563eb]">businesses move forward.</span>
            </h1>

            {/* Supporting text */}
            <p className="text-[13px] sm:text-[15.5px] md:text-[17px] leading-[1.5] sm:leading-[1.7] text-[var(--color-text-secondary)] max-w-[540px] mb-3.5 sm:mb-6">
              I design and develop modern websites, web applications and mobile
              experiences for businesses that want to build a stronger digital
              presence.
            </p>

            {/* CTAs — Balanced 2-column grid on mobile */}
            <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-row sm:items-center sm:gap-3.5 mb-3 sm:mb-6 max-w-[360px] sm:max-w-none">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 h-[42px] sm:h-[48px] px-3 sm:px-7 rounded-full bg-[var(--color-primary)] !text-white text-white text-[13px] sm:text-[15px] font-medium font-[family-name:var(--font-primary)] hover:bg-black transition-all duration-200 shadow-sm"
              >
                <span className="!text-white text-white whitespace-nowrap">View Work</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="!text-white text-white flex-shrink-0">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2.5 h-[42px] sm:h-[48px] px-3 sm:px-6 rounded-full bg-white border border-[var(--color-border)] !text-[var(--color-primary)] text-[var(--color-primary)] text-[13px] sm:text-[15px] font-medium font-[family-name:var(--font-primary)] hover:border-[var(--color-text-tertiary)] hover:bg-gray-50 transition-all duration-200"
              >
                <span className="!text-[var(--color-primary)] text-[var(--color-primary)] whitespace-nowrap">Let&apos;s Talk</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="!text-[var(--color-primary)] text-[var(--color-primary)] flex-shrink-0">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </a>
            </div>

            {/* Trust bar — compact on mobile */}
            <div className="pt-0.5 sm:pt-1">
              <p className="text-[11px] sm:text-[12px] font-medium text-[var(--color-text-tertiary)] tracking-wide mb-1.5 sm:mb-2.5">
                Trusted by businesses across industries
              </p>
              <div className="flex items-center gap-3 sm:gap-x-5 gap-y-1.5 overflow-x-auto no-scrollbar py-0.5 text-[11.5px] sm:text-[13px] text-[var(--color-text-secondary)]">
                {industries.map((ind) => (
                  <div key={ind.name} className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0 text-[var(--color-text-secondary)]">
                    <span className="text-[var(--color-text-tertiary)]">{ind.icon}</span>
                    <span className="font-medium text-[11.5px] sm:text-[12.5px]">{ind.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Visual — Original Digital Product Ecosystem */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <EcosystemVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
