"use client";

import React from "react";
import { Container } from "@/src/components/common/Container";
import { Button } from "@/src/components/common/Button";
import { Icon } from "@/src/components/common/Icon";
import { useQuoteModal } from "@/src/context/QuoteModalContext";

export function CtaSection() {
  const { openQuoteModal } = useQuoteModal();

  const guarantees = [
    { label: "100% IP Handover", icon: "shield" as const },
    { label: "Formal SOW Milestones", icon: "document" as const },
    { label: "Direct Technical Scoping", icon: "bolt" as const },
    { label: "Dedicated SLA Support", icon: "headset" as const },
  ];

  return (
    <section className="py-24 sm:py-28 bg-[#0288d1] text-white relative overflow-hidden">
      {/* Background Architectural Accent lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Decorative Glow Orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#03a9f4]/30 blur-3xl rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <Container size="narrow" className="relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/20 shadow-2xs">
          <Icon name="bolt" className="w-3.5 h-3.5 text-[#b3e5fc]" />
          <span>Direct Enterprise Partnership</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white! tracking-tight leading-tight mb-5">
          Ready to Build Reliable Software for Your Business?
        </h2>

        <p className="text-white/90! text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          From custom operational systems to consumer-facing mobile and web applications, EagleSoft delivers software that performs reliably at scale.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            variant="accent"
            size="lg"
            onClick={() => openQuoteModal()}
            className="w-full sm:w-auto bg-[#448aff] hover:bg-white hover:text-[#0288d1] shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all"
            icon={<Icon name="arrow-right" className="w-4 h-4" />}
          >
            Request a Project Quote
          </Button>

          <Button
            href="/contact"
            variant="outline-white"
            size="lg"
            className="w-full sm:w-auto hover:bg-white/15"
            icon={<Icon name="envelope" className="w-4 h-4" />}
            iconPosition="left"
          >
            Contact Our Office
          </Button>
        </div>

        {/* Guarantees Bar (Stored as array of objects) */}
        <div className="pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {guarantees.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2 text-xs font-semibold text-white/90">
              <Icon name={item.icon} className="w-3.5 h-3.5 text-[#b3e5fc]" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
