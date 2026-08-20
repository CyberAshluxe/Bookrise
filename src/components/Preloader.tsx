import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

interface PreloaderProps {
  onComplete: () => void
  isLoading: boolean
}

export default function Preloader({ onComplete, isLoading }: PreloaderProps) {
  const preloaderRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isLoading) return

    const tl = gsap.timeline()
    
    // Counter animation
    const counterObj = { val: 0 }
    tl.to(counterObj, {
      val: 100,
      duration: 0.9,
      ease: 'power2.inOut',
      onUpdate: () => {
        setCount(Math.round(counterObj.val))
      },
    })

    tl.fromTo(logoRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.25, ease: 'power1.out' },
      0
    )

    // Exit animation
    tl.to(preloaderRef.current, {
      autoAlpha: 0,
      duration: 0.25,
      ease: 'power3.inOut',
      onComplete: () => {
        onComplete()
      },
    }, 1.05)

    return () => {
      tl.kill()
    }
  }, [isLoading, onComplete])

  if (!isLoading) return null

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[1000] bg-ae-bg-primary flex flex-col items-center justify-center"
    >
      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ae-gold to-transparent" />
      
      {/* Logo */}
      <div ref={logoRef} className="mb-12">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="58" stroke="url(#gold-grad)" strokeWidth="1.5" />
          <path d="M45 40L60 30L75 40V70L60 80L45 70V40Z" stroke="url(#gold-grad)" strokeWidth="1.5" fill="none" />
          <path d="M60 30V80" stroke="url(#gold-grad)" strokeWidth="1" />
          <path d="M45 55L60 60L75 55" stroke="url(#gold-grad)" strokeWidth="1" />
          <path d="M38 45L30 40V75L45 85" stroke="url(#gold-grad)" strokeWidth="1.5" fill="none" />
          <path d="M82 45L90 40V75L75 85" stroke="url(#gold-grad)" strokeWidth="1.5" fill="none" />
          <defs>
            <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C8A66A" />
              <stop offset="100%" stopColor="#E8D5A3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand name */}
      <h2 className="font-display text-2xl md:text-3xl text-ae-text-primary tracking-widest mb-8">
        BookRise
      </h2>

      {/* Counter */}
      <div className="flex items-baseline gap-1">
        <span
          ref={counterRef}
          className="font-display text-5xl md:text-6xl gold-gradient-text tabular-nums"
        >
          {count}
        </span>
        <span className="font-display text-2xl text-ae-gold">%</span>
      </div>

      {/* Progress bar */}
      <div className="w-48 h-px bg-ae-border/30 mt-8 overflow-hidden">
        <div
          className="h-full gold-gradient transition-all duration-100"
          style={{ width: `${count}%` }}
        />
      </div>

      {/* Decorative gold line bottom */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ae-gold/50 to-transparent" />
    </div>
  )
}
