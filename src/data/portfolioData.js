import profilePhoto from "../assets/profile_photo.jpg";
import project1Img from "../assets/project-1.png";
import project2Img from "../assets/project-2.png";
import project3Img from "../assets/project-3.png";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaFigma,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaDribbble,
  FaExternalLinkAlt,
  FaStar,
  FaQuoteLeft,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiGraphql,
  SiRedux,
  SiVuedotjs,
  SiFlutter,
} from "react-icons/si";
import { HiCode, HiServer, HiCog } from "react-icons/hi";

// ===== Navigation =====
export const navLinks = [
  { name: "Home", href: "hero" },
  { name: "Tech Stack", href: "tech-stack" },
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Experience", href: "experience" },
  { name: "Testimonials", href: "testimonials" },
  { name: "Contact", href: "contact" },
];

// ===== Hero Section =====
export const heroData = {
  greeting: "Hello, I'm",
  name: "Mayank Kumar",
  titles: [
    "Full-Stack Developer",
    "UI/UX Designer",
    "Tech Innovator",
    "Open Source Contributor",
    "Problem Solver",
    "Backend Developer",
  ],
  description:
    "I craft pixel-perfect, performance-driven web experiences that blend cutting-edge technology with stunning design. Turning complex ideas into elegant digital solutions.",
  resumeLink: "#",
  socialLinks: [
    { icon: FaGithub, href: "https://github.com", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaDribbble, href: "https://dribbble.com", label: "Dribbble" },
  ],
};

// ===== About Section =====
export const aboutData = {
  image: profilePhoto,
  bio: [
    "I am Highly analytical and motivated Full-Stack Developer with hands-on expertise in React.js, React Native, Node.js, and modern web technologies. Passionate about building scalable, user-focused applications and turning ideas into impactful digital solutions. A fast learner with strong problem-solving skills and the ability to adapt quickly to emerging technologies. Seeking an entry-level Software Engineer / Full-Stack Developer role in a technology-driven organization where I can contribute my skills, grow professionally, and build innovative solutions.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers in the tech community.",
  ],
  stats: [
    { number: 50, suffix: "+", label: "Projects Completed" },
    { number: 30, suffix: "+", label: "Happy Clients" },
    { number: 5, suffix: "+", label: "Years Experience" },
    { number: 15, suffix: "K+", label: "Lines of Code" },
  ],
};

// ===== Skills Section =====
export const skillCategories = [
  {
    title: "Frontend",
    icon: HiCode,
    color: "#00d4ff",
    skills: [
      { name: "React.js", level: 95, icon: FaReact },
      { name: "TypeScript", level: 88, icon: SiTypescript },
      { name: "Next.js", level: 90, icon: SiNextdotjs },
      { name: "Tailwind CSS", level: 92, icon: SiTailwindcss },
      { name: "Vue.js", level: 78, icon: SiVuedotjs },
      { name: "Redux", level: 85, icon: SiRedux },
    ],
  },
  {
    title: "Backend",
    icon: HiServer,
    color: "#7c3aed",
    skills: [
      { name: "Node.js", level: 92, icon: FaNodeJs },
      { name: "Python", level: 85, icon: FaPython },
      { name: "Express", level: 80, icon: SiGraphql },
      { name: "MongoDB", level: 88, icon: SiMongodb },
      { name: "PostgreSQL", level: 82, icon: SiPostgresql },
      { name: "Firebase", level: 86, icon: SiFirebase },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: HiCog,
    color: "#00ff88",
    skills: [
      { name: "Git", level: 93, icon: FaGitAlt },
      { name: "Docker", level: 80, icon: FaDocker },
      { name: "AWS", level: 75, icon: FaAws },
      { name: "Figma", level: 88, icon: FaFigma },
      { name: "Flutter", level: 72, icon: SiFlutter },
      { name: "JavaScript", level: 95, icon: SiJavascript },
    ],
  },
];

// ===== Projects Section =====
export const projectCategories = ["All", "Web App", "SaaS", "Mobile", "AI/ML"];

export const projects = [
  {
    title: "Gyan-Setu",
    subtitle: "End-to-End Education Platform",
    description:
      "Developed a full-stack E-Learning and Coding Education Platform designed to provide students with an interactive environment for learning programming and technology skills. The platform includes user authentication, course management, coding practice, progress tracking, and responsive user interfaces. Built using React.js, Node.js, Express.js, and MongoDB, with RESTful APIs for seamless communication between the frontend and backend. Implemented secure and scalable features to deliver a smooth learning experience across devices.",
    image: project1Img,
    tags: ["React", "Node.js", "Redux", "MongoDB"],
    category: ["SaaS", "Web App"],
    github: "https://github.com/codeXmayank",
    live: "https://gyan-setu-frontend-eight.vercel.app",
    color: "#00d4ff",
  },
  {
    title: "FreshMart",
    subtitle:
      "Full-Stack E-Commerce Platform with Secure Shopping, Order Management & Admin Controls",

    description:
      "Developed a full-stack grocery eCommerce application using React.js, Vite, Tailwind CSS, Node.js, Express.js, and MongoDB. Implemented secure JWT-based authentication and role-based access control, product catalog and filtering, shopping cart, checkout with multiple payment options, and real-time order status tracking. Built a comprehensive admin dashboard for inventory, customer, order, revenue, and profit management, including complete CRUD functionality for products.",
    image: project2Img,
    tags: ["Express", "Vite", "TailwindCSS", "MongoDB"],
    category: "Web App",
    github:
      "https://github.com/codeXmayank/FreshMart-Grocery-full-stack-App-frontend-backend",
    live: "https://freshmart-frontend-rho.vercel.app",
    color: "#7c3aed",
  },
  // {
  //   title: "MindFlow",
  //   subtitle: "AI Mental Health Companion",
  //   description:
  //     "An intelligent mental health app using NLP to provide personalized mindfulness exercises, mood tracking, and AI-driven therapeutic conversations.",
  //   image:
  //     "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=500&fit=crop",
  //   tags: ["Flutter", "Python", "TensorFlow", "GCP"],
  //   category: "Mobile",
  //   github: "#",
  //   live: "#",
  //   color: "#00ff88",
  // },
  {
    title: "Mern-Shop",
    subtitle: "Grocery Delivery Platform",
    description:
      "Help individuals and businesses track and reduce their carbon footprint with gamified challenges, community leaderboards, and actionable sustainability tips.",
    image: project3Img,
    tags: ["React.js", "Express", "MongoDB", "Node"],
    category: "Web App",
    github: "#",
    live: "#",
    color: "#00d4ff",
  },
  {
    title: "DataLens",
    subtitle: "Business Intelligence Platform",
    description:
      "Transform raw data into actionable insights with interactive dashboards, automated reporting, and ML-powered predictive analytics for enterprise decision-making.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    tags: ["React", "D3.js", "Python", "PostgreSQL"],
    category: "AI/ML",
    github: "#",
    live: "#",
    color: "#ff6b6b",
  },

  // {
  //   title: "SynthWave",
  //   subtitle: "AI Music Generator",
  //   description:
  //     "Create unique music tracks using AI. Choose genres, moods, and instruments — the neural network composes original pieces in seconds. Export in multiple formats.",
  //   image:
  //     "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=500&fit=crop",
  //   tags: ["React", "Python", "PyTorch", "AWS"],
  //   category: "AI/ML",
  //   github: "#",
  //   live: "#",
  //   color: "#7c3aed",
  // },
];

// ===== Experience Section =====
export const experiences = [
  {
    role: "Demo Card ",
    company: "I have no Experience as a Profession",
    period: "Jan 2025 – Present",
    description:
      "Leading the development of a SaaS platform serving 100K+ users. Architecting microservices with Node.js and React, implementing CI/CD pipelines, and mentoring a team of 6 developers.",
    technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
    color: "#00d4ff",
  },
  {
    role: "Full-Stack Developer",
    company: "As Localhost",
    period: "Jun 2022 – Dec 2023",
    description:
      "Built responsive web applications for enterprise clients. Developed a real-time collaboration tool that improved team productivity by 40%. Led frontend architecture decisions.",
    technologies: ["Next.js", "TypeScript", "GraphQL", "MongoDB"],
    color: "#7c3aed",
  },
  {
    role: "Frontend Developer",
    company: "InnoWave Digital",
    period: "Mar 2021 – May 2022",
    description:
      "Designed and developed pixel-perfect UIs for 15+ client projects. Introduced component-driven development with Storybook, reducing design-to-code time by 30%.",
    technologies: ["React", "Redux", "TailwindCSS", "Figma"],
    color: "#00ff88",
  },
  {
    role: "Junior Developer & Intern",
    company: "CodeBridge Academy",
    period: "Aug 2020 – Feb 2021",
    description:
      "Started my professional journey building educational platform features. Created interactive coding challenges and real-time code evaluation systems used by 5K+ students.",
    technologies: ["JavaScript", "Python", "Firebase", "HTML/CSS"],
    color: "#ff6b6b",
  },
];

// ===== Testimonials Section =====
export const testimonials = [
  {
    name: "Priya Sharma",
    role: "CEO, TechNova Solutions",
    avatar:
      "https://ui-avatars.com/api/?name=Priya+Sharma&background=00d4ff&color=fff&size=128",
    content:
      "Mayank is an exceptional developer who consistently delivers beyond expectations. His ability to understand complex requirements and translate them into elegant solutions is remarkable. He's been instrumental in scaling our platform to 100K+ users.",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "CTO, PixelCraft Studios",
    avatar:
      "https://ui-avatars.com/api/?name=Rahul+Mehta&background=7c3aed&color=fff&size=128",
    content:
      "Working with Mayank was a game-changer for our team. His deep understanding of both frontend and backend technologies, combined with his eye for design, made him invaluable. The collaboration tool he built increased our team productivity by 40%.",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    role: "Product Manager, InnoWave",
    avatar:
      "https://ui-avatars.com/api/?name=Sneha+Patel&background=00ff88&color=fff&size=128",
    content:
      "Mayank brought our design visions to life with pixel-perfect precision. His proactive approach to problem-solving and his ability to meet tight deadlines without compromising quality set him apart. Highly recommend for any frontend project.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Founder, StartupLab India",
    avatar:
      "https://ui-avatars.com/api/?name=Vikram+Singh&background=ff6b6b&color=fff&size=128",
    content:
      "Mayank helped us build our MVP in record time. His technical expertise and startup mindset were exactly what we needed. He didn't just write code — he contributed to product strategy and user experience decisions that shaped our success.",
    rating: 5,
  },
];

// ===== Contact Section =====
export const contactData = {
  email: "sainimayank4848@gmail.com",
  phone: "+91 70558 93134",
  location: "New Delhi, India",
  socialLinks: [
    {
      icon: FaGithub,
      href: "https://github.com/codeXmayank",
      label: "GitHub",
      color: "#ffffff",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "#0077b5",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com",
      label: "Twitter",
      color: "#1da1f2",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com",
      label: "Instagram",
      color: "#e4405f",
    },
    {
      icon: FaDribbble,
      href: "https://dribbble.com",
      label: "Dribbble",
      color: "#ea4c89",
    },
  ],
};
