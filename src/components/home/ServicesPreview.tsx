import React from "react";
import Link from "next/link";
import { friendlyServicesData } from "@/src/config/home";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Icon } from "@/src/components/common/Icon";
import { Button } from "@/src/components/common/Button";

export function ServicesPreview() {
  return (
    <section className="py-20 sm:py-28 bg-[#f6f5fb]">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Digital Solutions That Solve"
          highlight="Real Problems"
          description="Everything your business needs to operate smoothly, serve customers faster, and increase revenue."
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {friendlyServicesData.map((service, i) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className={`reveal reveal-delay-${(i % 4) + 1} group card card-hover p-7 flex flex-col`}
            >
              <span className="icon-tile icon-tile-fill mb-6">
                <Icon name={service.icon} className="w-5 h-5" />
              </span>
              <h3 className="text-lg font-bold text-[#0f172a] mb-2.5 group-hover:text-[#6d28d9] transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-[#64748b] leading-relaxed mb-6 flex-1">{service.simpleSummary}</p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-[#6d28d9]">
                Learn More
                <Icon name="arrow-right" className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/services" variant="secondary" size="md" icon={<Icon name="arrow-right" className="w-3.5 h-3.5" />}>
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
