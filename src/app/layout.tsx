import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import MagicDust from "@/components/MagicDust";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Kaye Gualingco | Shopify & Web Developer",
  description:
    "Shopify & Web Developer specializing in responsive websites, theme customization with Liquid, and e-commerce solutions.",
  openGraph: {
    title: "Kaye Gualingco | Shopify & Web Developer",
    description:
      "Building clean, responsive websites and customized Shopify stores.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-background text-foreground antialiased">
        <MagicDust />
        {children}
      </body>
    </html>
  );
}
