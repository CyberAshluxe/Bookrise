import StarRating from './StarRating'

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  image?: string
  rating?: number
  video?: boolean
}

export default function TestimonialCard({ quote, author, role, image, rating = 5, video = false }: TestimonialCardProps) {
  return (
    <div className="glass-card p-6 md:p-8">
      {video ? (
        <div className="relative rounded-xl overflow-hidden mb-6 aspect-video bg-ae-bg-tertiary">
          <img
            src="/assets/testimonial-video-thumb.jpg"
            alt={`${author} testimonial`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-ae-bg-primary/40">
            <div className="w-16 h-16 rounded-full bg-ae-gold/90 flex items-center justify-center cursor-pointer hover:bg-ae-gold transition-colors hover:scale-110 duration-300">
              <svg className="w-6 h-6 text-ae-bg-primary ml-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-4"><StarRating rating={rating} /></div>
      )}
      
      <blockquote className="text-ae-text-primary text-base md:text-lg leading-relaxed mb-6 italic">
        &ldquo;{quote}&rdquo;
      </blockquote>
      
      <div className="flex items-center gap-4">
        {image ? (
          <img
            src={image}
            alt={author}
            className="w-12 h-12 rounded-full object-cover border-2 border-ae-gold/30"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-ae-gold/20 flex items-center justify-center border-2 border-ae-gold/30">
            <span className="font-display text-ae-gold text-lg">{author.charAt(0)}</span>
          </div>
        )}
        <div>
          <p className="font-display text-ae-text-primary">{author}</p>
          <p className="text-ae-text-secondary text-sm">{role}</p>
        </div>
      </div>
    </div>
  )
}
