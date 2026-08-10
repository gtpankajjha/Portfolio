export type Experience = {
  year: string;
  company: string;
  role: string;
  location: string;
  tech: string[];
};

export const experienceData: Experience[] = [
  {
    year: "2026 Jan - Present",
    company: "🏢 Accenture",
    role: "Custom Software Engineer",
    location: "Bengaluru, India",
    tech: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "Redux",
    ],
  },
  {
    year: "2023 July - 2025 Dec",
    company: "🏢 LitmusWorld Marketing Pvt Ltd.",
    role: "Frontend Developer",
    location: "Bengaluru, India",
    tech: [
      "React",
      "React Native",
      "Angular",
      "JavaScript",
      "Redux",
      "REST API",
    ],
  },
  {
    year: "2022 May - 2023 June",
    company: "🏢 Bansal Tech Professionals Pvt Ltd.",
    role: "Frontend Developer",
    location: "India",
    tech: [
      "React",
      "React Native",
      "Bootstrap",
      "JavaScript",
    ],
  },
];