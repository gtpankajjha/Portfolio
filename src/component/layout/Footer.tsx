import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail, FileText, Heart } from "lucide-react";
import { personalData } from "../../data/personalData";

const Footer = () => {
  return (
    <footer
      className="
        border-t
        border-slate-200
        bg-white
        py-12
        text-slate-900
        transition-colors
        duration-300
        dark:border-slate-800
        dark:bg-slate-950
        dark:text-white
      "
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Logo */}
        <div className="text-center">
          <h2
            className="
              text-3xl
              font-bold
              text-slate-900
              transition-colors
              duration-300
              dark:text-white
            "
          >
            PK.
          </h2>

          <p
            className="
              mt-3
              text-slate-600
              transition-colors
              duration-300
              dark:text-slate-400
            "
          >
            {personalData.role} • React.js • Next.js • React Native
          </p>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center gap-5">
          {/* GitHub */}
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              rounded-xl
              border
              border-slate-300
              bg-white
              p-3
              text-slate-600
              transition-all
              duration-300
              hover:border-indigo-500
              hover:bg-indigo-50
              hover:text-indigo-600
              dark:border-slate-700
              dark:bg-transparent
              dark:text-slate-300
              dark:hover:border-indigo-500
              dark:hover:bg-slate-800
              dark:hover:text-indigo-400
            "
          >
            <FaGithub size={20} />
          </a>

          {/* LinkedIn */}
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              rounded-xl
              border
              border-slate-300
              bg-white
              p-3
              text-slate-600
              transition-all
              duration-300
              hover:border-indigo-500
              hover:bg-indigo-50
              hover:text-indigo-600
              dark:border-slate-700
              dark:bg-transparent
              dark:text-slate-300
              dark:hover:border-indigo-500
              dark:hover:bg-slate-800
              dark:hover:text-indigo-400
            "
          >
            <FaLinkedinIn size={20} />
          </a>

          {/* Email */}
          <a
            href={`mailto:${personalData.email}`}
            aria-label="Email"
            className="
              rounded-xl
              border
              border-slate-300
              bg-white
              p-3
              text-slate-600
              transition-all
              duration-300
              hover:border-indigo-500
              hover:bg-indigo-50
              hover:text-indigo-600
              dark:border-slate-700
              dark:bg-transparent
              dark:text-slate-300
              dark:hover:border-indigo-500
              dark:hover:bg-slate-800
              dark:hover:text-indigo-400
            "
          >
            <Mail size={20} />
          </a>

          {/* Resume */}
          <a
            href={personalData.resume}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            className="
              rounded-xl
              border
              border-slate-300
              bg-white
              p-3
              text-slate-600
              transition-all
              duration-300
              hover:border-indigo-500
              hover:bg-indigo-50
              hover:text-indigo-600
              dark:border-slate-700
              dark:bg-transparent
              dark:text-slate-300
              dark:hover:border-indigo-500
              dark:hover:bg-slate-800
              dark:hover:text-indigo-400
            "
          >
            <FileText size={20} />
          </a>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-10
            border-t
            border-slate-200
            pt-6
            text-center
            transition-colors
            duration-300
            dark:border-slate-800
          "
        >
          <p
            className="
              text-slate-500
              dark:text-slate-500
            "
          >
            © {new Date().getFullYear()} {personalData.name}.
            All rights reserved.
          </p>

          <p
            className="
              mt-2
              flex
              items-center
              justify-center
              gap-2
              text-sm
              text-slate-500
            "
          >
            Built with React, TypeScript & Tailwind CSS
            <Heart
              size={14}
              className="fill-red-500 text-red-500"
            />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;