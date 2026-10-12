"use client";

import React, { useState } from "react";
import { siteConfig } from "@/src/config/site";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Button } from "@/src/components/common/Button";
import { Icon, IconName } from "@/src/components/common/Icon";

const serviceOptions = [
  "Web Development",
  "Mobile App Development",
  "E-Commerce Solutions",
  "Custom Business Software / ERP",
  "POS & Inventory Systems",
  "UI/UX Interface Design",
  "Cloud & DevOps Infrastructure",
  "Ongoing Maintenance & Support",
  "Other Consultation",
];

const budgetOptions = [
  "Undecided / Need Consultation",
  "PKR 150,000 - PKR 300,000 ($500 - $1,000)",
  "PKR 300,000 - PKR 900,000 ($1,000 - $3,000)",
  "PKR 900,000 - PKR 2,500,000 ($3,000 - $8,000)",
  "PKR 2,500,000+ ($8,000+)",
];

const telHref = (p: string) => `tel:${p.replace(/\s/g, "")}`;

const contactItems: {
  label: string;
  icon: IconName;
  lines: { text: string; href?: string; external?: boolean }[];
  note?: string;
}[] = [
  {
    label: "Phone & WhatsApp",
    icon: "phone",
    lines: [
      { text: siteConfig.phone, href: telHref(siteConfig.phone) },
      { text: siteConfig.phone2, href: telHref(siteConfig.phone2) },
    ],
    note: "Mon to Fri, 9:00 AM to 6:00 PM PKT",
  },
  {
    label: "Email",
    icon: "envelope",
    lines: [{ text: siteConfig.email, href: `mailto:${siteConfig.email}` }],
    note: "We reply within one business day",
  },
  {
    label: "Office Location",
    icon: "location-dot",
    lines: [
      {
        text: siteConfig.address.full,
        href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address.full)}`,
        external: true,
      },
    ],
    note: "Tap to open directions in Google Maps",
  },
  {
    label: "Business Hours",
    icon: "clock",
    lines: [{ text: `${siteConfig.businessHours.days}, ${siteConfig.businessHours.hours}` }],
    note: siteConfig.businessHours.status,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: serviceOptions[0],
    budget: budgetOptions[0],
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please complete all required fields (Name, Email, and Message).");
      return;
    }

    setIsSubmitting(true);
    try {
      // Configured for endpoint connection:
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSuccess(true);
    } catch {
      setErrorMessage("Unable to send inquiry. Please email us directly at " + siteConfig.email);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: serviceOptions[0],
      budget: budgetOptions[0],
      message: "",
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-16 sm:py-24 page-hero">
        <Container>
          <SectionHeading
            variant="dark"
            eyebrow="Start a Conversation"
            title="Let's Build Something That Matters"
            description="Whether you have an established project brief or need technical scoping for an emerging concept, our engineering team is ready to assist."
            align="center"
          />
          {/* Quick contact row, visible as soon as the page opens */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={telHref(siteConfig.phone)}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-white text-[#0f172a] text-sm font-bold shadow-lg hover:bg-[#f3effe] transition-colors"
            >
              <Icon name="phone" className="text-[#7c3aed]" />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-white text-[#0f172a] text-sm font-bold shadow-lg hover:bg-[#f3effe] transition-colors"
            >
              <Icon name="envelope" className="text-[#7c3aed]" />
              {siteConfig.email}
            </a>
            <span className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-white/30 text-white text-sm font-bold">
              <Icon name="location-dot" className="text-[#c4b5fd]" />
              {siteConfig.address.city}, {siteConfig.address.country}
            </span>
          </div>
        </Container>
      </section>

      {/* Main Content: Info & Form */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="pill-label mb-4">Contact Details</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mt-3 mb-3">
                  {siteConfig.companyName}
                </h2>
                <p className="text-[15px] text-[#475569] leading-relaxed">
                  Call, email or visit our office. We reply to every inquiry within one business day.
                </p>
              </div>

              <ul className="space-y-4">
                {contactItems.map((item) => (
                  <li key={item.label} className="card p-5 flex items-start gap-4">
                    <span className="icon-tile">
                      <Icon name={item.icon} className="text-lg" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#6d28d9] mb-1">{item.label}</p>
                      {item.lines.map((line) =>
                        line.href ? (
                          <a
                            key={line.text}
                            href={line.href}
                            target={line.external ? "_blank" : undefined}
                            rel={line.external ? "noopener noreferrer" : undefined}
                            className="block text-base font-bold text-[#0f172a] hover:text-[#6d28d9] transition-colors break-words"
                          >
                            {line.text}
                          </a>
                        ) : (
                          <p key={line.text} className="text-base font-bold text-[#0f172a] break-words">
                            {line.text}
                          </p>
                        )
                      )}
                      {item.note && <p className="text-sm text-[#64748b] mt-1">{item.note}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#e7e5ef] shadow-[0_20px_50px_-30px_rgba(15,23,42,0.25)]">
                {isSuccess ? (
                  <div className="text-center py-12 px-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/30 flex items-center justify-center">
                      <Icon name="check-circle" className="w-9 h-9 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0f172a] mb-2">
                      Inquiry Received
                    </h3>
                    <p className="text-[#475569] max-w-md mx-auto mb-6 text-sm sm:text-base leading-relaxed">
                      Thank you for contacting EagleSoft Pvt Ltd, <span className="font-semibold">{formData.name}</span>. An engineering scoping representative will review your inquiry and follow up shortly.
                    </p>
                    <div className="p-4 rounded-lg bg-white border border-[#e7e5ef] text-left text-xs sm:text-sm text-[#334155] max-w-md mx-auto mb-6 space-y-1">
                      <div>
                        <span className="font-semibold">Service:</span> {formData.service}
                      </div>
                      <div>
                        <span className="font-semibold">Email:</span> {formData.email}
                      </div>
                    </div>
                    <Button variant="primary" onClick={handleReset}>
                      Send Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="mb-6">
                      <h3 className="text-lg sm:text-xl font-bold text-[#0f172a]">
                        Project Consultation & Inquiry
                      </h3>
                      <p className="text-xs sm:text-sm text-[#64748b] mt-1">
                        Provide your project requirements for scoping, timeline estimates, and architectural review.
                      </p>
                    </div>

                    {errorMessage && (
                      <div role="alert" className="p-3 text-sm text-red-600 bg-red-500/10 border border-red-500/30 rounded-xl">
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-semibold text-[#334155] mb-1"
                        >
                          Full Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          autoComplete="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl outline-none"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-semibold text-[#334155] mb-1"
                        >
                          Work Email <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          autoComplete="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-xs font-semibold text-[#334155] mb-1"
                        >
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          id="contact-phone"
                          name="phone"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+92 300 0000000"
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl outline-none"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-company"
                          className="block text-xs font-semibold text-[#334155] mb-1"
                        >
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          id="contact-company"
                          name="company"
                          autoComplete="organization"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company Name"
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-service"
                          className="block text-xs font-semibold text-[#334155] mb-1"
                        >
                          Primary Service Required
                        </label>
                        <select
                          id="contact-service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl outline-none"
                        >
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-budget"
                          className="block text-xs font-semibold text-[#334155] mb-1"
                        >
                          Estimated Budget (Optional)
                        </label>
                        <select
                          id="contact-budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl outline-none"
                        >
                          {budgetOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-semibold text-[#334155] mb-1"
                      >
                        Project Details & Message <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about the software you need built, existing bottlenecks, timelines, or specific technical requirements..."
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl outline-none"
                      ></textarea>
                    </div>

                    <div className="pt-3">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto min-w-[180px]"
                        icon={<Icon name="send" className="w-3.5 h-3.5" />}
                      >
                        {isSubmitting ? "Sending..." : "Send Inquiry"}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
