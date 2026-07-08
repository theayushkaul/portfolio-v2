// Centralized content for the portfolio.
// Keeping this separate from components means editing your resume bullets
// later never requires touching any JSX/layout code.

export type Project = {
  title: string;
  snippet: string; // the little code-like line shown in the card header
  meta: string; // the secondary line under the snippet
  description: string;
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: "DevMind — AI Code Review Agent",
    snippet: "agent.run(diff)",
    meta: "security → logic → style → review_comment",
    description:
      "A LangGraph-powered code-review agent with diff parsing, RAG retrieval, and independently testable checker nodes for security, logic, and style findings.",
    tags: ["LangGraph", "Python", "RAG"],
    href: "https://github.com/theayushkaul",
  },
  {
    title: "Tendr — Modular Backend Architecture",
    snippet: "booking.created → payment → analytics",
    meta: "RBAC · OTP · Redis · Socket.IO",
    description:
      "Node.js and Express backend with MongoDB, Redis, role-based access control, OTP verification, and real-time messaging across three user roles.",
    tags: ["Node.js", "MongoDB", "Redis"],
    href: "https://github.com/theayushkaul",
  },
  {
    title: "Real-Time Chat Application",
    snippet: 'socket.emit("message:new")',
    meta: "typing indicators · read receipts · groups",
    description:
      "MERN and Socket.IO app supporting individual and group channels, typing indicators, read receipts, and low-latency messaging interactions.",
    tags: ["React", "Socket.IO", "Chakra UI"],
    href: "https://github.com/theayushkaul",
  },
  {
    title: "Tax Automation & PDF Intelligence",
    snippet: "parse(logs) → normalize(timestamps) → report.xlsx",
    meta: "Python · pandas · lxml · Claude API",
    description:
      "Automation and extraction pipelines for log reconciliation, XML validation, and tax PDF classification across structured enterprise workflows.",
    tags: ["Python", "pandas", "Claude API"],
    href: "https://github.com/theayushkaul",
  },
];

export type Job = {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
};

export const experience: Job[] = [
  {
    role: "Business Technology Analyst",
    company: "Deloitte",
    duration: "Aug 2025 – Present",
    location: "Hyderabad, India",
    description:
      "Building Python automation, XML extraction, PDF intelligence, and Alteryx ETL workflows for internal tax-practice data processing.",
  },
  {
    role: "Founding Engineer",
    company: "Tendr",
    duration: "Apr 2025 – Aug 2025",
    location: "Delhi, India",
    description:
      "Architected a modular Node.js–Express backend with MongoDB, Redis, RBAC, OTP verification, and real-time messaging via Socket.IO.",
  },
  {
    role: "Quant Management Trainee",
    company: "Algoritt Consulting",
    duration: "Jan 2025 – Apr 2025",
    location: "Gurugram, India",
    description:
      "Built stock analytics tooling, TypeScript Express APIs, and a Flask API spanning six database engines with automated endpoint validation.",
  },
  {
    role: "Frontend Developer",
    company: "Interain",
    duration: "Jul 2024 – Oct 2024",
    location: "New Delhi, India",
    description:
      "Contributed API work, analytics dashboard UI, and interface improvements for education and project-management workflows.",
  },
];

export type TechItem = {
  name: string;
};

export const techStack: TechItem[] = [
  { name: "React" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "Python" },
  { name: "AWS" },
  { name: "MongoDB" },
  { name: "Redis" },
  { name: "Docker" },
  { name: "LangChain" },
  { name: "PostgreSQL" },
];

export type SocialLink = {
  label: string;
  href: string;
};

export const stats = [
  { value: "380+", label: "DSA solved" },
  { value: "50", label: "state formats" },
  { value: "5", label: "agent nodes" },
];

export const profile = {
  name: "Ayush Kaul",
  email: "theayushkaul@gmail.com",
  eyebrow: "~/portfolio  main → available for SWE roles",
  heading: "Backend, AI agents & full-stack systems engineered by Ayush Kaul.",
  bio:
    "I build reliable backend systems, automation pipelines, and AI-assisted developer tooling with Python, Node.js, TypeScript, and data-heavy workflows. My work blends product-minded engineering with a bias for systems that are measurable, maintainable, and honest about what they do.",
  terminal: {
    prompt: "ayush@systems:~/work",
    whoamiLabel: "whoami",
    whoamiText:
      "Software developer focused on backend automation, distributed systems, and AI-powered code intelligence.",
    signalLabel: "current_signal",
    signal: [
      "Python automation reduced manual reconciliation time by ~80%",
      "LangGraph code-review agent with security, logic, and style nodes",
      "Node.js, MongoDB, Redis, Socket.IO backend architecture",
    ],
  },
  socials: [
    { label: "GitHub", href: "https://github.com/theayushkaul" },
    { label: "LinkedIn", href: "https://linkedin.com/in/theayushkaul" },
  ] as SocialLink[],
  sections: {
    toolkit: {
      eyebrow: "// technical_toolkit",
      heading: "Tools I use to ship systems, not just screens.",
    },
    projects: {
      eyebrow: "// selected_projects",
      heading: "Work that shows systems thinking across AI, backend, and automation.",
    },
    experience: {
      eyebrow: "// experience",
      heading: "A timeline of engineering roles across automation, backend, and product systems.",
    },
    contact: {
      eyebrow: "// start_conversation",
      heading: "Have a backend, AI, or automation problem worth solving?",
      subheading:
        "I'm open to entry-level software engineering opportunities and projects where thoughtful systems work matters.",
    },
  },
  footer: `© ${new Date().getFullYear()} Ayush Kaul · Built for clarity, systems signal, and honest engineering work.`,
};

