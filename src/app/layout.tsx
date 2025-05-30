import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ContentRightSidebar from "@/components/ContentRightSidebar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Datablit doc",
  description: "Datablit doc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className=" min-h-screen ">
        <div className="fixed top-0 left-0 right-0 z-60 h-16">
          <Header />
        </div>

        <div className="flex pt-20">
          <Sidebar />
          <main className="flex-1 px-12 overflow-y-auto h-[calc(100vh-4rem)] hide-scrollbar">
            {children}
          </main>
          <ContentRightSidebar />
        </div>
        <Footer />
      </body>
    </html>
  );
}
