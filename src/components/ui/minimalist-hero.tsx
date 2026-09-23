"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import HeroPortrait from "@/components/ui/HeroPortrait";
import { cn } from "@/lib/utils";

interface MinimalistHeroProps {
  logoText: string;
  navLinks: { label: string; href: string }[];
  mainText: string;
  readMoreLink: string;
  overlayText: {
    part1: string;
    part2: string;
    part3?: string;
  };
  socialLinks: { icon: LucideIcon; href: string }[];
  locationText: string;
  profileImageSrc: string;
  profileImageAlt?: string;
  className?: string;
}

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="text-sm font-medium tracking-widest text-foreground/60 transition-colors hover:text-foreground"
  >
    {children}
  </a>
);

const SocialIcon = ({
  href,
  icon: Icon,
}: {
  href: string;
  icon: LucideIcon;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-foreground/60 transition-colors hover:text-foreground"
  >
    <Icon className="h-5 w-5" />
  </a>
);

export const MinimalistHero = ({
  logoText,
  navLinks,
  mainText,
  readMoreLink,
  overlayText,
  socialLinks,
  locationText,
  profileImageSrc,
  profileImageAlt = "",
  className,
}: MinimalistHeroProps) => {
  return (
    <div
      className={cn(
        "relative flex w-full max-w-[100vw] flex-col items-center overflow-x-clip overflow-y-visible bg-background px-5 pb-8 pt-5 font-sans sm:px-8 sm:pb-10 sm:pt-6 md:px-10 md:pb-12 md:pt-8 lg:min-h-screen lg:justify-between lg:px-12 lg:pr-20 lg:pt-12",
        className,
      )}
    >
      <header className="z-30 flex w-full max-w-7xl shrink-0 items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold tracking-wider"
        >
          {logoText}
        </motion.div>
        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-1.5 md:hidden"
          aria-label="Open menu"
          type="button"
        >
          <span className="block h-0.5 w-6 bg-foreground" />
          <span className="block h-0.5 w-6 bg-foreground" />
          <span className="block h-0.5 w-5 bg-foreground" />
        </motion.button>
      </header>

      <div
        className="relative flex w-full min-w-0 max-w-7xl flex-col items-stretch gap-6 py-6 sm:gap-8 sm:py-8 lg:grid lg:flex-grow lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.15fr)] lg:items-center lg:gap-4 lg:py-0 xl:gap-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="z-20 order-3 min-w-0 px-1 text-center lg:order-1 lg:px-0 lg:text-left"
        >
          <p className="mx-auto max-w-md text-sm leading-relaxed text-foreground/80 sm:text-[0.9375rem] lg:mx-0 lg:max-w-xs">
            {mainText}
          </p>
          <a
            href={readMoreLink}
            className="mt-4 inline-block text-sm font-medium text-foreground underline decoration-from-font"
          >
            Read More
          </a>
        </motion.div>

        <div className="relative order-2 flex min-h-0 min-w-0 items-center justify-center overflow-visible py-2 lg:order-2 lg:min-h-[420px] lg:py-0">
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="w-full max-w-[min(78vw,420px)] overflow-visible"
          >
            <HeroPortrait src={profileImageSrc} alt={profileImageAlt} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="z-20 order-1 flex min-w-0 max-w-full items-center justify-center px-1 text-center lg:order-3 lg:justify-start lg:px-0 lg:text-left"
        >
          <h1
            className="max-w-full text-[clamp(1.75rem,8.5vw,2.5rem)] font-extrabold leading-[0.95] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[clamp(4.5rem,7.5vw,8rem)]"
          >
            {overlayText.part1}
            <br />
            {overlayText.part2}
            {overlayText.part3 ? (
              <>
                <br />
                {overlayText.part3}
              </>
            ) : null}
          </h1>
        </motion.div>
      </div>

      <footer className="z-30 mt-2 flex w-full max-w-7xl shrink-0 flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center sm:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex items-center gap-4"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-xs font-medium text-foreground/80 sm:text-sm"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  );
};
