import { Project, Skill, Experience, Testimonial, PersonalInfo } from "@/types";

// Import project images
import resumeBuilderImg from "../../public/resume-builder.png";
import jumpEmployerImg from "../../public/jump-employer.png";
import jumpSeekerImg from "../../public/jump-seeker.png";
import starsAiImg from "../../public/stars-ai.png";
import theTutorImg from "../../public/the-tutor.png";
import wonderRawImg from "../../public/wonder-raw.png";
import firmSanadImg from "../../public/firm-sanad.png";
import simpleStudyImg from "../../public/simple-study.png";
import eqlizeImg from "../../public/eqlize-now.png";
import acrosoftImg from "../../public/acrosoft.png";

export const personalInfo: PersonalInfo = {
  name: "Shahzeb Jadoon",
  title: "Front-End Developer",
  subtitle: "React.js & MERN Stack Specialist",
  bio: "Passionate Front-End Developer with expertise in building modern, scalable web applications using React.js, Next.js, and the MERN stack. I specialize in creating stunning user interfaces with exceptional performance and user experience.",
  email: "shahzebjadoon0@gmail.com",
  location: "Lahore, Pakistan",
  github: "https://github.com/Jadoon9",
  linkedin: "https://www.linkedin.com/in/shahzeb-jadoon-8bb2949b/",
  twitter: "https://twitter.com/shahzeb_jadoon",
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Jump Resume Builder",
    description:
      "A comprehensive resume builder platform that helps job seekers create professional, ATS-friendly resumes with 100+ customizable templates and AI-powered suggestions.",
    longDescription:
      "A comprehensive resume builder platform that helps job seekers create professional, ATS-friendly resumes with 100+ customizable templates, AI-powered suggestions, real-time editing, and multi-profile management. Features include quick resume upload, live template preview, and free multi-page downloads.",
    image: resumeBuilderImg,
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Material UI"],
    liveUrl: "https://www.jumpresumebuilder.com/",
    featured: true,
  },
  {
    id: "2",
    title: "Jump Recruiter Employer",
    description:
      "An advanced recruitment platform designed for employers to post jobs, manage applications, and hire top talent efficiently with powerful analytics and candidate management tools.",
    longDescription:
      "An advanced recruitment platform designed for employers to post jobs, manage applications, and hire top talent efficiently. Features include candidate search, application tracking, interview scheduling, and comprehensive analytics dashboard.",
    image: jumpEmployerImg,
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Material UI"],
    liveUrl: "https://jumprecruiter.com/",
    featured: true,
  },
  {
    id: "3",
    title: "Jump Recruiter Seeker",
    description:
      "A modern job search platform that connects job seekers with opportunities, featuring advanced search filters, job alerts, and application tracking capabilities.",
    longDescription:
      "A modern job search platform that connects job seekers with opportunities, featuring advanced search filters, personalized job recommendations, job alerts, and application tracking capabilities to streamline the job search process.",
    image: jumpSeekerImg,
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Material UI"],
    liveUrl: "https://qa.jumprecruiter.com/",
    featured: true,
  },
  {
    id: "4",
    title: "StarsAi",
    description:
      "I am working as a full-stack developer on this startup project. StarsAI provides AI-powered solutions to simplify school operations and streamline educational management.",
    longDescription:
      "I am working as a full-stack developer on this startup project. StarsAI provides AI-powered solutions to simplify school operations and streamline educational management.",
    image: starsAiImg,
    technologies: ["React", "Node.js", "MongoDB", "Material ui", "Bootstrap"],
    liveUrl: "https://stars-ai.com/",
    featured: true,
  },
  {
    id: "5",
    title: "The Tutor",
    description:
      "TheTutor.me offers expert tutoring for personalized, flexible learning across various subjects.",
    longDescription:
      "TheTutor.me offers expert tutoring for personalized, flexible learning across various subjects.",
    image: theTutorImg,
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "ASP.net",
      "Tailwind",
      "Bootstrap",
      "Redux",
    ],
    liveUrl: "https://thetutor.me/",
    featured: true,
  },
  {
    id: "6",
    title: "Wonder Raw",
    description:
      "Wonder Raw offers customizable, on-demand apparel production using sustainable materials and eco-friendly practices for生成品​",
    longDescription:
      "Wonder Raw offers customizable, on-demand apparel production using sustainable materials and eco-friendly practices for clothing brands​",
    image: wonderRawImg,
    technologies: [
      "React",
      "Node.js",
      "MongoDb",
      "Firebase",
      "Tailwind",
      "Redux",
      "Formik",
      "ThreeJS",
    ],
    liveUrl: "https://store.wonder-raw.com/",
    featured: true,
  },
  {
    id: "7",
    title: "FirmSanad",
    description:
      "Firmsanad streamlines business setup and compliance in Saudi Arabia with tools for registration, licensing, and regulatory management.",
    longDescription:
      "Firmsanad streamlines business setup and compliance in Saudi Arabia with tools for registration, licensing, and regulatory management.",
    image: firmSanadImg,
    technologies: [
      "React",
      "Node.js",
      "ASP.net",
      "SQL",
      "Tailwind",
      "React query",
      "Redux",
    ],
    liveUrl: "https://firmsanad.com/",
    featured: true,
  },
  {
    id: "8",
    title: "Simple Studying",
    description:
      "SimpleStudying is an edtech platform offering simplified study materials, social networking, and collaborative tools to help students connect and enhance their learning.",
    longDescription:
      "SimpleStudying is an edtech platform offering simplified study materials, social networking, and collaborative tools to help students connect and enhance their learning.",
    image: simpleStudyImg,
    technologies: ["React", "Django", "SQL", "Tailwind", "Redux", "React PDF"],
    liveUrl: "https://simplestudying.com/",
    featured: true,
  },
  {
    id: "9",
    title: "Eqlize Now",
    description:
      "Eqlize Now offers a platform for businesses to manage employee equity, stock options, and compensation with a focus on transparency and compliance.",
    longDescription:
      "Eqlize Now offers a platform for businesses to manage employee equity, stock options, and compensation with a focus on transparency and compliance.",
    image: eqlizeImg,
    technologies: [
      "React",
      "Node.js",
      "MongoDb",
      "Tailwind",
      "Redux",
      "React Query",
      "Formik",
    ],
    liveUrl: "https://www.eqlizenow.com/",
    featured: true,
  },
  {
    id: "10",
    title: "Acrosoft.io",
    description:
      "Company portfolio website showcasing products and services using modern MERN stack architecture with responsive design and interactive UI components.",
    longDescription:
      "Developed company portfolio website showcasing products and services using modern MERN stack architecture. Implemented responsive design with interactive UI components and optimized performance for enterprise-grade solutions. Built with Next.js, TypeScript, Tailwind CSS, and Shadcn for a modern, scalable web presence.",
    image: acrosoftImg,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
      "MERN Stack",
    ],
    liveUrl: "https://acrosoft.io/",
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
    company: "Acrosoft",
    position: "Lead Front End Developer",
    duration: "July 2025 - Present",
    location: "Pakistan",
    description:
      "Leading the front-end development team, architecting scalable web applications and mentoring junior developers.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn"],
    current: true,
    responsibilities: [
      "Lead the front-end development team and oversee project architecture",
      "Architect scalable and maintainable web applications",
      "Mentor junior developers and conduct code reviews",
      "Implement modern front-end best practices and design patterns",
      "Collaborate with cross-functional teams to deliver high-quality products",
    ],
  },
  {
    id: "2",
    company: "StarsAI",
    position: "Senior ReactJS Developer",
    duration: "Oct 2024 - June 2025",
    location: "UAE (Freelance)",
    description:
      "Delivered ReactJS, Node.js, and GraphQL projects with end-to-end management, ensuring timely launches.",
    technologies: [
      "React",
      "Node.js",
      "GraphQL",
      "MongoDB",
      "Redux",
      "React Query",
      "TypeScript",
      "D3.js",
      "Chart.js",
    ],
    current: false,
    responsibilities: [
      "Delivered ReactJS, Node.js, and GraphQL projects with end-to-end management, ensuring timely launches.",
      "Enhanced scalability with Redux, React Query, and TypeScript.",
      "Boosted performance using lazy loading, GraphQL optimizations, and caching.",
      "Added AI features and visuals with D3.js, Chart.js, and TypeScript.",
      "Streamlined RESTful API and GraphQL integrations with MongoDB.",
    ],
  },
  {
    id: "3",
    company: "Samaritan Technologies",
    position: "ReactJS Developer",
    duration: "Dec 2022 - October 2024",
    location: "Lahore, Pakistan",
    description:
      "Built and modernized React applications with a focus on performance and user experience.",
    technologies: ["React", "Redux", "React Query"],
    current: false,
    responsibilities: [
      "Built and modernized React applications with a focus on performance and user experience.",
      "Improved scalability with Redux and React Query.",
      "Optimized load times with lazy loading and efficient component design.",
      "Collaborated with teams to ensure seamless API and data integration.",
      "Managed source code with Git for smooth collaboration.",
    ],
  },
  {
    id: "4",
    company: "JMM Innovations",
    position: "ReactJS Developer",
    duration: "April 2024 - Sep 2024",
    location: "Riyadh, Saudi Arabia (Outsourced)",
    description:
      "Developed responsive web applications for business solutions in Saudi Arabia.",
    technologies: ["React", "RESTful APIs"],
    current: false,
    responsibilities: [
      "Developed responsive web applications for business solutions in Saudi Arabia.",
      "Integrated RESTful APIs to enhance functionality and performance.",
      "Improved speed and efficiency with lazy loading and scalable designs.",
      "Collaborated across teams to meet user and project requirements.",
      "Managed version control efficiently with Git.",
    ],
  },
  {
    id: "5",
    company: "The Tutor",
    position: "ReactJS Developer",
    duration: "March 2023 - Jan 2024",
    location: "Dubai, UAE (Outsourced)",
    description:
      "Developed user-facing features using React and built reusable components.",
    technologies: ["React", "Next.js"],
    current: false,
    responsibilities: [
      "Developed user-facing features using React and built reusable components.",
      "Enhanced performance using server-side rendering (SSR) with Next.js.",
      "Integrated APIs seamlessly with user interfaces for reliability.",
      "Optimized SPAs for speed and SEO performance.",
      "Improved user experience with responsive design and scalable features.",
    ],
  },
  {
    id: "6",
    company: "NFinity Solutions",
    position: "Front-End Developer",
    duration: "Dec 2019 - Dec 2022",
    location: "Lahore, Pakistan",
    description:
      "Built responsive and accessible applications with modern tools and frameworks.",
    technologies: ["React", "AWS", "Git"],
    current: false,
    responsibilities: [
      "Built responsive and accessible applications with modern tools and frameworks.",
      "Upgraded legacy applications to meet current standards and improve functionality.",
      "Ensured timely deliveries by accurately estimating project requirements.",
      "Integrated user interfaces with AWS platforms for smooth deployment.",
      "Streamlined code management with Git workflows.",
    ],
  },
  {
    id: "7",
    company: "Hazara University",
    position: "BS Computer Science",
    duration: "2013-2017",
    location: "Manshera, Pakistan",
    description:
      "Completed a Bachelor of Science in Computer Science from Hazara University, gaining expertise in software development and modern computing technologies.",
    technologies: [],
    current: false,
    responsibilities: [
      "Completed a Bachelor of Science in Computer Science from Hazara University, gaining expertise in software development and modern computing technologies.",
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
