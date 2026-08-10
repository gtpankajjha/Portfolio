import ExperienceCard from "./ExperienceCard";
import { experienceData } from "../../../data/experience";

const ExperienceTimeline = () => {
  return (
    <div className="relative">
      {/* Vertical Timeline Line */}
      <div
        className="
          absolute
          left-5
          top-8
          bottom-8
          w-[2px]
          bg-slate-300
          dark:bg-slate-700
        "
      />

      {/* Experience Cards */}
      <div className="space-y-14">
        {experienceData.map((item) => (
          <ExperienceCard
            key={`${item.company}-${item.year}`}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;