import SectionShell from "@/components/SectionShell";
import ButtonLink from "@/components/ui/ButtonLink";

export default function AboutSection() {
  return (
    <SectionShell id="about" shape="about" innerClassName="flex min-h-[calc(100svh-6rem)] flex-col justify-center">
      <div className="grid max-w-xl gap-12 lg:max-w-none lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <p
            className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500"
            data-reveal
          >
            02 / About me
          </p>
          <h2
            className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl"
            data-reveal
          >
            Curious mind. Practical builder.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-neutral-600" data-reveal>
            I&apos;m Ayan, a software engineer and problem solver interested in
            building real world products, working with modern technologies and
            exploring AI. I enjoy turning ideas into useful, scalable solutions.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-neutral-200 pt-8" data-reveal>
            <div>
              <p className="text-2xl font-semibold text-neutral-900">2+</p>
              <p className="mt-1 text-xs text-neutral-500">Years learning</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-neutral-900">10+</p>
              <p className="mt-1 text-xs text-neutral-500">Projects built</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-neutral-900">∞</p>
              <p className="mt-1 text-xs text-neutral-500">Still learning</p>
            </div>
          </div>

          <div className="mt-10" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-800">
              What drives me
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              I believe technology can create real impact when it solves actual
              problems. I&apos;m always learning, experimenting and building —
              one project at a time.
            </p>
          </div>

          <div className="mt-8" data-reveal>
            <ButtonLink href="#contact" variant="primary">
              Get in touch
            </ButtonLink>
          </div>
        </div>
      </div>

      <footer className="mt-14 grid grid-cols-1 gap-3 border-t border-neutral-200/90 pt-6 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-400 md:grid-cols-3 md:gap-4">
        <p>Based in / India, West Bengal</p>
        <p className="md:text-center">Currently focused on / Full stack, AI/ML</p>
        <p className="md:text-right">Open to / Opportunities</p>
      </footer>
    </SectionShell>
  );
}
