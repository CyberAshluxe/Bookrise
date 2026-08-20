import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import { useLocale } from '../i18n/LocaleProvider'
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
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: <BookMarketingIcon />,
    title: 'Book Marketing',
    description: 'Strategic marketing campaigns designed to increase your book\'s visibility, reach target readers, and drive consistent sales growth across all platforms.',
  },
  {
    icon: <BookPromotionIcon />,
    title: 'Book Promotion',
    description: 'Targeted promotion strategies that put your book in front of the right readers at the right time, maximizing exposure and conversion.',
  },
  {
    icon: <AuthorBrandingIcon />,
    title: 'Author Branding',
    description: 'Build a memorable author brand that resonates with readers, establishes credibility, and creates a loyal fanbase for long-term success.',
  },
  {
    icon: <AmazonIcon />,
    title: 'Amazon Optimization',
    description: 'Optimize your Amazon presence with keyword-rich metadata, compelling descriptions, and strategic category selection to improve discoverability.',
  },
  {
    icon: <GoodreadsIcon />,
    title: 'Goodreads Growth',
    description: 'Grow your Goodreads presence through community engagement, strategic list placements, and targeted outreach to active book readers.',
  },
  {
    icon: <BookLaunchIcon />,
    title: 'Book Launch Campaigns',
    description: 'Plan and execute a powerful book launch that generates buzz, drives pre-orders, and establishes momentum for sustained sales.',
  },
  {
    icon: <VideoMarketingIcon />,
    title: 'Video Marketing',
    description: 'Create captivating video content including book trailers, author interviews, and promotional shorts that engage readers across social platforms.',
  },
  {
    icon: <EmailCampaignsIcon />,
    title: 'Email Campaigns',
    description: 'Build and nurture your reader email list with targeted campaigns that drive book sales, reviews, and long-term reader loyalty.',
  },
  {
    icon: <BookClubIcon />,
    title: 'Book Club Outreach',
    description: 'Connect with book clubs and reading groups to generate authentic discussions, word-of-mouth recommendations, and grassroots buzz.',
  },
]

export default function ServicesSection() {
  const { t } = useLocale()

  return (
    <section className="section-padding bg-ae-bg-primary">
      <div className="container-luxury">
        <SectionHeader
          tag={t('servicesSection.tag')}
          title={t('servicesSection.title')}
          subtitle={t('servicesSection.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={i}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 border border-ae-border text-ae-text-primary font-medium rounded-full hover:border-ae-border-hover hover:bg-ae-text-primary/5 transition-all duration-300"
          >
            {t('servicesSection.explore')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
