// ── Education. ─────────────────────────────────────────────────────────

export type Education = {
  degree: string;
  school: string;
  period: string;
  location?: string;
  detail?: string;
};

export const education: Education[] = [
  {
    degree: "B.S. in Computer Science",
    school: "California State University, Northridge",
    // Dates intentionally omitted.
    period: "",
    location: "Northridge, CA",
    detail: "GPA: 4.00",
  },
];
