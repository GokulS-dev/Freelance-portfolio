import Image from "next/image";

export function EcosystemVisual() {
  return (
    <div className="relative w-full max-w-[580px] mx-auto lg:max-w-none select-none">
      {/* Studio Header / Metadata Bar */}
      <div className="flex items-center justify-between mb-2 sm:mb-2.5 px-1">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-[family-name:var(--font-mono)] text-[10.5px] sm:text-[11px] tracking-wider uppercase font-semibold text-[var(--color-primary)]">
            DIGITAL PRODUCT ECOSYSTEM
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[9.5px] sm:text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-wider">
          <span>WEB</span>
          <span>·</span>
          <span>MOBILE</span>
          <span>·</span>
          <span className="hidden xs:inline">BUSINESS </span>
          <span>SYSTEMS</span>
        </div>
      </div>

      {/* Main Composition Framing Card with High-End Studio Artwork */}
      <div className="relative rounded-[16px] sm:rounded-[20px] overflow-hidden border border-[var(--color-border)] shadow-[0_16px_40px_-15px_rgba(0,0,0,0.07)] bg-[#fcfcfb]">
        <Image
          src="/images/hero-ecosystem.jpg"
          alt="Digital Product Ecosystem — Web, Mobile, and Business Systems Architecture"
          width={1280}
          height={720}
          priority
          className="w-full h-auto object-cover block"
        />
      </div>

      {/* Editorial Handwritten Annotation */}
      <div className="flex items-center justify-between pt-2 sm:pt-2.5 px-1">
        <div className="font-[family-name:var(--font-handwritten)] text-[13px] sm:text-[14.5px] text-[var(--color-text-tertiary)] flex items-center gap-1.5">
          <span>↳</span>
          <span>Unified Web, Mobile &amp; Systems Architecture</span>
        </div>
        <div className="font-[family-name:var(--font-mono)] text-[9px] text-[var(--color-text-tertiary)] uppercase tracking-wider hidden sm:block">
          STUDIO STANDARD
        </div>
      </div>
    </div>
  );
}
