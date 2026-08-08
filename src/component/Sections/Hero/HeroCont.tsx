import Button from "../../common/Button";
import HeroSocial from "./HeroSocial";
import HeroStats from "./HeroStats";
import { motion } from "framer-motion";


const HeroContent = () => {
  return (
    <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
  }}
>
      <p className="mb-4 text-indigo-400">
        👋 Hello, I'm
      </p>

      <h1 className="text-6xl font-extrabold leading-tight text-white">
        Pankaj Kumar
      </h1>

      <h2 className="mt-4 text-2xl text-slate-300">
        Frontend Engineer
      </h2>

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
        Crafting fast, scalable web and mobile applications using
        React.js, Next.js, React Native and TypeScript.
      </p>

      <div className="mt-10 flex gap-5">
        <a
        href="/Pankaj_CV.pdf"
        download="Pankaj_Kumar_Resume.pdf"
        >
        <Button >
            Download Resume
        </Button>
        </a>

        <Button variant="secondary">
          View Projects
        </Button>
      </div>
       
      <HeroStats/>
      <HeroSocial/>
     
   </motion.div>
  );
};

export default HeroContent;