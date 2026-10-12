import React from "react";
import Link from "next/link";
import { siteConfig } from "@/src/config/site";
import { footerNav } from "@/src/config/navigation";
import { Logo } from "@/src/components/common/Logo";
import { Container } from "@/src/components/common/Container";
import { Icon, IconName } from "@/src/components/common/Icon";
import { whatsappHref } from "@/src/components/common/WhatsAppFloat";

const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  siteConfig.address.full
)}`;

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-base font-bold text-white! mb-2">{title}</h3>
      <span className="block w-7 h-[3px] rounded-full bg-gradient-to-r from-[#7c3aed] to-[#2563eb] mb-5" aria-hidden="true" />
      <ul className="space-y-3 text-sm">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-white/65 hover:text-white transition-colors">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const socialItems: { name: string; icon: IconName; href: string }[] = [
    { name: "LinkedIn", icon: "linkedin", href: siteConfig.socialLinks.linkedin },
    { name: "Facebook", icon: "facebook", href: siteConfig.socialLinks.facebook },
    { name: "WhatsApp", icon: "whatsapp", href: whatsappHref },
  ];

  const phones = [siteConfig.phone, siteConfig.phone2].filter(Boolean);

  return (
    <footer className="bg-[#0b0b1a] text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-5">
            <Logo variant="dark" size="lg" showTagline={true} />
            <p className="text-sm leading-relaxed text-white/65 max-w-sm">{siteConfig.positioning}</p>
            <div className="flex items-center gap-3">
              {socialItems.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.name} (opens in a new tab)`}
                  title={social.name}
                  className="w-10 h-10 rounded-full bg-white/[0.08] text-white flex items-center justify-center hover:bg-[#7c3aed] transition-colors"
                >
                  <Icon name={social.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <FooterColumn title="Services" items={footerNav.services.slice(0, 6)} />
          </div>
          <div className="lg:col-span-2">
            <FooterColumn title="Solutions" items={footerNav.solutions.slice(0, 6)} />
          </div>
          <div className="lg:col-span-2">
            <FooterColumn title="Company" items={footerNav.company} />
          </div>

          {/* Visit us */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className="text-base font-bold text-white! mb-2">Visit Us</h3>
            <span className="block w-7 h-[3px] rounded-full bg-gradient-to-r from-[#7c3aed] to-[#2563eb] mb-5" aria-hidden="true" />
            <p className="text-sm font-bold text-white mb-1.5">Head Office · {siteConfig.address.city}</p>
            <p className="flex items-start gap-2 text-sm text-white/65 mb-2">
              <Icon name="location-dot" className="w-3.5 h-3.5 mt-1 text-[#a78bfa] flex-shrink-0" />
              <span>{siteConfig.address.full}</span>
            </p>
            <a
              href={directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#a78bfa] hover:text-white transition-colors mb-5"
            >
              Get Directions
              <Icon name="arrow-right" className="w-3 h-3" />
            </a>
            <ul className="space-y-2.5 text-sm text-white/75">
              {phones.map((p) => (
                <li key={p}>
                  <a href={`tel:${p.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-white transition-colors">
                    <Icon name="phone" className="w-3.5 h-3.5 text-[#a78bfa]" />
                    {p}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 hover:text-white transition-colors break-all">
                  <Icon name="envelope" className="w-3.5 h-3.5 text-[#a78bfa]" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <Icon name="clock" className="w-3.5 h-3.5 text-[#a78bfa]" />
                {siteConfig.businessHours.days}, {siteConfig.businessHours.hours}
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/[0.08]">
        <Container className="py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <p>{siteConfig.copyright}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span>Web, Mobile &amp; Custom Software Development in Pakistan</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
