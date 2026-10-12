import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Rajdhani } from "next/font/google";
import "@/src/lib/fontawesome";
import "./globals.css";
import { siteConfig } from "@/src/config/site";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { QuoteModalProvider } from "@/src/context/QuoteModalContext";
import { QuoteModal } from "@/src/components/common/QuoteModal";
import { ScrollRevealInit } from "@/src/components/common/ScrollRevealInit";
import { WhatsAppFloat } from "@/src/components/common/WhatsAppFloat";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-rajdhani",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://eaglesoft.pk"),
  title: {
    default: "EagleSoft Pvt Ltd",
    template: "%s | EagleSoft Pvt Ltd",
  },
  description: siteConfig.description,
  keywords: [
    "EagleSoft",
    "EagleSoft Pvt Ltd",
    "software company Pakistan",
    "web development",
    "mobile app development",
    "custom software",
    "POS systems",
    "inventory management",
    "e-commerce solutions",
    "Islamabad software house",
  ],
  authors: [{ name: "EagleSoft Pvt Ltd" }],
  creator: "EagleSoft Pvt Ltd",
  publisher: "EagleSoft Pvt Ltd",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.legalName,
    title: "EagleSoft Pvt Ltd | Software & Digital Solutions",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "EagleSoft Pvt Ltd | Software & Digital Solutions",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full antialiased ${jakarta.variable} ${rajdhani.variable}`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-[#475569]">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <QuoteModalProvider>
          <ScrollRevealInit />
          <Navbar />
          <main id="main-content" tabIndex={-1} className="flex-1 w-full outline-none">{children}</main>
          <Footer />
          <QuoteModal />
          <WhatsAppFloat />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
