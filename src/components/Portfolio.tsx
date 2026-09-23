"use client";

import Loader from "@/components/Loader";
import SectionRail from "@/components/SectionRail";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useCallback, useRef, useState } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const railMap: Record<string, string> = {
  home: "01",
  about: "02",
  skills: "03",
  projects: "04",
  contact: "05",
};

export default function Portfolio() {
  const rootRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const [appReady, setAppReady] = useState(false);

  const handleLoaderComplete = useCallback(() => {
    setAppReady(true);
    document.documentElement.classList.add("is-ready");
    pageRef.current?.classList.add("is-ready");
    gsap.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" },
    );
  }, []);

  useGSAP(
    () => {
      if (!appReady) return;

      const root = rootRef.current;
      if (!root) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      let lenisRaf: ((time: number) => void) | null = null;

      if (!prefersReducedMotion && !lenisRef.current) {
        const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
        lenisRef.current = lenis;
        lenis.on("scroll", ScrollTrigger.update);
        ScrollTrigger.scrollerProxy(document.documentElement, {
          scrollTop(value?: number) {
            if (value !== undefined) lenis.scrollTo(value, { immediate: true });
            return lenis.scroll;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
        });
        lenisRaf = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(lenisRaf);
        gsap.ticker.lagSmoothing(0);
      }

      if (!prefersReducedMotion) {
        gsap.utils.toArray<HTMLElement>(".shape-float").forEach((el, i) => {
          gsap.to(el, {
            y: "+=14",
            duration: 2.8 + i * 0.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });

        gsap.utils.toArray<HTMLElement>(".shape--orb").forEach((el) => {
          gsap.to(el, {
            y: -30,
            ease: "none",
            scrollTrigger: {
              trigger: el.closest(".section") ?? el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        });
      }

      gsap.utils
        .toArray<HTMLElement>(".section:not(#home) [data-reveal]")
        .forEach((el) => {
          gsap.fromTo(
            el,
            { y: 24, opacity: 0, filter: "blur(6px)" },
            {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.95,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 90%", once: true },
            },
          );
        });

      gsap.utils.toArray<HTMLElement>(".skill-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 16, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: (i % 6) * 0.04,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 94%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 48, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            delay: i * 0.06,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 92%", once: true },
          },
        );
      });

      const railItems = document.querySelectorAll(".section-rail__item");

      function setRail(sectionId: string) {
        const num = railMap[sectionId];
        if (!num) return;
        railItems.forEach((item) => {
          item.classList.toggle(
            "is-active",
            item.getAttribute("data-section") === num,
          );
        });
      }

      [...Object.keys(railMap)].forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;
        ScrollTrigger.create({
          trigger: section,
          start: "top 52%",
          end: "bottom 48%",
          onEnter: () => setRail(id),
          onEnterBack: () => setRail(id),
        });
      });

      setRail("home");
      ScrollTrigger.refresh();

      const onAnchorClick = (e: Event) => {
        const anchor = e.currentTarget as HTMLAnchorElement;
        const href = anchor.getAttribute("href");
        if (!href?.startsWith("#") || href === "#") return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const lenis = lenisRef.current;
        if (lenis) {
          lenis.scrollTo(target as HTMLElement, { offset: -88, duration: 1.15 });
        } else {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

      root.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener("click", onAnchorClick);
      });

      return () => {
        root.querySelectorAll('a[href^="#"]').forEach((a) => {
          a.removeEventListener("click", onAnchorClick);
        });
        if (lenisRaf) gsap.ticker.remove(lenisRaf);
        lenisRef.current?.destroy();
        lenisRef.current = null;
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: rootRef, dependencies: [appReady] },
  );

  return (
    <div ref={rootRef} className="page-shell relative min-h-screen">
      <div className="film-grain" aria-hidden />
      {!appReady && <Loader onComplete={handleLoaderComplete} />}
      <div
        id="page"
        ref={pageRef}
        className="relative min-h-screen"
        style={{ opacity: appReady ? 1 : 0 }}
      >
        <SectionRail />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
