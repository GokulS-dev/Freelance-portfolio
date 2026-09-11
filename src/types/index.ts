export interface Project {
  id: string;
  index: string;
  title: string;
  client: string;
  category: string;
  description: string;
  location?: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  caseStudy?: {
    challenge?: string;
    solution?: string;
    outcome?: string;
    screenshots?: string[];
    clientReview?: {
      quote: string;
      author?: string;
      role?: string;
    };
  };
}

export interface Service {
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Technology {
  name: string;
  category: "frontend" | "backend" | "mobile" | "devops" | "database";
}
