/**
 * EagleSoft Pvt Ltd - Business Solutions Configuration
 * Problem-to-solution mappings for target business verticals.
 */

export interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  outcomes: string[];
  keyModules: string[];
  iconName: "shop" | "cart-shopping" | "utensils" | "truck-fast" | "briefcase" | "users" | "building";
}

export const solutionsData: SolutionItem[] = [
  {
    id: "retail-pos",
    slug: "retail-pos",
    title: "Solutions for Retail & Point of Sale",
    subtitle: "Unified inventory control, checkout speed, and multi-branch visibility.",
    problem:
      "Retail businesses frequently struggle with inventory discrepancies between store shelves and stockrooms, sluggish counter checkout queues during peak rush hours, and fragmented sales records across multiple branch locations.",
    solution:
      "EagleSoft designs centralized retail platforms pairing fast, barcode-enabled counter billing with real-time multi-branch stock reconciliation. Store managers gain instant visibility into live inventory, fast-moving items, and automated reorder triggers.",
    outcomes: [
      "Elimination of stock reconciliation errors across branch stores",
      "Faster customer checkout throughput with barcode scanning",
      "Automated low-inventory notifications preventing stockouts",
      "Unified sales reporting accessible to management from any device",
    ],
    keyModules: ["Quick Billing Terminal", "Multi-Warehouse Inventory", "Supplier Order Management", "Sales & Profit Margin Analytics"],
    iconName: "shop",
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    title: "Solutions for E-Commerce & Omnichannel Retail",
    subtitle: "Scalable digital storefronts connected directly to operational backends.",
    problem:
      "Many e-commerce operations lose sales due to slow mobile loading speeds, disjointed inventory between online stores and physical outlets, and manual order entry leading to fulfillment delays.",
    solution:
      "We build robust digital commerce platforms engineered with sub-second page delivery, integrated payment gateways, and automated stock synchronization. Orders flow directly into warehouse packing queues with instant customer SMS and email status updates.",
    outcomes: [
      "Streamlined multi-channel inventory avoiding accidental overselling",
      "High mobile conversion rates through simplified one-page checkouts",
      "Automated order routing directly to shipping partners",
      "Integrated customer account portals for tracking and repeat orders",
    ],
    keyModules: ["Dynamic Product Catalog", "Secure Payment Gateway", "Automated Dispatch Routing", "Customer Order Tracking Portal"],
    iconName: "cart-shopping",
  },
  {
    id: "restaurant",
    slug: "restaurant",
    title: "Solutions for Food & Restaurant Operations",
    subtitle: "Table management, Kitchen Display Systems (KDS), and online ordering.",
    problem:
      "Restaurants experience costly communication breakdowns between floor waitstaff and the kitchen line, order ticket delays, and excessive commissions charged by third-party delivery aggregators.",
    solution:
      "EagleSoft develops integrated restaurant software connecting digital menu order capture, instant kitchen display screens, and direct restaurant-owned online ordering. Kitchen stations receive orders instantly by category while floor managers monitor table turnover.",
    outcomes: [
      "Zero miscommunicated orders between waitstaff and kitchen stations",
      "Increased profit margins via commission-free direct online ordering",
      "Accurate recipe-level ingredient inventory depletion tracking",
      "Real-time visibility into peak rush hour table turnarounds",
    ],
    keyModules: ["Table & Waiter App", "Kitchen Display Screen (KDS)", "Recipe & Ingredient Stock Control", "Direct Digital Ordering"],
    iconName: "utensils",
  },
  {
    id: "logistics",
    slug: "logistics",
    title: "Solutions for Logistics & Supply Chain",
    subtitle: "Consignment tracking, fleet dispatching, and warehouse custody handoffs.",
    problem:
      "Logistics providers deal with lack of real-time shipment visibility, paper manifest errors, missed delivery windows, and disputes over package condition at handoff checkpoints.",
    solution:
      "We engineer cloud-based freight and delivery dispatch engines featuring mobile proof-of-delivery, barcode waypoint scanning, driver route optimization, and customer self-service tracking links.",
    outcomes: [
      "Full traceability of consignments from origin pickup to final destination",
      "Digital proof-of-delivery with electronic signatures and photographic records",
      "Reduced fuel expenditures through optimized route dispatching",
      "Dramatic reduction in customer support inquiry call volumes",
    ],
    keyModules: ["Dispatch Scheduling Engine", "Driver Mobile Proof-of-Delivery", "Waypoint Barcode Scanning", "Public Consignment Tracking"],
    iconName: "truck-fast",
  },
  {
    id: "business-management",
    slug: "business-management",
    title: "Solutions for Business Operations & ERP",
    subtitle: "Custom operational software tailored to your specific organizational hierarchy.",
    problem:
      "Companies often rely on an unmanageable tangle of disjointed spreadsheets, email chains, and disconnected software tools to run daily operations, resulting in duplicate work and poor management visibility.",
    solution:
      "EagleSoft architects unified business management software uniting task assignments, department requisition approvals, operational documentation, and executive dashboard metrics into one governed system.",
    outcomes: [
      "Complete elimination of fragmented spreadsheet version confusion",
      "Structured multi-level approval hierarchies for requisitions and expenses",
      "Real-time operational KPIs accessible to corporate leadership",
      "Immutable audit trails for accounting and internal compliance",
    ],
    keyModules: ["Approval Workflow Engine", "Centralized Document Archive", "Employee Task Allocator", "Executive KPI Dashboard"],
    iconName: "briefcase",
  },
  {
    id: "marketplaces",
    slug: "marketplaces",
    title: "Solutions for Service Platforms & Marketplaces",
    subtitle: "Connecting service providers with clients via governed digital portals.",
    problem:
      "Platform operators encounter significant friction managing onboarding vetting, automated escrow or payout calculations, and booking schedules across hundreds of independent service providers.",
    solution:
      "We build multi-sided marketplace platforms incorporating provider verification pipelines, automated booking calenders, rating feedback loops, and transparent transaction commissions.",
    outcomes: [
      "Self-service onboarding workflows reducing administrative overhead",
      "Automated booking calendars preventing double-booking errors",
      "Trust-building customer review and rating mechanisms",
      "Configurable commission splitting and payout reporting",
    ],
    keyModules: ["Provider Onboarding & Verification", "Interactive Booking Calendar", "Escrow & Payout Ledger", "Two-Way Rating System"],
    iconName: "users",
  },
  {
    id: "enterprise",
    slug: "enterprise",
    title: "Solutions for Custom Enterprise Applications",
    subtitle: "High-security, scalable software engineered for specialized corporate demands.",
    problem:
      "Enterprise organizations with unique compliance mandates, legacy mainframes, or specialized proprietary algorithms cannot function within commercial off-the-shelf software limitations.",
    solution:
      "EagleSoft provides specialized enterprise software development, modernizing legacy systems, building fault-tolerant microservices, and implementing rigorous role-based security architectures.",
    outcomes: [
      "Targeted software that maps 100% to proprietary enterprise processes",
      "Enterprise-grade security, data encryption, and role-based permissions",
      "Seamless backward compatibility with legacy corporate databases",
      "Scalable infrastructure capable of sustaining corporate growth",
    ],
    keyModules: ["Granular RBAC Security", "Legacy Data Connectors", "High-Throughput Processing", "Regulatory Audit Logging"],
    iconName: "building",
  },
];
