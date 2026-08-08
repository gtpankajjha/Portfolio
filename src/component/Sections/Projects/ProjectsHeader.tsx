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
      {/* <p className="text-lg font-semibold text-indigo-400">
        Projects
      </p> */}

      <h2 className="mt-3 text-5xl font-bold text-white">
        Featured Projects
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
        A collection of projects showcasing my experience in
        React.js, Next.js, React Native and modern frontend
        development.
      </p>
    </motion.div>
  );
};

export default ProjectsHeader;