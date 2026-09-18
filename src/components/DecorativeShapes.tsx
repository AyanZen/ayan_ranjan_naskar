"use client";

type Variant = "hero" | "about" | "skills" | "projects" | "contact";

export default function DecorativeShapes({ variant }: { variant: Variant }) {
  if (variant === "hero" || variant === "about") {
    return (
      <div
        className="shape shape--orb pointer-events-none absolute inset-y-0 -right-8 w-[min(44vw,520px)] opacity-60 md:opacity-75 lg:right-0 lg:w-[min(48vw,580px)]"
        aria-hidden
      >
        <svg
          viewBox="0 0 640 720"
          className="h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wave-a" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e5e7eb" />
            </linearGradient>
            <radialGradient id="orb-a" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#f3f4f6" />
              <stop offset="100%" stopColor="#d1d5db" />
            </radialGradient>
          </defs>
          <path
            d="M120 80 C280 40, 420 120, 520 260 C620 400, 560 560, 380 640 C200 720, 40 620, 80 420 C100 320, 60 120, 120 80 Z"
            fill="url(#wave-a)"
          />
          <ellipse cx="400" cy="300" rx="120" ry="118" fill="url(#orb-a)" />
          <ellipse
            cx="370"
            cy="270"
            rx="36"
            ry="28"
            fill="white"
            opacity="0.55"
          />
        </svg>
        {variant === "about" && (
          <p className="absolute right-[18%] top-[42%] max-w-[120px] text-[10px] font-medium uppercase tracking-[0.35em] text-neutral-400">
            People / Ideas / Technology
          </p>
        )}
      </div>
    );
  }

  if (variant === "skills") {
    return (
      <div
        className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 lg:block xl:right-12"
        aria-hidden
      >
        <p className="mb-8 max-w-[90px] text-[10px] font-medium uppercase leading-relaxed tracking-[0.32em] text-neutral-400">
          Build
          <br />
          Learn
          <br />
          Improve
        </p>
        <div className="relative ml-8 h-48 w-40">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="shape shape-float absolute rounded-full bg-gradient-to-br from-white via-neutral-50 to-neutral-200 shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
              style={{
                width: 88 - i * 8,
                height: 88 - i * 8,
                right: i * 28,
                top: i * 36,
                opacity: 1 - i * 0.12,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === "projects") {
    return (
      <div
        className="shape shape--orb pointer-events-none absolute right-0 top-8 hidden h-72 w-72 opacity-80 md:block"
        aria-hidden
      >
        <svg viewBox="0 0 300 300" className="h-full w-full">
          <defs>
            <linearGradient id="ribbon" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fff" />
              <stop offset="100%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
          <path
            d="M40 220 Q120 40 200 100 T280 60"
            stroke="url(#ribbon)"
            strokeWidth="48"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="210" cy="95" r="52" fill="#f9fafb" stroke="#e5e7eb" />
        </svg>
      </div>
    );
  }

  return (
    <div
      className="shape shape--orb pointer-events-none absolute -bottom-16 right-0 h-[min(55vw,420px)] w-[min(55vw,420px)] opacity-80 md:-bottom-24 md:right-[-4%]"
      aria-hidden
    >
      <svg viewBox="0 0 480 480" className="h-full w-full" fill="none">
        <defs>
          <linearGradient id="contact-wave" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e8eaee" />
          </linearGradient>
          <radialGradient id="contact-orb" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="55%" stopColor="#f3f4f6" />
            <stop offset="100%" stopColor="#d1d5db" />
          </radialGradient>
        </defs>
        <path
          d="M80 360 C180 220, 280 280, 400 180 C460 130, 440 80, 360 100"
          stroke="url(#contact-wave)"
          strokeWidth="52"
          strokeLinecap="round"
          fill="none"
        />
        <ellipse cx="320" cy="240" rx="108" ry="106" fill="url(#contact-orb)" />
        <ellipse cx="278" cy="208" rx="32" ry="26" fill="#fff" opacity="0.65" />
      </svg>
    </div>
  );
}
