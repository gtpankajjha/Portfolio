import ExperienceCard from "./ExperienceCard";

const experiences = [
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

const ExperienceTimeline = () => {
  return (
    <div className="relative mx-auto max-w-5xl">

      {/* Vertical Line */}
      <div className="absolute left-5 top-8 bottom-8 w-[2px] bg-slate-700"></div>

      <div className="space-y-14">
        {experiences.map((item, index) => (
          <ExperienceCard
            key={index}
            {...item}
          />
        ))}
      </div>

    </div>
  );
};

export default ExperienceTimeline;