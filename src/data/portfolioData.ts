export interface Project {
  id: string;
  title: string;
  website: string;
  category: string;
  stack: string[];
  description: string;
  highlights: string[];
  image: string;
  badge?: string;
  isPrimary?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  responsibilities: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: string; iconName?: string }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "Yash Verma",
  role: "Web Developer",
  subTitle: "WordPress | PHP/Laravel | React/Next.js | Node.js",
  headline: "I build fast, scalable, and conversion-focused web experiences.",
  summary:
    "Web Developer with 3 years of experience building and maintaining business websites and web applications across WordPress, PHP/Laravel, React.js, and Next.js. Experienced in REST APIs, database integration, responsive UI, debugging, performance optimization, SEO-friendly development, and production deployments.",
  experienceYears: "3+",
  location: "Delhi, India",
  phone: "+91 8766343405",
  email: "yashverma.u786@gmail.com",
  linkedIn: "https://www.linkedin.com/in/yash-verma-webdeveloper/",
  gitHub: "https://github.com/yashverma",
  education: "Bachelor of Computer Administration (BCA) — IGNOU (Pursuing)",
  avatar: "/assets/yash-verma.jpg",
  avatarSecondary: "/assets/yash-verma-2.jpg",
};

export const HIGHLIGHT_STATS = [
  { label: "Years Experience", value: "3+" },
  { label: "Production Platforms", value: "Enterprise & Client" },
  { label: "Core Stacks", value: "Next.js, Laravel, WordPress" },
  { label: "Client Satisfaction", value: "100%" },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "oodles-tech",
    role: "Associate Consultant Developer",
    company: "Oodles Technologies",
    location: "Gurugram, India",
    period: "Jan 2026 – Present",
    isCurrent: true,
    responsibilities: [
      "Contributed to enterprise dashboard applications through frontend fixes, feature enhancements, analytics modules, debugging, and cross-layer issue resolution.",
      "Worked across Sales Pipeline Analytics, Marketing Activity Analytics, and Project Sessions, including drill-down functionality and data-related fixes.",
      "Worked on Interactive Build modules across Core and Advanced environments.",
      "Supported client projects including CJCPA and Oodles.com with UI, performance, and deployment work.",
      "Supported WordPress and client web work alongside application development, focusing on responsive UI, troubleshooting, performance, and production support."
    ],
    technologies: [
      "React.js",
      "Next.js",
      "WordPress",
      "REST APIs",
      "Analytics Modules",
      "Performance Tuning",
      "Debugging"
    ]
  },
  {
    id: "jmt-travel",
    role: "Full-Stack Developer",
    company: "JMT Travel",
    location: "Delhi, India",
    period: "Aug 2023 – Dec 2025",
    isCurrent: false,
    responsibilities: [
      "Developed and maintained travel websites and web applications using WordPress, PHP, Laravel, React.js, and MySQL, including journeymytrip.com and jmttravel.in.",
      "Built and maintained features spanning tour packages, bookings, APIs, content management, payment integrations, database-driven functionality, and frontend/backend improvements.",
      "Handled WordPress website development, maintenance, debugging, responsive UI updates, technical SEO, and performance optimization.",
      "Managed deployment and hosting support, including SSL/DNS configuration, database backup/restore, and production troubleshooting.",
      "Built visaa.in using Next.js, React, TypeScript, and MongoDB, with dynamic country-wise content, lead capture, and API/database integration."
    ],
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "MongoDB",
      "WordPress",
      "PHP",
      "Laravel",
      "MySQL",
      "REST APIs",
      "Technical SEO"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "visaa-in",
    title: "Visa Immigration Platform",
    website: "https://visaa.in",
    category: "Next.js / Full-Stack",
    badge: "Primary Featured Project",
    isPrimary: true,
    stack: ["Next.js", "React", "TypeScript", "MongoDB", "Tailwind CSS"],
    description:
      "A production-oriented visa and immigration platform with dynamic country-specific content, lead management system, API integration, responsive UI, and high-performance SEO-friendly pages.",
    highlights: [
      "Dynamic country-wise visa guides with optimized SSR/SSG rendering",
      "Lead capture workflow with automated MongoDB storage and validation",
      "Responsive, accessible mobile-first interface designed for high conversion",
      "Technical SEO architecture ensuring maximum indexability and speed"
    ],
    image: "/assets/visaa-screenshot.png"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "TypeScript", level: "Proficient" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "HTML5 / CSS3", level: "Expert" },
      { name: "Angular", level: "Foundational" },
      { name: "Responsive UI", level: "Expert" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "PHP", level: "Advanced" },
      { name: "Laravel", level: "Advanced" },
      { name: "Node.js", level: "Proficient" },
      { name: "Express.js", level: "Proficient" },
      { name: "REST APIs", level: "Advanced" },
      { name: "API Integration", level: "Advanced" },
      { name: "Authentication", level: "Proficient" }
    ]
  },
  {
    category: "CMS & Web",
    skills: [
      { name: "WordPress", level: "Expert" },
      { name: "Custom Themes", level: "Advanced" },
      { name: "Custom Plugins", level: "Advanced" },
      { name: "Elementor", level: "Expert" },
      { name: "Technical SEO", level: "Advanced" },
      { name: "Core Web Vitals", level: "Advanced" }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", level: "Advanced" },
      { name: "MongoDB", level: "Proficient" },
      { name: "SQL Queries", level: "Advanced" },
      { name: "Database Schema", level: "Advanced" }
    ]
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "GitLab", level: "Proficient" },
      { name: "Linux / Server", level: "Proficient" },
      { name: "SSL & DNS Setup", level: "Advanced" },
      { name: "Hosting Management", level: "Advanced" },
      { name: "Postman API", level: "Advanced" },
      { name: "Vercel", level: "Advanced" }
    ]
  },
  {
    category: "Core Competencies",
    skills: [
      { name: "Problem Solving", level: "Expert" },
      { name: "Cross-layer Debugging", level: "Expert" },
      { name: "Performance Tuning", level: "Advanced" },
      { name: "Production Support", level: "Advanced" }
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "wordpress",
    title: "WordPress Development",
    description:
      "Custom WordPress themes, plugin development, Elementor builds, speed optimization, security hardening, and ongoing client website maintenance.",
    iconName: "Globe",
    tags: ["Custom Themes", "Plugins", "Elementor", "Speed Optimization"]
  },
  {
    id: "fullstack",
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications with robust backend APIs, secure database architectures, and intuitive, conversion-focused user interfaces.",
    iconName: "Layers",
    tags: ["React/Next.js", "Laravel/PHP", "REST APIs", "Databases"]
  },
  {
    id: "react-next",
    title: "React & Next.js Development",
    description:
      "High-performance single-page and multi-page web applications with Next.js App Router, SSR/SSG, TypeScript, and Tailwind CSS.",
    iconName: "Code2",
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"]
  },
  {
    id: "laravel",
    title: "PHP & Laravel Development",
    description:
      "Scalable MVC application development, custom backend business logic, payment gateway integrations, and complex data processing.",
    iconName: "Server",
    tags: ["Laravel", "PHP", "MySQL", "Authentication"]
  },
  {
    id: "api",
    title: "API Integration & Development",
    description:
      "Building and consuming RESTful APIs, third-party service connections, payment integrations, CRM links, and data synchronization.",
    iconName: "Cpu",
    tags: ["REST APIs", "Postman", "JSON", "Webhook"]
  },
  {
    id: "seo-performance",
    title: "Performance & Technical SEO",
    description:
      "Auditing and optimizing website loading speeds, Core Web Vitals, mobile responsiveness, structured schema, and search engine indexability.",
    iconName: "Zap",
    tags: ["Core Web Vitals", "Lighthouse", "Technical SEO", "SSL/DNS"]
  }
];

export const WORK_PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description: "Deep dive into business goals, technical requirements, target audience, and project scope."
  },
  {
    step: "02",
    title: "Plan",
    description: "Architecting the technical strategy, choosing the right stack, database schema, and component layout."
  },
  {
    step: "03",
    title: "Build",
    description: "Writing clean, modular, and maintainable code adhering to modern web development standards."
  },
  {
    step: "04",
    title: "Test",
    description: "Rigorously verifying responsive design, cross-browser compatibility, edge cases, and API integrity."
  },
  {
    step: "05",
    title: "Deploy",
    description: "Configuring production hosting, SSL certificates, DNS settings, and executing zero-downtime releases."
  },
  {
    step: "06",
    title: "Optimize",
    description: "Post-launch monitoring, performance tuning, technical SEO enhancements, and continuous improvement."
  }
];
