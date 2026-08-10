import { motion } from "framer-motion";

import { personalData } from "../../../data/personalData";

const AboutContent = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      {/* Section Label */}
      <p className="text-indigo-500 dark:text-indigo-400">
        About Me
      </p>

      {/* Heading */}
      <h2
        className="
          mt-4
          text-4xl
          font-bold
          leading-tight
          text-slate-900
          transition-colors
          duration-300
          sm:text-5xl
          dark:text-white
        "
      >
        Building modern web & mobile applications.
      </h2>

      {/* Paragraph 1 */}
      <p
        className="
          mt-8
          text-lg
          leading-8
          text-slate-600
          transition-colors
          duration-300
          dark:text-slate-400
        "
      >
        I'm{" "}
        <span className="font-semibold text-slate-900 dark:text-white">
          {personalData.name}
        </span>
        {personalData.about_summary}
      </p>

      {/* Paragraph 2 */}
      <p
        className="
          mt-6
          text-lg
          leading-8
          text-slate-600
          transition-colors
          duration-300
          dark:text-slate-400
        "
      >
        {personalData.about_para}
      </p>
    </motion.div>
  );
};

export default AboutContent;