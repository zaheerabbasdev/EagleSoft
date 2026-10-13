import React from "react";
import Link from "next/link";
import { friendlyServicesData } from "@/src/config/home";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Icon } from "@/src/components/common/Icon";
import { Button } from "@/src/components/common/Button";

export function ServicesPreview() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50/60 border-b border-slate-100">
      <Container>
        <SectionHeading
          eyebrow="What We Can Build For You"
          title="Digital Solutions That Solve Real Problems"
          description="Everything your business needs to operate smoothly, serve customers faster, and increase revenue."
          align="center"
          className="mb-16"
        />

        {/* 8 Friendly Services Grid (Array of objects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {friendlyServicesData.map((service, index) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#0288d1] hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                {/* Header Row: Colorful Icon Badge + Sequence Number */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold shadow-2xs group-hover:scale-105 transition-transform ${service.colorBg}`}
                  >
                    <Icon name={service.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-300 group-hover:text-[#0288d1] transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#0288d1] transition-colors">
                  {service.title}
                </h3>

                {/* Simple Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {service.simpleSummary}
                </p>

                {/* Ideal For Pill */}
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 mb-5">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                    Ideal For:
                  </span>
                  <p className="text-xs font-medium text-slate-700 leading-tight">
                    {service.idealFor}
                  </p>
                </div>

                {/* Feature Bullets */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-xs text-slate-700">
                      <Icon name="check" className="w-3 h-3 text-[#03a9f4] mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action Link */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/services/${service.slug}`}
                  className="text-xs font-bold uppercase tracking-wider text-[#0288d1] group-hover:text-[#03a9f4] inline-flex items-center gap-1.5 focus-visible:outline-none"
                >
                  <span>See How It Works</span>
                  <Icon
                    name="arrow-right"
                    className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <span className="text-[10px] text-slate-400 font-mono">
                  Full Details
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button href="/services" variant="secondary" size="md">
            View All Services & Pricing Scope
          </Button>
        </div>
      </Container>
    </section>
  );
}
