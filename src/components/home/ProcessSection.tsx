import React from "react";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Icon } from "@/src/components/common/Icon";
import { simpleStepsData } from "@/src/config/home";

export function ProcessSection() {
  return (
    <section className="py-20 sm:py-24 section-tint">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="Our Process"
          description="Clear milestones, weekly demos and honest estimates. You always know where your product stands."
          align="left"
          className="mb-14"
        />

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {simpleStepsData.map((step, i) => (
            <li key={step.number} className="relative text-center px-2">
              {i < simpleStepsData.length - 1 && (
                <span
                  className="hidden md:block absolute top-8 left-[calc(50%+48px)] right-[calc(-50%+48px)] text-[#9cc9ef]"
                  aria-hidden="true"
                >
                  <span className="block h-px bg-gradient-to-r from-[#9cc9ef] to-transparent mt-[1px]" />
                  <Icon name="arrow-right" className="absolute -top-[7px] right-0 w-3.5 h-3.5" />
                </span>
              )}
              <span className="mx-auto w-16 h-16 rounded-full bg-blue-grad text-white flex items-center justify-center shadow-[0_14px_30px_-12px_rgba(2,136,209,0.7)]">
                <Icon name={step.icon} className="text-xl" />
              </span>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#0288d1]">Step {step.number}</p>
              <h3 className="mt-1.5 text-xl font-bold text-[#0b1220]">{step.title}</h3>
              <p className="mt-1 text-sm font-semibold text-[#0288d1]">{step.shortDesc}</p>
              <p className="mt-3 text-sm text-[#526072] leading-relaxed max-w-xs mx-auto">{step.fullDesc}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
