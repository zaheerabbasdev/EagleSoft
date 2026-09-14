/**
 * EagleSoft Pvt Ltd - Site & Company Configuration
 * Centralized placeholders and corporate metadata.
 * Update this file to modify company-wide details.
 */

export const siteConfig = {
  name: "EagleSoft",
  companyName: "EagleSoft Pvt Ltd",
  legalName: "EagleSoft Pvt Ltd",
  shortName: "EagleSoft",
  tagline: "Building Software. Empowering Businesses.",
  positioning:
    "EagleSoft Pvt Ltd builds modern software and digital solutions that help businesses operate, grow, and serve their customers better.",
  description:
    "EagleSoft Pvt Ltd creates modern web, mobile, e-commerce, and custom business software solutions designed to help organizations work smarter, serve customers better, and grow with confidence.",
  url: "https://eaglesoft.pk",
  email: "contact@eaglesoft.com", // Centralized business email placeholder
  phone: "+92 300 0000000",       // Centralized contact phone placeholder
  address: {
    line1: "Software Technology Park",
    city: "Islamabad",
    country: "Pakistan",
    full: "Software Technology Park, Islamabad, Pakistan",
  },
  businessHours: {
    days: "Monday – Friday",
    hours: "9:00 AM – 6:00 PM PKT",
    status: "Available for consultation and project scoping",
  },
  socialLinks: {
    linkedin: "", // Official profile link placeholder
    facebook: "", // Official profile link placeholder
    instagram: "", // Official profile link placeholder
    github: "",    // Official profile link placeholder
    x: "",         // Official profile link placeholder
  },
  copyright: "© 2026 EagleSoft Pvt Ltd. All rights reserved.",
} as const;

export type SiteConfig = typeof siteConfig;
