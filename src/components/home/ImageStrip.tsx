import React from "react";
import Image from "next/image";
import { projectsData } from "@/src/config/projects";

/** Edge-to-edge scrolling strip of real project visuals. */
export function ImageStrip() {
  const images = projectsData
    .filter((p) => p.featureImage)
    .map((p) => ({ src: p.featureImage as string, alt: p.title }));
  const loop = [...images, ...images];

  return (
    <section className="bg-[#0b0b1a] overflow-hidden" aria-label="Project gallery">
      <div className="flex w-max animate-marquee">
        {loop.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="relative w-[260px] sm:w-[320px] h-[170px] sm:h-[200px] flex-shrink-0 border-r border-[#0b0b1a]"
            aria-hidden={i >= images.length}
          >
            <Image src={img.src} alt={i < images.length ? img.alt : ""} fill sizes="320px" className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
