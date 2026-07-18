import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import StickyNavbar from './components/StickyNavbar'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import Tours from './pages/Tours'
import Blog from './pages/Blog'

const App = () => {
  const [showSticky, setShowSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <StickyNavbar showSticky={showSticky} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  )
}

export default App