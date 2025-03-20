import type { Metadata } from "next";
import { inter, playfair } from "../fonts";
import "./globals.css";
import { Navbar2 } from "@/components/Navbar2";
// import { Footer } from "@/components/Footer";

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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar2 />
          <main>{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
