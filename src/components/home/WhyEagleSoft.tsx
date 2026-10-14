import React from "react";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Icon } from "@/src/components/common/Icon";
import { whyChooseUsData } from "@/src/config/home";

export function WhyEagleSoft() {
  return (
    <section className="py-20 sm:py-24 section-tint">
      <Container>
        <SectionHeading
          eyebrow="Why EagleSoft"
          title="Why Choose"
          highlight="EagleSoft"
          description="Technical rigor combined with a deep respect for how your business really runs."
          align="left"
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyChooseUsData.map((item) => (
            <div key={item.id} className="agency-card card-glow-corner p-7">
              <div className="flex items-center justify-between">
                <span className="icon-grad">
                  <Icon name={item.icon} className="text-xl" />
                </span>
                <span className="chip">{item.highlightBadge}</span>
              </div>
              <h3 className="mt-6 text-lg font-bold text-[#0b1220]">{item.title}</h3>
              <p className="mt-2 text-sm text-[#526072] leading-relaxed">{item.description}</p>
              <ul className="mt-5 space-y-2">
                {item.featureList.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[#1b2433]">
                    <Icon name="check" className="w-3 h-3 text-[#0288d1]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
