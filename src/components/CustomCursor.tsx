'use client'

import React, { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    let x = 0, y = 0
    let tx = 0, ty = 0
    const speed = 0.2

    const move = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
    }

    const loop = () => {
      x += (tx - x) * speed
      y += (ty - y) * speed
      cursor.style.transform = `translate3d(${x - 16}px, ${y - 16}px, 0)`
      requestAnimationFrame(loop)
    }

    const enter = () => cursor.classList.add('cursor--hover')
    const leave = () => cursor.classList.remove('cursor--hover')

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, [role="button"], .hoverable').forEach(el => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })
    requestAnimationFrame(loop)

    return () => {
      document.removeEventListener('mousemove', move)
      document.querySelectorAll('a, button, [role="button"], .hoverable').forEach(el => {
        el.removeEventListener('mouseenter', enter)
        el.removeEventListener('mouseleave', leave)
      })
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
    >
      <div className="custom-cursor" />
    </div>
  )
}


