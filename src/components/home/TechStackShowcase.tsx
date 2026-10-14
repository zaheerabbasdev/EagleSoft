import React from "react";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { techStackData } from "@/src/config/home";

/** Technology directory: compact cards with a monogram tile. */
export function TechStackShowcase() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Core Technologies"
          title="Technologies"
          highlight="We Use"
          description="Modern, reliable technology chosen for long-term stability, not hype."
          align="left"
          className="mb-10"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {techStackData.map((tech) => (
            <div key={tech} className="agency-card !rounded-2xl px-4 py-4 flex items-center gap-3.5">
              <span className="w-10 h-10 rounded-xl bg-[#eff8ff] text-[#0288d1] text-xs font-extrabold flex items-center justify-center flex-shrink-0">
                {tech.replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase()}
              </span>
              <span className="text-[15px] font-bold text-[#0b1220] truncate">{tech}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
