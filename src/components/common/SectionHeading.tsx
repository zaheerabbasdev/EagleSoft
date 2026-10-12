import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  /**
   * Words shown in the brand gradient after the title.
   * Omit to highlight the title's last two words automatically; pass `false` for a plain title.
   */
  highlight?: string | false;
  description?: string;
  align?: "left" | "center";
  /** "light" for white/grey sections, "dark" for dark brand bands */
  variant?: "light" | "dark";
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
}

function splitTitle(title: string, highlight: string | false | undefined) {
  if (highlight === false) return { lead: title, accent: "" };
  if (typeof highlight === "string") return { lead: title, accent: highlight };
  const words = title.split(" ");
  if (words.length < 4) return { lead: title, accent: "" };
  return { lead: words.slice(0, -2).join(" "), accent: words.slice(-2).join(" ") };
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  variant = "light",
  className = "",
  titleAs = "h2",
}: SectionHeadingProps) {
  const TitleTag = titleAs;
  const isDark = variant === "dark";
  const { lead, accent } = splitTitle(title, highlight);

  const alignmentClasses =
    align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  const titleSize =
    titleAs === "h1"
      ? "text-4xl sm:text-5xl lg:text-[3.4rem]"
      : "text-3xl sm:text-4xl lg:text-[2.75rem]";

  return (
    <div className={`reveal flex flex-col max-w-3xl ${alignmentClasses} ${className}`}>
      {eyebrow && (
        <span className={`pill-label mb-5 ${isDark ? "pill-label-dark" : ""}`}>{eyebrow}</span>
      )}
      <TitleTag
        className={`${titleSize} font-extrabold tracking-tight leading-[1.1] text-balance ${
          isDark ? "text-white" : "text-[#0f172a]"
        }`}
      >
        {lead}
        {accent && (
          <>
            {" "}
            <span className={isDark ? "text-gradient-soft" : "text-gradient"}>{accent}</span>
          </>
        )}
      </TitleTag>
      {description && (
        <p
          className={`mt-5 text-base sm:text-lg leading-relaxed text-pretty ${
            isDark ? "text-white/75" : "text-[#64748b]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
