// ── Work experience timeline (most recent first). ──────────────────────

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  highlights?: string[];
};

export const experience: Experience[] = [
  {
    role: "Full Stack Software Engineer",
    company: "SimplyRem",
    period: "Dec 2024 – Present",
    location: "Burbank, CA",
    summary:
      "Building full-stack healthcare and business platforms from scratch: React/TypeScript frontends over a large REST/MySQL backend used by 100+ users across multiple surgery centers.",
    highlights: [
      "Architected and built a full-stack healthcare operations platform from scratch, used by 2 surgery centers and 100+ users to manage patients, surgeries, inventory, billing, credentialing, consent forms, and internal medical workflows.",
      "Developed and maintained features across 6 client business systems supporting 500+ users: production software for surgical centers, nonprofits, and small businesses.",
      "Designed the React/TypeScript frontend architecture, API client pipeline, reusable PHP/React UI libraries, a custom DataTable system, and standardized patterns powering nearly 100 business pages.",
      "Built and integrated 200+ REST API endpoints and MySQL workflows across 300+ SQL tables for scheduling, billing, inventory, reports, credentialing, digital forms, and admin configuration.",
      "Replaced legacy and paper-based workflows with configurable digital systems, using Playwright end-to-end tests to validate critical user flows and reduce duplicate entry and human error.",
    ],
  },
  {
    role: "Full Stack Software Engineer",
    company: "New Business Systems, Inc.",
    period: "May 2023 – Dec 2024",
    location: "Los Angeles, CA",
    summary:
      "Delivered multiple .NET 8 business applications on Azure: multi-tenant platforms, high-volume data pipelines, POS hardware integrations, and CI/CD.",
    highlights: [
      "Delivered 3 .NET 8 business applications with 215+ REST endpoints and 130+ relational tables deployed on Azure SQL.",
      "Developed a multi-tenant ITC platform managing $7M+ in credits and processing $2M+ in sales via ASP.NET Core, Azure SQL, Dapper, and EF Core Identity workflows.",
      "Optimized high-volume background services for 10K+ record syncs, cutting runtime from 10+ hours to under 1 hour through query tuning, batching, and parallelization.",
      "Built Azure DevOps CI/CD pipelines and hardware-integrated POS features, including payment terminal and CloudPRNT integrations for distributed multi-location deployments.",
    ],
  },
  {
    role: "Backend Software Engineer",
    company: "Parker Meggitt",
    period: "Jun 2022 – May 2023",
    location: "Simi Valley, CA",
    summary:
      "Backend engineering focused on large-scale data migration and validation.",
    highlights: [
      "Built Python migration and validation pipelines transferring 200K+ legacy CMS files while preserving metadata, access controls, and data integrity.",
    ],
  },
  {
    role: "Contract Software Engineer",
    company: "MCO Platinum",
    period: "Aug 2021 – Jun 2022",
    location: "Los Angeles, CA",
    summary:
      "Built a Next.js/TypeScript jewelry management platform and internal admin dashboard from scratch, backed by PostgreSQL workflow services.",
    highlights: [
      "Built a custom Next.js/TypeScript jewelry management platform from scratch, including an internal admin dashboard used daily to manage 1,000+ ring models and production workflows.",
      "Developed 20+ pages across quoting, customization, production tracking, fulfillment, CAD validation, SKU generation, and dynamic pricing workflows.",
      "Implemented PostgreSQL-backed services for ring versioning, automated SKU generation, material-based pricing, gemstone attributes, and workflow state transitions.",
    ],
  },
  {
    role: "Full Stack Software Engineer Intern",
    company: "Course Hero",
    period: "Jun 2021 – Aug 2021",
    location: "Sacramento, CA",
    summary:
      "Full-stack internship leading a small team to ship a React/Node/Express/PostgreSQL productivity platform.",
    highlights: [
      "Led a 5-intern team to build a React, Node.js, Express, and PostgreSQL productivity platform, demoed to Course Hero engineers, interns, and mentors.",
      "Built core workflows for task management, calendar scheduling, breadcrumb navigation, and embedded content, backed by 50+ REST API endpoints and Jest tests at 90% coverage.",
    ],
  },
];
