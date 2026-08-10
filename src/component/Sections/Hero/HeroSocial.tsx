import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, FileText } from "lucide-react";

import { personalData } from "../../../data/personalData";

const socialLinks = [
  {
    icon: FaGithub,
    href: personalData.github,
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: personalData.linkedin,
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: `mailto:${personalData.email}`,
    label: "Email",
  },
  {
    icon: FileText,
    href: personalData.resume,
    label: "Resume",
  },
];

const HeroSocial = () => {
  return (
    <div className="mt-8 flex gap-4">
      {socialLinks.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.label}
            href={item.href}
            target={
              item.label === "Email" ? undefined : "_blank"
            }
            rel={
              item.label === "Email"
                ? undefined
                : "noopener noreferrer"
            }
            aria-label={item.label}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              text-slate-700
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-indigo-500
              hover:bg-indigo-600
              hover:text-white
              dark:border-slate-700
              dark:bg-slate-900/60
              dark:text-slate-300
              dark:hover:border-indigo-500
              dark:hover:bg-indigo-600
              dark:hover:text-white
            "
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
};

export default HeroSocial;