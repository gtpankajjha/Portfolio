import mealflow1 from "../assets/Projects/MealFlow/Mealflow_1.png";
import mealflow2 from "../assets/Projects/MealFlow/Mealflow_2.png";
import mealflow3 from "../assets/Projects/MealFlow/Mealflow_3.png";
import mealflow4 from "../assets/Projects/MealFlow/Mealflow_4.png";

import donar1 from "../assets/Projects/MealFlow/Donar.png";
import donar2 from "../assets/Projects/MealFlow/Donar1.png";
import donar3 from "../assets/Projects/MealFlow/Donar2.png";
import donar4 from "../assets/Projects/MealFlow/Donar3.png";

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
    title: "MealFlow",
    description:
      "Modern healthy meal subscription platform featuring personalized meal preferences, dynamic menu browsing, meal packages, responsive design, REST API integration and a production-ready deployment.",
    images: [mealflow1, mealflow2, mealflow3, mealflow4],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "MongoDB",
    ],
    github: "https://github.com/gtpankajjha/MealFlow",
    live: "https://mealflowfrontend-git-main-pankajs-projects-c0d34f9a.vercel.app/",
    featured: true,
  },

  {
    title: "IE-Money",
    description:
      "Responsive financial web application built with React, featuring dynamic content, API integration, routing and a modern user interface.",
    images: [donar1, donar2, donar3, donar4],
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