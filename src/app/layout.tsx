import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StructuredData } from "@/components/ui/StructuredData";
import { BUSINESS_NAME, BUSINESS_TAGLINE } from "@/lib/design-tokens";

const inter = Inter({
  subsets:  ["latin"],
  variable: "--font-inter",
  display:  "swap",
});

const oswald = Oswald({
  subsets:  ["latin"],
  variable: "--font-oswald",
  display:  "swap",
  weight:   ["400", "500", "600", "700"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dallasstormdamage.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default:  `${BUSINESS_NAME} | ${BUSINESS_TAGLINE}`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description:
    "Fast local help after hail, wind, and roof leaks in Dallas–Fort Worth. We help homeowners document storm damage and connect with vetted local specialists.",
  openGraph: {
    type:        "website",
    locale:      "en_US",
    url:         baseUrl,
    siteName:    BUSINESS_NAME,
    title:       `${BUSINESS_NAME} | ${BUSINESS_TAGLINE}`,
    description: "Fast local help after hail, wind, and roof leaks in Dallas–Fort Worth.",
  },
  twitter: {
    card:        "summary_large_image",
    title:       `${BUSINESS_NAME} | ${BUSINESS_TAGLINE}`,
    description: "Fast local help after hail, wind, and roof leaks in Dallas–Fort Worth.",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? "",
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-storm-dark">
        <StructuredData />
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1 pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
