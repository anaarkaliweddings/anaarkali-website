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
  data?: any
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
        title: data?.title || `Wedding Photography in ${data?.location}`,
        description: data?.description || `Professional wedding photography in ${data?.location}`,
        canonical: data?.canonical
      };

    case 'service':
      return {
        ...baseConfig,
        title: data?.title || 'Wedding Photography Services',
        description: data?.description || 'Professional wedding photography and cinematography services',
        canonical: data?.canonical
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

export const generateStructuredData = (type: 'LocalBusiness' | 'WeddingService' | 'Article', data?: any) => {
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
        areaServed: data?.serviceArea?.map((area: string) => ({
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
              priceRange: data?.priceRange || "₹50000-₹500000",
              itemOffered: {
                "@type": "Service",
                name: data?.title,
                description: data?.description
              }
            }
          ]
        }
      };

    case 'Article':
      return {
        ...baseSchema,
        "@type": "Article",
        headline: data?.title,
        description: data?.description,
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
        datePublished: data?.publishedAt,
        dateModified: data?.modifiedAt,
        mainEntityOfPage: data?.canonical,
        image: data?.ogImage
      };

    default:
      return null;
  }
};
