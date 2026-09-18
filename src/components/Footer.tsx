import { footer, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-bold text-neutral-900">{site.logo}</p>
          <p className="mt-1 text-xs text-neutral-500">{footer.tagline}</p>
        </div>
        <p className="text-xs text-neutral-400">{footer.note}</p>
      </div>
    </footer>
  );
}
