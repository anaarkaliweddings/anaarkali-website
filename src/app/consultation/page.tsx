'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useConsultationBookingSubmission } from '@/lib/hooks/useFormSubmission'

export default function ConsultationBooking() {
  const consultationBooking = useConsultationBookingSubmission()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consultationType: '' as 'phone' | 'video' | 'in-person' | '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [selectedCountryCode, setSelectedCountryCode] = useState('+91')

  const countryCodes = [
    { code: '+91', country: 'India' },
    { code: '+1', country: 'USA' },
    { code: '+44', country: 'UK' },
    { code: '+61', country: 'Australia' },
    { code: '+971', country: 'UAE' }
  ]

  const consultationTypes = [
    { id: 'phone', label: 'Phone Call', description: 'Traditional phone consultation' },
    { id: 'video', label: 'Video Meeting', description: 'Online video call via Zoom/Google Meet' },
    { id: 'in-person', label: 'In-Person Meeting', description: 'Face-to-face meeting at our studio' }
  ]

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
  ]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
    }

    if (!formData.consultationType) {
      newErrors.consultationType = 'Please select a consultation type'
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date'
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred time'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    // Ensure consultation_type is valid
    if (!formData.consultationType || !['phone', 'video', 'in-person'].includes(formData.consultationType)) {
      setErrors(prev => ({ ...prev, consultationType: 'Please select a consultation type' }))
      return
    }

    try {
      const fullPhoneNumber = `${selectedCountryCode}${formData.phone}`
      
      await consultationBooking.submitBooking({
        name: formData.name,
        email: formData.email,
        phone: fullPhoneNumber,
        consultation_type: formData.consultationType as 'phone' | 'video' | 'in-person',
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        message: formData.message || '',
        status: 'pending'
      })

      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        consultationType: '',
        preferredDate: '',
        preferredTime: '',
        message: ''
      })
      setSelectedCountryCode('+91')
      setErrors({})
    } catch (error) {
      console.error('Error submitting consultation booking:', error)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-luxury-accent">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-primary-bold text-4xl md:text-5xl text-luxury-primary mb-6">
              Book Your <span className="font-highlight">Consultation</span>
            </h1>
            <p className="font-primary text-xl text-luxury-primary/80 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your vision and how we can bring your love story to life. Choose your preferred consultation method and time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Consultation Booking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Name */}
            <div>
              <label className="block font-primary-medium text-luxury-primary mb-2">
                Full Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg font-primary text-sm focus:outline-none focus:ring-2 focus:ring-luxury-accent focus:border-luxury-accent transition-all duration-300 ${
                  errors.name ? 'border-luxury-primary' : 'border-luxury-primary/20'
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="text-luxury-primary text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block font-primary-medium text-luxury-primary mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg font-primary text-sm focus:outline-none focus:ring-2 focus:ring-luxury-accent focus:border-luxury-accent transition-all duration-300 ${
                  errors.email ? 'border-luxury-primary' : 'border-luxury-primary/20'
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-luxury-primary text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block font-primary-medium text-luxury-primary mb-2">
                Phone Number *
              </label>
              <div className="flex">
                <select
                  value={selectedCountryCode}
                  onChange={(e) => setSelectedCountryCode(e.target.value)}
                  className="px-3 py-3 border border-luxury-primary/20 border-r-0 rounded-l-lg font-primary text-sm focus:outline-none focus:ring-2 focus:ring-luxury-accent focus:border-luxury-accent transition-all duration-300 bg-white"
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.code} {country.country}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`flex-1 px-4 py-3 border border-luxury-primary/20 rounded-r-lg font-primary text-sm focus:outline-none focus:ring-2 focus:ring-luxury-accent focus:border-luxury-accent transition-all duration-300 ${
                    errors.phone ? 'border-luxury-primary' : ''
                  }`}
                  placeholder="Enter your phone number"
                />
              </div>
              {errors.phone && (
                <p className="text-luxury-primary text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Consultation Type */}
            <div>
              <label className="block font-primary-medium text-luxury-primary mb-4">
                Consultation Type *
              </label>
              <div className="space-y-3">
                {consultationTypes.map((type) => (
                  <motion.div
                    key={type.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                      formData.consultationType === type.id
                        ? 'border-luxury-primary bg-luxury-primary/5'
                        : 'border-luxury-primary/20 hover:border-luxury-primary/50'
                    }`}
                    onClick={() => handleInputChange('consultationType', type.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-primary-bold text-luxury-primary">
                          {type.label}
                        </h3>
                        <p className="font-primary text-sm text-luxury-primary/70">
                          {type.description}
                        </p>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 ${
                        formData.consultationType === type.id
                          ? 'border-luxury-primary bg-luxury-primary'
                          : 'border-luxury-primary/30'
                      }`}>
                        {formData.consultationType === type.id && (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              {errors.consultationType && (
                <p className="text-luxury-primary text-sm mt-2">{errors.consultationType}</p>
              )}
            </div>

            {/* Preferred Date */}
            <div>
              <label className="block font-primary-medium text-luxury-primary mb-2">
                Preferred Date *
              </label>
              <input
                type="date"
                value={formData.preferredDate}
                onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className={`w-full px-4 py-3 border rounded-lg font-primary text-sm focus:outline-none focus:ring-2 focus:ring-luxury-accent focus:border-luxury-accent transition-all duration-300 ${
                  errors.preferredDate ? 'border-luxury-primary' : 'border-luxury-primary/20'
                }`}
              />
              {errors.preferredDate && (
                <p className="text-luxury-primary text-sm mt-1">{errors.preferredDate}</p>
              )}
            </div>

            {/* Preferred Time */}
            <div>
              <label className="block font-primary-medium text-luxury-primary mb-2">
                Preferred Time *
              </label>
              <select
                value={formData.preferredTime}
                onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg font-primary text-sm focus:outline-none focus:ring-2 focus:ring-luxury-accent focus:border-luxury-accent transition-all duration-300 ${
                  errors.preferredTime ? 'border-luxury-primary' : 'border-luxury-primary/20'
                }`}
              >
                <option value="">Select a time slot</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              {errors.preferredTime && (
                <p className="text-luxury-primary text-sm mt-1">{errors.preferredTime}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block font-primary-medium text-luxury-primary mb-2">
                Additional Message (Optional)
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-luxury-primary/20 rounded-lg font-primary text-sm focus:outline-none focus:ring-2 focus:ring-luxury-accent focus:border-luxury-accent transition-all duration-300 resize-none"
                placeholder="Tell us about your wedding plans, specific questions, or anything else you'd like us to know..."
              />
            </div>

            {/* Success/Error Messages */}
            <AnimatePresence>
              {consultationBooking.isSuccess && (
                <motion.div
                  className="p-4 bg-luxury-accent/30 border border-luxury-primary/20 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <p className="text-luxury-primary font-primary-medium">
                    Thank you! Your consultation request has been submitted successfully. We'll contact you within 24 hours to confirm your appointment.
                  </p>
                </motion.div>
              )}

              {consultationBooking.error && (
                <motion.div
                  className="p-4 bg-luxury-accent/30 border border-luxury-primary/20 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <p className="text-luxury-primary font-primary-medium">
                    {consultationBooking.error}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={consultationBooking.isSubmitting}
              className="w-full bg-luxury-primary hover:bg-luxury-primary/90 disabled:bg-luxury-primary/50 text-white px-8 py-4 font-primary-bold text-lg tracking-wider uppercase transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {consultationBooking.isSubmitting ? 'Submitting...' : 'Book Consultation'}
            </motion.button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
