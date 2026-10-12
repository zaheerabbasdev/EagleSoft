"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/src/components/common/Container";
import { Button } from "@/src/components/common/Button";
import { Icon } from "@/src/components/common/Icon";
import { useQuoteModal } from "@/src/context/QuoteModalContext";
import { heroContent, heroBackgroundSlidesData, friendlyServicesData } from "@/src/config/home";

const heroChecks = ["100% Code Ownership", "Weekly Working Demos", "Post-Launch Support"];

export function Hero() {
  const { openQuoteModal } = useQuoteModal();
  const slides = heroBackgroundSlidesData;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (next: number) => setIndex((next + slides.length) % slides.length),
    [slides.length]
  );

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 5500);
    return () => window.clearInterval(t);
  }, [paused, slides.length]);

  const current = slides[index];

  return (
    <>
      <section className="brand-band overflow-hidden" aria-label="EagleSoft software company">
        <Container className="relative pt-14 pb-28 sm:pt-20 sm:pb-32 lg:pt-20 lg:pb-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Copy */}
            <div className="lg:col-span-6 space-y-7">
              <span className="reveal pill-label pill-label-dark">
                <span className="w-2 h-2 rounded-full bg-[#a78bfa] shadow-[0_0_10px_#a78bfa]" aria-hidden="true" />
                {heroContent.eyebrow}
              </span>

              <h1 className="reveal reveal-delay-1 text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold tracking-tight leading-[1.06] text-white">
                {heroContent.headlineStart}{" "}
                <span className="text-gradient-soft">{heroContent.headlineHighlight}</span>
              </h1>

              <p className="reveal reveal-delay-2 text-base sm:text-lg text-white/75 leading-relaxed max-w-xl">
                {heroContent.description}
              </p>

              <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-3.5">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => openQuoteModal()}
                  icon={<Icon name="arrow-right" className="w-4 h-4" />}
                  className="btn-shine"
                >
                  {heroContent.primaryCtaText}
                </Button>
                <Button
                  href={heroContent.secondaryCtaHref}
                  variant="outline-white"
                  size="lg"
                  icon={<Icon name="arrow-right" className="w-4 h-4" />}
                >
                  {heroContent.secondaryCtaText}
                </Button>
              </div>

              <ul className="reveal reveal-delay-4 flex flex-wrap gap-x-6 gap-y-2.5 pt-1">
                {heroChecks.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-semibold text-white/90">
                    <Icon name="check" className="w-3.5 h-3.5 text-[#a78bfa]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image slider */}
            <div className="lg:col-span-6 relative reveal reveal-delay-2">
              <div
                className="relative aspect-[4/3] sm:aspect-[16/11] rounded-[28px] overflow-hidden border border-white/15 shadow-2xl shadow-black/50"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                aria-roledescription="carousel"
                aria-label="EagleSoft work highlights"
              >
                {slides.map((slide, i) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
                    aria-hidden={i !== index}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.badge}
                      fill
                      priority={i === 0}
                      sizes="(min-width: 1024px) 600px, 100vw"
                      className={`object-cover ${i === index ? "kenburns" : ""}`}
                    />
                  </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b1a]/90 via-[#0b0b1a]/10 to-transparent" aria-hidden="true" />

                {/* Caption, counter and dots */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex items-end justify-between gap-4">
                  <div className="min-w-0">
                    <div className="font-display text-2xl font-bold leading-none">
                      <span className="text-[#a78bfa]">{index + 1}</span>
                      <span className="text-white/80"> / {slides.length}</span>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-white truncate" aria-live="polite">
                      {current.badge}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      type="button"
                      onClick={() => go(index - 1)}
                      className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur transition-colors cursor-pointer"
                      aria-label="Previous slide"
                    >
                      <Icon name="arrow-left" className="w-3.5 h-3.5" />
                    </button>
                    <div className="hidden sm:flex items-center gap-1.5 px-1">
                      {slides.map((s, i) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => go(i)}
                          aria-label={`Show slide ${i + 1}`}
                          aria-current={i === index}
                          className={`h-2 rounded-full transition-all cursor-pointer ${
                            i === index ? "w-7 bg-[#a78bfa]" : "w-2 bg-white/50 hover:bg-white/80"
                          }`}
                        />
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => go(index + 1)}
                      className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur transition-colors cursor-pointer"
                      aria-label="Next slide"
                    >
                      <Icon name="arrow-right" className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-5 left-4 sm:-left-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-2xl shadow-black/30">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7c3aed] to-[#2563eb] text-white flex items-center justify-center">
                  <Icon name="shield" className="w-4 h-4" />
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-extrabold text-[#0f172a]">100% Code Ownership</span>
                  <span className="block text-xs text-[#64748b]">Source &amp; IP handed over</span>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Service cards overlapping the hero band */}
      <div className="relative z-10 -mt-14 sm:-mt-16">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {friendlyServicesData.slice(0, 6).map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group card card-hover p-4 sm:p-5 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.35)]"
              >
                <span className="flex items-center justify-between gap-2">
                  <span className="text-sm sm:text-[15px] font-bold text-[#0f172a] group-hover:text-[#6d28d9] transition-colors leading-snug">
                    {service.title}
                  </span>
                  <Icon name={service.icon} className="w-4 h-4 text-[#7c3aed] flex-shrink-0" />
                </span>
                <span className="mt-1.5 block text-xs text-[#64748b] leading-snug line-clamp-2">
                  {service.features[0]}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
