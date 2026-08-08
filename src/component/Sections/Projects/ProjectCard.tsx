
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
  image,
  technologies,
  github,
  live,
  featured,
}: ProjectCardProps) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl transition-all duration-500 hover:border-indigo-500">

      <div className="grid md:grid-cols-2">

        {/* Image */}

        <div className="h-full min-h-[400px]">
    <ProjectCarousel />
</div>

        {/* Content */}

        <div className="flex flex-col justify-between p-10">

          <div>

            {featured && (
              <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-500/20 px-4 py-2 text-sm text-indigo-300">
                <Star size={15} />
                Featured
              </span>
            )}

            <h3 className="text-4xl font-bold text-white">
              {title}
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

          <div className="mt-10 flex gap-4">

            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>

            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 text-white transition hover:border-indigo-500"
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