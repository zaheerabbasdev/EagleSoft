import React from "react";
import Image from "next/image";
import { projectsData } from "@/src/config/projects";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Icon } from "@/src/components/common/Icon";
import { Button } from "@/src/components/common/Button";

export function ProjectsPreview() {
  const featured = projectsData.filter((p) => p.status === "Live").slice(0, 3);

  return (
    <section className="py-20 sm:py-28 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Our Work"
          title="Projects We've Built"
          highlight="& Delivered"
          description="Real websites and mobile apps we've designed, built, and shipped for clients."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <article
              key={project.id}
              className={`reveal reveal-delay-${i + 1} group card card-hover overflow-hidden flex flex-col`}
            >
              <div className="relative aspect-[16/10] bg-[#f6f5fb] overflow-hidden">
                {project.featureImage && (
                  <Image
                    src={project.featureImage}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  {i === 0 && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-[#7c3aed] shadow">
                      Featured
                    </span>
                  )}
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-[#0f172a] bg-white shadow">
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  {project.appIcon && (
                    <Image
                      src={project.appIcon}
                      alt=""
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain rounded-xl"
                    />
                  )}
                  <h3 className="text-xl font-bold text-[#0f172a]">{project.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tag-pill">{project.category}</span>
                  <span className="tag-pill">{project.status === "Live" ? "Live in production" : "In progress"}</span>
                </div>
                <p className="text-sm text-[#64748b] leading-relaxed mb-6 flex-1">{project.description}</p>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#6d28d9] hover:text-[#4c1d95]"
                  >
                    {project.category === "Android App" ? "View on Play Store" : "Visit Live Site"}
                    <Icon name="arrow-right" className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/projects" variant="secondary" size="md" icon={<Icon name="arrow-right" className="w-3.5 h-3.5" />}>
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
