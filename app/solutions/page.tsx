import React from "react";
import type { Metadata } from "next";
import { solutionsData } from "@/src/config/solutions";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Button } from "@/src/components/common/Button";
import { Icon } from "@/src/components/common/Icon";
import { CtaSection } from "@/src/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Business Solutions & Industry Architectures",
  description:
    "Explore EagleSoft's purpose-built software architectures for retail & POS, e-commerce, restaurant operations, logistics, enterprise ERP, and digital marketplaces.",
};

export default function SolutionsPage() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#f0f9ff]/70 to-white border-b border-gray-100">
        <Container>
          <SectionHeading
            eyebrow="Targeted Business Value"
            title="Solutions for Modern Businesses"
            description="We solve industry-specific operational bottlenecks by engineering targeted software architectures that replace fragmented spreadsheets and manual overhead."
            align="center"
          />
        </Container>
      </section>

      {/* Solutions Detailed Grid */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <Container>
          <div className="space-y-16 sm:space-y-24">
            {solutionsData.map((solution, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={solution.id}
                  id={solution.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-8 first:pt-0 ${
                    index !== 0 ? "border-t border-gray-200" : ""
                  }`}
                >
                  {/* Left Column: Solution Detail */}
                  <div
                    className={`lg:col-span-7 space-y-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#b3e5fc]/60 text-[#0288d1] flex items-center justify-center font-bold">
                        <Icon name={solution.iconName} className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-gray-400">
                          VERTICAL ARCHITECTURE 0{index + 1}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#212121]">
                          {solution.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base font-semibold text-[#0288d1]">
                      {solution.subtitle}
                    </p>

                    {/* Operational Problem Statement */}
                    <div className="p-4 rounded-xl bg-red-50/50 border border-red-100">
                      <div className="text-xs font-bold uppercase tracking-wider text-red-700 mb-1">
                        The Operational Challenge:
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {solution.problem}
                      </p>
                    </div>

                    {/* EagleSoft Solution */}
                    <div className="p-4 rounded-xl bg-[#f0f9ff]/70 border border-[#b3e5fc]">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#0288d1] mb-1">
                        How EagleSoft Solves It:
                      </div>
                      <p className="text-sm text-gray-800 leading-relaxed font-medium">
                        {solution.solution}
                      </p>
                    </div>

                    {/* Quantified Business Outcomes */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#0288d1] mb-3">
                        Target Operational Outcomes
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {solution.outcomes.map((outcome) => (
                          <div
                            key={outcome}
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
                            <Icon
                              name="check-circle"
                              className="w-3.5 h-3.5 text-[#03a9f4] mt-1 flex-shrink-0"
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
                        icon={<Icon name="arrow-right" className="w-3.5 h-3.5" />}
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
                    <div className="p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-200/90 shadow-sm space-y-5">
                      <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                        <span className="text-xs font-mono font-bold uppercase text-[#0288d1]">
                          Included System Modules
                        </span>
                        <span className="text-[10px] font-mono text-gray-400">
                          Production Suite
                        </span>
                      </div>

                      <div className="space-y-3">
                        {solution.keyModules.map((mod, modIdx) => (
                          <div
                            key={mod}
                            className="p-3 rounded-lg bg-white border border-gray-200 flex items-center justify-between shadow-xs"
                          >
                            <span className="text-sm font-semibold text-[#212121]">
                              {mod}
                            </span>
                            <span className="text-xs font-mono text-gray-400 font-bold">
                              M0{modIdx + 1}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-gray-200 pt-4 text-xs text-gray-500 leading-relaxed">
                        Each module is customized to fit into your existing organizational hierarchy, accounting rules, and deployment infrastructure.
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Corporate CTA */}
      <CtaSection />
    </div>
  );
}
