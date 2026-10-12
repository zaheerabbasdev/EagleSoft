"use client";

import { useEffect } from "react";

/**
 * Adds the `visible` class to `.reveal` elements as they scroll into view.
 * A MutationObserver picks up elements rendered later (client-side route
 * changes, tab switches), so content never stays hidden after navigation.
 */
export function ScrollRevealInit() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reveal = (el: Element) => el.classList.add("visible");

    if (reduceMotion || !("IntersectionObserver" in window)) {
      const showAll = () => document.querySelectorAll(".reveal:not(.visible)").forEach(reveal);
      showAll();
      const mo = new MutationObserver(showAll);
      mo.observe(document.body, { childList: true, subtree: true });
      return () => mo.disconnect();
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const observeAll = () => {
      document.querySelectorAll(".reveal:not(.visible)").forEach((el) => io.observe(el));
    };

    observeAll();

    let frame = 0;
    const mo = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(observeAll);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      mo.disconnect();
      io.disconnect();
    };
  }, []);

  return null;
}
