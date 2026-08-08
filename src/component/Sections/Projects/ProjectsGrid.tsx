import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Developer Portfolio",
    description:
      "Modern responsive portfolio built with React, TypeScript, Tailwind CSS and Framer Motion.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
    ],
    github: "#",
    live: "#",
  },
];

const ProjectsGrid = () => {
  return (
    <div className="grid gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          {...project}
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;