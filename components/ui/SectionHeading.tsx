import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index: string; // e.g. "01"
  title: string;
  kicker?: string;
};

/** Consistent numbered section heading used across the page. */
export function SectionHeading({ index, title, kicker }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-3 font-mono text-sm text-accent">
        <span>{index}</span>
        <span className="h-px w-10 bg-accent/50" />
        {kicker && <span className="text-muted">{kicker}</span>}
      </div>
      <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
