import { motion } from "framer-motion";

const ProjectsHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-5 text-center"
    >
      {/* Section Label */}
      {/* <p className="text-indigo-500 dark:text-indigo-400">
        Projects
      </p> */}

      {/* Heading */}
      <h2
        className="
          mt-3
          text-5xl
          font-bold
          text-slate-900
          transition-colors
          duration-300
          dark:text-white
        "
      >
        Featured Projects
      </h2>

      {/* Description */}
      <p
        className="
          mx-auto
          mt-6
          max-w-2xl
          text-lg
          leading-8
          text-slate-600
          transition-colors
          duration-300
          dark:text-slate-400
        "
      >
        A collection of projects showcasing my experience in
        React.js, Next.js, React Native and modern frontend
        development.
      </p>
    </motion.div>
  );
};

export default ProjectsHeader;