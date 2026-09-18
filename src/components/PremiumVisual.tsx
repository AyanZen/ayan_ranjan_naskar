"use client";

type PremiumVisualProps = {
  className?: string;
  variant?: "hero" | "section";
};

export default function PremiumVisual({
  className = "",
  variant = "hero",
}: PremiumVisualProps) {
  const size =
    variant === "hero"
      ? "w-[min(92vw,520px)] lg:w-[min(44vw,560px)]"
      : "w-[min(80vw,420px)] opacity-80";

  return (
    <div
      className={`premium-visual pointer-events-none select-none ${size} ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 560 520"
        className="h-auto w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="pv-wave" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e8eaee" />
          </linearGradient>
          <radialGradient id="pv-orb" cx="45%" cy="38%" r="55%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="65%" stopColor="#f0f2f5" />
            <stop offset="100%" stopColor="#d8dde4" />
          </radialGradient>
          <filter id="pv-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M40 380 C120 260, 220 300, 320 220 C420 140, 480 180, 520 120 L560 520 L0 520 Z"
          fill="url(#pv-wave)"
        />
        <path
          d="M80 400 C180 320, 260 340, 360 280 C440 230, 500 250, 540 200"
          stroke="#eef0f3"
          strokeWidth="48"
          strokeLinecap="round"
        />
        <g filter="url(#pv-soft)">
          <circle cx="380" cy="200" r="88" fill="url(#pv-orb)" />
          <ellipse cx="352" cy="172" rx="28" ry="22" fill="white" opacity="0.65" />
        </g>
      </svg>
    </div>
  );
}
