import React from "react";
import { Container } from "@/src/components/common/Container";
import { Button } from "@/src/components/common/Button";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Icon } from "@/src/components/common/Icon";
import { friendlyBenefitsData } from "@/src/config/home";

export function CompanyIntro() {
  const comparisonItems = [
    {
      problem: "Rigid templates that don't fit your business",
      solution: "Custom-built around your exact team & workflows",
    },
    {
      problem: "Confusing technical jargon & no clear timeline",
      solution: "Plain English communication & weekly working demos",
    },
    {
      problem: "Software that breaks during busy working hours",
      solution: "Battle-tested, offline-resilient architectures",
    },
    {
      problem: "Vendor lock-in & endless monthly hostage fees",
      solution: "You own 100% of your source code & database",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <Container>
        {/* Section Header */}
        <SectionHeading
          eyebrow="The EagleSoft Difference"
          title="Software Shouldn't Be Complicated"
          description="We take away the headaches of software development. You get a reliable digital tool that your team actually enjoys using every day."
          align="center"
          className="mb-16"
        />

        {/* Comparison Showcase (Frustrating Way vs The EagleSoft Way) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {/* The Frustrating Way Card */}
          <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 text-left">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
              <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm">
                ✕
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">The Usual Frustration</h3>
                <span className="text-xs text-slate-500">Generic software & poor agencies</span>
              </div>
            </div>

            <ul className="space-y-4">
              {comparisonItems.map((item) => (
                <li key={item.problem} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span>{item.problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The EagleSoft Way Card (Vibrant, Appealing) */}
          <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#f0f9ff] to-[#b3e5fc]/30 border-2 border-[#0288d1] text-left shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#0288d1] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-bl-xl">
              Guaranteed Standard
            </div>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#b3e5fc]/60">
              <span className="w-8 h-8 rounded-full bg-[#0288d1] text-white flex items-center justify-center font-bold text-sm">
                ✓
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">The EagleSoft Way</h3>
                <span className="text-xs text-[#0288d1] font-semibold">Reliable, tailored & easy to use</span>
              </div>
            </div>

            <ul className="space-y-4">
              {comparisonItems.map((item) => (
                <li key={item.solution} className="flex items-start gap-3 text-sm font-semibold text-slate-800">
                  <span className="text-[#0288d1] font-extrabold mt-0.5">✓</span>
                  <span>{item.solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4 Core Friendly Benefits (Array of objects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {friendlyBenefitsData.map((benefit) => (
            <div
              key={benefit.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#03a9f4] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#b3e5fc]/60 text-[#0288d1] flex items-center justify-center shadow-2xs">
                    <Icon name={benefit.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {benefit.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#0288d1]">
                <Icon name="check" className="w-3.5 h-3.5 text-[#03a9f4]" />
                <span>EagleSoft Promise</span>
              </div>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="mt-14 text-center">
          <Button href="/about" variant="secondary" size="md">
            Learn More About Our Company & Values
          </Button>
        </div>
      </Container>
    </section>
  );
}
