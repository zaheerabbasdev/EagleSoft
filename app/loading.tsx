import React from "react";
import { Container } from "@/src/components/common/Container";

export default function Loading() {
  return (
    <div className="py-32 flex items-center justify-center bg-white min-h-[50vh]">
      <Container size="narrow" className="text-center">
        <div className="inline-block w-12 h-12 border-4 border-[#b3e5fc] border-t-[#0288d1] rounded-full animate-spin mb-4" />
        <p className="text-sm font-semibold uppercase tracking-wider text-[#0288d1]">
          Loading EagleSoft Platform...
        </p>
      </Container>
    </div>
  );
}
