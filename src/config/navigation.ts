/**
 * EagleSoft Pvt Ltd - Navigation Configuration
 */

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  services: [
    { label: "Web Development", href: "/services/web-development" },
    { label: "Mobile App Development", href: "/services/mobile-app-development" },
    { label: "E-Commerce Solutions", href: "/services/ecommerce-solutions" },
    { label: "Custom Business Software", href: "/services/custom-business-software" },
    { label: "POS & Inventory Systems", href: "/services/pos-inventory-systems" },
    { label: "UI/UX Design", href: "/services/ui-ux-design" },
    { label: "Cloud & Deployment", href: "/services/cloud-deployment" },
    { label: "Maintenance & Support", href: "/services/maintenance-support" },
  ],
  solutions: [
    { label: "Retail & POS", href: "/solutions#retail-pos" },
    { label: "E-Commerce", href: "/solutions#ecommerce" },
    { label: "Food & Restaurant", href: "/solutions#restaurant" },
    { label: "Logistics & Fleet", href: "/solutions#logistics" },
    { label: "Business Management", href: "/solutions#business-management" },
    { label: "Service Marketplaces", href: "/solutions#marketplaces" },
    { label: "Custom Enterprise Apps", href: "/solutions#enterprise" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Projects & Portfolio", href: "/projects" },
    { label: "Careers", href: "/careers" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};
