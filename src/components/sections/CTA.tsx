import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export function CTA() {
  return (
    <section className="py-6 md:py-8" id="cta">
      <div className="container">
        <div className="relative bg-[#0d1520] rounded-[20px] md:rounded-[24px] px-6 py-8 md:px-12 md:py-9 overflow-hidden shadow-xl">
          {/* Subtle ambient gradient */}
          <div className="absolute top-0 right-0 w-[400px] h-[200px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Left: Text */}
            <div className="max-w-[540px]">
              <h2 className="font-[family-name:var(--font-display)] text-[28px] sm:text-[34px] md:text-[38px] font-bold tracking-[-0.03em] !text-white text-white mb-2.5">
                Have a project in mind?
              </h2>
              <p className="text-[15px] md:text-[16px] leading-relaxed !text-gray-300 text-gray-300">
                Tell me what you&apos;re building, and let&apos;s discuss how I can help.
              </p>
            </div>

            {/* Right: Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 flex-shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 h-[48px] px-7 rounded-full bg-white !text-gray-900 text-gray-900 text-[14px] md:text-[15px] font-bold font-[family-name:var(--font-primary)] hover:bg-gray-100 transition-all duration-200 shadow-sm"
              >
                <span className="!text-gray-900 text-gray-900">Start a Conversation</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="!text-gray-900 text-gray-900">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 h-[48px] px-6 rounded-full bg-[#0d221c] !text-[#34d399] text-[#34d399] border border-[#059669]/70 text-[14px] md:text-[15px] font-semibold font-[family-name:var(--font-primary)] hover:bg-[#133229] hover:border-[#10b981] transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="!text-[#34d399] text-[#34d399]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.11 1.516 5.84L.048 23.7a.5.5 0 00.612.612l5.86-1.468A11.948 11.948 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.94 0-3.79-.526-5.41-1.504l-.388-.232-4.02 1.005 1.005-4.02-.232-.388A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
                <span className="!text-[#34d399] text-[#34d399]">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
