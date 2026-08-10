import { motion } from "framer-motion";
import profileImage from "../../../assets/image/Pankaj_Profile.jpeg";

import { personalData } from "../../../data/personalData";

const AboutImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="
        relative
        mx-auto
        w-full
        max-w-md
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-xl
        transition-all
        duration-300
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      {/* Profile Image */}
      <div className="flex justify-center">
        <div
          className="
            relative
            h-40
            w-40
            overflow-hidden
            rounded-full
            border-4
            border-indigo-500/30
            bg-slate-100
            shadow-lg
            dark:bg-slate-800
          "
        >
          <img
            src={profileImage}
            alt={personalData.name}
            className="h-full w-full object-cover"
          />

          {/* Image Glow */}
          <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-indigo-500/20" />
        </div>
      </div>

      {/* Name */}
      <h3
        className="
          mt-6
          text-center
          text-2xl
          font-bold
          text-slate-900
          transition-colors
          duration-300
          dark:text-white
        "
      >
        {personalData.name}
      </h3>

      {/* Role */}
      <p
        className="
          mt-2
          text-center
          text-slate-600
          transition-colors
          duration-300
          dark:text-slate-400
        "
      >
        {personalData.role}
      </p>

      {/* Skills */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {["React.js", "Next.js", "React Native", "TypeScript"].map(
          (skill) => (
            <span
              key={skill}
              className="
                rounded-full
                border
                border-indigo-200
                bg-indigo-50
                px-3
                py-1
                text-xs
                font-medium
                text-indigo-600
                transition-colors
                duration-300
                dark:border-indigo-500/30
                dark:bg-indigo-500/10
                dark:text-indigo-300
              "
            >
              {skill}
            </span>
          )
        )}
      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-slate-200 dark:bg-slate-700" />

      {/* Details */}
      <div className="space-y-5">
        {/* Experience */}
        <div className="flex items-center justify-between gap-4">
          <span className="text-slate-600 dark:text-slate-400">
            Experience
          </span>

          <span className="font-semibold text-slate-900 dark:text-white">
            4+ Years
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center justify-between gap-4">
          <span className="text-slate-600 dark:text-slate-400">
            Location
          </span>

          <span className="font-semibold text-slate-900 dark:text-white">
            {personalData.location}
          </span>
        </div>

        {/* Specialization */}
        <div className="flex items-center justify-between gap-4">
          <span className="text-slate-600 dark:text-slate-400">
            Specialization
          </span>

          <span className="font-semibold text-slate-900 dark:text-white">
            Frontend
          </span>
        </div>

        {/* Availability */}
        <div className="flex items-center justify-between gap-4">
          <span className="text-slate-600 dark:text-slate-400">
            Availability
          </span>

          <span className="font-semibold text-emerald-500 dark:text-emerald-400">
            {personalData.availability}
          </span>
        </div>
      </div>

      {/* Bottom Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          left-1/2
          h-44
          w-44
          -translate-x-1/2
          rounded-full
          bg-indigo-500/10
          blur-3xl
          dark:bg-indigo-600/20
        "
      />
    </motion.div>
  );
};

export default AboutImage;