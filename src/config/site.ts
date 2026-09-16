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
  email: "eaglesoftpvtltd@gmail.com", // Centralized business email placeholder
  phone: "+92 3139804929",       // Centralized contact phone placeholder
  phone2: "+92 3015103165",
  address: {
    line1: "Software Technology Park",
    city: "Shewa Adda Swabi",
    country: "Pakistan",
    full: "Shop No A-8, Abdur Sattar Plaza basement, Shewa adda, swabi, KPK, Pakistan",
  },
  businessHours: {
    days: "Monday – Friday",
    hours: "9:00 AM – 6:00 PM PKT",
    status: "Available for consultation and project scoping",
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/145187167/admin/dashboard/", // Official profile link placeholder
    facebook: "https://web.facebook.com/profile.php?id=61594445519730", // Official profile link placeholder
    
  },
  copyright: "© 2026 EagleSoft Pvt Ltd. All rights reserved.",
} as const;

export type SiteConfig = typeof siteConfig;
