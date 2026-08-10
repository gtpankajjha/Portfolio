import ProjectCard from "./ProjectCard";
import { projectsData } from "../../../data/projects";

const ProjectsGrid = () => {
  return (
    <div className="space-y-10">
      {projectsData.map((project) => (
        <ProjectCard
          key={project.title}
          {...project}
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;