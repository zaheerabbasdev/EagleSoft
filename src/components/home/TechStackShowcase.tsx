import React from "react";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { techStackData } from "@/src/config/home";

export function TechStackShowcase() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100 overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="Our Technology Stack"
          title="Built With Modern, Battle-Tested Tools"
          align="center"
          className="mb-10"
        />
      </Container>

      <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee">
          {[...techStackData, ...techStackData].map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="mx-2.5 sm:mx-3 flex-shrink-0 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-700 hover:border-[#03a9f4] hover:text-[#0288d1] hover:bg-[#f0f9ff] transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
