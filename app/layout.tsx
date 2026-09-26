import type { Metadata } from "next";
import "@/src/lib/fontawesome";
import "./globals.css";
import { siteConfig } from "@/src/config/site";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { QuoteModalProvider } from "@/src/context/QuoteModalContext";
import { QuoteModal } from "@/src/components/common/QuoteModal";

export const metadata: Metadata = {
  metadataBase: new URL("https://eaglesoft.pk"),
  title: {
    default: "EagleSoft Pvt Ltd | Software & Digital Solutions",
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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans bg-white text-[#212121]">
        <QuoteModalProvider>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <QuoteModal />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
