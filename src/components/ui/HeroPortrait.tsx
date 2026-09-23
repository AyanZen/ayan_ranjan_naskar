"use client";

type HeroPortraitProps = {
  src: string;
  alt?: string;
};

/**
 * Full-body cutout in front of a yellow disc.
 * Head sits above the circle; sneakers sit below it. Nothing is clipped.
 */
export default function HeroPortrait({ src, alt = "" }: HeroPortraitProps) {
  return (
    <div className="hero-portrait relative mx-auto aspect-[3/4] w-[min(78vw,420px)] max-w-full overflow-visible">
      <div
        className="pointer-events-none absolute left-1/2 top-[48%] z-0 aspect-square w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFE14A]"
        aria-hidden
      />

      {/* Native img keeps PNG alpha — no Next optimizer, no clip, no backdrop */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={800}
        height={1200}
        decoding="async"
        fetchPriority="high"
        className="relative z-10 h-full w-full bg-transparent object-contain object-center select-none"
      />
    </div>
  );
}
