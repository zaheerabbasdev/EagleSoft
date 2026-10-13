import React from "react";
import { Hero } from "@/src/components/home/Hero";
import { TrustMetrics } from "@/src/components/home/TrustMetrics";
import { CompanyIntro } from "@/src/components/home/CompanyIntro";
import { ServicesPreview } from "@/src/components/home/ServicesPreview";
import { TechStackShowcase } from "@/src/components/home/TechStackShowcase";
import { SolutionsPreview } from "@/src/components/home/SolutionsPreview";
import { WhyEagleSoft } from "@/src/components/home/WhyEagleSoft";
import { ProcessSection } from "@/src/components/home/ProcessSection";
import { ProjectsPreview } from "@/src/components/home/ProjectsPreview";
import { Testimonials } from "@/src/components/home/Testimonials";
import { TeamSection } from "@/src/components/home/TeamSection";
import { CtaSection } from "@/src/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMetrics />
      <CompanyIntro />
      <ServicesPreview />
      <TechStackShowcase />
      <SolutionsPreview />
      <WhyEagleSoft />
      <ProcessSection />
      <ProjectsPreview />
      <Testimonials />
      <TeamSection />
      <CtaSection />
    </>
  );
}
