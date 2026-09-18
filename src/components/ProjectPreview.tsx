import type { ProjectPreviewType } from "@/data/projects";

export default function ProjectPreview({
  type,
  tilted = false,
}: {
  type: ProjectPreviewType;
  tilted?: boolean;
}) {
  const base = `h-full min-h-[140px] w-full overflow-hidden rounded-xl border border-neutral-200/80 bg-white ${
    tilted ? "" : ""
  }`;

  switch (type) {
    case "auth":
      return (
        <div
          className={`${base} flex min-h-[200px] items-center justify-center border-neutral-200/80 bg-gradient-to-br from-neutral-100 to-neutral-50 p-4`}
        >
          <div className="w-full max-w-[160px] rotate-[-2deg] rounded-xl bg-white p-3 shadow-md">
            <p className="text-[10px] font-semibold text-neutral-800">
              Welcome back
            </p>
            <div className="mt-2 h-6 rounded-md bg-neutral-100" />
            <div className="mt-1.5 h-6 rounded-md bg-neutral-100" />
            <div className="mt-2 h-7 rounded-md bg-neutral-900" />
          </div>
        </div>
      );
    case "dashboard":
      return (
        <div
          className={`${base} min-h-[200px] border-neutral-100 bg-white p-4`}
        >
          <p className="text-[10px] font-medium text-neutral-500">Overview</p>
          <div className="mt-3 flex h-28 items-end gap-1">
            {[40, 65, 45, 80, 55, 70, 50].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-emerald-400/90"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      );
    case "vision":
      return (
        <div
          className={`${base} min-h-[200px] border-neutral-800 bg-neutral-900 p-2`}
        >
          <div className="relative h-full min-h-[180px] rounded-lg bg-neutral-800">
            <div className="absolute left-[18%] top-[28%] h-12 w-16 rounded border-2 border-red-500/90" />
            <div className="absolute right-[12%] bottom-[22%] h-9 w-24 rounded border-2 border-red-500/70" />
            <p className="absolute bottom-2 left-2 text-[9px] text-neutral-500">
              Live feed
            </p>
          </div>
        </div>
      );
    case "weather":
      return (
        <div
          className={`${base} min-h-[200px] border-sky-100 bg-gradient-to-b from-sky-200 to-sky-50 p-5`}
        >
          <p className="text-xs text-neutral-600">Bengaluru</p>
          <p className="text-4xl font-light text-neutral-800">28°</p>
          <p className="text-[10px] text-neutral-500">Partly cloudy</p>
        </div>
      );
    case "commerce":
      return (
        <div
          className={`${base} grid min-h-[200px] grid-cols-2 gap-2 border-neutral-100 bg-white p-3`}
        >
          <div className="rounded-lg bg-neutral-50 p-2">
            <div className="aspect-square rounded-md bg-neutral-200" />
            <p className="mt-1 text-[9px] text-neutral-600">Sneaker</p>
          </div>
          <div className="rounded-lg bg-neutral-50 p-2">
            <div className="aspect-square rounded-md bg-neutral-300" />
            <p className="mt-1 text-[9px] text-neutral-600">Watch</p>
          </div>
        </div>
      );
    case "ai-art":
      return (
        <div
          className={`${base} flex min-h-[200px] items-center justify-center border-neutral-800 bg-neutral-950`}
        >
          <div className="h-20 w-20 rotate-45 rounded-2xl bg-gradient-to-br from-white to-neutral-500" />
        </div>
      );
    default:
      return <div className={`${base} min-h-[200px] bg-neutral-100`} />;
  }
}
