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
  const [query, setQuery] = useState("");
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

  const q = query.trim().toLowerCase();
  const filteredFaqs = faqData.filter(
    (f) =>
      (activeCategory === "All" || f.category === activeCategory) &&
      (!q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q))
  );

  return (
    <div>
      {/* Hero */}
      <section className="py-16 sm:py-24 page-hero border-b border-[#efedf5]">
        <Container>
          <SectionHeading
            variant="dark"
            eyebrow="Help & Clarifications"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our software development services, project workflows, timelines, and post-launch maintenance."
            align="center"
          />
        </Container>
      </section>

      {/* Accordion List */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#efedf5]">
        <Container size="narrow">
          {/* Search */}
          <div className="relative mb-6">
            <label htmlFor="faq-search" className="sr-only">
              Search questions
            </label>
            <Icon name="question" className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748b] pointer-events-none" />
            <input
              id="faq-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions, e.g. timeline, pricing, support"
              className="w-full pl-11 pr-4 py-3.5 text-sm rounded-2xl bg-[#f6f5fb] border border-[#dddbe8] text-[#0f172a] placeholder:text-[#64748b] focus:border-[#7c3aed]/50 focus:ring-2 focus:ring-[#7c3aed]/20 outline-none transition"
            />
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {faqCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed] ${
                    isActive
                      ? "bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-[#0f172a] shadow-lg shadow-[#7c3aed]/25"
                      : "bg-[#f1f0f7] text-[#334155] hover:bg-[#e9e7f2]"
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
                      ? "border-[#7c3aed]/50 bg-[#7c3aed]/[0.06] shadow-lg shadow-[#0f172a]/10"
                      : "border-[#e7e5ef] bg-white hover:border-[#7c3aed]/40 hover:bg-[#f6f5fb]"
                  }`}
                >
                  <button
                    type="button"
                    id={`${faq.id}-q`}
                    aria-controls={`${faq.id}-a`}
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#7c3aed] rounded-2xl"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-[#0f172a] group-hover:text-[#6d28d9] transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#7c3aed] text-[#0f172a] shadow-2xs rotate-180"
                          : "bg-[#f1f0f7] text-[#64748b] group-hover:bg-[#7c3aed]/15 group-hover:text-[#6d28d9]"
                      }`}
                    >
                      <Icon
                        name="chevron-down"
                        className="w-3.5 h-3.5"
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`${faq.id}-a`}
                      role="region"
                      aria-labelledby={`${faq.id}-q`}
                      className="fade-in px-6 pb-6 pt-4 border-t border-[#efedf5] text-sm sm:text-base text-[#475569] leading-relaxed"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12 px-6 rounded-2xl border border-dashed border-[#dddbe8]" role="status">
                <p className="text-[#0f172a] font-semibold">No questions match your search.</p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setActiveCategory("All");
                  }}
                  className="mt-3 text-sm font-semibold text-[#6d28d9] hover:text-[#0f172a] transition-colors cursor-pointer"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

          {/* Additional Inquiries Card */}
          <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-white border border-[#e7e5ef] shadow-2xs hover:shadow-xl hover:shadow-[#7c3aed]/10 hover:border-[#7c3aed]/60 hover:-translate-y-1 transition-all duration-300 text-center">
            <h3 className="text-xl font-bold text-[#0f172a] mb-2">
              Have a question not listed here?
            </h3>
            <p className="text-sm text-[#475569] mb-6 max-w-md mx-auto leading-relaxed">
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
