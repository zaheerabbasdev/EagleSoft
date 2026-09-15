/**
 * EagleSoft Pvt Ltd - Projects & Solutions Showcase
 * Realistic project architectures and functional prototypes.
 * Structured cleanly so client-specific case studies can be inserted as they complete.
 */

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "Web Applications" | "Mobile Applications" | "E-Commerce" | "Business Systems" | "POS & Inventory" | "Custom Software" | "Branding & Design";
  tagline: string;
  description: string;
  challenge: string;
  architecture: string;
  keyFeatures: string[];
  technologies: string[];
  systemType: "Production Prototype" | "Solution Architecture" | "Internal Framework" | "Client System Template" | "Client Deliverable";
  metrics: { label: string; value: string }[];
  /** Real client deliverable image (logo/app icon). When present, shown in card & detail headers instead of the abstract gradient block. */
  image?: string;
  /** "design" projects use creative-brief style copy & headings; "software" (default) uses architecture-style copy & headings. */
  kind?: "software" | "design";
}

export const projectCategories = [
  "All",
  "Web Applications",
  "Mobile Applications",
  "E-Commerce",
  "Business Systems",
  "POS & Inventory",
  "Custom Software",
  "Branding & Design",
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
    image: "/hero/hero-slide-3.jpg",
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
    image: "/hero/hero-slide-2.jpg",
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
    image: "/hero/hero-slide-1.jpg",
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
    image: "/hero/hero-slide-1.jpg",
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
    image: "/hero/hero-slide-2.jpg",
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
    image: "/hero/hero-slide-3.jpg",
    metrics: [
      { label: "Patient Scheduling", value: "Zero Overlaps" },
      { label: "Record Retrieval", value: "< 1 second" },
      { label: "Data Security", value: "AES-256 Encrypted" },
    ],
  },

  // --- Real Client Deliverables: Branding & Identity Design ---
  {
    id: "graphix-online-branding",
    slug: "graphix-online-branding",
    title: "Graphix Online Brand Identity",
    category: "Branding & Design",
    tagline: "Circular brand mark and identity system for a creative design studio.",
    description:
      "A complete logo and brand identity designed for Graphix Online, a creative design studio, balancing a playful color pencil motif with a clean, professional wordmark.",
    challenge:
      "The client needed a brand mark that felt creative and approachable while still reading as professional and trustworthy to prospective design clients, and that stayed legible at small social media avatar sizes.",
    architecture:
      "Designed as a circular badge mark so it drops cleanly into social profile photos and app avatars, with a simplified flat-color pencil icon and a paired script/sans wordmark for warmth and clarity.",
    keyFeatures: [
      "Primary circular logo mark optimized for avatar & favicon use",
      "Color pencil icon symbolizing creative design services",
      "Paired script and sans-serif wordmark lockup",
      "Brand color palette (red, green, blue accents on brand blue)",
      "Delivered in layered source files plus PNG/SVG exports",
    ],
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    systemType: "Client Deliverable",
    image: "/images/projects/graphix-online-logo.png",
    kind: "design",
    metrics: [
      { label: "Deliverable", value: "Full Logo Suite" },
      { label: "Formats", value: "PNG / SVG" },
      { label: "Use Case", value: "Social & Web" },
    ],
  },
  {
    id: "hussain-mobile-branding",
    slug: "hussain-mobile-branding",
    title: "Hussain Mobile Brand Identity",
    category: "Branding & Design",
    tagline: "Retail storefront logo and signage mark for a mobile phone dealership.",
    description:
      "A bold, high-contrast logo built for Hussain Mobile, a mobile phone retail business, designed to be instantly recognizable on storefront signage, receipts, and packaging.",
    challenge:
      "The client needed a distinctive mark that would stand out on a busy retail street, print cleanly in single-color for signage and stamps, and clearly communicate a technology/mobile retail identity.",
    architecture:
      "Built around a familiar tech-adjacent silhouette combined with a custom monogram and orbiting swoosh, with a tagline lockup and a high-contrast black-and-white palette for maximum print versatility.",
    keyFeatures: [
      "High-contrast primary mark for storefront signage",
      "Custom monogram with orbiting accent swoosh",
      "Tagline lockup: \"The Name of Excellence\"",
      "Single-color print-safe variant for stamps & receipts",
      "Delivered in layered source files plus PNG exports",
    ],
    technologies: ["Adobe Illustrator", "Adobe Photoshop"],
    systemType: "Client Deliverable",
    image: "/images/projects/hussain-mobile-logo.png",
    kind: "design",
    metrics: [
      { label: "Deliverable", value: "Signage-Ready Logo" },
      { label: "Formats", value: "PNG / Print" },
      { label: "Use Case", value: "Retail Storefront" },
    ],
  },
  {
    id: "synonyms-app-icon",
    slug: "synonyms-app-icon",
    title: "Synonyms App Icon Design",
    category: "Branding & Design",
    tagline: "Mobile app icon design for a synonyms & vocabulary reference app.",
    description:
      "A friendly, instantly-readable app icon designed for a mobile dictionary/thesaurus app, built to stand out on a crowded home screen while clearly signaling its purpose.",
    challenge:
      "The app needed an icon that communicated \"reference book / vocabulary\" at a glance, stayed legible at the smallest home-screen icon sizes, and matched platform app icon conventions.",
    architecture:
      "An open book silhouette paired with a rising sun motif and curved wordmark, set on a solid brand-blue rounded-square tile sized to platform app icon export specifications.",
    keyFeatures: [
      "Open book + sunrise icon symbolizing knowledge & discovery",
      "Curved wordmark integrated into the icon silhouette",
      "Rounded-square tile matching iOS/Android icon conventions",
      "Exported at full platform icon size set",
    ],
    technologies: ["Adobe Illustrator", "Figma"],
    systemType: "Client Deliverable",
    image: "/images/projects/synonyms-app-icon.png",
    kind: "design",
    metrics: [
      { label: "Deliverable", value: "App Icon Set" },
      { label: "Formats", value: "PNG (all sizes)" },
      { label: "Platform", value: "iOS & Android" },
    ],
  },
  {
    id: "scanner-app-icon",
    slug: "scanner-app-icon",
    title: "Document Scanner App Icon",
    category: "Branding & Design",
    tagline: "Mobile app icon design for a photo-to-text document scanning app.",
    description:
      "An app icon designed for a document scanning and text-extraction mobile app, combining an image glyph with a bold typographic mark to communicate the scan-to-text function instantly.",
    challenge:
      "The icon needed to visually explain a two-step function (scan an image, extract text) within a single small glyph, while standing out against typical camera/scanner app icons on the store.",
    architecture:
      "A layered composition placing a bold 'T' badge over a picture-frame glyph on a warm red tile, giving instant visual shorthand for \"image becomes text\" at a glance.",
    keyFeatures: [
      "Layered image + typography glyph composition",
      "High-contrast red tile for home-screen visibility",
      "Rounded-square tile matching platform icon conventions",
      "Exported at full platform icon size set",
    ],
    technologies: ["Adobe Illustrator", "Figma"],
    systemType: "Client Deliverable",
    image: "/images/projects/scanner-app-icon.png",
    kind: "design",
    metrics: [
      { label: "Deliverable", value: "App Icon Set" },
      { label: "Formats", value: "PNG (all sizes)" },
      { label: "Platform", value: "iOS & Android" },
    ],
  },
  {
    id: "et-brand-identity",
    slug: "et-brand-identity",
    title: "ET Brand Identity Design",
    category: "Branding & Design",
    tagline: "Abstract monogram logo design built around an 'ET' initial lockup.",
    description:
      "A modern abstract monogram logo built around the initials \"ET\", using a dynamic three-color arc motif to suggest movement, technology, and forward momentum.",
    challenge:
      "The client wanted a distinctive initials-based mark that avoided looking generic, worked as a standalone icon separate from the initials, and used a multi-color palette without feeling cluttered.",
    architecture:
      "A layered teardrop arc in three brand colors wraps around a bold two-letter monogram, allowing the arc motif and the lettermark to be used independently across different brand touchpoints.",
    keyFeatures: [
      "Custom two-letter 'ET' monogram lettermark",
      "Independent three-color arc motif for standalone use",
      "Palette built for both light and dark applications",
      "Delivered in layered source files plus PNG/SVG exports",
    ],
    technologies: ["Adobe Illustrator", "Adobe Photoshop"],
    systemType: "Client Deliverable",
    image: "/images/projects/et-brand-logo.png",
    kind: "design",
    metrics: [
      { label: "Deliverable", value: "Monogram Logo Suite" },
      { label: "Formats", value: "PNG / SVG" },
      { label: "Use Case", value: "Multi-Platform Brand" },
    ],
  },
  {
    id: "ft-brand-identity",
    slug: "ft-brand-identity",
    title: "FT Brand Identity Design",
    category: "Branding & Design",
    tagline: "Bold interlocking monogram logo built around an 'FT' initial lockup.",
    description:
      "A bold, high-contrast monogram logo built around the initials \"FT\", using an interlocking two-tone ribbon shape to create a distinctive, memorable brand mark.",
    challenge:
      "The client needed a strong standalone mark that would work as a small app/profile icon, read clearly at a glance, and feel premium without relying on a literal illustration.",
    architecture:
      "Two offset ribbon shapes in contrasting brand colors interlock to house the 'F' and 'T' letterforms, with a soft drop-shadow treatment for depth on both light and dark backgrounds.",
    keyFeatures: [
      "Custom interlocking two-tone ribbon monogram",
      "Legible at small avatar & favicon sizes",
      "Two-color palette with contrast-safe letterforms",
      "Delivered in layered source files plus PNG exports",
    ],
    technologies: ["Adobe Illustrator", "Adobe Photoshop"],
    systemType: "Client Deliverable",
    image: "/images/projects/ft-brand-logo.png",
    kind: "design",
    metrics: [
      { label: "Deliverable", value: "Monogram Logo Suite" },
      { label: "Formats", value: "PNG / SVG" },
      { label: "Use Case", value: "App & Profile Icon" },
    ],
  },
];
