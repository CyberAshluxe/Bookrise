import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import StarRating from './StarRating'

gsap.registerPlugin(ScrollTrigger)

interface BookCardProps {
  image: string
  title: string
  author: string
  rating: number
  reviews: string
  genre: string
  result: string
  index: number
}

export default function BookCard({ image, title, author, rating, reviews, genre, result, index }: BookCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current) return

    const trigger = ScrollTrigger.create({
      trigger: cardRef.current,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.fromTo(cardRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, delay: index * 0.15, ease: 'power2.out' }
        )
      },
    })

    return () => { trigger.kill() }
  }, [index])

  return (
    <div
      ref={cardRef}
      className="group glass-card overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-gold-glow/30 opacity-0"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full aspect-[2/3] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-ae-bg-primary/6 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <span className="inline-block px-2 py-1 bg-ae-gold/20 backdrop-blur-sm text-ae-gold text-xs rounded-full border border-ae-gold/30">
            {genre}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg text-ae-text-primary mb-1 group-hover:text-ae-gold transition-colors">
          {title}
        </h3>
        <p className="text-ae-text-secondary text-sm mb-3">{author}</p>
        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={rating} size={14} />
          <span className="text-ae-text-secondary text-xs">({reviews})</span>
        </div>
        <div className="pt-3 border-t border-ae-border/20">
          <p className="text-ae-gold text-sm font-medium">{result}</p>
        </div>
      </div>
    </div>
  )
}
