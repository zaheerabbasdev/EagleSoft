import React from "react";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Icon } from "@/src/components/common/Icon";
import { whyChooseUsData } from "@/src/config/home";

export function WhyEagleSoft() {
  return (
    <section className="py-20 sm:py-28 bg-[#f6f5fb]">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Experience Excellence in"
          highlight="Software Delivery"
          description="Technical rigor combined with a deep respect for how your business really runs."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUsData.map((reason, i) => (
            <div key={reason.id} className={`reveal reveal-delay-${(i % 3) + 1} group card card-hover p-7`}>
              <div className="flex items-center justify-between mb-6">
                <span className="icon-tile icon-tile-fill">
                  <Icon name={reason.icon} className="w-5 h-5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#6d28d9] bg-[#f3effe] px-3 py-1 rounded-full">
                  {reason.highlightBadge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-2.5">{reason.title}</h3>
              <p className="text-sm text-[#64748b] leading-relaxed mb-5">{reason.description}</p>
              <ul className="space-y-2">
                {reason.featureList.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-[#334155]">
                    <Icon name="check" className="w-3 h-3 text-[#7c3aed] flex-shrink-0" />
                    {point}
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
