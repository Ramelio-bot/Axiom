import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Axiom - Professional Forex & Gold Risk Management",
  description: "High-Precision Trading Intelligence. Professional position sizing and risk management terminal.",
};

import Sidebar from "@/components/Sidebar";
import PriceBar from "@/components/PriceBar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground min-h-full flex h-screen overflow-hidden`}
      >
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto custom-scrollbar">
          <PriceBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}


