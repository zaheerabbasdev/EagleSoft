import React from "react";
import type { Metadata } from "next";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Button } from "@/src/components/common/Button";
import { Icon } from "@/src/components/common/Icon";
import { CtaSection } from "@/src/components/home/CtaSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about EagleSoft Pvt Ltd: our mission, engineering philosophy, and dedication to building software that empowers modern businesses.",
};

export default function AboutPage() {
  const beliefs = [
    {
      title: "Utility Over Complexity",
      desc: "Software should directly solve business operational problems. We avoid over-engineering and prioritize clean, reliable systems that provide immediate daily value.",
      icon: "bullseye" as const,
    },
    {
      title: "Quality as a Foundation",
      desc: "Maintainable code, robust database architecture, and strict security are not afterthoughts. They are built into every layer from day one.",
      icon: "shield" as const,
    },
    {
      title: "Long-Term Partnership",
      desc: "We view our clients as lasting partners. Our role does not end when code is written; we ensure ongoing software stability, updates, and scalability.",
      icon: "handshake" as const,
    },
    {
      title: "User-Centered Clarity",
      desc: "If an interface is confusing to use, even the most advanced software fails. We design intuitive, straightforward workflows that minimize user friction.",
      icon: "pen-ruler" as const,
    },
  ];

  const technologies = [
    {
      category: "Frontend & Mobile",
      items: ["Next.js", "React", "TypeScript", "React Native", "Flutter", "Tailwind CSS"],
    },
    {
      category: "Backend & APIs",
      items: ["Node.js", "Express", "RESTful APIs", "GraphQL", "WebSockets", "Microservices"],
    },
    {
      category: "Databases & Caching",
      items: ["PostgreSQL", "MySQL", "Redis", "SQLite", "Database Indexing & Replication"],
    },
    {
      category: "Cloud, DevOps & Infrastructure",
      items: ["Docker", "Linux (Ubuntu)", "Nginx", "AWS", "DigitalOcean", "CI/CD Pipelines", "SSL/TLS Hardening"],
    },
  ];

  return (
    <div className="bg-white">
      {/* About Page Hero */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#f0f9ff]/50 to-white border-b border-gray-100">
        <Container>
          <SectionHeading
            eyebrow="Who We Are"
            title="Building Modern Software With Purpose and Precision"
            description="EagleSoft Pvt Ltd is a dedicated technology and software development company focused on building practical, scalable digital solutions for organizations."
            align="center"
          />
        </Container>
      </section>

      {/* Who We Are & Story */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0288d1]">
                Our Background
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#212121]">
                A Technology Partner Built for Practical Business Needs
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Founded with a mission to bridge the gap between technical complexity and business reality, EagleSoft Pvt Ltd creates software that organizations rely on for their daily operations.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Rather than treating software as a generic commodity or an individual portfolio exercise, we approach every project as an institutional business asset. We take the time to understand operational bottlenecks, inventory logistics, sales flows, and administrative pain points before proposing an architectural blueprint.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Based in Islamabad, Pakistan, we operate with a disciplined engineering culture, adhering to international software engineering standards and transparent client communication.
              </p>
            </div>

            {/* Visual Corporate Card */}
            <div className="lg:col-span-6">
              <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200/90 shadow-sm space-y-6">
                <div className="border-b border-gray-200 pb-5">
                  <div className="text-xs font-mono font-bold text-[#0288d1] uppercase mb-1">
                    Corporate Identity
                  </div>
                  <div className="text-xl font-extrabold text-[#212121]">
                    EagleSoft Pvt Ltd
                  </div>
                  <div className="text-sm text-gray-500">
                    Registered Technology Company • Pakistan
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-2xl font-extrabold text-[#0288d1]">100%</div>
                    <div className="text-xs text-gray-600 mt-1">
                      In-House Engineering & Source Control
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-[#0288d1]">Dedicated</div>
                    <div className="text-xs text-gray-600 mt-1">
                      Architecture & Post-Launch Support
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-[#0288d1]">Enterprise</div>
                    <div className="text-xs text-gray-600 mt-1">
                      Type-Safe & Scalable Codebases
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-[#0288d1]">Full IP</div>
                    <div className="text-xs text-gray-600 mt-1">
                      Client Ownership of Delivered Code
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 bg-gray-50/70 border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 rounded-2xl bg-white border border-gray-200/90 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-[#b3e5fc]/60 text-[#0288d1] flex items-center justify-center mb-5 font-bold">
                <Icon name="bullseye" className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0288d1]">
                Purpose
              </span>
              <h3 className="text-2xl font-extrabold text-[#212121] mt-1 mb-4">
                Our Mission
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                To build practical and reliable software that helps businesses use technology to operate more efficiently, reach more customers, and create better experiences.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-2xl bg-white border border-gray-200/90 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-[#b3e5fc]/60 text-[#0288d1] flex items-center justify-center mb-5 font-bold">
                <Icon name="lightbulb" className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0288d1]">
                Future
              </span>
              <h3 className="text-2xl font-extrabold text-[#212121] mt-1 mb-4">
                Our Vision
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                To become a trusted technology partner for businesses looking to transform their ideas and operations through software.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What We Believe */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <Container>
          <SectionHeading
            eyebrow="Core Values"
            title="What We Believe"
            description="Our engineering principles guide how we architect systems, write code, and collaborate with our client partners."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beliefs.map((belief) => (
              <div
                key={belief.title}
                className="p-6 rounded-xl bg-white border border-gray-200/90 shadow-sm hover:border-[#03a9f4] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#b3e5fc]/60 text-[#0288d1] flex items-center justify-center mb-4">
                  <Icon name={belief.icon} className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#212121] mb-2">
                  {belief.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {belief.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology We Use */}
      <section className="py-16 sm:py-24 bg-gray-50/70 border-b border-gray-100">
        <Container>
          <SectionHeading
            eyebrow="Technical Stack"
            title="Technologies We Build With"
            description="We select proven, modern, production-grade technologies that ensure performance, maintainability, and scalability."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((stack) => (
              <div
                key={stack.category}
                className="p-6 rounded-xl bg-white border border-gray-200/90 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                  <Icon name="code" className="w-4 h-4 text-[#0288d1]" />
                  <h4 className="text-base font-bold text-[#212121]">
                    {stack.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded bg-[#f0f9ff] text-[#0288d1] border border-[#b3e5fc] font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CtaSection />
    </div>
  );
}
