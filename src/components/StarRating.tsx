import { Star } from 'lucide-react'

interface StarRatingProps {
  rating?: number
  size?: number
}

export default function StarRating({ rating = 5, size = 18 }: StarRatingProps) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`${i < rating ? 'text-ae-gold fill-ae-gold' : 'text-ae-border'}`}
          size={size}
        />
      ))}
    </div>
  )
}
