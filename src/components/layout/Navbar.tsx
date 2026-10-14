"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/src/config/navigation";
import { Logo } from "@/src/components/common/Logo";
import { Icon } from "@/src/components/common/Icon";
import { useQuoteModal } from "@/src/context/QuoteModalContext";
import { siteConfig } from "@/src/config/site";

const telHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;

export function Navbar() {
  const pathname = usePathname();
  const { openQuoteModal } = useQuoteModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer when the route changes
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMobileMenuOpen(false);
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-white/95 backdrop-blur-xl border-b border-[#e6eefa] shadow-[0_8px_30px_-16px_rgba(10,22,40,0.25)]"
          : "bg-white/80 backdrop-blur-md border-b border-[#eef3fa]"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] gap-6">
          <div className="flex-shrink-0">
            <Logo variant="light" size="md" showTagline={false} />
          </div>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {mainNav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`px-3.5 py-2 text-[15px] font-semibold transition-colors ${
                    active ? "text-[#0288d1]" : "text-[#1b2433] hover:text-[#0288d1]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <a
              href={telHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#3b4757] hover:text-[#0288d1] transition-colors"
            >
              <Icon name="phone" className="w-3.5 h-3.5 text-[#0288d1]" />
              {siteConfig.phone}
            </a>
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-grad text-white text-sm font-bold shadow-lg shadow-[#0288d1]/30 hover:-translate-y-0.5 transition-transform cursor-pointer"
            >
              Start Your Project
              <Icon name="arrow-right" className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={telHref}
              aria-label={`Call ${siteConfig.phone}`}
              className="w-10 h-10 rounded-xl bg-blue-grad text-white flex items-center justify-center"
            >
              <Icon name="phone" className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl border border-[#e6eefa] text-[#1b2433] hover:bg-[#f5f9fe] flex items-center justify-center cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <Icon name={mobileMenuOpen ? "xmark" : "bars"} className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile Navigation"
          className="lg:hidden max-h-[calc(100dvh-72px)] overflow-y-auto bg-white border-t border-[#eef3fa] px-5 pt-3 pb-6 fade-in"
        >
          {mainNav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-semibold ${
                  active ? "text-[#0288d1] bg-[#eff8ff]" : "text-[#1b2433] hover:bg-[#f5f9fe]"
                }`}
              >
                {item.label}
                <Icon name="arrow-right" className="w-3 h-3 text-[#94a3b8]" />
              </Link>
            );
          })}
          <div className="mt-4 pt-4 border-t border-[#eef3fa] flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openQuoteModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-grad text-white text-sm font-bold cursor-pointer"
            >
              Start Your Project
              <Icon name="arrow-right" className="w-3.5 h-3.5" />
            </button>
            <a
              href={telHref}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl border border-[#dbe7f5] text-sm font-bold text-[#1b2433]"
            >
              <Icon name="phone" className="w-3.5 h-3.5 text-[#0288d1]" />
              {siteConfig.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
