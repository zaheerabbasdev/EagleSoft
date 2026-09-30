/**
 * EagleSoft Pvt Ltd - Delivered Projects Showcase
 * Real websites & mobile apps delivered to clients, plus work currently in progress.
 */

import { IconName } from "@/src/components/common/Icon";

export interface ProjectItem {
  id: string;
  title: string;
  category: "Website" | "Android App" | "Coming Soon";
  description: string;
  url?: string;
  icon: IconName;
  /** App store icon, shown in place of `icon` when set. */
  appIcon?: string;
  /** Wide promo image used as the card header background. */
  featureImage?: string;
  status: "Live" | "In Progress";
}

export const projectCategories = ["All", "Website", "Android App", "Coming Soon"] as const;

export const projectsData: ProjectItem[] = [
  // --- Live Websites ---
  {
    id: "hybridhub",
    title: "HybridHub",
    category: "Website",
    description:
      "A service business website for hybrid vehicle battery repair, diagnostics, and replacement, serving hybrid car owners across Islamabad and Gujranwala.",
    url: "https://hybridisb.com/",
    icon: "laptop-code",
    appIcon: "/images/hybridhub-icon.png",
    featureImage: "/images/hybridhub-feature.jpg",
    status: "Live",
  },
  {
    id: "albaz-shipping",
    title: "Albaz Shipping Services",
    category: "Website",
    description:
      "A logistics and freight company website covering air and sea freight, road transportation, customs clearance, and warehouse management.",
    url: "https://www.albazshippingservices.com/",
    icon: "truck-fast",
    appIcon: "/images/albaz-icon.png",
    featureImage: "/images/albaz-feature.jpg",
    status: "Live",
  },
  {
    id: "ranimall",
    title: "RaniMall",
    category: "Website",
    description:
      "A curated e-commerce store based in Islamabad selling lifestyle products including mobile accessories and apparel.",
    url: "https://ranimall.com",
    icon: "cart-shopping",
    appIcon: "/images/ranimall-icon.png",
    featureImage: "/images/ranimall-feature.jpg",
    status: "Live",
  },

  // --- Live Android Apps ---
  {
    id: "english-thesaurus",
    title: "English Thesaurus",
    category: "Android App",
    description:
      "An offline English reference app for word definitions, grammar type, antonyms, and synonyms.",
    url: "https://play.google.com/store/apps/dev?id=4785714757956129346&hl=en",
    icon: "mobile-screen",
    appIcon: "/app_icons/english-thesaurus-icon.png",
    featureImage: "/app_icons/english-thesaurus-feature.jpeg",
    status: "Live",
  },
  {
    id: "dynamic-mcq",
    title: "Dynamic MCQ",
    category: "Android App",
    description: "An exam-preparation app for practicing multiple-choice questions.",
    url: "https://play.google.com/store/apps/details?id=com.smartedu.examprepapp",
    icon: "mobile-screen",
    appIcon: "/app_icons/dynamic-mcq-icon.png",
    featureImage: "/app_icons/dynamic-mcq-feature.jpeg",
    status: "Live",
  },
  {
    id: "decision-maker",
    title: "Decision Maker",
    category: "Android App",
    description: "A simple utility app that helps users make quick decisions.",
    url: "https://play.google.com/store/apps/details?id=com.manzoor.decisionmaker",
    icon: "mobile-screen",
    appIcon: "/app_icons/decision-maker-icon.png",
    featureImage: "/app_icons/decision-maker-feature.jpeg",
    status: "Live",
  },
  {
    id: "expense-ease",
    title: "Expense Ease",
    category: "Android App",
    description: "A personal expense-tracking app for everyday budgeting.",
    url: "https://play.google.com/store/apps/details?id=linguistic.tech.expenseease",
    icon: "mobile-screen",
    appIcon: "/app_icons/expense-ease-icon.png",
    featureImage: "/app_icons/expense-ease-feature.jpeg",
    status: "Live",
  },
  {
    id: "tailor-fit",
    title: "Tailor Fit",
    category: "Android App",
    description: "An app built for tailoring and fitting measurement management.",
    url: "https://play.google.com/store/apps/details?id=com.salmanahmad.techtes&hl=en",
    icon: "mobile-screen",
    appIcon: "/app_icons/tailor-fit-icon.png",
    featureImage: "/app_icons/tailor-fit-feature.png",
    status: "Live",
  },
  {
    id: "urdu-lughat",
    title: "Urdu Lughat",
    category: "Android App",
    description: "An Urdu dictionary and reference app.",
    url: "https://play.google.com/store/apps/details?id=com.salmanahmad.worlddirectmessage&hl=en",
    icon: "mobile-screen",
    appIcon: "/app_icons/urdu-lughat-icon.png",
    featureImage: "/app_icons/urdu-lughat-feature.jpeg",
    status: "Live",
  },
  {
    id: "habit-tracker",
    title: "Habit Tracker",
    category: "Android App",
    description: "A daily habit-tracking app to help build consistent routines.",
    url: "https://play.google.com/store/apps/details?id=com.salmanahmad.emishub&hl=en",
    icon: "mobile-screen",
    appIcon: "/app_icons/habit-tracker-icon.png",
    featureImage: "/app_icons/habit-tracker-feature.jpeg",
    status: "Live",
  },
  {
    id: "spanish-thesaurus",
    title: "Spanish Thesaurus",
    category: "Android App",
    description:
      "A free, offline Spanish thesaurus with 400,000+ words, including meanings, grammar type, synonyms, antonyms, and Mexican-accent pronunciation.",
    url: "https://play.google.com/store/apps/details?id=ms.eagletech.tesauro",
    icon: "mobile-screen",
    appIcon: "/app_icons/spanish-thesaurus-icon.png",
    featureImage: "/app_icons/spanish-thesaurus-feature.jpeg",
    status: "Live",
  },
  {
    id: "french-thesaurus",
    title: "French Thesaurus",
    category: "Android App",
    description:
      "A free, offline French thesaurus with 400,000+ words, including definitions, grammar type, synonyms, antonyms, and France/Canada pronunciation.",
    url: "https://play.google.com/store/apps/details?id=ms.eagletech.thsaurusfranais",
    icon: "mobile-screen",
    appIcon: "/app_icons/french-thesaurus-icon.png",
    featureImage: "/app_icons/french-thesaurus-feature.jpeg",
    status: "Live",
  },
  {
    id: "text-scanner",
    title: "Text Scanner",
    category: "Android App",
    description:
      "An offline OCR app that extracts editable text from camera or gallery images, with translation, text-to-speech, copy, and share.",
    url: "https://play.google.com/store/apps/details?id=mh.eagletech.textscanner",
    icon: "mobile-screen",
    appIcon: "/app_icons/text-scanner-icon.png",
    featureImage: "/app_icons/text-scanner-feature.jpeg",
    status: "Live",
  },
  {
    id: "english-dictionary",
    title: "English Dictionary",
    category: "Android App",
    description:
      "A free, offline English dictionary with 200,000+ words, including definitions, grammar type, synonyms, antonyms, pronunciation, and OCR word lookup.",
    url: "https://play.google.com/store/apps/details?id=sh.eagletech.englishdictionary",
    icon: "mobile-screen",
    appIcon: "/app_icons/english-dictionary-icon.png",
    featureImage: "/app_icons/english-dictionary-feature.jpeg",
    status: "Live",
  },

  // --- Coming Soon / In Progress ---
  {
    id: "fast-food-management",
    title: "Fast Food Management & Delivery",
    category: "Coming Soon",
    description:
      "An in-progress ordering, kitchen management, and delivery dispatch system for fast food restaurants.",
    icon: "utensils",
    status: "In Progress",
  },
  {
    id: "hospital-management",
    title: "Hospital Management System",
    category: "Coming Soon",
    description:
      "An in-progress system for managing patient records, appointments, and hospital administration.",
    icon: "building",
    status: "In Progress",
  },
];
