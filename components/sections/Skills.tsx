import { skillGroups } from "@/content/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHeading index="04" title="Skills & Tools" kicker="What I work with" />

      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={(i % 2) * 0.08}>
            <div className="h-full rounded-3xl border border-border bg-surface/40 p-6 sm:p-8">
              <h3 className="font-mono text-sm uppercase tracking-wider text-accent">
                {group.label}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-xl border border-border bg-surface px-3.5 py-2 text-sm text-foreground transition-colors hover:border-accent/60 hover:text-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
