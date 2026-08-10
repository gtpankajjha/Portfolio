import { FaGithub } from "react-icons/fa";
import {
  ExternalLink,
  Star,
} from "lucide-react";

import ProjectCarousel from "./ProjectCarousel";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  featured?: boolean;
};

const ProjectCard = ({
  title,
  description,
  technologies,
  github,
  live,
  featured,
}: ProjectCardProps) => {
  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-xl
        transition-all
        duration-300
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <div className="grid md:grid-cols-2">
        {/* Image */}
        <div
          className="
            relative
            h-full
            min-h-[320px]
            overflow-hidden
            rounded-t-3xl
            md:rounded-l-3xl
            md:rounded-tr-none
          "
        >
          <ProjectCarousel />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between p-8 sm:p-10">
          <div>
            {/* Featured */}
            {featured && (
              <span
                className="
                  mb-6
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-indigo-200
                  bg-indigo-50
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-indigo-600
                  dark:border-indigo-500/20
                  dark:bg-indigo-500/10
                  dark:text-indigo-300
                "
              >
                <Star size={15} />
                Featured
              </span>
            )}

            {/* Title */}
            <h3
              className="
                text-3xl
                font-bold
                text-slate-900
                transition-colors
                duration-300
                sm:text-4xl
                dark:text-white
              "
            >
              {title}
            </h3>

            {/* Description */}
            <p
              className="
                mt-6
                leading-8
                text-slate-600
                transition-colors
                duration-300
                dark:text-slate-400
              "
            >
              {description}
            </p>

            {/* Technologies */}
            <div className="mt-8 flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-indigo-200
                    bg-indigo-50
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-indigo-600
                    transition-colors
                    duration-300
                    dark:border-indigo-500/20
                    dark:bg-indigo-500/10
                    dark:text-indigo-300
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            {/* Live Demo */}
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-indigo-600
                px-6
                py-3
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-indigo-500
                hover:shadow-lg
                hover:shadow-indigo-500/20
              "
            >
              <ExternalLink size={18} />
              Live Demo
            </a>

            {/* GitHub */}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-slate-300
                bg-white
                px-6
                py-3
                font-semibold
                text-slate-800
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-indigo-500
                hover:text-indigo-600
                dark:border-slate-700
                dark:bg-transparent
                dark:text-white
                dark:hover:border-indigo-500
                dark:hover:text-indigo-400
              "
            >
              <FaGithub size={18} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;