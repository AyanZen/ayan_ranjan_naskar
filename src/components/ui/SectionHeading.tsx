export default function SectionHeading({
  left,
  right,
}: {
  left: string;
  right?: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="shrink-0 text-lg font-semibold text-neutral-900">{left}</h2>
      <span className="h-px flex-1 bg-neutral-200" aria-hidden />
      {right ? (
        <p className="hidden shrink-0 text-sm text-neutral-500 sm:block">{right}</p>
      ) : null}
    </div>
  );
}
