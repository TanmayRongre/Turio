import React, { useState, useRef, useEffect } from 'react'
import TopBar from './TopBar'
import Navbar from './Navbar'
import heroVideo from '../../assets/hero-video.mp4'
const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]
const travelTypes = ['Adventure', 'Cultural', 'Discovery', 'Historical', 'Relaxation', 'Wildlife']
const Main = () => {
    const [destination, setDestination] = useState('')
    const [selectedMonth, setSelectedMonth] = useState(null)
    const [selectedType, setSelectedType] = useState(null)
    const [monthOpen, setMonthOpen] = useState(false)
    const [typeOpen, setTypeOpen] = useState(false)
    const monthRef = useRef(null)
    const typeRef = useRef(null)
    const videoRef = useRef(null)
    useEffect(() => {
        const handleScroll = () => {
            if (!videoRef.current) return
            videoRef.current.style.transform = `translateY(${window.scrollY * 0.8}px)`
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    useEffect(() => {
        const handler = (e) => {
            if (monthRef.current && !monthRef.current.contains(e.target)) setMonthOpen(false)
            if (typeRef.current && !typeRef.current.contains(e.target)) setTypeOpen(false)
        }
        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [])
    return (
        <div className="relative w-full h-[80vh]">
            <div className="absolute inset-0 w-full h-full overflow-hidden rounded-b-[3rem]">
                <video
                    ref={videoRef}
                    autoPlay muted loop playsInline
                    className="absolute left-0 w-full h-full object-cover"
                    style={{
                        top: '-20vh',
                        height: '140vh',
                        willChange: 'transform',
                    }}>
                    <source src={heroVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/10 to-black/20 z-10 pointer-events-none" />
            </div>
            <div className="absolute inset-0 w-full h-full z-10 flex flex-col">
                <TopBar />
                <Navbar />
                <div className="flex justify-center items-center w-full h-full flex-col gap-20">
                    <div className="flex flex-col justify-center items-center gap-6">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white font-title text-center px-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">Your Journey Begins</h1>
                        <p className="text-white/95 text-base md:text-[20px] w-full max-w-3xl text-center px-4 font-medium drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                            A journey of a 1000 miles starts with a single step. From exotic getaways to cultural escapes, we handle every detail so you can focus on making memories.
                        </p>
                    </div>
                    <div className="bg-white z-1000 rounded-2xl md:rounded-full mx-4 md:mx-0">
                        <div className="border-2 border-gray-100 flex flex-col md:flex-row items-stretch bg-white w-full max-w-[95vw] md:max-w-4xl rounded-2xl md:rounded-full">
                            <div className="flex items-center gap-3 px-6 py-5 flex-1 border-b md:border-b-0 md:border-r border-gray-200">
                                <svg className="w-5 h-5 text-primary shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                                </svg>
                                <input
                                    id="destination-input"
                                    type="text"
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                    placeholder="WHERE TO?"
                                    className="w-full bg-transparent outline-none text-xs font-bold tracking-widest text-gray-700 uppercase"
                                />
                            </div>
                            <div ref={monthRef} className="relative flex items-center gap-3 px-6 py-5 min-w-[180px] border-b md:border-b-0 md:border-r border-gray-200 cursor-pointer select-none"
                                onClick={() => { setMonthOpen(o => !o); setTypeOpen(false) }}>
                                <svg className="w-5 h-5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                                <span className="text-xs font-bold tracking-widest text-gray-700 uppercase flex-1">
                                    {selectedMonth ?? 'WHEN?'}
                                </span>
                                <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                                {monthOpen && (
                                    <div className="absolute top-full left-0 z-50 bg-white shadow-xl w-56 border border-gray-100">
                                        <div className="px-4 py-2 text-sm font-semibold text-gray-800 border-b border-gray-100">When?</div>
                                        <div className="max-h-[200px] overflow-y-auto">
                                            {months.map((m) => (
                                                <div key={m}
                                                    onClick={(e) => { e.stopPropagation(); setSelectedMonth(m); setMonthOpen(false) }}
                                                    className="px-4 py-2 text-sm text-gray-400 hover:text-gray-800 hover:bg-gray-50 cursor-pointer transition-colors">
                                                    {m}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div ref={typeRef} className="relative flex items-center gap-3 px-6 py-5 min-w-[200px] border-b md:border-b-0 md:border-r border-gray-200 cursor-pointer select-none"
                                onClick={() => { setTypeOpen(o => !o); setMonthOpen(false) }}>
                                <svg className="w-5 h-5 text-primary shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M5 3h14l-3 5 3 5H5V3zm0 13v5H3V3h2v13z" />
                                </svg>
                                <span className="text-xs font-bold tracking-widest text-gray-700 uppercase flex-1">
                                    {selectedType ?? 'TRAVEL TYPE'}
                                </span>
                                <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                                {typeOpen && (
                                    <div className="absolute top-full left-0 z-50 bg-white shadow-xl w-56 border border-gray-100">
                                        <div className="px-4 py-2 text-sm font-semibold text-gray-800 border-b border-gray-100">Travel Type</div>
                                        <div className="max-h-[200px] overflow-y-auto">
                                            {travelTypes.map((t) => (
                                                <div key={t}
                                                    onClick={(e) => { e.stopPropagation(); setSelectedType(t); setTypeOpen(false) }}
                                                    className="px-4 py-2 text-sm text-gray-400 hover:text-gray-800 hover:bg-gray-50 cursor-pointer transition-colors">
                                                    {t}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <button
                                id="find-now-btn"
                                className="bg-primary hover:bg-[#222] transition-colors px-8 py-5 md:py-0 text-xs font-bold tracking-widest text-white uppercase cursor-pointer rounded-b-2xl md:rounded-none md:rounded-r-full">
                                FIND NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main
