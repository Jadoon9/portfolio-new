import { Project, Skill, Experience, Testimonial } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with modern UI and advanced features.",
    longDescription:
      "Built a comprehensive e-commerce platform using Next.js, TypeScript, and Tailwind CSS. Features include user authentication, payment processing, inventory management, and admin dashboard.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
    githubUrl: "https://github.com/shahzebjadoon/ecommerce",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates.",
    longDescription:
      "Developed a task management application with real-time collaboration features using React, Node.js, and Socket.io. Includes drag-and-drop functionality, team management, and progress tracking.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    githubUrl: "https://github.com/shahzebjadoon/taskmanager",
    liveUrl: "https://taskmanager-demo.vercel.app",
    featured: true,
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with location-based forecasts.",
    longDescription:
      "Created a responsive weather dashboard that provides detailed weather information, forecasts, and interactive maps. Built with modern React patterns and integrated with multiple weather APIs.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Chart.js", "OpenWeather API", "CSS Modules"],
    githubUrl: "https://github.com/shahzebjadoon/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    featured: false,
  },
  {
    id: "4",
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website with smooth animations.",
    longDescription:
      "Designed and developed a personal portfolio website showcasing projects, skills, and experience. Features include dark mode, smooth animations, and mobile-first responsive design.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/shahzebjadoon/portfolio",
    liveUrl: "https://shahzebjadoon.dev",
    featured: true,
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 5, category: "frontend", icon: "⚛️" },
  { name: "Next.js", level: 5, category: "frontend", icon: "▲" },
  { name: "TypeScript", level: 4, category: "frontend", icon: "🔷" },
  { name: "JavaScript", level: 5, category: "frontend", icon: "🟨" },
  { name: "HTML5", level: 5, category: "frontend", icon: "🌐" },
  { name: "CSS3", level: 5, category: "frontend", icon: "🎨" },
  { name: "Tailwind CSS", level: 5, category: "frontend", icon: "💨" },
  { name: "SASS/SCSS", level: 4, category: "frontend", icon: "💎" },

  // Libraries & Frameworks
  { name: "Framer Motion", level: 4, category: "libraries", icon: "🎬" },
  { name: "Redux", level: 4, category: "libraries", icon: "🔄" },
  { name: "React Query", level: 4, category: "libraries", icon: "🔍" },
  { name: "Chart.js", level: 3, category: "libraries", icon: "📊" },
  { name: "Three.js", level: 3, category: "libraries", icon: "🎮" },

  // Tools
  { name: "Git", level: 4, category: "tools", icon: "📝" },
  { name: "Webpack", level: 3, category: "tools", icon: "📦" },
  { name: "Vite", level: 4, category: "tools", icon: "⚡" },
  { name: "ESLint", level: 4, category: "tools", icon: "🔍" },
  { name: "Prettier", level: 4, category: "tools", icon: "✨" },
  { name: "Figma", level: 3, category: "tools", icon: "🎨" },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "TechCorp Solutions",
    position: "Senior Frontend Developer",
    duration: "2022 - Present",
    location: "San Francisco, CA",
    website: "https://techcorp.com",
    description:
      "Leading frontend development for multiple client projects, mentoring junior developers, and implementing modern React patterns and best practices.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
    current: true,
    responsibilities: [
      "Lead frontend development for enterprise-level applications",
      "Mentor junior developers and conduct code reviews",
      "Implement modern React patterns and best practices",
      "Collaborate with UX/UI designers and backend teams",
      "Optimize application performance and user experience",
    ],
    achievements: [
      "Improved application performance by 40% through code optimization",
      "Led a team of 5 developers on a major client project",
      "Implemented design system that reduced development time by 30%",
      "Successfully delivered 15+ projects on time and within budget",
    ],
  },
  {
    id: "2",
    company: "Digital Innovations Inc.",
    position: "Frontend Developer",
    duration: "2020 - 2022",
    location: "New York, NY",
    website: "https://digitalinnovations.com",
    description:
      "Developed responsive web applications and collaborated with design teams to implement pixel-perfect UI components.",
    technologies: ["React", "JavaScript", "CSS3", "SASS", "Webpack"],
    current: false,
    responsibilities: [
      "Developed responsive web applications using React",
      "Collaborated with design teams to implement UI components",
      "Participated in agile development processes",
      "Maintained and updated existing applications",
      "Worked with REST APIs and integrated third-party services",
    ],
    achievements: [
      "Built 10+ responsive web applications from scratch",
      "Reduced bundle size by 25% through code optimization",
      "Improved user engagement by 35% with better UX",
      "Mentored 2 junior developers and helped them grow",
    ],
  },
  {
    id: "3",
    company: "StartupXYZ",
    position: "Junior Frontend Developer",
    duration: "2019 - 2020",
    location: "Austin, TX",
    website: "https://startupxyz.com",
    description:
      "Built user interfaces for web applications and learned modern frontend development practices.",
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
    current: false,
    responsibilities: [
      "Built user interfaces for web applications",
      "Learned modern frontend development practices",
      "Collaborated with senior developers on projects",
      "Participated in code reviews and team meetings",
      "Maintained and updated existing codebases",
    ],
    achievements: [
      "Successfully completed 8+ frontend projects",
      "Learned React and modern JavaScript frameworks",
      "Improved code quality through consistent practices",
      "Contributed to team knowledge sharing sessions",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp Solutions",
    content:
      "Shahzeb is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Lead Designer",
    company: "Digital Innovations Inc.",
    content:
      "Working with Shahzeb has been a pleasure. He understands design requirements perfectly and brings them to life with clean, efficient code.",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "CTO",
    company: "StartupXYZ",
    content:
      "Shahzeb's technical expertise and collaborative approach make him an invaluable team member. He always goes above and beyond.",
  },
];
