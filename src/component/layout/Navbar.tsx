import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import Container from "./Container";
import useActiveSection from "../../hooks/useActiveSection";

const Navbar = () => {
  const activeSection = useActiveSection();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
        <Container>
          <div className="flex h-20 items-center justify-between">

            {/* Logo */}

            <motion.h1
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer text-2xl font-bold text-white"
            >
              PK.
            </motion.h1>

            {/* Desktop Menu */}

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

            {/* Mobile Menu Button */}

            <button
              onClick={() => setIsOpen(true)}
              className="text-white md:hidden"
            >
              <Menu size={30} />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Drawer */}

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="fixed right-0 top-0 z-50 h-full w-72 border-l border-slate-800 bg-slate-950 p-8 shadow-2xl md:hidden"
            >
              <div className="mb-10 flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">
                  Menu
                </h2>

                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="flex flex-col gap-8">

                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg transition ${
                      activeSection === item.id
                        ? "text-indigo-400"
                        : "text-slate-300 hover:text-indigo-400"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;