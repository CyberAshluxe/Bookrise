import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeader from '../components/SectionHeader'
import { useLocale } from '../i18n/LocaleProvider'

gsap.registerPlugin(ScrollTrigger)

const team = [
  {
    name: 'Holley Oconnell',
    email: 'holleyoconell@gmail.com',
    title: 'Founder & Lead Strategist',
    rating: '5.0',
    bio: 'A professional book reviewer, Goodreads influencer, and literary marketing consultant with 10+ years of experience helping authors gain visibility and reach their ideal readers. I specialize in transforming promising books into recognized titles through strategic, authentic promotion that is narrative-driven, audience-first, and results-focused.',
    tags: ['Author Brand Strategy', 'Launch Architecture', 'Client Success'],
    website: 'https://holley-0connell.vercel.app/',
  },
  {
    name: 'Eva Evelyn',
    email: 'evaevelyyn@gmail.com',
    expertise: 'Author Visibility Strategist',
    rating: '4.8',
    bio: 'Helps authors clarify their audience and build practical visibility campaigns that connect each book with readers who are ready to discover it.',
    tags: ['Author Strategy', 'Book Visibility', 'Audience Growth'],
  },
  {
    name: 'Tracy Shelton',
    email: 'ttracysheltonn@gmail.c',
    expertise: 'Book Campaign Coordinator',
    rating: '4.8',
    bio: 'Supports authors through organized promotional campaigns, coordinating outreach and launch details so every part of a book campaign stays on track.',
    tags: ['Campaign Support', 'Book Launches', 'Author Outreach'],
  },
  {
    name: 'Janina Daecher',
    email: 'janinadaecherr@gmail.com',
    expertise: 'Public Relations & Media Outreach',
    rating: '4.8',
    bio: 'Builds authentic media and reader outreach campaigns that increase visibility, strengthen author credibility, and help books reach wider audiences.',
    tags: ['PR Outreach', 'Media Placement', 'Bestseller Buzz'],
  },
  {
    name: 'Gloria Roberts Caldwell',
    email: 'gloriarobertscadwell@gmail.com',
    expertise: 'Author Outreach Consultant',
    rating: '4.8',
    bio: 'Helps authors build meaningful connections with readers, book communities, and promotional partners through thoughtful outreach and clear campaign planning.',
    tags: ['Author Outreach', 'Reader Connections', 'Book Promotion'],
  },
  {
    name: 'Teresa Mauldin',
    email: 'teresamauldiin@gmail.com',
    expertise: 'Book Marketing Strategist',
    rating: '4.8',
    bio: 'Helps authors shape focused marketing campaigns that strengthen book visibility, reach ideal readers, and support steady momentum after launch.',
    tags: ['Book Marketing', 'Audience Strategy', 'Launch Support'],
  },
  {
    name: 'Jody Libby',
    email: 'jodyrlibby@gmail.com',
    expertise: 'Reader Engagement Coordinator',
    rating: '4.9',
    bio: 'Builds thoughtful reader engagement around author brands through community outreach, campaign support, and authentic book conversations.',
    tags: ['Reader Engagement', 'Community Outreach', 'Author Support'],
  },
  {
    name: 'Claudia Mollisson',
    email: 'claudiamollisson@gmail.com',
    expertise: 'Author Brand Strategist',
    rating: '4.9',
    bio: 'Helps authors shape a clear, memorable brand around their books so the right readers understand what makes their work worth discovering.',
    tags: ['Author Branding', 'Positioning', 'Reader Discovery'],
  },
  {
    name: 'Durica Pernjek',
    email: 'duricapernjek@gmail.com',
    expertise: 'Book Launch Specialist',
    rating: '4.8',
    bio: 'Coordinates focused launch campaigns that build anticipation, organize outreach, and give every new release a strong first impression.',
    tags: ['Launch Strategy', 'Campaign Planning', 'Book Promotion'],
  },
  {
    name: 'Stacey Adams',
    email: 'Stacceyadams@gmail.com',
    expertise: 'Reader Outreach Specialist',
    rating: '4.9',
    bio: 'Connects authors with active readers, reviewers, and communities through thoughtful outreach designed to create lasting book discovery.',
    tags: ['Reader Outreach', 'Community Growth', 'Review Support'],
  },
  {
    name: 'Jane Bally',
    email: 'janebaally@gmail.com',
    expertise: 'Book Marketing Consultant',
    rating: '4.8',
    bio: 'Builds practical marketing plans that help authors increase visibility across retail platforms, social channels, and reader communities.',
    tags: ['Marketing Strategy', 'Audience Growth', 'Book Visibility'],
  },
  {
    name: 'Kim Woods',
    email: 'kiimwoods@gmail.com',
    expertise: 'Goodreads & Review Strategist',
    rating: '4.9',
    bio: 'Supports authors in growing authentic reader engagement through Goodreads campaigns, review outreach, and community conversations.',
    tags: ['Goodreads Growth', 'Review Campaigns', 'Reader Engagement'],
  },
  {
    name: 'Ashley Morgan',
    email: 'theashleymorganofficial@gmail.com',
    expertise: 'Content & Social Media Strategist',
    rating: '4.8',
    bio: 'Turns an author\'s story, themes, and personality into social content that earns attention and keeps readers connected between releases.',
    tags: ['Social Content', 'Author Voice', 'Audience Engagement'],
  },
  {
    name: 'Katlyn Pamela',
    email: 'kpamela.co@gmail.com',
    expertise: 'Email Campaigns & Reader Funnels',
    rating: '4.9',
    bio: 'Designs email journeys that welcome new readers, support book launches, and build an audience authors can grow over time.',
    tags: ['Email Funnels', 'Reader Retention', 'Launch Messaging'],
  },
  {
    name: 'Ruth Krick',
    email: 'ruthkrickk@gmail.com',
    expertise: 'Book Promotion Coordinator',
    rating: '4.8',
    bio: 'Manages promotional details across campaigns so authors can present their books consistently and reach readers at the right moment.',
    tags: ['Book Promotion', 'Campaign Support', 'Author Relations'],
  },
  {
    name: 'Mildred Whitmore',
    email: 'mildredlouisewhitmore@gmail.com',
    expertise: 'Literary Outreach Consultant',
    rating: '4.9',
    bio: 'Creates targeted outreach plans for authors seeking meaningful connections with bloggers, book clubs, reviewers, and niche audiences.',
    tags: ['Literary Outreach', 'Book Clubs', 'Media Relations'],
  },
  {
    name: 'Christine Tralka',
    email: 'tralkachristine@gmail.com',
    expertise: 'Amazon Visibility Strategist',
    rating: '4.8',
    bio: 'Helps authors improve how their books appear in search and category browsing through stronger positioning, metadata, and promotional planning.',
    tags: ['Amazon Strategy', 'Book Metadata', 'Discoverability'],
  },
  {
    name: 'Blanche Hunter',
    email: 'blanchejhunter@gmail.com',
    expertise: 'Author Success Coordinator',
    rating: '4.9',
    bio: 'Keeps author campaigns organized and moving forward, supporting communication, launch logistics, and the details that turn plans into progress.',
    tags: ['Author Support', 'Launch Coordination', 'Client Success'],
  },
]

const getInitials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('')

export default function Team() {
  const pageRef = useRef<HTMLDivElement>(null)
  const { t } = useLocale()

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!pageRef.current) return

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.team-animate').forEach((el, i) => {
        gsap.fromTo(el,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.6, delay: i * 0.1, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          }
        )
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className="pt-20">
      <section className="section-padding bg-ae-bg-primary">
        <div className="container-luxury">
          <SectionHeader
            tag={t('teamPage.tag')}
            title={t('teamPage.title')}
            subtitle={t('teamPage.subtitle')}
          />

          <div className="mb-12">
            <p className="team-animate text-ae-text-secondary text-center max-w-3xl mx-auto leading-relaxed opacity-0">
                  {t('teamPage.intro')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div key={i} className="team-animate glass-card p-6 opacity-0">
                <div className="mb-6 flex flex-col items-center gap-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ae-border text-ae-text-inverse text-xl font-semibold shadow-sm">
                    {getInitials(member.name)}
                  </div>
                  <div>
                    <h4 className="font-display text-ae-text-primary text-2xl">{member.name}</h4>
                    <p className="mt-1 text-sm uppercase tracking-[0.24em] text-ae-text-secondary/80">
                      {member.title ?? member.expertise}
                    </p>
                    <a href={`mailto:${member.email}`} className="mt-2 text-xs text-ae-text-secondary hover:text-ae-text-primary transition">
                      {member.email}
                    </a>
                  </div>
                  {member.rating && (
                    <div className="flex items-center justify-center gap-2 text-ae-text-primary text-sm">
                      <span className="text-[#b77a2c]">★★★★★</span>
                      <span className="font-semibold">{member.rating}</span>
                    </div>
                  )}
                </div>

                {member.bio ? (
                  <>
                    <p className="text-ae-text-secondary leading-relaxed mb-5">{member.bio}</p>
                    <div className="mb-6 flex flex-wrap justify-center gap-2">
                      {member.tags?.map((tag) => (
                        <span key={tag} className="rounded-full border border-ae-border/40 bg-ae-bg-secondary/70 px-3 py-1 text-xs uppercase tracking-[0.18em] text-ae-text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                ) : (
                  <p className="text-ae-text-secondary text-sm leading-relaxed">{member.expertise}</p>
                )}

                <div className="mt-4 space-y-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ae-text-primary px-5 py-3 text-sm font-medium text-white transition hover:shadow-lg"
                  >
                    Contact {member.name.split(' ')[0]}
                  </a>
                  {member.website && (
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ae-border/40 px-5 py-3 text-sm font-medium text-ae-text-primary transition hover:bg-ae-bg-secondary"
                    >
                      Visit Personal Website
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
