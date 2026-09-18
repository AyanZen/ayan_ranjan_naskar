/**
 * Edit this file to add, remove, or update portfolio projects.
 * Numbers are assigned automatically from list order (01, 02, …).
 *
 * Optional `image`: put files in /public/projects/ and set e.g. image: "/projects/authflow.png"
 * If omitted, a built-in preview mock is used (`preview` key).
 */

export type ProjectCategory =
  | "web"
  | "ai"
  | "tools"
  | "experiments"
  | "other";

export type ProjectPreviewType =
  | "auth"
  | "dashboard"
  | "vision"
  | "weather"
  | "commerce"
  | "ai-art";

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  preview: ProjectPreviewType;
  /** "dark" inverts the card (e.g. AI Experiments) */
  theme?: "light" | "dark";
  /** Path under /public — overrides CSS preview when set */
  image?: string;
  links?: {
    live?: string;
    github?: string;
  };
};

export const projectsSection = {
  label: "04 / Projects",
  title: "Projects that create impact.",
  description:
    "A collection of real-world projects, experiments and ideas built with purpose.",
  footerNote: "More projects coming soon.",
  tagline: "Same curiosity. Bigger ideas.",
} as const;

export const projects: Project[] = [
  {
    id: "authflow",
    title: "AuthFlow",
    description:
      "Secure authentication flow with JWT, refresh tokens, and role-based access for modern web apps.",
    tags: ["React", "Node.js", "MongoDB"],
    category: "web",
    preview: "auth",
    links: { live: "#", github: "#" },
  },
  {
    id: "medicine-supply",
    title: "Medicine Supply",
    description:
      "Inventory and supply management dashboard for pharmacies with real-time stock tracking.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    category: "web",
    preview: "dashboard",
    links: { live: "#", github: "#" },
  },
  {
    id: "pothole",
    title: "Smart Pothole Detection",
    description:
      "Computer vision pipeline to detect road damage from camera feeds using custom-trained models.",
    tags: ["Python", "OpenCV", "YOLO"],
    category: "ai",
    preview: "vision",
    links: { github: "#" },
  },
  {
    id: "weathergraph",
    title: "WeatherGraph",
    description:
      "Interactive weather charts and forecasts with clean data visualization and location search.",
    tags: ["React", "Axios", "Chart.js"],
    category: "web",
    preview: "weather",
    links: { live: "#", github: "#" },
  },
  {
    id: "ecommerce",
    title: "E-Commerce UI",
    description:
      "Modern storefront UI with product grids, filters, and responsive checkout experiences.",
    tags: ["Next.js", "Tailwind CSS", "React Query"],
    category: "web",
    preview: "commerce",
    links: { live: "#", github: "#" },
  },
  {
    id: "ai-experiments",
    title: "AI Experiments",
    description:
      "Explorations in LLM tooling, image generation, and small ML prototypes for learning.",
    tags: ["Python", "OpenAI", "Stable Diffusion"],
    category: "experiments",
    preview: "ai-art",
    theme: "dark",
    links: { github: "#" },
  },
];

export type ProjectFilterId = "all" | ProjectCategory;

export const projectFilters: { id: ProjectFilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Apps" },
  { id: "ai", label: "AI / ML" },
  { id: "tools", label: "Tools" },
  { id: "experiments", label: "Experiments" },
  { id: "other", label: "Other" },
];

export function formatProjectNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function projectMatchesFilter(
  project: Project,
  filter: ProjectFilterId,
): boolean {
  if (filter === "all") return true;
  if (filter === "tools") return project.category === "tools";
  return project.category === filter;
}

export function primaryProjectHref(project: Project): string | undefined {
  return project.links?.live ?? project.links?.github;
}
