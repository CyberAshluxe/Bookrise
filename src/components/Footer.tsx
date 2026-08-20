import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { useLocale } from '../i18n/LocaleProvider'

const footerLinks = {
  services: [
    { name: 'Amazon Optimization', path: '/services#amazon' },
    { name: 'Book Reviews', path: '/services#reviews' },
    { name: 'Goodreads Growth', path: '/services#goodreads' },
    { name: 'Video Marketing', path: '/services#video' },
    { name: 'Book Launch', path: '/services#launch' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/team' },
  ],
  resources: [
    { name: 'Blog', path: '#' },
    { name: 'Author Guide', path: '#' },
    { name: 'FAQ', path: '/about#faq' },
    { name: 'Privacy Policy', path: '#' },
    { name: 'Terms of Use', path: '#' },
  ],
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const { t } = useLocale()

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-ae-bg-secondary border-t border-ae-border/30">
      {/* Main Footer */}
      <div className="container-luxury py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <svg width="40" height="40" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="58" stroke="url(#foot-gold)" strokeWidth="1.5" />
                <path d="M45 40L60 30L75 40V70L60 80L45 70V40Z" stroke="url(#foot-gold)" strokeWidth="1.5" fill="none" />
                <path d="M60 30V80" stroke="url(#foot-gold)" strokeWidth="1" />
                <path d="M45 55L60 60L75 55" stroke="url(#foot-gold)" strokeWidth="1" />
                <defs>
                  <linearGradient id="foot-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C8A66A" />
                    <stop offset="100%" stopColor="#E8D5A3" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-display text-xl text-ae-text-primary">BookRise</span>
            </Link>
            <p className="text-ae-text-secondary text-sm leading-relaxed mb-6 max-w-xs">
              {t('footer.brandCopy')}
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@authorelevate.com" className="flex items-center gap-3 text-ae-text-secondary hover:text-ae-gold transition-colors text-sm">
                <Mail className="w-4 h-4 text-ae-gold" />
                hello@authorelevate.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-ae-text-secondary hover:text-ae-gold transition-colors text-sm">
                <Phone className="w-4 h-4 text-ae-gold" />
                +1 (234) 567-890
              </a>
              <div className="flex items-center gap-3 text-ae-text-secondary text-sm">
                <MapPin className="w-4 h-4 text-ae-gold" />
                New York, NY
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-ae-text-primary mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-ae-text-secondary hover:text-ae-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-ae-text-primary mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-ae-text-secondary hover:text-ae-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-ae-text-primary mb-6">{t('footer.resourcesTitle')}</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-ae-text-secondary hover:text-ae-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-ae-text-primary mb-6">{t('footer.newsletterTitle')}</h4>
            <p className="text-ae-text-secondary text-sm mb-4">
              {t('footer.newsletterCopy')}
            </p>
            {subscribed ? (
              <p className="text-ae-gold text-sm">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="px-4 py-2.5 bg-ae-bg-tertiary border border-ae-border/30 rounded-lg text-ae-text-primary text-sm placeholder:text-ae-text-secondary/50 focus:outline-none focus:border-ae-gold transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 gold-gradient text-ae-text-inverse text-sm font-medium rounded-lg hover:shadow-gold-glow transition-shadow"
                >
                  {t('footer.subscribeButton')}
                  <ArrowRight className="w-3 h-3" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ae-border/20">
        <div className="container-luxury py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-ae-text-secondary/60 text-xs">
              &copy; {new Date().getFullYear()} BookRise. {t('footer.copyright')}
            </p>
            <div className="flex items-center gap-4">
              {/* Social icons removed */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
