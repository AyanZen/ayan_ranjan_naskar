export type SkillGroup = {
  label: string;
  items: { name: string; icon: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Firebase", icon: "firebase" },
      { name: "PostgreSQL", icon: "postgresql" },
    ],
  },
  {
    label: "Tools & Others",
    items: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "VS Code", icon: "vscode" },
      { name: "Figma", icon: "figma" },
      { name: "Postman", icon: "postman" },
    ],
  },
  {
    label: "AI / ML (Exploring)",
    items: [
      { name: "Python", icon: "python" },
      { name: "Jupyter", icon: "jupyter" },
      { name: "Scikit-Learn", icon: "scikitlearn" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "OpenAI", icon: "openai" },
    ],
  },
];

export { skillIconUrl } from "@/lib/skillIconUrl";
