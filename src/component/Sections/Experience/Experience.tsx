import ExperienceHeader from "./ExperienceHeader";
import ExperienceTimeline from "./ExperienceTimeline";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <ExperienceHeader />

        <ExperienceTimeline />

      </div>
    </section>
  );
};

export default Experience;