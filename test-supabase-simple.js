const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://wtyjpfypvyulpnbdqapw.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0eWpwZnlwdnl1bHBuYmRxYXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3MTU1NjUsImV4cCI6MjA3NDI5MTU2NX0.iu0CvcWhUo2uuial_NB5luoK0FCF1_E13BaPfWfdHqg'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function checkTables() {
  console.log('🔍 Checking if tables exist...')
  
  try {
    // Try to query the tables to see if they exist
    const { data: contactTables, error: contactError } = await supabase
      .from('contact_forms')
      .select('count', { count: 'exact' })
      .limit(0)

    const { data: consultationTables, error: consultationError } = await supabase
      .from('consultation_bookings')
      .select('count', { count: 'exact' })
      .limit(0)

    if (contactError) {
      console.log('❌ contact_forms table:', contactError.message)
    } else {
      console.log('✅ contact_forms table exists')
    }

    if (consultationError) {
      console.log('❌ consultation_bookings table:', consultationError.message)
    } else {
      console.log('✅ consultation_bookings table exists')
    }

    return !contactError && !consultationError
  } catch (err) {
    console.error('❌ Error checking tables:', err)
    return false
  }
}

async function testRLSPolicies() {
  console.log('\n🔐 Testing RLS Policies...')
  
  // Test a simple insert to see what happens
  const testData = {
    name: 'Test User',
    email: 'test@test.com',
    message: 'Simple test message'
  }

  const { data, error } = await supabase
    .from('contact_forms')
    .insert([testData])
    .select()

  if (error) {
    console.log('❌ RLS Policy Error:', error.code, error.message)
    
    if (error.code === '42501') {
      console.log('\n💡 RLS is blocking the insert. This means:')
      console.log('   1. The tables exist ✅')
      console.log('   2. RLS is enabled ✅') 
      console.log('   3. But the policies are too restrictive ❌')
      console.log('\n🔧 Fix: Run this SQL in Supabase SQL Editor:')
      console.log('\n   -- Temporarily allow all inserts')
      console.log('   DROP POLICY IF EXISTS "Public can insert contact forms" ON contact_forms;')
      console.log('   CREATE POLICY "Allow all inserts" ON contact_forms FOR INSERT WITH CHECK (true);')
      console.log('   ')
      console.log('   DROP POLICY IF EXISTS "Public can insert consultation bookings" ON consultation_bookings;')
      console.log('   CREATE POLICY "Allow all consultation inserts" ON consultation_bookings FOR INSERT WITH CHECK (true);')
    }
  } else {
    console.log('✅ Insert successful!', data)
  }
}

async function runSimpleTest() {
  console.log('🧪 Simple Supabase Connection Test\n')
  
  const tablesExist = await checkTables()
  
  if (tablesExist) {
    await testRLSPolicies()
  } else {
    console.log('\n❌ Tables do not exist. Please run the SQL schema first.')
    console.log('📋 Steps:')
    console.log('   1. Go to https://wtyjpfypvyulpnbdqapw.supabase.co')
    console.log('   2. Open SQL Editor')
    console.log('   3. Run the contents of supabase/fixed-schema.sql')
  }
}

runSimpleTest().catch(console.error)
