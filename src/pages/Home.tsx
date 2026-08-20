import HeroSection from '../sections/HeroSection'
import TrustedBySection from '../sections/TrustedBySection'
import VideoHighlightsSection from '../sections/VideoHighlightsSection'

import ServicesSection from '../sections/ServicesSection'
import ResultsSection from '../sections/ResultsSection'
import FAQSection from '../sections/FAQSection'
import CTASection from '../sections/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <VideoHighlightsSection />
      {/* <IntroScrollSection /> */}
      <ServicesSection />
      <ResultsSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
