import React, { useState } from 'react'
import InfoBg from '../../assets/InfoBg.png'
import Infop2 from '../../assets/Infop2.jpg'
import InfoDestinations from './InfoDestinations'
const Info = ({ countries }) => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className="relative w-full min-h-screen bg-white py-20 flex flex-col justify-center items-center overflow-hidden">
      <img
        src={InfoBg}
        alt="Info background"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />
      <div className="relative w-full px-4 md:px-10 lg:px-20 flex flex-col gap-28 z-10">
        <div className="w-full flex flex-col lg:flex-row gap-12 justify-between items-center">
          <div className="w-full lg:w-[55%] flex justify-center">
            <div className="relative overflow-hidden group w-full aspect-4/3 rounded-3xl shadow-xl">
              <img
                src={Infop2}
                alt="The Beauty of Buddhism"
                className="w-full h-full object-cover block transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-90" />
              <div className="absolute bottom-8 left-8 flex flex-col items-start z-10">
                <span className="font-cursive text-[#FFCC05] text-[2rem] leading-none mb-2">
                  new
                </span>
                <h2 className="font-title text-white text-[2.6rem] font-bold leading-tight mb-2">
                  Watch Our Video
                </h2>
                <p className="text-gray-300 text-sm font-light mb-6 tracking-wide">
                  The Beauty of Buddhism
                </p>
                <button
                  id="play-video-btn"
                  onClick={() => setModalOpen(true)}
                  className="w-16 h-16 rounded-full bg-[#FFCC05] hover:bg-white hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg"
                  aria-label="Play video"
                >
                  <svg viewBox="0 0 24 24" fill="black" className="w-6 h-6 ml-1">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[45%] flex flex-col justify-center items-start pr-0 lg:pr-6">
            <h2 className="font-title text-4xl md:text-[2.8rem] text-[#222] font-bold leading-[1.15] mb-6">
              A Simply Perfect Place<br />To Get Lost
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl font-light">
              Treat yourself with a journey to your inner self. Visit a mystique
              Tibet and start your spiritual adventure. We promise, you'll enjoy
              every step you make.
            </p>
            <button
              id="see-more-btn"
              className="bg-[#FFCC05] hover:bg-[#222] transition-colors duration-300 text-white text-[11px] font-bold tracking-[0.2em] uppercase px-10 py-4 cursor-pointer rounded-full shadow-md"
            >
              SEE MORE
            </button>
          </div>
        </div>
        <div className="w-full pt-4">
          <InfoDestinations countries={countries} />
        </div>
      </div>
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-[85vw] max-w-5xl shadow-2xl"
            style={{ aspectRatio: '16/9' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute -top-12 right-0 z-10 w-10 h-10 text-white flex items-center justify-center transition-opacity hover:opacity-70 cursor-pointer"
              aria-label="Close video"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <iframe
              src="https://player.vimeo.com/video/381119540?autoplay=1&title=0&byline=0&portrait=0"
              className="w-full h-full rounded-2xl border-none shadow-2xl"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Watch Our Video"
            />
          </div>
        </div>
      )}
    </div>
  )
}
export default Info