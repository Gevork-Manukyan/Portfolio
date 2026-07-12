import type { ProjectStatus } from "@/content/projects";

const styles: Record<
  ProjectStatus,
  { label: string; cls: string; dot: string }
> = {
  live: {
    label: "Live",
    cls: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
    dot: "bg-emerald-400",
  },
  "in-progress": {
    label: "In progress",
    cls: "border-amber-500/40 bg-amber-500/10 text-amber-400",
    dot: "bg-amber-400",
  },
  demo: {
    label: "Demo",
    cls: "border-sky-500/40 bg-sky-500/10 text-sky-400",
    dot: "bg-sky-400",
  },
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const s = styles[status];
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${s.cls}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
}
