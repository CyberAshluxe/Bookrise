import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    question: 'How long does it take to see results?',
    answer: 'Most authors begin seeing measurable results within 4-6 weeks. Amazon optimization typically shows improvements in 2-3 weeks, while review generation and Goodreads growth usually take 4-8 weeks to build momentum. Our book launch campaigns are designed for immediate impact.',
  },
  {
    question: 'Do you work with all genres?',
    answer: 'Yes, we work with fiction and nonfiction across all genres. Our strategies are customized for each book\'s target audience, genre conventions, and competitive landscape. From romance to sci-fi, memoirs to business books, we have experience promoting them all.',
  },
  {
    question: 'What makes you different from other book marketers?',
    answer: 'We combine deep Amazon SEO expertise with authentic community building on Goodreads, strategic video marketing, and personalized author branding. Our 94% client satisfaction rate and track record of 500+ successful book promotions speak to our commitment to results.',
  },
  {
    question: 'How do you generate authentic reviews?',
    answer: 'We connect your book with genuine readers through targeted email campaigns, book club outreach, and Goodreads community engagement. We never use fake reviews or pay for reviews — all reviews come from real readers who received your book through legitimate channels.',
  },
  {
    question: 'Can you help with an already published book?',
    answer: 'Absolutely. Many of our most successful campaigns have been for backlist titles. We can revitalize existing books through Amazon optimization, new review campaigns, price promotions, and fresh marketing strategies to reach new readers.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'We offer three packages: Basic ($300), Standard ($500), and Advanced ($800). Each package includes different levels of service from Amazon optimization to video marketing and book club outreach. You can view our full pricing on the Pricing page.',
  },
]

function FAQItem({ question, answer, isOpen, onClick, index }: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
  index: number
}) {
  const contentRef = useRef<HTMLDivElement>(null)
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!itemRef.current) return
    gsap.fromTo(itemRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.5, delay: index * 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: itemRef.current, start: 'top 90%', once: true },
      }
    )
  }, [index])

  useEffect(() => {
    if (!contentRef.current) return
    if (isOpen) {
      gsap.to(contentRef.current, { height: 'auto', opacity: 1, duration: 0.3, ease: 'power2.out' })
    } else {
      gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.in' })
    }
  }, [isOpen])

  return (
    <div
      ref={itemRef}
      className="border border-ae-border/20 rounded-xl overflow-hidden opacity-0"
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-ae-bg-secondary/50 transition-colors"
      >
        <span className="font-display text-ae-text-primary text-base md:text-lg pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-ae-gold flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="px-5 md:px-6 pb-5 md:pb-6">
          <p className="text-ae-text-secondary text-sm md:text-base leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!headerRef.current) return
    gsap.fromTo(headerRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 85%', once: true },
      }
    )
  }, [])

  return (
    <section className="section-padding bg-ae-bg-primary">
      <div className="container-luxury max-w-3xl">
        <div ref={headerRef} className="text-center mb-12 opacity-0">
          <span className="text-ae-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-ae-text-primary">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
