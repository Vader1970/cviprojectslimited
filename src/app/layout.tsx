import type { Metadata } from "next";
import { inter, playfair } from "../fonts";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import dynamic from "next/dynamic";

// Dynamically import Footer with no SSR since it's below the fold
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <footer className='bg-primary h-[200px]' />, // Simple loading placeholder
});

export const metadata: Metadata = {
  title: "CVI Projects Limited",
  description:
    "Share market investor and founder of Chance Voight Investment Corporation, Bernard Whimp is redefining the financial landscape with building New Zealand's ASX Hedge Fund",
  keywords:
    "Experienced Investor, Investment Opportunities, Investment Seminar, Wealth Management, Investment, Stocks, Shares, Share Market, Entrepreneur, Chance Voight Investment Partners",
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <div className='min-h-screen flex flex-col'>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
