"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

export interface QuotePrefill {
  fullName?: string;
  email?: string;
  description?: string;
}

interface QuoteModalContextType {
  isOpen: boolean;
  selectedService: string;
  prefill: QuotePrefill;
  /** Increments on every open so consumers can react to a fresh open */
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

  const closeQuoteModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Lock page scroll while the dialog is open, without shifting the layout
  useEffect(() => {
    if (!isOpen) return;
    const { overflow, paddingRight } = document.body.style;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
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
