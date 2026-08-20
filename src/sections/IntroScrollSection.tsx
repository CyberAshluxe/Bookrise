import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function IntroScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const word1Ref = useRef<HTMLDivElement>(null)
  const word2Ref = useRef<HTMLDivElement>(null)
  const word3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !stickyRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: false,
        },
      })

      // Phase 1: "Promote" slides in from left
      tl.fromTo(word1Ref.current,
        { x: '-100vw', scale: 0.5, opacity: 0 },
        { x: 0, scale: 1.2, opacity: 1, ease: 'none' },
        0
      )
      tl.to(word1Ref.current,
        { y: '-30vh', opacity: 0, scale: 0.8, ease: 'none' },
        0.25
      )

      // Phase 2: "Your" slides in from right
      tl.fromTo(word2Ref.current,
        { x: '100vw', scale: 0.5, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, ease: 'none' },
        0.2
      )
      tl.to(word2Ref.current,
        { y: '-30vh', opacity: 0, scale: 0.8, ease: 'none' },
        0.45
      )

      // Phase 3: "Book" slides in from left with gold color
      tl.fromTo(word3Ref.current,
        { x: '-100vw', scale: 0.5, opacity: 0 },
        { x: 0, scale: 1.2, opacity: 1, ease: 'none' },
        0.4
      )
      tl.to(word3Ref.current,
        { scale: 1, ease: 'none' },
        0.65
      )
      tl.to(word3Ref.current,
        { y: '-20vh', opacity: 0, scale: 0.9, ease: 'none' },
        0.8
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="relative" style={{ height: '300vh' }}>
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-ae-bg-primary"
      >
        {/* Perspective container */}
        <div className="perspective-1000 w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full preserve-3d">
            {/* Word 1: Promote */}
            <div
              ref={word1Ref}
              className="absolute inset-0 flex items-center justify-center will-change-transform"
              style={{ opacity: 0 }}
            >
              <h2
                className="font-display text-[12vw] md:text-[10vw] text-ae-text-primary whitespace-nowrap"
                style={{ textShadow: '0 0 80px hsla(0, 0%, 0%, 0.8)' }}
              >
                Promote
              </h2>
            </div>

            {/* Word 2: Your */}
            <div
              ref={word2Ref}
              className="absolute inset-0 flex items-center justify-center will-change-transform"
              style={{ opacity: 0 }}
            >
              <h2
                className="font-display text-[12vw] md:text-[10vw] text-ae-text-primary whitespace-nowrap"
                style={{ textShadow: '0 0 80px hsla(0, 0%, 0%, 0.8)' }}
              >
                Your
              </h2>
            </div>

            {/* Word 3: Book */}
            <div
              ref={word3Ref}
              className="absolute inset-0 flex items-center justify-center will-change-transform"
              style={{ opacity: 0 }}
            >
              <h2
                className="font-display text-[12vw] md:text-[10vw] gold-gradient-text whitespace-nowrap"
                style={{ textShadow: '0 0 80px hsla(38, 43%, 60%, 0.4)' }}
              >
                Book
              </h2>
            </div>
          </div>
        </div>

        {/* Decorative gradient overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-transparent to-transparent" />
        </div>
      </div>
    </div>
  )
}
