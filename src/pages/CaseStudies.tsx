import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeader from '../components/SectionHeader'
import StarRating from '../components/StarRating'
import { TrendingUp, Star, DollarSign, Eye } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const caseStudies = [
  
  // New case studies added per request
  {
    image: '/assets/landscape of a marraige.jpg',
    title: 'Landscape of a Marriage: Central Park Was Only the Beginning',
    author: 'Gail Ward Olmsted',
    genre: 'Contemporary Romance / Literary Fiction',
    amazonRating: 4.8,
    amazonReviews: '2,407',
    goodreadsRating: 4.5,
    before: {
      visibility: 'Low visibility',
      reviews: '15',
      ranking: 'N/A',
    },
    after: {
      visibility: 'Increased discoverability',
      reviews: '2,407',
      ranking: 'N/A',
      engagement: '+15,980%'
    },
    strategies: ['Amazon Optimization', 'Goodreads Growth', 'Launch Campaigns'],
    duration: '3 months',
    metrics: { sales: 'N/A', reviews: '+2,392', impressions: 'N/A', revenue: 'N/A' },
    amazonLink: 'https://www.amazon.com/Landscape-Marriage-Central-Park-Beginning-ebook/dp/B0947331QQ?ref_=ast_author_dp_rw&th=1&psc=1',
    authorLink: 'https://www.amazon.com/Gail-Ward-Olmsted/e/B00JSIWIHS/ref=dp_byline_cont_ebooks_1',
  },
  {
    image: '/assets/the killing of faith.jpg',
    title: 'The Killing of Faith: "An Incredible Suspense Thriller With A Mind-Blowing Ending." (The Killing of Faith Series Book 1)',
    author: 'William Holms',
    genre: 'Suspense Thriller',
    amazonRating: 4.2,
    amazonReviews: '1,645',
    goodreadsRating: 4.0,
    before: { visibility: 'Low reviews', reviews: '29', ranking: 'N/A' },
    after: { visibility: 'Improved reach', reviews: '1,645', ranking: 'N/A', engagement: '+5,500%' },
    strategies: ['Review Campaigns', 'Amazon SEO', 'Promotions'],
    duration: '2 months',
    metrics: { sales: 'N/A', reviews: '+1,616', impressions: 'N/A', revenue: 'N/A' },
    amazonLink: 'https://www.amazon.com/Killing-Faith-Suspense-Thriller-Forget-ebook/dp/B08NSLB3LX?ref_=ast_author_mpb',
    authorLink: 'https://www.amazon.com/William-Holms/e/B08P13G6VR/ref=dp_byline_cont_ebooks_1',
  },
  {
    image: '/assets/the perfect neighborhood.jpg',
    title: 'The Perfect Neighborhood: A gripping psychological thriller that will keep you hooked to the last chilling twist',
    author: 'Jo Crow',
    genre: 'Psychological Thriller',
    amazonRating: 4.3,
    amazonReviews: '906',
    goodreadsRating: 4.1,
    before: { visibility: 'Low reviews', reviews: '9', ranking: 'N/A' },
    after: { visibility: 'Increased discoverability', reviews: '906', ranking: 'N/A', engagement: '+10,000%' },
    strategies: ['Amazon Optimization', 'Promotions', 'Goodreads Growth'],
    duration: '3 months',
    metrics: { sales: 'N/A', reviews: '+897', impressions: 'N/A', revenue: 'N/A' },
    amazonLink: 'https://www.amazon.com/Perfect-Neighborhood-gripping-psychological-thriller-ebook/dp/B07P8G79WC',
    authorLink: 'https://www.amazon.com/Jo-Crow/e/B0781194Q5/ref=dp_byline_cont_ebooks_1',
  },
  {
    image: '/assets/dont tell a soul.jpg',
    title: "Don't Tell a Soul: A gripping crime thriller that will have you hooked (Detectives Kane and Alton Book 1)",
    author: 'D.K. Hood',
    genre: 'Crime Thriller',
    amazonRating: 4.3,
    amazonReviews: '9,632',
    goodreadsRating: 4.2,
    before: { visibility: 'Moderate', reviews: '571', ranking: 'N/A' },
    after: { visibility: 'Higher reach', reviews: '9,632', ranking: 'N/A', engagement: '+1,590%' },
    strategies: ['Review Growth', 'Email Campaigns', 'Promotions'],
    duration: '4 months',
    metrics: { sales: 'N/A', reviews: '+9,061', impressions: 'N/A', revenue: 'N/A' },
    amazonLink: 'https://www.amazon.com/Dont-Tell-Soul-gripping-Detectives-ebook/dp/B074N9F4MP?ref_=ast_author_dp_rw',
    authorLink: 'https://www.amazon.com/D-K-Hood/e/B074P3Z83D/ref=dp_byline_cont_ebooks_1',
  },
  {
    image: '/assets/patient.jpg',
    title: 'Patient 7: A gripping psychological thriller with a shocking twist.',
    author: 'Sabrina Wade',
    genre: 'Psychological Thriller',
    amazonRating: 4.3,
    amazonReviews: '2,683',
    goodreadsRating: 4.0,
    before: { visibility: 'Low reviews', reviews: '191', ranking: 'N/A' },
    after: { visibility: 'Improved discoverability', reviews: '2,683', ranking: 'N/A', engagement: '+1,300%' },
    strategies: ['Amazon Optimization', 'Promotions', 'Goodreads Growth'],
    duration: '3 months',
    metrics: { sales: 'N/A', reviews: '+2,492', impressions: 'N/A', revenue: 'N/A' },
    amazonLink: 'https://www.amazon.com/Patient-gripping-psychological-thriller-shocking-ebook/dp/B0GWVZGT83?ref_=ast_author_dp_rw',
    authorLink: 'https://www.amazon.com/Sabrina-Wade/e/B0D9WFWJGQ/ref=dp_byline_cont_ebooks_1',
  },
  {
    image: "/assets/motty's vow.jpg",
    title: "Mottys Vow: A Novel of Family, Duty, and Resilience (Roots of Resilience Book 1)",
    author: 'Diane Wahn Shotton',
    genre: 'Thriller',
    amazonRating: 4.5,
    amazonReviews: '1,170',
    goodreadsRating: 4.1,
    before: { visibility: 'Very low', reviews: '2', ranking: 'N/A' },
    after: { visibility: 'Significant uplift', reviews: '1,170', ranking: 'N/A', engagement: '+58,400%' },
    strategies: ['Launch Campaign', 'Promotions', 'Amazon SEO'],
    duration: '4 months',
    metrics: { sales: 'N/A', reviews: '+1,168', impressions: 'N/A', revenue: 'N/A' },
    amazonLink: 'https://www.amazon.com/Mottys-Vow-Novel-Family-Resilience-ebook/dp/B0DM2P7FW4?ref_=ast_author_dp_rw',
    authorLink: 'https://www.amazon.com/Diane-Wahn-Shotton/e/B0DM2PHYFN/ref=dp_byline_cont_ebooks_1',
  },
  {
    image: '/assets/book-educated.jpg',
    title: 'The Inconvenient Child: The True Life Story of an Abandoned Australian Childs Struggle to Survive an Abusive Childhood and Journey to Find Her African American Father',
    author: 'Lindsay Lewis, Sharyn Killens',
    genre: 'Memoir / Biography',
    amazonRating: 4.4,
    amazonReviews: '1,442',
    goodreadsRating: 4.2,
    before: { visibility: 'Low visibility', reviews: '14', ranking: 'N/A' },
    after: { visibility: 'Increased reach', reviews: '1,442', ranking: 'N/A' },
    strategies: ['Amazon Optimization', 'Promotions', 'Review Growth'],
    duration: '3 months',
    metrics: { sales: 'N/A', reviews: '+1,428', impressions: 'N/A', revenue: 'N/A' },
    amazonLink: 'https://www.amazon.com/dp/B01C4FPB9S',
    authorLink: 'https://www.amazon.com/Lindsay-Lewis/e/B002C7ERD0/ref=dp_byline_cont_ebooks_1',
  },
  {
    image: '/assets/book-educated.jpg',
    title: "The Howdie's Apprentice: An uplifting tale of survival, resilience and the struggle for freedom in 18th century Scotland.",
    author: 'Andy Marr',
    genre: 'Historical Fiction',
    amazonRating: 4.4,
    amazonReviews: '440',
    goodreadsRating: 4.1,
    before: { visibility: 'Very low', reviews: '1', ranking: 'N/A' },
    after: { visibility: 'Improved reach', reviews: '440', ranking: 'N/A' },
    strategies: ['Amazon Optimization', 'Promotions'],
    duration: '2 months',
    metrics: { sales: 'N/A', reviews: '+439', impressions: 'N/A', revenue: 'N/A' },
    amazonLink: 'https://www.amazon.com/dp/B0FZ3QRBM2',
    authorLink: 'https://www.amazon.com/Andy-Marr/e/B07VZ6TNSV/ref=dp_byline_cont_ebooks_1',
  },
  {
    image: '/assets/book-educated.jpg',
    title: 'The Snowbound Seamstress',
    author: 'Sybil Cook',
    genre: 'Historical Fiction / Romance',
    amazonRating: 4.4,
    amazonReviews: '747',
    goodreadsRating: 4.1,
    before: { visibility: 'Very low', reviews: '2', ranking: 'N/A' },
    after: { visibility: 'Improved reach', reviews: '747', ranking: 'N/A' },
    strategies: ['Launch Campaign', 'Promotions'],
    duration: '3 months',
    metrics: { sales: 'N/A', reviews: '+745', impressions: 'N/A', revenue: 'N/A' },
    amazonLink: 'https://www.amazon.com/dp/B0G4WBXF5M',
    authorLink: 'https://www.amazon.com/Sybil-Cook/e/B0D66JKD1Y/ref=dp_byline_cont_ebooks_1',
  },
  {
    image: '/assets/guarding what remains.jpg',
    title: 'Guarding What Remains: A Great Depression Novel',
    author: 'Ida Smith',
    genre: 'Historical Fiction',
    amazonRating: 4.4,
    amazonReviews: '1,224',
    goodreadsRating: 4.2,
    before: { visibility: 'Low visibility', reviews: '12', ranking: 'N/A' },
    after: { visibility: 'Increased reach', reviews: '1,224', ranking: 'N/A' },
    strategies: ['Amazon Optimization', 'Promotions', 'Reader Outreach'],
    duration: '3 months',
    metrics: { sales: 'N/A', reviews: '+1,212', impressions: 'N/A', revenue: 'N/A' },
    amazonLink: 'https://www.amazon.com/dp/B0BDWLL5PM',
    authorLink: 'https://www.amazon.com/Ida-Smith/e/B014I77YUY/ref=dp_byline_cont_ebooks_1',
  },
  {
    image: '/assets/as far as eye.jpg',
    title: 'As Far as The Eye Can See',
    author: 'Clarise Rivera',
    genre: 'Historical Fiction',
    amazonRating: 4.4,
    amazonReviews: '1,669',
    goodreadsRating: 4.1,
    before: { visibility: 'Low visibility', reviews: '59', ranking: 'N/A' },
    after: { visibility: 'Increased reach', reviews: '1,669', ranking: 'N/A' },
    strategies: ['Amazon Optimization', 'Promotions', 'Goodreads Campaign'],
    duration: '4 months',
    metrics: { sales: 'N/A', reviews: '+1,610', impressions: 'N/A', revenue: 'N/A' },
    amazonLink: 'https://www.amazon.com/As-Far-Eye-Can-See-ebook/dp/B071P37Z11',
    authorLink: 'https://www.amazon.com/Clarise-Rivera/e/B071SHW77F/ref=dp_byline_cont_ebooks_1',
  },
  {
    image: '/assets/hymns blue hollow.jpg',
    title: 'Hymns of Blue Hollow: A 1940s Southern Appalachian Historical Romance and Family Saga',
    author: 'Kemma MarShall',
    genre: 'Historical Romance',
    amazonRating: 4.5,
    amazonReviews: '2,002',
    goodreadsRating: 4.2,
    before: { visibility: 'New release', reviews: '0', ranking: 'N/A' },
    after: { visibility: 'Strong uptake', reviews: '2,002', ranking: 'N/A' },
    strategies: ['Launch Campaign', 'Goodreads Growth', 'Promotions'],
    duration: '3 months',
    metrics: { sales: 'N/A', reviews: '+2,002', impressions: 'N/A', revenue: 'N/A' },
    amazonLink: 'https://www.amazon.com/Hymns-Blue-Hollow-Southern-Historical-ebook/dp/B0DMKYFKC3',
    authorLink: 'https://www.amazon.com/Kemma-MarShall/e/B0DMN57FQK/ref=dp_byline_cont_ebooks_1',
  },
  {
    image: '/assets/bible black water.jpg',
    title: 'The Bible of Blackwater County: A Gritty Depression-Era Appalachian Novel Based on True Events',
    author: 'Jenny Cafaro',
    genre: 'Religious Historical Fiction',
    amazonRating: 4.6,
    amazonReviews: '2,608',
    goodreadsRating: 4.3,
    before: { visibility: 'Low visibility', reviews: '7', ranking: 'N/A' },
    after: { visibility: 'Bestseller traction', reviews: '2,608', ranking: '#1 Religious Historical Fiction' },
    strategies: ['Amazon Optimization', 'PR Campaign', 'Promotions'],
    duration: '3 months',
    metrics: { sales: 'N/A', reviews: '+2,601', impressions: 'N/A', revenue: 'N/A' },
    amazonLink: 'https://www.amazon.com/dp/B0GTH3G7LG',
    authorLink: 'https://www.amazon.com/Jenny-Cafaro/e/B0CP78LRL8/ref=dp_byline_cont_ebooks_1',
  },
]

export default function CaseStudies() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!pageRef.current) return

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.case-study-card').forEach((el, i) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, delay: (i % 3) * 0.1, ease: 'power2.out',
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
            tag="Case Studies"
            title="Real Results for Real Authors"
            subtitle="Explore how we've helped authors across genres achieve bestseller status and build lasting reader communities."
          />
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-ae-bg-secondary">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, i) => (
              <div key={i} className="case-study-card glass-card overflow-hidden opacity-0">
                {/* Book Header */}
                <div className="flex flex-col sm:flex-row gap-6 p-6 md:p-8">
                  <div className="sm:w-32 md:w-40 flex-shrink-0">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full aspect-[2/3] object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-ae-gold/10 text-ae-gold text-xs rounded-full border border-ae-gold/20">
                        {study.genre}
                      </span>
                      <span className="text-ae-text-secondary text-xs">{study.duration}</span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl text-ae-text-primary mb-1">
                      {study.title}
                    </h3>
                    <p className="text-ae-text-secondary text-sm mb-3">{study.author}</p>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <StarRating rating={Math.round(study.amazonRating)} size={14} />
                        <span className="text-ae-text-secondary text-xs ml-1">{study.amazonRating}</span>
                      </div>
                      <span className="text-ae-gold text-xs font-medium">{study.amazonReviews} reviews</span>
                      {/* View on Amazon button */}
                      {study.amazonLink && (
                        <a
                          href={study.amazonLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-auto inline-flex items-center gap-2 px-3 py-2 rounded-full border border-ae-border/40 text-sm font-medium text-ae-text-primary hover:bg-ae-bg-secondary transition"
                        >
                          View on Amazon
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Before / After */}
                <div className="px-6 md:px-8 pb-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-ae-bg-primary/50 rounded-lg border border-red-500/20">
                      <p className="text-red-400 text-xs uppercase tracking-wider mb-2">Before</p>
                      <ul className="space-y-1">
                        {Object.values(study.before).slice(0, 2).map((val, j) => (
                          <li key={j} className="text-ae-text-secondary text-xs">{val}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 bg-ae-bg-primary/50 rounded-lg border border-emerald-500/20">
                      <p className="text-emerald-400 text-xs uppercase tracking-wider mb-2">After</p>
                      <ul className="space-y-1">
                        {Object.values(study.after).slice(0, 2).map((val, j) => (
                          <li key={j} className="text-ae-text-secondary text-xs">{val}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Strategies */}
                <div className="px-6 md:px-8 pb-4">
                  <p className="text-ae-text-secondary text-xs uppercase tracking-wider mb-2">Strategies Used</p>
                  <div className="flex flex-wrap gap-2">
                    {study.strategies.map((s, j) => (
                      <span key={j} className="px-2 py-1 bg-ae-bg-tertiary text-ae-text-secondary text-xs rounded-full border border-ae-border/20">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <div className="grid grid-cols-4 gap-3">
                    <div className="text-center p-3 bg-ae-bg-primary/50 rounded-lg">
                      <TrendingUp className="w-4 h-4 text-ae-gold mx-auto mb-1" />
                      <p className="text-ae-gold text-sm font-bold">{study.metrics.sales}</p>
                      <p className="text-ae-text-secondary text-[10px]">Sales</p>
                    </div>
                    <div className="text-center p-3 bg-ae-bg-primary/50 rounded-lg">
                      <Star className="w-4 h-4 text-ae-gold mx-auto mb-1" />
                      <p className="text-ae-gold text-sm font-bold">{study.metrics.reviews}</p>
                      <p className="text-ae-text-secondary text-[10px]">Reviews</p>
                    </div>
                    <div className="text-center p-3 bg-ae-bg-primary/50 rounded-lg">
                      <Eye className="w-4 h-4 text-ae-gold mx-auto mb-1" />
                      <p className="text-ae-gold text-sm font-bold">{study.metrics.impressions}</p>
                      <p className="text-ae-text-secondary text-[10px]">Impressions</p>
                    </div>
                    <div className="text-center p-3 bg-ae-bg-primary/50 rounded-lg">
                      <DollarSign className="w-4 h-4 text-ae-gold mx-auto mb-1" />
                      <p className="text-ae-gold text-sm font-bold">{study.metrics.revenue}</p>
                      <p className="text-ae-text-secondary text-[10px]">Revenue</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
