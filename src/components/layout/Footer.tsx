import React from "react";
import Link from "next/link";
import { siteConfig } from "@/src/config/site";
import { footerNav } from "@/src/config/navigation";
import { Logo } from "@/src/components/common/Logo";
import { Container } from "@/src/components/common/Container";
import { Icon, IconName } from "@/src/components/common/Icon";
import { whatsappHref } from "@/src/components/common/WhatsAppFloat";

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold !text-white">{children}</h3>
      <span className="block mt-2 w-9 h-[3px] rounded-full bg-blue-grad" aria-hidden="true" />
    </div>
  );
}

function LinkList({ items }: { items: readonly { label: string; href: string }[] }) {
  return (
    <ul className="divide-y divide-white/[0.07]">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="flex items-center gap-2.5 py-2.5 text-sm font-semibold text-white/75 hover:text-white transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#4fc3f7]" aria-hidden="true" />
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  const socials: { name: string; icon: IconName; href: string }[] = [
    { name: "Facebook", icon: "facebook", href: siteConfig.socialLinks.facebook },
    { name: "LinkedIn", icon: "linkedin", href: siteConfig.socialLinks.linkedin },
    { name: "WhatsApp", icon: "whatsapp", href: whatsappHref },
  ];

  const contacts: { label: string; value: string; href?: string; icon: IconName }[] = [
    { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: "envelope" },
    { label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}`, icon: "phone" },
    { label: "Address", value: siteConfig.address.full, icon: "location-dot" },
  ];

  return (
    <footer className="navy-band">
      <div className="h-[3px] bg-blue-grad" aria-hidden="true" />
      <Container className="py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4">
            <ColumnTitle>About Us</ColumnTitle>
            <Logo variant="dark" size="md" showTagline={true} />
            <p className="mt-5 text-sm leading-relaxed !text-white/65 max-w-sm">{siteConfig.positioning}</p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.name} (opens in a new tab)`}
                  className="w-10 h-10 rounded-full border border-white/15 text-white/80 flex items-center justify-center hover:bg-blue-grad hover:border-transparent hover:text-white transition-colors"
                >
                  <Icon name={s.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <ColumnTitle>Quick Links</ColumnTitle>
            <LinkList items={footerNav.company} />
          </div>

          <div className="lg:col-span-3">
            <ColumnTitle>Our Services</ColumnTitle>
            <LinkList items={footerNav.services.slice(0, 6)} />
          </div>

          <div className="lg:col-span-3">
            <ColumnTitle>Contact Us</ColumnTitle>
            <ul className="space-y-4">
              {contacts.map((c) => (
                <li key={c.label} className="flex items-start gap-3.5">
                  <span className="w-11 h-11 rounded-xl border border-white/15 bg-white/[0.05] text-[#4fc3f7] flex items-center justify-center flex-shrink-0">
                    <Icon name={c.icon} className="w-4 h-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">{c.label}</span>
                    {c.href ? (
                      <a href={c.href} className="block mt-0.5 text-sm font-bold text-white hover:text-[#4fc3f7] break-words">
                        {c.value}
                      </a>
                    ) : (
                      <span className="block mt-0.5 text-sm font-bold text-white">{c.value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/60">
          <p className="!text-white/60">{siteConfig.copyright}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link>
            <Link href="/contact" className="hover:text-white">Get a Quote</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
