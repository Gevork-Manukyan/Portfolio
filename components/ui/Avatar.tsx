"use client";

import { useState } from "react";
import { profile } from "@/content/profile";

const initials = profile.name
  .split(" ")
  .map((p) => p[0])
  .slice(0, 2)
  .join("");

/**
 * Shows the headshot at /public/headshot.jpg if present; otherwise falls back
 * to a gradient tile with initials. Point `src` at your image once added.
 */
export function Avatar({ src = "/headshot.jpg" }: { src?: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border bg-surface">
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={profile.name}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-accent/20 via-surface to-accent-2/20">
          <span className="font-display text-6xl font-bold gradient-text">
            {initials}
          </span>
          <span className="font-mono text-xs text-muted">add /public/headshot.jpg</span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5" />
    </div>
  );
}
