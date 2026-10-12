import React from "react";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { techStackData } from "@/src/config/home";

export function TechStackShowcase() {
  return (
    <section className="py-16 sm:py-20 bg-white overflow-hidden">
      <Container>
        <SectionHeading eyebrow="Technology Stack" title="Built With Modern," highlight="Battle-Tested Tools" className="mb-10" />
      </Container>
      <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee">
          {[...techStackData, ...techStackData].map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              aria-hidden={index >= techStackData.length}
              className="mx-2 flex-shrink-0 px-5 py-2.5 rounded-full bg-[#f6f5fb] border border-[#e7e5ef] text-sm font-semibold text-[#334155]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
