export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: "frontend" | "backend" | "tools" | "libraries";
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  current: boolean;
  location?: string;
  website?: string;
  responsibilities?: string[];
  achievements?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
