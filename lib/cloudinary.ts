import { Cloudinary } from '@cloudinary/url-gen'

// Create a Cloudinary instance
export const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
  },
})

// Helper function to generate optimized image URLs
export function getOptimizedImageUrl(
  publicId: string,
  options: {
    width?: number
    height?: number
    quality?: number
    format?: 'auto' | 'webp' | 'jpg' | 'png'
    crop?: 'fill' | 'scale' | 'crop'
  } = {}
) {
  // Options are available for future use
  // const { width, height, quality, format, crop } = options

  return cld.image(publicId).toURL()
}

// Predefined image transformations for common use cases
export const imageTransforms = {
  hero: (publicId: string) => getOptimizedImageUrl(publicId, {
    width: 1920,
    height: 1080,
    quality: 85,
    crop: 'fill'
  }),
  
  portfolio: (publicId: string) => getOptimizedImageUrl(publicId, {
    width: 800,
    height: 600,
    quality: 80,
    crop: 'fill'
  }),
  
  thumbnail: (publicId: string) => getOptimizedImageUrl(publicId, {
    width: 400,
    height: 300,
    quality: 75,
    crop: 'fill'
  }),
  
  avatar: (publicId: string) => getOptimizedImageUrl(publicId, {
    width: 150,
    height: 150,
    quality: 80,
    crop: 'fill'
  })
}
