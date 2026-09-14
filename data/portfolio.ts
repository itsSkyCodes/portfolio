/**
 * Portfolio content. Keep facts limited to provided professional history.
 * Update copy here rather than inside presentation components.
 */

export const hero = {
  eyebrow: "Full-Stack Software Engineer",
  heading: "I build production systems that scale from idea to impact.",
  headingAccent: "impact.",
  supporting:
    "Full-Stack Engineer specializing in TypeScript, Node.js, NestJS, SaaS platforms, and Generative AI.",
  summary:
    "4+ years of experience designing, building, optimizing, and owning production software across SaaS, healthcare, inventory systems, and AI-powered products.",
} as const;

export const systemFlow = [
  { label: "API", detail: "NestJS · REST" },
  { label: "Database", detail: "PostgreSQL · TypeORM" },
  { label: "Queue", detail: "Redis · BullMQ" },
  { label: "AI", detail: "RAG · LLM" },
  { label: "Client", detail: "Product surfaces" },
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
    label: "API Performance Improvement",
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
  title: "Engineering products from database schema to deployment.",
  paragraphs: [
    "I am a Full-Stack Software Engineer with 4+ years of experience designing and building production systems end to end — from schema and API design through integrations, AI pipelines, and deployment.",
    "I have taken a multi-tenant SaaS platform from zero to production, led a 3-person engineering team, and supported 20+ tenant organizations while maintaining 99%+ uptime.",
    "That work spans SaaS platforms, healthcare systems, inventory and ERP systems, and Generative AI applications, including REST APIs, real-time systems, background processing, database optimization, and cloud infrastructure.",
    "I am comfortable moving between architecture, backend, frontend, databases, integrations, AI pipelines, and deployment — and staying with a system until it is reliable in production.",
  ],
  domains: [
    "SaaS platforms",
    "Healthcare systems",
    "Inventory / ERP",
    "Generative AI",
    "Real-time systems",
  ],
} as const;

export const workSurface = [
  {
    label: "Architecture",
    detail: "Ownership from data model to API contract",
  },
  {
    label: "Backend",
    detail: "NestJS, Hapi.js, REST, auth, multi-tenant data",
  },
  {
    label: "Processing",
    detail: "Redis, BullMQ, WebSockets, integrations",
  },
  {
    label: "Intelligence",
    detail: "RAG, agents, LLM pipelines in production",
  },
  {
    label: "Operations",
    detail: "Cloud storage, Docker, PM2, GitHub Actions",
  },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "Hapi.js", "AdonisJS", "REST APIs"],
  },
  {
    title: "Frontend",
    items: ["Angular", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Databases & ORM",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "TypeORM", "Prisma"],
  },
  {
    title: "Queues & Real-Time",
    items: ["BullMQ", "Socket.io", "Pusher", "Server-Sent Events", "WebSockets"],
  },
  {
    title: "Cloud / DevOps / Auth",
    items: ["Cloudflare R2", "AWS S3", "JWT", "OAuth 2.0", "GitHub Actions", "PM2", "Docker"],
  },
  {
    title: "Generative AI",
    items: ["OpenAI", "CrewAI", "RAG", "Pinecone", "Prompt Engineering", "LLM Integration"],
  },
  {
    title: "Integrations",
    items: ["Google APIs", "Gmail", "Contacts", "Calendar", "Tasks", "Twilio", "Firebase", "FHIR", "DICOM"],
  },
  {
    title: "AI-Assisted Development",
    items: ["Cursor", "Claude Code", "Antigravity"],
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
      title: "MyRelma — Multi-Tenant SaaS",
      summary:
        "Took the multi-tenant career-coaching SaaS platform from zero to production.",
      highlights: [
        "Owned architecture end to end",
        "Designed NestJS REST APIs",
        "Designed PostgreSQL and TypeORM data models",
        "Implemented Redis and BullMQ background processing",
        "Supported 20+ tenant organizations",
        "Maintained 99%+ uptime",
        "Led a 3-person engineering team",
      ],
    },
    {
      id: "ims-link",
      title: "IMS Link — Inventory Management",
      summary:
        "Built and delivered a full-stack inventory management system supporting receiving, stocking, picking, and serial-number tracking.",
      highlights: [
        "Covered receiving, stocking, picking, and serial-number tracking",
        "Delivered the product as a full-stack system",
        "Integrated with Intuitive ERP and Juki Fortress",
      ],
      technologies: ["Angular", "Hapi.js", "MySQL"],
      integrations: ["Intuitive ERP", "Juki Fortress"],
      callout: {
        label: "50–60% API response-time reduction",
        detail:
          "Achieved through database query optimization and elimination of application-level bottlenecks.",
      },
    },
    {
      id: "resume-assistant",
      title: "Generative AI Resume Assistant",
      summary:
        "Built a production Generative AI resume optimization pipeline.",
      highlights: [
        "Resume parsing",
        "Resume optimization",
        "ATS-focused rewriting",
        "Automated resume auditing",
        "Retrieval-augmented generation",
      ],
      technologies: ["Python", "FastAPI", "CrewAI", "OpenAI", "Pinecone", "RAG"],
      featured: true,
    },
  ],
} as const;

export const projects = [
  {
    id: "flahy-recovery",
    title: "FlahyRecovery",
    category: "Healthcare / Diagnostics",
    dates: "Nov 2024 – Feb 2025",
    description:
      "Built a healthcare backend supporting labs, patients, samples, and diagnostic reports.",
    capabilities: [
      "FHIR patient and report synchronization",
      "DICOM imaging support",
      "Multi-role authentication",
      "Twilio OTP verification",
      "Azure Maps geo-restriction",
      "Structured healthcare data synchronization",
      "200+ patient records during initial rollout",
    ],
    flow: ["Patient", "API", "FHIR", "Database", "Diagnostic Reports"],
    highlight: "FHIR and DICOM in a diagnostic workflow",
  },
  {
    id: "gym-pilates",
    title: "Gym Pilates",
    category: "Booking / Real-Time Systems",
    dates: "Apr 2025 – Oct 2025",
    description:
      "Built a class booking API with real-time availability and admin and member workflows.",
    capabilities: [
      "Member booking",
      "Admin booking management",
      "Live class availability",
      "Double-booking prevention",
      "Google OAuth",
      "Firebase notifications",
      "English and Spanish localization",
    ],
    technologies: [
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Socket.io",
      "Google OAuth",
      "Firebase",
      "Push Notifications",
    ],
    highlight: "Real-time availability synchronization",
  },
] as const;

export const aiPipeline = {
  title: "Building with Generative AI",
  subtitle: "From LLM APIs to production-grade AI pipelines.",
  summary:
    "I integrate Generative AI into products that already have users, data, and operational constraints — not only into chat experiments. The resume assistant is a production pipeline: documents are parsed, retrieved against relevant context, processed by agents and an LLM, rewritten for ATS, and audited automatically.",
  steps: [
    "Resume",
    "Parsing",
    "Retrieval / RAG",
    "AI Agents",
    "LLM Processing",
    "ATS Optimization",
    "Automated Audit",
  ],
  stack: ["FastAPI", "CrewAI", "OpenAI", "Pinecone", "RAG"],
} as const;

export const principles = [
  {
    title: "Build End-to-End",
    description:
      "From database schema to API, frontend, infrastructure, and deployment.",
  },
  {
    title: "Optimize With Data",
    description: "Profile first, identify bottlenecks, then optimize.",
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
    description: "Use AI where it creates measurable product value.",
  },
  {
    title: "Own the Outcome",
    description: "Focus on business and product impact, not just completed tickets.",
  },
] as const;

export const contactCopy = {
  title: "Have a product, problem, or idea worth building?",
  summary:
    "I'm always interested in solving interesting engineering problems, building products, and exploring opportunities where technology can create real impact.",
  success: "Message sent successfully. Thanks for reaching out!",
} as const;
