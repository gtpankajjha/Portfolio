import {
  Mail,
  MapPin,
  FileText,
} from "lucide-react";
 import { FaGithub,FaLinkedinIn } from "react-icons/fa";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    value: "gtpankajjha@gmail.com",
    link: "mailto:gtpankajjha@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Bengaluru, India",
    link: "#",
  },
  {
    icon: FileText,
    title: "Availability",
    value: "Open to Full-time Opportunities",
    link: "#",
  },
];

const ContactInfo = () => {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl">

      <h3 className="text-3xl font-bold text-white">
        Get In Touch
      </h3>

      <p className="mt-4 leading-8 text-slate-400">
        Whether you have a project, job opportunity, or just want to
        connect, feel free to reach out.
      </p>

      <div className="mt-10 space-y-6">

        {contacts.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.title}
              href={item.link}
              className="group flex items-center gap-5 rounded-2xl border border-slate-800 p-5 transition-all duration-300 hover:border-indigo-500 hover:bg-slate-800/60"
            >
              <div className="rounded-xl bg-indigo-500/20 p-3 text-indigo-400">
                <Icon size={22} />
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  {item.title}
                </p>

                <p className="font-semibold text-white group-hover:text-indigo-400">
                  {item.value}
                </p>
              </div>
            </a>
          );
        })}

      </div>

      <div className="mt-10">

        <h4 className="mb-5 text-lg font-semibold text-white">
          Find Me On
        </h4>

        <div className="flex gap-4">

          <a
            href="https://github.com/gtpankajjha"
            className="rounded-xl border border-slate-700 p-4 text-slate-300 transition hover:border-indigo-500 hover:text-indigo-400"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/pankaj-jha-2813b014b/"
            className="rounded-xl border border-slate-700 p-4 text-slate-300 transition hover:border-indigo-500 hover:text-indigo-400"
          >
            <FaLinkedinIn size={22} />
          </a>

          <a
            href="/Pankaj_CV.pdf"
            target="_blank"
            className="rounded-xl border border-slate-700 p-4 text-slate-300 transition hover:border-indigo-500 hover:text-indigo-400"
          >
            <FileText size={22} />
          </a>

        </div>

      </div>

    </div>
  );
};

export default ContactInfo;