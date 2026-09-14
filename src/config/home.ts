/**
 * EagleSoft Pvt Ltd - Homepage Data Configuration
 * Structured strictly as typed arrays of objects with friendly, clear, and attractive copy.
 */

import { IconName } from "@/src/components/common/Icon";

export interface HeroBackgroundSlide {
  id: string;
  image: string;
  badge: string;
  titleLine1: string;
  titleHighlight: string;
  description: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  metrics: Array<{ value: string; label: string; icon: IconName }>;
}

export interface QuickBuildOption {
  id: string;
  title: string;
  subtitle: string;
  icon: IconName;
  popular?: boolean;
  highlight: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  desc: string;
  icon: IconName;
  badge: string;
}

export interface FriendlyServiceItem {
  id: string;
  slug: string;
  title: string;
  simpleSummary: string;
  icon: IconName;
  colorBg: string;
  features: string[];
  idealFor: string;
}

export interface SimpleStepItem {
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: IconName;
  badge: string;
}

export interface InteractivePreviewItem {
  id: string;
  tabLabel: string;
  headline: string;
  summary: string;
  icon: IconName;
  features: string[];
  stats: { label: string; value: string };
  badgeText: string;
}

export interface WhyUsItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: IconName;
  featureList: string[];
  highlightBadge: string;
}

export const heroBackgroundSlidesData: HeroBackgroundSlide[] = [
  {
    id: "slide-software",
    image: "/hero/hero-slide-1.jpg",
    badge: "Modern Software Development & Technology",
    titleLine1: "BUILDING RELIABLE SOFTWARE.",
    titleHighlight: "EMPOWERING YOUR BUSINESS.",
    description:
      "We create high-performance web applications, mobile apps, and custom digital solutions tailored to solve your operational challenges and accelerate commercial growth.",
    primaryCtaText: "Get a Free Quote",
    secondaryCtaText: "Explore Our Services",
    secondaryCtaHref: "/services",
    metrics: [
      { value: "100%", label: "Code Ownership", icon: "shield" },
      { value: "Modern", label: "Production Tech Stack", icon: "code" },
      { value: "Dedicated", label: "SLA Post-Launch Support", icon: "headset" },
    ],
  },
  {
    id: "slide-enterprise",
    image: "/hero/hero-slide-2.jpg",
    badge: "Enterprise Cloud & Workflow Automation",
    titleLine1: "CENTRALIZING OPERATIONS.",
    titleHighlight: "AUTOMATING WORKFLOWS.",
    description:
      "Replace messy spreadsheets with bespoke enterprise ERP software, digital approval hierarchies, and secure cloud databases engineered for long-term scalability.",
    primaryCtaText: "Request Business Software Scoping",
    secondaryCtaText: "View Industry Solutions",
    secondaryCtaHref: "/solutions",
    metrics: [
      { value: "85%", label: "Less Manual Paperwork", icon: "bolt" },
      { value: "100%", label: "Immutable Audit Ledger", icon: "document" },
      { value: "Zero", label: "Downtime Cloud Architecture", icon: "cloud" },
    ],
  },
  {
    id: "slide-retail",
    image: "/hero/hero-slide-3.jpg",
    badge: "Smart Retail POS & Multi-Store Inventory",
    titleLine1: "HIGH-SPEED RETAIL BILLING.",
    titleHighlight: "REAL-TIME STOCK SYNC.",
    description:
      "Never lose sales to slow checkout queues or stockouts. Offline-resilient Point of Sale with barcode scanning and instant multi-branch inventory synchronization.",
    primaryCtaText: "Request POS Quotation",
    secondaryCtaText: "View Solution Blueprints",
    secondaryCtaHref: "/projects",
    metrics: [
      { value: "< 500ms", label: "Fast Barcode Scanning", icon: "shop" },
      { value: "Offline", label: "Local Terminal Cache", icon: "boxes-stacked" },
      { value: "Live", label: "Sales & Margin Analytics", icon: "chart" },
    ],
  },
];

export const quickBuildOptionsData: QuickBuildOption[] = [
  {
    id: "quick-web",
    title: "Web Applications",
    subtitle: "Fast, modern web platforms & portals",
    icon: "laptop-code",
    popular: true,
    highlight: "React & Next.js",
  },
  {
    id: "quick-mobile",
    title: "Mobile Apps",
    subtitle: "Smooth iOS & Android apps",
    icon: "mobile-screen",
    highlight: "Cross-Platform",
  },
  {
    id: "quick-pos",
    title: "POS & Inventory",
    subtitle: "Fast billing & multi-store stock",
    icon: "shop",
    popular: true,
    highlight: "Offline-Ready",
  },
  {
    id: "quick-custom",
    title: "Custom Software",
    subtitle: "Automate daily business operations",
    icon: "gears",
    highlight: "Tailored to You",
  },
];

export const friendlyBenefitsData: BenefitItem[] = [
  {
    id: "ben-tailored",
    title: "Made for Your Exact Business",
    desc: "We don't force you into rigid generic templates. Every feature is built around how your business actually runs.",
    icon: "bullseye",
    badge: "100% Custom",
  },
  {
    id: "ben-simple",
    title: "Simple & Easy to Use",
    desc: "Your staff shouldn't need weeks of training. We design clean, intuitive screens that anyone can use right away.",
    icon: "pen-ruler",
    badge: "Zero Confusion",
  },
  {
    id: "ben-ownership",
    title: "You Own 100% of the Code",
    desc: "No locked subscriptions or hostage software. You receive full ownership of the source code and database.",
    icon: "shield",
    badge: "Full Ownership",
  },
  {
    id: "ben-support",
    title: "Always-Here Support",
    desc: "We don't disappear after launch. Our team is available for updates, improvements, and technical support.",
    icon: "headset",
    badge: "Dedicated Partner",
  },
];

export const friendlyServicesData: FriendlyServiceItem[] = [
  {
    id: "service-web",
    slug: "web-development",
    title: "Web Development",
    simpleSummary: "Fast, responsive, and beautiful websites and web apps that attract customers and handle high traffic.",
    icon: "laptop-code",
    colorBg: "bg-blue-50 text-[#0288d1]",
    features: [
      "Mobile-friendly on all phones & tablets",
      "Fast page load speed that ranks on Google",
      "Secure customer accounts and portals",
      "Easy management dashboard for your team",
    ],
    idealFor: "Companies needing customer portals, booking systems, or modern business websites.",
  },
  {
    id: "service-mobile",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    simpleSummary: "Clean, high-speed mobile applications for iPhone and Android that keep customers coming back.",
    icon: "mobile-screen",
    colorBg: "bg-cyan-50 text-[#03a9f4]",
    features: [
      "Works on both iOS and Android",
      "Instant push notifications & alerts",
      "Offline mode when internet is disconnected",
      "Fast, secure in-app payments",
    ],
    idealFor: "Businesses wanting to connect with customers directly on their smartphones.",
  },
  {
    id: "service-pos",
    slug: "pos-inventory-systems",
    title: "POS & Inventory Systems",
    simpleSummary: "Never lose track of your stock again. Fast counter billing, barcode scanning, and multi-branch inventory.",
    icon: "boxes-stacked",
    colorBg: "bg-sky-50 text-[#0288d1]",
    features: [
      "Sub-second barcode scan & receipt printing",
      "Keeps billing even when internet goes down",
      "Automatic alerts before items run out of stock",
      "View sales and profits live from your phone",
    ],
    idealFor: "Retail stores, wholesale shops, supermarkets, and multi-location businesses.",
  },
  {
    id: "service-ecommerce",
    slug: "ecommerce-solutions",
    title: "E-Commerce Online Stores",
    simpleSummary: "Complete online shops that make selling easy — from catalog display to checkout and courier shipping.",
    icon: "cart-shopping",
    colorBg: "bg-indigo-50 text-[#448aff]",
    features: [
      "Smooth 1-page checkout that boosts orders",
      "Accept cards, bank transfers, or cash on delivery",
      "Automated order tracking for buyers",
      "Synced inventory with your physical store",
    ],
    idealFor: "Retailers and brands looking to sell products nationwide and globally.",
  },
  {
    id: "service-custom",
    slug: "custom-business-software",
    title: "Custom Business Software",
    simpleSummary: "Replace messy spreadsheets with one simple system that handles your invoices, tasks, and employees.",
    icon: "gears",
    colorBg: "bg-blue-50 text-[#0288d1]",
    features: [
      "Automate daily repetitive paperwork",
      "Digital approvals for expenses and orders",
      "Role permissions: staff see only what they need",
      "Clear charts showing company performance",
    ],
    idealFor: "Growing organizations with specific workflows that off-the-shelf software can't handle.",
  },
  {
    id: "service-uiux",
    slug: "ui-ux-design",
    title: "UI/UX Interface Design",
    simpleSummary: "Clean, attractive designs that make complex software feel delightfully simple and intuitive to use.",
    icon: "pen-ruler",
    colorBg: "bg-teal-50 text-[#0288d1]",
    features: [
      "Modern, polished visual design",
      "Interactive prototype to test before coding",
      "Tested for quick and error-free task completion",
      "Brand-aligned colors and typography",
    ],
    idealFor: "Startups and companies launching a new software product or revamping an old system.",
  },
  {
    id: "service-cloud",
    slug: "cloud-deployment",
    title: "Cloud & Deployment",
    simpleSummary: "We set up secure cloud servers that keep your website online 24/7 with automatic daily backups.",
    icon: "cloud",
    colorBg: "bg-cyan-50 text-[#03a9f4]",
    features: [
      "99.9% uptime with fast cloud servers",
      "Automated daily backups to protect your data",
      "Free SSL security certificate included",
      "Protection against hacking and crashes",
    ],
    idealFor: "Any software project that needs to run smoothly without technical headaches.",
  },
  {
    id: "service-support",
    slug: "maintenance-support",
    title: "Maintenance & Support",
    simpleSummary: "Peace of mind. We maintain your software, fix issues promptly, and add new features as you grow.",
    icon: "headset",
    colorBg: "bg-sky-50 text-[#0288d1]",
    features: [
      "Direct technical helpline for your team",
      "Regular speed and security checkups",
      "Fast bug fixes and version updates",
      "New feature additions on demand",
    ],
    idealFor: "Businesses that want a dependable technology partner for the long run.",
  },
];

export const simpleStepsData: SimpleStepItem[] = [
  {
    number: "01",
    title: "Tell Us What You Need",
    shortDesc: "Initial Friendly Chat",
    fullDesc:
      "We discuss your business challenges and goals in plain, simple language. No confusing tech jargon. We deliver a clear plan with timeline and fixed pricing.",
    icon: "lightbulb",
    badge: "Free Consultation",
  },
  {
    number: "02",
    title: "We Design & Build",
    shortDesc: "Weekly Working Demos",
    fullDesc:
      "We build your software step-by-step. You see working previews every week so you can test, give feedback, and ensure everything matches your vision.",
    icon: "code",
    badge: "Transparent Progress",
  },
  {
    number: "03",
    title: "Launch & Support",
    shortDesc: "Go Live With Confidence",
    fullDesc:
      "We launch your software, train your team, and provide ongoing support so everything runs smoothly every single day.",
    icon: "headset",
    badge: "Continuous Care",
  },
];

export const interactivePreviewsData: InteractivePreviewItem[] = [
  {
    id: "prev-pos",
    tabLabel: "Retail POS & Stock",
    headline: "Fast Counter Billing & Multi-Store Inventory",
    summary:
      "Engineered for fast-paced retail shops. Cashiers scan barcodes and print receipts in under half a second. Store owners track stock and daily profits live from their smartphones.",
    icon: "shop",
    features: [
      "Barcode scanning & thermal receipt printing",
      "Works 100% offline during internet cuts",
      "Instant branch-to-branch stock transfers",
      "Daily profit calculation & cashier shift logs",
    ],
    stats: { label: "Average Checkout Time", value: "< 2 Seconds" },
    badgeText: "For Retail & Wholesale",
  },
  {
    id: "prev-erp",
    tabLabel: "Business Management ERP",
    headline: "Centralize Invoices, Requisitions & Tasks",
    summary:
      "Say goodbye to version-confused Excel sheets. One clean system connects all your departments, approvals, and financial logs with complete transparency.",
    icon: "briefcase",
    features: [
      "Multi-level approval queues for expenses",
      "Automated PDF voucher & invoice generation",
      "Employee task tracking & deadlines",
      "Clear visual charts of monthly company health",
    ],
    stats: { label: "Paperwork Time Saved", value: "Over 80%" },
    badgeText: "For Growing Companies",
  },
  {
    id: "prev-web",
    tabLabel: "Web & Customer Portals",
    headline: "Modern Portals Your Customers Will Love",
    summary:
      "Fast, responsive web applications where clients can create accounts, track orders, book appointments, and pay securely from any phone or computer.",
    icon: "laptop-code",
    features: [
      "Blazing fast loading on 4G and Wi-Fi",
      "Self-service accounts for your customers",
      "Online payment gateway integration",
      "Automated SMS and email receipts",
    ],
    stats: { label: "Customer Satisfaction", value: "99.4%" },
    badgeText: "For Customer Service",
  },
];

export const whyChooseUsData: WhyUsItem[] = [
  {
    id: "why-business",
    number: "01",
    title: "Built for Your Exact Needs",
    description:
      "We design around how your team actually works instead of forcing your business into rigid generic software.",
    icon: "bullseye",
    highlightBadge: "Custom Tailored",
    featureList: ["Matches your daily workflow", "Cuts out repetitive paperwork", "Staff learns it in hours"],
  },
  {
    id: "why-tech",
    number: "02",
    title: "Fast & Modern Technology",
    description:
      "We use modern, battle-tested software tools that ensure snappy performance, high speed, and zero crashes.",
    icon: "code",
    highlightBadge: "Snappy & Fast",
    featureList: ["Next.js & React frameworks", "Sub-second response times", "Built to scale without slowing down"],
  },
  {
    id: "why-scale",
    number: "03",
    title: "Ready for Future Growth",
    description:
      "As your customers, branches, and orders grow, your software expands smoothly without requiring costly rebuilds.",
    icon: "layers",
    highlightBadge: "Scales Easily",
    featureList: ["Handles thousands of users", "Multi-branch store synchronization", "Cloud database backups"],
  },
  {
    id: "why-ux",
    number: "04",
    title: "Delightfully Simple Interfaces",
    description:
      "We obsess over clean screens, large buttons, and clear numbers so anyone can use the software without confusion.",
    icon: "pen-ruler",
    highlightBadge: "Super Easy",
    featureList: ["Clean and pleasant colors", "Works on phones & computers", "No confusing technical clutter"],
  },
  {
    id: "why-reliability",
    number: "05",
    title: "Dependable & Secure",
    description:
      "Your company data is protected with enterprise security encryption, automatic daily backups, and strict privacy.",
    icon: "shield",
    highlightBadge: "100% Secure",
    featureList: ["Encrypted transactions", "Automatic daily cloud backups", "Role permissions for staff"],
  },
  {
    id: "why-support",
    number: "06",
    title: "Friendly Long-Term Support",
    description:
      "Our team is always reachable whenever you need a quick fix, an update, or a new feature as your business grows.",
    icon: "headset",
    highlightBadge: "Always Here",
    featureList: ["Direct WhatsApp & phone support", "Regular maintenance checkups", "Fast updates on request"],
  },
];
