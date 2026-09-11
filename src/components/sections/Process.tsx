import { processSteps } from "@/data/process";

export function Process() {
  return (
    <section className="py-7 md:py-10" id="process">
      <div className="container">
        {/* Header */}
        <div className="mb-6 md:mb-7">
          <h2 className="font-[family-name:var(--font-display)] text-[28px] md:text-[36px] font-bold tracking-[-0.03em] text-[var(--color-primary)] mb-2">
            A Simple, Transparent Process
          </h2>
          <p className="text-[15px] md:text-[16px] text-[var(--color-text-secondary)]">
            From idea to launch — a clear and collaborative approach.
          </p>
        </div>

        {/* 4 Process Steps connected with chevrons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
          {processSteps.map((step, i) => (
            <div
              key={step.number}
              className="relative bg-white lg:bg-transparent rounded-[14px] lg:rounded-none p-6 lg:p-4 border border-[var(--color-border-light)] lg:border-none flex flex-col justify-between"
            >
              <div>
                {/* Step header: Blue badge + Title */}
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-[#2563eb] text-white font-[family-name:var(--font-display)] text-[14px] font-bold shadow-sm shadow-blue-500/20 flex-shrink-0">
                    {step.number}
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-[18px] md:text-[20px] font-bold text-[var(--color-primary)] tracking-tight">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[14px] leading-[1.6] text-[var(--color-text-secondary)] max-w-[280px]">
                  {step.description}
                </p>
              </div>

              {/* Desktop Chevron separator to next step */}
              {i < processSteps.length - 1 && (
                <div className="hidden lg:flex items-center absolute -right-2 top-8 z-10 text-gray-300 pointer-events-none">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
