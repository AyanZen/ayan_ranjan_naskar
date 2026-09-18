"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Loader({ onComplete }: { onComplete?: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const completedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const loaderEl = loaderRef.current;
    const countEl = countRef.current;
    if (!loaderEl || !countEl) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const finish = () => {
      if (completedRef.current) return;
      completedRef.current = true;
      onCompleteRef.current?.();
    };

    if (prefersReducedMotion) {
      loaderEl.style.display = "none";
      finish();
      return;
    }

    const counter = { value: 1 };
    const tl = gsap.timeline({
      onComplete: () => {
        loaderEl.style.display = "none";
        finish();
      },
    });

    tl.to(counter, {
      value: 100,
      duration: 1.6,
      ease: "power2.inOut",
      onUpdate: () => {
        countEl.textContent = String(Math.max(1, Math.round(counter.value)));
      },
    }).to(loaderEl, {
      yPercent: -100,
      duration: 0.65,
      ease: "power3.inOut",
    });

    const safety = window.setTimeout(() => {
      tl.kill();
      loaderEl.style.display = "none";
      finish();
    }, 4000);

    return () => {
      window.clearTimeout(safety);
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={loaderRef}
      id="loader"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      aria-live="polite"
      aria-busy="true"
    >
      <p className="flex items-baseline gap-1 font-mono text-6xl font-semibold tracking-tighter text-neutral-900 md:text-7xl">
        <span id="loaderCount" ref={countRef}>
          1
        </span>
        <span className="text-2xl text-neutral-400">%</span>
      </p>
    </div>
  );
}
