import React from "react";
import Link from "next/link";
import { friendlyServicesData } from "@/src/config/home";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Icon } from "@/src/components/common/Icon";

export function ServicesPreview() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Our Services"
          description="Strategy, design, engineering and support under one roof, so your product never gets lost between vendors."
          align="left"
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {friendlyServicesData.map((service, index) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group agency-card card-glow-corner p-6 flex flex-col"
            >
              <span
                className="absolute top-4 right-5 font-display text-4xl font-extrabold text-[#e3f0fc] group-hover:text-[#cfe6fb] transition-colors"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="icon-grad">
                <Icon name={service.icon} className="text-xl" />
              </span>
              <h3 className="mt-6 text-lg font-bold text-[#0b1220] group-hover:text-[#0288d1] transition-colors">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-[#526072] leading-relaxed flex-1">{service.simpleSummary}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#0288d1]">
                Explore
                <Icon name="arrow-right" className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
