import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/src/config/services";
import { Container } from "@/src/components/common/Container";
import { Button } from "@/src/components/common/Button";
import { Icon } from "@/src/components/common/Icon";
import { CtaSection } from "@/src/components/home/CtaSection";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} Services`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const serviceIndex = servicesData.findIndex((s) => s.slug === slug);

  if (serviceIndex === -1) {
    notFound();
  }

  const service = servicesData[serviceIndex];
  const prevService = serviceIndex > 0 ? servicesData[serviceIndex - 1] : null;
  const nextService =
    serviceIndex < servicesData.length - 1 ? servicesData[serviceIndex + 1] : null;

  return (
    <div>
      {/* Service Header */}
      <section className="py-16 sm:py-24 page-hero">
        <Container>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-semibold text-white/60 mb-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <span>/</span>
            <span className="text-[#c4b5fd]" aria-current="page">{service.title}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="pill-label pill-label-dark mb-5">
              <Icon name={service.iconName} className="w-4 h-4" />
              <span>Service Specification</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-white tracking-tight leading-[1.08] mb-5">
              {service.title}
            </h1>
            <p className="text-lg text-white/75 leading-relaxed">
              {service.shortDescription}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Service Content */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#efedf5]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Detailed Overview */}
              <div>
                <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                  Overview & Engineering Approach
                </h2>
                <p className="text-base text-[#475569] leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Capabilities Breakdown */}
              <div>
                <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
                  Core Solution Modules
                </h2>
                <div className="space-y-4">
                  {service.capabilities.map((cap) => (
                    <div
                      key={cap.title}
                      className="group p-6 rounded-2xl bg-white border border-[#e7e5ef] shadow-2xs hover:shadow-xl hover:shadow-[#7c3aed]/10 hover:border-[#7c3aed]/60 hover:bg-[#f6f5fb] hover:-translate-y-1 transition-all duration-300"
                    >
                      <h3 className="text-base font-bold text-[#0f172a] mb-2 group-hover:text-[#6d28d9] transition-colors flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#7c3aed] group-hover:scale-150 transition-transform" />
                        <span>{cap.title}</span>
                      </h3>
                      <p className="text-sm text-[#475569] leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features List */}
              <div>
                <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
                  Technical Capabilities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feat) => (
                    <div
                      key={feat}
                      className="group flex items-start gap-2.5 p-3.5 rounded-xl border border-[#e7e5ef] bg-white hover:border-[#7c3aed]/60 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-sm text-[#334155]"
                    >
                      <Icon
                        name="check-circle"
                        className="w-4 h-4 text-[#6d28d9] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform"
                      />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar Specs */}
            <div className="lg:col-span-4 space-y-6">
              {/* Specs Box */}
              <div className="group p-7 sm:p-8 rounded-3xl bg-white border border-[#e7e5ef] shadow-2xs hover:shadow-xl hover:border-[#7c3aed]/60 hover:-translate-y-1.5 transition-all duration-300 space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#6d28d9] mb-2">
                    Target Organizations
                  </h3>
                  <p className="text-xs text-[#334155] leading-relaxed font-medium">
                    {service.targetAudience}
                  </p>
                </div>

                <div className="border-t border-[#e7e5ef] pt-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#6d28d9] mb-2.5">
                    Recommended Technologies
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-lg bg-white text-[#1e293b] border border-[#e7e5ef] font-medium hover:border-[#7c3aed]/60 hover:bg-[#7c3aed]/[0.08] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#e7e5ef] pt-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#6d28d9] mb-2.5">
                    Deliverables
                  </h3>
                  <ul className="space-y-2 text-xs text-[#475569]">
                    {service.deliverables.map((deliv) => (
                      <li key={deliv} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-[#e7e5ef] pt-5">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="md"
                    className="w-full justify-center shadow-sm hover:shadow-md hover:scale-[1.02] transition-all"
                    icon={<Icon name="arrow-right" className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />}
                  >
                    Request a Quote
                  </Button>
                </div>
              </div>

              {/* Service Navigation */}
              <div className="p-4 rounded-xl border border-[#e7e5ef] flex items-center justify-between text-xs font-semibold text-[#475569]">
                {prevService ? (
                  <Link
                    href={`/services/${prevService.slug}`}
                    className="hover:text-[#6d28d9] flex items-center gap-1"
                  >
                    <Icon name="arrow-left" className="w-3 h-3" />
                    <span>Previous Service</span>
                  </Link>
                ) : (
                  <span />
                )}

                {nextService && (
                  <Link
                    href={`/services/${nextService.slug}`}
                    className="hover:text-[#6d28d9] flex items-center gap-1"
                  >
                    <span>Next Service</span>
                    <Icon name="arrow-right" className="w-3 h-3" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Corporate CTA */}
      <CtaSection />
    </div>
  );
}
