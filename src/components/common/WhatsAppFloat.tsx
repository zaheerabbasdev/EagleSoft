import React from "react";
import { siteConfig } from "@/src/config/site";
import { Icon } from "./Icon";

export const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  "Hi EagleSoft, I'd like to discuss a software project."
)}`;

/** Floating WhatsApp chat button, fixed to the bottom-right corner. */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with EagleSoft on WhatsApp (opens in a new tab)"
      className="pulse-ring-green fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 w-14 h-14 rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-xl shadow-black/20 hover:scale-105 transition-transform"
    >
      <Icon name="whatsapp" className="text-[28px]" />
    </a>
  );
}
