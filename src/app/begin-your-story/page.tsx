'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useContactFormSubmission, useConsultationBookingSubmission } from '@/lib/hooks/useFormSubmission'

export default function BeginYourStory() {
  // Form submission hooks
  const contactForm = useContactFormSubmission()
  const consultationBooking = useConsultationBookingSubmission()
  
  const [formData, setFormData] = useState({
    names: '',
    email: '',
    phone: '',
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
  
  // Form validation states
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [selectedCountryCode, setSelectedCountryCode] = useState('+91')
  const [locationSuggestions, setLocationSuggestions] = useState<string[]>([])
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false)
  
  // Consultation booking form data
  const [consultationFormData, setConsultationFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consultation_type: 'virtual' as 'virtual' | 'in_person',
    preferred_date: '',
    preferred_time: '',
    timezone: '',
    wedding_date: '',
    budget_range: '',
    message: ''
  })

  const eventTypes = ['Traditional', 'Modern', 'Destination', 'Court marriage', 'Multi-day celebration']
  const servicesNeeded = ['Photography', 'Videography', 'Aerial Coverage', 'All of the above']
  const budgetOptions = ['₹2-5 lakhs', '₹5-8 lakhs', '₹8-12 lakhs', '₹12+ lakhs', 'Let\'s discuss']
  
  // Country codes for phone number dropdown
  const countryCodes = [
    { code: '+91', country: 'India', flag: '🇮🇳' },
    { code: '+1', country: 'USA/Canada', flag: '🇺🇸' },
    { code: '+44', country: 'UK', flag: '🇬🇧' },
    { code: '+61', country: 'Australia', flag: '🇦🇺' },
    { code: '+971', country: 'UAE', flag: '🇦🇪' },
    { code: '+65', country: 'Singapore', flag: '🇸🇬' },
    { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
    { code: '+66', country: 'Thailand', flag: '🇹🇭' },
    { code: '+86', country: 'China', flag: '🇨🇳' },
    { code: '+81', country: 'Japan', flag: '🇯🇵' },
    { code: '+82', country: 'South Korea', flag: '🇰🇷' },
    { code: '+49', country: 'Germany', flag: '🇩🇪' },
    { code: '+33', country: 'France', flag: '🇫🇷' },
    { code: '+39', country: 'Italy', flag: '🇮🇹' },
    { code: '+34', country: 'Spain', flag: '🇪🇸' },
    { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
    { code: '+41', country: 'Switzerland', flag: '🇨🇭' },
    { code: '+46', country: 'Sweden', flag: '🇸🇪' },
    { code: '+47', country: 'Norway', flag: '🇳🇴' },
    { code: '+45', country: 'Denmark', flag: '🇩🇰' }
  ]
  
  // Popular Indian cities for location autocomplete
  const indianCities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad',
    'Jaipur', 'Surat', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Bhopal',
    'Visakhapatnam', 'Pimpri-Chinchwad', 'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana',
    'Agra', 'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Kalyan-Dombivali', 'Vasai-Virar',
    'Varanasi', 'Srinagar', 'Aurangabad', 'Navi Mumbai', 'Solapur', 'Vijayawada',
    'Kolhapur', 'Amritsar', 'Nashik', 'Sangli', 'Malegaon', 'Ulhasnagar', 'Jalgaon',
    'Latur', 'Dhule', 'Ahmednagar', 'Ichalkaranji', 'Parbhani', 'Jalna', 'Bhusawal',
    'Panvel', 'Satara', 'Beed', 'Yavatmal', 'Kamptee', 'Gondia', 'Barshi', 'Achalpur',
    'Osmanabad', 'Nanded-Waghala', 'Sangamner', 'Malegaon', 'Lonavla', 'Deolali',
    'Udgir', 'Shegaon', 'Wani', 'Umarkhed', 'Warora', 'Pusad', 'Sangole', 'Malkapur',
    'Amalner', 'Dhule', 'Parli', 'Shirpur-Warwade', 'Shirur', 'Shrigonda', 'Raver',
    'Mukhed', 'Rajura', 'Vadgaon Kasba', 'Tirora', 'Savda', 'Uran', 'Uran Islampur',
    'Manmad', 'Lasalgaon', 'Deolali Pravara', 'Aurangabad', 'Gangapur', 'Vaijapur',
    'Sillod', 'Phulambri', 'Kannad', 'Paithan', 'Pathri', 'Jalna', 'Ambad', 'Ghansawangi',
    'Shendurjana', 'Sailu', 'Mantha', 'Partur', 'Jintur', 'Bhokardan', 'Soyagaon',
    'Niphad', 'Yevla', 'Umarga', 'Tuljapur', 'Osmnabad', 'Kallam', 'Washi', 'Kalamb',
    'Barshi Takli', 'Latur', 'Ahmadpur', 'Udgir', 'Nilanga', 'Ausa', 'Chakur',
    'Shirur-Anantpal', 'Ahmadpur', 'Jalkot', 'Murud', 'Loha', 'Renapur', 'Chakur',
    'Shirur-Anantpal', 'Ahmadpur', 'Jalkot', 'Murud', 'Loha', 'Renapur', 'Chakur'
  ]
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

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhoneNumber = (phone: string, countryCode: string): boolean => {
    // Remove spaces and special characters
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '')
    
    // Basic validation for different country codes (without the + prefix since we're validating the number part only)
    switch (countryCode) {
      case '+91': // India - 10 digits starting with 6-9
        return /^[6-9]\d{9}$/.test(cleanPhone)
      case '+1': // USA/Canada - 10 digits
        return /^[2-9]\d{2}[2-9]\d{2}\d{4}$/.test(cleanPhone)
      case '+44': // UK - 10-11 digits
        return /^[1-9]\d{8,9}$/.test(cleanPhone)
      case '+971': // UAE - 9 digits
        return /^[5-9]\d{8}$/.test(cleanPhone)
      case '+65': // Singapore - 8 digits
        return /^[689]\d{7}$/.test(cleanPhone)
      case '+60': // Malaysia - 9-10 digits
        return /^[1-9]\d{7,8}$/.test(cleanPhone)
      case '+66': // Thailand - 9 digits
        return /^[689]\d{8}$/.test(cleanPhone)
      case '+86': // China - 11 digits
        return /^1[3-9]\d{9}$/.test(cleanPhone)
      case '+81': // Japan - 10-11 digits
        return /^[789]\d{9,10}$/.test(cleanPhone)
      case '+82': // South Korea - 10-11 digits
        return /^1[0-9]\d{7,8}$/.test(cleanPhone)
      default:
        // Generic validation: 7-15 digits
        return /^\d{7,15}$/.test(cleanPhone)
    }
  }

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  // Date formatting function to convert various date formats to YYYY-MM-DD
  const formatDateForDatabase = (dateString: string): string | undefined => {
    if (!dateString || dateString.trim() === '') return undefined
    
    const trimmed = dateString.trim()
    
    // If it's already in YYYY-MM-DD format, return as is
    if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
      return trimmed
    }
    
    // If it's in MM/DD/YYYY format
    if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(trimmed)) {
      const [month, day, year] = trimmed.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }
    
    // If it's in DD/MM/YYYY format
    if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(trimmed)) {
      const [day, month, year] = trimmed.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }
    
    // If it's in "Month DD, YYYY" format - parse manually to avoid timezone issues
    const monthDayYearMatch = trimmed.match(/^([A-Za-z]+) (\d{1,2}), (\d{4})$/)
    if (monthDayYearMatch) {
      const [, monthName, day, year] = monthDayYearMatch
      const monthMap: { [key: string]: string } = {
        'january': '01', 'jan': '01',
        'february': '02', 'feb': '02',
        'march': '03', 'mar': '03',
        'april': '04', 'apr': '04',
        'may': '05',
        'june': '06', 'jun': '06',
        'july': '07', 'jul': '07',
        'august': '08', 'aug': '08',
        'september': '09', 'sep': '09', 'sept': '09',
        'october': '10', 'oct': '10',
        'november': '11', 'nov': '11',
        'december': '12', 'dec': '12'
      }
      const monthNum = monthMap[monthName.toLowerCase()]
      if (monthNum) {
        return `${year}-${monthNum}-${day.padStart(2, '0')}`
      }
    }
    
    // If it's in "Month YYYY" format, assume first day of month
    const monthYearMatch = trimmed.match(/^([A-Za-z]+) (\d{4})$/)
    if (monthYearMatch) {
      const [, monthName, year] = monthYearMatch
      const monthMap: { [key: string]: string } = {
        'january': '01', 'jan': '01',
        'february': '02', 'feb': '02',
        'march': '03', 'mar': '03',
        'april': '04', 'apr': '04',
        'may': '05',
        'june': '06', 'jun': '06',
        'july': '07', 'jul': '07',
        'august': '08', 'aug': '08',
        'september': '09', 'sep': '09', 'sept': '09',
        'october': '10', 'oct': '10',
        'november': '11', 'nov': '11',
        'december': '12', 'dec': '12'
      }
      const monthNum = monthMap[monthName.toLowerCase()]
      if (monthNum) {
        return `${year}-${monthNum}-01`
      }
    }
    
    // If it's in "Month DD" format, assume current year
    const monthDayMatch = trimmed.match(/^([A-Za-z]+) (\d{1,2})$/)
    if (monthDayMatch) {
      const [, monthName, day] = monthDayMatch
      const currentYear = new Date().getFullYear()
      const monthMap: { [key: string]: string } = {
        'january': '01', 'jan': '01',
        'february': '02', 'feb': '02',
        'march': '03', 'mar': '03',
        'april': '04', 'apr': '04',
        'may': '05',
        'june': '06', 'jun': '06',
        'july': '07', 'jul': '07',
        'august': '08', 'aug': '08',
        'september': '09', 'sep': '09', 'sept': '09',
        'october': '10', 'oct': '10',
        'november': '11', 'nov': '11',
        'december': '12', 'dec': '12'
      }
      const monthNum = monthMap[monthName.toLowerCase()]
      if (monthNum) {
        return `${currentYear}-${monthNum}-${day.padStart(2, '0')}`
      }
    }
    
    // If all else fails, try to parse as a general date
    try {
      const date = new Date(trimmed)
      if (!isNaN(date.getTime())) {
        // Use local date to avoid timezone issues
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        return `${year}-${month}-${day}`
      }
    } catch (e) {
      // Return undefined if we can't parse it
    }
    
    return undefined
  }

  // Date validation function
  const validateDate = (dateString: string): boolean => {
    if (!dateString || dateString.trim() === '') return false
    
    const formatted = formatDateForDatabase(dateString)
    if (!formatted) return false
    
    // Check if the date is in the future (weddings are typically in the future)
    const date = new Date(formatted)
    const today = new Date()
    today.setHours(0, 0, 0, 0) // Reset time to start of day
    
    return date >= today
  }

  const handleLocationChange = (value: string) => {
    setFormData(prev => ({ ...prev, location: value }))
    setShowLocationSuggestions(true)
    
    if (value.length > 1) {
      const filtered = indianCities.filter(city => 
        city.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 5)
      setLocationSuggestions(filtered)
    } else {
      setLocationSuggestions([])
    }
    
    if (errors.location) {
      setErrors(prev => ({ ...prev, location: '' }))
    }
  }

  const selectLocation = (location: string) => {
    setFormData(prev => ({ ...prev, location }))
    setShowLocationSuggestions(false)
    setLocationSuggestions([])
  }

  const handleCheckboxChange = (field: string, value: string) => {
    setFormData(prev => {
      const currentValues = prev[field as keyof typeof prev] as string[]
      
      // Special handling for "All of the above" in services
      if (field === 'servicesNeeded' && value === 'All of the above') {
        if (currentValues.includes('All of the above')) {
          // If "All of the above" is being unchecked, uncheck everything
          return { ...prev, [field]: [] }
        } else {
          // If "All of the above" is being checked, check all services
          return { ...prev, [field]: ['Photography', 'Videography', 'Aerial Coverage', 'All of the above'] }
        }
      }
      
      // If any individual service is unchecked, also uncheck "All of the above"
      if (field === 'servicesNeeded' && value !== 'All of the above') {
        const newValues = currentValues.includes(value)
          ? currentValues.filter(item => item !== value)
          : [...currentValues, value]
        
        // Remove "All of the above" if any individual service is unchecked
        const filteredValues = newValues.filter(item => item !== 'All of the above')
        
        // If all individual services are selected, add "All of the above"
        const individualServices = ['Photography', 'Videography', 'Aerial Coverage']
        const allIndividualSelected = individualServices.every(service => filteredValues.includes(service))
        
        return { 
          ...prev, 
          [field]: allIndividualSelected 
            ? [...filteredValues, 'All of the above']
            : filteredValues
        }
      }
      
      // Default checkbox behavior for other fields
      return {
        ...prev,
        [field]: currentValues.includes(value)
          ? currentValues.filter(item => item !== value)
          : [...currentValues, value]
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form fields
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.names.trim()) {
      newErrors.names = 'Names are required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!validatePhoneNumber(formData.phone, selectedCountryCode)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    if (!formData.weddingDate.trim()) {
      newErrors.weddingDate = 'Wedding date is required'
    } else if (!validateDate(formData.weddingDate)) {
      newErrors.weddingDate = 'Please enter a valid future date (e.g., March 24, 2024 or 2024-03-24)'
    }
    
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required'
    }
    
    if (!formData.loveStory.trim()) {
      newErrors.loveStory = 'Love story is required'
    }
    
    if (!formData.importantToYou.trim() || formData.importantToYou.trim() === 'Nil') {
      newErrors.importantToYou = 'This field is required'
    }
    
    if (!formData.dreamFilmWord.trim() || formData.dreamFilmWord.trim() === 'Nil') {
      newErrors.dreamFilmWord = 'This field is required'
    }
    
    if (formData.eventType.length === 0) {
      newErrors.eventType = 'Please select at least one event type'
    }
    
    if (formData.servicesNeeded.length === 0) {
      newErrors.servicesNeeded = 'Please select at least one service'
    }
    
    if (!formData.budget.trim()) {
      newErrors.budget = 'Budget range is required'
    }
    
    if (!formData.whatMattersMost.trim() || formData.whatMattersMost.trim() === 'Nil') {
      newErrors.whatMattersMost = 'This field is required'
    }
    
    if (!formData.howDidYouHear.trim() || formData.howDidYouHear.trim() === 'Nil') {
      newErrors.howDidYouHear = 'This field is required'
    }
    
    setErrors(newErrors)
    
    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      return
    }
    
    // Transform form data to match database schema
    const submissionData = {
      name: formData.names,
      email: formData.email,
      phone: `${selectedCountryCode} ${formData.phone}`,
      wedding_date: formatDateForDatabase(formData.weddingDate),
      venue: formData.location || undefined,
      guest_count: formData.guestCount || undefined,
      budget_range: formData.budget || undefined,
      services_interested: formData.servicesNeeded,
      message: `
Love Story: ${formData.loveStory}

Important to You: ${formData.importantToYou}

Dream Film Description: ${formData.dreamFilmWord}

Event Type: ${formData.eventType.join(', ')}

Cultural Ceremonies: ${formData.culturalCeremonies}

What Matters Most: ${formData.whatMattersMost}

Accessibility Needs: ${formData.accessibilityNeeds}

LGBTQ+ Community: ${formData.lgbtqCommunity}

Family Dynamics: ${formData.familyDynamics}

How Did You Hear: ${formData.howDidYouHear}
      `.trim(),
      timeline: 'Not specified',
      how_did_you_hear: formData.howDidYouHear
    }

    console.log('Submitting form data:', submissionData)
    
    const result = await contactForm.submitForm(submissionData)
    
    console.log('Form submission result:', result)
    
    if (result.success) {
      // Reset form
      setFormData({
        names: '',
        email: '',
        phone: '',
        weddingDate: '',
        location: '',
        loveStory: '',
        importantToYou: '',
        dreamFilmWord: '',
        eventType: [],
        guestCount: '',
        culturalCeremonies: '',
        servicesNeeded: [],
        budget: '',
        whatMattersMost: '',
        accessibilityNeeds: '',
        lgbtqCommunity: '',
        familyDynamics: '',
        howDidYouHear: ''
      })
      setSelectedCountryCode('+91')
      setErrors({})
    }
  }

  // Note: Consultation booking form to be implemented
  // const handleConsultationSubmit = async (e: React.FormEvent) => { ... }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-luxury-accent">
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
                    className={`w-full px-4 py-3 border rounded-md font-interface text-sm focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.names 
                        ? 'border-red-500 focus:ring-red-200 focus:border-red-500' 
                        : 'border-luxury-primary/20 focus:ring-luxury-accent focus:border-luxury-accent'
                    }`}
                    placeholder="Enter both your names"
                  />
                  {errors.names && (
                    <p className="text-red-500 text-xs mt-1">{errors.names}</p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block font-primary text-sm font-medium text-luxury-primary mb-2">
                    Email address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-md font-primary text-sm focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.email 
                        ? 'border-red-500 focus:ring-red-200 focus:border-red-500' 
                        : 'border-luxury-primary/20 focus:ring-luxury-accent focus:border-luxury-accent'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block font-primary text-sm font-medium text-luxury-primary mb-2">
                    Phone number *
                  </label>
                  <div className="flex">
                    <select
                      value={selectedCountryCode}
                      onChange={(e) => setSelectedCountryCode(e.target.value)}
                      className="px-3 py-3 border border-luxury-primary/20 border-r-0 rounded-l-md font-primary text-sm focus:outline-none focus:ring-2 focus:ring-luxury-accent focus:border-luxury-accent transition-all duration-300 bg-white"
                    >
                      {countryCodes.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.flag} {country.code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`flex-1 px-4 py-3 border rounded-r-md font-primary text-sm focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.phone 
                          ? 'border-red-500 focus:ring-red-200 focus:border-red-500' 
                          : 'border-luxury-primary/20 focus:ring-luxury-accent focus:border-luxury-accent'
                      }`}
                      placeholder="98765 43210"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="block font-primary text-sm font-medium text-luxury-primary mb-2">
                    Wedding date (or approximate) *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.weddingDate}
                    onChange={(e) => handleInputChange('weddingDate', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 border rounded-md font-primary text-sm focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.weddingDate 
                        ? 'border-red-500 focus:ring-red-200 focus:border-red-500' 
                        : 'border-luxury-primary/20 focus:ring-luxury-accent focus:border-luxury-accent'
                    }`}
                    placeholder="Select your wedding date"
                  />
                  {errors.weddingDate && (
                    <p className="text-red-500 text-xs mt-1 font-primary">{errors.weddingDate}</p>
                  )}
                </motion.div>
              </div>

              <div className="relative">
                <label className="block font-primary text-sm font-medium text-luxury-primary mb-2">
                  Primary location/city *
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => handleLocationChange(e.target.value)}
                  onFocus={() => setShowLocationSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowLocationSuggestions(false), 200)}
                  className={`w-full px-4 py-3 border rounded-md font-primary text-sm focus:outline-none focus:ring-2 transition-all duration-300 ${
                    errors.location 
                      ? 'border-red-500 focus:ring-red-200 focus:border-red-500' 
                      : 'border-luxury-primary/20 focus:ring-luxury-accent focus:border-luxury-accent'
                  }`}
                  placeholder="e.g., Delhi, Mumbai, Goa"
                />
                {showLocationSuggestions && locationSuggestions.length > 0 && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-luxury-primary/20 rounded-md shadow-lg max-h-48 overflow-y-auto">
                    {locationSuggestions.map((city, index) => (
                      <div
                        key={index}
                        onClick={() => selectLocation(city)}
                        className="px-4 py-2 hover:bg-luxury-accent/20 cursor-pointer font-primary text-sm text-luxury-primary border-b border-luxury-primary/10 last:border-b-0"
                      >
                        {city}
                      </div>
                    ))}
                  </div>
                )}
                {errors.location && (
                  <p className="text-red-500 text-xs mt-1">{errors.location}</p>
                )}
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
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Success Message */}
              {contactForm.isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-md"
                >
                  <p className="font-primary-medium">Thank you! Your story has been sent successfully.</p>
                  <p className="font-primary text-sm mt-1">We'll be in touch within 24 hours.</p>
                </motion.div>
              )}

              {/* Error Message */}
              {contactForm.error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-md"
                >
                  <p className="font-primary-medium">Oops! Something went wrong.</p>
                  <p className="font-primary text-sm mt-1">{contactForm.error}</p>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={contactForm.isSubmitting}
                className={`px-12 py-4 font-primary text-sm tracking-wider uppercase transition-all duration-300 rounded-md shadow-lg hover:shadow-xl ${
                  contactForm.isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed text-white'
                    : 'bg-red-600 hover:bg-red-700 text-white font-semibold'
                }`}
                whileHover={!contactForm.isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!contactForm.isSubmitting ? { scale: 0.95 } : {}}
              >
                {contactForm.isSubmitting ? 'Sending...' : 'Send Our Story'}
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
              onClick={() => {
                // Scroll to the contact form at the top
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="bg-luxury-accent hover:bg-luxury-accent/90 text-luxury-primary px-12 py-4 font-primary text-lg tracking-wider uppercase transition-all duration-300 rounded-md shadow-lg hover:shadow-xl"
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
