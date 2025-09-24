import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

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
    <html lang="en">
      <body className="font-interface antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
