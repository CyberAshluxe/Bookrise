import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeader from '../components/SectionHeader'
import {
  BookMarketingIcon,
  BookPromotionIcon,
  AuthorBrandingIcon,
  AmazonIcon,
  GoodreadsIcon,
  BookLaunchIcon,
  VideoMarketingIcon,
  EmailCampaignsIcon,
  BookClubIcon,
} from '../components/ServiceIcons'
import { Check, ArrowRight, Clock, Target, BarChart3 } from 'lucide-react'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    id: 'amazon',
    icon: <AmazonIcon size={64} />,
    title: 'Amazon Optimization',
    tagline: 'Dominate the world\'s largest bookstore',
    description: 'Our Amazon optimization service ensures your book gets discovered by the right readers. We optimize every element of your Amazon presence to maximize visibility and conversions.',
    features: [
      'Keyword-rich title and subtitle optimization',
      'Compelling book description copywriting',
      'Strategic category selection',
      'Backend keyword optimization',
      'A+ Content creation for KDP',
      'Pricing strategy recommendations',
    ],
    why: 'Amazon is where 70% of book purchases happen. If readers can\'t find your book on Amazon, they can\'t buy it.',
    how: 'We conduct deep keyword research, analyze competitor positioning, and craft metadata that speaks to both Amazon\'s algorithm and human readers.',
    results: 'Average 300% increase in organic Amazon impressions within 60 days.',
    timeline: '2-3 weeks for initial optimization, ongoing monitoring',
    color: 'from-amber-500/10 to-transparent',
  },
  {
    id: 'reviews',
    icon: <BookMarketingIcon size={64} />,
    title: 'Review Generation',
    tagline: 'Build social proof that sells',
    description: 'Authentic reviews are the lifeblood of book sales. Our ethical review generation strategies connect your book with genuine readers who provide honest feedback.',
    features: [
      'Targeted ARC (Advance Review Copy) distribution',
      'Book blogger and influencer outreach',
      'Goodreads review campaigns',
      'Amazon Vine program guidance',
      'Review follow-up sequences',
      'Review monitoring and management',
    ],
    why: 'Books with 50+ reviews sell 3x more than those with fewer. Reviews build trust and trigger Amazon\'s recommendation algorithms.',
    how: 'We build relationships with avid readers in your genre and provide them with advance copies, resulting in authentic, thoughtful reviews.',
    results: 'Average 15-20 new authentic reviews within 30 days of campaign launch.',
    timeline: '30-45 days for initial review generation',
    color: 'from-emerald-500/10 to-transparent',
  },
  {
    id: 'goodreads',
    icon: <GoodreadsIcon size={64} />,
    title: 'Goodreads Growth',
    tagline: 'Tap into the world\'s largest reader community',
    description: 'Goodreads is home to 90 million passionate readers. Our strategies help you build a presence that turns browsers into devoted fans.',
    features: [
      'Profile optimization and branding',
      'Strategic Listopia list placements',
      'Community engagement campaigns',
      'Giveaway management',
      'Shelf and list targeting',
      'Author Q&A coordination',
    ],
    why: 'Goodreads readers are highly engaged and influential. A strong presence here creates organic word-of-mouth that extends far beyond the platform.',
    how: 'We identify the most relevant lists and communities for your genre, then execute targeted campaigns that put your book in front of active readers.',
    results: 'Average 500+ new "Want to Read" adds and significant list placement within 30 days.',
    timeline: '2-4 weeks for initial setup and campaign launch',
    color: 'from-sky-500/10 to-transparent',
  },
  {
    id: 'video',
    icon: <VideoMarketingIcon size={64} />,
    title: 'Video Marketing',
    tagline: 'Capture attention in the scroll',
    description: 'Short-form video is the most powerful tool for book discovery in 2024. We create cinematic content that stops the scroll and drives sales.',
    features: [
      'Cinematic book trailer production',
      'Short-form video content (TikTok/Reels)',
      'Author interview filming',
      'Behind-the-scenes content',
      'Platform-specific optimization',
      'Influencer collaboration videos',
    ],
    why: 'BookTok and Bookstagram drive millions of book sales. Video content has 12x more engagement than static images.',
    how: 'Our creative team produces scroll-stopping videos tailored to each platform\'s unique audience and algorithm preferences.',
    results: 'Average 100K+ views per video campaign with measurable sales lift.',
    timeline: '1-2 weeks per video, ongoing content calendar',
    color: 'from-rose-500/10 to-transparent',
  },
  {
    id: 'launch',
    icon: <BookLaunchIcon size={64} />,
    title: 'Book Launch Campaigns',
    tagline: 'Make your launch unforgettable',
    description: 'A successful book launch creates momentum that carries your book for months. We orchestrate every detail for maximum impact.',
    features: [
      'Pre-launch buzz building',
      'Launch week coordination',
      'Media and blogger outreach',
      'Social media countdown campaigns',
      'Email blast sequences',
      'Launch event planning',
    ],
    why: 'The first 30 days determine your book\'s long-term trajectory on Amazon and beyond. A strong launch creates algorithmic advantages that last.',
    how: 'We create a comprehensive launch timeline, coordinate all marketing channels, and manage every detail so you can focus on writing.',
    results: 'Launches consistently achieve Amazon category bestseller status.',
    timeline: '4-8 weeks pre-launch preparation',
    color: 'from-violet-500/10 to-transparent',
  },
  {
    id: 'branding',
    icon: <AuthorBrandingIcon size={64} />,
    title: 'Author Branding',
    tagline: 'Build a brand readers remember',
    description: 'Your author brand is what turns one-time readers into lifelong fans. We help you craft a memorable identity that resonates.',
    features: [
      'Author website design',
      'Visual identity creation',
      'Brand voice development',
      'Social media branding',
      'Author photo direction',
      'Brand guidelines document',
    ],
    why: 'Authors with strong personal brands sell 40% more books across their catalog. Brand recognition drives repeat purchases.',
    how: 'We dive deep into your unique story, values, and target audience to create a brand that feels authentically you.',
    results: 'Cohesive brand presence across all platforms within 3-4 weeks.',
    timeline: '3-4 weeks for complete brand package',
    color: 'from-teal-500/10 to-transparent',
  },
  {
    id: 'email',
    icon: <EmailCampaignsIcon size={64} />,
    title: 'Email Marketing',
    tagline: 'Own your reader relationships',
    description: 'Your email list is your most valuable asset as an author. We help you build and nurture a list of devoted readers.',
    features: [
      'Reader magnet creation',
      'Landing page design',
      'Welcome sequence writing',
      'Newsletter campaigns',
      'Automation setup',
      'List growth strategies',
    ],
    why: 'Email marketing has a 40x ROI compared to social media. Your list is an asset you own, unlike social media followers.',
    how: 'We create irresistible reader magnets, design high-converting landing pages, and write email sequences that turn subscribers into buyers.',
    results: 'Average 25%+ open rates and 5%+ click-through rates on campaigns.',
    timeline: '2-3 weeks for setup, ongoing management',
    color: 'from-orange-500/10 to-transparent',
  },
  {
    id: 'promotion',
    icon: <BookPromotionIcon size={64} />,
    title: 'Book Promotion',
    tagline: 'Get your book in front of the right readers',
    description: 'Strategic promotion puts your book where your ideal readers are already looking. We target with precision to maximize every dollar.',
    features: [
      'BookBub feature deal strategy',
      'Amazon Advertising management',
      'Facebook/Instagram ads',
      'Promotional pricing campaigns',
      'Cross-promotion partnerships',
      'Performance tracking & optimization',
    ],
    why: 'Even the best book won\'t sell if readers don\'t know it exists. Targeted promotion ensures your marketing budget delivers results.',
    how: 'We analyze your genre, competition, and target audience to create promotion strategies that deliver the highest ROI.',
    results: 'Average 250% return on ad spend across campaigns.',
    timeline: 'Ongoing with monthly optimization',
    color: 'from-cyan-500/10 to-transparent',
  },
  {
    id: 'bookclubs',
    icon: <BookClubIcon size={64} />,
    title: 'Book Club Outreach',
    tagline: 'Spark conversations that spread',
    description: 'Book clubs are powerful engines of word-of-mouth. We connect your book with active clubs eager for their next great read.',
    features: [
      'Book club database access',
      'Personalized outreach campaigns',
      'Discussion guide creation',
      'Author visit coordination',
      'Virtual event planning',
      'Follow-up and relationship building',
    ],
    why: 'A single book club recommendation can reach 10-20 avid readers who trust their club\'s picks. Word-of-mouth is the most powerful marketing.',
    how: 'We identify book clubs in your genre, craft personalized pitches, and facilitate meaningful connections between authors and readers.',
    results: 'Average 20-30 book club placements per campaign.',
    timeline: '2-4 weeks for initial outreach',
    color: 'from-pink-500/10 to-transparent',
  },
]

export default function Services() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!pageRef.current) return

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.service-detail').forEach((el) => {
        gsap.fromTo(el,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          }
        )
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-ae-bg-primary">
        <div className="container-luxury">
          <SectionHeader
            tag="Services"
            title="Comprehensive Book Marketing Solutions"
            subtitle="Every service is designed to work independently or as part of an integrated strategy to maximize your book's success."
          />
        </div>
      </section>

      {/* Service Details */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${i % 2 === 0 ? 'bg-ae-bg-primary' : 'bg-ae-bg-secondary'}`}
        >
          <div className="container-luxury">
            <div className="service-detail opacity-0">
              {/* Header */}
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12">
                <div className="lg:w-1/3">
                  <div className="text-ae-gold mb-6">{service.icon}</div>
                  <h2 className="font-display text-3xl md:text-4xl text-ae-text-primary mb-3">
                    {service.title}
                  </h2>
                  <p className="text-ae-gold text-lg mb-6">{service.tagline}</p>
                  <div className={`h-1 w-24 gold-gradient rounded-full`} />
                </div>
                <div className="lg:w-2/3">
                  <p className="text-ae-text-secondary text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Why / How / Results */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="glass-card p-5">
                      <Target className="w-5 h-5 text-ae-gold mb-3" />
                      <h4 className="font-display text-ae-text-primary mb-2">Why It Matters</h4>
                      <p className="text-ae-text-secondary text-sm">{service.why}</p>
                    </div>
                    <div className="glass-card p-5">
                      <BarChart3 className="w-5 h-5 text-ae-gold mb-3" />
                      <h4 className="font-display text-ae-text-primary mb-2">How It Works</h4>
                      <p className="text-ae-text-secondary text-sm">{service.how}</p>
                    </div>
                    <div className="glass-card p-5">
                      <Clock className="w-5 h-5 text-ae-gold mb-3" />
                      <h4 className="font-display text-ae-text-primary mb-2">Timeline</h4>
                      <p className="text-ae-text-secondary text-sm">{service.timeline}</p>
                    </div>
                  </div>

                  {/* Expected Results */}
                  <div className="glass-card p-5 border-ae-gold/20">
                    <p className="text-ae-gold font-medium">{service.results}</p>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div>
                <h3 className="font-display text-xl text-ae-text-primary mb-6">What&apos;s Included</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3 p-4 glass-card">
                      <Check className="w-5 h-5 text-ae-gold flex-shrink-0 mt-0.5" />
                      <span className="text-ae-text-secondary text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-ae-bg-tertiary border-t border-ae-border/20">
        <div className="container-luxury text-center">
          <h2 className="font-display text-3xl md:text-4xl text-ae-text-primary mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-ae-text-secondary max-w-xl mx-auto mb-8">
            Book a free consultation and we&apos;ll help you choose the right strategy for your book.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/team"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 gold-gradient text-ae-text-inverse font-medium rounded-full hover:shadow-gold-glow transition-all"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-ae-border text-ae-text-primary font-medium rounded-full hover:border-ae-border-hover transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
