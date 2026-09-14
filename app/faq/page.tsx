"use client";

import React, { useState } from "react";
import { faqData, faqCategories } from "@/src/config/faq";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Icon } from "@/src/components/common/Icon";
import { Button } from "@/src/components/common/Button";
import { CtaSection } from "@/src/components/home/CtaSection";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "faq-services": true,
    "faq-how-project-starts": true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs =
    activeCategory === "All"
      ? faqData
      : faqData.filter((f) => f.category === activeCategory);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#f0f9ff]/70 to-white border-b border-gray-100">
        <Container>
          <SectionHeading
            eyebrow="Help & Clarifications"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our software development services, project workflows, timelines, and post-launch maintenance."
            align="center"
          />
        </Container>
      </section>

      {/* Accordion List */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <Container size="narrow">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {faqCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03a9f4] ${
                    isActive
                      ? "bg-[#0288d1] text-white shadow-xs"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Accordions */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = !!openItems[faq.id];

              return (
                <div
                  key={faq.id}
                  className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#0288d1] bg-white shadow-lg -translate-y-0.5"
                      : "border-slate-200/90 bg-white hover:border-[#0288d1] hover:shadow-md hover:-translate-y-0.5"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03a9f4]"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0288d1] transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#0288d1] text-white shadow-2xs rotate-180"
                          : "bg-slate-100 text-slate-500 group-hover:bg-[#b3e5fc]/60 group-hover:text-[#0288d1]"
                      }`}
                    >
                      <Icon
                        name="chevron-down"
                        className="w-3.5 h-3.5"
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 border-t border-slate-100 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Additional Inquiries Card */}
          <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#0288d1] hover:-translate-y-1 transition-all duration-300 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Have a question not listed here?
            </h3>
            <p className="text-sm text-slate-600 mb-6 max-w-md mx-auto leading-relaxed">
              Our engineering team is happy to review your specific requirements or answer any architectural questions directly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href="/contact" variant="primary" size="md" className="shadow-sm hover:shadow-md hover:scale-[1.02] transition-all">
                Contact Our Scoping Team
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Corporate CTA */}
      <CtaSection />
    </div>
  );
}
