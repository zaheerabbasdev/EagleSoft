import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/src/config/site";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions of service for EagleSoft Pvt Ltd.",
};

export default function TermsPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <Container size="narrow">
        <SectionHeading
          eyebrow="Legal Agreement"
          title="Terms & Conditions"
          description={`Last updated: January 2026 • ${siteConfig.legalName}`}
          align="left"
          className="mb-12"
        />

        <div className="prose max-w-none text-sm sm:text-base text-gray-700 space-y-8 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#212121]">1. Agreement to Terms</h2>
            <p>
              By accessing or using the website of {siteConfig.legalName} ("EagleSoft", "we", "us"), you agree to be bound by these Terms and Conditions. If you do not agree with any portion of these terms, you should refrain from using this website or requesting online services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#212121]">2. Scope of Online Services</h2>
            <p>
              This website serves as an informational portal and initial scoping platform for our custom software engineering, web application, mobile development, and systems consulting services. The submission of an inquiry or quotation request does not constitute a binding development contract until a formalized Statement of Work (SOW) or Service Agreement is mutually executed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#212121]">3. Intellectual Property Rights</h2>
            <p>
              All website content, trademarks, branding, logos, graphic compositions, and documentation published on this website are the proprietary property of {siteConfig.legalName} and protected by applicable copyright and trademark laws.
            </p>
            <p>
              For commercial software projects delivered to clients: Intellectual property ownership, source code transfer terms, and licensing provisions are governed specifically by the executed Master Services Agreement (MSA) accompanying each individual client engagement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#212121]">4. Quotation and Proposal Accuracy</h2>
            <p>
              Cost estimates, architectural recommendations, and delivery timelines generated through initial web quotations are indicative and subject to formal technical scoping and requirement validation before contractual agreement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#212121]">5. Limitation of Liability</h2>
            <p>
              In no event shall EagleSoft Pvt Ltd, its directors, or engineering staff be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use this informational web platform.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#212121]">6. Governing Law</h2>
            <p>
              These Terms shall be construed and governed in accordance with the laws of Pakistan, without regard to its conflict of law principles. Any legal disputes shall be subject to the exclusive jurisdiction of the courts located in Islamabad, Pakistan.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#212121]">7. Contact Information</h2>
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 text-xs sm:text-sm space-y-1">
              <div><strong>Company:</strong> {siteConfig.legalName}</div>
              <div><strong>Email:</strong> {siteConfig.email}</div>
              <div><strong>Address:</strong> {siteConfig.address.full}</div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
