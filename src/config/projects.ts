/**
 * EagleSoft Pvt Ltd - Projects & Solutions Showcase
 * Realistic project architectures and functional prototypes.
 * Structured cleanly so client-specific case studies can be inserted as they complete.
 */

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "Web Applications" | "Mobile Applications" | "E-Commerce" | "Business Systems" | "POS & Inventory" | "Custom Software";
  tagline: string;
  description: string;
  challenge: string;
  architecture: string;
  keyFeatures: string[];
  technologies: string[];
  systemType: "Production Prototype" | "Solution Architecture" | "Internal Framework" | "Client System Template";
  metrics: { label: string; value: string }[];
}

export const projectCategories = [
  "All",
  "Web Applications",
  "Mobile Applications",
  "E-Commerce",
  "Business Systems",
  "POS & Inventory",
  "Custom Software",
] as const;

export const projectsData: ProjectItem[] = [
  {
    id: "omnichannel-retail-pos",
    slug: "omnichannel-retail-pos",
    title: "Omnichannel POS & Multi-Store Inventory Platform",
    category: "POS & Inventory",
    tagline: "High-speed retail counter billing with real-time distributed inventory synchronization.",
    description:
      "A comprehensive retail Point of Sale solution architected for multi-branch retail environments, combining offline-resilient cashier terminals with real-time cloud inventory synchronization.",
    challenge:
      "Retailers running multi-branch stores frequently face network interruptions at checkout counters, inaccurate stock counts between stores, and delayed end-of-day sales reconciliation.",
    architecture:
      "Engineered with a local offline-first SQLite cache on terminal machines paired with a cloud PostgreSQL synchronization hub using event-driven WebSockets.",
    keyFeatures: [
      "Sub-second barcode scanning and receipt generation",
      "Offline cashier mode with automatic reconciliation upon reconnection",
      "Multi-store inventory transfers with transit tracking",
      "Automated vendor purchase order creation based on reorder thresholds",
      "Granular cashier shift reconciliation and cash drawer reporting",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "SQLite", "WebSockets"],
    systemType: "Solution Architecture",
    metrics: [
      { label: "Checkout Latency", value: "< 500ms" },
      { label: "Offline Durability", value: "100% Local" },
      { label: "Stock Sync Latency", value: "< 2s Cloud Sync" },
    ],
  },
  {
    id: "business-erp-platform",
    slug: "business-erp-platform",
    title: "Integrated Enterprise Operations & Workflow ERP",
    category: "Business Systems",
    tagline: "Centralized departmental workflows, digital requisition approvals, and executive visibility.",
    description:
      "A custom software system designed to replace ad-hoc spreadsheets and disjointed tools with structured departmental requisition workflows, vendor procurement records, and role-governed data pipelines.",
    challenge:
      "Operational managers wasted hours chasing manual paperwork and verifying budget approvals across distributed offices with no central audit trail.",
    architecture:
      "Full-stack Next.js and Node.js microservice architecture with PostgreSQL relational schemas, row-level security policies, and Redis-backed task queuing.",
    keyFeatures: [
      "Multi-tiered approval hierarchies for budget requests and purchase orders",
      "Document generation engine producing audit-compliant PDF vouchers",
      "Real-time department budget utilization dashboards",
      "Comprehensive immutable audit log recording every state alteration",
      "Role-based access control (RBAC) with granular functional permissions",
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Redis", "Tailwind CSS"],
    systemType: "Production Prototype",
    metrics: [
      { label: "Approval Cycle Time", value: "85% Reduction" },
      { label: "Audit Traceability", value: "100% Timestamped" },
      { label: "Role Accuracy", value: "Strict RBAC" },
    ],
  },
  {
    id: "b2b-commerce-portal",
    slug: "b2b-commerce-portal",
    title: "B2B Wholesale Procurement & Order Portal",
    category: "E-Commerce",
    tagline: "Tiered wholesale pricing, bulk order matrix, and customer credit ledger management.",
    description:
      "A dedicated wholesale ordering portal enabling commercial buyers to place volume orders, access customized contract pricing matrices, and inspect shipment tracking in real-time.",
    challenge:
      "Wholesale distributors traditionally manage customer purchase orders manually over telephone or email, resulting in order discrepancies, pricing errors, and inefficient warehouse scheduling.",
    architecture:
      "Server-rendered Next.js storefront backed by high-throughput database query optimization, structured catalog variants, and automated PDF invoice generation.",
    keyFeatures: [
      "Customized negotiated price lists per customer account tier",
      "Fast bulk order matrix allowing SKU-based volume uploads",
      "Credit line management with automated invoicing and statement generation",
      "Real-time inventory reserve to avoid ordering depleted stock",
      "Self-service order history and tracking documentation download",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    systemType: "Solution Architecture",
    metrics: [
      { label: "Catalog Scale", value: "10,000+ SKUs" },
      { label: "Order Entry Speed", value: "4x Faster" },
      { label: "Uptime Target", value: "99.9%" },
    ],
  },
  {
    id: "field-service-mobile-app",
    slug: "field-service-mobile-app",
    title: "Mobile Field Service & Dispatch System",
    category: "Mobile Applications",
    tagline: "Field technician task allocation, digital job sheets, and offline signature capture.",
    description:
      "A cross-platform mobile application engineered for field maintenance technicians, utility inspectors, and delivery teams, providing instant work orders, geolocation logging, and customer sign-off.",
    challenge:
      "Field engineers operating in basements or remote industrial sites frequently encounter zero mobile cellular reception, causing conventional cloud apps to freeze and lose customer sign-offs.",
    architecture:
      "React Native mobile client with local offline database storage, automatic background syncing when cell service recovers, and encrypted photo upload pipelines.",
    keyFeatures: [
      "Offline task completion with local caching of customer work orders",
      "GPS route verification and customer arrival timestamps",
      "Digital customer signature capture and on-device photo attachments",
      "Instant push notifications for urgent dispatch reassignments",
      "Centralized dispatcher web dashboard with live map view",
    ],
    technologies: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Google Maps API"],
    systemType: "Production Prototype",
    metrics: [
      { label: "Offline Capability", value: "Complete Offline Flow" },
      { label: "Sync Accuracy", value: "Zero Data Loss" },
      { label: "Battery Efficiency", value: "Optimized GPS" },
    ],
  },
  {
    id: "logistics-fleet-engine",
    slug: "logistics-fleet-engine",
    title: "Logistics Consignment & Dispatch Engine",
    category: "Custom Software",
    tagline: "End-to-end waypoint tracking, parcel manifesting, and automated courier status updates.",
    description:
      "A custom logistics management platform built to orchestrate parcel intake, sorting hub manifests, inter-city linehaul dispatches, and last-mile delivery tracking.",
    challenge:
      "Freight operators faced manual manifest errors and high call center loads from customers querying package delivery status throughout the shipping lifecycle.",
    architecture:
      "Event-driven architecture with queue workers handling status transitions, barcode validation microservices, and public tracking endpoints with sub-100ms response times.",
    keyFeatures: [
      "High-speed barcode scanning interface for intake and sortation hubs",
      "Automated linehaul manifest generation and driver handoff logs",
      "Public tracking URL generator for real-time customer tracking",
      "Automated SMS/Email notification webhooks on milestone triggers",
      "Hub performance analytics measuring intake-to-dispatch turnaround",
    ],
    technologies: ["Node.js", "Express", "React", "PostgreSQL", "Redis", "Docker"],
    systemType: "Solution Architecture",
    metrics: [
      { label: "Scan Processing", value: "< 200ms" },
      { label: "Query Throughput", value: "1,500 req/sec" },
      { label: "Manifest Reliability", value: "Zero Missing Parcels" },
    ],
  },
  {
    id: "health-clinic-portal",
    slug: "health-clinic-portal",
    title: "Healthcare Clinic Management & Appointment Suite",
    category: "Web Applications",
    tagline: "Patient scheduling, consultation records, and digital prescription generation.",
    description:
      "A clean, role-governed healthcare management portal designed for multi-specialty clinics to streamline patient appointment scheduling, clinical note-taking, and digital prescription issuance.",
    challenge:
      "Clinics struggled with paper chart storage, schedule double-bookings, and difficulties retrieving past clinical history during rapid patient consultations.",
    architecture:
      "Secure Next.js application adhering to health data privacy best practices, encrypted patient databases, and responsive doctor workstation layouts.",
    keyFeatures: [
      "Interactive appointment scheduler preventing doctor overlap",
      "Structured clinical consultation notes with past prescription history",
      "Digital branded prescription generator with printable PDF output",
      "Patient appointment reminder SMS triggers",
      "Front-desk patient billing and daily collection tally",
    ],
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    systemType: "Solution Architecture",
    metrics: [
      { label: "Patient Scheduling", value: "Zero Overlaps" },
      { label: "Record Retrieval", value: "< 1 second" },
      { label: "Data Security", value: "AES-256 Encrypted" },
    ],
  },
];
