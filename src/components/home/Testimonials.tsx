import React from "react";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Icon } from "@/src/components/common/Icon";
import { testimonialsData } from "@/src/config/home";

export function Testimonials() {
  return (
    <section className="navy-band py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Client Stories"
          title="Client"
          highlight="Reviews"
          description="Real words from the businesses we build for."
          align="left"
          variant="dark"
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonialsData.map((t) => (
            <figure key={t.id} className="relative rounded-2xl border border-white/10 bg-white/[0.05] p-7 flex flex-col">
              <Icon name="quote" className="absolute top-6 right-6 text-2xl text-[#4fc3f7]/60" />
              <div className="flex gap-1 text-[#4fc3f7]" aria-label={`${t.rating} star rating`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Icon key={i} name="star" className="w-3.5 h-3.5" />
                ))}
              </div>
              <blockquote className="mt-5 text-[15px] leading-relaxed text-white/85 flex-1">{t.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-blue-grad text-white flex items-center justify-center">
                  <Icon name="users" className="w-4 h-4" />
                </span>
                <span className="text-sm font-bold text-white">{t.attribution}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
