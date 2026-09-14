"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Container } from "@/src/components/common/Container";
import { Button } from "@/src/components/common/Button";
import { Icon } from "@/src/components/common/Icon";
import { useQuoteModal } from "@/src/context/QuoteModalContext";
import { heroBackgroundSlidesData } from "@/src/config/home";

export function Hero() {
  const { openQuoteModal } = useQuoteModal();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = heroBackgroundSlidesData.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-advance slide every 6 seconds when not paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const currentSlide = heroBackgroundSlidesData[currentIndex];

  return (
    <section
      className="relative overflow-hidden bg-slate-950 min-h-[580px] lg:min-h-[660px] flex flex-col justify-between"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="EagleSoft Corporate Showcase"
    >
      {/* Background Images Carousel with Smooth Cross-Fade */}
      <div className="absolute inset-0 z-0">
        {heroBackgroundSlidesData.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
              }`}
              style={{ transitionProperty: "opacity, transform" }}
            >
              <Image
                src={slide.image}
                alt={slide.badge}
                fill
                priority={index === 0}
                className="object-cover object-center brightness-[0.85]"
              />
            </div>
          );
        })}

        {/* High-Contrast Gradient Dark Overlay (Ensures text is 100% readable) */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/60"
          aria-hidden="true"
        />
        {/* Subtle Ambient Vignette */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40"
          aria-hidden="true"
        />
      </div>

      {/* Hero Foreground Content Upon the Background */}
      <div className="relative z-10 pt-20 sm:pt-28 pb-14 flex-1 flex flex-col justify-center">
        <Container>
          <div className="max-w-3xl text-left">
            {/* Slide Badge with Live Pulsing Dot */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0288d1]/30 border border-[#03a9f4]/50 text-[#b3e5fc] text-xs font-extrabold tracking-wider uppercase mb-6 backdrop-blur-md shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#03a9f4] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#03a9f4]"></span>
              </span>
              <span>{currentSlide.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-6 drop-shadow-md">
              {currentSlide.titleLine1} <br />
              <span className="text-[#03a9f4]">{currentSlide.titleHighlight}</span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-2xl mb-10 drop-shadow-sm font-normal">
              {currentSlide.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={() => openQuoteModal(currentSlide.titleHighlight)}
                icon={<Icon name="arrow-right" className="w-4 h-4" />}
                className="shadow-lg hover:shadow-cyan-500/25 px-8 py-3.5 text-base font-bold bg-[#03a9f4] hover:bg-[#0288d1]"
              >
                {currentSlide.primaryCtaText}
              </Button>
              <Button
                href={currentSlide.secondaryCtaHref}
                variant="outline-white"
                size="lg"
                icon={<Icon name="laptop-code" className="w-4 h-4 text-[#b3e5fc]" />}
                iconPosition="left"
                className="bg-white/10 backdrop-blur-md border-white/40 hover:bg-white/20 px-8 py-3.5 text-base"
              >
                {currentSlide.secondaryCtaText}
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Dots Carousel Navigation Bar */}
      <div className="relative z-10 pb-8 sm:pb-12">
        <Container>
          <div className="flex items-center justify-between border-t border-white/15 pt-6">
            {/* Left/Right Arrow Navigation */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03a9f4] cursor-pointer"
                aria-label="Previous slide"
              >
                <Icon name="arrow-left" className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03a9f4] cursor-pointer"
                aria-label="Next slide"
              >
                <Icon name="arrow-right" className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Clickable Dots Carousel Indicators */}
            <div className="flex items-center gap-3">
              {heroBackgroundSlidesData.map((slide, index) => {
                const isActive = index === currentIndex;
                return (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`transition-all duration-300 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03a9f4] ${
                      isActive
                        ? "w-8 h-2.5 bg-[#03a9f4] shadow-[0_0_12px_rgba(3,169,244,0.8)]"
                        : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${index + 1}: ${slide.badge}`}
                  />
                );
              })}
            </div>

            {/* Slide Counter */}
            <div className="text-xs font-mono text-slate-400 font-semibold">
              0{currentIndex + 1} / 0{totalSlides}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
