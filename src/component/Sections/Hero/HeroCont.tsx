import { motion } from "framer-motion";

import Button from "../../common/Button";
import HeroSocial from "./HeroSocial";
import HeroStats from "./HeroStats";
import { personalData } from "../../../data/personalData";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
      }}
    >
      {/* Greeting */}
      <p className="mb-4 text-indigo-500 transition-colors duration-300 dark:text-indigo-400">
        👋 Hello, I'm
      </p>

      {/* Name */}
      <h1
        className="
          text-5xl
          font-extrabold
          leading-tight
          text-slate-900
          transition-colors
          duration-300
          sm:text-6xl
          dark:text-white
        "
      >
        {personalData.name}
      </h1>

      {/* Role */}
      <h2
        className="
          mt-4
          text-2xl
          text-slate-700
          transition-colors
          duration-300
          dark:text-slate-300
        "
      >
        {personalData.role}
      </h2>

      {/* Summary */}
      <p
        className="
          mt-8
          max-w-xl
          text-lg
          leading-8
          text-slate-600
          transition-colors
          duration-300
          dark:text-slate-400
        "
      >
        {personalData.summary}
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap gap-5">
        <a
          href={personalData.resume}
          download="Pankaj_Kumar_Resume.pdf"
        >
          <Button>Download Resume</Button>
        </a>

        <a href="#projects">
          <Button variant="secondary">
            View Projects
          </Button>
        </a>
      </div>

      {/* Stats */}
      <HeroStats />

      {/* Social Links */}
      <HeroSocial />
    </motion.div>
  );
};

export default HeroContent;