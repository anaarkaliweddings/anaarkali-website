const { createClient } = require('@supabase/supabase-js')

// Use the same credentials as in the app
const supabaseUrl = 'https://wtyjpfypvyulpnbdqapw.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0eWpwZnlwdnl1bHBuYmRxYXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3MTU1NjUsImV4cCI6MjA3NDI5MTU2NX0.iu0CvcWhUo2uuial_NB5luoK0FCF1_E13BaPfWfdHqg'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function testFormSubmission() {
  console.log('🧪 Testing form submission...')
  
  // Test data that matches the form structure
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '+91 9876543210',
    wedding_date: '2024-12-25',
    venue: 'Test Venue',
    guest_count: '100-150',
    budget_range: '₹2-5 Lakhs',
    services_interested: ['Photography', 'Videography'],
    message: 'This is a test message from the form submission test.',
    timeline: '6 months',
    how_did_you_hear: 'Social Media'
  }
  
  try {
    console.log('📤 Submitting test data...')
    console.log('Data:', JSON.stringify(testData, null, 2))
    
    const { data, error } = await supabase
      .from('contact_forms')
      .insert([testData])
      .select()
      .single()
    
    if (error) {
      console.error('❌ Supabase Error:', error)
      console.error('Error details:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      })
      return false
    }
    
    console.log('✅ Success! Form submitted:', data)
    return true
    
  } catch (err) {
    console.error('❌ Exception:', err)
    return false
  }
}

async function checkTableExists() {
  console.log('🔍 Checking if contact_forms table exists...')
  
  try {
    const { data, error } = await supabase
      .from('contact_forms')
      .select('count')
      .limit(1)
    
    if (error) {
      console.error('❌ Table check error:', error)
      return false
    }
    
    console.log('✅ Table exists and is accessible')
    return true
    
  } catch (err) {
    console.error('❌ Table check exception:', err)
    return false
  }
}

async function main() {
  console.log('🚀 Starting Supabase form submission test...\n')
  
  // First check if table exists
  const tableExists = await checkTableExists()
  if (!tableExists) {
    console.log('❌ Table does not exist or is not accessible')
    return
  }
  
  console.log('')
  
  // Then test form submission
  const success = await testFormSubmission()
  
  console.log('')
  if (success) {
    console.log('🎉 All tests passed! Form submission is working.')
  } else {
    console.log('💥 Tests failed. Check the errors above.')
  }
}

main().catch(console.error)
