import Head from 'next/head';
import { generateSeoConfig, generateKeywords } from '../lib/seo';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string;
  structuredData?: Record<string, unknown>;
  type?: 'home' | 'service' | 'location' | 'blog' | 'inclusive';
  location?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogImage,
  keywords,
  structuredData,
  type = 'home',
  location
}) => {
  const seoConfig = generateSeoConfig(type, { title, description, canonical, ogImage, location });
  const finalKeywords = keywords || generateKeywords(type, location);

  return (
    <Head>
      <title>{title || seoConfig.title}</title>
      <meta name="description" content={description || seoConfig.description} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={canonical || seoConfig.canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title || seoConfig.title} />
      <meta property="og:description" content={description || seoConfig.description} />
      <meta property="og:url" content={canonical || seoConfig.canonical} />
      <meta property="og:image" content={ogImage || seoConfig.ogImage || 'https://anaarkaliproduction.com/Anaarkali_logo_Wordmark.svg'} />
      <meta property="og:type" content={seoConfig.type} />
      <meta property="og:locale" content={seoConfig.locale} />
      <meta property="og:site_name" content="Anaarkali Productions" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || seoConfig.title} />
      <meta name="twitter:description" content={description || seoConfig.description} />
      <meta name="twitter:image" content={ogImage || seoConfig.ogImage || 'https://anaarkaliproduction.com/Anaarkali_logo_Wordmark.svg'} />
      <meta name="twitter:site" content="@anaarkalifilms" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      
      {/* Preload critical resources */}
      <link rel="preload" href="/Anaarkali_logo_Wordmark.svg" as="image" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Anaarkali Productions" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Head>
  );
};

export default SEO;
