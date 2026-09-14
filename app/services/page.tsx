import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/src/config/services";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Button } from "@/src/components/common/Button";
import { Icon } from "@/src/components/common/Icon";
import { CtaSection } from "@/src/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Software Engineering Services",
  description:
    "Explore our complete suite of software engineering services: Web development, mobile apps, e-commerce, custom ERP, POS inventory, UI/UX, cloud deployment, and ongoing maintenance.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#f0f9ff]/60 to-white border-b border-slate-100">
        <Container>
          <SectionHeading
            eyebrow="Engineering Services"
            title="Comprehensive Software Solutions for Modern Enterprises"
            description="From initial architectural scoping to full-stack engineering, cloud deployment, and continuous support, we build software designed around your specific business operations."
            align="center"
          />
        </Container>
      </section>

      {/* Services List with Expanded Animated Specifications */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <Container>
          <div className="space-y-16 sm:space-y-20">
            {servicesData.map((service, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className="group relative p-8 sm:p-10 lg:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-2xl hover:border-[#0288d1] transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    {/* Text Column */}
                    <div
                      className={`lg:col-span-7 space-y-6 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-[#b3e5fc]/60 text-[#0288d1] flex items-center justify-center font-bold shadow-2xs group-hover:scale-110 group-hover:bg-[#0288d1] group-hover:text-white transition-all duration-300">
                          <Icon name={service.iconName} className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                            SERVICE 0{index + 1}
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-[#0288d1] transition-colors">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-base text-slate-600 leading-relaxed">
                        {service.fullDescription}
                      </p>

                      {/* Features Grid */}
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#0288d1] mb-3">
                          Key Capabilities & Deliverables
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.features.map((feature) => (
                            <div
                              key={feature}
                              className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#03a9f4] hover:bg-[#f0f9ff]/40 hover:-translate-y-0.5 hover:shadow-xs transition-all flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                            >
                              <Icon
                                name="check"
                                className="w-3.5 h-3.5 text-[#0288d1] mt-0.5 flex-shrink-0"
                              />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="pt-2 flex flex-wrap items-center gap-4">
                        <Button
                          href={`/services/${service.slug}`}
                          variant="primary"
                          size="md"
                          icon={<Icon name="arrow-right" className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />}
                          className="shadow-sm hover:shadow-md hover:scale-[1.02] transition-all"
                        >
                          Detailed Service Breakdown
                        </Button>
                        <Button
                          href="/contact"
                          variant="secondary"
                          size="md"
                        >
                          Inquire About This Service
                        </Button>
                      </div>
                    </div>

                    {/* Visual Spec Card (Animated Hover Lift) */}
                    <div
                      className={`lg:col-span-5 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#0288d1] hover:-translate-y-1.5 transition-all duration-300 space-y-5">
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Target Operations
                          </span>
                          <p className="text-sm font-semibold text-slate-900 mt-1">
                            {service.targetAudience}
                          </p>
                        </div>

                        <div className="border-t border-slate-200 pt-4">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Recommended Technology Stack
                          </span>
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {service.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs px-2.5 py-1 rounded-lg bg-white text-slate-800 border border-slate-200 font-medium hover:border-[#03a9f4] hover:bg-[#f0f9ff] transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="border-t border-slate-200 pt-4">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Standard Deliverables
                          </span>
                          <ul className="mt-2 space-y-2 text-xs text-slate-600">
                            {service.deliverables.map((deliv) => (
                              <li key={deliv} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#03a9f4]" />
                                <span>{deliv}</span>
                              </li>
                            ))}
                          </ul>
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

      {/* Corporate CTA */}
      <CtaSection />
    </div>
  );
}
