"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 safe-top bg-[#fafaf9]/95 backdrop-blur-md border-b border-[var(--color-border-light)]">
      <nav className="container flex items-center justify-between h-[60px] md:h-[72px]">
        {/* Logo */}
        <a
          href="/"
          className="font-[family-name:var(--font-display)] text-[20px] md:text-[24px] font-extrabold tracking-tight text-[var(--color-primary)]"
        >
          Gokul.
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-[family-name:var(--font-primary)] text-[14px] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="/#contact"
          className="hidden md:inline-flex items-center gap-2 justify-center h-[42px] px-5 rounded-full bg-[var(--color-primary)] !text-white text-white text-[14px] font-medium font-[family-name:var(--font-primary)] hover:bg-black transition-all duration-200 shadow-sm"
        >
          <span className="!text-white text-white">Let&apos;s Talk</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="!text-white text-white">
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </a>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center w-[40px] h-[40px] -mr-1 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <div className="flex flex-col justify-center items-center w-[20px] h-[16px] relative">
            <span
              className={cn(
                "block w-[18px] h-[2px] bg-[var(--color-primary)] rounded-full transition-all duration-200 origin-center absolute",
                isOpen ? "rotate-45" : "-translate-y-[5px]"
              )}
            />
            <span
              className={cn(
                "block w-[18px] h-[2px] bg-[var(--color-primary)] rounded-full transition-all duration-200 absolute",
                isOpen && "opacity-0 scale-x-0"
              )}
            />
            <span
              className={cn(
                "block w-[18px] h-[2px] bg-[var(--color-primary)] rounded-full transition-all duration-200 origin-center absolute",
                isOpen ? "-rotate-45" : "translate-y-[5px]"
              )}
            />
          </div>
        </button>
      </nav>

      {/* Small Compact Dropdown Toggle (moves naturally with scroll) */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#fafaf9] border-b border-[var(--color-border-light)] shadow-[0_12px_28px_rgba(0,0,0,0.08)] px-5 py-4 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col divide-y divide-[var(--color-border-light)] mb-4">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-[16px] font-semibold text-[var(--color-primary)] hover:text-[#2563eb] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </a>
            ))}
          </div>

          <a
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 h-[44px] w-full rounded-full bg-[var(--color-primary)] !text-white text-white text-[14.5px] font-semibold hover:bg-black transition-all shadow-sm"
          >
            <span className="!text-white text-white">Let&apos;s Talk</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="!text-white text-white">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      )}
    </header>
  );
}
