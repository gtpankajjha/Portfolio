import {
  Mail,
  MapPin,
  FileText,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import { personalData } from "../../../data/personalData";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    value: personalData.email,
    link: `mailto:${personalData.email}`,
  },
  {
    icon: MapPin,
    title: "Location",
    value: personalData.location,
    link: "#",
  },
  {
    icon: FileText,
    title: "Availability",
    value: personalData.availability,
    link: "#",
  },
];

const ContactInfo = () => {
  return (
        <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-xl
        transition-all
        duration-300
        dark:border-slate-800
        dark:bg-slate-900/60
      "
    >
      {/* Heading */}
      <h3
        className="
          text-3xl
          font-bold
          text-slate-900
          transition-colors
          duration-300
          dark:text-white
        "
      >
        Get In Touch
      </h3>

      {/* Description */}
      <p
        className="
          mt-4
          leading-8
          text-slate-600
          transition-colors
          duration-300
          dark:text-slate-400
        "
      >
        Whether you have a project, job opportunity, or just
        want to connect, feel free to reach out.
      </p>

      {/* Contact Details */}
      <div className="mt-10 space-y-6">
        {contacts.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.title}
              href={item.link}
              className="
                group
                flex
                items-center
                gap-5
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                transition-all
                duration-300
                hover:border-indigo-400
                hover:bg-indigo-50/50
                dark:border-slate-800
                dark:bg-slate-900/40
                dark:hover:border-indigo-500
                dark:hover:bg-slate-800/60
              "
            >
              {/* Icon */}
              <div
                className="
                  rounded-xl
                  bg-indigo-50
                  p-3
                  text-indigo-600
                  transition-colors
                  duration-300
                  dark:bg-indigo-500/20
                  dark:text-indigo-400
                "
              >
                <Icon size={22} />
              </div>

              {/* Content */}
              <div className="min-w-0">
                <p
                  className="
                    text-sm
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  {item.title}
                </p>

                <p
                  className="
                    break-words
                    font-semibold
                    text-slate-900
                    transition-colors
                    duration-300
                    group-hover:text-indigo-600
                    dark:text-white
                    dark:group-hover:text-indigo-400
                  "
                >
                  {item.value}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      {/* Social Links */}
      <div className="mt-10">
        <h4
          className="
            mb-5
            text-lg
            font-semibold
            text-slate-900
            dark:text-white
          "
        >
          Find Me On
        </h4>

        <div className="flex gap-4">
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
              p-4
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
            <FaGithub size={22} />
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
              p-4
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
            <FaLinkedinIn size={22} />
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
              p-4
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
            <FileText size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;