"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const projectTypes = [
  { value: "business-website", label: "Business Website" },
  { value: "landing-page", label: "Landing Page" },
  { value: "web-application", label: "Web Application" },
  { value: "mobile-application", label: "Mobile Application" },
  { value: "business-automation", label: "Business Automation" },
  { value: "other", label: "Other" },
];

const socialLinks = [
  { label: "WhatsApp", href: siteConfig.whatsapp },
  { label: "Email", href: `mailto:${siteConfig.email}` },
  { label: "LinkedIn", href: siteConfig.linkedin },
  { label: "GitHub", href: siteConfig.github },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fallbackMailto, setFallbackMailto] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(
      `New Project Enquiry from ${formData.name || "Client"} - ${formData.projectType || "General"}`
    );
    const body = encodeURIComponent(
      `Hi Gokul,\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || "Not specified"}\nProject Type: ${formData.projectType || "General"}\n\nProject Details:\n${formData.message}\n`
    );
    return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setFallbackMailto(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSubmitted(true);
      } else {
        const mailto = getMailtoUrl();
        setFallbackMailto(mailto);
        setErrorMessage(
          data.error ||
            "Unable to deliver automatically. You can send directly using the email link below."
        );
      }
    } catch {
      const mailto = getMailtoUrl();
      setFallbackMailto(mailto);
      setErrorMessage(
        "Network connection issue. You can send directly using the email link below."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-7 md:py-10" id="contact">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Form */}
          <div>
            <SectionHeading
              label="Contact"
              title="Get in Touch"
              subtitle="Tell me about your project and I'll get back to you within 24 hours."
            />

            {isSubmitted ? (
              <div className="p-7 sm:p-9 rounded-[20px] bg-[var(--color-surface)] border border-emerald-500/30 shadow-[0_8px_30px_rgba(16,185,129,0.06)] text-center lg:text-left">
                <div className="w-12 h-12 rounded-[14px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center mb-4 mx-auto lg:mx-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-[22px] font-bold text-[var(--color-primary)] mb-2">
                  Enquiry Sent Successfully!
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[var(--color-text-secondary)] mb-4">
                  Thank you, <strong className="text-[var(--color-primary)] font-semibold">{formData.name}</strong>! Your enquiry has been delivered to <strong className="text-[var(--color-primary)] font-semibold">{siteConfig.email}</strong>. I will review your requirements and get back to you within 24 hours.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3 justify-center lg:justify-start">
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        projectType: "",
                        message: "",
                      });
                    }}
                  >
                    Send Another Enquiry
                  </Button>
                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-[8px] bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-[13.5px] font-semibold transition-colors duration-150"
                  >
                    Need faster response? WhatsApp ↗
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMessage && (
                  <div className="p-4 rounded-[12px] bg-amber-500/10 border border-amber-500/30 text-[13.5px] text-amber-800 dark:text-amber-200">
                    <p className="font-medium mb-1.5">{errorMessage}</p>
                    {fallbackMailto && (
                      <a
                        href={fallbackMailto}
                        className="inline-flex items-center gap-1 font-semibold text-[#2563eb] hover:underline"
                      >
                        <span>Send enquiry directly via email client ({siteConfig.email})</span>
                        <span>↗</span>
                      </a>
                    )}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <Input
                  label="Business / Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your business or company name"
                />
                <Select
                  label="Project Type"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  options={projectTypes}
                  placeholder="Select a project type"
                />
                <Textarea
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                />
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-4 w-4 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Sending Enquiry...</span>
                    </span>
                  ) : (
                    "Send Enquiry"
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Direct Channels & Live Availability — Modern Interactive Suite */}
          <div className="flex flex-col justify-between space-y-5">
            {/* Header & Live Status Card */}
            <div className="bg-[var(--color-surface)] border border-[var(--color-border-light)] rounded-[18px] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div className="flex items-center justify-between mb-2.5">
                <div className="inline-flex items-center gap-2">
                  <span className="relative flex h-[8px] w-[8px]">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-[8px] w-[8px] bg-emerald-500" />
                  </span>
                  <span className="font-[family-name:var(--font-mono)] text-[11px] font-semibold uppercase tracking-wider text-emerald-600">
                    DIRECT ACCESS · NO MIDDLEMEN
                  </span>
                </div>
                <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-[var(--color-text-tertiary)] hidden sm:inline">
                  AVG RESP &lt; 2H
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-[19px] sm:text-[21px] font-bold text-[var(--color-primary)] tracking-tight mb-1.5">
                Prefer a direct conversation?
              </h3>
              <p className="text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
                Skip the form and connect directly on your preferred channel. I work directly with founders, product teams, and businesses.
              </p>
            </div>

            {/* 4 Interactive Direct Channel Bento Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* WhatsApp Card */}
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-[16px] bg-[var(--color-surface)] border border-[var(--color-border-light)] hover:border-emerald-500/40 hover:shadow-[0_8px_24px_rgba(16,185,129,0.08)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-[38px] h-[38px] rounded-[10px] bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.11 1.516 5.84L.048 23.7a.5.5 0 00.612.612l5.86-1.468A11.948 11.948 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.94 0-3.79-.526-5.41-1.504l-.388-.232-4.02 1.005 1.005-4.02-.232-.388A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-600 font-[family-name:var(--font-mono)] bg-emerald-50 px-2 py-0.5 rounded-full">
                      Fastest
                    </span>
                  </div>
                  <div className="font-[family-name:var(--font-display)] text-[15px] font-bold text-[var(--color-primary)] mb-0.5">
                    WhatsApp
                  </div>
                  <p className="text-[12.5px] text-[var(--color-text-secondary)] leading-snug">
                    Quick messaging &amp; scope chat
                  </p>
                </div>
                <div className="mt-3.5 flex items-center gap-1 text-[12px] font-semibold text-emerald-600 group-hover:translate-x-0.5 transition-transform duration-200">
                  <span>Open WhatsApp</span>
                  <span>↗</span>
                </div>
              </a>

              {/* Direct Email Card */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="group relative p-4 rounded-[16px] bg-[var(--color-surface)] border border-[var(--color-border-light)] hover:border-blue-500/40 hover:shadow-[0_8px_24px_rgba(37,99,235,0.08)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-[38px] h-[38px] rounded-[10px] bg-blue-50 flex items-center justify-center text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors duration-200">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-semibold text-blue-600 font-[family-name:var(--font-mono)] bg-blue-50 px-2 py-0.5 rounded-full">
                      RFPs &amp; Briefs
                    </span>
                  </div>
                  <div className="font-[family-name:var(--font-display)] text-[15px] font-bold text-[var(--color-primary)] mb-0.5">
                    Email
                  </div>
                  <p className="text-[12.5px] text-[var(--color-text-secondary)] leading-snug truncate">
                    {siteConfig.email}
                  </p>
                </div>
                <div className="mt-3.5 flex items-center gap-1 text-[12px] font-semibold text-[#2563eb] group-hover:translate-x-0.5 transition-transform duration-200">
                  <span>Send email</span>
                  <span>↗</span>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-[16px] bg-[var(--color-surface)] border border-[var(--color-border-light)] hover:border-sky-500/40 hover:shadow-[0_8px_24px_rgba(14,165,233,0.08)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-[38px] h-[38px] rounded-[10px] bg-sky-50 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-200">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-medium text-gray-400 font-[family-name:var(--font-mono)]">
                      Network
                    </span>
                  </div>
                  <div className="font-[family-name:var(--font-display)] text-[15px] font-bold text-[var(--color-primary)] mb-0.5">
                    LinkedIn
                  </div>
                  <p className="text-[12.5px] text-[var(--color-text-secondary)] leading-snug">
                    Profile &amp; recommendations
                  </p>
                </div>
                <div className="mt-3.5 flex items-center gap-1 text-[12px] font-semibold text-sky-600 group-hover:translate-x-0.5 transition-transform duration-200">
                  <span>Connect</span>
                  <span>↗</span>
                </div>
              </a>

              {/* Direct Phone Call Card */}
              <a
                href={`tel:${siteConfig.phone}`}
                className="group relative p-4 rounded-[16px] bg-[var(--color-surface)] border border-[var(--color-border-light)] hover:border-violet-500/40 hover:shadow-[0_8px_24px_rgba(139,92,246,0.08)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-[38px] h-[38px] rounded-[10px] bg-violet-50 flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-200">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-semibold text-violet-600 font-[family-name:var(--font-mono)] bg-violet-50 px-2 py-0.5 rounded-full">
                      Direct
                    </span>
                  </div>
                  <div className="font-[family-name:var(--font-display)] text-[15px] font-bold text-[var(--color-primary)] mb-0.5">
                    Direct Call
                  </div>
                  <p className="text-[12.5px] text-[var(--color-text-secondary)] leading-snug">
                    {siteConfig.phoneDisplay}
                  </p>
                </div>
                <div className="mt-3.5 flex items-center gap-1 text-[12px] font-semibold text-violet-600 group-hover:translate-x-0.5 transition-transform duration-200">
                  <span>Call now</span>
                  <span>↗</span>
                </div>
              </a>
            </div>

            {/* Bottom Guarantee / Process Card */}
            <div className="p-4 sm:p-5 rounded-[16px] bg-[var(--color-surface-alt)] border border-[var(--color-border-light)]">
              <div className="font-[family-name:var(--font-mono)] text-[10.5px] font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)] mb-2.5">
                WHAT TO EXPECT
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[12.5px]">
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-white border border-[var(--color-border-light)] flex items-center justify-center font-bold text-[10px] text-[#2563eb] flex-shrink-0 mt-0.5 shadow-xs">
                    1
                  </span>
                  <span className="text-[var(--color-text-secondary)] leading-snug">
                    <strong className="text-[var(--color-primary)] block font-semibold">Discovery</strong>
                    Reply within 24h to understand goals.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-white border border-[var(--color-border-light)] flex items-center justify-center font-bold text-[10px] text-[#2563eb] flex-shrink-0 mt-0.5 shadow-xs">
                    2
                  </span>
                  <span className="text-[var(--color-text-secondary)] leading-snug">
                    <strong className="text-[var(--color-primary)] block font-semibold">Proposal</strong>
                    Clear scope, timeline &amp; fixed pricing.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-white border border-[var(--color-border-light)] flex items-center justify-center font-bold text-[10px] text-[#2563eb] flex-shrink-0 mt-0.5 shadow-xs">
                    3
                  </span>
                  <span className="text-[var(--color-text-secondary)] leading-snug">
                    <strong className="text-[var(--color-primary)] block font-semibold">Delivery</strong>
                    Iterative sprints &amp; launch support.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
