import React from "react";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Icon } from "@/src/components/common/Icon";
import { simpleStepsData } from "@/src/config/home";

export function ProcessSection() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <Container>
        <SectionHeading
          eyebrow="Simple 3-Step Process"
          title="How We Bring Your Software to Life"
          description="No confusing technical jargon or unexpected surprises. Just clear milestones, weekly progress demos, and dependable execution."
          align="center"
          className="mb-16"
        />

        {/* 3 Simple, Clear Steps (Array of objects) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {simpleStepsData.map((step) => (
            <div
              key={step.number}
              className="relative p-8 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#0288d1] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-[#0288d1] text-white flex items-center justify-center font-black text-xl shadow-xs">
                    {step.number}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-white text-[#0288d1] border border-[#b3e5fc]">
                    {step.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {step.title}
                </h3>
                <div className="text-xs font-semibold text-[#0288d1] mb-4">
                  {step.shortDesc}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.fullDesc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-[#0288d1]">
                <Icon name={step.icon} className="w-4 h-4 text-[#03a9f4]" />
                <span>Step {step.number} Guarantee</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
