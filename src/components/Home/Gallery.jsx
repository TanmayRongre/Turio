import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GalleryBg from '../../assets/GalleryBg.png'
const items = [
  {
    id: 1,
    name: 'Africa',
    tag: 'New',
    img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=900&q=80',
    gridClass: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 2,
    name: 'India',
    tag: 'New',
    img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=700&q=80',
    gridClass: 'col-span-1 md:col-span-1 row-span-1 md:row-span-2',
  },
  {
    id: 3,
    name: 'Thailand',
    tag: 'New',
    img: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=700&q=80',
    gridClass: 'col-span-1 md:col-span-1 row-span-1',
  },
  {
    id: 4,
    name: 'China',
    tag: 'New',
    img: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=700&q=80',
    gridClass: 'col-span-1 md:col-span-1 row-span-1',
  },
]
const Gallery = ({ countries = [] }) => {
  const navigate = useNavigate()
  const sectionRef = useRef(null)
  const [parallaxY, setParallaxY] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const scrolledPast = -rect.top
      setParallaxY(scrolledPast * 0.4)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <section
      ref={sectionRef}
      className="relative w-full px-6 md:px-16 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <img
          src={GalleryBg}
          alt="Gallery background"
          className="absolute left-0 w-full object-cover"
          style={{
            top: '-20%',
            height: '140%',
            transform: `translateY(${parallaxY}px)`,
            willChange: 'transform',
          }}
        />
        <div className="absolute inset-0 bg-white/15" />
      </div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <p className="text-amber-500 text-xs font-semibold tracking-[0.3em] uppercase mb-2">
            Our Portfolio
          </p>
          <h2 className="text-4xl md:text-[2.8rem] font-bold text-[#222] font-title leading-tight">
            Gallery
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light mt-3">
            See our past explorations
          </p>
          <div className="w-10 h-1 bg-amber-400 rounded-full mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-4 h-[1100px] sm:h-[800px] md:h-[580px]">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                const match = countries.find(c => c.name.toLowerCase() === item.name.toLowerCase())
                if (match) navigate(`/destinations/${match.id}`)
                else navigate('/destinations')
              }}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${item.gridClass}`}
            >
              <img
                src={item.img}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/80" />
              <div className="absolute bottom-5 left-5 text-white">
                <span className="block font-cursive text-amber-400 text-lg italic mb-0.5">
                  {item.tag}
                </span>
                <h3 className="text-2xl font-bold font-title drop-shadow-lg">
                  {item.name}
                </h3>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center pt-15">
          <button
            id="gallery-see-more-btn"
            onClick={() => navigate('/destinations')}
            className="bg-[#FFCC05] hover:bg-[#222] transition-colors duration-300 text-white text-[11px] font-bold tracking-[0.2em] uppercase px-10 py-4 cursor-pointer rounded-full shadow-md"
          >
            SEE MORE
          </button>
        </div>
      </div>
    </section>
  )
}
export default Gallery