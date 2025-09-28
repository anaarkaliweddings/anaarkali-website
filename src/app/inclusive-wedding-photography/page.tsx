import SEO from '../../components/SEO';
import StructuredData from '../../components/StructuredData';
import { generateStructuredData } from '../../lib/seo';

const InclusiveWeddingPage = () => {
  const title = "Inclusive Wedding Photography - LGBTQ+ Friendly | Delhi";
  const description = "Celebrating every love story with inclusive wedding photography and cinematography. LGBTQ+ friendly, interfaith, and court marriage documentation in Delhi.";
  const canonical = "https://anaarkaliproduction.com/inclusive-wedding-photography";

  // Generate structured data for SEO
  generateStructuredData('WeddingService', {
    title,
    description,
    canonical,
    serviceArea: ['Delhi', 'Gurgaon', 'India'],
    priceRange: '₹60000-₹400000'
  });

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical={canonical}
        keywords="inclusive wedding photography, LGBTQ wedding photographers India, interfaith wedding photography, court marriage photography Delhi, same-sex wedding photography"
        type="inclusive"
      />
      <StructuredData 
        type="WeddingService"
        data={{
          title,
          description,
          canonical,
          serviceArea: ['Delhi', 'Gurgaon', 'India'],
          priceRange: '₹60000-₹400000'
        }}
      />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[70vh] bg-gradient-to-br from-luxury-primary to-luxury-secondary flex items-center justify-center">
          <div className="text-center text-white z-10 max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-primary-bold mb-6">
              Inclusive Wedding Photography
            </h1>
            <p className="text-xl md:text-2xl font-primary-medium mb-8">
              Love is Love - Celebrating Every Love Story with Authenticity and Respect
            </p>
            <a 
              href="/begin-your-story" 
              className="inline-block bg-white text-luxury-primary px-8 py-4 rounded-lg font-primary-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Book Your Consultation
            </a>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-primary-bold text-luxury-primary mb-6">
              Every Love Story Deserves to be Celebrated
            </h2>
            <p className="text-xl text-gray-700 font-primary max-w-4xl mx-auto">
              At Anaarkali Productions, we believe that love knows no boundaries. We are proud to document 
              all types of weddings with sensitivity, respect, and artistic vision. Our inclusive approach 
              ensures that every couple feels comfortable, celebrated, and authentically represented.
            </p>
          </div>
        </section>

        {/* LGBTQ+ Wedding Photography */}
        <section className="py-16 bg-luxury-accent">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-primary-bold text-luxury-primary mb-6">
                  LGBTQ+ Wedding Photography
                </h2>
                <p className="text-lg text-gray-700 font-primary mb-6">
                  We are proud allies and experienced photographers of LGBTQ+ weddings. Our team understands 
                  the unique challenges and celebrations that come with same-sex weddings, and we approach 
                  each ceremony with sensitivity, respect, and joy.
                </p>
                <ul className="space-y-3 text-gray-700 font-primary">
                  <li className="flex items-start">
                    <span className="text-luxury-primary mr-3">✓</span>
                    Safe and inclusive environment for all couples
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-primary mr-3">✓</span>
                    Experience with LGBTQ+ wedding ceremonies and traditions
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-primary mr-3">✓</span>
                    Respectful documentation of intimate moments
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-primary mr-3">✓</span>
                    Celebration of authentic love and joy
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-primary-bold text-luxury-primary mb-4">
                  Our Commitment
                </h3>
                <p className="text-gray-700 font-primary mb-4">
                  We are committed to creating a safe, welcoming space for all couples. Our team has 
                  undergone sensitivity training and we continuously educate ourselves on LGBTQ+ issues 
                  and inclusive practices.
                </p>
                <div className="bg-luxury-primary/10 p-4 rounded-lg">
                  <p className="text-luxury-primary font-primary-bold">
                    "Love is love, and every love story deserves to be told beautifully."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interfaith Wedding Documentation */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-primary-bold text-luxury-primary mb-4">
                Cultural Sensitivity
              </h3>
              <p className="text-gray-700 font-primary mb-4">
                We understand the importance of respecting different religious and cultural traditions. 
                Our team is experienced in documenting interfaith ceremonies with the utmost respect 
                and understanding.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-primary-bold text-luxury-primary mb-6">
                Interfaith Wedding Documentation
              </h2>
              <p className="text-lg text-gray-700 font-primary mb-6">
                Beautiful interfaith ceremonies require photographers who understand and respect the 
                significance of different traditions. We document these meaningful moments with 
                cultural sensitivity and artistic excellence.
              </p>
              <ul className="space-y-3 text-gray-700 font-primary">
                <li className="flex items-start">
                  <span className="text-luxury-primary mr-3">✓</span>
                  Understanding of multiple religious traditions
                </li>
                <li className="flex items-start">
                  <span className="text-luxury-primary mr-3">✓</span>
                  Respectful documentation of sacred moments
                </li>
                <li className="flex items-start">
                  <span className="text-luxury-primary mr-3">✓</span>
                  Experience with fusion ceremonies
                </li>
                <li className="flex items-start">
                  <span className="text-luxury-primary mr-3">✓</span>
                  Celebration of cultural diversity
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Court Marriage Photography */}
        <section className="py-16 bg-luxury-accent">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-primary-bold text-luxury-primary mb-6">
                Court Marriage Photography
              </h2>
              <p className="text-xl text-gray-700 font-primary max-w-4xl mx-auto">
                Simple, elegant documentation of court marriages and registrations. We understand that 
                not every love story follows the traditional path, and we're here to celebrate your 
                commitment in whatever way feels right for you.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-primary-bold text-luxury-primary mb-4">
                  Intimate Ceremonies
                </h3>
                <p className="text-gray-700 font-primary">
                  Beautiful documentation of small, intimate court marriage ceremonies with close family and friends.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-primary-bold text-luxury-primary mb-4">
                  Legal Documentation
                </h3>
                <p className="text-gray-700 font-primary">
                  Professional photography of the legal proceedings and official moments of your marriage registration.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-primary-bold text-luxury-primary mb-4">
                  Celebration Shoots
                </h3>
                <p className="text-gray-700 font-primary">
                  Post-ceremony celebration photography to commemorate your special day in a meaningful way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-primary-bold text-luxury-primary mb-12 text-center">
            Our Inclusive Approach
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-primary-bold text-luxury-primary mb-3">Respect</h3>
              <p className="text-gray-700 font-primary">
                We respect all identities, orientations, and expressions of love.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎭</span>
              </div>
              <h3 className="text-xl font-primary-bold text-luxury-primary mb-3">Authenticity</h3>
              <p className="text-gray-700 font-primary">
                We capture your true selves and authentic moments of joy.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌈</span>
              </div>
              <h3 className="text-xl font-primary-bold text-luxury-primary mb-3">Celebration</h3>
              <p className="text-gray-700 font-primary">
                We celebrate the diversity and beauty of all love stories.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎬</span>
              </div>
              <h3 className="text-xl font-primary-bold text-luxury-primary mb-3">Artistry</h3>
              <p className="text-gray-700 font-primary">
                We create beautiful, artistic documentation of your special day.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-luxury-primary text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-primary-bold mb-6">
              Ready to Celebrate Your Love Story?
            </h2>
            <p className="text-xl mb-8 font-primary">
              Let's create beautiful memories that authentically represent your unique love story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/begin-your-story" 
                className="inline-block bg-white text-luxury-primary px-8 py-4 rounded-lg font-primary-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Book Your Consultation
              </a>
              <a 
                href="/love-is-love" 
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-primary-bold text-lg hover:bg-white hover:text-luxury-primary transition-colors"
              >
                View Our Work
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default InclusiveWeddingPage;
