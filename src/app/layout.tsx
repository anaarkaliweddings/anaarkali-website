import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { BRAND_CONFIG } from '../lib/seo';

export const metadata: Metadata = {
  title: {
    default: 'Premier Wedding Photography & Cinematography in Delhi | Anaarkali Productions',
    template: '%s | Anaarkali Productions'
  },
  description: 'The Cinematic Storytellers of Authentic Love. Luxury wedding photography and cinematic films across Delhi, Gurgaon, and North India. Book your consultation today.',
  keywords: 'wedding photography Delhi, wedding cinematography Delhi, inclusive wedding photography, cinematic wedding films, luxury wedding photography, candid wedding photography',
  authors: [{ name: 'Anaarkali Productions' }],
  creator: 'Anaarkali Productions',
  publisher: 'Anaarkali Productions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://anaarkaliproduction.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://anaarkaliproduction.com',
    siteName: 'Anaarkali Productions',
    title: 'Premier Wedding Photography & Cinematography in Delhi | Anaarkali Productions',
    description: 'The Cinematic Storytellers of Authentic Love. Luxury wedding photography and cinematic films across Delhi, Gurgaon, and North India.',
    images: [
      {
        url: '/Anaarkali_logo_Wordmark.svg',
        width: 1200,
        height: 630,
        alt: 'Anaarkali Productions - Wedding Photography & Cinematography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@anaarkalifilms',
    creator: '@anaarkalifilms',
    title: 'Premier Wedding Photography & Cinematography in Delhi | Anaarkali Productions',
    description: 'The Cinematic Storytellers of Authentic Love. Luxury wedding photography and cinematic films across Delhi, Gurgaon, and North India.',
    images: ['/Anaarkali_logo_Wordmark.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
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
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        {/* Favicon - Anaarkali Logo Sticker */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png" />
        <meta name="theme-color" content="#4F0D0E" />
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://anaarkaliproduction.com/#organization",
              name: BRAND_CONFIG.siteName,
              description: BRAND_CONFIG.description,
              url: BRAND_CONFIG.url,
              logo: BRAND_CONFIG.logo,
              image: BRAND_CONFIG.logo,
              telephone: BRAND_CONFIG.phone,
              email: BRAND_CONFIG.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: BRAND_CONFIG.address.street,
                addressLocality: BRAND_CONFIG.address.city,
                addressRegion: BRAND_CONFIG.address.state,
                postalCode: BRAND_CONFIG.address.postalCode,
                addressCountry: BRAND_CONFIG.address.country
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "28.4595",
                longitude: "77.0266"
              },
              areaServed: BRAND_CONFIG.serviceAreas.map(area => ({
                "@type": "City",
                name: area
              })),
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Wedding Photography Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Wedding Photography",
                      description: "Professional wedding photography services"
                    }
                  },
                  {
                    "@type": "Offer", 
                    itemOffered: {
                      "@type": "Service",
                      name: "Wedding Cinematography",
                      description: "Cinematic wedding videography services"
                    }
                  }
                ]
              },
              priceRange: "₹₹₹",
              openingHours: "Mo-Su 09:00-21:00"
            })
          }}
        />
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