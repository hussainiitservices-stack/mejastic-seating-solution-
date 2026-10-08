import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: {
    default: "Majestic Seating Solutions — Furniture Manufacturer in Bhiwandi, Thane",
    template: "%s — Majestic Seating Solutions",
  },
  description:
    "Majestic Seating Solutions manufactures dining chairs, lounge chairs, bar stools, puffy and benches in wood, stainless steel, fabric and rexine. Workshop in Bhiwandi, Thane.",
  icons: { icon: "/images/logo.jpg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${cormorant.variable}`} data-scroll-behavior="smooth">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
