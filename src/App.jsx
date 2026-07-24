import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import StickyNavbar from './components/Navbar/StickyNavbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import DestinationDetail from './pages/DestinationDetail'
import Tours from './pages/Tours'
import TourDetails from './pages/TourDetails'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import { countries } from './data/destinations'
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
        <Route path="/" element={<Home countries={countries} />} />
        <Route path="/destinations" element={<Destinations countries={countries} />} />
        <Route path="/destinations/:id" element={<DestinationDetail countries={countries} />} />
        <Route path="/tours" element={<Tours countries={countries} />} />
        <Route path="/tours/:id" element={<TourDetails countries={countries} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App