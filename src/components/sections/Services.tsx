import { services } from "@/data/services";

export function Services() {
  const serviceIcons = [
    // 01 Business Websites
    (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    // 02 Landing Pages
    (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    // 03 Web Applications
    (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    // 04 Mobile Applications
    (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    // 05 Business Automation
    (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    ),
  ];

  return (
    <section className="py-7 md:py-10 bg-[var(--color-surface-alt)]/60" id="services">
      <div className="container">
        {/* Header */}
        <div className="mb-6 md:mb-7">
          <h2 className="font-[family-name:var(--font-display)] text-[28px] md:text-[36px] font-bold tracking-[-0.03em] text-[var(--color-primary)] mb-2">
            How I Can Help
          </h2>
          <p className="text-[15px] md:text-[16px] text-[var(--color-text-secondary)]">
            Modern digital solutions for growing businesses.
          </p>
        </div>

        {/* 5 Distinct Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="bg-white rounded-[14px] p-6 border border-[var(--color-border-light)] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Top: Icon + Faint Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-[8px] border border-blue-100 bg-blue-50/70 flex items-center justify-center text-[#2563eb]">
                    {serviceIcons[index]}
                  </div>
                  <span className="font-[family-name:var(--font-display)] text-[28px] font-extrabold text-gray-200 leading-none">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-display)] text-[16px] md:text-[17px] font-bold text-[var(--color-primary)] mb-2.5 tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] leading-[1.65] text-[var(--color-text-secondary)]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
