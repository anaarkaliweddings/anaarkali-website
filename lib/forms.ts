import { z } from 'zod'

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  eventDate: z.string().optional(),
  guestCount: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  budget: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Newsletter subscription schema
export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().optional(),
})

export type NewsletterData = z.infer<typeof newsletterSchema>

// Form submission handler
export async function submitContactForm(data: ContactFormData) {
  const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...data,
      _subject: `New inquiry from ${data.name} - ${data.service}`,
      _template: 'table',
    }),
  })

  if (!response.ok) {
    throw new Error('Failed to submit form')
  }

  return response.json()
}

// Newsletter subscription handler
export async function subscribeToNewsletter(data: NewsletterData) {
  const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...data,
      _subject: 'Newsletter Subscription',
      _template: 'table',
    }),
  })

  if (!response.ok) {
    throw new Error('Failed to subscribe to newsletter')
  }

  return response.json()
}

// Service options for the contact form
export const serviceOptions = [
  { value: 'wedding-planning', label: 'Wedding Planning' },
  { value: 'event-coordination', label: 'Event Coordination' },
  { value: 'venue-decor', label: 'Venue Decoration' },
  { value: 'floral-design', label: 'Floral Design' },
  { value: 'catering', label: 'Catering' },
  { value: 'photography', label: 'Photography' },
  { value: 'entertainment', label: 'Entertainment' },
  { value: 'other', label: 'Other' },
]

// Budget ranges
export const budgetRanges = [
  { value: 'under-10k', label: 'Under $10,000' },
  { value: '10k-25k', label: '$10,000 - $25,000' },
  { value: '25k-50k', label: '$25,000 - $50,000' },
  { value: '50k-100k', label: '$50,000 - $100,000' },
  { value: 'over-100k', label: 'Over $100,000' },
]
