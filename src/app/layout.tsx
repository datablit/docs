import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
      <body>{children}</body>
      {/* <body className="h-screen grid grid-rows-[4rem_calc(100vh-4rem)]">
        <div className="">
          <Header />
        </div>

        <div className="flex">
          <Sidebar />
          <main className="flex-1 px-12 overflow-y-auto hide-scrollbar">
            {children}
          </main>
          <ContentRightSidebar />
        </div>
        <Footer />
      </body> */}
    </html>
  );
}
