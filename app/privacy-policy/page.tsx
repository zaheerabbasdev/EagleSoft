import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/src/config/site";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy and data governance practices of EagleSoft Pvt Ltd.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <Container size="narrow">
        <SectionHeading
          eyebrow="Corporate Governance"
          title="Privacy Policy"
          description={`Last updated: January 2026 • ${siteConfig.legalName}`}
          align="left"
          className="mb-12"
        />

        <div className="prose max-w-none text-sm sm:text-base text-gray-700 space-y-8 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#212121]">1. Introduction</h2>
            <p>
              {siteConfig.legalName} ("EagleSoft", "we", "us", or "our") respects the privacy of our website visitors, clients, and corporate partners. This Privacy Policy details how we collect, process, maintain, and safeguard personal and institutional data when you interact with our website, request project quotations, or engage our software development services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#212121]">2. Information We Collect</h2>
            <p>We may collect information in the following operational contexts:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
              <li>
                <strong>Inquiry & Quotation Data:</strong> Contact details including your name, business email address, phone number, company name, project specifications, and estimated budgets provided voluntarily through our forms.
              </li>
              <li>
                <strong>Technical Access Data:</strong> Non-personally identifiable log information including IP addresses, browser types, operating systems, and page navigation statistics gathered automatically for system diagnostic purposes.
              </li>
              <li>
                <strong>Recruitment Inquiries:</strong> Professional credentials, resumes, employment history, and portfolios submitted to our talent pool.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#212121]">3. Purpose of Processing</h2>
            <p>EagleSoft utilizes gathered information exclusively for lawful corporate activities:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
              <li>Preparing accurate technical scoping, architectural proposals, and cost estimates.</li>
              <li>Communicating regarding software deliverables, project milestones, and contract fulfillment.</li>
              <li>Maintaining system security, investigating malicious access attempts, and ensuring server uptime.</li>
              <li>Evaluating prospective engineering applicants for potential employment opportunities.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#212121]">4. Client Data & Confidentiality</h2>
            <p>
              During software engineering engagements, EagleSoft frequently handles proprietary operational workflows, database models, and commercial architectures. We treat all client business specifications as strictly confidential under formal Non-Disclosure Agreements (NDAs). We never monetize, sell, or disclose proprietary client information to external third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#212121]">5. Data Security Standards</h2>
            <p>
              We implement industry-standard administrative, physical, and technological controls to prevent unauthorized access, disclosure, alteration, or destruction of stored records. All transmissions across our platform utilize TLS 1.3 encryption protocols.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#212121]">6. Inquiries and Contact</h2>
            <p>
              For any questions regarding this policy or data retained by our systems, please contact our administrative office at:
            </p>
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
