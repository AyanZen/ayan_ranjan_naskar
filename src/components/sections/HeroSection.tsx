"use client";

import { MinimalistHero } from "@/components/ui/minimalist-hero";
import { heroPortrait, navLinks, site, social } from "@/data/site";
import { Code2, Link2, Mail } from "lucide-react";

const heroNavLinks = navLinks.map(({ label, href }) => ({
  label: label.toUpperCase(),
  href,
}));

const heroSocialLinks = [
  { icon: Code2, href: social.github },
  { icon: Link2, href: social.linkedin },
  { icon: Mail, href: social.email },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-x-hidden">
      <MinimalistHero
        logoText={site.logo}
        navLinks={heroNavLinks}
        mainText="Software engineer focused on full stack development and artificial intelligence — turning ideas into useful, scalable products."
        readMoreLink="#about"
        overlayText={site.heroHeadline}
        socialLinks={heroSocialLinks}
        locationText={site.location}
        profileImageSrc={heroPortrait}
        profileImageAlt={`${site.name} — profile photo`}
      />
    </section>
  );
}
