import Image from "next/image";
import { technologies } from "@/data/technologies";

export function About() {
  return (
    <section className="py-7 md:py-10 border-t border-[var(--color-border-light)]" id="about">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: About Me (4 cols) */}
          <div className="lg:col-span-4">
            <h2 className="font-[family-name:var(--font-display)] text-[28px] md:text-[34px] font-bold tracking-[-0.03em] text-[var(--color-primary)] mb-2">
              About Me
            </h2>
            <div className="font-[family-name:var(--font-mono)] text-[10px] sm:text-[11px] tracking-widest text-[var(--color-text-tertiary)] uppercase mb-6 flex items-center gap-2">
              <span>PEOPLE</span>
              <span>•</span>
              <span>TECHNOLOGY</span>
              <span>•</span>
              <span>BETTER SOLUTIONS</span>
            </div>

            <p className="text-[15px] md:text-[16px] font-bold text-[var(--color-primary)] leading-[1.6] mb-4">
              I&apos;m Gokul, a freelance developer focused on building modern digital experiences for businesses.
            </p>

            <p className="text-[14px] md:text-[15px] text-[var(--color-text-secondary)] leading-[1.7] mb-8">
              I work across websites, web applications, mobile applications and business systems, helping businesses turn their ideas into real, working solutions.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 justify-center h-[44px] px-6 rounded-full bg-[var(--color-primary)] !text-white text-white text-[14px] font-medium font-[family-name:var(--font-primary)] hover:bg-black transition-all duration-200 shadow-sm"
            >
              <span className="!text-white text-white">Let&apos;s Talk</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="!text-white text-white">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Center Column: Developer Photo (4 cols) */}
          <div className="lg:col-span-4 relative flex justify-center my-4 lg:my-0">
            <div className="relative max-w-[380px] w-full">
              <Image
                src="/images/gokul-portrait.jpg"
                alt="Gokul - Freelance Developer"
                width={1024}
                height={821}
                priority
                className="w-full h-auto object-contain mix-blend-multiply"
              />
            </div>
          </div>

          {/* Right Column: Technologies I Work With (4 cols) */}
          <div className="lg:col-span-4">
            <h3 className="font-[family-name:var(--font-display)] text-[22px] md:text-[26px] font-bold tracking-[-0.02em] text-[var(--color-primary)] mb-1">
              Technologies I Work With
            </h3>
            <p className="text-[13.5px] text-[var(--color-text-secondary)] mb-6">
              Modern tools for modern solutions.
            </p>

            <div className="grid grid-cols-3 gap-2.5">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center justify-center h-[38px] px-3 rounded-full bg-white border border-[var(--color-border-light)] text-[12px] md:text-[12.5px] font-medium text-[var(--color-primary)] shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-[var(--color-text-tertiary)] hover:bg-gray-50 transition-colors text-center"
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
