import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
const StickyNavbar = ({ showSticky }) => {
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
    return (
        <nav
            className={`
        fixed top-0 left-0 w-full z-9999
        flex justify-between items-center px-4 md:px-10 lg:px-30 py-5
        bg-white shadow-md
        transition-transform duration-500 ease-in-out
        ${showSticky ? 'translate-y-0' : '-translate-y-full'}
      `}
        >
            <div>
                <span className="font-cursive font-bold text-2xl text-gray-900">Turio</span>
            </div>
            <div className="hidden lg:flex gap-10 uppercase font-bold tracking-widest text-sm">
                <NavLink to="/" className={({ isActive }) => isActive ? 'text-primary border-b-2 border-primary' : 'hover:text-primary transition-colors duration-200'}>Home</NavLink>
                <NavLink to="/destinations" className={({ isActive }) => isActive ? 'text-primary border-b-2 border-primary' : 'hover:text-primary transition-colors duration-200'}>Destinations</NavLink>
                <NavLink to="/tours" className={({ isActive }) => isActive ? 'text-primary border-b-2 border-primary' : 'hover:text-primary transition-colors duration-200'}>Tours</NavLink>
                <NavLink to="/blog" className={({ isActive }) => isActive ? 'text-primary border-b-2 border-primary' : 'hover:text-primary transition-colors duration-200'}>Blog</NavLink>
            </div>
            <div className="flex gap-5 text-gray-800 items-center">
                <button className="hover:text-primary transition-colors duration-200"><Search size={20} /></button>
                <button className="hover:text-primary transition-colors duration-200"><ShoppingBag size={20} /></button>
                <button 
                  className="lg:hidden hover:text-primary transition-colors duration-200 cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-gray-900 shadow-xl border-t border-gray-800 flex flex-col items-center py-10 gap-6 z-9998">
                    <div className="flex flex-col items-center gap-6 uppercase font-bold tracking-widest text-sm">
                        <NavLink to="/" className={({ isActive }) => isActive ? 'text-primary' : 'text-white hover:text-primary transition-colors duration-200'} onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
                        <NavLink to="/destinations" className={({ isActive }) => isActive ? 'text-primary' : 'text-white hover:text-primary transition-colors duration-200'} onClick={() => setIsMobileMenuOpen(false)}>Destinations</NavLink>
                        <NavLink to="/tours" className={({ isActive }) => isActive ? 'text-primary' : 'text-white hover:text-primary transition-colors duration-200'} onClick={() => setIsMobileMenuOpen(false)}>Tours</NavLink>
                        <NavLink to="/blog" className={({ isActive }) => isActive ? 'text-primary' : 'text-white hover:text-primary transition-colors duration-200'} onClick={() => setIsMobileMenuOpen(false)}>Blog</NavLink>
                    </div>
                </div>
            )}
        </nav>
    )
}
export default StickyNavbar
