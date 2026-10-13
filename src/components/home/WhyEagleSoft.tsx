import React from "react";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Icon } from "@/src/components/common/Icon";
import { whyChooseUsData } from "@/src/config/home";

export function WhyEagleSoft() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <Container>
        <SectionHeading
          eyebrow="Our Engineering Commitment"
          title="Why Choose EagleSoft?"
          description="We combine technical rigor with a deep respect for operational realities, ensuring our software delivers tangible, measurable organizational value."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsData.map((reason) => (
            <div
              key={reason.id}
              className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#0288d1] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#b3e5fc]/60 text-[#0288d1] flex items-center justify-center shadow-2xs">
                    <Icon name={reason.icon} className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {reason.highlightBadge}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-300">
                      {reason.number}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  {reason.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {reason.description}
                </p>

                {/* Sub-bullets (Stored in array of objects) */}
                <ul className="space-y-2 mb-6">
                  {reason.featureList.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-xs text-slate-700">
                      <Icon name="check" className="w-3 h-3 text-[#03a9f4] flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0288d1]">
                <span>Enterprise Baseline</span>
                <Icon name="shield" className="w-3.5 h-3.5 text-[#03a9f4]" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
