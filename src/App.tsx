import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import GoogleTranslate from './components/GoogleTranslate'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import CaseStudies from './pages/CaseStudies'
import Team from './pages/Team'
import Videos from './pages/Videos'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative min-h-screen bg-ae-bg-primary">
      <Preloader onComplete={() => setIsLoading(false)} isLoading={isLoading} />
      
      {!isLoading && (
        <>
          <Navbar />
          <main>
            <GoogleTranslate />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/team" element={<Team />} />
              <Route path="/videos" element={<Videos />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
