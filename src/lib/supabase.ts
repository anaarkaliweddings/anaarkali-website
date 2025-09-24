import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://wtyjpfypvyulpnbdqapw.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0eWpwZnlwdnl1bHBuYmRxYXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3MTU1NjUsImV4cCI6MjA3NDI5MTU2NX0.iu0CvcWhUo2uuial_NB5luoK0FCF1_E13BaPfWfdHqg'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database Types
export interface ContactFormSubmission {
  id?: string
  created_at?: string
  name: string
  email: string
  phone?: string
  wedding_date?: string
  venue?: string
  guest_count?: string
  budget_range?: string
  services_interested?: string[]
  message: string
  preferred_contact?: 'email' | 'phone' | 'either'
  timeline?: string
  how_did_you_hear?: string
}

export interface ConsultationBooking {
  id?: string
  created_at?: string
  name: string
  email: string
  phone: string
  consultation_type: 'virtual' | 'in_person'
  preferred_date: string
  preferred_time: string
  timezone?: string
  wedding_date?: string
  budget_range?: string
  message?: string
  status?: 'pending' | 'confirmed' | 'completed' | 'cancelled'
}

// Form submission functions
export async function submitContactForm(data: ContactFormSubmission) {
  try {
    const { data: result, error } = await supabase
      .from('contact_forms')
      .insert([data])
      .select()
      .single()

    if (error) {
      console.error('Error submitting contact form:', error)
      throw new Error('Failed to submit contact form')
    }

    return { success: true, data: result }
  } catch (error) {
    console.error('Contact form submission error:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

export async function submitConsultationBooking(data: ConsultationBooking) {
  try {
    const { data: result, error } = await supabase
      .from('consultation_bookings')
      .insert([data])
      .select()
      .single()

    if (error) {
      console.error('Error submitting consultation booking:', error)
      throw new Error('Failed to submit consultation booking')
    }

    return { success: true, data: result }
  } catch (error) {
    console.error('Consultation booking submission error:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// Get all contact form submissions (for admin)
export async function getContactFormSubmissions() {
  try {
    const { data, error } = await supabase
      .from('contact_forms')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching contact forms:', error)
      throw new Error('Failed to fetch contact forms')
    }

    return { success: true, data }
  } catch (error) {
    console.error('Contact forms fetch error:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// Get all consultation bookings (for admin)
export async function getConsultationBookings() {
  try {
    const { data, error } = await supabase
      .from('consultation_bookings')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching consultation bookings:', error)
      throw new Error('Failed to fetch consultation bookings')
    }

    return { success: true, data }
  } catch (error) {
    console.error('Consultation bookings fetch error:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}
