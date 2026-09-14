/**
 * EagleSoft Pvt Ltd - FAQ Configuration
 * Clear, professional answers to key business and technical inquiries.
 */

export interface FAQItem {
  id: string;
  category: "General" | "Services" | "Process & Engagement" | "Technical & Architecture";
  question: string;
  answer: string;
}

export const faqCategories = ["All", "General", "Services", "Process & Engagement", "Technical & Architecture"] as const;

export const faqData: FAQItem[] = [
  {
    id: "faq-services",
    category: "General",
    question: "What services does EagleSoft provide?",
    answer:
      "EagleSoft Pvt Ltd specializes in end-to-end software development. Our core capabilities include custom web applications, cross-platform mobile apps (iOS & Android), e-commerce platforms, bespoke business software / ERPs, retail POS and inventory systems, UI/UX interface design, cloud deployment & DevOps, and ongoing software maintenance.",
  },
  {
    id: "faq-how-project-starts",
    category: "Process & Engagement",
    question: "How does a software project start?",
    answer:
      "Every project starts with an initial Discovery & Scoping phase. We conduct a structured discussion to understand your business objectives, target audience, core workflows, and technical parameters. From there, we deliver a detailed project proposal outlining scope, architectural recommendations, timeline milestones, and a transparent cost estimate.",
  },
  {
    id: "faq-timeline",
    category: "Process & Engagement",
    question: "How long does development take?",
    answer:
      "Timelines depend on the complexity and scope of the software. A focused web application or specialized business module typically takes 4 to 8 weeks. Larger platforms involving multi-role ERPs, complex inventory systems, or cross-platform mobile apps generally span 8 to 16 weeks. We break every project into staged milestones so you can review working increments along the way.",
  },
  {
    id: "faq-custom-software",
    category: "Services",
    question: "Can EagleSoft build custom software tailored specifically to our business?",
    answer:
      "Yes, custom software development is one of our primary core competencies. Rather than forcing your company to adapt to rigid generic tools, we build bespoke systems engineered around your exact organizational workflows, data structures, and operational hierarchies.",
  },
  {
    id: "faq-mobile-apps",
    category: "Services",
    question: "Do you develop mobile applications?",
    answer:
      "Yes. We build high-performance, cross-platform mobile applications for iOS and Android using modern frameworks such as React Native and Flutter. We also engineer backend APIs, database synchronization, push notification pipelines, and handle app store submission processes.",
  },
  {
    id: "faq-maintenance",
    category: "Services",
    question: "Do you provide maintenance after launch?",
    answer:
      "Yes. Software is an evolving business asset. We offer structured post-launch maintenance and support service-level agreements (SLAs). This includes scheduled security patches, library updates, performance monitoring, bug fixes, database optimization, and continuous feature enhancements.",
  },
  {
    id: "faq-request-quote",
    category: "Process & Engagement",
    question: "How can I request a quote?",
    answer:
      "You can request a quote by clicking the 'Get a Quote' button anywhere on our website or by navigating to our Contact page. Provide a brief overview of your business requirements, project goals, and estimated budget. Our technical scoping team will review your inquiry and get back to you within 1 business day.",
  },
  {
    id: "faq-existing-system",
    category: "Technical & Architecture",
    question: "Can EagleSoft work with or modernize an existing system?",
    answer:
      "Yes. We frequently help organizations audit, refactor, and modernize legacy software. We can integrate new modern modules, build custom APIs to connect disjointed systems, migrate databases to scalable cloud architectures, or re-engineer legacy interfaces into modern responsive web applications.",
  },
  {
    id: "faq-ip-ownership",
    category: "General",
    question: "Who owns the source code and intellectual property upon project completion?",
    answer:
      "Upon project completion and settlement of project terms, the complete source code, database schemas, design assets, and all intellectual property rights belong entirely to your company. EagleSoft provides complete repositories and deployment documentation.",
  },
  {
    id: "faq-hosting-cloud",
    category: "Technical & Architecture",
    question: "Where will our software be hosted?",
    answer:
      "We configure your application on the cloud infrastructure that best suits your requirements and budget (such as AWS, DigitalOcean, Hetzner, or Vercel). Infrastructure accounts remain in your organization's legal name, ensuring you retain total custody and control over your servers and data.",
  },
];
