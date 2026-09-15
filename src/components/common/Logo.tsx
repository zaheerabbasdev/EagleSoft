import Link from "next/link";
import Image from "next/image";
import React from "react";
import eagleIcon from "@/public/images/eaglesoft-icon.png";
import eagleIconWhite from "@/public/images/eaglesoft-icon-white.png";
import eagleWordmark from "@/public/images/eaglesoft-wordmark.png";
import eagleWordmarkWhite from "@/public/images/eaglesoft-wordmark-white.png";

interface LogoProps {
  variant?: "light" | "dark"; // "light" = for white/light bg; "dark" = for #0288d1/dark bg
  size?: "sm" | "md" | "lg";
  className?: string;
  showTagline?: boolean;
  asLink?: boolean;
}

const sizeClasses = {
  sm: { icon: "h-8 sm:h-9", wordmark: "h-4 sm:h-[18px]" },
  md: { icon: "h-9 sm:h-10", wordmark: "h-[18px] sm:h-5" },
  lg: { icon: "h-12 sm:h-14", wordmark: "h-6 sm:h-7" },
};

export function Logo({
  variant = "light",
  size = "md",
  className = "",
  showTagline = false,
  asLink = true,
}: LogoProps) {
  const isDarkBg = variant === "dark";
  const iconSrc = isDarkBg ? eagleIconWhite : eagleIcon;
  const wordmarkSrc = isDarkBg ? eagleWordmarkWhite : eagleWordmark;
  const dims = sizeClasses[size];

  const content = (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      <Image
        src={iconSrc}
        alt=""
        aria-hidden="true"
        priority
        className={`w-auto flex-shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-105 ${dims.icon}`}
      />
      <div className="flex flex-col justify-center gap-1">
        <Image
          src={wordmarkSrc}
          alt="EagleSoft"
          priority
          className={`w-auto ${dims.wordmark}`}
        />
        {showTagline && (
          <span
            className={`text-[10px] font-semibold tracking-wide uppercase ${
              isDarkBg ? "text-white/75" : "text-slate-500"
            }`}
          >
            Software &amp; Technology
          </span>
        )}
      </div>
    </div>
  );

  if (asLink) {
    return (
      <Link
        href="/"
        className="group inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03a9f4] rounded-md transition-opacity hover:opacity-95"
        aria-label="EagleSoft Pvt Ltd Home"
      >
        {content}
      </Link>
    );
  }

  return content;
}
