export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#fafaf9] select-none">
      {/* Monogram Pulse */}
      <div className="relative mb-4">
        <div className="w-16 h-16 rounded-[18px] bg-[#0e121b] border border-black/10 flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] animate-pulse">
          <span className="font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight text-white flex items-baseline">
            G<span className="w-2 h-2 rounded-full bg-[#2563eb] ml-0.5" />
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs font-[family-name:var(--font-mono)] tracking-wider uppercase text-[var(--color-text-secondary)]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] animate-ping" />
        <span>Loading Experience...</span>
      </div>
    </div>
  );
}
