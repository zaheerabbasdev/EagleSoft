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
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the drawer whenever the route changes (adjust state during render, no effect needed)
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Mobile drawer: Escape closes it, page behind it does not scroll
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileMenuOpen(false);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl border-b transition-shadow duration-300 ${
        isScrolled || mobileMenuOpen
          ? "border-[#e7e5ef] shadow-[0_8px_30px_-12px_rgba(15,23,42,0.15)]"
          : "border-[#efedf5]"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[80px] gap-6">
          <div className="flex-shrink-0">
            <Logo size="md" showTagline={false} />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {mainNav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative px-3 py-2 text-[15px] font-semibold transition-colors ${
                    active ? "text-[#6d28d9]" : "text-[#1e293b] hover:text-[#6d28d9]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-3 right-3 -bottom-0.5 h-[2.5px] rounded-full bg-gradient-to-r from-[#7c3aed] to-[#2563eb] transition-transform duration-300 origin-left ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={telHref}
              aria-label={`Call ${siteConfig.phone}`}
              title={siteConfig.phone}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#2563eb] text-white flex items-center justify-center shadow-lg shadow-[#7c3aed]/30 hover:scale-105 transition-transform"
            >
              <Icon name="phone" className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold rounded-full border border-[#dddbe8] text-[#0f172a] hover:border-[#7c3aed] hover:text-[#6d28d9] transition-colors cursor-pointer"
            >
              Get a Quote
              <Icon name="arrow-right" className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={telHref}
              aria-label={`Call ${siteConfig.phone}`}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#2563eb] text-white flex items-center justify-center"
            >
              <Icon name="phone" className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full border border-[#e7e5ef] text-[#0f172a] hover:bg-[#f6f5fb] flex items-center justify-center transition-colors cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <Icon name={mobileMenuOpen ? "xmark" : "bars"} className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile Navigation"
          className="lg:hidden max-h-[calc(100dvh-80px)] overflow-y-auto bg-white border-t border-[#efedf5] px-5 pt-3 pb-6 fade-in"
        >
          <div className="flex flex-col">
            {mainNav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-[15px] font-semibold transition-colors ${
                    active ? "text-[#6d28d9] bg-[#f3effe]" : "text-[#1e293b] hover:bg-[#f6f5fb]"
                  }`}
                >
                  <span>{item.label}</span>
                  <Icon name="arrow-right" className={`w-3 h-3 ${active ? "text-[#7c3aed]" : "text-[#94a3b8]"}`} />
                </Link>
              );
            })}
          </div>
          <div className="mt-5 pt-5 border-t border-[#efedf5] flex flex-col gap-3">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-white rounded-full bg-[#7c3aed] hover:bg-[#6d28d9] shadow-lg shadow-[#7c3aed]/30 cursor-pointer"
              onClick={() => {
                setMobileMenuOpen(false);
                openQuoteModal();
              }}
            >
              Get a Free Quote
              <Icon name="arrow-right" className="w-3.5 h-3.5" />
            </button>
            <a
              href={telHref}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-[#0f172a] rounded-full border border-[#dddbe8]"
            >
              <Icon name="phone" className="w-3.5 h-3.5 text-[#7c3aed]" />
              {siteConfig.phone}
            </a>
            <p className="text-center text-xs text-[#64748b]">
              {siteConfig.legalName} · {siteConfig.address.city}, {siteConfig.address.country}
            </p>
          </div>
        </nav>
      )}
    </header>
  );
}
