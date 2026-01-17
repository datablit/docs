import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ui-components/ThemeProvider";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://docs.datablit.com"),
  title: {
    template: "%s | Datablit Documentation",
    default: "Datablit Documentation",
  },
  description:
    "Complete developer documentation, API reference, and integration guides for Datablit. Learn how to integrate event tracking, set up data sources, create rules and signals, and run experiments.",
  keywords: [
    "Datablit",
    "documentation",
    "API reference",
    "developer guide",
    "event tracking",
    "data ingestion",
    "customer data platform",
    "CDP",
  ],
  authors: [{ name: "Datablit" }],
  creator: "Datablit",
  publisher: "Datablit",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://docs.datablit.com",
    siteName: "Datablit Documentation",
    title: "Datablit Documentation",
    description:
      "Complete developer documentation, API reference, and integration guides for Datablit. Learn how to integrate event tracking, set up data sources, create rules and signals, and run experiments.",
    images: [
      {
        url: "/icon.svg",
        width: 1200,
        height: 630,
        alt: "Datablit Documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Datablit Documentation",
    description:
      "Complete developer documentation, API reference, and integration guides for Datablit.",
    images: ["/icon.svg"],
    creator: "@Datablit_cdp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://docs.datablit.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Datablit Documentation",
    url: "https://docs.datablit.com",
    description:
      "Complete developer documentation, API reference, and integration guides for Datablit.",
    publisher: {
      "@type": "Organization",
      name: "Datablit",
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="h-screen overflow-x-hidden">
        <StructuredData data={websiteSchema} />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
