"use client";

import React, { useState } from "react";
import { siteConfig } from "@/src/config/site";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Button } from "@/src/components/common/Button";
import { Icon } from "@/src/components/common/Icon";

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
    <div className="bg-white">
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#f0f9ff]/70 to-white border-b border-gray-100">
        <Container>
          <SectionHeading
            eyebrow="Start a Conversation"
            title="Let's Build Something That Matters"
            description="Whether you have an established project brief or need technical scoping for an emerging concept, our engineering team is ready to assist."
            align="center"
          />
        </Container>
      </section>

      {/* Main Content: Info & Form */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Cards & Business Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0288d1]">
                  Corporate Office
                </span>
                <h2 className="text-2xl font-extrabold text-[#212121] mt-1 mb-4">
                  {siteConfig.companyName}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We engage with companies nationwide and internationally, providing disciplined software engineering and transparent milestone governance.
                </p>
              </div>

              <div className="space-y-4">
                {/* Location */}
                <div className="group p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#0288d1] hover:bg-white hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#b3e5fc]/60 text-[#0288d1] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#0288d1] group-hover:text-white transition-all duration-300 shadow-2xs">
                    <Icon name="location-dot" className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Office Location
                    </div>
                    <div className="text-sm font-semibold text-slate-900 mt-0.5 group-hover:text-[#0288d1] transition-colors">
                      {siteConfig.address.full}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {siteConfig.address.country}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="group p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#0288d1] hover:bg-white hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#b3e5fc]/60 text-[#0288d1] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#0288d1] group-hover:text-white transition-all duration-300 shadow-2xs">
                    <Icon name="envelope" className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Direct Email
                    </div>
                    <div className="text-sm font-semibold text-slate-900 mt-0.5">
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="hover:text-[#0288d1] transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Inquiries acknowledged within 1 business day
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="group p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#0288d1] hover:bg-white hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#b3e5fc]/60 text-[#0288d1] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#0288d1] group-hover:text-white transition-all duration-300 shadow-2xs">
                    <Icon name="phone" className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Phone & WhatsApp
                    </div>
                    <div className="text-sm font-semibold text-slate-900 mt-0.5 group-hover:text-[#0288d1] transition-colors">
                      {siteConfig.phone}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Mon – Fri, 9:00 AM – 6:00 PM PKT
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="group p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#0288d1] hover:bg-white hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#b3e5fc]/60 text-[#0288d1] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#0288d1] group-hover:text-white transition-all duration-300 shadow-2xs">
                    <Icon name="clock" className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Business Hours
                    </div>
                    <div className="text-sm font-semibold text-slate-900 mt-0.5 group-hover:text-[#0288d1] transition-colors">
                      {siteConfig.businessHours.days}: {siteConfig.businessHours.hours}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {siteConfig.businessHours.status}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200/90 shadow-sm">
                {isSuccess ? (
                  <div className="text-center py-12 px-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#b3e5fc]/50 flex items-center justify-center text-[#0288d1]">
                      <Icon name="check-circle" className="w-10 h-10 text-[#0288d1]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#212121] mb-2">
                      Inquiry Received
                    </h3>
                    <p className="text-gray-600 max-w-md mx-auto mb-6 text-sm sm:text-base leading-relaxed">
                      Thank you for contacting EagleSoft Pvt Ltd, <span className="font-semibold">{formData.name}</span>. An engineering scoping representative will review your inquiry and follow up shortly.
                    </p>
                    <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 text-left text-xs sm:text-sm text-gray-700 max-w-md mx-auto mb-6 space-y-1">
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
                    <div className="border-b border-gray-100 pb-4 mb-6">
                      <h3 className="text-lg sm:text-xl font-bold text-[#212121]">
                        Project Consultation & Inquiry
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        Provide your project requirements for scoping, timeline estimates, and architectural review.
                      </p>
                    </div>

                    {errorMessage && (
                      <div className="p-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-md">
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-semibold text-gray-700 mb-1"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#03a9f4] outline-none"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-semibold text-gray-700 mb-1"
                        >
                          Work Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#03a9f4] outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-xs font-semibold text-gray-700 mb-1"
                        >
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          id="contact-phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+92 300 0000000"
                          className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#03a9f4] outline-none"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-company"
                          className="block text-xs font-semibold text-gray-700 mb-1"
                        >
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          id="contact-company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company Name"
                          className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#03a9f4] outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-service"
                          className="block text-xs font-semibold text-gray-700 mb-1"
                        >
                          Primary Service Required
                        </label>
                        <select
                          id="contact-service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#03a9f4] outline-none bg-white"
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
                          className="block text-xs font-semibold text-gray-700 mb-1"
                        >
                          Estimated Budget (Optional)
                        </label>
                        <select
                          id="contact-budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#03a9f4] outline-none bg-white"
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
                        className="block text-xs font-semibold text-gray-700 mb-1"
                      >
                        Project Details & Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about the software you need built, existing bottlenecks, timelines, or specific technical requirements..."
                        className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#03a9f4] outline-none"
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
