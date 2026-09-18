"use client";

import ConnectButton from "@/components/ui/ConnectButton";
import { navLinks, site } from "@/data/site";
import { useState } from "react";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-5 w-5" aria-hidden>
      <span
        className={`absolute left-1/2 top-[5px] h-[1.5px] w-[18px] -translate-x-1/2 bg-neutral-900 motion-premium ${open ? "top-[9px] rotate-45" : ""}`}
      />
      <span
        className={`absolute left-1/2 top-[9px] h-[1.5px] w-[18px] -translate-x-1/2 bg-neutral-900 motion-premium ${open ? "opacity-0 scale-x-0" : ""}`}
      />
      <span
        className={`absolute left-1/2 top-[13px] h-[1.5px] w-[18px] -translate-x-1/2 bg-neutral-900 motion-premium ${open ? "top-[9px] -rotate-45" : ""}`}
      />
    </span>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4 md:pt-5">
        <header
          className={`header header-shell pointer-events-auto flex w-full max-w-5xl items-center justify-between gap-3 rounded-full px-3 py-2 ring-1 ring-black/[0.05] backdrop-blur-xl md:gap-4 md:px-5 md:py-2.5 ${
            open ? "bg-white/95" : "bg-white/70"
          }`}
        >
          <a
            href="#home"
            className="shrink-0 px-2 text-lg font-bold lowercase tracking-tight text-neutral-900"
          >
            {site.logo}
          </a>

          <nav
            className={`nav hidden md:flex md:flex-1 md:items-center md:justify-center md:gap-6 lg:gap-7`}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav__link relative text-[13px] font-medium text-neutral-500 motion-premium hover:text-neutral-900"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <ConnectButton href={site.connectHref} className="hidden sm:inline-flex" />
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.04] motion-premium hover:bg-black/[0.06] active:scale-[0.96] md:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </header>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-30 bg-white/80 backdrop-blur-2xl md:hidden"
          aria-hidden
          onClick={() => setOpen(false)}
        />
      ) : null}

      <nav
        className={`fixed inset-x-4 top-[4.5rem] z-40 flex flex-col gap-1 rounded-[1.75rem] bg-white/95 p-4 ring-1 ring-black/[0.06] motion-premium md:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        style={{ boxShadow: "var(--shadow-ambient)" }}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            className="nav__link rounded-xl px-4 py-3 text-base font-medium text-neutral-700 motion-premium hover:bg-black/[0.03] hover:text-neutral-900"
            style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <ConnectButton href={site.connectHref} className="mt-2 w-full justify-center sm:hidden" />
      </nav>
    </>
  );
}
