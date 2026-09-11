import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "global-matriculation-higher-secondary-school",
    index: "01",
    title: "Global Matriculation Higher Secondary School",
    client: "Global Matriculation Higher Secondary School, Kangayam",
    category: "Education Website",
    description:
      "Designed and developed a modern responsive digital presence for Global Matriculation Higher Secondary School, helping the institution move from having no dedicated website to a professional online presence.",
    location: "Dharapuram Road, Kangayam, A.P. Pudur, Kangayam Taluk, Tiruppur – 638701",
    technologies: ["React.js", "Supabase", "Tailwind CSS"],
    image: "/projects/project-01/school-cinematic.png",
    liveUrl: "https://www.globalschools.org.in/",
    caseStudy: {
      challenge:
        "The school previously did not have a proper website or dedicated digital presence to communicate with prospective parents, existing students, and the local community.",
      solution:
        "Designed and developed a clean, accessible, and modern responsive website establishing the institution's official digital presence with structured sections for curriculum, campus details, and admissions inquiries.",
      screenshots: ["/projects/project-01/school-cinematic.png"],
    },
  },
  {
    id: "sakthi-auto-component-digital-trial-card",
    index: "02",
    title: "Digital Trial Card System",
    client: "Sakthi Auto Component Limited",
    category: "Business Application",
    description:
      "Designed and developed a digital trial card system to help Sakthi Auto Component Limited transition from traditional manual entry toward a structured digital workflow.",
    location: "NH 544, Mukasipallagoundampalayam, Koonampatti, Tamil Nadu 638056",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Database System"],
    image: "/projects/project-02/sakthi-auto-cinematic.png",
    caseStudy: {
      challenge:
        "The company was handling component trial cards and process records through traditional manual paper entries, creating operational friction in tracking progress, validation, and historical audits.",
      solution:
        "Engineered a dedicated digital trial card application that structures record creation, streamlines cross-departmental trial logging, and provides clear visibility into manufacturing trial workflows.",
      screenshots: ["/projects/project-02/sakthi-auto-cinematic.png"],
    },
  },
];
