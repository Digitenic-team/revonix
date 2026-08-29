import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import neueMontreal from "../app/fonts/neue-montreal";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
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
  metadataBase: new URL("https://revonix.co"),
  title: "Revonix - AI Solutions for Business Growth",
  description:
    "Transform your business with AI. From exploration to implementation, we help you automate workflows and scale with custom AI systems tailored to your needs.",
  keywords: [
    "AI solutions",
    "business automation",
    "AI implementation",
    "workflow automation",
    "AI consulting",
  ],
  authors: [{ name: "Revonix" }],
  openGraph: {
    title: "Revonix - AI Solutions for Business Growth",
    description:
      "Transform your business with AI. From exploration to implementation, we help you automate workflows and scale with custom AI systems.",
    type: "website",
    locale: "en_US",
    url: "https://revonix.co",
    siteName: "Revonix",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revonix - AI Solutions for Business Growth",
    description:
      "Transform your business with AI. From exploration to implementation, we help you automate workflows and scale with custom AI systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${neueMontreal.className}`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
