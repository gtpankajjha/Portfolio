import ProjectsHeader from "./ProjectsHeader";
import ProjectsGrid from "./ProjectsGrid";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-slate-950  py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <ProjectsHeader />
        <ProjectsGrid />
      </div>
    </section>
  );
};

export default Projects;