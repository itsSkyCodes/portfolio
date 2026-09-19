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
    "4+ years of experience designing, building, and owning production systems end-to-end — from database schema design to deployment and team leadership. Built MyRelma (multi-tenant SaaS, 20+ tenant orgs, 99%+ uptime), production GenAI tooling (CrewAI, Pinecone RAG, SSE), healthcare diagnostics (FHIR/DICOM), ERP inventory, and real-time platforms with 30–40% API latency optimization.",
} as const;

export const systemFlow = [
  { label: "API", detail: "NestJS · Express · REST" },
  { label: "Database", detail: "PostgreSQL · MySQL · TypeORM · Prisma" },
  { label: "Queue", detail: "Redis · BullMQ · 10 Queues" },
  { label: "AI", detail: "CrewAI · Pinecone RAG · OpenAI GPT-4o" },
  { label: "Client", detail: "Angular · React · SSE & WebSockets" },
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
    display: "30–40%",
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
    "Full-stack software engineer with 4+ years shipping production systems end-to-end — from database schema design to deployment and team leadership.",
    "Built MyRelma, a multi-tenant career-coaching SaaS platform, from zero to production, now serving 20+ tenant organizations at 99%+ uptime while leading a 3-person engineering team.",
    "Engineered AI-powered career tooling with LLM orchestration (CrewAI), OpenAI integration, RAG pipelines (Pinecone), and real-time SSE streaming — alongside systems spanning healthcare diagnostics (FHIR/DICOM), inventory/ERP, and fitness booking, using TypeScript, NestJS, Python/FastAPI, PostgreSQL, Angular, and React.",
    "Reduced API response times by 30–40%, measured by production latency profiling, by optimizing MySQL queries, eliminating N+1 patterns, and refactoring application-level bottlenecks across inventory, serial-tracking, and work-order modules.",
  ],
  domains: [
    "Multi-Tenant SaaS",
    "Generative AI & Agentic RAG",
    "Healthcare / FHIR & DICOM",
    "Inventory & ERP Systems",
    "Real-Time Booking & WebSockets",
    "FinTech & Ledger APIs",
  ],
} as const;

export const workSurface = [
  {
    label: "Architecture",
    detail: "Zero-to-production ownership from data models to API contracts & team leadership",
  },
  {
    label: "Backend",
    detail: "NestJS, Node.js, Express.js, Hapi.js, AdonisJS, REST APIs, auth & isolation",
  },
  {
    label: "Processing",
    detail: "Redis, BullMQ (10 job queues), WebSockets, Socket.io, SSE streaming",
  },
  {
    label: "Intelligence",
    detail: "CrewAI agentic orchestration, OpenAI GPT-4o, Pinecone RAG, FastAPI",
  },
  {
    label: "Operations",
    detail: "Cloudflare R2, AWS S3, Azure Blob Storage, Docker, PM2, GitHub Actions CI/CD",
  },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Backend & Frameworks",
    items: ["Node.js", "NestJS", "Express.js", "Hapi.js", "AdonisJS", "REST APIs"],
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
    items: ["AWS S3", "Cloudflare R2", "Azure Blob Storage", "JWT", "OAuth 2.0", "Google OAuth", "GitHub Actions CI/CD", "PM2", "Docker"],
  },
  {
    title: "Generative AI",
    items: ["OpenAI GPT-4o", "CrewAI (agentic orchestration)", "Pinecone (RAG)", "Prompt Engineering"],
  },
  {
    title: "Other Integrations",
    items: ["Google APIs (Gmail, Contacts, Calendar, Tasks)", "LinkedIn API", "Twilio", "Firebase", "FHIR", "DICOM"],
  },
] as const;

export const experience = {
  company: "Luminoguru Pvt. Ltd.",
  title: "Software Engineer",
  promotion: "Promoted from Associate Software Engineer",
  dates: "Jan 2022 – Present",
  location: "Mohali, Punjab, India",
  achievements: [
    {
      id: "myrelma",
      title: "MyRelma — Multi-Tenant Career-Coaching SaaS Platform",
      summary:
        "Architected and built the platform from zero to production — 27-module NestJS REST API, PostgreSQL/TypeORM data modeling, and Redis/BullMQ background processing (10 job queues) — now serving 20+ tenant organizations at 99%+ uptime while leading a 3-person engineering team.",
      highlights: [
        "Architected and built 27-module NestJS REST API, PostgreSQL/TypeORM data models, and Redis/BullMQ background processing (10 job queues) from zero to production",
        "Engineered Generative AI career assistant (FastAPI + CrewAI + OpenAI GPT-4o + Pinecone RAG) with 6 production endpoints spanning resume parsing, rewriting, audit scoring, and email drafting",
        "Implemented SSE-streamed conversational resume chat with LLM classifier routing across 9 message types (62K+ lines of service logic)",
        "Built context-aware email composition assistant streaming drafts via SSE with thread-aware prompt construction",
        "Integrated Google Workspace (Gmail sync, Contacts, Calendar, Tasks) and LinkedIn OAuth directly into the platform",
        "Implemented Redis-backed distributed rate limiting with Postgres failover, per-email auth throttling, Helmet HTTP hardening, and TLS/CORS enforcement",
      ],
      technologies: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "Redis", "BullMQ", "OpenAI GPT-4o", "CrewAI", "Pinecone", "Pusher", "Cloudflare R2", "Google APIs", "LinkedIn API"],
      featured: true,
    },
    {
      id: "ims-link",
      title: "IMS Link — Inventory Management System (App + API)",
      summary:
        "Reduced API response times by 30–40% via query profiling, N+1 elimination, and built full-stack warehouse modules with Intuitive ERP and Juki Fortress integrations.",
      highlights: [
        "Reduced API response times by 30–40%, measured by production latency profiling, by optimizing MySQL queries, eliminating N+1 patterns, and refactoring application-level bottlenecks",
        "Built modules for item receiving (barcode scanning), warehouse stocking, order picking, serial-number lifecycle tracking, BOM management, and shortage ticketing",
        "Developed responsive Angular frontend (ngx-datatable, Dragula drag-and-drop, bwip-js barcode generation, PapaParse/SheetJS import, Quill, ngx-charts/D3) with Hapi.js/MySQL REST APIs",
        "Integrated Intuitive ERP and Juki Fortress via bidirectional XML-to-JSON transforms and scheduled cron sync for automated reconciliation",
        "Implemented Jaro-Winkler fuzzy search and Nodemailer alerts for shortages and work-order updates",
      ],
      technologies: ["Angular", "TypeScript", "Hapi.js", "MySQL", "node-cron", "bwip-js", "SheetJS", "Intuitive ERP", "Juki Fortress"],
      integrations: ["Intuitive ERP", "Juki Fortress"],
      callout: {
        label: "30–40% API latency reduction",
        detail:
          "Achieved by profiling production latency, optimizing complex MySQL queries, and eliminating N+1 patterns.",
      },
    },
    {
      id: "flahyrecovery",
      title: "FlahyRecovery — Oncology Diagnostics Platform",
      summary:
        "Engineered dual-API healthcare backend (main API + DICOM imaging API) for oncology labs on AdonisJS v6/PostgreSQL/Objection.js supporting 200+ patient records.",
      highlights: [
        "Engineered dual-API healthcare backend (main API + DICOM imaging API) on AdonisJS v6/PostgreSQL/Objection.js with multi-role policy-based authorization (Bouncer)",
        "Implemented FHIR-compliant patient and diagnostic report synchronization supporting 200+ patient records",
        "Built DICOM imaging service (dcmjs/dicom-parser) with Azure Blob Storage integration and automated PDF-to-image thumbnailing (pdf2pic + Sharp)",
        "Integrated Twilio OTP verification, Firebase push alerts, and QR-based sample tracking",
      ],
      technologies: ["AdonisJS", "TypeScript", "PostgreSQL", "Objection.js", "FHIR", "DICOM", "Azure Blob Storage", "Twilio", "Firebase"],
    },
    {
      id: "ichooseiam",
      title: "IChooseIAM — Social Community & Event Platform",
      summary:
        "Engineered event-scoped RBAC, Incognito Mode pseudo-identity architecture, and referral engine on NestJS/Prisma/MySQL with real-time Socket.io and FCM.",
      highlights: [
        "Engineered event-scoped RBAC and delegation system enabling event creators to assign per-event roles (event admins, co-creators) with isolated access boundaries",
        "Designed and built 'Incognito Mode' privacy architecture, generating gender-aware private pseudo-identities to anonymize user presence on public feeds",
        "Built end-to-end referral and invite-tracking engine with automated self-referral prevention and per-event conversion analytics",
        "Delivered real-time event lifecycle notifications via Socket.io and Firebase Cloud Messaging with Handlebars transactional emails and Android/iOS deep-linking",
      ],
      technologies: ["NestJS", "TypeScript", "Prisma", "MySQL", "Socket.io", "Firebase (FCM)", "Handlebars"],
    },
    {
      id: "gym-pilates",
      title: "Gym Pilates — Fitness Class Booking Platform",
      summary:
        "Built class-booking platform with Socket.io real-time availability, database concurrency control to prevent double-bookings, and bilingual i18n support.",
      highlights: [
        "Built class-booking platform (Admin/Member role-based access, scheduling, subscription administration, cancellation workflows) on NestJS/Prisma/PostgreSQL",
        "Implemented real-time availability via Socket.io WebSocket gateway and database-level concurrency control to prevent double-bookings",
        "Integrated Google OAuth 2.0 social login, Firebase Cloud Messaging push notifications, and bilingual (EN/ES) i18n support via i18next",
        "Built admin-facing APIs for user management, class CRUD with cancellation-reason tracking, and subscription-plan lifecycle management",
      ],
      technologies: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "Socket.io", "Firebase", "Google OAuth", "i18next"],
    },
    {
      id: "walletapp",
      title: "WalletApp — Multi-Wallet Expense Tracking & Management API",
      summary:
        "Architected multi-wallet financial tracking REST API supporting cash and debit accounts across 11+ expense categories with Sequelize aggregations, Bcrypt/JWT, and device fingerprinting.",
      highlights: [
        "Architected multi-wallet financial tracking REST API supporting cash and debit accounts across 11+ expense categories with multi-currency handling",
        "Constructed Sequelize aggregation queries for real-time monthly budget totals and soft-delete audit trails",
        "Implemented JWT authentication with Bcrypt password encryption, express-validator input sanitization, and automated 6-digit OTP password-reset workflow via Nodemailer",
        "Built administrative management panel with paginated user listings, status toggling, admin onboarding, and login audit tracking with device fingerprinting (node-device-detector)",
        "Constructed secure profile-image pipeline using Multer for uploads and Jimp for resizing and optimization",
      ],
      technologies: ["Node.js", "Express.js", "MySQL", "Sequelize ORM", "JWT", "Bcrypt", "Multer", "Jimp", "Nodemailer"],
    },
  ],
} as const;

export const projects = [
  {
    id: "myrelma",
    title: "MyRelma — Multi-Tenant Career Coaching SaaS",
    category: "Multi-Tenant SaaS & Generative AI",
    dates: "Jun 2025 – Present",
    description:
      "A multi-tenant career-coaching SaaS platform built from zero to production, supporting 20+ tenant organizations at 99%+ uptime with comprehensive agentic AI career tooling.",
    purpose:
      "Deliver a scalable, multi-tenant coaching infrastructure with automated resume intelligence, real-time streaming chat, and seamless Google Workspace / LinkedIn integrations.",
    capabilities: [
      "27-module NestJS REST API with PostgreSQL/TypeORM multi-tenant data modeling",
      "Redis and BullMQ background processing across 10 distinct job queues",
      "Generative AI career assistant (FastAPI + CrewAI + OpenAI GPT-4o + Pinecone RAG) with 6 production endpoints",
      "Resume upload/parsing (PDF, DOCX, JPEG, PNG), section-by-section rewriting, and full resume audit scoring",
      "SSE-streamed conversational resume chat (LLM classifier routing across 9 message types, 62K+ lines of service logic)",
      "OpenAI-powered email composition assistant streaming drafts via SSE with thread-aware prompt construction",
      "Direct Google Workspace (Gmail sync, Contacts, Calendar, Tasks) and LinkedIn OAuth integration",
      "Production-grade security: Redis distributed rate limiting with Postgres failover, per-email auth throttling, and Helmet HTTP hardening",
    ],
    contributions: [
      "Architected and built the entire platform from zero to production while leading a 3-person engineering team",
      "Engineered the Generative AI microservice using FastAPI, CrewAI, OpenAI GPT-4o, and Pinecone vector RAG",
      "Developed real-time SSE streaming for conversational resume chat and contextual email drafting",
      "Integrated Google Workspace and LinkedIn APIs with OAuth 2.0 authentication flows",
      "Implemented distributed rate limiting with Postgres failover, OTP brute-force prevention, and TLS/CORS security policies",
    ],
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "Redis", "BullMQ", "FastAPI", "CrewAI", "OpenAI GPT-4o", "Pinecone", "Pusher", "Cloudflare R2"],
    highlight: "Zero-to-production 27-module SaaS serving 20+ orgs at 99%+ uptime with agentic AI pipelines",
    flow: ["Client", "NestJS API", "BullMQ (10 Queues)", "FastAPI / CrewAI", "Pinecone RAG", "OpenAI GPT-4o", "PostgreSQL"],
  },
  {
    id: "ims-link",
    title: "IMS Link — Inventory Management System",
    category: "Inventory & ERP Systems",
    dates: "May 2022 – June 2025",
    description:
      "A full-stack enterprise inventory management system (App + API) automating warehouse receiving, stocking, order picking, serial-number lifecycle tracking, and bidirectional ERP sync.",
    purpose:
      "Eliminate manual inventory discrepancies and streamline factory/warehouse operations with barcode scanning, ERP synchronization, and low-latency APIs.",
    capabilities: [
      "30–40% API latency reduction achieved through production query profiling, eliminating N+1 patterns, and refactoring bottlenecks",
      "Barcode scanning for item receiving, warehouse stocking, order picking, and serial-number lifecycle tracking",
      "BOM management and shortage ticketing with role-based department permissions",
      "Angular frontend utilizing ngx-datatable, Dragula drag-and-drop, bwip-js barcode generation, and SheetJS data import",
      "Bidirectional XML-to-JSON transforms with scheduled cron sync for Intuitive ERP and Juki Fortress reconciliation",
      "Jaro-Winkler fuzzy search and automated Nodemailer shortage alerts",
    ],
    contributions: [
      "Cut API response times by 30–40% by profiling production queries and fixing application-level bottlenecks",
      "Built core modules for item receiving, stocking, picking, serial tracking, and shortage ticketing",
      "Engineered bidirectional XML-to-JSON sync pipes with Intuitive ERP and Juki Fortress platforms",
      "Developed the Angular frontend with barcode generation, drag-and-drop workflows, and data visualizations",
    ],
    technologies: ["Angular", "TypeScript", "Hapi.js", "MySQL", "node-cron", "bwip-js", "SheetJS", "Intuitive ERP", "Juki Fortress"],
    highlight: "30–40% API latency reduction with bidirectional Intuitive ERP & Juki Fortress sync",
    flow: ["Angular UI", "Hapi.js API", "MySQL", "XML/JSON Transforms", "Intuitive ERP / Juki Fortress"],
  },
  {
    id: "flahyrecovery",
    title: "FlahyRecovery — Oncology Diagnostics Platform",
    category: "Healthcare & Diagnostics",
    dates: "Nov 2024 – Feb 2025",
    description:
      "A dual-API healthcare backend supporting oncology labs, patient records, sample tracking, and diagnostic report generation under strict healthcare standards.",
    purpose:
      "Provide oncology labs with secure, compliant patient diagnostics management, medical imaging workflows, and QR-based sample tracking.",
    capabilities: [
      "Dual-API architecture (main lab API + dedicated DICOM imaging API) on AdonisJS v6 and Objection.js",
      "FHIR-compliant patient and diagnostic report synchronization supporting 200+ patient records",
      "DICOM medical imaging service using dcmjs and dicom-parser with Azure Blob Storage",
      "Automated PDF-to-image thumbnailing pipeline using pdf2pic and Sharp",
      "Multi-role policy-based authorization (Bouncer) and Twilio OTP verification",
      "Firebase Cloud Messaging push alerts and QR-based sample tracking across lab workflows",
    ],
    contributions: [
      "Engineered the dual-API backend on AdonisJS v6/PostgreSQL with Bouncer policy authorization",
      "Implemented FHIR synchronization standards and DICOM imaging parsing with Azure Blob Storage",
      "Built the image thumbnailing pipeline using pdf2pic and Sharp for instant clinical preview",
      "Integrated Twilio OTP verification and QR-based sample tracking for laboratory operations",
    ],
    technologies: ["AdonisJS", "TypeScript", "PostgreSQL", "Objection.js", "FHIR", "DICOM", "Azure Blob Storage", "Twilio", "Firebase", "Sharp"],
    highlight: "FHIR-compliant diagnostics & DICOM imaging pipeline on AdonisJS v6 and Azure Blob Storage",
    flow: ["Lab / Clinic", "AdonisJS API", "DICOM Imaging Service", "Azure Blob Storage", "FHIR Sync", "PostgreSQL"],
  },
  {
    id: "ichooseiam",
    title: "IChooseIAM — Social Community & Event Platform",
    category: "Social & Event Platform",
    dates: "Mar 2025 – Apr 2025",
    description:
      "A scalable community and event platform featuring event-scoped delegation RBAC, privacy-preserving pseudo-identities, and real-time social engagement.",
    purpose:
      "Enable community organizers to host private and public events with custom role boundaries, anonymized user participation, and dynamic referral tracking.",
    capabilities: [
      "Event-scoped RBAC and delegation system for per-event roles (event admins, co-creators) with isolated access boundaries",
      "Incognito Mode privacy architecture generating gender-aware pseudo-identities on public feeds while preserving mutual connections",
      "End-to-end referral and invite-tracking engine with automated self-referral prevention and per-event conversion analytics",
      "Real-time event lifecycle notifications via Socket.io and Firebase Cloud Messaging (FCM)",
      "Handlebars transactional email engine and deep-linking support for Android and iOS",
    ],
    contributions: [
      "Designed and engineered event-scoped RBAC allowing granular creator delegation and real-time moderation",
      "Architected the Incognito Mode pseudo-identity system balancing privacy with social graph integrity",
      "Built the referral and invite tracking engine with anti-fraud rules and conversion metrics",
      "Implemented Socket.io and Firebase push notifications for live event updates",
    ],
    technologies: ["NestJS", "TypeScript", "Prisma", "MySQL", "Socket.io", "Firebase (FCM)", "Handlebars"],
    highlight: "Incognito Mode pseudo-identity architecture & event-scoped delegation RBAC",
    flow: ["Mobile / Web App", "NestJS API", "Prisma / MySQL", "Socket.io Gateway", "Firebase FCM", "Deep Links"],
  },
  {
    id: "gym-pilates",
    title: "Gym Pilates — Fitness Class Booking Platform",
    category: "Booking & Real-Time Systems",
    dates: "Apr 2025 – Oct 2025",
    description:
      "A high-concurrency fitness class booking platform featuring live slot availability, concurrency control against double-booking, and bilingual localization.",
    purpose:
      "Deliver frictionless real-time scheduling for members and comprehensive studio administration for fitness center owners.",
    capabilities: [
      "Real-time class availability synchronization via Socket.io WebSocket gateway",
      "Database-level concurrency control to strictly eliminate double-bookings during peak booking windows",
      "Role-based access control (Admin / Member) with subscription plan lifecycle management and cancellation workflows",
      "Google OAuth 2.0 social login and Firebase Cloud Messaging push notifications",
      "Bilingual English/Spanish (EN/ES) internationalization using i18next",
      "Admin management APIs for user administration, class CRUD with cancellation-reason tracking, and subscription plans",
    ],
    contributions: [
      "Engineered class scheduling and booking workflows on NestJS and Prisma ORM",
      "Designed database concurrency control patterns to prevent overbooking across simultaneous checkout requests",
      "Integrated Socket.io WebSocket gateway for real-time seat availability updates",
      "Implemented Google OAuth 2.0, Firebase push alerts, and i18next bilingual support",
    ],
    technologies: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "Socket.io", "Firebase", "Google OAuth", "i18next"],
    highlight: "Socket.io live availability synchronization & concurrency-controlled double-booking prevention",
    flow: ["Member App", "NestJS API", "Prisma / PostgreSQL", "Socket.io Gateway", "Firebase Push"],
  },
  {
    id: "walletapp",
    title: "WalletApp — Multi-Wallet Expense Tracking & Management API",
    category: "FinTech & Financial Tracking",
    dates: "Mar 2022 – May 2022",
    description:
      "A multi-wallet financial tracking REST API supporting cash and debit accounts across 11+ expense categories with real-time budget aggregations.",
    purpose:
      "Provide personal and family expense management with real-time budget rollups, secure authentication, and administrative oversight.",
    capabilities: [
      "Multi-wallet accounting engine supporting cash and debit accounts across 11+ expense categories with multi-currency handling",
      "Sequelize aggregation queries for real-time monthly budget totals and soft-delete audit trails",
      "JWT authentication with Bcrypt password encryption, input sanitization via express-validator, and 6-digit OTP email resets",
      "Administrative control panel featuring paginated listings, user status toggling, and admin-initiated onboarding",
      "Login audit tracking with device fingerprinting via node-device-detector",
      "Secure profile-image pipeline with Multer uploads and Jimp image optimization",
    ],
    contributions: [
      "Architected the REST API using Express.js and MySQL with Sequelize ORM aggregations",
      "Implemented JWT security, Bcrypt password hashing, and automated 6-digit OTP password reset via Nodemailer",
      "Built admin panel endpoints with device fingerprinting for security audit trails",
      "Constructed the image processing pipeline using Multer and Jimp for resizing and optimization",
    ],
    technologies: ["Node.js", "Express.js", "MySQL", "Sequelize ORM", "JWT", "Bcrypt", "Multer", "Jimp", "Nodemailer"],
    highlight: "Multi-currency financial ledger with Sequelize aggregation & device-fingerprinted audit trails",
    flow: ["Client", "Express.js API", "Sequelize ORM", "MySQL", "Nodemailer OTP", "Multer/Jimp Pipeline"],
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
    "I integrate Generative AI into products that already have users, data, and operational constraints. The resume assistant is a production pipeline: documents are parsed, retrieved against relevant context via Pinecone RAG, processed by CrewAI multi-agent orchestration and OpenAI GPT-4o, rewritten for ATS compliance, and audited automatically with real-time SSE streaming.",
  steps: [
    "Resume Parsing (PDF/DOCX/Images)",
    "Pinecone Vector RAG Retrieval",
    "CrewAI Multi-Agent Task Routing",
    "OpenAI GPT-4o Structured Execution",
    "Real-Time SSE Streaming Output",
    "Automated ATS Audit & Scoring",
  ],
  stack: ["FastAPI", "CrewAI", "OpenAI GPT-4o", "Pinecone", "RAG", "SSE", "Python"],
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
      "Profile first, identify bottlenecks, then optimize (e.g. 30–40% API latency reduction).",
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
