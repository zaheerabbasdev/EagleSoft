import React from "react";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Icon, IconName } from "@/src/components/common/Icon";
import { siteConfig } from "@/src/config/site";
import { whatsappHref } from "@/src/components/common/WhatsAppFloat";

const channels: { name: string; sub: string; icon: IconName; href: string; color: string }[] = [
  { name: "LinkedIn", sub: "Follow us", icon: "linkedin", href: siteConfig.socialLinks.linkedin, color: "bg-[#0a66c2]" },
  { name: "Facebook", sub: "Follow us", icon: "facebook", href: siteConfig.socialLinks.facebook, color: "bg-[#1877f2]" },
  { name: "WhatsApp", sub: "Chat with us", icon: "whatsapp", href: whatsappHref, color: "bg-[#25d366]" },
];

export function FollowSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#f6f5fb]">
      <Container size="narrow">
        <SectionHeading eyebrow="Follow Our Journey" title="See What We're" highlight="Building" className="mb-12" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {channels.map((c, i) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal reveal-delay-${i + 1} group card card-hover p-7 text-center`}
            >
              <span className={`w-14 h-14 mx-auto rounded-full ${c.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon name={c.icon} className="w-6 h-6" />
              </span>
              <span className="block text-base font-bold text-[#0f172a]">{c.name}</span>
              <span className="block text-sm text-[#64748b] mt-1">{c.sub}</span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
