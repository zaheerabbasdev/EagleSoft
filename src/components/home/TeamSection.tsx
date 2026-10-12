import React from "react";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { teamData } from "@/src/config/home";

export function TeamSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#f6f5fb]">
      <Container>
        <SectionHeading
          eyebrow="Our Team"
          title="The People Behind"
          highlight="EagleSoft"
          description="A small, focused team of engineers and designers who work directly with you from first call to launch."
          className="mb-14"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
          {teamData.map((member, i) => (
            <div key={member.id} className={`reveal reveal-delay-${(i % 4) + 1} card card-hover p-6 text-center`}>
              <div className="w-20 h-20 mx-auto rounded-full p-[3px] bg-gradient-to-br from-[#7c3aed] to-[#2563eb] mb-4">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-xl font-extrabold text-[#6d28d9]">
                  {member.initials}
                </div>
              </div>
              <h3 className="text-base font-bold text-[#0f172a] leading-snug">{member.name}</h3>
              <p className="text-sm text-[#64748b] mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
