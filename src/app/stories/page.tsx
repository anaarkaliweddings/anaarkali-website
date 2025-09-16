'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Stories() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('Recent')

  const filters = ['All', 'Traditional', 'Modern', 'Destination', 'Court Marriage', 'LGBTQ+']
  const sortOptions = ['Recent', 'Popular', 'Location']

  const portfolioItems = [
    {
      id: 1,
      title: 'Priya & Arjun',
      location: 'Delhi',
      category: 'Traditional',
      description: 'A three-day celebration of love, tradition, and family bonds in the heart of Delhi.',
      videoUrl: '/portfolio/priya-arjun.mp4',
      thumbnail: '/portfolio/priya-arjun-thumb.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Sarah & Rajesh',
      location: 'Mumbai',
      category: 'Modern',
      description: 'Contemporary elegance meets timeless romance in this intimate Mumbai celebration.',
      videoUrl: '/portfolio/sarah-rajesh.mp4',
      thumbnail: '/portfolio/sarah-rajesh-thumb.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Meera & Alex',
      location: 'Goa',
      category: 'Destination',
      description: 'Sunset vows by the Arabian Sea, captured in cinematic perfection.',
      videoUrl: '/portfolio/meera-alex.mp4',
      thumbnail: '/portfolio/meera-alex-thumb.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Kai & River',
      location: 'Bangalore',
      category: 'LGBTQ+',
      description: 'A celebration of love that transcends boundaries, documented with authenticity.',
      videoUrl: '/portfolio/kai-river.mp4',
      thumbnail: '/portfolio/kai-river-thumb.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Anjali & Dev',
      location: 'Court House',
      category: 'Court Marriage',
      description: 'A courthouse "I do" that was more romantic than any grand affair.',
      videoUrl: '/portfolio/anjali-dev.mp4',
      thumbnail: '/portfolio/anjali-dev-thumb.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Priya & Meera',
      location: 'Mumbai',
      category: 'LGBTQ+',
      description: 'When two brides wore red and broke every rule beautifully.',
      videoUrl: '/portfolio/priya-meera.mp4',
      thumbnail: '/portfolio/priya-meera-thumb.jpg',
      featured: false
    }
  ]

  const filteredItems = portfolioItems.filter(item => {
    const matchesFilter = activeFilter === 'All' || item.category === activeFilter
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Portfolio Header */}
      <section className="pt-20 pb-16 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl md:text-5xl text-[#2C2C2C] mb-6">
              The Cinema We Create
            </h1>
            <p className="font-inter text-lg text-[#2C2C2C]/70 max-w-3xl mx-auto leading-relaxed">
              Every wedding is a movie waiting to be directed. Here are some we're honored to have told.
            </p>
          </div>

          {/* Filter and Search Controls */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 font-inter text-sm transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-[#D4A574] text-white'
                      : 'bg-white text-[#2C2C2C] hover:bg-[#D4A574] hover:text-white border border-gray-300'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Search and Sort */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Search by couple or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A574]"
              />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A574]"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Filter Introduction */}
          <div className="text-center mb-16">
            <p className="font-inter text-base text-[#2C2C2C]/70">
              Browse by the kind of love story that speaks to you
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
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
                      {item.location} • {item.category}
                    </p>
                  </div>
                </div>
                <p className="font-inter text-sm text-[#2C2C2C]/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#2C2C2C] mb-4">
              Behind the Director's Cut: Priya & Arjun
            </h2>
            <p className="font-inter text-lg text-[#2C2C2C]/70 max-w-4xl mx-auto leading-relaxed">
              Some stories demand to be told differently.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="font-inter text-lg text-[#2C2C2C] leading-relaxed">
                  Priya and Arjun's families hadn't spoken in years. The wedding was their chance to heal old wounds, but the pressure was immense.
                </p>
                <p className="font-inter text-lg text-[#2C2C2C] leading-relaxed">
                  Our approach: Focus on the quiet bridge-building moments. Capture the aunties finding common ground over mehendi designs. The fathers sharing a laugh during the baraat. The mothers crying together during the vidaai.
                </p>
                <p className="font-inter text-lg text-[#2C2C2C] leading-relaxed">
                  The result: A film that didn't just document a wedding—it told the story of two families becoming one.
                </p>
                <p className="font-inter text-lg font-medium text-[#2C2C2C]">
                  This is what happens when you treat love stories like cinema.
                </p>
              </div>
            </div>

            {/* Video */}
            <div className="relative">
              <div className="aspect-video bg-gray-400 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-black/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l8-5-8-5z"/>
                      </svg>
                    </div>
                    <p className="text-sm font-inter">Director's commentary video</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Love Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#2C2C2C] mb-4">
              What Our Families Tell Their Families
            </h2>
            <p className="font-inter text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto">
              The ultimate test: Would our couples recommend us to their closest friends? Here's what they say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Six months later, I still get chills watching our film. They captured moments I didn't even know happened.",
                author: "Priya & Arjun",
                location: "Delhi"
              },
              {
                quote: "Everyone asks who our photographer was. Not because of the technical quality—that's expected. Because of how it feels.",
                author: "Sarah & Rajesh",
                location: "Mumbai"
              },
              {
                quote: "They made us feel like the main characters in our own love story. Because we were.",
                author: "Meera & Alex",
                location: "Goa"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#FAF9F6] p-8 rounded-lg">
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

      <Footer />
    </div>
  )
}
