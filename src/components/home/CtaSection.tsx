"use client";

import React from "react";
import { Container } from "@/src/components/common/Container";
import { Button } from "@/src/components/common/Button";
import { Icon } from "@/src/components/common/Icon";
import { useQuoteModal } from "@/src/context/QuoteModalContext";

/** Rounded gradient call-to-action card. */
export function CtaSection() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#0277bd] via-[#448aff] to-[#03a9f4] px-7 py-10 sm:px-12 sm:py-12 shadow-[0_30px_60px_-30px_rgba(2,136,209,0.7)]">
          <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
          <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold !text-white tracking-tight">
                Have an idea? Let&apos;s engineer it.
              </h2>
              <p className="mt-3 text-base sm:text-lg !text-white/85">
                Free consultation, transparent estimates, and a team that ships.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Button variant="accent" size="lg" onClick={() => openQuoteModal()} icon={<Icon name="arrow-right" className="w-4 h-4" />}>
                Start Your Project
              </Button>
              <Button href="/projects" variant="outline-white" size="lg">
                See Our Work
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
