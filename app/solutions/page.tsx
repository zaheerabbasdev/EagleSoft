import React from "react";
import type { Metadata } from "next";
import { solutionsData } from "@/src/config/solutions";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Button } from "@/src/components/common/Button";
import { Icon } from "@/src/components/common/Icon";
import { CtaSection } from "@/src/components/home/CtaSection";
import { Testimonials } from "@/src/components/home/Testimonials";

export const metadata: Metadata = {
  title: "Business Solutions & Industry Architectures",
  description:
    "Explore EagleSoft's purpose-built software architectures for retail & POS, e-commerce, restaurant operations, logistics, enterprise ERP, and digital marketplaces.",
};

export default function SolutionsPage() {
  return (
    <div>
      {/* Hero Header */}
      <section className="py-16 sm:py-24 page-hero border-b border-[#efedf5]">
        <Container>
          <SectionHeading
            variant="dark"
            eyebrow="Targeted Business Value"
            title="Solutions for Modern Businesses"
            description="We solve industry-specific operational bottlenecks by engineering targeted software architectures that replace fragmented spreadsheets and manual overhead."
            align="center"
          />
        </Container>
      </section>

      {/* Solutions Detailed Grid */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#efedf5]">
        <Container>
          <div className="space-y-16 sm:space-y-20">
            {solutionsData.map((solution, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={solution.id}
                  id={solution.id}
                  className="group relative p-8 sm:p-10 lg:p-12 rounded-3xl bg-white border border-[#e7e5ef] shadow-2xs hover:shadow-xl hover:border-[#7c3aed]/60 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                    {/* Left Column: Solution Detail */}
                    <div
                      className={`lg:col-span-7 space-y-6 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-[#7c3aed]/15 text-[#6d28d9] flex items-center justify-center font-bold shadow-2xs group-hover:scale-110 group-hover:bg-[#7c3aed] group-hover:text-white transition-all duration-300">
                          <Icon name={solution.iconName} className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-mono font-bold text-[#64748b] uppercase tracking-wider">
                            VERTICAL ARCHITECTURE 0{index + 1}
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] group-hover:text-[#6d28d9] transition-colors">
                            {solution.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base font-semibold text-[#6d28d9]">
                        {solution.subtitle}
                      </p>

                      {/* Operational Problem Statement */}
                      <div className="p-5 rounded-2xl bg-red-500/10 border border-red-500/30 hover:border-red-500/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                        <div className="text-xs font-bold uppercase tracking-wider text-red-600 mb-1">
                          The Operational Challenge:
                        </div>
                        <p className="text-sm text-[#334155] leading-relaxed">
                          {solution.problem}
                        </p>
                      </div>

                      {/* EagleSoft Solution */}
                      <div className="p-5 rounded-2xl bg-[#7c3aed]/[0.08] border border-[#7c3aed]/20 hover:border-[#7c3aed]/60 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                        <div className="text-xs font-bold uppercase tracking-wider text-[#6d28d9] mb-1">
                          How EagleSoft Solves It:
                        </div>
                        <p className="text-sm text-[#1e293b] leading-relaxed font-medium">
                          {solution.solution}
                        </p>
                      </div>

                      {/* Quantified Business Outcomes */}
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#6d28d9] mb-3">
                          Target Operational Outcomes
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {solution.outcomes.map((outcome) => (
                            <div
                              key={outcome}
                              className="p-3 rounded-xl bg-white border border-[#e7e5ef] hover:border-[#7c3aed]/60 hover:bg-[#7c3aed]/[0.08] transition-all flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]"
                            >
                              <Icon
                                name="check-circle"
                                className="w-4 h-4 text-[#6d28d9] mt-0.5 flex-shrink-0"
                              />
                              <span>{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="pt-2">
                        <Button
                          href="/contact"
                          variant="primary"
                          size="md"
                          icon={<Icon name="arrow-right" className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />}
                          className="shadow-sm hover:shadow-md hover:scale-[1.02] transition-all"
                        >
                          Inquire About This Solution
                        </Button>
                      </div>
                    </div>

                    {/* Right Column: Architectural Modules Blueprint Card */}
                    <div
                      className={`lg:col-span-5 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#e7e5ef] shadow-2xs hover:shadow-xl hover:shadow-[#7c3aed]/10 hover:border-[#7c3aed]/60 hover:-translate-y-1.5 transition-all duration-300 space-y-5">
                        <div className="flex items-center justify-between border-b border-[#e7e5ef] pb-3">
                          <span className="text-xs font-mono font-bold uppercase text-[#6d28d9]">
                            Included System Modules
                          </span>
                          <span className="text-[10px] font-mono text-[#64748b]">
                            Production Suite
                          </span>
                        </div>

                        <div className="space-y-3">
                          {solution.keyModules.map((mod, modIdx) => (
                            <div
                              key={mod}
                              className="p-3.5 rounded-xl bg-white border border-[#e7e5ef] flex items-center justify-between shadow-2xs hover:border-[#7c3aed]/60 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                            >
                              <span className="text-sm font-semibold text-[#0f172a]">
                                {mod}
                              </span>
                              <span className="text-xs font-mono text-[#6d28d9] font-bold bg-[#7c3aed]/[0.08] px-2 py-0.5 rounded border border-[#7c3aed]/20">
                                M0{modIdx + 1}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="border-t border-[#e7e5ef] pt-4 text-xs text-[#64748b] leading-relaxed">
                          Each module is customized to fit into your existing organizational hierarchy, accounting rules, and deployment infrastructure.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <Testimonials />

      {/* Corporate CTA */}
      <CtaSection />
    </div>
  );
}
