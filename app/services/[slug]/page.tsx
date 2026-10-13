import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/src/config/services";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
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
    <div className="bg-white">
      {/* Service Header */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#f0f9ff]/70 via-white to-white border-b border-gray-100">
        <Container>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-6">
            <Link href="/" className="hover:text-[#0288d1]">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#0288d1]">
              Services
            </Link>
            <span>/</span>
            <span className="text-[#0288d1]">{service.title}</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#b3e5fc]/50 text-[#0288d1] text-xs font-bold uppercase tracking-wider mb-4 border border-[#b3e5fc]">
              <Icon name={service.iconName} className="w-4 h-4" />
              <span>Service Specification</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#212121] tracking-tight mb-4">
              {service.title}
            </h1>
            <p className="text-lg text-[#475569] leading-relaxed">
              {service.shortDescription}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Service Content */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Detailed Overview */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-4">
                  Overview & Engineering Approach
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Capabilities Breakdown */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-6">
                  Core Solution Modules
                </h2>
                <div className="space-y-4">
                  {service.capabilities.map((cap) => (
                    <div
                      key={cap.title}
                      className="group p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#0288d1] hover:bg-white hover:-translate-y-1 transition-all duration-300"
                    >
                      <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#0288d1] transition-colors flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#03a9f4] group-hover:scale-150 transition-transform" />
                        <span>{cap.title}</span>
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features List */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-6">
                  Technical Capabilities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feat) => (
                    <div
                      key={feat}
                      className="group flex items-start gap-2.5 p-3.5 rounded-xl border border-slate-200/90 bg-white hover:border-[#0288d1] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-sm text-slate-700"
                    >
                      <Icon
                        name="check-circle"
                        className="w-4 h-4 text-[#0288d1] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform"
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
              <div className="group p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-2xl hover:border-[#0288d1] hover:-translate-y-1.5 transition-all duration-300 space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0288d1] mb-2">
                    Target Organizations
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {service.targetAudience}
                  </p>
                </div>

                <div className="border-t border-slate-200 pt-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0288d1] mb-2.5">
                    Recommended Technologies
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
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

                <div className="border-t border-slate-200 pt-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0288d1] mb-2.5">
                    Deliverables
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {service.deliverables.map((deliv) => (
                      <li key={deliv} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#03a9f4]" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-200 pt-5">
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
              <div className="p-4 rounded-xl border border-gray-200 flex items-center justify-between text-xs font-semibold text-gray-600">
                {prevService ? (
                  <Link
                    href={`/services/${prevService.slug}`}
                    className="hover:text-[#0288d1] flex items-center gap-1"
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
                    className="hover:text-[#0288d1] flex items-center gap-1"
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
