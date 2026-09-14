import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "light" | "dark"; // "dark" = for #0288d1 dark backgrounds
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  variant = "light",
  className = "",
  titleAs = "h2",
}: SectionHeadingProps) {
  const isDark = variant === "dark";
  const TitleTag = titleAs;

  const alignmentClasses =
    align === "center"
      ? "text-center items-center mx-auto"
      : "text-left items-start";

  const eyebrowClasses = isDark
    ? "bg-white/15 text-white border-white/20"
    : "bg-[#b3e5fc]/60 text-[#0288d1] border-[#b3e5fc]";

  const titleClasses = isDark ? "text-white" : "text-[#212121]";
  const descClasses = isDark ? "text-white/85" : "text-[#475569]";

  return (
    <div className={`flex flex-col max-w-3xl ${alignmentClasses} ${className}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center px-3 py-1 mb-3.5 text-xs font-semibold uppercase tracking-wider rounded-full border ${eyebrowClasses}`}
        >
          {eyebrow}
        </span>
      )}
      <TitleTag
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${titleClasses}`}
      >
        {title}
      </TitleTag>
      {description && (
        <p className={`mt-3.5 text-base sm:text-lg font-normal leading-relaxed ${descClasses}`}>
          {description}
        </p>
      )}
    </div>
  );
}
