"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

export interface QuotePrefill {
  fullName?: string;
  email?: string;
  phone?: string;
  description?: string;
}

interface QuoteModalContextType {
  isOpen: boolean;
  selectedService: string;
  prefill: QuotePrefill;
  /** Increments on every open so the modal can apply fresh prefill data */
  openId: number;
  openQuoteModal: (service?: string, prefill?: QuotePrefill) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [prefill, setPrefill] = useState<QuotePrefill>({});
  const [openId, setOpenId] = useState(0);

  const openQuoteModal = useCallback((service?: string, data?: QuotePrefill) => {
    setSelectedService(service || "");
    setPrefill(data || {});
    setOpenId((n) => n + 1);
    setIsOpen(true);
  }, []);

  const closeQuoteModal = useCallback(() => setIsOpen(false), []);

  // Lock page scroll while the modal is open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <QuoteModalContext.Provider
      value={{ isOpen, selectedService, prefill, openId, openQuoteModal, closeQuoteModal }}
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
