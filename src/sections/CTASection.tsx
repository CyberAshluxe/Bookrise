import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const benefits = [
  'Personalized marketing strategy tailored to your book',
  'Learn exactly how to reach your ideal readers',
  'Discover proven tactics to boost reviews and sales',
]

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      })

      tl.fromTo('.cta-headline',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }
      )
      .fromTo('.cta-subheadline',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      )
      .fromTo('.cta-benefit',
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      )
      .fromTo('.cta-button',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.2'
      )
      .fromTo('.cta-subtext',
        { opacity: 0 },
        { opacity: 0.7, duration: 0.5 },
        '-=0.2'
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 bg-ae-text-primary border-t border-ae-border/20">
      <div className="container-luxury max-w-3xl mx-auto text-center px-4">
        <h2 className="cta-headline font-display text-3xl md:text-4xl lg:text-5xl text-ae-bg-primary mb-4 opacity-0">
          Ready to Elevate Your Book?
        </h2>
        <p className="cta-subheadline text-ae-bg-primary/70 text-base md:text-lg lg:text-xl mb-10 opacity-0">
          Book a free strategy call and discover how we can help your book reach its full potential.
        </p>

        {/* Benefits */}
        <div className="flex flex-col items-start max-w-md mx-auto gap-4 mb-10">
          {benefits.map((benefit, i) => (
            <div key={i} className="cta-benefit flex items-center gap-3 opacity-0">
              <div className="w-5 h-5 rounded-full bg-ae-gold/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-ae-gold" />
              </div>
              <span className="text-ae-bg-primary/75 text-sm md:text-base text-left">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          to="/team"
          className="cta-button inline-block px-10 py-5 gold-gradient text-ae-text-inverse text-lg font-medium rounded-full hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-[1.03] opacity-0"
        >
          Book Your Free Call
        </Link>

        <p className="cta-subtext mt-6 text-ae-bg-primary/50 text-sm opacity-0">
          No obligation. No pressure. Just a conversation about your book.
        </p>
      </div>

    </section>
  )
}
