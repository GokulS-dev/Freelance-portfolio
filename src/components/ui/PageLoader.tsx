"use client";

import { useEffect, useState } from "react";

const LOADING_STEPS = [
  { threshold: 0, text: "Initializing creative environment..." },
  { threshold: 30, text: "Compiling modern web & mobile architecture..." },
  { threshold: 65, text: "Optimizing high-converting UI performance..." },
  { threshold: 90, text: "Finalizing digital experience..." },
  { threshold: 100, text: "Welcome." },
];

export function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState(LOADING_STEPS[0].text);
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Disable body scroll while loading
    document.body.style.overflow = "hidden";

    let currentProgress = 0;
    const interval = setInterval(() => {
      // Accelerate towards 95%
      const step = currentProgress < 70 ? Math.floor(Math.random() * 8) + 4 : Math.floor(Math.random() * 4) + 2;
      currentProgress = Math.min(currentProgress + step, 96);
      setProgress(currentProgress);

      const stepObj = [...LOADING_STEPS].reverse().find((s) => currentProgress >= s.threshold);
      if (stepObj) {
        setStatusText(stepObj.text);
      }
    }, 45);

    const handleComplete = () => {
      clearInterval(interval);
      setProgress(100);
      setStatusText(LOADING_STEPS[LOADING_STEPS.length - 1].text);

      setTimeout(() => {
        setIsExiting(true);
        document.body.style.overflow = "";

        setTimeout(() => {
          setIsDone(true);
        }, 850);
      }, 300);
    };

    if (document.readyState === "complete") {
      setTimeout(handleComplete, 650);
    } else {
      window.addEventListener("load", handleComplete);
      // Fallback maximum safety timer so it never hangs
      const maxTimer = setTimeout(handleComplete, 1600);
      return () => {
        window.removeEventListener("load", handleComplete);
        clearTimeout(maxTimer);
        clearInterval(interval);
        document.body.style.overflow = "";
      };
    }

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-between bg-[#080a0f] text-white select-none transition-all duration-[850ms] ${
        isExiting
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100"
      }`}
      style={{
        transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
      }}
      aria-hidden={isExiting}
    >
      {/* Top High-Tech Laser Progress Line */}
      <div className="w-full h-[3px] bg-white/5 relative overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#2563eb] via-[#60a5fa] to-white transition-all duration-150 ease-out relative"
          style={{ width: `${progress}%` }}
        >
          {/* Laser Glow Head */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full blur-[4px] opacity-80" />
        </div>
      </div>

      {/* Top Header Label */}
      <div className="w-full container max-w-5xl pt-8 px-6 flex items-center justify-between text-xs tracking-widest uppercase font-[family-name:var(--font-mono)] text-white/40">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-ping" />
          <span>GOKUL · PORTFOLIO 2026</span>
        </div>
        <div className="hidden sm:block text-right">
          <span>FREELANCE DEV &amp; ARCHITECT</span>
        </div>
      </div>

      {/* Center Cinematic Card & Counter */}
      <div className="flex flex-col items-center justify-center text-center px-4 relative my-auto">
        {/* Ambient Radial Backdrop Glow */}
        <div className="absolute -inset-20 bg-radial from-[#2563eb]/25 to-transparent blur-[80px] pointer-events-none" />

        {/* Monogram Badge */}
        <div className="relative mb-6">
          {/* Outer glowing pulsing ring */}
          <div className="absolute -inset-1.5 rounded-[22px] bg-gradient-to-br from-[#2563eb]/60 to-purple-600/30 blur-sm animate-pulse" />
          
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-[20px] bg-[#0e121b] border border-white/20 flex items-center justify-center shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
            <span className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-extrabold tracking-tight text-white flex items-baseline">
              G<span className="w-2.5 h-2.5 rounded-full bg-[#2563eb] ml-0.5" />
            </span>
          </div>
        </div>

        {/* Large Typography Numerical Counter */}
        <div className="font-[family-name:var(--font-mono)] text-5xl sm:text-6xl font-bold tracking-tight text-white mb-3">
          {String(progress).padStart(2, "0")}
          <span className="text-xl sm:text-2xl text-blue-500 font-medium ml-1">%</span>
        </div>

        {/* Dynamic Status Ticker */}
        <div className="h-6 flex items-center justify-center">
          <p className="font-[family-name:var(--font-primary)] text-sm sm:text-[15px] font-medium text-white/70 tracking-wide transition-all duration-200">
            {statusText}
          </p>
        </div>

        {/* Mini Segmented Progress Bar */}
        <div className="w-48 sm:w-60 h-1.5 bg-white/10 rounded-full mt-6 overflow-hidden p-0.5">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-sky-400 rounded-full transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Bottom Footer Credits & Indicator */}
      <div className="w-full container max-w-5xl pb-8 px-6 flex items-center justify-between text-[11px] sm:text-xs tracking-wider uppercase font-[family-name:var(--font-mono)] text-white/40">
        <div>
          <span>HIGH PERFORMANCE EXPERIENCE</span>
        </div>
        <div className="flex items-center gap-1.5 text-white/60">
          <span>INITIALIZING</span>
          <span className="animate-pulse">···</span>
        </div>
      </div>
    </div>
  );
}
