/** Edit this file to update your portfolio copy, links, and profile images. */

export const site = {
  name: "Ayan",
  logo: "ayanZen.",
  connectHref: "#contact",
  email: "hello@example.com",
  location: "Based in India",
  availability: "Open to opportunities",
  heroHeadline: {
    part1: "building a",
    part2: "smarter",
    part3: "tomorrow.",
  },
} as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

export const footer = {
  tagline: "Build · Learn · Create · Repeat",
  note: "Keep learning. Keep building.",
};

export const social = {
  github: "https://github.com/AyanZen",
  linkedin: "https://www.linkedin.com/in/ayan-ranjan-naskar",
  email: "mailto:hello@example.com",
} as const;

/** Hero profile (transparent PNG) */
export const heroPortrait = "/profile/ayan.png";
