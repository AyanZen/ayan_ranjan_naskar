import DecorativeShapes from "@/components/DecorativeShapes";
import type { ReactNode } from "react";

type ShapeVariant = "hero" | "about" | "skills" | "projects" | "contact";

export default function SectionShell({
  id,
  children,
  className = "",
  innerClassName = "",
  shape,
  minH = "min-h-screen",
}: {
  id: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  shape?: ShapeVariant;
  minH?: string;
}) {
  return (
    <section
      id={id}
      className={`section relative ${minH} overflow-hidden px-5 py-24 md:px-10 md:py-28 lg:px-14 lg:py-32 ${className}`}
    >
      {shape ? (
        <div className="pointer-events-none absolute inset-0 z-0">
          <DecorativeShapes variant={shape} />
        </div>
      ) : null}
      <div
        className={`relative z-10 mx-auto w-full max-w-7xl ${innerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
