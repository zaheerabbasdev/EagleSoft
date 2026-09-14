/**
 * EagleSoft Pvt Ltd - Services Configuration
 * All 8 core corporate services, features, deliverables, and tech stacks.
 */

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: "laptop-code" | "mobile-screen" | "cart-shopping" | "gears" | "boxes-stacked" | "pen-ruler" | "cloud" | "headset";
  features: string[];
  capabilities: { title: string; description: string }[];
  technologies: string[];
  deliverables: string[];
  targetAudience: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Development",
    shortDescription: "Modern, responsive, and scalable web applications built around your business requirements.",
    fullDescription:
      "EagleSoft designs and develops high-performance web applications tailored to solve concrete operational challenges. We build responsive, accessible, and secure digital platforms that handle complex business workflows and deliver frictionless user experiences.",
    iconName: "laptop-code",
    features: [
      "Custom Full-Stack Web Applications",
      "Single-Page & Multi-Page Architectures",
      "RESTful API & GraphQL Integration",
      "Robust Authentication & Role-Based Access Control",
      "Enterprise Database Design & Optimization",
      "Responsive & Accessible Cross-Device UI",
    ],
    capabilities: [
      {
        title: "Enterprise Web Portals",
        description: "Secure, role-based internal portals connecting employees, vendors, and management across disparate operations.",
      },
      {
        title: "Progressive Web Apps (PWA)",
        description: "Fast, installable web experiences offering offline reliability and native-like responsiveness on any browser.",
      },
      {
        title: "API & Microservice Integration",
        description: "Architecting clean, decoupled backend services that integrate seamlessly with third-party systems and legacy infrastructure.",
      },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "MySQL", "Tailwind CSS"],
    deliverables: [
      "Production-ready web application",
      "Complete source code repository with CI/CD scripts",
      "API documentation & architecture diagrams",
      "Admin & user documentation",
    ],
    targetAudience: "Organizations needing dependable web platforms, customer portals, or scalable operational dashboards.",
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription: "Cross-platform mobile applications designed for performance, usability, and growth.",
    fullDescription:
      "We build intuitive, robust mobile applications that empower users on the move. Whether developing consumer apps or mission-critical enterprise field tools, our applications prioritize smooth performance, offline capability, and seamless hardware integration.",
    iconName: "mobile-screen",
    features: [
      "Cross-Platform iOS & Android Apps",
      "Offline Synchronization & Local Storage",
      "Push Notifications & Event Triggering",
      "Device Hardware & Sensor Integration (Camera, GPS, Bluetooth)",
      "Secure Payment Gateway Integrations",
      "App Store & Google Play Store Publishing",
    ],
    capabilities: [
      {
        title: "Consumer Mobile Solutions",
        description: "Customer-facing mobile apps with fast onboarding, smooth checkout, and personalized account management.",
      },
      {
        title: "Field Workforce Applications",
        description: "Reliable mobile tools for delivery teams, field engineers, and inspection crews operating under variable connectivity.",
      },
      {
        title: "Real-time Tracking & Sync",
        description: "Live geolocation tracking, automated dispatch updates, and multi-user synchronization.",
      },
    ],
    technologies: ["React Native", "Flutter", "TypeScript", "Firebase", "Node.js", "SQLite"],
    deliverables: [
      "Compiled iOS & Android app binaries (IPA/APK/AAB)",
      "Source code with build scripts",
      "App store deployment and asset preparation",
      "Continuous build & crash monitoring configuration",
    ],
    targetAudience: "Businesses seeking to engage mobile users or equip field operations with reliable handheld software.",
  },
  {
    id: "ecommerce-solutions",
    slug: "ecommerce-solutions",
    title: "E-Commerce Solutions",
    shortDescription: "Complete online commerce experiences including storefronts, product management, orders, and business operations.",
    fullDescription:
      "EagleSoft creates end-to-end commerce solutions engineered for high transaction volume, catalog flexibility, and smooth checkout journeys. From custom multi-vendor platforms to localized omnichannel storefronts, we build platforms that drive transactions and streamline order fulfillment.",
    iconName: "cart-shopping",
    features: [
      "Custom Storefronts & Checkout Flows",
      "Catalog, Variant, & Inventory Management",
      "Multi-Currency & Localized Payment Gateways",
      "Automated Order Processing & Invoicing",
      "Discount Engines & Coupon Management",
      "Customer Portal & Order Tracking",
    ],
    capabilities: [
      {
        title: "Direct-to-Consumer (D2C) Stores",
        description: "High-conversion digital storefronts built with fast rendering, structured product catalogs, and simple payment flows.",
      },
      {
        title: "B2B Wholesale Portals",
        description: "Tiered pricing matrices, bulk ordering workflows, corporate invoicing, and credit-limit management.",
      },
      {
        title: "Omnichannel Order Sync",
        description: "Unifying stock counts and orders across digital storefronts and brick-and-mortar retail outlets.",
      },
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe / Local Payment Gateways", "Redis", "Tailwind CSS"],
    deliverables: [
      "Complete e-commerce web platform",
      "Administrative dashboard for product and order management",
      "Payment gateway sandbox and live setup",
      "Customer notification and receipt email workflows",
    ],
    targetAudience: "Retailers, wholesalers, and manufacturers aiming to launch or modernize their digital sales channels.",
  },
  {
    id: "custom-business-software",
    slug: "custom-business-software",
    title: "Custom Business Software",
    shortDescription: "Software systems designed around specific business workflows and operational requirements.",
    fullDescription:
      "Off-the-shelf software often forces businesses into rigid constraints. EagleSoft develops bespoke enterprise software systems engineered specifically around your organizational workflows, eliminating redundant manual steps and unifying operational data.",
    iconName: "gears",
    features: [
      "Bespoke ERP & Workflow Engines",
      "Internal Task & Approval Systems",
      "Custom Reporting & Analytics Dashboards",
      "Document Generation & Archival Systems",
      "Legacy System Migration & Modernization",
      "Multi-Departmental Access Governance",
    ],
    capabilities: [
      {
        title: "Operational Automation",
        description: "Digitizing manual paper trails, approval hierarchies, and repetitive clerical tasks into automated pipelines.",
      },
      {
        title: "Centralized Data Repositories",
        description: "Connecting previously isolated spreadsheets and departmental databases into a coherent single source of truth.",
      },
      {
        title: "Custom Audit & Compliance Tracking",
        description: "Timestamped audit logs and compliance reporting tailored to industry regulatory standards.",
      },
    ],
    technologies: ["TypeScript", "Next.js", "Node.js / Express", "PostgreSQL", "Docker", "Redis"],
    deliverables: [
      "Custom business software system",
      "Role-based permission architecture",
      "Database schema definitions and migration scripts",
      "Staff training materials and user manuals",
    ],
    targetAudience: "Established enterprises and growing companies with specific operational workflows not solved by generic SaaS tools.",
  },
  {
    id: "pos-inventory-systems",
    slug: "pos-inventory-systems",
    title: "POS & Inventory Systems",
    shortDescription: "Reliable business systems for managing sales, products, inventory, customers, and daily operations.",
    fullDescription:
      "We design reliable Point of Sale (POS) and inventory control systems built to withstand the demands of fast-paced retail and warehouse environments. Our architectures ensure continuous operation, barcode scanner support, and real-time stock reconciliations.",
    iconName: "boxes-stacked",
    features: [
      "Fast Barcode-Driven Checkout & Billing",
      "Multi-Branch Stock Synchronization",
      "Supplier Management & Purchase Orders",
      "Automated Low-Stock Alerts & Reorder Points",
      "Receipt Printer & Cash Drawer Integration",
      "Daily Sales Reconciliation & Profit Margins",
    ],
    capabilities: [
      {
        title: "Multi-Store Retail POS",
        description: "Centralized inventory management across multiple physical branches with instant inter-branch transfer logging.",
      },
      {
        title: "Warehouse Stock Ledger",
        description: "Batch tracking, expiration date monitoring, serial number tracking, and physical inventory auditing.",
      },
      {
        title: "Offline-Resilient Counter Terminals",
        description: "Continued billing during temporary internet outages, syncing transactions when connectivity resumes.",
      },
    ],
    technologies: ["Electron", "React", "Node.js", "SQLite / PostgreSQL", "WebSockets", "Thermal Printer Protocols"],
    deliverables: [
      "Counter POS terminal software",
      "Central web dashboard for head-office management",
      "Hardware setup guidelines (barcode scanner, thermal printer, cash drawer)",
      "Data export modules for accounting reconciliation",
    ],
    targetAudience: "Retail stores, wholesale distributors, supermarkets, and multi-location retail chains.",
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription: "Clean, intuitive interfaces that make digital products easier and more enjoyable to use.",
    fullDescription:
      "Effective design is about clarity, efficiency, and purposeful user journeys. EagleSoft crafts comprehensive design systems, high-fidelity prototypes, and intuitive interfaces that reduce user error, accelerate task completion, and strengthen brand credibility.",
    iconName: "pen-ruler",
    features: [
      "User Flow & Information Architecture",
      "Wireframing & Interactive Prototyping",
      "Design Systems & Component Libraries",
      "Usability Testing & Task Completion Audits",
      "Responsive Layouts Across All Viewports",
      "Developer-Ready Design Handoff Specs",
    ],
    capabilities: [
      {
        title: "Product Discovery & Wireframing",
        description: "Mapping user personas and wireframing end-to-end user journeys before writing a single line of code.",
      },
      {
        title: "Corporate Design Systems",
        description: "Scalable typography, color tokens, and modular components guaranteeing visual consistency across digital products.",
      },
      {
        title: "UX Optimization & Heuristic Audits",
        description: "Identifying friction points, drop-off bottlenecks, and visual clutter in existing software applications.",
      },
    ],
    technologies: ["Figma", "Design Tokens", "Component Prototyping", "Accessibility (WCAG 2.1) Guidelines"],
    deliverables: [
      "Complete Figma design files with interactive prototypes",
      "Design system component guidelines & tokens",
      "SVG icon and illustration asset exports",
      "Annotated developer handoff documentation",
    ],
    targetAudience: "Businesses launching new software products or redesigning legacy interfaces for modern usability standards.",
  },
  {
    id: "cloud-deployment",
    slug: "cloud-deployment",
    title: "Cloud & Deployment",
    shortDescription: "Deployment and infrastructure solutions for modern applications.",
    fullDescription:
      "We design resilient, secure cloud architectures that ensure your applications remain available, performant, and protected against data loss. From automated CI/CD deployment pipelines to server monitoring and containerization, we handle the infrastructure so your team can focus on business growth.",
    iconName: "cloud",
    features: [
      "Automated CI/CD Deployment Pipelines",
      "Containerization with Docker & Compose",
      "Cloud Infrastructure Provisioning (AWS / DigitalOcean / Vercel)",
      "SSL, DNS, & Web Application Firewall (WAF) Setup",
      "Automated Database Backups & Disaster Recovery",
      "Server Health & Uptime Monitoring",
    ],
    capabilities: [
      {
        title: "Zero-Downtime Deployments",
        description: "Configuring rolling updates and blue-green deployments so new releases never interrupt active business users.",
      },
      {
        title: "Infrastructure Cost Optimization",
        description: "Right-sizing compute instances, utilizing CDN caching, and trimming unnecessary cloud expenditures.",
      },
      {
        title: "Data Backup & Recovery Protocols",
        description: "Automating scheduled offsite database snapshots and verifiable restoration routines.",
      },
    ],
    technologies: ["Docker", "Linux (Ubuntu)", "Nginx", "AWS", "DigitalOcean", "GitHub Actions", "PostgreSQL"],
    deliverables: [
      "Configured cloud server environment",
      "Automated CI/CD deployment pipeline",
      "Automated daily backup configuration",
      "Server maintenance manual and credential vaults",
    ],
    targetAudience: "Organizations looking for reliable, hardened server infrastructure without the overhead of full-time DevOps staff.",
  },
  {
    id: "maintenance-support",
    slug: "maintenance-support",
    title: "Maintenance & Support",
    shortDescription: "Continuous improvements, maintenance, bug fixes, and technical support.",
    fullDescription:
      "Software requires ongoing attention to stay secure, compatible, and effective as business needs evolve. EagleSoft provides dedicated post-launch support agreements, security patching, library upgrades, and continuous feature enhancements.",
    iconName: "headset",
    features: [
      "Scheduled Security Audits & Dependency Updates",
      "Proactive Performance Monitoring & Optimization",
      "Bug Triage & Rapid Resolution SLA",
      "Database Maintenance & Vacuuming",
      "Minor Feature Additions & Enhancements",
      "Technical Advisory & Roadmap Guidance",
    ],
    capabilities: [
      {
        title: "Scheduled Preventative Maintenance",
        description: "Routine inspections of system logs, software dependencies, and SSL certificates to eliminate vulnerabilities.",
      },
      {
        title: "Priority Incident Response",
        description: "Guaranteed turnaround times for critical issues affecting business transactions or user access.",
      },
      {
        title: "Continuous System Evolution",
        description: "Iterative enhancements based on user feedback, operational changes, and new business goals.",
      },
    ],
    technologies: ["Git", "Monitoring Tools", "Database Profilers", "Log Analyzers"],
    deliverables: [
      "Monthly health and uptime reports",
      "Version upgrade logs and change notes",
      "Direct technical liaison channel",
      "Guaranteed response SLAs",
    ],
    targetAudience: "Companies with active software platforms seeking ongoing technical stability and long-term partnership.",
  },
];
