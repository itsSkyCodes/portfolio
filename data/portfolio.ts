/**
 * Portfolio content strictly aligned with Shyam Kumar Yadav's latest resume.
 * Single source of truth for portfolio presentation.
 */

export const hero = {
  eyebrow: "Full-Stack Software Engineer",
  heading: "I build production systems that scale from idea to impact.",
  headingAccent: "impact.",
  supporting:
    "Full-Stack Software Engineer specializing in Node.js, TypeScript, NestJS, and Generative AI.",
  summary:
    "4+ years of experience designing, building, and owning production systems end-to-end — from database schema to deployment. Shipped multi-tenant SaaS (20+ tenant orgs, 99%+ uptime), healthcare, inventory/ERP, and production GenAI pipelines with 50–60% API latency optimization.",
} as const;

export const systemFlow = [
  { label: "API", detail: "NestJS · REST" },
  { label: "Database", detail: "PostgreSQL · TypeORM" },
  { label: "Queue", detail: "Redis · BullMQ" },
  { label: "AI", detail: "CrewAI · Pinecone RAG" },
  { label: "Client", detail: "Angular · React · Product surfaces" },
] as const;

export const metrics = [
  {
    id: "years",
    end: 4,
    suffix: "+",
    label: "Years Experience",
    count: true,
  },
  {
    id: "tenants",
    end: 20,
    suffix: "+",
    label: "Tenant Organizations",
    count: true,
  },
  {
    id: "uptime",
    end: 99,
    suffix: "%+",
    label: "Platform Uptime",
    count: true,
  },
  {
    id: "performance",
    display: "50–60%",
    label: "API Response-Time Reduction",
    count: false,
  },
  {
    id: "team",
    end: 3,
    suffix: "",
    label: "Engineers Led",
    count: true,
  },
] as const;

export const about = {
  title: "Engineering production software from schema to deployment.",
  paragraphs: [
    "Full-stack software engineer with 4+ years of experience designing, building, and owning production systems end-to-end — from database schema to deployment.",
    "I took a multi-tenant career-coaching SaaS platform (MyRelma) from zero to production and now lead its 3-person engineering team, supporting 20+ tenant organizations with 99%+ uptime maintained post-launch.",
    "My work spans healthcare, inventory/ERP, and Generative AI-powered career tooling — including LLM orchestration (CrewAI), OpenAI integration, and RAG pipelines (Pinecone) using TypeScript, NestJS, React, PostgreSQL, and Python/FastAPI.",
    "A strong advocate for data-driven engineering, I achieved a 50–60% reduction in API response times through targeted database query optimization and eliminating application-level performance bottlenecks.",
  ],
  domains: [
    "Multi-Tenant SaaS",
    "Generative AI & RAG",
    "Inventory & ERP Systems",
    "Healthcare / Diagnostics",
    "Real-Time Booking APIs",
  ],
} as const;

export const workSurface = [
  {
    label: "Architecture",
    detail: "Zero-to-production ownership from data models to API contracts",
  },
  {
    label: "Backend",
    detail: "NestJS, Node.js, Hapi.js, AdonisJS, REST APIs, auth & isolation",
  },
  {
    label: "Processing",
    detail: "Redis, BullMQ, WebSockets, Socket.io, SSE, real-time queues",
  },
  {
    label: "Intelligence",
    detail: "CrewAI agentic orchestration, OpenAI LLMs, Pinecone RAG",
  },
  {
    label: "Operations",
    detail: "Cloudflare R2, AWS S3, Docker, PM2, GitHub Actions (CI/CD)",
  },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Backend & Frameworks",
    items: ["Node.js", "NestJS", "Hapi.js", "AdonisJS", "REST APIs"],
  },
  {
    title: "Frontend",
    items: ["Angular", "React", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Databases & ORM",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "TypeORM", "Prisma"],
  },
  {
    title: "Queues & Real-Time",
    items: ["BullMQ", "Socket.io", "Pusher", "Server-Sent Events (SSE)", "WebSockets"],
  },
  {
    title: "Cloud, Auth & DevOps",
    items: ["Cloudflare R2", "AWS S3", "JWT", "OAuth 2.0", "GitHub Actions (CI/CD)", "PM2", "Docker"],
  },
  {
    title: "Generative AI",
    items: ["LLM Integration (OpenAI)", "Agentic Orchestration (CrewAI)", "RAG Pipelines (Pinecone)", "Prompt Engineering"],
  },
  {
    title: "AI-Assisted Development Tools",
    items: ["Cursor", "Claude Code", "Antigravity"],
  },
  {
    title: "Other Integrations",
    items: ["Google APIs (Auth, Gmail, Contacts, Calendar, Task)", "Twilio", "Firebase", "FHIR", "DICOM"],
  },
] as const;

export const experience = {
  company: "Luminoguru Pvt. Ltd.",
  title: "Software Engineer",
  promotion: "Promoted from Associate Software Engineer",
  dates: "Jan 2022 – Present",
  location: "Mohali, Punjab",
  achievements: [
    {
      id: "myrelma",
      title: "MyRelma — Multi-Tenant SaaS Platform",
      summary:
        "Took a multi-tenant career-coaching SaaS platform from zero to production and now lead its 3-person engineering team.",
      highlights: [
        "Owned architecture end-to-end and led the 3-person engineering team",
        "Designed NestJS REST APIs and PostgreSQL/TypeORM data modeling",
        "Implemented Redis/BullMQ background job processing end-to-end",
        "Onboarded and supported 20+ tenant organizations",
        "Maintained 99%+ platform uptime post-launch",
      ],
      technologies: ["NestJS", "PostgreSQL", "TypeORM", "Redis", "BullMQ"],
    },
    {
      id: "ims-link-perf",
      title: "IMS Link — API Performance Optimization",
      summary:
        "Cut IMS Link API response times by 50–60% through targeted database and architectural optimization.",
      highlights: [
        "Measured by profiling results and production latency metrics",
        "Optimized complex MySQL queries",
        "Eliminated application-level performance bottlenecks",
      ],
      callout: {
        label: "50–60% API response-time reduction",
        detail:
          "Achieved through PostgreSQL/MySQL query optimization and eliminating application-level performance bottlenecks.",
      },
    },
    {
      id: "resume-assistant",
      title: "Generative AI Resume Assistant",
      summary:
        "Built a production Generative AI resume-optimization pipeline that automates parsing, rewriting, and auditing.",
      highlights: [
        "Built with FastAPI, CrewAI, OpenAI, and Pinecone RAG",
        "Automated resume parsing and data extraction",
        "ATS-optimized content rewriting",
        "Automated audit report generation",
        "Launched as a live production AI-powered resume assistant",
      ],
      technologies: ["Python", "FastAPI", "CrewAI", "OpenAI", "Pinecone", "RAG"],
      featured: true,
    },
    {
      id: "ims-link-fullstack",
      title: "IMS Link — Full-Stack Inventory Management",
      summary:
        "Developed and delivered a full-stack inventory management system with external ERP integrations.",
      highlights: [
        "Built responsive Angular frontend and Hapi.js/MySQL APIs",
        "Supported receiving, stocking, picking, and serial-number tracking",
        "Integrated with Intuitive ERP and Juki Fortress systems",
      ],
      technologies: ["Angular", "Hapi.js", "MySQL"],
      integrations: ["Intuitive ERP", "Juki Fortress"],
    },
  ],
} as const;

export const projects = [
  {
    id: "myrelma",
    title: "MyRelma",
    category: "Multi-Tenant SaaS",
    dates: "Jan 2022 – Present",
    description:
      "A multi-tenant career-coaching SaaS platform built from zero to production, supporting tenant isolation, high availability, and background workflows.",
    purpose:
      "Deliver a robust multi-tenant coaching infrastructure with high uptime and seamless onboarding for enterprise organizations.",
    capabilities: [
      "Multi-tenant architecture with secure tenant data isolation",
      "Onboarded and supported 20+ tenant organizations",
      "Maintained 99%+ platform uptime post-launch",
      "Redis and BullMQ background job processing end-to-end",
      "NestJS REST API design and PostgreSQL/TypeORM data modeling",
    ],
    contributions: [
      "Owned architecture end-to-end and led the 3-person development team",
      "Designed NestJS REST APIs and PostgreSQL/TypeORM data models",
      "Engineered Redis & BullMQ queues for asynchronous job processing",
      "Ensured tenant data isolation and production reliability across 20+ organizations",
    ],
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "Redis", "BullMQ"],
    highlight: "Zero-to-production SaaS supporting 20+ tenant organizations & 99%+ uptime",
    flow: ["Client", "NestJS API", "Redis / BullMQ", "PostgreSQL", "Tenant Workflows"],
  },
  {
    id: "crewai-resume",
    title: "CrewAI Resume Assistant",
    category: "Generative AI / Multi-Agent",
    dates: "Production AI",
    description:
      "A production Generative AI pipeline that automates resume parsing, ATS-optimized rewriting, and automated audit generation.",
    purpose:
      "Empower job seekers with intelligent, ATS-compliant resume optimizations driven by multi-agent AI orchestration and vector retrieval.",
    capabilities: [
      "Resume parsing and structured entity extraction",
      "ATS-optimized rewriting tailored to job descriptions",
      "Vector-based context retrieval using Pinecone (RAG)",
      "Multi-agent task orchestration with CrewAI",
      "Automated resume audit and feedback report generation",
    ],
    contributions: [
      "Designed and implemented the FastAPI backend and AI orchestration pipeline",
      "Configured CrewAI multi-agent collaboration for parsing, analysis, and auditing",
      "Integrated OpenAI LLMs with Pinecone vector database for retrieval-augmented generation",
      "Deployed and maintained as a production-grade AI-powered resume assistant",
    ],
    technologies: ["Python", "FastAPI", "CrewAI", "OpenAI", "Pinecone", "RAG"],
    highlight: "Multi-agent CrewAI orchestration with Pinecone vector RAG in production",
    flow: ["Resume", "FastAPI Parser", "Pinecone RAG", "CrewAI Agents", "OpenAI LLM", "ATS Audit"],
  },
  {
    id: "ims-link",
    title: "IMS Link",
    category: "Inventory & ERP Systems",
    dates: "Enterprise System",
    description:
      "A full-stack enterprise inventory management system supporting receiving, stocking, picking, and serial-number tracking with ERP integrations.",
    purpose:
      "Streamline factory and warehouse operations with accurate serial tracking and synchronized ERP workflows.",
    capabilities: [
      "Comprehensive workflows for receiving, stocking, picking, and tracking",
      "Serial-number tracking across all warehouse operations",
      "Seamless integration with Intuitive ERP and Juki Fortress",
      "50–60% API latency reduction achieved through query profiling",
    ],
    contributions: [
      "Developed the complete Angular frontend and Hapi.js/MySQL backend APIs",
      "Integrated external enterprise platforms: Intuitive ERP and Juki Fortress",
      "Cut API response times by 50–60% by profiling queries and fixing application-level bottlenecks",
    ],
    technologies: ["Angular", "Hapi.js", "MySQL", "PostgreSQL", "REST APIs"],
    highlight: "50–60% API latency reduction with Intuitive ERP & Juki Fortress integrations",
    flow: ["Angular UI", "Hapi.js API", "MySQL", "Intuitive ERP", "Juki Fortress"],
  },
  {
    id: "flahybase",
    title: "Flahybase (FlahyRecovery)",
    category: "Healthcare / Diagnostics",
    dates: "Nov 2024 – Feb 2025",
    description:
      "Healthcare backend for labs, patients, samples, and diagnostic reports, built with strict clinical data standards and security.",
    purpose:
      "Provide secure diagnostic data management and patient synchronization for clinical oncology labs.",
    capabilities: [
      "FHIR patient and diagnostic report synchronization",
      "DICOM medical imaging workflow support",
      "Multi-role authentication with Twilio OTP verification",
      "Azure Maps geo-restriction for regulated regional access",
      "Structured data sync supporting 200+ patient records during initial rollout",
    ],
    contributions: [
      "Engineered backend architecture supporting labs, patients, samples, and reports",
      "Implemented FHIR patient/report synchronization and DICOM imaging integration",
      "Configured multi-role access control, Twilio OTP, and Azure Maps geo-restriction",
    ],
    technologies: ["Node.js", "FHIR", "DICOM", "Twilio", "Azure Maps", "PostgreSQL"],
    highlight: "FHIR and DICOM compliance in an oncology diagnostic workflow",
    flow: ["Patient / Lab", "Healthcare API", "FHIR / DICOM", "PostgreSQL", "Diagnostic Reports"],
  },
  {
    id: "gym-pilates",
    title: "Gym Pilates",
    category: "Booking / Real-Time Systems",
    dates: "Apr 2025 – Oct 2025",
    description:
      "Class booking API featuring real-time availability updates, double-booking prevention, and bilingual support.",
    purpose:
      "Deliver a seamless, real-time class booking experience for studio members and administrators.",
    capabilities: [
      "Real-time class availability synchronization via Socket.io",
      "Robust double-booking prevention under concurrent requests",
      "Member and admin booking management workflows",
      "Google OAuth authentication and Firebase push notifications",
      "Bilingual English/Spanish (EN/ES) localization support",
    ],
    contributions: [
      "Built member and admin booking workflows using NestJS and Prisma",
      "Implemented Socket.io for instant availability sync and concurrency control",
      "Integrated Google OAuth, Firebase push notifications, and bilingual localization",
    ],
    technologies: ["NestJS", "Prisma", "PostgreSQL", "Socket.io", "Google OAuth", "Firebase"],
    highlight: "Socket.io live availability synchronization & double-booking prevention",
    flow: ["Member App", "NestJS API", "Prisma / PostgreSQL", "Socket.io", "Firebase Push"],
  },
] as const;

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Lovely Professional University (LPU)",
    location: "Punjab, India",
    dates: "2021 – 2023",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Panjab University (PU)",
    location: "Chandigarh, India",
    dates: "2017 – 2020",
  },
] as const;

export const aiPipeline = {
  title: "Building with Generative AI",
  subtitle: "From LLM APIs to production-grade AI pipelines.",
  summary:
    "I integrate Generative AI into products that already have users, data, and operational constraints. The resume assistant is a production pipeline: documents are parsed, retrieved against relevant context via Pinecone RAG, processed by CrewAI multi-agent orchestration and OpenAI LLMs, rewritten for ATS compliance, and audited automatically.",
  steps: [
    "Resume Parsing",
    "Pinecone RAG Retrieval",
    "CrewAI Multi-Agent Tasks",
    "OpenAI LLM Processing",
    "ATS Optimization",
    "Automated Audit Report",
  ],
  stack: ["Python", "FastAPI", "CrewAI", "OpenAI", "Pinecone", "RAG"],
} as const;

export const principles = [
  {
    title: "Build End-to-End",
    description:
      "From database schema to API, frontend, infrastructure, and deployment.",
  },
  {
    title: "Optimize With Data",
    description:
      "Profile first, identify bottlenecks, then optimize (e.g. 50–60% API latency reduction).",
  },
  {
    title: "Design for Production",
    description:
      "Reliability, observability, security, background processing, and scalability matter.",
  },
  {
    title: "Keep Systems Maintainable",
    description:
      "Prefer clear architecture and understandable abstractions over unnecessary complexity.",
  },
  {
    title: "AI With Purpose",
    description:
      "Use AI where it creates measurable product value, backed by RAG and agentic workflows.",
  },
  {
    title: "Own the Outcome",
    description:
      "Focus on business and product impact, not just completed tickets.",
  },
] as const;

export const contactCopy = {
  title: "Have a product, problem, or idea worth building?",
  summary:
    "I'm always interested in solving interesting engineering problems, building products, and exploring opportunities where technology can create real impact.",
  success: "Message sent successfully. Thanks for reaching out!",
} as const;
