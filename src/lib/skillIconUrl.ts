/** Devicon folder paths under icons/{path}.svg (jsDelivr gh/devicons/devicon). */
const deviconPaths: Record<string, string> = {
  nextjs: "nextjs/nextjs-original",
  tailwindcss: "tailwindcss/tailwindcss-plain",
  express: "express/express-original",
  vscode: "vscode/vscode-original",
  scikitlearn: "scikitlearn/scikitlearn-original",
  postman: "postman/postman-original",
  github: "github/github-original",
  docker: "docker/docker-original",
  jupyter: "jupyter/jupyter-original",
  tensorflow: "tensorflow/tensorflow-original",
};

/** Icons missing or blocked on the gh/devicons bundle — full CDN URLs. */
const absoluteUrls: Record<string, string> = {
  openai: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg",
};

const DEVICON_CDN =
  "https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons";

export function skillIconUrl(icon: string) {
  const direct = absoluteUrls[icon];
  if (direct) return direct;

  const path = deviconPaths[icon] ?? `${icon}/${icon}-original`;
  return `${DEVICON_CDN}/${path}.svg`;
}
