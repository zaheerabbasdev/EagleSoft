import React from "react";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { teamData } from "@/src/config/home";

export function TeamSection() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <Container>
        <SectionHeading
          eyebrow="Our Team"
          title="The People Behind EagleSoft"
          description="A small, focused team of engineers and designers who work directly with you from first call to launch."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#03a9f4] hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#0288d1] to-[#03a9f4] text-white flex items-center justify-center text-lg font-bold shadow-sm mb-4">
                {member.initials}
              </div>
              <h3 className="text-sm font-bold text-slate-900 leading-snug">
                {member.name}
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
