import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: "Anaarkali - Luxury Wedding Cinematography",
  description: "We don't just capture your wedding. We direct your love story.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden max-w-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700&family=Instrument+Serif:ital,wght@0,400;0,700;1,400&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
        {/* Preload hero video for instant playback */}
        <link rel="preload" href="/Vidhisha-Ruchir-Pre-wedding-Delhi-2025-04.mp4" as="video" type="video/mp4" />
      </head>
      <body className="font-primary antialiased overflow-x-hidden max-w-full">
        <CustomCursor />
        <div className="overflow-x-hidden max-w-full">
          {children}
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
