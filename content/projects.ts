// ── Featured projects (hand-curated). ──────────────────────────────────
// Tier 1: the first item with `featured: true` renders as a wide hero card.
// Tier 2: the rest render as regular cards.
// Put images in /public/projects/ and reference them as "/projects/name.png".

export type ProjectStatus = "live" | "in-progress" | "demo";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
  featured?: boolean;
  status?: ProjectStatus;
  year?: string;
};

export const projects: Project[] = [
  {
    title: "GroupScheduler",
    description:
      "A scheduling tool that overlays everyone's availability to instantly surface the best time for a group to meet. Built on Next.js with an Appwrite backend handling auth and data.",
    tech: ["Next.js", "React", "Appwrite", "Tailwind CSS"],
    liveUrl: "https://groupscheduler.gevorkmanukyan.com",
    repoUrl: "https://github.com/Gevork-Manukyan/GroupScheduler",
    image: "/projects/group-scheduler.webp",
    featured: true,
    status: "live",
  },
  {
    title: "Command of Nature",
    description:
      "A real-time multiplayer card game (2 or 4 players) built on a server-authoritative engine. A modular finite-state machine enforces deterministic gameplay and blocks client-side manipulation, while a Socket.io layer handles lobbies, room-based sessions, and synchronized state, backed by hybrid in-memory and MongoDB persistence, JWT auth, and decoupled engine/transport/persistence layers deployed on AWS.",
    tech: ["Next.js", "TypeScript", "Socket.io", "Express", "MongoDB", "AWS"],
    repoUrl: "https://github.com/Gevork-Manukyan/Command-of-Nature",
    image: "",
    status: "in-progress",
  },
  {
    title: "Demons & Ducks",
    description:
      "A turn-based multiplayer card game with account auth, game lobbies, and ready-up waiting rooms. Live gameplay is streamed to every player over Server-Sent Events (SSE), backed by Next.js, NextAuth, and Prisma/PostgreSQL.",
    tech: ["Next.js", "TypeScript", "NextAuth", "Prisma", "PostgreSQL", "SSE"],
    repoUrl: "https://github.com/Gevork-Manukyan/Demons-and-Ducks",
    image: "",
    status: "in-progress",
  },
];

// ── Tier 3: "More builds" — compact rows with links to everything. ──────
export type MoreProject = {
  title: string;
  blurb: string;
  tag: string; // primary language / short label
  liveUrl?: string;
  repoUrl: string;
  status?: ProjectStatus;
};

export const moreProjects: MoreProject[] = [
  {
    title: "Learn Russian",
    blurb: "A lightweight app for practicing common Russian vocabulary.",
    tag: "TypeScript",
    liveUrl: "https://learnrussian.gevorkmanukyan.com",
    repoUrl: "https://github.com/Gevork-Manukyan/Learn-Russian",
    status: "live",
  },
  {
    title: "PetSoft",
    blurb: "A UI demo for a pet-care management dashboard (HTML/CSS front-end only).",
    tag: "HTML/CSS",
    liveUrl: "https://pet-soft-two.vercel.app",
    repoUrl: "https://github.com/Gevork-Manukyan/PetSoft",
    status: "demo",
  },
  {
    title: "Corpcomment",
    blurb: "A UI demo for a product-feedback board (HTML/CSS front-end only).",
    tag: "HTML/CSS",
    liveUrl: "https://corpcomment-eosin.vercel.app",
    repoUrl: "https://github.com/Gevork-Manukyan/Corpcomment",
    status: "demo",
  },
  {
    title: "TuringSim",
    blurb: "A Turing machine simulator for stepping through tape-based computation.",
    tag: "TypeScript",
    liveUrl: "https://turingsim.gevorkmanukyan.com",
    repoUrl: "https://github.com/Gevork-Manukyan/TuringSim",
    status: "live",
  },
  {
    title: "Polyrhythmic Rainbow",
    blurb: "A generative audio-visual polyrhythm toy that makes a really cool sounding rainbow.",
    tag: "JavaScript",
    liveUrl: "https://polyrhythmic-rainbow.vercel.app",
    repoUrl: "https://github.com/Gevork-Manukyan/Polyrhythmic-Rainbow",
    status: "live",
  },
  {
    title: "MovieGang",
    blurb: "A movie browsing and discovery app built with Svelte.",
    tag: "Svelte",
    repoUrl: "https://github.com/Gevork-Manukyan/MovieGang",
  },
];
