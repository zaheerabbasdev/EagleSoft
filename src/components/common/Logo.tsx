import Link from "next/link";
import React from "react";

interface LogoProps {
  variant?: "light" | "dark"; // "light" = for white/light bg; "dark" = for #0288d1/dark bg
  className?: string;
  showTagline?: boolean;
  asLink?: boolean;
}

export function Logo({
  variant = "light",
  className = "",
  showTagline = false,
  asLink = true,
}: LogoProps) {
  const isDarkBg = variant === "dark";

  const primaryWingColor = isDarkBg ? "#FFFFFF" : "#0288d1";
  const secondaryWingColor = isDarkBg ? "#b3e5fc" : "#03a9f4";
  const accentEyeColor = isDarkBg ? "#FFFFFF" : "#448aff";
  const textColor = isDarkBg ? "text-white" : "text-[#212121]";
  const softTextColor = isDarkBg ? "text-[#b3e5fc]" : "text-[#0288d1]";

  const content = (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision Geometric Eagle Symbol */}
      <div className="relative flex-shrink-0 w-10 h-10 flex items-center justify-center">
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm transition-transform duration-300 hover:scale-105"
          aria-hidden="true"
        >
          {/* Outer faceted wing primary */}
          <path
            d="M4 14L22 4L16 20L4 14Z"
            fill={primaryWingColor}
            fillOpacity="0.9"
          />
          {/* Inner forward wing */}
          <path
            d="M22 4L40 14L28 20L22 4Z"
            fill={secondaryWingColor}
          />
          {/* Dynamic eagle beak / forward crest */}
          <path
            d="M16 20L22 4L28 20L22 36L16 20Z"
            fill={primaryWingColor}
          />
          {/* Lower aerodynamic tail feathers */}
          <path
            d="M18 30L22 40L26 30L22 33L18 30Z"
            fill={secondaryWingColor}
          />
          {/* Tech focal center core */}
          <circle cx="22" cy="18" r="2.5" fill={accentEyeColor} />
        </svg>
      </div>

      {/* Typography Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span className={`text-xl sm:text-2xl font-extrabold tracking-tight ${textColor}`}>
            Eagle
          </span>
          <span className={`text-xl sm:text-2xl font-bold ${softTextColor}`}>
            Soft
          </span>
          <span
            className={`ml-1.5 text-[9px] font-semibold tracking-wider px-1 py-0.5 rounded uppercase ${
              isDarkBg
                ? "bg-white/20 text-white"
                : "bg-[#b3e5fc]/60 text-[#0288d1]"
            }`}
          >
            Pvt Ltd
          </span>
        </div>
        {showTagline && (
          <span
            className={`text-[11px] font-medium tracking-wide uppercase ${
              isDarkBg ? "text-white/80" : "text-gray-500"
            }`}
          >
            Software & Technology
          </span>
        )}
      </div>
    </div>
  );

  if (asLink) {
    return (
      <Link
        href="/"
        className="inline-block focus-visible:ring-2 focus-visible:ring-[#03a9f4] rounded-md transition-opacity hover:opacity-95"
        aria-label="EagleSoft Pvt Ltd Home"
      >
        {content}
      </Link>
    );
  }

  return content;
}
