import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeader from '../components/SectionHeader'
import { Check, Sparkles, ArrowRight, HelpCircle, X } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const plans = [
  {
    name: 'Basic',
    price: '$300',
    description: 'Perfect for new authors starting their marketing journey.',
    features: [
      'Amazon Keyword & Metadata Overhaul',
      'Goodreads Metadata & Genre Optimization',
      'Listopia Placement on 5-8 High-Traffic Lists',
      'Basic Amazon SEO Setup',
      '1 Month of Support',
    ],
    notIncluded: [
      'Review Generation',
      'Email Campaigns',
      'Video Marketing',
      'Book Club Outreach',
    ],
    popular: false,
    cta: 'Get Started',
  },
  {
    name: 'Standard',
    price: '$500',
    description: 'Our most popular choice for serious authors.',
    features: [
      'Everything in Basic',
      'Goodreads Review Generation (15-20 Authentic Reviews)',
      'Targeted Email Campaign (500 readers)',
      'Amazon Ads Setup & Management',
      'Social Media Content Calendar',
      '3 Months of Support',
    ],
    notIncluded: [
      'Video Marketing',
      'Book Club Outreach',
    ],
    popular: true,
    cta: 'Most Popular',
  },
  {
    name: 'Advanced',
    price: '$800',
    description: 'The complete package for maximum impact.',
    features: [
      'Everything in Standard',
      'Cinematic Short-Form Video Content (3-5 Videos)',
      'Targeted Book Club Outreach (20-30 Book Clubs)',
      'Ongoing Listopia Maintenance & Expansion',
      'Influencer Outreach Campaign',
      'PR & Media Pitching',
      '6 Months of Support',
    ],
    notIncluded: [],
    popular: false,
    cta: 'Go Advanced',
  },
]

const faqs = [
  {
    q: 'Can I upgrade my plan later?',
    a: 'Yes! You can upgrade at any time. We\'ll apply a prorated credit from your current plan toward the new one.',
  },
  {
    q: 'Are there any hidden fees?',
    a: 'No. The price you see is the price you pay. We don\'t charge setup fees or have hidden costs.',
  },
  {
    q: 'What if I\'m not satisfied?',
    a: 'We offer a 30-day satisfaction guarantee. If you\'re not happy with our work, we\'ll refund your investment.',
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes, we offer flexible payment plans for Standard and Advanced packages. Contact us to discuss options.',
  },
  {
    q: 'How long until I see results?',
    a: 'Most clients see initial results within 2-4 weeks, with significant improvements at the 60-90 day mark.',
  },
]

export default function Pricing() {
  const pageRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!pageRef.current) return

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.pricing-card').forEach((el, i) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, delay: i * 0.15, ease: 'power2.out',
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
            tag="Pricing"
            title="Investment in Your Success"
            subtitle="Transparent pricing with no hidden fees. Choose the package that fits your goals and budget."
          />
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-ae-bg-secondary">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`pricing-card relative rounded-2xl p-8 opacity-0 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-ae-gold/10 to-ae-bg-secondary border-2 border-ae-gold/50 scale-105 md:scale-110 z-10'
                    : 'glass-card border border-ae-border/30'
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 gold-gradient rounded-full flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-ae-text-inverse" />
                    <span className="text-ae-text-inverse text-xs font-semibold">MOST POPULAR</span>
                  </div>
                )}

                {/* Plan header */}
                <div className="text-center mb-8">
                  <h3 className="font-display text-xl text-ae-text-primary mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-3">
                    <span className={`font-display text-4xl md:text-5xl ${plan.popular ? 'gold-gradient-text' : 'text-ae-text-primary'}`}>
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-ae-text-secondary text-sm">{plan.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-ae-gold' : 'text-emerald-400'}`} />
                      <span className="text-ae-text-secondary text-sm">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3 opacity-50">
                      <X className="w-5 h-5 flex-shrink-0 mt-0.5 text-ae-text-secondary" />
                      <span className="text-ae-text-secondary text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to="/team"
                  className={`block w-full py-4 rounded-full text-center font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'gold-gradient text-ae-text-inverse hover:shadow-gold-glow-lg hover:scale-[1.02]'
                      : 'border border-ae-border text-ae-text-primary hover:border-ae-border-hover hover:bg-ae-text-primary/5'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full">
              <Sparkles className="w-5 h-5 text-ae-gold" />
              <span className="text-ae-text-secondary text-sm">30-Day Satisfaction Guarantee on All Plans</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-ae-bg-primary">
        <div className="container-luxury max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl text-ae-text-primary text-center mb-12">
            Feature Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-ae-border/30">
                  <th className="text-left py-4 px-4 text-ae-text-secondary font-medium text-sm">Feature</th>
                  <th className="text-center py-4 px-4 text-ae-text-primary font-display">Basic</th>
                  <th className="text-center py-4 px-4 text-ae-gold font-display">Standard</th>
                  <th className="text-center py-4 px-4 text-ae-text-primary font-display">Advanced</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Amazon Keyword Optimization', true, true, true],
                  ['Goodreads Setup', true, true, true],
                  ['Listopia Placement', '5-8 lists', '10-15 lists', '20-30 lists'],
                  ['Review Generation', false, '15-20 reviews', '30-50 reviews'],
                  ['Email Campaign', false, true, true],
                  ['Amazon Ads', false, true, true],
                  ['Social Media Content', false, true, true],
                  ['Video Marketing', false, false, '3-5 videos'],
                  ['Book Club Outreach', false, false, '20-30 clubs'],
                  ['Influencer Outreach', false, false, true],
                  ['PR & Media Pitching', false, false, true],
                  ['Support Duration', '1 month', '3 months', '6 months'],
                ].map(([feature, basic, standard, advanced], i) => (
                  <tr key={i} className="border-b border-ae-border/10">
                    <td className="py-4 px-4 text-ae-text-secondary text-sm">{feature}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof basic === 'boolean' ? (
                        basic ? <Check className="w-5 h-5 text-emerald-400 mx-auto" /> : <X className="w-5 h-5 text-ae-text-secondary/30 mx-auto" />
                      ) : (
                        <span className="text-ae-text-secondary text-sm">{basic}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center bg-ae-gold/5">
                      {typeof standard === 'boolean' ? (
                        standard ? <Check className="w-5 h-5 text-ae-gold mx-auto" /> : <X className="w-5 h-5 text-ae-text-secondary/30 mx-auto" />
                      ) : (
                        <span className="text-ae-gold text-sm font-medium">{standard}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof advanced === 'boolean' ? (
                        advanced ? <Check className="w-5 h-5 text-emerald-400 mx-auto" /> : <X className="w-5 h-5 text-ae-text-secondary/30 mx-auto" />
                      ) : (
                        <span className="text-ae-text-secondary text-sm">{advanced}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-ae-bg-secondary">
        <div className="container-luxury max-w-2xl">
          <h2 className="font-display text-2xl md:text-3xl text-ae-text-primary text-center mb-12">
            Pricing FAQ
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-ae-border/20 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-ae-bg-tertiary/50 transition-colors"
                >
                  <span className="font-display text-ae-text-primary text-sm md:text-base pr-4">{faq.q}</span>
                  <HelpCircle className="w-5 h-5 text-ae-gold flex-shrink-0" />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-ae-text-secondary text-sm">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ae-bg-tertiary border-t border-ae-border/20">
        <div className="container-luxury text-center">
          <h2 className="font-display text-3xl text-ae-text-primary mb-4">
            Still Have Questions?
          </h2>
          <p className="text-ae-text-secondary mb-8 max-w-md mx-auto">
            Book a free call to discuss your book and get a personalized recommendation.
          </p>
          <Link
            to="/team"
            className="inline-flex items-center gap-2 px-8 py-4 gold-gradient text-ae-text-inverse font-medium rounded-full hover:shadow-gold-glow transition-all"
          >
            Book Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
