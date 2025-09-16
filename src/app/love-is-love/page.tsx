'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function LoveIsLove() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'LGBTQ+', 'Interfaith', 'Court Marriage', 'Trans Couples', 'Cultural Traditions']

  const diversePortfolio = [
    {
      id: 1,
      title: 'Meera & Priya',
      subtitle: 'When two brides wore red and broke every rule beautifully',
      category: 'LGBTQ+',
      location: 'Mumbai',
      description: 'A celebration of love that transcends boundaries, documented with authenticity and joy.'
    },
    {
      id: 2,
      title: 'Karan & Mike',
      subtitle: 'A Sikh-Christian wedding that celebrated both traditions',
      category: 'Interfaith',
      location: 'Delhi',
      description: 'Two families, two faiths, one beautiful love story that honored everyone\'s traditions.'
    },
    {
      id: 3,
      title: 'Anjali & Dev',
      subtitle: 'A courthouse "I do" that was more romantic than any grand affair',
      category: 'Court Marriage',
      location: 'Court House',
      description: 'Sometimes the most intimate moments create the most powerful stories.'
    },
    {
      id: 4,
      title: 'Alex & Jamie',
      subtitle: 'A trans couple\'s journey to their perfect day',
      category: 'Trans Couples',
      location: 'Bangalore',
      description: 'Authentic love deserves authentic documentation, regardless of gender identity.'
    },
    {
      id: 5,
      title: 'Sarah & Rajesh',
      subtitle: 'When cultures collide beautifully',
      category: 'Cultural Traditions',
      location: 'Goa',
      description: 'A fusion of traditions that created something entirely new and beautiful.'
    },
    {
      id: 6,
      title: 'Priya & Meera',
      subtitle: 'Two brides, one love story',
      category: 'LGBTQ+',
      location: 'Pune',
      description: 'Breaking barriers and creating new traditions for future generations.'
    }
  ]

  const filteredItems = activeFilter === 'All' 
    ? diversePortfolio 
    : diversePortfolio.filter(item => item.category === activeFilter)

  const statistics = [
    { number: '23+', label: 'LGBTQ+ weddings and counting' },
    { number: '15', label: 'interfaith ceremonies celebrating unity in diversity' },
    { number: '8', label: 'court marriages proving love needs no grand stage' },
    { number: '31', label: 'families who found their perfect storytellers' }
  ]

  const testimonials = [
    {
      quote: "Finding vendors who genuinely celebrated our love—not just tolerated it—was our biggest challenge. Anaarkali didn't just accept us; they made us feel like the love story they'd been waiting to tell.",
      author: "Priya & Meera",
      location: "Mumbai"
    },
    {
      quote: "They understood the cultural nuances of both our families and captured moments that honored everyone's traditions. That takes real skill and sensitivity.",
      author: "Sarah & Rajesh",
      location: "Delhi"
    },
    {
      quote: "We were nervous about how our trans identity would be handled, but from day one, they used our correct names and pronouns and made us feel completely comfortable.",
      author: "Alex & Jamie",
      location: "Bangalore"
    }
  ]

  const resources = [
    {
      title: 'Planning an Inclusive Wedding',
      items: [
        'Vendor vetting questions to ask',
        'How to handle family conversations',
        'Creating guest experiences for everyone',
        'Legal requirements for different ceremony types'
      ]
    },
    {
      title: 'Understanding Different Ceremonies',
      items: [
        'Hindu wedding rituals explained',
        'Sikh ceremony traditions',
        'Christian wedding customs',
        'Muslim wedding celebrations',
        'Court marriage procedures'
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-[#2C2C2C] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-4xl md:text-5xl text-white mb-6">
              Every Story Deserves Telling
            </h1>
            <p className="font-inter text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Love doesn't fit into one box. Neither does our lens.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <p className="font-inter text-xl text-white leading-relaxed">
                We believe love is love is love.
              </p>
              <div className="space-y-4 text-white/90">
                <p className="font-inter text-lg">No matter who you love.</p>
                <p className="font-inter text-lg">How you love.</p>
                <p className="font-inter text-lg">Where you love.</p>
                <p className="font-inter text-lg">What traditions you follow.</p>
                <p className="font-inter text-lg">What rules you break.</p>
              </div>
              <p className="font-inter text-lg text-white leading-relaxed">
                Your love story deserves to be told with the same cinematic beauty, respect, and attention to detail as any other.
              </p>
              <p className="font-inter text-lg font-medium text-white">
                This is more than a service—it's our promise.<br />
                A safe space where your authentic self isn't just welcomed, it's celebrated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#2C2C2C] mb-4">
              The Love We've Captured So Far
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-playfair text-4xl md:text-5xl text-[#D4A574] font-bold mb-2">
                  {stat.number}
                </div>
                <p className="font-inter text-sm text-[#2C2C2C]/70 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diverse Portfolio Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#2C2C2C] mb-4">
              Love Stories That Break Beautiful Rules
            </h2>
            <p className="font-inter text-lg text-[#2C2C2C]/70 max-w-3xl mx-auto">
              Every love story here represents a couple who refused to fit into someone else's definition of what a wedding should be. We're honored to have been their directors.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 font-inter text-sm transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-[#D4A574] text-white'
                    : 'bg-[#FAF9F6] text-[#2C2C2C] hover:bg-[#D4A574] hover:text-white border border-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative aspect-video bg-gray-400 rounded-lg overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l8-5-8-5z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-playfair text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/80 font-inter text-sm">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-inter text-sm text-[#2C2C2C]/70">
                    {item.location} • {item.category}
                  </p>
                  <p className="font-inter text-sm text-[#2C2C2C] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safe Space Messaging */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#2C2C2C] mb-4">
              In Their Own Words
            </h2>
            <p className="font-inter text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto">
              Because when you become our client, you become our family. Here's what our diverse couples say about their experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <p className="font-inter text-[#2C2C2C] mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-inter text-sm font-medium text-[#2C2C2C]">
                      — {testimonial.author}
                    </p>
                    <p className="font-inter text-xs text-[#2C2C2C]/70">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#2C2C2C] mb-4">
              Resources for Every Love Story
            </h2>
            <p className="font-inter text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto">
              Planning an inclusive wedding? We've got you covered with guides, resources, and support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {resources.map((resource, index) => (
              <div key={index} className="bg-[#FAF9F6] p-8 rounded-lg">
                <h3 className="font-playfair text-2xl text-[#2C2C2C] mb-6">
                  {resource.title}
                </h3>
                <ul className="space-y-3">
                  {resource.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="font-inter text-base text-[#2C2C2C]/80 flex items-start gap-3">
                      <span className="text-[#D4A574] mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Safe Space Partnerships */}
          <div className="mt-16 text-center">
            <h3 className="font-playfair text-2xl text-[#2C2C2C] mb-8">
              Safe Space Partnerships
            </h3>
            <p className="font-inter text-lg text-[#2C2C2C]/70 mb-8">
              We work closely with organizations creating inclusive wedding experiences:
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                'LGBTQ+ Advocacy Groups',
                'Inclusive Wedding Planners',
                'Cultural Sensitivity Organizations',
                'Accessibility Support Networks'
              ].map((partner, index) => (
                <div key={index} className="bg-[#D4A574]/10 px-6 py-3 rounded-lg">
                  <p className="font-inter text-sm text-[#2C2C2C] font-medium">
                    {partner}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2C2C2C] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl text-white mb-6">
            Ready to Tell Your Love Story?
          </h2>
          <p className="font-inter text-lg text-white/80 mb-8 leading-relaxed">
            Every love story deserves to be told with respect, celebration, and joy. 
            Let's create something beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#D4A574] hover:bg-[#D4A574]/90 text-white px-8 py-4 font-inter text-sm tracking-wider uppercase transition-all duration-300">
              Begin Your Story
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-[#2C2C2C] px-8 py-4 font-inter text-sm tracking-wider uppercase transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
