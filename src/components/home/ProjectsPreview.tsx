"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/src/config/projects";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Icon } from "@/src/components/common/Icon";
import { useQuoteModal } from "@/src/context/QuoteModalContext";

export function ProjectsPreview() {
  const { openQuoteModal } = useQuoteModal();
  const featured = projectsData.filter((p) => p.status === "Live").slice(0, 6);

  return (
    <section className="py-20 sm:py-24 section-tint">
      <Container>
        <SectionHeading
          eyebrow="Our Work"
          title="Our"
          highlight="Work"
          description="Real websites and mobile apps we have designed, built and shipped for clients."
          align="left"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <article key={project.id} className="group agency-card flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#eff8ff]">
                {project.featureImage && (
                  <Image
                    src={project.featureImage}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white text-[11px] font-bold uppercase tracking-wider text-[#0288d1] shadow">
                  {project.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3">
                  {project.appIcon && (
                    <Image src={project.appIcon} alt="" width={36} height={36} className="w-9 h-9 object-contain rounded-lg" />
                  )}
                  <h3 className="text-lg font-bold text-[#0b1220]">{project.title}</h3>
                </div>
                <p className="mt-3 text-sm text-[#526072] leading-relaxed line-clamp-3 flex-1">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="chip">{project.category}</span>
                  <span className="chip">Live</span>
                </div>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => openQuoteModal(undefined, { description: `I'd like a project similar to ${project.title}.` })}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0288d1] hover:text-[#0277bd] cursor-pointer"
                  >
                    Start a Similar Project
                    <Icon name="arrow-right" className="w-3 h-3" />
                  </button>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#526072] hover:text-[#0288d1]"
                    >
                      {project.category === "Android App" ? "Play Store" : "Live site"}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-grad text-white text-sm font-bold shadow-lg shadow-[#0288d1]/30 hover:-translate-y-0.5 transition-transform"
          >
            See All Projects
            <Icon name="arrow-right" className="w-3.5 h-3.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
