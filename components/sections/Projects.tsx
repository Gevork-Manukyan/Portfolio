import { projects, moreProjects } from "@/content/projects";
import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRightIcon, GitHubIcon } from "@/components/ui/icons";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHeading index="03" title="Selected Work" kicker="Things I've built" />

      {/* Tier 1 (featured, wide) + Tier 2 (cards) */}
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal
            key={p.title}
            delay={(i % 2) * 0.08}
            className={p.featured ? "md:col-span-2" : ""}
          >
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>

      {/* Tier 3 — More builds (compact rows) */}
      {moreProjects.length > 0 && (
        <div className="mt-16">
          <Reveal>
            <h3 className="font-display text-xl font-semibold">More builds</h3>
            <p className="mt-1 text-sm text-muted">
              Smaller projects and experiments — links to each.
            </p>
          </Reveal>

          <ul className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface/40">
            {moreProjects.map((p, i) => (
              <Reveal as="li" key={p.title} delay={Math.min(i * 0.04, 0.2)}>
                <div className="group flex flex-col gap-3 p-5 transition-colors hover:bg-surface sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h4 className="font-medium">{p.title}</h4>
                      <span className="rounded-full border border-border bg-surface px-2 py-0.5 font-mono text-[11px] text-muted">
                        {p.tag}
                      </span>
                      {p.status && <StatusBadge status={p.status} />}
                    </div>
                    <p className="mt-1.5 text-sm text-muted">{p.blurb}</p>
                  </div>

                  <div className="flex shrink-0 items-center gap-4">
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
                      >
                        View <ArrowUpRightIcon width={14} height={14} />
                      </a>
                    )}
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} on GitHub`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
                    >
                      <GitHubIcon width={16} height={16} /> Code
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      )}

      {profile.socials.github && (
        <Reveal className="mt-12 text-center">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-6 py-3 text-sm font-medium transition-colors hover:border-accent/60"
          >
            View all on GitHub <ArrowUpRightIcon width={16} height={16} />
          </a>
        </Reveal>
      )}
    </section>
  );
}
