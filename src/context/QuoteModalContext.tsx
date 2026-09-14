"use client";

import React, { createContext, useContext, useState } from "react";

interface QuoteModalContextType {
  isOpen: boolean;
  selectedService: string;
  openQuoteModal: (service?: string) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openQuoteModal = (service?: string) => {
    setSelectedService(service || "");
    setIsOpen(true);
    // Prevent body scroll when modal is open
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <QuoteModalContext.Provider
      value={{ isOpen, selectedService, openQuoteModal, closeQuoteModal }}
    >
      {children}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return context;
}
