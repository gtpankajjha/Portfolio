import { motion } from "framer-motion";


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
      <p className="font-semibold text-indigo-400">
        About Me
      </p>

      <h2 className="mt-4 text-5xl font-bold leading-tight text-white">
        Building modern web &
        mobile applications.
      </h2>

      <p className="mt-8 text-lg leading-8 text-slate-400">
        I'm <span className="font-semibold text-white">Pankaj Kumar</span>,
        a Frontend Engineer with over 4 years of experience building
        responsive web and mobile applications using React.js,
        Next.js, React Native and TypeScript.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-400">
        I enjoy solving real-world problems, building reusable
        components, improving application performance, and creating
        intuitive user experiences with clean, maintainable code.
      </p>
    </motion.div>
  );
};

export default AboutContent;