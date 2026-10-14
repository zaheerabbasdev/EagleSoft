"use client";

import React, { useEffect, useState } from "react";
import { Icon } from "./Icon";

/** Bottom-right button that appears after scrolling and returns to the top of the page. */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-5 sm:right-7 z-40 w-12 h-12 rounded-xl bg-blue-grad text-white flex items-center justify-center shadow-lg shadow-[#0288d1]/35 hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Icon name="arrow-up" className="w-4 h-4" />
    </button>
  );
}
