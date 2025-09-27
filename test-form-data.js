// Test the exact form data structure that the form submits
const testFormData = {
  name: 'Test User',
  email: 'test@example.com',
  phone: '+91 9876543210',
  wedding_date: '2024-12-25',
  venue: 'Test Venue',
  guest_count: '100-150',
  budget_range: '₹2-5 Lakhs',
  services_interested: ['Photography', 'Videography'],
  message: `Love Story: This is a test love story

Important to You: This is what's important

Dream Film Description: This is the dream film description

Event Type: Wedding

Cultural Ceremonies: Hindu ceremony

What Matters Most: Love and family

Accessibility Needs: None

LGBTQ+ Community: No

Family Dynamics: None

How Did You Hear: Social Media`,
  timeline: 'Not specified',
  how_did_you_hear: 'Social Media'
}

console.log('Form data structure test:')
console.log(JSON.stringify(testFormData, null, 2))

// Check for any undefined or null values that might cause issues
console.log('\nChecking for problematic values:')
Object.entries(testFormData).forEach(([key, value]) => {
  if (value === undefined || value === null || value === '') {
    console.log(`⚠️  ${key}: ${value}`)
  } else {
    console.log(`✅ ${key}: OK`)
  }
})
