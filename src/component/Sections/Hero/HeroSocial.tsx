import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, FileText } from "lucide-react";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/gtpankajjha",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/YOUR-LINKEDIN",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:yourmail@gmail.com",
    label: "Email",
  },
  {
    icon: FileText,
    href: "/resume.pdf",
    label: "Resume",
  },
];

const HeroSocial = () => {
  return (
    <div className="mt-8 flex items-center gap-4">
      {socialLinks.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-slate-700
              bg-slate-900/60
              text-slate-300
              hover:bg-indigo-600
              hover:text-white
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



