import React from "react";
import type { Metadata } from "next";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Button } from "@/src/components/common/Button";
import { Icon } from "@/src/components/common/Icon";
import { CtaSection } from "@/src/components/home/CtaSection";
import { TrustMetrics } from "@/src/components/home/TrustMetrics";

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
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#f0f9ff]/60 to-white border-b border-slate-100">
        <Container>
          <SectionHeading
            eyebrow="Who We Are"
            title="Building Modern Software With Purpose and Precision"
            description="EagleSoft Pvt Ltd is a dedicated technology and software development company focused on building practical, scalable digital solutions for organizations."
            align="center"
          />
        </Container>
      </section>

      <TrustMetrics />

      {/* Who We Are & Story */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0288d1]">
                Our Background
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                A Technology Partner Built for Practical Business Needs
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Founded with a mission to bridge the gap between technical complexity and business reality, EagleSoft Pvt Ltd creates software that organizations rely on for their daily operations.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Rather than treating software as a generic commodity or an individual portfolio exercise, we approach every project as an institutional business asset. We take the time to understand operational bottlenecks, inventory logistics, sales flows, and administrative pain points before proposing an architectural blueprint.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Based in Islamabad, Pakistan, we operate with a disciplined engineering culture, adhering to international software engineering standards and transparent client communication.
              </p>
            </div>

            {/* Visual Corporate Card (With Hover Lift & Shadow Animation) */}
            <div className="lg:col-span-6">
              <div className="group p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-2xl hover:border-[#0288d1] hover:-translate-y-1.5 transition-all duration-300 space-y-6">
                <div className="border-b border-slate-200 pb-5">
                  <div className="text-xs font-mono font-bold text-[#0288d1] uppercase mb-1">
                    Corporate Identity
                  </div>
                  <div className="text-2xl font-black text-slate-900 group-hover:text-[#0288d1] transition-colors">
                    EagleSoft Pvt Ltd
                  </div>
                  <div className="text-sm text-slate-500 mt-1">
                    Registered Technology Company • Islamabad, Pakistan
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 group-hover:border-[#03a9f4] transition-colors">
                    <div className="text-2xl font-black text-[#0288d1]">100%</div>
                    <div className="text-xs text-slate-600 font-medium mt-1">
                      In-House Engineering & Source Control
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 group-hover:border-[#03a9f4] transition-colors">
                    <div className="text-2xl font-black text-[#0288d1]">Dedicated</div>
                    <div className="text-xs text-slate-600 font-medium mt-1">
                      Architecture & Post-Launch Support
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 group-hover:border-[#03a9f4] transition-colors">
                    <div className="text-2xl font-black text-[#0288d1]">Enterprise</div>
                    <div className="text-xs text-slate-600 font-medium mt-1">
                      Type-Safe & Scalable Codebases
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 group-hover:border-[#03a9f4] transition-colors">
                    <div className="text-2xl font-black text-[#0288d1]">Full IP</div>
                    <div className="text-xs text-slate-600 font-medium mt-1">
                      Client Ownership of Delivered Code
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision (With Hover Lift & Animated Icon Badges) */}
      <section className="py-16 sm:py-24 bg-slate-50/60 border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="group p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-2xl hover:border-[#0288d1] hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#b3e5fc]/60 text-[#0288d1] flex items-center justify-center mb-6 font-bold shadow-2xs group-hover:scale-110 group-hover:bg-[#0288d1] group-hover:text-white transition-all duration-300">
                <Icon name="bullseye" className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0288d1]">
                Purpose
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1 mb-4 group-hover:text-[#0288d1] transition-colors">
                Our Mission
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                To build practical and reliable software that helps businesses use technology to operate more efficiently, reach more customers, and create better experiences.
              </p>
            </div>

            {/* Vision */}
            <div className="group p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-2xl hover:border-[#0288d1] hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#b3e5fc]/60 text-[#0288d1] flex items-center justify-center mb-6 font-bold shadow-2xs group-hover:scale-110 group-hover:bg-[#0288d1] group-hover:text-white transition-all duration-300">
                <Icon name="lightbulb" className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0288d1]">
                Future
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1 mb-4 group-hover:text-[#0288d1] transition-colors">
                Our Vision
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                To become a trusted technology partner for businesses looking to transform their ideas and operations through software.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What We Believe (With Card Lift & Icon Scaling) */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <Container>
          <SectionHeading
            eyebrow="Core Values"
            title="What We Believe"
            description="Our engineering principles guide how we architect systems, write code, and collaborate with our client partners."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beliefs.map((belief) => (
              <div
                key={belief.title}
                className="group p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#0288d1] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#b3e5fc]/60 text-[#0288d1] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#0288d1] group-hover:text-white transition-all duration-300 shadow-2xs">
                    <Icon name={belief.icon} className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-[#0288d1] transition-colors">
                    {belief.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {belief.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#0288d1]">
                  <Icon name="check" className="w-3.5 h-3.5 text-[#03a9f4]" />
                  <span>EagleSoft Principle</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology We Use (With Hover Elevation) */}
      <section className="py-16 sm:py-24 bg-slate-50/60 border-b border-slate-100">
        <Container>
          <SectionHeading
            eyebrow="Technical Stack"
            title="Technologies We Build With"
            description="We select proven, modern, production-grade technologies that ensure performance, maintainability, and scalability."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((stack) => (
              <div
                key={stack.category}
                className="group p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#03a9f4] hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-[#b3e5fc]/50 text-[#0288d1] flex items-center justify-center group-hover:bg-[#0288d1] group-hover:text-white transition-colors">
                    <Icon name="code" className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-[#0288d1] transition-colors">
                    {stack.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1 rounded-lg bg-[#f0f9ff] text-[#0288d1] border border-[#b3e5fc] font-semibold hover:bg-[#0288d1] hover:text-white transition-colors"
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
