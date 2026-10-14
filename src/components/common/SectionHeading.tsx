import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  /**
   * Words shown in the blue gradient after the title.
   * Omit to highlight the last word automatically; pass `false` for a plain title.
   */
  highlight?: string | false;
  description?: string;
  align?: "left" | "center";
  /** "light" for white sections, "dark" for navy bands */
  variant?: "light" | "dark";
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
}

function splitTitle(title: string, highlight: string | false | undefined) {
  if (highlight === false) return { lead: title, accent: "" };
  if (typeof highlight === "string") return { lead: title, accent: highlight };
  const words = title.trim().split(" ");
  if (words.length < 2) return { lead: title, accent: "" };
  const take = words.length >= 5 ? 2 : 1;
  return { lead: words.slice(0, -take).join(" "), accent: words.slice(-take).join(" ") };
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
  const centered = align === "center";

  const size =
    titleAs === "h1" ? "text-4xl sm:text-5xl lg:text-[3.5rem]" : "text-3xl sm:text-4xl lg:text-[2.8rem]";

  return (
    <div
      className={`flex flex-col max-w-3xl ${centered ? "text-center items-center mx-auto" : "text-left items-start"} ${className}`}
    >
      {eyebrow && <span className="eyebrow-line mb-4">{eyebrow}</span>}
      <TitleTag
        className={`${size} font-extrabold tracking-tight leading-[1.12] text-balance ${isDark ? "text-white" : "text-[#0b1220]"}`}
      >
        {lead}
        {accent && (
          <>
            {" "}
            <span className="text-blue-grad">{accent}</span>
          </>
        )}
      </TitleTag>
      {description && (
        <p
          className={`mt-4 text-base sm:text-[17px] leading-relaxed text-pretty ${centered ? "" : "max-w-2xl"} ${
            isDark ? "text-white/70" : "text-[#526072]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
