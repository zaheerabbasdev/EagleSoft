import React from "react";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Icon } from "@/src/components/common/Icon";
import { testimonialsData } from "@/src/config/home";

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50/60 border-b border-slate-100">
      <Container>
        <SectionHeading
          eyebrow="What Clients Say"
          title="Trusted by the Businesses We Build For"
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#03a9f4] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Icon key={i} name="star" className="w-3.5 h-3.5 text-[#f5a623]" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-[#0288d1] uppercase tracking-wider">
                {testimonial.attribution}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
