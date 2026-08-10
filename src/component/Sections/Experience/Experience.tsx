import Container from "../../layout/Container";
import ExperienceHeader from "./ExperienceHeader";
import ExperienceTimeline from "./ExperienceTimeline";

const Experience = () => {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        text-slate-900
        transition-colors
        duration-300
        dark:bg-slate-950
        dark:text-white
      "
    >
      <Container>
        <div className="mx-auto max-w-5xl">
          {/* Section Header */}
          <ExperienceHeader />

          {/* Timeline */}
          <ExperienceTimeline />
        </div>
      </Container>
    </section>
  );
};

export default Experience;