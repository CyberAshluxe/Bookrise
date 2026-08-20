import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SectionHeaderProps {
  tag?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeader({ tag, title, subtitle, centered = false, light = false }: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 85%',
        once: true,
      },
    })

    tl.fromTo(ref.current.querySelectorAll('.header-animate'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.06, duration: 0.35, ease: 'power1.out' }
    )

    return () => { tl.kill() }
  }, [])

  return (
    <div ref={ref} className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      {tag && (
        <span className="header-animate inline-block text-ae-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">
          {tag}
        </span>
      )}
      <h2 className={`header-animate font-display text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 ${light ? 'text-ae-text-inverse' : 'text-ae-text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`header-animate max-w-2xl ${centered ? 'mx-auto' : ''} text-base md:text-lg leading-relaxed ${light ? 'text-ae-text-inverse/70' : 'text-ae-text-secondary'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
