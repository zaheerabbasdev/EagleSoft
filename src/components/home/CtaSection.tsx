"use client";

import React from "react";
import { Container } from "@/src/components/common/Container";
import { Button } from "@/src/components/common/Button";
import { Icon } from "@/src/components/common/Icon";
import { useQuoteModal } from "@/src/context/QuoteModalContext";
import { whatsappHref } from "@/src/components/common/WhatsAppFloat";

export function CtaSection() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#6d28d9] via-[#7c3aed] to-[#2563eb] text-white">
      <div
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-white/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <Container className="relative py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="reveal inline-flex items-center px-4 py-1.5 rounded-full border border-white/40 bg-white/10 text-[11px] font-extrabold uppercase tracking-[0.14em] mb-5">
              Free Consultation · No Commitment
            </span>
            <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white! leading-tight mb-4 text-balance">
              Ready to build reliable software for your business?
            </h2>
            <p className="reveal reveal-delay-2 text-base sm:text-lg text-white/85 max-w-xl">
              Talk to our team today. Free project scoping, honest advice and a clear proposal within one business day.
            </p>
          </div>
          <div className="lg:col-span-5 reveal reveal-delay-2 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3.5 lg:items-end xl:items-center lg:justify-end">
            <Button
              variant="accent"
              size="lg"
              onClick={() => openQuoteModal()}
              icon={<Icon name="arrow-right" className="w-4 h-4" />}
            >
              Get a Free Quote
            </Button>
            <Button
              href={whatsappHref}
              external
              variant="outline-white"
              size="lg"
              iconPosition="left"
              icon={<Icon name="whatsapp" className="w-4 h-4" />}
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
