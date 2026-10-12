"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Button } from "@/src/components/common/Button";
import { Icon } from "@/src/components/common/Icon";
import { TrustMetrics } from "@/src/components/home/TrustMetrics";
import { simpleStepsData } from "@/src/config/home";
import { useQuoteModal } from "@/src/context/QuoteModalContext";

const stepImages = ["/hero/hero-slide-1.jpg", "/hero/hero-slide-3.jpg", "/hero/hero-slide-2.jpg"];

export function ProcessSection() {
  const { openQuoteModal } = useQuoteModal();

  const actions = [
    <Button
      key="a"
      variant="primary"
      size="md"
      onClick={() => openQuoteModal()}
      icon={<Icon name="arrow-right" className="w-3.5 h-3.5" />}
    >
      Start the Conversation
    </Button>,
    <Button key="b" href="/projects" variant="outline-white" size="md" icon={<Icon name="arrow-right" className="w-3.5 h-3.5" />}>
      See Our Work
    </Button>,
    <Button key="c" href="/services/maintenance-support" variant="outline-white" size="md" icon={<Icon name="arrow-right" className="w-3.5 h-3.5" />}>
      Support Plans
    </Button>,
  ];

  return (
    <section className="brand-band py-20 sm:py-28 overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="How We Bring Your Software"
          highlight="to Life"
          description="No confusing jargon or unexpected surprises. Just clear milestones, weekly progress demos, and dependable execution."
          variant="dark"
          className="mb-16"
        />

        <div className="space-y-16 lg:space-y-20">
          {simpleStepsData.map((step, i) => {
            const reversed = i % 2 === 1;
            return (
              <div key={step.number} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                <div className={`reveal relative aspect-[16/11] rounded-[28px] overflow-hidden border border-white/10 shadow-2xl shadow-black/50 ${reversed ? "lg:order-2" : ""}`}>
                  <Image
                    src={stepImages[i % stepImages.length]}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute top-5 left-5 font-display text-5xl font-bold text-white/90 drop-shadow-lg">
                    {step.number}
                  </span>
                </div>
                <div className={`reveal reveal-delay-1 ${reversed ? "lg:order-1" : ""}`}>
                  <span className="pill-label pill-label-dark mb-4">
                    <Icon name={step.icon} className="w-3 h-3" />
                    {step.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-2">{step.title}</h3>
                  <p className="text-base font-semibold text-[#c4b5fd] mb-4">{step.shortDesc}</p>
                  <p className="text-base text-white/70 leading-relaxed mb-7">{step.fullDesc}</p>
                  {actions[i % actions.length]}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20">
          <TrustMetrics variant="dark" />
        </div>
      </Container>
    </section>
  );
}
