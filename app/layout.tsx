import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import React from "react";
import ClientShell from "./client-shell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smooth Sail Auto Detail | Kern County Mobile & Luxury Car Detailing",
  description:
    "Smooth Sail Auto Detail provides premium interior, exterior & complete auto detailing services in Kern County. Book a showroom-level, protected clean today.",
  keywords: [
    "Kern County auto detail",
    "mobile detailing",
    "interior car detailing",
    "exterior car detailing",
    "ceramic coating",
    "paint correction",
  ],
  openGraph: {
    title: "Smooth Sail Auto Detail",
    description:
      "Luxury interior & exterior auto detailing services. Spotless, protected, showroom results in Kern County since 2020.",
    url: "https://www.smoothsaildetail.com",
    siteName: "Smooth Sail Auto Detail",
    locale: "en_US",
    type: "website",
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
        className={clsx(
          geistSans.variable,
          geistMono.variable,
          "min-h-screen bg-background font-sans text-foreground antialiased"
        )}
      >
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
