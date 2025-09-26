const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://wtyjpfypvyulpnbdqapw.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0eWpwZnlwdnl1bHBuYmRxYXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3MTU1NjUsImV4cCI6MjA3NDI5MTU2NX0.iu0CvcWhUo2uuial_NB5luoK0FCF1_E13BaPfWfdHqg'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function testContactForm() {
  console.log('🧪 Testing Contact Form Submission...')
  
  const dummyContactForm = {
    name: 'John & Jane Doe',
    email: 'john.jane@example.com',
    phone: '+91 98765 43210',
    wedding_date: '2024-12-15',
    venue: 'Grand Palace Hotel, Mumbai',
    guest_count: '150-200',
    budget_range: '₹8-12 lakhs',
    services_interested: ['Photography', 'Videography'],
    message: `Love Story: We met in college during our engineering days and have been together for 5 years.

Important to You: Family traditions and capturing candid moments

Dream Film Description: Romantic, cinematic, with traditional Indian elements

Event Type: Traditional, Multi-day celebration

Cultural Ceremonies: Mehendi, Sangeet, Haldi, Wedding, Reception

What Matters Most: Authentic emotions and family connections

Accessibility Needs: None

LGBTQ+ Community: N/A

Family Dynamics: Large joint families, very traditional

How Did You Hear: Google search`,
    preferred_contact: 'email',
    timeline: 'Planning for December 2024',
    how_did_you_hear: 'Google search'
  }

  try {
    const { data, error } = await supabase
      .from('contact_forms')
      .insert([dummyContactForm])
      .select()

    if (error) {
      console.error('❌ Contact Form Error:', error)
      return false
    } else {
      console.log('✅ Contact Form Success:', data[0])
      return true
    }
  } catch (err) {
    console.error('❌ Contact Form Exception:', err)
    return false
  }
}

async function testConsultationBooking() {
  console.log('\n🧪 Testing Consultation Booking...')
  
  const dummyConsultationBooking = {
    name: 'Priya & Arjun Singh',
    email: 'priya.arjun@example.com',
    phone: '+91 87654 32109',
    consultation_type: 'virtual',
    preferred_date: '2024-03-15',
    preferred_time: '15:30:00',
    timezone: 'Asia/Kolkata',
    wedding_date: '2024-08-20',
    budget_range: '₹5-8 lakhs',
    message: 'We would like to discuss our destination wedding in Goa. Looking for a comprehensive package including pre-wedding shoots.',
    status: 'pending'
  }

  try {
    const { data, error } = await supabase
      .from('consultation_bookings')
      .insert([dummyConsultationBooking])
      .select()

    if (error) {
      console.error('❌ Consultation Booking Error:', error)
      return false
    } else {
      console.log('✅ Consultation Booking Success:', data[0])
      return true
    }
  } catch (err) {
    console.error('❌ Consultation Booking Exception:', err)
    return false
  }
}

async function testDataRetrieval() {
  console.log('\n🧪 Testing Data Retrieval...')
  
  try {
    // Test contact forms retrieval
    const { data: contactForms, error: contactError } = await supabase
      .from('contact_forms')
      .select('*')
      .limit(5)

    if (contactError) {
      console.error('❌ Contact Forms Retrieval Error:', contactError)
    } else {
      console.log(`✅ Retrieved ${contactForms.length} contact form(s)`)
    }

    // Test consultation bookings retrieval
    const { data: consultations, error: consultationError } = await supabase
      .from('consultation_bookings')
      .select('*')
      .limit(5)

    if (consultationError) {
      console.error('❌ Consultation Bookings Retrieval Error:', consultationError)
    } else {
      console.log(`✅ Retrieved ${consultations.length} consultation booking(s)`)
    }

  } catch (err) {
    console.error('❌ Data Retrieval Exception:', err)
  }
}

async function runTests() {
  console.log('🚀 Starting Supabase Integration Tests...\n')
  
  // Test contact form submission
  const contactFormSuccess = await testContactForm()
  
  // Test consultation booking
  const consultationSuccess = await testConsultationBooking()
  
  // Test data retrieval
  await testDataRetrieval()
  
  console.log('\n📊 Test Results Summary:')
  console.log(`Contact Form: ${contactFormSuccess ? '✅ PASS' : '❌ FAIL'}`)
  console.log(`Consultation Booking: ${consultationSuccess ? '✅ PASS' : '❌ FAIL'}`)
  
  if (contactFormSuccess && consultationSuccess) {
    console.log('\n🎉 All tests passed! Supabase integration is working correctly.')
  } else {
    console.log('\n⚠️  Some tests failed. Please check your Supabase setup.')
    console.log('\n💡 Make sure you have:')
    console.log('   1. Created the database tables using the schema.sql')
    console.log('   2. Set up the correct environment variables')
    console.log('   3. Configured Row Level Security policies')
  }
}

// Run the tests
runTests().catch(console.error)
