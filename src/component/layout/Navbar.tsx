import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

import Container from "./Container";
import useActiveSection from "../../hooks/useActiveSection";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const activeSection = useActiveSection();
  const [isOpen, setIsOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
        <Container>
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer text-2xl font-bold text-slate-900 dark:text-white"
            >
              PK.
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative transition-all duration-300 ${
                   activeSection === item.id
  ? "text-indigo-600 dark:text-indigo-400"
  : "text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-white"
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

              {/* Desktop Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="rounded-full border border-slate-300 bg-white p-2 text-slate-700 transition-all duration-300 hover:border-indigo-500 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                {theme === "dark" ? (
                  <Sun
                    size={20}
                    className="text-yellow-400"
                  />
                ) : (
                  <Moon
                    size={20}
                    className="text-slate-700"
                  />
                )}
              </button>
            </nav>

            {/* Mobile Controls */}
            <div className="flex items-center gap-3 md:hidden">
              {/* Mobile Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="rounded-full border border-slate-700 p-2 text-slate-300 transition-all duration-300 hover:border-indigo-500"
              >
                {theme === "dark" ? (
                  <Sun
                    size={20}
                    className="text-yellow-400"
                  />
                ) : (
                  <Moon
                    size={20}
                    className="text-slate-700"
                  />
                )}
              </button>

              {/* Hamburger */}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
                className="text-white"
              >
                <Menu size={30} />
              </button>
            </div>
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
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              className="fixed right-0 top-0 z-50 h-full w-72 border-l border-slate-800 bg-slate-950 p-8 shadow-2xl md:hidden"
            >
              {/* Drawer Header */}
              <div className="mb-10 flex items-center justify-between">
                <motion.a
                  href="#"
                  onClick={handleNavClick}
                  whileTap={{ scale: 0.95 }}
                  className="text-2xl font-bold text-slate-900 dark:text-white"
                >
                  PK.
                </motion.a>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                 className="text-slate-700 transition hover:text-indigo-500 dark:text-white dark:hover:text-indigo-400"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Mobile Navigation */}
              <div className="flex flex-col gap-8">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={handleNavClick}
                    className={`text-lg transition-all duration-300 ${
                     activeSection === item.id
  ? "text-indigo-600 dark:text-indigo-400"
  : "text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}

                {/* Mobile Theme Toggle */}
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="mt-4 flex items-center gap-3 rounded-xl border border-slate-700 px-4 py-3 text-left text-slate-300 transition-all duration-300 hover:border-indigo-500 hover:text-white"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun
                        size={20}
                        className="text-yellow-400"
                      />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon
                        size={20}
                        className="text-slate-700"
                      />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;