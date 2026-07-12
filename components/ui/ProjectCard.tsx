"use client";

import { useRef, useState } from "react";
import type { Project } from "@/content/projects";
import { ArrowUpRightIcon, GitHubIcon, CodeIcon } from "@/components/ui/icons";
import { StatusBadge } from "@/components/ui/StatusBadge";

/**
 * Project card with a cursor-tracking spotlight glow. `featured` cards span
 * two columns on larger screens for the bento effect.
 */
export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 50, y: 50, active: false });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  };

  return (
    <article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setGlow((g) => ({ ...g, active: false }))}
      className={`card-hover group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-surface/40 p-6 sm:p-8 ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      {/* cursor spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: glow.active
            ? `radial-gradient(400px circle at ${glow.x}% ${glow.y}%, color-mix(in oklab, var(--accent) 14%, transparent), transparent 60%)`
            : undefined,
        }}
      />

      {/* Optional image */}
      {project.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.image}
          alt={project.title}
          className="mb-6 aspect-video w-full rounded-2xl border border-border object-cover"
        />
      ) : (
        <div className="mb-6 flex aspect-video w-full items-center justify-center rounded-2xl border border-border bg-gradient-to-br from-surface-2 to-surface text-muted">
          <CodeIcon width={28} height={28} />
        </div>
      )}

      <div className="relative flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-semibold sm:text-2xl">
          {project.title}
        </h3>
        {project.status ? (
          <StatusBadge status={project.status} />
        ) : project.year ? (
          <span className="font-mono text-xs text-muted">{project.year}</span>
        ) : null}
      </div>

      <p className="relative mt-3 flex-1 text-muted">{project.description}</p>

      <ul className="relative mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="relative mt-6 flex items-center gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            Live <ArrowUpRightIcon width={15} height={15} />
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            <GitHubIcon width={16} height={16} /> Code
          </a>
        )}
      </div>
    </article>
  );
}
