import React from "react";
import Link from "next/link";
import { siteConfig } from "@/src/config/site";
import { footerNav } from "@/src/config/navigation";
import { Logo } from "@/src/components/common/Logo";
import { Container } from "@/src/components/common/Container";
import { Icon, IconName } from "@/src/components/common/Icon";

export function Footer() {
  const socialItems: { name: string; icon: IconName; href: string }[] = [
    { name: "LinkedIn", icon: "linkedin", href: siteConfig.socialLinks.linkedin },
    { name: "GitHub", icon: "github", href: siteConfig.socialLinks.github },
    { name: "X", icon: "twitter", href: siteConfig.socialLinks.x },
    { name: "Facebook", icon: "facebook", href: siteConfig.socialLinks.facebook },
    { name: "Instagram", icon: "instagram", href: siteConfig.socialLinks.instagram },
  ];

  return (
    <footer className="bg-[#0288d1] text-white border-t border-[#03a9f4]/30">
      {/* Upper Main Footer Content */}
      <div className="py-14 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Column 1: Brand & Overview (Spans 2 cols on lg) */}
            <div className="lg:col-span-2 space-y-4">
              <Logo variant="dark" showTagline={true} />
              <p className="text-white/90 text-sm leading-relaxed max-w-sm">
                {siteConfig.positioning}
              </p>

              {/* Verified Contact Details from site.ts */}
              <div className="pt-2 space-y-2 text-sm text-white/90">
                <div className="flex items-center gap-2.5">
                  <Icon name="location-dot" className="w-4 h-4 text-[#b3e5fc]" />
                  <span>{siteConfig.address.full}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Icon name="envelope" className="w-4 h-4 text-[#b3e5fc]" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-[#b3e5fc] transition-colors underline decoration-white/40 underline-offset-4"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Icon name="clock" className="w-4 h-4 text-[#b3e5fc]" />
                  <span>
                    {siteConfig.businessHours.days} ({siteConfig.businessHours.hours})
                  </span>
                </div>
              </div>

              {/* Social Placeholders */}
              <div className="pt-4 flex items-center gap-3">
                {socialItems.map((social) => (
                  <span
                    key={social.name}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                    title={`${social.name} (Official profile)`}
                  >
                    <Icon name={social.icon} className="w-4 h-4" />
                  </span>
                ))}
              </div>
            </div>

            {/* Column 2: Core Services */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#b3e5fc] mb-4">
                Services
              </h3>
              <ul className="space-y-2.5 text-sm">
                {footerNav.services.slice(0, 6).map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-white/85 hover:text-white transition-colors"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Business Solutions */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#b3e5fc] mb-4">
                Solutions
              </h3>
              <ul className="space-y-2.5 text-sm">
                {footerNav.solutions.slice(0, 6).map((solution) => (
                  <li key={solution.href}>
                    <Link
                      href={solution.href}
                      className="text-white/85 hover:text-white transition-colors"
                    >
                      {solution.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Company & Legal */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#b3e5fc] mb-4">
                Company
              </h3>
              <ul className="space-y-2.5 text-sm mb-6">
                {footerNav.company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/85 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="space-y-2 text-xs text-white/70">
                <div>
                  <Link href="/privacy-policy" className="hover:text-white underline">
                    Privacy Policy
                  </Link>
                </div>
                <div>
                  <Link href="/terms" className="hover:text-white underline">
                    Terms & Conditions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="border-t border-white/15 py-6 bg-[#0277bd]/50">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/80">
            <div>
              <p>{siteConfig.copyright}</p>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/40">•</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <span className="text-white/40">•</span>
              <span>Corporate Registration: PK</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
