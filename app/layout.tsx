import type { Metadata } from "next";
import { Sora, Outfit } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Julius Kevin Alejandro — Web Designer & Developer",
  description:
    "Portfolio of Julius Kevin Alejandro — Shopify Developer, Web Designer, Multimedia Editor, and AI Tools Expert based in Iloilo City, Philippines.",
  openGraph: {
    title: "Julius Kevin Alejandro — Web Designer & Developer",
    description:
      "Shopify Developer at ADA | Web Designer | Multimedia Editor | AI Tools Expert",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${outfit.variable} antialiased`}>
      <body className="min-h-[100dvh]">{children}</body>
    </html>
  );
}
