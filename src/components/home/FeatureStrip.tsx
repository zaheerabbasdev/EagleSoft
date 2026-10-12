import React from "react";
import { Container } from "@/src/components/common/Container";
import { Icon, IconName } from "@/src/components/common/Icon";

const features: { title: string; desc: string; icon: IconName }[] = [
  { title: "100% Code Ownership", desc: "Source code & IP handed over", icon: "shield" },
  { title: "Free Project Scoping", desc: "Clear scope, timeline & cost", icon: "document" },
  { title: "Weekly Working Demos", desc: "See real progress every week", icon: "laptop-code" },
  { title: "Post-Launch Support", desc: "Maintenance, fixes & updates", icon: "headset" },
];

export function FeatureStrip() {
  return (
    <section className="bg-white border-b border-[#efedf5]" aria-label="Why work with EagleSoft">
      <Container className="py-10 sm:py-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <li key={f.title} className={`reveal reveal-delay-${i + 1} flex items-center gap-4`}>
              <span className="icon-tile">
                <Icon name={f.icon} className="w-5 h-5" />
              </span>
              <span>
                <span className="block text-base font-bold text-[#0f172a]">{f.title}</span>
                <span className="block text-sm text-[#64748b]">{f.desc}</span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
