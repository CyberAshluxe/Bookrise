import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

export default function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current) return

    const trigger = ScrollTrigger.create({
      trigger: cardRef.current,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.fromTo(cardRef.current,
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.35, delay: index * 0.04, ease: 'power1.out' }
        )
      },
    })

    return () => { trigger.kill() }
  }, [index])

  return (
    <div
      ref={cardRef}
      className="group relative p-6 md:p-8 bg-ae-bg-secondary border border-ae-border/20 rounded-none transition-all duration-300 hover:border-ae-gold hover:-translate-y-1 hover:shadow-card opacity-0"
    >
      <div className="mb-8 text-ae-gold transition-transform duration-300 group-hover:translate-x-1">
        {icon}
      </div>
      <h3 className="font-display text-xl md:text-2xl text-ae-text-primary mb-3 group-hover:text-ae-gold transition-colors duration-300">
        {title}
      </h3>
      <p className="text-ae-text-secondary text-sm leading-relaxed mb-4">
        {description}
      </p>
      <div className="flex items-center gap-2 text-ae-gold text-xs font-bold uppercase tracking-[0.12em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>Learn more</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  )
}
