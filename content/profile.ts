// ── Your identity & links. Edit these values. ──────────────────────────
// NOTE: placeholder values — replace with your real details.

export const profile = {
  name: "Gevork Manukyan",
  // Short professional title shown under your name
  title: "Full Stack Software Engineer",
  // One-line tagline / value proposition
  tagline:
    "Full Stack Software Engineer specializing in React, TypeScript, REST APIs, database-driven business applications, and end-to-end product development.",
  // A few sentences for the About section
  bio: [
    "I'm a full-stack software engineer who builds database-driven business applications end to end. Day to day that means designing React and TypeScript frontends on top of REST APIs and relational or document databases. This is production software real teams rely on, from a healthcare operations platform used across surgery centers to multi-tenant systems that replace manual, paper-based workflows.",
    "My work spans ecosystems, from React/Next.js and Node/Express to ASP.NET Core on Azure, and the full lifecycle: hundreds of REST endpoints, large relational schemas, background data pipelines, and CI/CD. I care about clean architecture, reliable data, and interfaces that make complicated workflows feel simple.",
  ],
  location: "Los Angeles, CA",
  // Contact email — the contact form delivers here (see app/actions/contact.ts)
  email: "Manukyan.Gevork01@gmail.com",
  // Path to your resume in /public (spaces URL-encoded as %20)
  resumeUrl: "/Manukyan%20Gevork%20Resume.pdf",
  // Social links — leave a field empty ("") to hide that icon
  socials: {
    github: "https://github.com/Gevork-Manukyan",
    linkedin: "https://www.linkedin.com/in/gevork-manukyan",
    email: "mailto:Manukyan.Gevork01@gmail.com",
    x: "", // optional
    // Identity-only: fed to Person.sameAs (app/page.tsx) for SEO, NOT rendered
    // as icons — these profiles have no content worth linking visitors to yet.
    devto: "https://dev.to/gevorkmanukyan",
    codepen: "https://codepen.io/Gevork-Manukyan",
  },
  // Short list of things you do, shown as rotating/kinetic words in the hero
  roles: ["Full-Stack", "Backend", "Frontend"],
} as const;

export type Profile = typeof profile;
