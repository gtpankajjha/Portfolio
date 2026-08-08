import Container from "./Container";
import useActiveSection from "../../hooks/useActiveSection";
import { motion } from "framer-motion";
const Navbar = () => {
  const activeSection = useActiveSection();

  const navItems = [
  { name: "About", href: "#about", id: "about" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];
  return (
<header className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">

         <motion.h1
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  className="cursor-pointer text-2xl font-bold text-white"
>
  PK.
</motion.h1>

         <nav className="hidden items-center gap-10 md:flex">
  {navItems.map((item) => (
    <a
      key={item.id}
      href={item.href}
      className={`relative transition-all duration-300 ${
  activeSection === item.id
    ? "text-indigo-400"
    : "text-slate-400 hover:text-white"
}`}
    >
      {item.name}

     {activeSection === item.id && (
  <motion.span
    layoutId="active-nav"
    className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-indigo-500"
    transition={{
      type: "spring",
      stiffness: 400,
      damping: 30,
    }}
  />
)}
    </a>
  ))}
</nav>

        </div>
      </Container>
    </header>
  );
};

export default Navbar;