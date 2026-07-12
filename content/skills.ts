// ── Skills, grouped by category. Edit freely. ──────────────────────────

export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "Material UI",
      "Bootstrap",
      "HTML/CSS",
    ],
  },
  {
    label: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "ASP.NET Core",
      "REST APIs",
      "EF Core",
      "Dapper",
    ],
  },
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "PHP", "Python", "Java", "SQL"],
  },
  {
    label: "Databases & Tools",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Git",
      "GitHub",
      "Docker",
      "Azure DevOps",
      "DigitalOcean",
      "AWS",
      "Jest",
      "Playwright",
    ],
  },
];
