import React from "react";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Icon } from "@/src/components/common/Icon";
import { testimonialsData } from "@/src/config/home";

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <Container>
        <SectionHeading eyebrow="Client Stories" title="Trusted by the Businesses" highlight="We Build For" className="mb-14" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((t, i) => (
            <figure key={t.id} className={`reveal reveal-delay-${i + 1} card card-hover p-7 flex flex-col`}>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Icon key={k} name="star" className="w-4 h-4 text-[#f5a623]" />
                  ))}
                </div>
                <span className="font-display text-5xl leading-none text-[#e4dcfb]" aria-hidden="true">
                  &ldquo;
                </span>
              </div>
              <blockquote className="text-[15px] text-[#334155] leading-relaxed flex-1">{t.quote}</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-[#efedf5] text-sm font-bold text-[#6d28d9]">
                {t.attribution}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
