import React from "react";
import Link from "next/link";
import { Container } from "@/src/components/common/Container";
import { Button } from "@/src/components/common/Button";
import { Icon } from "@/src/components/common/Icon";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32 flex items-center justify-center bg-white min-h-[60vh]">
      <Container size="narrow" className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#b3e5fc]/40 text-[#0288d1] mb-6">
          <Icon name="question" className="w-10 h-10" />
        </div>
        <span className="block text-sm font-bold uppercase tracking-wider text-[#0288d1] mb-2">
          Error 404
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#212121] tracking-tight mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-md mx-auto mb-8 leading-relaxed">
          The requested page could not be located on the EagleSoft website. It may have been relocated or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="primary" icon={<Icon name="arrow-right" className="w-3.5 h-3.5" />}>
            Return to Homepage
          </Button>
          <Button href="/contact" variant="secondary">
            Contact Support
          </Button>
        </div>
      </Container>
    </div>
  );
}
