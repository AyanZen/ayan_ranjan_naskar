"use client";

import SectionShell from "@/components/SectionShell";
import Bezel from "@/components/ui/Bezel";
import ButtonSubmit from "@/components/ui/ButtonSubmit";
import { FormEvent, useRef, useState, type ReactNode } from "react";

function ManifestoLine({ children }: { children: ReactNode }) {
  return (
    <p className="flex max-w-xs items-start gap-3 text-[10px] font-medium uppercase leading-relaxed tracking-[0.26em] text-neutral-400">
      <span className="mt-0.5 h-10 w-px shrink-0 bg-neutral-300" aria-hidden />
      <span>{children}</span>
    </p>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block text-sm">
      <span className="text-neutral-600">{label}</span>
      <div className="field-bezel">{children}</div>
    </label>
  );
}

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    window.setTimeout(() => {
      setSent(false);
      formRef.current?.reset();
    }, 3000);
  }

  return (
    <SectionShell
      id="contact"
      shape="contact"
      minH="min-h-0"
      className="!pb-28 !pt-20 lg:!pb-32"
      innerClassName="max-w-6xl"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
        <div className="flex flex-col justify-center lg:max-w-lg lg:py-4">
          <p className="eyebrow w-fit" data-reveal>
            05 / Contact
          </p>
          <h2
            className="mt-6 text-[clamp(1.875rem,4vw,3rem)] font-semibold leading-[1.12] tracking-tight text-neutral-900"
            data-reveal
          >
            Let&apos;s create something great together.
          </h2>
          <p
            className="mt-5 max-w-md text-base leading-relaxed text-neutral-600"
            data-reveal
          >
            Have a project in mind, a question, or just want to say hi? I&apos;d
            love to hear from you.
          </p>

          <div className="mt-14 space-y-5" data-reveal>
            <ManifestoLine>Ideas turn into reality through conversation.</ManifestoLine>
            <ManifestoLine>Good ideas start with a conversation.</ManifestoLine>
          </div>
        </div>

        <Bezel
          className="contact-card motion-premium"
          innerClassName="relative p-7 md:p-9 lg:p-10"
          data-reveal
        >
          <h3 className="text-xl font-semibold tracking-tight text-neutral-900 md:text-[1.35rem]">
            Send a message
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-500">
            Fill out the form and I&apos;ll get back to you soon.
          </p>

          <form
            ref={formRef}
            id="contactForm"
            className="mt-8 space-y-5"
            onSubmit={onSubmit}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name">
                <input
                  required
                  name="name"
                  autoComplete="name"
                  placeholder="John Doe"
                />
              </Field>
              <Field label="Your email">
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </Field>
            </div>
            <Field label="Subject">
              <input required name="subject" placeholder="Project inquiry" />
            </Field>
            <Field label="Message">
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell me about your project, idea or question..."
                className="min-h-[140px] resize-y"
              />
            </Field>

            <div className="flex flex-col gap-6 pt-2 sm:flex-row sm:items-end sm:justify-between">
              <ButtonSubmit disabled={sent} className="shrink-0">
                {sent ? "Message sent — thank you!" : "Send message"}
              </ButtonSubmit>
              <p className="text-[10px] leading-relaxed text-neutral-400 sm:max-w-[140px] sm:pb-2 sm:text-right">
                Same curiosity. Bigger ideas.
              </p>
            </div>
          </form>
        </Bezel>
      </div>
    </SectionShell>
  );
}
