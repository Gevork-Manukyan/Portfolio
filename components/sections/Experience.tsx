import { experience } from "@/content/experience";
import { education } from "@/content/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHeading index="02" title="Experience" kicker="Where I've worked" />

      <div className="relative border-l border-border pl-8 sm:pl-10">
        {experience.map((job, i) => (
          <Reveal key={`${job.company}-${i}`} delay={i * 0.05} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center sm:-left-[49px]">
              <span className="h-3 w-3 rounded-full border-2 border-accent bg-background" />
            </span>

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-xl font-semibold">
                {job.role}{" "}
                <span className="text-accent">@ {job.company}</span>
              </h3>
              <span className="font-mono text-xs text-muted">{job.period}</span>
            </div>
            {job.location && (
              <p className="mt-1 text-sm text-muted">{job.location}</p>
            )}
            <p className="mt-3 text-muted">{job.summary}</p>
            {job.highlights && job.highlights.length > 0 && (
              <ul className="mt-4 space-y-2">
                {job.highlights.map((h, hi) => (
                  <li key={hi} className="flex gap-3 text-sm text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </div>

      {/* Education */}
      {education.length > 0 && (
        <div id="education" className="mt-20 scroll-mt-24">
          <Reveal>
            <h3 className="font-display text-2xl font-bold">Education</h3>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {education.map((ed, i) => (
              <Reveal key={`${ed.school}-${i}`} delay={i * 0.05}>
                <div className="rounded-3xl border border-border bg-surface/40 p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h4 className="font-display text-lg font-semibold">{ed.degree}</h4>
                    <span className="font-mono text-xs text-muted">{ed.period}</span>
                  </div>
                  <p className="mt-1 text-accent">{ed.school}</p>
                  {ed.location && (
                    <p className="mt-1 text-sm text-muted">{ed.location}</p>
                  )}
                  {ed.detail && <p className="mt-3 text-sm text-muted">{ed.detail}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
