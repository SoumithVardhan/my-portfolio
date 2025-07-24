import ReactIcon from "../assets/react.svg";
import JavaScriptIcon from "../assets/JavaScript.svg";
import HTMLIcon from "../assets/HTML5.svg";
import CSSIcon from "../assets/CSS3.svg";
import BootstrapIcon from "../assets/Bootstrap.svg";
import TailwindIcon from "../assets/Tailwind CSS.svg";
import ExpressIcon from "../assets/Express.svg";
import MongoDBIcon from "../assets/MongoDB.svg";
import TypeScriptIcon from "../assets/TypeScript.svg";
import GitIcon from "../assets/Git.svg";
import GitHubIcon from "../assets/GitHub.svg";
import NextJsIcon from "../assets/Next.js.svg";
import NodeJsIcon from "../assets/Node.js.svg";

const skills = [
  // Core Programming Languages
  {
    id: 1,
    name: "JavaScript",
    type: "Programming Language",
    image: JavaScriptIcon,
    level: "Advanced",
    category: "Core"
  },
  {
    id: 2,
    name: "TypeScript",
    type: "Programming Language", 
    image: TypeScriptIcon,
    level: "Advanced",
    category: "Core"
  },
  {
    id: 3,
    name: "Python",
    type: "Programming Language",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    level: "Intermediate",
    category: "Core"
  },
  {
    id: 4,
    name: "C/C++",
    type: "Programming Language",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    level: "Advanced",
    category: "Core"
  },
  {
    id: 5,
    name: "Java",
    type: "Programming Language",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    level: "Intermediate",
    category: "Core"
  },
  {
    id: 6,
    name: "SQL",
    type: "Query Language",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    level: "Advanced",
    category: "Database"
  },

  // Frontend Frameworks & Libraries
  {
    id: 7,
    name: "React",
    type: "JavaScript Library",
    image: ReactIcon,
    level: "Advanced",
    category: "Frontend"
  },
  {
    id: 8,
    name: "Next.js",
    type: "React Framework",
    image: NextJsIcon,
    level: "Advanced",
    category: "Frontend"
  },
  {
    id: 9,
    name: "Vite",
    type: "Build Tool",
    image: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23646CFF' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/%3E%3C/svg%3E",
    level: "Advanced",
    category: "Frontend"
  },
  {
    id: 10,
    name: "Tailwind CSS",
    type: "CSS Framework",
    image: TailwindIcon,
    level: "Advanced",
    category: "Frontend"
  },
  {
    id: 11,
    name: "Framer Motion",
    type: "Animation Library",
    image: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23FF006B' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 0h16v8H4V0zm0 8h8v8H4V8zm8 8h8v8h-8v-8z'/%3E%3C/svg%3E",
    level: "Advanced",
    category: "Frontend"
  },
  {
    id: 12,
    name: "Material-UI",
    type: "UI Framework",
    image: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%230081CB' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/%3E%3C/svg%3E",
    level: "Advanced",
    category: "Frontend"
  },
  {
    id: 13,
    name: "Three.js",
    type: "3D Library",
    image: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23000000' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.38 0L12 6.77 23.62 0 12 12.36.38 0zm0 12.36L12 19.13l11.62-6.77L12 24 .38 12.36z'/%3E%3C/svg%3E",
    level: "Intermediate",
    category: "Frontend"
  },
  {
    id: 14,
    name: "GSAP",
    type: "Animation Library",
    image: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%2388CE02' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z'/%3E%3C/svg%3E",
    level: "Intermediate",
    category: "Frontend"
  },
  {
    id: 15,
    name: "Chart.js",
    type: "Charting Library",
    image: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23FF6384' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 3v18h18V3H3zm16 16H5V5h14v14z'/%3E%3Crect x='7' y='11' width='2' height='6' fill='%23FF6384'/%3E%3Crect x='11' y='9' width='2' height='8' fill='%2336A2EB'/%3E%3Crect x='15' y='7' width='2' height='10' fill='%23FFCE56'/%3E%3C/svg%3E",
    level: "Intermediate",
    category: "Frontend"
  },

  // Backend & Runtime
  {
    id: 16,
    name: "Node.js",
    type: "JavaScript Runtime",
    image: NodeJsIcon,
    level: "Advanced",
    category: "Backend"
  },
  {
    id: 17,
    name: "Express.js",
    type: "Web Framework",
    image: ExpressIcon,
    level: "Advanced",
    category: "Backend"
  },
  {
    id: 18,
    name: "Hono",
    type: "Web Framework",
    image: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23E36002' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/%3E%3C/svg%3E",
    level: "Intermediate",
    category: "Backend"
  },
  {
    id: 19,
    name: "Socket.io",
    type: "Real-time Library",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    level: "Advanced",
    category: "Backend"
  },
  {
    id: 20,
    name: "Django",
    type: "Python Framework",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    level: "Intermediate",
    category: "Backend"
  },

  // Databases & Storage
  {
    id: 21,
    name: "MongoDB",
    type: "NoSQL Database",
    image: MongoDBIcon,
    level: "Advanced",
    category: "Database"
  },
  {
    id: 22,
    name: "PostgreSQL",
    type: "SQL Database",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    level: "Advanced",
    category: "Database"
  },
  {
    id: 23,
    name: "Prisma",
    type: "ORM",
    image: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%232D3748' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.807 18.285L13.553 2.018c-.396-.781-1.71-.781-2.106 0L3.193 18.285c-.405.8.044 1.715.895 1.715h16.825c.85 0 1.299-.915.894-1.715z'/%3E%3C/svg%3E",
    level: "Advanced",
    category: "Database"
  },

  // AI/ML & APIs
  {
    id: 24,
    name: "OpenAI API",
    type: "AI Service",
    image: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23412991' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.078 6.078 0 0 0 6.51 2.9A5.991 5.991 0 0 0 12 21.5a6.013 6.013 0 0 0 5.232-3.138 5.988 5.988 0 0 0 3.997-2.9 6.006 6.006 0 0 0-.747-7.641z'/%3E%3C/svg%3E",
    level: "Advanced",
    category: "AI/ML"
  },
  {
    id: 25,
    name: "Ollama",
    type: "Local LLM",
    image: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%233399FF' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2L2 7L12 12L22 7L12 2Z'/%3E%3Cpath d='M2 17L12 22L22 17'/%3E%3Cpath d='M2 12L12 17L22 12'/%3E%3C/svg%3E",
    level: "Intermediate",
    category: "AI/ML"
  },
  {
    id: 26,
    name: "Mastra",
    type: "AI Framework",
    image: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%236366F1' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'/%3E%3Cpath d='M9 9H15V15H9Z'/%3E%3C/svg%3E",
    level: "Advanced",
    category: "AI/ML"
  },
  {
    id: 27,
    name: "Nosana LLM",
    type: "Decentralized AI",
    image: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%236366F1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2L2 7L12 12L22 7L12 2Z'/%3E%3Cpath d='M2 17L12 22L22 17'/%3E%3Cpath d='M2 12L12 17L22 12'/%3E%3C/svg%3E",
    level: "Intermediate",
    category: "AI/ML"
  },

  // Cloud & DevOps
  {
    id: 28,
    name: "Docker",
    type: "Containerization",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    level: "Advanced",
    category: "DevOps"
  },
  {
    id: 29,
    name: "AWS",
    type: "Cloud Platform",
    image: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23FF9900' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.048.063.064.127.064.175 0 .08-.048.16-.144.24l-.48.32c-.064.048-.128.064-.192.064-.08 0-.16-.04-.24-.104a2.729 2.729 0 0 1-.287-.375 6.47 6.47 0 0 1-.247-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.595-.574-.391-.383-.583-.894-.583-1.533 0-.678.239-1.23.718-1.647.479-.415 1.111-.623 1.901-.623.263 0 .535.016.823.056.287.032.583.088.886.151v-.503c0-.527-.111-.895-.327-1.118-.223-.207-.6-.319-1.128-.319-.239 0-.487.032-.743.08-.255.047-.51.112-.75.2-.112.047-.191.08-.24.095-.047.016-.08.024-.095.024-.08 0-.12-.063-.12-.175v-.27c0-.096.016-.168.056-.216.04-.048.112-.096.2-.144.239-.127.526-.231.863-.32.336-.08.695-.12 1.078-.12.830 0 1.436.191 1.827.574.383.383.575.966.575 1.755v2.315zm-3.259 1.229c.255 0 .518-.048.798-.144.279-.096.526-.256.726-.48.12-.144.207-.304.247-.48.04-.175.064-.383.064-.615v-.295a6.56 6.56 0 0 0-.687-.112 5.896 5.896 0 0 0-.702-.048c-.495 0-.863.096-1.118.287-.247.191-.375.471-.375.838 0 .335.08.575.239.734.159.16.399.24.71.24l.098.015z'/%3E%3C/svg%3E",
    level: "Intermediate",
    category: "DevOps"
  },
  {
    id: 30,
    name: "Cloudflare",
    type: "Edge Computing",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
    level: "Advanced",
    category: "DevOps"
  },
  {
    id: 31,
    name: "Cloudflare Workers",
    type: "Serverless Computing",
    image: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23F38020' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.333 12.765c0-.618.2-1.176.533-1.647l2.8-4.2c.4-.6 1.067-1 1.8-1h3.067c.733 0 1.4.4 1.8 1l2.8 4.2c.333.471.533 1.029.533 1.647 0 1.647-1.333 2.941-3 2.941s-3-1.294-3-2.941c0-.618-.2-1.176-.533-1.647l-.8-1.2c-.133-.2-.333-.3-.533-.3s-.4.1-.533.3l-.8 1.2c-.333.471-.533 1.029-.533 1.647 0 1.647-1.333 2.941-3 2.941s-3-1.294-3-2.941z'/%3E%3C/svg%3E",
    level: "Advanced",
    category: "DevOps"
  },

  // Development Tools
  {
    id: 32,
    name: "Git",
    type: "Version Control",
    image: GitIcon,
    level: "Advanced",
    category: "Tools"
  },
  {
    id: 33,
    name: "GitHub",
    type: "Code Hosting Platform",
    image: GitHubIcon,
    level: "Advanced",
    category: "Tools"
  },
  {
    id: 34,
    name: "VS Code",
    type: "IDE",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    level: "Advanced",
    category: "Tools"
  },
  {
    id: 35,
    name: "MongoDB Compass",
    type: "Database GUI",
    image: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%234DB33D' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E",
    level: "Advanced",
    category: "Tools"
  },
  {
    id: 36,
    name: "Postman",
    type: "API Testing",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    level: "Advanced",
    category: "Tools"
  },

  // Authentication & Security
  {
    id: 37,
    name: "JWT",
    type: "Token Authentication",
    image: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23000000' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 1L21 5V11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5L12 1Z'/%3E%3C/svg%3E",
    level: "Advanced",
    category: "Backend"
  },
  {
    id: 38,
    name: "OAuth 2.0",
    type: "Authorization Protocol",
    image: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%234285F4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 1L21 5V11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5L12 1Z'/%3E%3C/svg%3E",
    level: "Advanced",
    category: "Backend"
  },

  // State Management & Utilities
  {
    id: 39,
    name: "Zustand",
    type: "State Management",
    image: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23FF6B35' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2L2 7L12 12L22 7L12 2Z'/%3E%3Cpath d='M2 17L12 22L22 17'/%3E%3Cpath d='M2 12L12 17L22 12'/%3E%3C/svg%3E",
    level: "Advanced",
    category: "Frontend"
  },
  {
    id: 40,
    name: "Recoil",
    type: "State Management",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: "Intermediate",
    category: "Frontend"
  },
  {
    id: 41,
    name: "Axios",
    type: "HTTP Client",
    image: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%235A29E4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2L2 7L12 12L22 7L12 2Z'/%3E%3Cpath d='M2 17L12 22L22 17'/%3E%3Cpath d='M2 12L12 17L22 12'/%3E%3C/svg%3E",
    level: "Advanced",
    category: "Frontend"
  },
  {
    id: 42,
    name: "Zod",
    type: "Schema Validation",
    image: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%233068B7' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 1L21 5V11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5L12 1Z'/%3E%3C/svg%3E",
    level: "Advanced",
    category: "Backend"
  },

  // Additional Core Technologies
  {
    id: 43,
    name: "HTML5",
    type: "Markup Language",
    image: HTMLIcon,
    level: "Advanced",
    category: "Frontend"
  },
  {
    id: 44,
    name: "CSS3",
    type: "Styling Language",
    image: CSSIcon,
    level: "Advanced",
    category: "Frontend"
  },

  // Blockchain & Gaming
  {
    id: 45,
    name: "Blockchain",
    type: "Distributed Technology",
    image: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23F7931A' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2L3 7L12 12L21 7L12 2Z'/%3E%3Cpath d='M3 17L12 22L21 17'/%3E%3Cpath d='M3 12L12 17L21 12'/%3E%3C/svg%3E",
    level: "Intermediate",
    category: "Specialized"
  },
  {
    id: 46,
    name: "Turbo Repo",
    type: "Monorepo Tool",
    image: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23EF4444' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2L2 7L12 12L22 7L12 2Z'/%3E%3Cpath d='M2 17L12 22L22 17'/%3E%3Cpath d='M2 12L12 17L22 12'/%3E%3C/svg%3E",
    level: "Advanced",
    category: "Specialized"
  },

  // Advanced Libraries
  {
    id: 47,
    name: "Lottie",
    type: "Animation Library",
    image: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%2300D4AA' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z'/%3E%3C/svg%3E",
    level: "Intermediate",
    category: "Frontend"
  },
  {
    id: 48,
    name: "React Hot Toast",
    type: "Notification Library",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: "Advanced",
    category: "Frontend"
  }
];

export default skills;