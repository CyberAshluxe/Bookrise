import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'
import StatCounter from '../components/StatCounter'
import { useLocale } from '../i18n/LocaleProvider'

const stats = [
  { end: 500, suffix: '+', label: 'Books Promoted' },
  { end: 94, suffix: '%', label: 'Client Satisfaction' },
  { end: 15, suffix: 'M+', label: 'Readers Reached' },
  { end: 8, suffix: 'M+', prefix: '$', label: 'Revenue Generated' },
]

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const { t } = useLocale()

  useEffect(() => {
    if (!contentRef.current) return

    const tl = gsap.timeline({ delay: 0.1 })

    tl.fromTo('.hero-tagline',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, ease: 'power1.out' }
    )
    .fromTo('.hero-headline',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.35, ease: 'power1.out' },
      '-=0.18'
    )
    .fromTo('.hero-subheadline',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, ease: 'power1.out' },
      '-=0.18'
    )
    .fromTo('.hero-cta',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.05, duration: 0.25, ease: 'power1.out' },
      '-=0.15'
    )
    .fromTo('.hero-stats',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.35, ease: 'power1.out' },
      '-=0.12'
    )

    return () => { tl.kill() }
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-ae-bg-primary hero-paper-grid">
      <div className="absolute right-0 top-0 h-full w-[38%] bg-ae-text-primary hidden lg:block" />
      <div className="absolute right-[12%] top-[23%] z-[1] hidden lg:block h-72 w-56 border border-ae-gold/50 rotate-6" />
      <div className="absolute right-[14%] top-[20%] z-[2] hidden lg:flex h-72 w-56 -rotate-6 flex-col justify-between bg-ae-gold p-7 text-ae-text-primary shadow-card">
        <div className="flex items-start justify-between text-xs font-bold uppercase tracking-[0.2em]">
          <span>AE / 01</span>
          <span>Studio note</span>
        </div>
        <p className="font-display text-4xl leading-[0.95]">Good books<br />need a<br /><em>signal.</em></p>
        <div className="flex items-end justify-between border-t border-ae-text-primary/30 pt-4 text-xs uppercase tracking-[0.15em]">
          <span>Visibility<br />with intent</span>
          <span>2026</span>
        </div>
      </div>

      <div ref={contentRef} className="relative z-10 container-luxury grid items-end gap-12 pt-32 pb-16 lg:grid-cols-[minmax(0,1fr)_0.6fr]">
        <div className="max-w-3xl">
        <p className="hero-tagline editorial-rule pl-12 text-ae-gold text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-8 opacity-0">
          {t('hero.tagline')}
        </p>

        <h1 className="hero-headline font-display text-5xl sm:text-6xl md:text-6xl lg:text-[5.1rem] text-ae-text-primary leading-[0.95] mb-8 max-w-4xl opacity-0">
          {t('hero.headline')}
        </h1>

        <p className="hero-subheadline text-ae-text-secondary text-base md:text-lg max-w-xl mb-10 leading-relaxed opacity-0">
          {t('hero.subheadline')}
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
          <Link
            to="/team"
            className="hero-cta px-7 py-4 gold-gradient text-ae-text-inverse font-bold uppercase tracking-[0.12em] text-xs hover:shadow-gold-glow-lg transition-all duration-300 hover:translate-x-1 opacity-0"
          >
            {t('hero.ctaPrimary')}
          </Link>
          <a
            href="#success-stories"
            className="hero-cta px-7 py-4 border border-ae-border text-ae-text-primary font-bold uppercase tracking-[0.12em] text-xs hover:border-ae-gold hover:bg-ae-text-primary/5 transition-all duration-300 opacity-0"
          >
            {t('hero.ctaSecondary')}
          </a>
        </div>

        {/* Stats */}
        <div className="hero-stats grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 max-w-3xl opacity-0">
          {stats.map((stat, i) => (
            <StatCounter
              key={stat.label}
              end={stat.end}
              suffix={stat.suffix}
              prefix={stat.prefix || ''}
              label={stat.label}
              delay={i * 0.2}
            />
          ))}
        </div>
        </div>
        <div className="hidden lg:block pb-4 text-ae-bg-primary/60 text-xs uppercase tracking-[0.25em] [writing-mode:vertical-rl] justify-self-end">
          Strategy / Story / Signal
        </div>
      </div>
    </section>
  )
}
