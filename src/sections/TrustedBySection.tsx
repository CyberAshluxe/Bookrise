import Marquee from 'react-fast-marquee'
import { useLocale } from '../i18n/LocaleProvider'

const publishers = [
  'Amazon',
  'Goodreads',
  'Barnes & Noble',
  'Apple Books',
  'Kobo',
  'BookBub',
  'NetGalley',
  'LibraryThing',
]

export default function TrustedBySection() {
  const { t } = useLocale()

  return (
    <section className="py-12 md:py-16 bg-ae-bg-primary border-y border-ae-border/10">
      <div className="container-luxury mb-8">
        <p className="text-center text-ae-text-secondary text-xs uppercase tracking-[0.2em]">
          {t('trustedBy.tagline')}
        </p>
      </div>
      <Marquee
        gradient
        gradientColor="#1B120D"
        gradientWidth={100}
        speed={40}
        pauseOnHover
      >
        {publishers.map((publisher) => (
          <div
            key={publisher}
            className="mx-8 md:mx-12 flex items-center"
          >
            <span className="font-display text-xl md:text-2xl text-ae-text-secondary/40 hover:text-ae-gold/60 transition-colors duration-300 whitespace-nowrap">
              {publisher}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  )
}
