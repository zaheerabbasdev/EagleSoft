import React from "react";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { teamData } from "@/src/config/home";

export function TeamSection() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container>
        <SectionHeading
          eyebrow="The Team"
          title="Meet Our"
          highlight="Team"
          description="The people who join your kickoff call are the ones who ship your product."
          align="left"
          className="mb-12"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {teamData.map((member) => (
            <div key={member.id} className="agency-card p-6 flex items-center gap-4">
              <span className="w-14 h-14 rounded-2xl bg-blue-grad text-white text-lg font-extrabold flex items-center justify-center flex-shrink-0">
                {member.initials}
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-bold text-[#0b1220] leading-snug">{member.name}</h3>
                <p className="text-sm font-semibold text-[#0288d1] mt-0.5">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
