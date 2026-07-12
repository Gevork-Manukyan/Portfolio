import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Avatar } from "@/components/ui/Avatar";

const facts = [
  { label: "Based in", value: profile.location },
  { label: "Experience", value: "4+ years" },
  { label: "Education", value: "B.S. CS · 4.0 GPA" },
  { label: "Currently", value: "Open to work" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHeading index="01" title="About" kicker="Who I am" />

      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <Reveal className="md:sticky md:top-28 md:self-start">
          <Avatar />
        </Reveal>

        <div>
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              {profile.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {facts.map((f) => (
              <div
                key={f.label}
                className="rounded-2xl border border-border bg-surface/40 p-4"
              >
                <div className="font-mono text-xs uppercase tracking-wide text-accent">
                  {f.label}
                </div>
                <div className="mt-1 text-sm font-medium text-foreground">
                  {f.value}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
