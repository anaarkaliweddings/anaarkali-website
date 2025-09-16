import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
  apiVersion: '2023-05-03',
  token: process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(client)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source)
}

// Types for Sanity content
export interface PortfolioItem {
  _id: string
  title: string
  slug: { current: string }
  description: string
  images: Array<{
    _key: string
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }>
  category: string
  featured: boolean
  publishedAt: string
}

export interface Service {
  _id: string
  title: string
  description: string
  price?: string
  features: string[]
  image?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
}

export interface Testimonial {
  _id: string
  name: string
  role: string
  content: string
  rating: number
  image?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  weddingDate?: string
}
