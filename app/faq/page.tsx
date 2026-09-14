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
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-[#03a9f4] bg-white shadow-sm"
                      : "border-gray-200/90 bg-white hover:border-gray-300"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03a9f4]"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-[#212121]">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? "bg-[#b3e5fc]/60 text-[#0288d1]"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <Icon
                        name={isOpen ? "chevron-up" : "chevron-down"}
                        className="w-3.5 h-3.5"
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 border-t border-gray-100 text-sm sm:text-base text-gray-600 leading-relaxed fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Additional Inquiries Card */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-200 text-center">
            <h3 className="text-lg font-bold text-[#212121] mb-2">
              Have a question not listed here?
            </h3>
            <p className="text-sm text-gray-600 mb-6 max-w-md mx-auto">
              Our engineering team is happy to review your specific requirements or answer any architectural questions directly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href="/contact" variant="primary" size="md">
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
