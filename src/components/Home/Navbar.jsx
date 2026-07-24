import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])
  const navLinkStyles = ({ isActive }) =>
    isActive
      ? 'text-primary'
      : 'text-white hover:text-primary transition-colors duration-200';
  return (
    <>
      <nav className="w-full flex justify-between items-center px-4 md:px-10 lg:px-30 py-5 bg-transparent relative z-9999">
        <div>
          <span className="font-cursive font-bold text-3xl text-white">Turio</span>
        </div>
        <div className="hidden lg:flex gap-10 uppercase font-bold tracking-widest text-sm">
          <NavLink to="/" className={navLinkStyles}>Home</NavLink>
          <NavLink to="/destinations" className={navLinkStyles}>Destinations</NavLink>
          <NavLink to="/tours" className={navLinkStyles}>Tours</NavLink>
          <NavLink to="/blog" className={navLinkStyles}>Blog</NavLink>
        </div>
        <div className="flex gap-5 text-white items-center z-50">
          <button className="hover:text-primary hover:scale-120 transition-colors duration-200">
            <Search />
          </button>
          <button className="hover:text-primary hover:scale-120 transition-colors duration-200">
            <ShoppingBag />
          </button>
          <button 
            className="lg:hidden hover:text-primary transition-colors duration-200 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-black/95 z-10000 flex flex-col items-center justify-center">
          <div className="absolute top-0 left-0 w-full flex justify-between items-center px-4 md:px-10 py-5">
            <span className="font-cursive font-bold text-3xl text-white">Turio</span>
            <button 
              className="text-white hover:text-primary transition-colors duration-200 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={28} />
            </button>
          </div>
          <div className="flex flex-col items-center gap-8 uppercase font-bold tracking-widest text-xl">
            <NavLink to="/" className={navLinkStyles} onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
            <NavLink to="/destinations" className={navLinkStyles} onClick={() => setIsMobileMenuOpen(false)}>Destinations</NavLink>
            <NavLink to="/tours" className={navLinkStyles} onClick={() => setIsMobileMenuOpen(false)}>Tours</NavLink>
            <NavLink to="/blog" className={navLinkStyles} onClick={() => setIsMobileMenuOpen(false)}>Blog</NavLink>
          </div>
        </div>
      )}
    </>
  )
}
export default Navbar
