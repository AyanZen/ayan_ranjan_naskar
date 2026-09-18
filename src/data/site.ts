/** Edit this file to update your portfolio copy, links, and profile images. */

export const site = {
  name: "Ayan",
  logo: "ayan.",
  connectHref: "#contact",
  email: "hello@example.com",
  location: "Based in India",
  availability: "Open to opportunities",
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
