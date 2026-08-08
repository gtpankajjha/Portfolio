import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail, FileText, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-14">

        {/* Logo */}

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            PK.
          </h2>

          <p className="mt-3 text-slate-400">
            Frontend Engineer • React.js • Next.js • React Native
          </p>
        </div>

        {/* Social */}

        <div className="mt-8 flex justify-center gap-5">

          <a
            href="https://github.com/gtpankajjha"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-700 p-3 text-slate-300 transition hover:border-indigo-500 hover:text-indigo-400"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/pankaj-jha-2813b014b/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-700 p-3 text-slate-300 transition hover:border-indigo-500 hover:text-indigo-400"
          >
            <FaLinkedinIn size={20} />
          </a>

          <a
            href="mailto:gtpankajjha@gmail.com"
            className="rounded-xl border border-slate-700 p-3 text-slate-300 transition hover:border-indigo-500 hover:text-indigo-400"
          >
            <Mail size={20} />
          </a>

          <a
            href="/Pankaj_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-700 p-3 text-slate-300 transition hover:border-indigo-500 hover:text-indigo-400"
          >
            <FileText size={20} />
          </a>

        </div>

        {/* Bottom */}

        <div className="mt-10 border-t border-slate-800 pt-6 text-center">

          <p className="text-slate-500">
            © {new Date().getFullYear()} Pankaj Kumar. All rights reserved.
          </p>

          <p className="mt-2 flex items-center justify-center gap-2 text-sm text-slate-500">
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