import React from "react";
import { Container } from "@/src/components/common/Container";

export default function Loading() {
  return (
    <div className="py-32 flex items-center justify-center page-hero min-h-[50vh]">
      <Container size="narrow" className="text-center">
        <div className="inline-block w-12 h-12 border-4 border-[#7c3aed]/20 border-t-[#7c3aed] rounded-full animate-spin mb-4" />
        <p className="text-sm font-semibold uppercase tracking-wider text-[#6d28d9]">
          Loading EagleSoft Platform...
        </p>
      </Container>
    </div>
  );
}
