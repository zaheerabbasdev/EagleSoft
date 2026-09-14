import React from "react";
import { Hero } from "@/src/components/home/Hero";
import { CompanyIntro } from "@/src/components/home/CompanyIntro";
import { ServicesPreview } from "@/src/components/home/ServicesPreview";
import { SolutionsPreview } from "@/src/components/home/SolutionsPreview";
import { WhyEagleSoft } from "@/src/components/home/WhyEagleSoft";
import { ProcessSection } from "@/src/components/home/ProcessSection";
import { ProjectsPreview } from "@/src/components/home/ProjectsPreview";
import { CtaSection } from "@/src/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <ServicesPreview />
      <SolutionsPreview />
      <WhyEagleSoft />
      <ProcessSection />
      <ProjectsPreview />
      <CtaSection />
    </>
  );
}
