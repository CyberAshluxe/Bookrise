import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeader from '../components/SectionHeader'
import StatCounter from '../components/StatCounter'
import TestimonialCard from '../components/TestimonialCard'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLocale } from '../i18n/LocaleProvider'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { end: 500, suffix: '+', label: 'Books Promoted' },
  { end: 94, suffix: '%', label: 'Client Satisfaction' },
  { end: 15, suffix: 'M+', label: 'Readers Reached' },
  { end: 8, suffix: 'M+', prefix: '$', label: 'Revenue Generated' },
]

const testimonials = [
  {
    quote: 'Working with BookRise gave my book the visibility it deserved. They helped bring more buyers to my page, encouraged authentic reviews, and made my work far more visible to the right audience.',
    author: 'Gail Ward Olmsted',
    role: 'Author',
    image: '/assets/gail.webp',
    rating: 5,
  },
  {
    quote: 'BookRise transformed my book launch. Within three months, my novel went from obscurity to appearing on Amazon\'s bestseller lists. Their team\'s expertise in Amazon optimization and targeted promotions  is unmatched.',
    author: 'D.K. Hood',
    role: 'Author',
    image: '/assets/dk hood.webp',
    rating: 5,
  },
  {
    quote: 'Patient 7 is a gripping psychological thriller with a shocking twist, and the visibility and support around it helped it reach readers who truly connected with the story.',
    author: 'Sabrina Wade',
    role: 'Author',
    image: '/assets/patient.jpg',
    rating: 5,
  },
]

const featuredBooks = [
  {
    image: '/assets/landscape of a marraige.jpg',
    amazonLink: 'https://www.amazon.com/Landscape-Marriage-Central-Park-Beginning-ebook/dp/B0947331QQ?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.UhudNHFFTJ-7iO757kAiykPDXoFswlPYnFQCMnKTuy3DuVN0C_cyNvX0wlVT6iN6s_Glhcc4f1dZRJx5jXKzBXu3QeVnU1fjCcDdVTlQP9TqLaUaenumjN5xY3PG5ohnFdtwFtPiuzZNkGiN9pRSW0_3vSyg99bPLHj-kvWfJHcrRb0AQbuFaPeAfbIEzJlD5zEIiDjr1HxgFn03aGcDsZesAwSJcIYYOwiUigpD5K8.zKXxX1VBtTY8K-2RWgNSooa08CS30kubKMWgim2fZuo&dib_tag=AUTHOR',
  },
  {
    image: '/assets/the killing of faith.jpg',
    amazonLink: 'https://www.amazon.com/Killing-Faith-Suspense-Thriller-Forget-ebook/dp/B08NSLB3LX?ref_=ast_author_mpb',
  },
  {
    image: '/assets/the perfect neighborhood.jpg',
    amazonLink: 'https://www.amazon.com/Perfect-Neighborhood-gripping-psychological-thriller-ebook/dp/B07P8G79WC/ref=pd_sbs_d_sccl_1_7/146-0342804-5221228?pd_rd_w=Qsrlr&content-id=amzn1.sym.aa738fbd-ad05-4d11-aae2-04b598db6305&pf_rd_p=aa738fbd-ad05-4d11-aae2-04b598db6305&pf_rd_r=R1M1FEW5TYSFA3NEXHBN&pd_rd_wg=exyn0&pd_rd_r=5aaee989-466b-428b-9d94-1bb4b0b90e93&pd_rd_i=B07P8G79WC&psc=1#averageCustomerReviewsAnchor',
  },
  {
    image: '/assets/dont tell a soul.jpg',
    amazonLink: 'https://www.amazon.com/Dont-Tell-Soul-gripping-Detectives-ebook/dp/B074N9F4MP?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.pwaQDKCeNEtEci7LmxhJIv6PFBT3dN-6-pHHfZywcx5z7KvRwCeAOFAQ77S2M3D5q1lVbjiuPKH9e-U6DEHTNPY_gJQkwDu8AsD98tbwEOzuzA662jRbd1zRcwXiA9SAnOl0dJjg4Ou4M0kC1zY43RwMz65rQLpVT79Xxo0RD3Bar5j9QBeZUpLuLk2bIM3_eFYqyyRfzu99d34Aue8mnKxPnMVfjoeBHXInfoPTOuY.vEK9Ahgt9Ce1evAHk54_oh1NIWnYUG_7ALjHfCZyGc4&dib_tag=AUTHOR',
  },
  {
    image: '/assets/patient.jpg',
    amazonLink: 'https://www.amazon.com/Patient-gripping-psychological-thriller-shocking-ebook/dp/B0GWVZGT83?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.j0bNIM_mQk0KJ_OnXYu71l-QaPl-wDmqTFUjemJOKKpdgMn9rw6imlDnmqvs5jgYz3S3kxXlRKbKemE_fXIXRM8znD0nb-BA2d48ur8Ng0pPTH902jbclR7HCQ8Onwlj-wO0ITkfV_hHjVP57yrXxpPJ_56BCmzOfX2pJlWfMH6WI75rDRHCCftu0yaI_gjsbHQa8rgy_VYXnxYmvpKcJfWzOGSzUk8LYQFPGSZAcRA.fnFjl9_D3l8rMdJFr-PO4PuNv7ZyJqzKyCQnC-IAk-Y&dib_tag=AUTHOR',
  },
  {
    image: "/assets/motty's vow.jpg",
    amazonLink: "https://www.amazon.com/Mottys-Vow-Novel-Family-Resilience-ebook/dp/B0DM2P7FW4?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.zAngrRSYAAasMtiNy7PgcX6BVGf1cKq_opzjmwXuqa_GjHj071QN20LucGBJIEps.BFimGJE4rN4bgOwaArA3M4DJb_4zlnbVy49aK1sIAJA&dib_tag=AUTHOR#averageCustomerReviewsAnchor",
  },
]

export default function ResultsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const { t } = useLocale()

  useEffect(() => {
    if (!testimonialsRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo('.testimonial-video',
        { x: -30, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: testimonialsRef.current, start: 'top 80%', once: true },
        }
      )
      gsap.fromTo('.testimonial-text',
        { x: 30, opacity: 0 },
        {
          x: 0, opacity: 1, stagger: 0.2, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: testimonialsRef.current, start: 'top 80%', once: true },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="success-stories" className="section-padding bg-ae-bg-secondary">
      <div className="container-luxury">
        <SectionHeader
          tag={t('resultsPage.tag')}
          title={t('resultsPage.title')}
          subtitle={t('resultsPage.subtitle')}
        />

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, i) => (
            <StatCounter
              key={stat.label}
              end={stat.end}
              suffix={stat.suffix}
              prefix={stat.prefix || ''}
              label={stat.label}
              delay={i * 0.3}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-ae-border/50 to-transparent mb-20" />

        {/* Testimonials */}
        <div className="mb-8">
          <h3 className="font-display text-2xl md:text-3xl text-ae-text-primary text-center mb-12">
            What Authors Say
          </h3>
        </div>

        <div ref={testimonialsRef} className="mb-20">
          <div className="flex flex-col gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-text opacity-0">
                <TestimonialCard
                  quote={t.quote}
                  author={t.author}
                  role={t.role}
                  image={t.image}
                  rating={t.rating}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-ae-border/50 to-transparent mb-20" />

        {/* Featured Books */}
        <div className="mb-8">
          <h3 className="font-display text-2xl md:text-3xl text-ae-text-primary text-center mb-12">
            Featured Success Stories
          </h3>
        </div>

        <div className="mb-12">
          <Marquee pauseOnHover speed={45} gradient={false} className="py-4">
            {featuredBooks.map((book, i) => (
              <a
                key={i}
                href={book.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-6 flex items-center"
              >
                <img
                  src={book.image}
                  alt={`Featured book ${i + 1}`}
                  className="h-40 md:h-56 lg:h-64 object-contain rounded-md shadow-sm"
                />
              </a>
            ))}
          </Marquee>
        </div>

        <div className="text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-4 gold-gradient text-ae-text-inverse font-medium rounded-full hover:shadow-gold-glow transition-all duration-300 hover:scale-[1.02]"
          >
            {t('resultsPage.seeAll')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
