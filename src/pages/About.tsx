import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLocale } from '../i18n/LocaleProvider'
import { Award, BookOpen, Target, Heart, Lightbulb, Users, TrendingUp } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const values = [
  { icon: <Target className="w-6 h-6" />, title: 'Results-Driven', description: 'Every strategy is measured by its impact on your book sales and visibility.' },
  { icon: <Heart className="w-6 h-6" />, title: 'Author-Centric', description: 'We put authors first, understanding that every book is a piece of your soul.' },
  { icon: <Lightbulb className="w-6 h-6" />, title: 'Innovation', description: 'We stay ahead of industry trends to give you a competitive edge.' },
  { icon: <Users className="w-6 h-6" />, title: 'Collaboration', description: 'We work alongside you as partners, not just service providers.' },
  { icon: <TrendingUp className="w-6 h-6" />, title: 'Growth Mindset', description: 'Continuous improvement is at the core of everything we do.' },
  { icon: <BookOpen className="w-6 h-6" />, title: 'Passion for Books', description: 'We are readers first. We genuinely love the stories we help promote.' },
]

const timeline = [
  { year: '2018', title: 'Founded', description: 'BookRise was born from a passion for connecting great books with eager readers.' },
  { year: '2019', title: 'First 100 Books', description: 'Helped our first 100 authors achieve meaningful growth in sales and visibility.' },
  { year: '2020', title: 'Amazon Mastery', description: 'Developed proprietary Amazon optimization strategies that became industry standard.' },
  { year: '2021', title: 'Goodreads Expansion', description: 'Launched dedicated Goodreads growth division, connecting authors with passionate readers.' },
  { year: '2022', title: 'Video Marketing', description: 'Added cinematic video marketing services to help authors stand out on social platforms.' },
  { year: '2023', title: '500+ Success Stories', description: 'Surpassed 500 successfully promoted books with a 94% client satisfaction rate.' },
]

const awards = [
  { title: 'Best Book Marketing Agency', org: 'Publishing Insights', year: '2023' },
  { title: 'Top Digital Marketing Partner', org: 'Author Success Awards', year: '2023' },
  { title: 'Excellence in Author Services', org: 'Literary Business Review', year: '2022' },
  { title: 'Innovation in Publishing', org: 'BookTech Summit', year: '2022' },
]

export default function About() {
  const pageRef = useRef<HTMLDivElement>(null)
  const { t } = useLocale()

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!pageRef.current) return

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.about-animate').forEach((el, i) => {
        gsap.fromTo(el,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.35, delay: i * 0.04, ease: 'power1.out',
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          }
        )
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className="pt-[4.5rem] bg-ae-bg-primary">
      <section className="relative overflow-hidden bg-ae-text-primary py-24 md:py-36">
        <div className="container-luxury grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="about-animate opacity-0">
            <p className="mb-7 text-xs font-bold uppercase tracking-[0.25em] text-ae-gold">{t('aboutPage.tag')}</p>
            <h1 className="font-display text-6xl leading-[0.9] text-ae-bg-primary md:text-8xl">{t('aboutPage.title')}</h1>
          </div>
          <div className="about-animate max-w-md border-l border-ae-bg-primary/30 pl-6 opacity-0 lg:justify-self-end">
            <p className="text-lg leading-relaxed text-ae-bg-primary/75 md:text-xl">{t('aboutPage.subtitle')}</p>
            <div className="mt-10 flex items-center justify-between border-t border-ae-bg-primary/20 pt-4 text-xs uppercase tracking-[0.2em] text-ae-bg-primary/50">
              <span>BookRise</span>
              <span>Since 2018</span>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute -bottom-12 right-[8%] hidden font-display text-[18rem] leading-none text-ae-bg-primary/[0.04] lg:block">AE</div>
      </section>

      <section className="section-padding bg-ae-bg-secondary">
        <div className="container-luxury">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:items-start">
            <p className="about-animate editorial-rule pl-12 text-xs font-bold uppercase tracking-[0.2em] text-ae-gold opacity-0">The point of the work</p>
            <p className="about-animate max-w-4xl font-display text-3xl leading-tight text-ae-text-primary opacity-0 md:text-5xl">Great books should not depend on luck to find their readers.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="about-animate border-t-2 border-ae-gold bg-ae-bg-primary p-7 opacity-0 md:p-10">
              <div className="mb-12 flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[0.2em] text-ae-gold">01</span><Target className="h-6 w-6 text-ae-gold" /></div>
              <h2 className="mb-4 font-display text-3xl text-ae-text-primary">{t('aboutPage.missionTitle')}</h2>
              <p className="leading-relaxed text-ae-text-secondary">{t('aboutPage.missionDescription')}</p>
            </div>
            <div className="about-animate border-t-2 border-ae-text-primary bg-ae-text-primary p-7 opacity-0 md:p-10">
              <div className="mb-12 flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[0.2em] text-ae-gold">02</span><BookOpen className="h-6 w-6 text-ae-gold" /></div>
              <h2 className="mb-4 font-display text-3xl text-ae-bg-primary">{t('aboutPage.visionTitle')}</h2>
              <p className="leading-relaxed text-ae-bg-primary/70">{t('aboutPage.visionDescription')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-ae-bg-primary">
        <div className="container-luxury">
          <div className="mb-12 flex flex-col justify-between gap-5 border-b border-ae-border/20 pb-6 md:flex-row md:items-end">
            <div><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-ae-gold">What guides us</p><h2 className="font-display text-4xl text-ae-text-primary md:text-5xl">{t('aboutPage.valuesTitle')}</h2></div>
            <p className="max-w-xs text-sm leading-relaxed text-ae-text-secondary">The principles behind every campaign, conversation, and reader connection.</p>
          </div>
          <div className="grid border-l border-t border-ae-border/20 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <div key={i} className="about-animate border-b border-r border-ae-border/20 p-6 opacity-0 md:p-8">
                <div className="mb-10 flex items-start justify-between"><span className="font-display text-2xl text-ae-gold">0{i + 1}</span><div className="text-ae-gold">{value.icon}</div></div>
                <h3 className="mb-2 font-display text-2xl text-ae-text-primary">{value.title}</h3>
                <p className="text-sm leading-relaxed text-ae-text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-ae-bg-secondary">
        <div className="container-luxury grid gap-12 lg:grid-cols-[0.55fr_1.45fr]">
          <div><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-ae-gold">The archive</p><h2 className="font-display text-4xl text-ae-text-primary md:text-5xl">{t('aboutPage.journeyTitle')}</h2></div>
          <div className="border-t border-ae-border/25">
            {timeline.map((item, i) => (
              <div key={i} className="about-animate grid gap-4 border-b border-ae-border/20 py-6 opacity-0 md:grid-cols-[5rem_1fr] md:gap-8">
                <span className="font-display text-2xl text-ae-gold">{item.year}</span>
                <div><h3 className="mb-2 font-display text-2xl text-ae-text-primary">{item.title}</h3><p className="max-w-2xl text-sm leading-relaxed text-ae-text-secondary">{item.description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-ae-text-primary">
        <div className="container-luxury">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-ae-gold">Recognition</p><h2 className="font-display text-4xl text-ae-bg-primary md:text-5xl">{t('aboutPage.awardsTitle')}</h2></div><Award className="h-10 w-10 text-ae-gold" /></div>
          <div className="grid border-l border-t border-ae-bg-primary/20 sm:grid-cols-2 lg:grid-cols-4">
            {awards.map((award, i) => (
              <div key={i} className="about-animate border-b border-r border-ae-bg-primary/20 p-6 opacity-0 md:p-8"><span className="text-xs font-bold tracking-[0.15em] text-ae-gold">{award.year}</span><h3 className="my-8 font-display text-2xl leading-tight text-ae-bg-primary">{award.title}</h3><p className="text-sm text-ae-bg-primary/60">{award.org}</p></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
