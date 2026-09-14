"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/src/config/navigation";
import { Logo } from "@/src/components/common/Logo";
import { Button } from "@/src/components/common/Button";
import { Icon } from "@/src/components/common/Icon";
import { useQuoteModal } from "@/src/context/QuoteModalContext";

export function Navbar() {
  const pathname = usePathname();
  const { openQuoteModal } = useQuoteModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80"
          : "bg-white border-b border-slate-100"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <Logo variant="light" showTagline={false} />
          </div>

          {/* Desktop Navigation Links (Clean, Corporate) */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {mainNav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-2 text-sm font-semibold transition-all duration-150 rounded-md ${
                    isActive
                      ? "text-[#0288d1] font-bold"
                      : "text-slate-700 hover:text-[#0288d1] hover:bg-slate-50"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#0288d1] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA Action */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="primary"
              size="md"
              onClick={() => openQuoteModal()}
              icon={<Icon name="arrow-right" className="w-3.5 h-3.5" />}
              className="shadow-sm hover:shadow"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:text-[#0288d1] hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03a9f4]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <Icon name={mobileMenuOpen ? "xmark" : "bars"} className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {mainNav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#0288d1] bg-[#b3e5fc]/30 font-bold"
                      : "text-slate-800 hover:text-[#0288d1] hover:bg-slate-50"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col space-y-3">
            <Button
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={() => {
                setMobileMenuOpen(false);
                openQuoteModal();
              }}
              icon={<Icon name="arrow-right" className="w-3.5 h-3.5" />}
            >
              Get a Quote
            </Button>
            <div className="text-center">
              <span className="text-xs text-slate-500">
                Corporate Software & Digital Engineering
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
