'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LuxuryVideoPlayer from '@/components/LuxuryVideoPlayer'
import EmblemIcon from '@/components/EmblemIcon'

export default function BeginYourStory() {
  const [formData, setFormData] = useState({
    names: '',
    weddingDate: '',
    location: '',
    loveStory: '',
    importantToYou: '',
    dreamFilmWord: '',
    eventType: [] as string[],
    guestCount: '',
    culturalCeremonies: '',
    servicesNeeded: [] as string[],
    budget: '',
    whatMattersMost: '',
    accessibilityNeeds: '',
    lgbtqCommunity: '',
    familyDynamics: '',
    howDidYouHear: ''
  })

  const [selectedConsultation, setSelectedConsultation] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const eventTypes = ['Traditional', 'Modern', 'Destination', 'Court marriage', 'Multi-day celebration']
  const servicesNeeded = ['Photography', 'Videography', 'Both']
  const budgetOptions = ['₹2-5 lakhs', '₹5-8 lakhs', '₹8-12 lakhs', '₹12+ lakhs', 'Let\'s discuss']
  const consultationTypes = [
    {
      id: 'discovery',
      title: '30-Minute Discovery Call (Free)',
      description: 'Perfect for: Getting to know each other and basic questions',
      duration: '30 min'
    },
    {
      id: 'deep-dive',
      title: '60-Minute Creative Deep-Dive (Free)',
      description: 'Perfect for: Detailed vision discussion and seeing if we\'re creative partners',
      duration: '60 min'
    },
    {
      id: 'in-person',
      title: '90-Minute In-Person Meeting (₹500 refundable with booking)',
      description: 'Perfect for: Full experience including portfolio review and venue discussion',
      duration: '90 min'
    }
  ]

  const faqs = [
    {
      question: "How quickly do you respond to inquiries?",
      answer: "Within 24 hours, often sooner. We know wedding planning doesn't wait."
    },
    {
      question: "Do you meet with every couple?",
      answer: "Yes! Every potential couple gets a consultation. We need to make sure we're the right creative partners for your vision."
    },
    {
      question: "What if we're planning a destination wedding?",
      answer: "We love to travel for love! Destination weddings are some of our favorite stories to tell. Travel costs are additional."
    },
    {
      question: "How far in advance should we book?",
      answer: "6-12 months is ideal, but we've made magic happen with less notice. Each situation is unique."
    },
    {
      question: "What if we're not sure about our budget?",
      answer: "That's exactly what consultations are for. We'll help you understand your options and find an investment level that works."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Absolutely. We believe great storytelling shouldn't be limited by payment timing. We'll work with you."
    }
  ]

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleCheckboxChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].includes(value)
        ? (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
        : [...(prev[field as keyof typeof prev] as string[]), value]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Page Header */}
      <section className="pt-20 pb-16 bg-luxury-accent">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-primary text-4xl md:text-5xl text-luxury-primary mb-6">
              Ready for Your Premiere?
            </h1>
            <p className="font-interface text-lg text-luxury-primary/70 max-w-3xl mx-auto leading-relaxed">
              Every great love story deserves a great director. Let's see if we're meant to tell yours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="font-primary text-3xl md:text-4xl text-luxury-primary mb-4">
              Tell Us About Your Love Story
            </h2>
            <p className="font-interface text-lg text-luxury-primary/70 max-w-2xl mx-auto">
              Before we talk packages and pricing, we want to understand your vision. What kind of film do you want your wedding to be?
            </p>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Your Love Story Details */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-primary text-2xl text-luxury-primary mb-6">
                Your Love Story Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block font-interface text-sm font-medium text-luxury-primary mb-2">
                    Your names *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.names}
                    onChange={(e) => handleInputChange('names', e.target.value)}
                    className="w-full px-4 py-3 border border-luxury-primary/20 rounded-md font-interface text-sm focus:outline-none focus:ring-2 focus:ring-luxury-accent focus:border-luxury-accent transition-all duration-300"
                    placeholder="Enter both your names"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="block font-interface text-sm font-medium text-luxury-primary mb-2">
                    Wedding date (or approximate) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.weddingDate}
                    onChange={(e) => handleInputChange('weddingDate', e.target.value)}
                    className="w-full px-4 py-3 border border-luxury-primary/20 rounded-md font-interface text-sm focus:outline-none focus:ring-2 focus:ring-luxury-accent focus:border-luxury-accent transition-all duration-300"
                    placeholder="e.g., March 2024 or TBD"
                  />
                </motion.div>
              </div>

              <div>
                <label className="block font-inter text-sm font-medium text-[#2C2C2C] mb-2">
                  Primary location/city *
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A574]"
                  placeholder="e.g., Delhi, Mumbai, Goa"
                />
              </div>

              <div>
                <label className="block font-inter text-sm font-medium text-[#2C2C2C] mb-2">
                  Tell us about your love story in 2-3 sentences
                </label>
                <textarea
                  value={formData.loveStory}
                  onChange={(e) => handleInputChange('loveStory', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A574]"
                  placeholder="How did you meet? What makes your love story unique?"
                />
              </div>

              <div>
                <label className="block font-inter text-sm font-medium text-[#2C2C2C] mb-2">
                  What's most important to you about your wedding documentation?
                </label>
                <textarea
                  value={formData.importantToYou}
                  onChange={(e) => handleInputChange('importantToYou', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A574]"
                  placeholder="What moments matter most? What do you want to remember forever?"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label className="block font-interface text-sm font-medium text-luxury-primary mb-2">
                  Describe your dream wedding film in one word
                </label>
                <input
                  type="text"
                  value={formData.dreamFilmWord}
                  onChange={(e) => handleInputChange('dreamFilmWord', e.target.value)}
                  className="w-full px-4 py-3 border border-luxury-primary/20 rounded-md font-interface text-sm focus:outline-none focus:ring-2 focus:ring-luxury-accent focus:border-luxury-accent transition-all duration-300"
                  placeholder="e.g., Romantic, Cinematic, Intimate, Grand"
                />
              </motion.div>
            </motion.div>

            {/* Your Wedding Vision */}
            <div className="space-y-8">
              <h3 className="font-playfair text-2xl text-[#2C2C2C] mb-6">
                Your Wedding Vision
              </h3>
              
              <div>
                <label className="block font-inter text-sm font-medium text-[#2C2C2C] mb-4">
                  Event type (select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {eventTypes.map((type) => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.eventType.includes(type)}
                        onChange={() => handleCheckboxChange('eventType', type)}
                        className="w-4 h-4 text-[#D4A574] border-gray-300 rounded focus:ring-[#D4A574]"
                      />
                      <span className="font-inter text-sm text-[#2C2C2C]">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-inter text-sm font-medium text-[#2C2C2C] mb-2">
                    Approximate guest count
                  </label>
                  <input
                    type="text"
                    value={formData.guestCount}
                    onChange={(e) => handleInputChange('guestCount', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A574]"
                    placeholder="e.g., 50-100, 200+, Intimate (under 50)"
                  />
                </div>

                <div>
                  <label className="block font-inter text-sm font-medium text-[#2C2C2C] mb-2">
                    Are you looking for photography, videography, or both?
                  </label>
                  <div className="space-y-2">
                    {servicesNeeded.map((service) => (
                      <label key={service} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.servicesNeeded.includes(service)}
                          onChange={() => handleCheckboxChange('servicesNeeded', service)}
                          className="w-4 h-4 text-[#D4A574] border-gray-300 rounded focus:ring-[#D4A574]"
                        />
                        <span className="font-inter text-sm text-[#2C2C2C]">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-inter text-sm font-medium text-[#2C2C2C] mb-2">
                  Any cultural or religious ceremonies we should know about?
                </label>
                <textarea
                  value={formData.culturalCeremonies}
                  onChange={(e) => handleInputChange('culturalCeremonies', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A574]"
                  placeholder="Tell us about any special traditions, rituals, or ceremonies"
                />
              </div>
            </div>

            {/* Your Investment Range */}
            <div className="space-y-8">
              <h3 className="font-playfair text-2xl text-[#2C2C2C] mb-6">
                Your Investment Range
              </h3>
              
              <div>
                <label className="block font-inter text-sm font-medium text-[#2C2C2C] mb-4">
                  Budget selection
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {budgetOptions.map((budget) => (
                    <label key={budget} className="flex items-center gap-3 cursor-pointer p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <input
                        type="radio"
                        name="budget"
                        value={budget}
                        checked={formData.budget === budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        className="w-4 h-4 text-[#D4A574] border-gray-300 focus:ring-[#D4A574]"
                      />
                      <span className="font-inter text-sm text-[#2C2C2C]">{budget}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-inter text-sm font-medium text-[#2C2C2C] mb-2">
                  What matters most in your investment?
                </label>
                <textarea
                  value={formData.whatMattersMost}
                  onChange={(e) => handleInputChange('whatMattersMost', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A574]"
                  placeholder="Quality, Comprehensive coverage, Quick delivery, etc."
                />
              </div>
            </div>

            {/* Special Considerations */}
            <div className="space-y-8">
              <h3 className="font-playfair text-2xl text-[#2C2C2C] mb-6">
                Special Considerations
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-inter text-sm font-medium text-[#2C2C2C] mb-2">
                    Any accessibility needs or special accommodations?
                  </label>
                  <textarea
                    value={formData.accessibilityNeeds}
                    onChange={(e) => handleInputChange('accessibilityNeeds', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A574]"
                    placeholder="Let us know how we can make your experience comfortable"
                  />
                </div>

                <div>
                  <label className="block font-inter text-sm font-medium text-[#2C2C2C] mb-2">
                    Are you part of the LGBTQ+ community? (We're inclusive and celebrate all love)
                  </label>
                  <textarea
                    value={formData.lgbtqCommunity}
                    onChange={(e) => handleInputChange('lgbtqCommunity', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A574]"
                    placeholder="Share anything you'd like us to know about your identity or community"
                  />
                </div>
              </div>

              <div>
                <label className="block font-inter text-sm font-medium text-[#2C2C2C] mb-2">
                  Any family dynamics or cultural sensitivities we should be aware of?
                </label>
                <textarea
                  value={formData.familyDynamics}
                  onChange={(e) => handleInputChange('familyDynamics', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A574]"
                  placeholder="Help us understand your family situation and any important considerations"
                />
              </div>

              <div>
                <label className="block font-inter text-sm font-medium text-[#2C2C2C] mb-2">
                  How did you hear about us?
                </label>
                <input
                  type="text"
                  value={formData.howDidYouHear}
                  onChange={(e) => handleInputChange('howDidYouHear', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A574]"
                  placeholder="Social media, friend referral, Google search, etc."
                />
              </div>
            </div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button
                type="submit"
                className="bg-luxury-accent hover:bg-luxury-accent/90 text-white px-12 py-4 font-interface text-sm tracking-wider uppercase transition-all duration-300 rounded-md shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Our Story
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
      </section>

      {/* Consultation Booking */}
      <section className="py-20 bg-luxury-accent">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="font-primary text-3xl md:text-4xl text-luxury-primary mb-4">
              Book Your Director's Consultation
            </h2>
            <p className="font-interface text-lg text-luxury-primary/70 max-w-2xl mx-auto">
              Ready to meet your potential directors? Book a consultation where we'll discuss your vision and our approach.
            </p>
          </motion.div>

          <div className="space-y-6">
            {consultationTypes.map((consultation, index) => (
              <motion.div
                key={consultation.id}
                onClick={() => setSelectedConsultation(selectedConsultation === consultation.id ? '' : consultation.id)}
                className={`p-6 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedConsultation === consultation.id
                    ? 'border-luxury-accent bg-luxury-accent/5'
                    : 'border-luxury-primary/20 hover:border-luxury-accent/50'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-primary text-xl text-luxury-primary mb-2">
                      {consultation.title}
                    </h3>
                    <p className="font-interface text-base text-luxury-primary/80 mb-4">
                      {consultation.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-interface text-sm text-luxury-accent font-medium">
                      {consultation.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedConsultation && (
              <motion.div 
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button 
                  className="bg-luxury-accent hover:bg-luxury-accent/90 text-white px-8 py-3 font-interface text-sm tracking-wider uppercase transition-all duration-300 rounded-md shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book This Consultation
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="font-primary text-3xl md:text-4xl text-luxury-primary mb-4">
              Reach Your Directors
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '📱', title: 'WhatsApp (Fastest Response)', contact: '+91-XXXXX-XXXXX' },
              { icon: '📞', title: 'Phone', contact: '+91-XXXXX-XXXXX' },
              { icon: '✉️', title: 'Email', contact: 'hello@anaarkaliproductions.com' }
            ].map((contact, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 bg-luxury-accent/5 rounded-lg border border-luxury-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">{contact.icon}</div>
                <h3 className="font-primary text-xl text-luxury-primary mb-2">
                  {contact.title}
                </h3>
                <p className="font-interface text-base text-luxury-primary/80">
                  {contact.contact}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-primary text-2xl text-luxury-primary mb-8">
              Office Locations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { location: 'Delhi/NCR: Available for in-person meetings' },
                { location: 'Destination: We travel for your love story' }
              ].map((office, index) => (
                <motion.div 
                  key={index}
                  className="p-4 bg-luxury-accent/5 rounded-lg border border-luxury-primary/10"
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl mb-2">📍</div>
                  <p className="font-interface text-base text-luxury-primary/80">
                    {office.location}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-luxury-accent">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#2C2C2C] mb-4">
              What Happens After You Reach Out
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="font-playfair text-xl text-[#2C2C2C] mb-4">
                Within 24 hours:
              </h3>
              <ul className="space-y-2">
                <li className="font-inter text-base text-[#2C2C2C]/80 flex items-start gap-3">
                  <span className="text-[#D4A574] mt-1">✅</span>
                  We'll review your love story details
                </li>
                <li className="font-inter text-base text-[#2C2C2C]/80 flex items-start gap-3">
                  <span className="text-[#D4A574] mt-1">✅</span>
                  Send you a personalized response (not a template)
                </li>
                <li className="font-inter text-base text-[#2C2C2C]/80 flex items-start gap-3">
                  <span className="text-[#D4A574] mt-1">✅</span>
                  Schedule your consultation at your convenience
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="font-playfair text-xl text-[#2C2C2C] mb-4">
                During your consultation:
              </h3>
              <ul className="space-y-2">
                <li className="font-inter text-base text-[#2C2C2C]/80 flex items-start gap-3">
                  <span className="text-[#D4A574] mt-1">✅</span>
                  We'll share our vision for your wedding film
                </li>
                <li className="font-inter text-base text-[#2C2C2C]/80 flex items-start gap-3">
                  <span className="text-[#D4A574] mt-1">✅</span>
                  Show you examples of similar love stories we've told
                </li>
                <li className="font-inter text-base text-[#2C2C2C]/80 flex items-start gap-3">
                  <span className="text-[#D4A574] mt-1">✅</span>
                  Discuss investment options that work for your budget
                </li>
                <li className="font-inter text-base text-[#2C2C2C]/80 flex items-start gap-3">
                  <span className="text-[#D4A574] mt-1">✅</span>
                  Answer all your questions (and we have some for you too!)
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="font-playfair text-xl text-[#2C2C2C] mb-4">
                If we're a perfect match:
              </h3>
              <ul className="space-y-2">
                <li className="font-inter text-base text-[#2C2C2C]/80 flex items-start gap-3">
                  <span className="text-[#D4A574] mt-1">✅</span>
                  We'll send you a detailed proposal within 48 hours
                </li>
                <li className="font-inter text-base text-[#2C2C2C]/80 flex items-start gap-3">
                  <span className="text-[#D4A574] mt-1">✅</span>
                  Reserve your wedding date immediately upon agreement
                </li>
                <li className="font-inter text-base text-[#2C2C2C]/80 flex items-start gap-3">
                  <span className="text-[#D4A574] mt-1">✅</span>
                  Begin the pre-production planning process
                </li>
                <li className="font-inter text-base text-[#2C2C2C]/80 flex items-start gap-3">
                  <span className="text-[#D4A574] mt-1">✅</span>
                  Welcome you to the Anaarkali family
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#2C2C2C] mb-4">
              Questions Before You Begin
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-luxury-accent rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-inter text-lg text-[#2C2C2C]">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[#D4A574] transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="font-inter text-base text-[#2C2C2C]/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-luxury-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="font-primary text-3xl md:text-4xl text-white mb-6">
              Your Love Story is Waiting
            </h2>
            <p className="font-interface text-lg text-white/80 mb-8 leading-relaxed">
              Don't let another day pass without beginning the conversation about your wedding film. Great cinema starts with great planning.
            </p>
            <motion.button 
              className="bg-luxury-accent hover:bg-luxury-accent/90 text-white px-12 py-4 font-interface text-lg tracking-wider uppercase transition-all duration-300 rounded-md shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Begin Your Story
            </motion.button>
            <p className="font-interface text-sm text-white/60 mt-6">
              Remember: We only take on a limited number of weddings each year. If you've found us, and we speak to your heart, let's talk.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
