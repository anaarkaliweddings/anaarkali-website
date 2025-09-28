import { GetStaticProps, GetStaticPaths } from 'next';
import SEO from '@/components/SEO';
import StructuredData from '@/components/StructuredData';
import { generateKeywords, generateStructuredData } from '@/lib/seo';

interface CityPageProps {
  city: string;
  cityData: {
    name: string;
    description: string;
    venues: string[];
    priceRange: string;
    coordinates: {
      lat: string;
      lng: string;
    };
  };
}

const CityWeddingPage: React.FC<CityPageProps> = ({ city, cityData }) => {
  const title = `Best Wedding Photographers in ${cityData.name} 2025 | Anaarkali Productions`;
  const description = `Professional wedding photography and cinematography in ${cityData.name}. Luxury wedding films, candid photography, and authentic storytelling. Book consultation today.`;
  const canonical = `https://anaarkaliproduction.com/wedding-photography/${city}`;
  const keywords = generateKeywords('location', cityData.name);

  const structuredData = generateStructuredData('WeddingService', {
    title,
    description,
    canonical,
    serviceArea: [cityData.name],
    priceRange: cityData.priceRange
  });

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical={canonical}
        keywords={keywords}
        type="location"
        location={cityData.name}
      />
      <StructuredData 
        type="WeddingService"
        data={{
          title,
          description,
          canonical,
          serviceArea: [cityData.name],
          priceRange: cityData.priceRange
        }}
      />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-luxury-primary flex items-center justify-center">
          <div className="text-center text-white z-10">
            <h1 className="text-4xl md:text-6xl font-primary-bold mb-4">
              Wedding Photography in {cityData.name}
            </h1>
            <p className="text-xl md:text-2xl font-primary-medium max-w-3xl mx-auto">
              {description}
            </p>
          </div>
        </section>

        {/* Why Choose Anaarkali */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-primary-bold text-luxury-primary mb-8 text-center">
            Why Choose Anaarkali for Your {cityData.name} Wedding
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-primary-bold mb-4">Cinematic Storytelling</h3>
              <p className="text-gray-700 font-primary">
                Our cinematic approach to wedding photography captures the authentic emotions and 
                beautiful moments of your special day in {cityData.name}. We don't just take photos - 
                we tell your unique love story.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-primary-bold mb-4">Local Expertise</h3>
              <p className="text-gray-700 font-primary">
                With extensive experience shooting weddings across {cityData.name}, we know the best 
                venues, lighting conditions, and timing for perfect shots. Our local knowledge ensures 
                flawless execution.
              </p>
            </div>
          </div>
        </section>

        {/* Top Wedding Venues */}
        <section className="py-16 bg-luxury-accent">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-primary-bold text-luxury-primary mb-8 text-center">
              Top Wedding Venues in {cityData.name}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {cityData.venues.map((venue, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-primary-bold text-luxury-primary mb-2">{venue}</h3>
                  <p className="text-gray-600 font-primary">
                    Beautiful venue perfect for luxury weddings with stunning photography opportunities.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-primary-bold text-luxury-primary mb-8 text-center">
            Wedding Photography Services in {cityData.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <h3 className="text-xl font-primary-bold mb-3">Candid Wedding Photography</h3>
              <p className="text-gray-600 font-primary">
                Natural, unposed moments that capture the true essence of your celebration.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-primary-bold mb-3">Cinematic Wedding Films</h3>
              <p className="text-gray-600 font-primary">
                Professional videography that tells your love story in motion.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-primary-bold mb-3">Pre-Wedding Photography</h3>
              <p className="text-gray-600 font-primary">
                Romantic pre-wedding shoots in beautiful {cityData.name} locations.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-primary-bold mb-3">Same-Day Video Editing</h3>
              <p className="text-gray-600 font-primary">
                Quick turnaround for your wedding highlights and social media content.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-primary-bold mb-3">Drone Photography</h3>
              <p className="text-gray-600 font-primary">
                Aerial shots that showcase your venue and celebration from above.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-primary-bold mb-3">Inclusive Photography</h3>
              <p className="text-gray-600 font-primary">
                Celebrating all love stories with sensitivity and authenticity.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-luxury-primary text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-primary-bold mb-6">
              Ready to Capture Your {cityData.name} Wedding?
            </h2>
            <p className="text-xl mb-8 font-primary">
              Let's discuss your vision and create beautiful memories that last a lifetime.
            </p>
            <a 
              href="/begin-your-story" 
              className="inline-block bg-white text-luxury-primary px-8 py-4 rounded-lg font-primary-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Book Your Consultation
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const cities = [
    'delhi', 'gurgaon', 'noida', 'faridabad', 'ghaziabad',
    'chandigarh', 'punjab', 'jaipur', 'udaipur', 'pushkar',
    'agra', 'lucknow', 'kanpur', 'varanasi', 'amritsar'
  ];

  const paths = cities.map(city => ({
    params: { city }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const cityDataMap: Record<string, any> = {
    delhi: {
      name: 'Delhi',
      description: 'Capital city wedding photography with historic venues and modern luxury',
      venues: ['Leela Palace Delhi', 'ITC Maurya', 'The Imperial', 'Taj Palace', 'The Oberoi'],
      priceRange: '₹80000-₹500000',
      coordinates: { lat: '28.6139', lng: '77.2090' }
    },
    gurgaon: {
      name: 'Gurgaon',
      description: 'Modern city luxury weddings with contemporary venues',
      venues: ['Trident Gurgaon', 'The Westin', 'Hyatt Regency', 'The Leela', 'Radisson Blu'],
      priceRange: '₹75000-₹450000',
      coordinates: { lat: '28.4595', lng: '77.0266' }
    },
    noida: {
      name: 'Noida',
      description: 'Emerging wedding destination with beautiful venues',
      venues: ['Radisson Noida', 'The LaLiT', 'Crowne Plaza', 'Holiday Inn', 'The Park'],
      priceRange: '₹70000-₹400000',
      coordinates: { lat: '28.5355', lng: '77.3910' }
    },
    jaipur: {
      name: 'Jaipur',
      description: 'Royal city weddings with heritage palaces and luxury resorts',
      venues: ['Rambagh Palace', 'The Oberoi Rajvilas', 'ITC Rajputana', 'Jai Mahal Palace', 'Fairmont Jaipur'],
      priceRange: '₹60000-₹350000',
      coordinates: { lat: '26.9124', lng: '75.7873' }
    },
    chandigarh: {
      name: 'Chandigarh',
      description: 'Modern planned city with beautiful architecture and gardens',
      venues: ['Taj Chandigarh', 'The Lalit', 'Hotel Mountview', 'Park Plaza', 'Hotel Shivalikview'],
      priceRange: '₹65000-₹380000',
      coordinates: { lat: '30.7333', lng: '76.7794' }
    }
  };

  const cityKey = params?.city as string;
  const cityData = cityDataMap[cityKey] || cityDataMap.delhi;

  return {
    props: {
      city: cityKey,
      cityData
    },
    revalidate: 86400 // Revalidate every 24 hours
  };
};

export default CityWeddingPage;
