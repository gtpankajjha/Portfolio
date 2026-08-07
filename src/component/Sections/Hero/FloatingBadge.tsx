import { motion } from "framer-motion";

type FloatingBadgeProps = {
  text: string;
  className: string;
};

const FloatingBadge = ({ text, className }: FloatingBadgeProps) => {
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
      className={`absolute rounded-2xl border border-slate-700/60 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl shadow-lg ${className}`}
    >
      {text}
    </motion.div>
  );
};

export default FloatingBadge;