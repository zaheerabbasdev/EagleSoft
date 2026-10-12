import React from "react";
import Image from "next/image";
import { Container } from "@/src/components/common/Container";
import { Button } from "@/src/components/common/Button";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Icon } from "@/src/components/common/Icon";
import { siteConfig } from "@/src/config/site";

const promises = [
  "Custom-built around your team & workflows",
  "Plain-English communication",
  "Weekly working demos",
  "Battle-tested, reliable architecture",
  "You own 100% of source code & data",
  "No vendor lock-in or hostage fees",
  "Modern, mobile-friendly interfaces",
  "Dedicated post-launch support",
];

export function CompanyIntro() {
  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          {/* Image with dashed offset frame */}
          <div className="reveal relative dashed-frame isolate mr-5 mb-5">
            <div className="relative aspect-[4/3.4] rounded-[28px] overflow-hidden shadow-2xl shadow-[#0f172a]/15">
              <Image
                src="/hero/hero-slide-1.jpg"
                alt="The EagleSoft engineering team at work"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-[#0f172a] shadow-xl">
              <Icon name="location-dot" className="w-3.5 h-3.5 text-[#7c3aed]" />
              {siteConfig.address.city}, {siteConfig.address.country}
            </div>
          </div>

          {/* Copy */}
          <div>
            <SectionHeading
              eyebrow="About EagleSoft"
              title="Software Shouldn't Be"
              highlight="Complicated"
              align="left"
              className="mb-6"
            />
            <p className="reveal text-base sm:text-lg text-[#475569] leading-relaxed mb-7">
              {siteConfig.description} We take away the headaches of software development, so you get a
              reliable digital tool your team actually enjoys using every day.
            </p>
            <ul className="reveal grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 mb-9">
              {promises.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] text-[#1e293b]">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#7c3aed] text-white flex items-center justify-center flex-shrink-0">
                    <Icon name="check" className="w-2.5 h-2.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="reveal flex flex-col sm:flex-row gap-3.5">
              <Button href="/about" variant="primary" size="md" icon={<Icon name="arrow-right" className="w-3.5 h-3.5" />}>
                More About Us
              </Button>
              <Button
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                variant="secondary"
                size="md"
                iconPosition="left"
                icon={<Icon name="phone" className="w-3.5 h-3.5 text-[#7c3aed]" />}
              >
                {siteConfig.phone}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
