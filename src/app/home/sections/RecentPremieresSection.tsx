'use client'

import React, { useRef, useEffect } from 'react'

type Story = {
  title: string
  location: string
  excerpt: string
  video: string
  poster?: string
}

const STORIES: Story[] = [
  { title: 'Anuj & Noopur', location: 'Jim Corbett', excerpt: 'A romantic pre-wedding celebration in the wilderness', video: '/Anuj-Noopur-jim Corbett-2024-01' },
  { title: 'Priya & Haywards', location: 'Jim Corbett', excerpt: 'Love story unfolds in the heart of nature', video: '/Priya-Haywards-jim corbett-2024-06' },
  { title: 'Priya & David', location: 'Jaipur', excerpt: 'A royal pre-wedding celebration in the Pink City', video: '/Priya-david Pre-wedding-Jaipur-2024-03' },
  { title: 'Vidhisha & Ruchir', location: 'Delhi', excerpt: 'Urban love story captured in the capital city', video: '/Vidhisha-Ruchir-Pre-wedding-Delhi-2025-04' },
]

export default function RecentPremieresSection() {
  const videoRefs = useRef<HTMLVideoElement[]>([])
  const [loadedVideos, setLoadedVideos] = React.useState<Set<number>>(new Set())

  const handleMouseEnter = (index: number) => {
    const video = videoRefs.current[index]
    if (video) video.play().catch(() => {})
  }

  const handleMouseLeave = (index: number) => {
    const video = videoRefs.current[index]
    if (video) video.pause()
  }

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-video-index') || '0')
            setLoadedVideos(prev => new Set([...prev, index]))
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '50px' }
    )

    const videoContainers = document.querySelectorAll('[data-video-index]')
    videoContainers.forEach(container => observer.observe(container))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-primary-bold text-3xl md:text-4xl text-[#4F0D0E] mb-16">Recent <span className="font-highlight">Premieres</span></h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {STORIES.map((story, index) => (
            <div
              key={story.title + index}
              className="w-full bg-white rounded-2xl shadow-[0_4px_20px_rgba(79,13,14,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(79,13,14,0.12)] overflow-hidden"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              data-video-index={index}
            >
              {/* Video Area - Landscape */}
              <div className="w-full aspect-video overflow-hidden">
                {loadedVideos.has(index) ? (
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current[index] = el
                    }}
                    className="w-full h-full object-cover"
                    playsInline
                    loop
                    preload="metadata"
                    poster={story.poster}
                    decoding="async"
                  >
                    <source src={`${story.video}.mp4`} type="video/mp4" />
                  </video>
                ) : (
                  <div className="w-full h-full bg-luxury-accent flex items-center justify-center">
                    <div className="text-center text-luxury-primary">
                      <div className="animate-pulse">
                        <div className="w-12 h-12 border-2 border-luxury-primary border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                        <div className="font-primary text-sm">Loading...</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Text Area */}
              <div className="p-6">
                <h3 className="font-primary-medium text-xl text-[#4F0D0E] mb-2">
                  {story.title}
                </h3>
                <p className="font-primary text-sm text-[#4F0D0E] opacity-60 mb-3">
                  • {story.location}
                </p>
                <p className="font-primary text-sm text-[#4F0D0E] opacity-80 leading-[1.4]">
                  {story.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}