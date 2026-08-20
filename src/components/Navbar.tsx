import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Globe2 } from 'lucide-react'
import { gsap } from 'gsap'
import { useLocale } from '../i18n/LocaleProvider'
import { languageNames } from '../i18n/translations'

const supportedLanguages = ['en', 'es', 'fr', 'de', 'pt', 'it', 'ja', 'zh', 'ar', 'ru'] as const

const navLinks = [
  { nameKey: 'nav.home', path: '/' },
  {
    nameKey: 'nav.services',
    path: '/services',
    dropdown: [
      { name: 'Amazon Optimization', path: '/services#amazon' },
      { name: 'Book Reviews', path: '/services#reviews' },
      { name: 'Goodreads Growth', path: '/services#goodreads' },
      { name: 'Video Marketing', path: '/services#video' },
      { name: 'Book Launch', path: '/services#launch' },
    ],
  },
  { nameKey: 'nav.ourTeam', path: '/team' },
  { nameKey: 'nav.caseStudies', path: '/case-studies' },
  { nameKey: 'nav.about', path: '/about' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const { locale, setLocale, t } = useLocale()
  const location = useLocation()

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      gsap.fromTo('.mobile-nav-item',
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.05, duration: 0.4, ease: 'power2.out', delay: 0.2 }
      )
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-ae-bg-primary/95 backdrop-blur-xl border-b border-ae-border/15 text-ae-text-primary transition-all duration-300">
        <div className="container-luxury">
          <div className="flex items-center justify-between h-[4.5rem]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <svg width="40" height="40" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="58" stroke="url(#nav-gold)" strokeWidth="1.5" className="group-hover:stroke-ae-gold-light transition-colors" />
                <path d="M45 40L60 30L75 40V70L60 80L45 70V40Z" stroke="url(#nav-gold)" strokeWidth="1.5" fill="none" />
                <path d="M60 30V80" stroke="url(#nav-gold)" strokeWidth="1" />
                <path d="M45 55L60 60L75 55" stroke="url(#nav-gold)" strokeWidth="1" />
                <defs>
                  <linearGradient id="nav-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C8A66A" />
                    <stop offset="100%" stopColor="#E8D5A3" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-display text-xl text-ae-text-primary hidden sm:block">
                BookRise
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.nameKey}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
                  onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                      isActive(link.path)
                        ? 'text-ae-gold'
                        : 'text-ae-text-secondary hover:text-ae-text-primary'
                    }`}
                  >
                    {t(link.nameKey)}
                    {link.dropdown && <ChevronDown className="w-3 h-3" />}
                  </Link>

                  {/* Dropdown */}
                  {link.dropdown && dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 glass-card overflow-hidden animate-fade-in">
                      <div className="py-2">
                        {link.dropdown.map((item, i) => (
                          <Link
                            key={i}
                            to={item.path}
                            className="block px-4 py-2.5 text-sm text-ae-text-secondary hover:text-ae-text-primary hover:bg-ae-gold/10 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Active indicator */}
                  {isActive(link.path) && (
                    <div className="absolute -bottom-1 left-0 right-0 h-px gold-gradient" />
                  )}
                </div>
              ))}

              {/* CTA Button */}
              <Link
                to="/team"
                className="px-5 py-2.5 gold-gradient text-ae-text-inverse text-xs font-bold uppercase tracking-[0.12em] hover:shadow-gold-glow transition-shadow duration-300"
              >
                {t('nav.bookCall')}
              </Link>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLanguageOpen((prev) => !prev)}
                  className="flex items-center gap-2 rounded-full border border-ae-border/40 bg-ae-bg-secondary/95 px-4 py-2 text-sm text-ae-text-secondary hover:text-ae-text-primary transition-colors"
                >
                  <Globe2 className="w-4 h-4" />
                  <span className="font-semibold uppercase tracking-[0.18em] text-ae-text-primary">
                    {locale}
                  </span>
                  <span className="hidden md:inline">{languageNames[locale] || 'English'}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                {languageOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 glass-card overflow-hidden shadow-xl animate-fade-in">
                    {supportedLanguages.map((lang) => (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => {
                          setLocale(lang)
                          // Google Translate is best-effort for any remaining hardcoded text.
                          window.translatePageTo?.(lang)
                          setLanguageOpen(false)
                        }}

                        className="w-full text-left px-4 py-2 text-sm text-ae-text-secondary hover:text-ae-text-primary hover:bg-ae-bg-secondary transition-colors"
                      >
                        <span className="font-semibold uppercase mr-2">{lang}</span>
                        {languageNames[lang]}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-ae-text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-ae-bg-primary/98 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
            {navLinks.map((link) => (
              <Link
                key={link.nameKey}
                to={link.path}
                className={`mobile-nav-item font-display text-3xl ${
                  isActive(link.path)
                    ? 'text-ae-gold'
                    : 'text-ae-text-primary hover:text-ae-gold'
                } transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(link.nameKey)}
              </Link>
            ))}
            <div className="mobile-nav-item mt-6 w-full">
              <div className="grid grid-cols-2 gap-2">
                {supportedLanguages.map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => {
                      setLocale(lang)
                      window.translatePageTo?.(lang)
                      setMobileMenuOpen(false)
                    }}

                    className="rounded-full border border-ae-border/30 px-4 py-3 text-sm text-ae-text-secondary hover:bg-ae-bg-secondary hover:text-ae-text-primary transition-colors"
                  >
                    {languageNames[lang]}
                  </button>
                ))}
              </div>
            </div>
            <Link
              to="/team"
              className="mobile-nav-item mt-4 px-8 py-3 gold-gradient text-ae-text-inverse text-lg font-medium rounded-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.bookCall')}
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
