import React from "react";
import { siteConfig } from "@/src/config/site";
import { Icon } from "./Icon";

export const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  "Hi EagleSoft, I'd like to discuss a software project."
)}`;

/** Floating "Chat with us" WhatsApp button, bottom-left like the reference layout. */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with EagleSoft on WhatsApp (opens in a new tab)"
      className="group fixed bottom-5 left-5 z-40 flex items-center gap-2.5"
    >
      <span className="wa-pulse w-14 h-14 rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-xl shadow-black/20 group-hover:scale-105 transition-transform">
        <Icon name="whatsapp" className="text-[28px]" />
      </span>
      <span className="hidden sm:inline-block px-3 py-1.5 rounded-lg bg-[#0a1628] text-white text-xs font-bold shadow-lg">
        Chat with us
      </span>
    </a>
  );
}
