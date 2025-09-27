'use client'

import { useState } from 'react'
import { submitContactForm, submitConsultationBooking } from '@/lib/supabase'

export default function TestDatabase() {
  const [results, setResults] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const addResult = (message: string) => {
    setResults(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`])
  }

  const testContactForm = async () => {
    setIsLoading(true)
    addResult('🧪 Testing Contact Form...')
    
    const dummyData = {
      name: 'John & Jane Doe',
      email: 'test@example.com',
      phone: '+91 98765 43210',
      wedding_date: '2024-12-15',
      venue: 'Grand Palace Hotel, Mumbai',
      guest_count: '150-200',
      budget_range: '₹8-12 lakhs',
      services_interested: ['Photography', 'Videography'],
      message: 'This is a test submission from the test page.',
      preferred_contact: 'email' as const,
      timeline: 'Testing phase',
      how_did_you_hear: 'Test page'
    }

    try {
      const result = await submitContactForm(dummyData)
      addResult('✅ Contact Form: SUCCESS!')
      addResult(`📄 Data: ${JSON.stringify(result.data, null, 2)}`)
    } catch (error) {
      addResult(`❌ Contact Form: FAILED - ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
    
    setIsLoading(false)
  }

  const testConsultationBooking = async () => {
    setIsLoading(true)
    addResult('🧪 Testing Consultation Booking...')
    
    const dummyData = {
      name: 'Priya & Arjun Singh',
      email: 'consultation@example.com',
      phone: '+91 87654 32109',
      consultation_type: 'virtual' as const,
      preferred_date: '2024-03-15',
      preferred_time: '15:30',
      timezone: 'Asia/Kolkata',
      wedding_date: '2024-08-20',
      budget_range: '₹5-8 lakhs',
      message: 'Test consultation booking from test page.'
    }

    try {
      const result = await submitConsultationBooking(dummyData)
      addResult('✅ Consultation Booking: SUCCESS!')
      addResult(`📄 Data: ${JSON.stringify(result.data, null, 2)}`)
    } catch (error) {
      addResult(`❌ Consultation Booking: FAILED - ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
    
    setIsLoading(false)
  }

  const clearResults = () => {
    setResults([])
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            🧪 Supabase Database Test Page
          </h1>
          
          <div className="space-y-6">
            <div className="text-gray-600">
              <p className="mb-4">
                This page tests the Supabase database integration with dummy data.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Database Setup Required</h3>
                <p className="text-yellow-700 text-sm">
                  If tests fail, make sure you've run the SQL schema in your Supabase dashboard:
                  <br />
                  1. Go to <a href="https://wtyjpfypvyulpnbdqapw.supabase.co" target="_blank" rel="noopener noreferrer" className="underline">Supabase Dashboard</a>
                  <br />
                  2. Navigate to SQL Editor
                  <br />
                  3. Copy & run the contents of <code>supabase/fixed-schema.sql</code>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={testContactForm}
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-medium"
              >
                {isLoading ? 'Testing...' : 'Test Contact Form'}
              </button>
              
              <button
                onClick={testConsultationBooking}
                disabled={isLoading}
                className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-medium"
              >
                {isLoading ? 'Testing...' : 'Test Consultation Booking'}
              </button>
              
              <button
                onClick={clearResults}
                disabled={isLoading}
                className="bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-medium"
              >
                Clear Results
              </button>
            </div>

            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
              <h3 className="text-white font-bold mb-3">Test Results:</h3>
              {results.length === 0 ? (
                <p className="text-gray-400">No tests run yet. Click the buttons above to test.</p>
              ) : (
                <div className="space-y-1 max-h-96 overflow-y-auto">
                  {results.map((result, index) => (
                    <div key={index} className="whitespace-pre-wrap">
                      {result}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
