'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function OurVision() {
  const [selectedTeamMember, setSelectedTeamMember] = useState<number | null>(null)

  const teamMembers = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Lead Cinematographer',
      specialty: 'Emotional close-ups and candid moments',
      style: 'Uses natural light to create dreamy, romantic visuals',
      funFact: 'Speaks 4 languages, perfect for multicultural weddings',
      motto: 'Every tear tells a story',
      image: '/team/priya-sharma.jpg'
    },
    {
      id: 2,
      name: 'Vikram Singh',
      role: 'Drone Specialist & Adventure Photographer',
      specialty: 'Destination weddings and dramatic aerial shots',
      style: 'Bold compositions that make venues look cinematic',
      funFact: 'Has photographed weddings in 12 countries',
      motto: 'Go big or go home',
      image: '/team/vikram-singh.jpg'
    },
    {
      id: 3,
      name: 'Meera Gupta',
      role: 'Portrait Artist',
      specialty: 'Family dynamics and generational photographs',
      style: 'Classic, timeless portraits with modern editing',
      funFact: 'Learned photography from her grandmother',
      motto: 'Tradition meets innovation',
      image: '/team/meera-gupta.jpg'
    }
  ]

  const brandValues = [
    {
      title: 'Radical Inclusivity',
      description: 'Love is love is love. Your story deserves to be told with respect, celebration, and joy—no matter who you are or who you love.',
      icon: '❤️'
    },
    {
      title: 'Cinematic Excellence',
      description: 'We\'re not just documenting your day. We\'re creating art that will move people to tears decades from now.',
      icon: '🎬'
    },
    {
      title: 'Operational Integrity',
      description: 'We show up on time, deliver when promised, and communicate clearly. Boring basics that aren\'t basic at all.',
      icon: '⚡'
    },
    {
      title: 'Cultural Sensitivity',
      description: 'Understanding traditions while embracing evolution. Honoring your heritage while celebrating your individuality.',
      icon: '🌍'
    }
  ]

  const equipment = [
    { category: 'Cameras', items: ['Sony FX6', 'A7S III for cinematic quality'] },
    { category: 'Lenses', items: ['Prime lenses for that shallow depth of field magic'] },
    { category: 'Drones', items: ['DJI Mavic 3 for breathtaking aerial shots'] },
    { category: 'Audio', items: ['Wireless mics for crystal-clear vows'] },
    { category: 'Editing', items: ['Professional color grading for film-quality results'] },
    { category: 'Innovation', items: ['Guest photo integration technology for comprehensive coverage'] }
  ]

  const futureVision = [
    'Document 100+ weddings annually',
    'Expand across India and internationally',
    'Launch training programs for aspiring wedding cinematographers',
    'Open a flagship studio that sets industry standards',
    'Become the most trusted name in inclusive wedding documentation'
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Page Header */}
      <section className="pt-20 pb-16 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-4xl md:text-5xl text-[#2C2C2C] mb-6">
              The Storytellers Behind the Lens
            </h1>
            <p className="font-inter text-lg text-[#2C2C2C]/70 max-w-3xl mx-auto leading-relaxed">
              Meet the humans who turn your love into cinema.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl text-[#2C2C2C] mb-6">
                  From Freelancer to Director: The Abhishek Story
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="font-inter text-lg text-[#2C2C2C] leading-relaxed">
                  Four years ago, I was just another freelancer with a camera and a dream.
                  Today, we're directing love stories that become family legacies.
                </p>
                
                <p className="font-inter text-lg text-[#2C2C2C] leading-relaxed">
                  The journey started with a simple frustration: watching couples receive beautiful but soulless wedding films. Technically perfect. Emotionally empty. I knew we could do better.
                </p>

                <div className="space-y-4">
                  <h3 className="font-playfair text-xl text-[#2C2C2C]">
                    The Vision
                  </h3>
                  <p className="font-inter text-base text-[#2C2C2C]/80 leading-relaxed">
                    Build a team that treats every wedding like the movie it deserves to be. Not just photographers, but directors. Not just vendors, but family.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-playfair text-xl text-[#2C2C2C]">
                    The Mission
                  </h3>
                  <p className="font-inter text-base text-[#2C2C2C]/80 leading-relaxed">
                    Preserve the essence of bonding between couples and families through cinematic storytelling that captures not just what happened, but how it felt.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-playfair text-xl text-[#2C2C2C]">
                    The Dream
                  </h3>
                  <p className="font-inter text-base text-[#2C2C2C]/80 leading-relaxed">
                    Scale from where we are today to a ₹20 crore brand that sets trends, breaks norms, and creates a new standard for what wedding documentation can be.
                  </p>
                </div>

                <p className="font-inter text-lg font-medium text-[#2C2C2C]">
                  But here's what won't change: Every couple, regardless of budget, gets treated like they're starring in the most important film of the year. Because they are.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gray-400 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-black/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-inter">Abhishek - Founder & Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Interests */}
          <div className="mt-16 bg-[#FAF9F6] p-8 rounded-lg">
            <h3 className="font-playfair text-2xl text-[#2C2C2C] mb-6">
              When I'm not behind the camera, you'll find me:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '📽️', text: 'Studying film direction (my ultimate career goal)' },
                { icon: '🎮', text: 'Playing strategy games (great for wedding day logistics)' },
                { icon: '✈️', text: 'Traveling to understand different cultures' },
                { icon: '🧩', text: 'Solving problems that seem impossible at first' },
                { icon: '🏃‍♂️', text: 'Planning the next big adventure' }
              ].map((interest, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-2xl">{interest.icon}</span>
                  <p className="font-inter text-sm text-[#2C2C2C]/80 leading-relaxed">
                    {interest.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#2C2C2C] mb-4">
              Our Cast of Storytellers
            </h2>
            <p className="font-inter text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto">
              Great cinema requires a great team. Here are the artists who make our magic happen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="bg-white p-8 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-300"
                onClick={() => setSelectedTeamMember(selectedTeamMember === member.id ? null : member.id)}
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gray-400 rounded-full mx-auto mb-4 overflow-hidden">
                    <div className="w-full h-full bg-black/20 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mb-2 mx-auto">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-playfair text-xl text-[#2C2C2C] mb-2">
                    {member.name}
                  </h3>
                  <p className="font-inter text-sm text-[#D4A574] font-medium">
                    {member.role}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-inter text-sm font-medium text-[#2C2C2C] mb-1">
                      Specializes in:
                    </h4>
                    <p className="font-inter text-sm text-[#2C2C2C]/80">
                      {member.specialty}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-inter text-sm font-medium text-[#2C2C2C] mb-1">
                      Signature style:
                    </h4>
                    <p className="font-inter text-sm text-[#2C2C2C]/80">
                      {member.style}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-inter text-sm font-medium text-[#2C2C2C] mb-1">
                      Fun fact:
                    </h4>
                    <p className="font-inter text-sm text-[#2C2C2C]/80">
                      {member.funFact}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="font-inter text-sm font-medium text-[#D4A574]">
                      "{member.motto}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#2C2C2C] mb-4">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brandValues.map((value, index) => (
              <div key={index} className="text-center p-8 bg-[#FAF9F6] rounded-lg">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-playfair text-xl text-[#2C2C2C] mb-4">
                  {value.title}
                </h3>
                <p className="font-inter text-base text-[#2C2C2C]/80 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Magic */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#2C2C2C] mb-4">
              The Technology Behind the Art
            </h2>
            <p className="font-inter text-lg text-[#2C2C2C]/70 max-w-3xl mx-auto">
              Great storytelling requires great tools. Here's what we use to bring your vision to life:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-playfair text-lg text-[#2C2C2C] mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="font-inter text-sm text-[#2C2C2C]/80 flex items-start gap-2">
                      <span className="text-[#D4A574] mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-[#2C2C2C] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl text-white mb-4">
              Where We're Headed
            </h2>
            <p className="font-inter text-lg text-white/80 max-w-3xl mx-auto">
              By 2029, our vision is to:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {futureVision.map((goal, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <span className="text-[#D4A574] text-xl">•</span>
                  <p className="font-inter text-base text-white/90 leading-relaxed">
                    {goal}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="font-inter text-lg text-white/80 max-w-2xl mx-auto">
              But our north star remains the same: Every couple deserves to see their love story told like the epic it truly is.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
