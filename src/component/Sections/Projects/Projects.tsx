import ProjectsHeader from "./ProjectsHeader";
import ProjectsGrid from "./ProjectsGrid";

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        relative
        bg-white
        py-20
        text-slate-900
        transition-colors
        duration-300
        dark:bg-slate-950
        dark:text-white
      "
    >
      <div className="mx-auto max-w-7xl px-6">
        <ProjectsHeader />

        <ProjectsGrid />
      </div>
    </section>
  );
};

export default Projects;