import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

type ExperienceCardProps = {
  year: string;
  company: string;
  role: string;
  location: string;
  tech: string[];
};

const ExperienceCard = ({
  year,
  company,
  role,
  location,
  tech,
}: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative pl-16"
    >
      {/* Timeline Dot */}
      <div
        className="
          absolute
          left-[18px]
          top-8
          h-4
          w-4
          rounded-full
          border-4
          border-white
          bg-indigo-500
          shadow-lg
          shadow-indigo-500/30
          dark:border-slate-950
        "
      />

      {/* Card */}
      <div
        className="
          rounded-3xl
          border
          border-slate-200
          bg-white/80
          p-8
          shadow-sm
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-3
          hover:scale-[1.02]
          hover:border-indigo-400
          hover:shadow-2xl
          hover:shadow-indigo-500/10
          dark:border-slate-700
          dark:bg-slate-900/60
          dark:hover:border-indigo-500
        "
      >
        {/* Year */}
        <span
          className="
            inline-block
            rounded-full
            bg-indigo-50
            px-4
            py-1.5
            text-sm
            font-semibold
            text-indigo-600
            dark:bg-indigo-500/10
            dark:text-indigo-300
          "
        >
          {year}
        </span>

        {/* Company */}
        <h3
          className="
            mt-3
            text-3xl
            font-bold
            text-slate-900
            transition-colors
            duration-300
            dark:text-white
          "
        >
          {company}
        </h3>

        {/* Role */}
        <div
          className="
            mt-5
            flex
            items-center
            gap-3
            text-slate-700
            transition-colors
            duration-300
            dark:text-slate-300
          "
        >
          <Briefcase size={18} />
          <span>{role}</span>
        </div>

        {/* Location */}
        <div
          className="
            mt-3
            flex
            items-center
            gap-3
            text-slate-600
            transition-colors
            duration-300
            dark:text-slate-400
          "
        >
          <MapPin size={18} />
          <span>{location}</span>
        </div>

        {/* Tech Stack */}
        <div className="mt-8 flex flex-wrap gap-3">
          {tech.map((item) => (
            <span
              key={item}
              className="
                rounded-full
                border
                border-indigo-200
                bg-indigo-50
                px-3
                py-1.5
                text-xs
                font-medium
                text-indigo-600
                transition-colors
                duration-300
                dark:border-indigo-500/20
                dark:bg-indigo-500/10
                dark:text-indigo-300
              "
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;