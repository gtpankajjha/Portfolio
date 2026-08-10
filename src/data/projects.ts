import toneop1 from "../assets/Projects/ToneopEats/Toneop1.png";
import toneop2 from "../assets/Projects/ToneopEats/Toneop2.png";
import toneop3 from "../assets/Projects/ToneopEats/Toneop3.png";
import toneop4 from "../assets/Projects/ToneopEats/Toneop4.png";
import donar1 from "../assets/Projects/ToneopEats/Donar.png";
import donar2 from "../assets/Projects/ToneopEats/Donar1.png";
import donar3 from "../assets/Projects/ToneopEats/Donar2.png";
import donar4 from "../assets/Projects/ToneopEats/Donar3.png";
export type Project = {
  title: string;
  description: string;
 images: string[];
  technologies: string[];
  github: string;
  live: string;
  featured?: boolean;
};

export const projectsData: Project[] = [
 {
  title: "ToneOp Eats",

  description:
    "Production health-food platform focused on goal-based meal subscriptions, healthy meal discovery and online ordering. Contributed to responsive frontend experiences and reusable UI components.",

  images: [
    toneop1,
    toneop2,
    toneop3,
    toneop4
  ],

  technologies: [
    "React",
    "Next.js",
    "TypeScript",
    "REST API",
  ],

  github: "#",

  live: "https://toneopeats.com/",

  featured: true,
},

  {
    title: "IE-Money",

    description:
      "Responsive financial web application built with React, featuring dynamic content, API integration, routing and a modern user interface.",

    images: [ donar1,
    donar2,
    donar3,
    donar4,],

    technologies: [
      "React",
      "React Router",
      "Axios",
      "REST API",
    ],

    github: "https://github.com/gtpankajjha/IeMoneyWebsite",

    live: "https://ie-money-website.vercel.app/",
  },
];