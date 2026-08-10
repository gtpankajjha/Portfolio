import { motion } from "framer-motion";

const ExperienceHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-20 text-center"
    >
      {/* Section Label */}
      <p className="text-indigo-500 dark:text-indigo-400">
        Experience
      </p>

      {/* Heading */}
      <h2
        className="
          mt-4
          text-5xl
          font-bold
          text-slate-900
          transition-colors
          duration-300
          dark:text-white
        "
      >
        My Professional Journey
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
        Over 4 years of experience building scalable web and
        mobile applications using modern frontend technologies.
      </p>
    </motion.div>
  );
};

export default ExperienceHeader;