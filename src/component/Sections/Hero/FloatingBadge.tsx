import { motion } from "framer-motion";

type FloatingBadgeProps = {
  text: string;
  className: string;
};

const FloatingBadge = ({
  text,
  className,
}: FloatingBadgeProps) => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        absolute
        rounded-2xl
        border
        border-slate-200
        bg-white/90
        px-5
        py-3
        text-sm
        font-semibold
        text-slate-800
        shadow-lg
        backdrop-blur-xl
        transition-all
        duration-300

        dark:border-slate-700/60
        dark:bg-slate-900/80
        dark:text-white

        ${className}
      `}
    >
      {text}
    </motion.div>
  );
};

export default FloatingBadge;