"use client";

import React, { useState } from "react";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Button } from "@/src/components/common/Button";
import { Icon } from "@/src/components/common/Icon";
import { faqData } from "@/src/config/faq";
import { whatsappHref } from "@/src/components/common/WhatsAppFloat";

export function FaqPreview() {
  const items = faqData.slice(0, 5);
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <section className="py-20 sm:py-28 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="FAQ"
                title="Got Questions?"
                highlight="We Have Answers"
                description="Everything you need to know about working with EagleSoft. Can't find your answer? Message us directly."
                align="left"
                className="mb-8"
              />
              <div className="reveal flex flex-col sm:flex-row gap-3">
                <Button
                  href={whatsappHref}
                  external
                  variant="primary"
                  size="md"
                  iconPosition="left"
                  icon={<Icon name="whatsapp" className="w-4 h-4" />}
                >
                  Ask on WhatsApp
                </Button>
                <Button href="/faq" variant="secondary" size="md" icon={<Icon name="arrow-right" className="w-3.5 h-3.5" />}>
                  All FAQs
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3.5">
            {items.map((faq) => {
              const open = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`reveal rounded-2xl border bg-white transition-all ${
                    open ? "border-[#7c3aed] shadow-[0_18px_40px_-24px_rgba(76,29,149,0.45)]" : "border-[#e7e5ef] hover:border-[#c9bdf5]"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      id={`home-${faq.id}-q`}
                      aria-expanded={open}
                      aria-controls={`home-${faq.id}-a`}
                      onClick={() => setOpenId(open ? null : faq.id)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer rounded-2xl"
                    >
                      <span className="text-base font-bold text-[#0f172a]">{faq.question}</span>
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold leading-none transition-colors ${
                          open ? "bg-[#7c3aed] text-white" : "bg-[#f3effe] text-[#6d28d9]"
                        }`}
                        aria-hidden="true"
                      >
                        {open ? "−" : "+"}
                      </span>
                    </button>
                  </h3>
                  {open && (
                    <div
                      id={`home-${faq.id}-a`}
                      role="region"
                      aria-labelledby={`home-${faq.id}-q`}
                      className="fade-in px-6 pb-6 -mt-1 text-[15px] text-[#475569] leading-relaxed"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
