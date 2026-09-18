import SectionShell from "@/components/SectionShell";
import ButtonLink from "@/components/ui/ButtonLink";

export default function HeroSection() {
  return (
    <SectionShell
      id="home"
      shape="hero"
      minH="min-h-svh"
      className="flex flex-col !pb-8 !pt-28 md:!pt-32"
      innerClassName="flex min-h-[calc(100svh-8rem)] flex-col"
    >
      <div className="relative z-20 flex flex-1 flex-col justify-center pb-10 md:pb-16">
        <div className="max-w-xl space-y-6 md:max-w-2xl md:space-y-8">
          <p className="eyebrow" data-reveal>
            Hello, I&apos;m Ayan
          </p>
          <h1
            className="hero-headline text-4xl font-semibold leading-[1.08] tracking-tight text-neutral-900 md:text-6xl lg:text-[4.25rem]"
            data-reveal
          >
            Building a smarter{" "}
            <span className="text-neutral-400">tomorrow.</span>
          </h1>
          <p
            className="max-w-lg text-base leading-relaxed text-neutral-600 md:text-lg"
            data-reveal
          >
            Software Engineer focused on full stack development and artificial
            intelligence.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2" data-reveal>
            <ButtonLink href="#contact" variant="primary">
              Get in touch
            </ButtonLink>
            <a
              href="#projects"
              className="text-sm font-medium uppercase tracking-widest text-neutral-500 transition hover:text-neutral-900"
            >
              — View my work
            </a>
          </div>
        </div>
      </div>

      <div
        className="relative z-10 mt-auto grid grid-cols-1 items-end gap-4 border-t border-neutral-200/90 pt-6 text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-400 sm:grid-cols-3 sm:gap-6"
        aria-hidden
      >
        <div className="hidden flex-col gap-1 sm:flex">
          <span>Ideas</span>
          <span>Code</span>
          <span>Impact</span>
        </div>
        <div className="flex flex-col items-center gap-2 sm:order-none">
          <span>Scroll</span>
          <span className="h-6 w-px bg-neutral-300" />
        </div>
        <p className="max-w-[160px] text-left sm:ml-auto sm:text-right">
          Available for new opportunities
        </p>
      </div>
    </SectionShell>
  );
}
