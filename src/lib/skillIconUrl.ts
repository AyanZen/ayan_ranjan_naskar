const overrides: Record<string, string> = {
  nextjs: "nextjs/nextjs-original",
  tailwindcss: "tailwindcss/tailwindcss-plain",
  express: "express/express-original",
  vscode: "vscode/vscode-original",
  scikitlearn: "scikit-learn/scikit-learn-original",
  openai: "openai/openai-original",
  postman: "postman/postman-icon",
  github: "github/github-original",
  docker: "docker/docker-original",
  jupyter: "jupyter/jupyter-original",
  tensorflow: "tensorflow/tensorflow-original",
};

export function skillIconUrl(icon: string) {
  const path = overrides[icon] ?? `${icon}/${icon}-original`;
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}.svg`;
}
