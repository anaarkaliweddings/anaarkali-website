export const BRAND_CONFIG = {
  siteName: 'Anaarkali Productions',
  tagline: 'The Cinematic Storytellers of Authentic Love',
  description: 'Delhi\'s premier wedding photography and cinematography team specializing in authentic, inclusive love stories.',
  url: 'https://anaarkaliproduction.com',
  logo: 'https://anaarkaliproduction.com/Anaarkali_logo_Wordmark.svg',
  founder: 'Anaarkali Team',
  phone: '+91-98765-43210',
  email: 'hello@anaarkaliproduction.com',
  address: {
    street: 'Sector 18, Gurgaon',
    city: 'Gurgaon',
    state: 'Haryana',
    postalCode: '122015',
    country: 'India'
  },
  serviceAreas: ['Delhi', 'Gurgaon', 'Noida', 'Punjab', 'Rajasthan', 'Chandigarh', 'Jaipur', 'Udaipur'],
  keywords: {
    primary: [
      'wedding photography Delhi',
      'wedding cinematography Delhi', 
      'inclusive wedding photography',
      'cinematic wedding films',
      'luxury wedding photography',
      'candid wedding photography',
      'pre-wedding photography',
      'wedding videography Delhi'
    ]
  }
};

export interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string;
  type?: 'website' | 'article';
  locale?: string;
}

export const generateSeoConfig = (
  type: 'home' | 'service' | 'location' | 'blog' | 'inclusive',
  data?: Record<string, unknown>
): SEOConfig => {
  const baseConfig: SEOConfig = {
    title: '',
    description: '',
    type: 'website',
    locale: 'en_IN'
  };

  switch (type) {
    case 'home':
      return {
        ...baseConfig,
        title: 'Premier Wedding Photography & Cinematography in Delhi | Anaarkali Productions',
        description: `${BRAND_CONFIG.tagline}. Luxury wedding photography and cinematic films across Delhi, Gurgaon, and North India. Book your consultation today.`,
        canonical: BRAND_CONFIG.url
      };

    case 'inclusive':
      return {
        ...baseConfig,
        title: 'Inclusive Wedding Photography - LGBTQ+ Friendly | Delhi',
        description: 'Celebrating every love story with inclusive wedding photography. LGBTQ+ friendly, interfaith, and court marriage documentation in Delhi.',
        canonical: `${BRAND_CONFIG.url}/inclusive-wedding-photography`
      };

    case 'location':
      return {
        ...baseConfig,
        title: (data?.title as string) || `Wedding Photography in ${data?.location as string}`,
        description: (data?.description as string) || `Professional wedding photography in ${data?.location as string}`,
        canonical: data?.canonical as string
      };

    case 'service':
      return {
        ...baseConfig,
        title: (data?.title as string) || 'Wedding Photography Services',
        description: (data?.description as string) || 'Professional wedding photography and cinematography services',
        canonical: data?.canonical as string
      };

    default:
      return baseConfig;
  }
};

export const generateKeywords = (type: string, location?: string): string => {
  const baseKeywords = BRAND_CONFIG.keywords.primary;
  
  if (type === 'location' && location) {
    return [
      ...baseKeywords,
      `wedding photography ${location}`,
      `wedding cinematography ${location}`,
      `best wedding photographers ${location}`,
      `luxury wedding photography ${location}`,
      `candid wedding photography ${location}`
    ].join(', ');
  }
  
  return baseKeywords.join(', ');
};

export const generateStructuredData = (type: 'LocalBusiness' | 'WeddingService' | 'Article', data?: Record<string, unknown>) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@id": `${BRAND_CONFIG.url}/#${type.toLowerCase()}`
  };

  switch (type) {
    case 'LocalBusiness':
      return {
        ...baseSchema,
        "@type": "LocalBusiness",
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
      };

    case 'WeddingService':
      return {
        ...baseSchema,
        "@type": "Service",
        serviceType: "Wedding Photography and Cinematography",
        name: data?.title || "Wedding Photography Services",
        description: data?.description,
        provider: {
          "@type": "LocalBusiness",
          name: BRAND_CONFIG.siteName,
          "@id": `${BRAND_CONFIG.url}/#organization`
        },
        areaServed: (data?.serviceArea as string[])?.map((area: string) => ({
          "@type": "City",
          name: area
        })) || BRAND_CONFIG.serviceAreas.map(area => ({
          "@type": "City", 
          name: area
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Wedding Services",
          itemListElement: [
            {
              "@type": "Offer",
              priceRange: (data?.priceRange as string) || "₹50000-₹500000",
              itemOffered: {
                "@type": "Service",
                name: data?.title as string,
                description: data?.description as string
              }
            }
          ]
        }
      };

    case 'Article':
      return {
        ...baseSchema,
        "@type": "Article",
        headline: data?.title as string,
        description: data?.description as string,
        author: {
          "@type": "Organization",
          name: BRAND_CONFIG.siteName,
          "@id": `${BRAND_CONFIG.url}/#organization`
        },
        publisher: {
          "@type": "Organization", 
          name: BRAND_CONFIG.siteName,
          logo: {
            "@type": "ImageObject",
            url: BRAND_CONFIG.logo
          }
        },
        datePublished: data?.publishedAt as string,
        dateModified: data?.modifiedAt as string,
        mainEntityOfPage: data?.canonical as string,
        image: data?.ogImage as string
      };

    default:
      return null;
  }
};
