import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function NotFound() {
  useEffect(() => {
    document.title = '404 — Page Not Found | Turio'
  }, [])

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">

      {/* Background glow blobs */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 480,
          height: 480,
          background: 'radial-gradient(circle, rgba(255,204,5,0.12) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-60%, -50%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 320,
          height: 320,
          background: 'radial-gradient(circle, rgba(255,204,5,0.08) 0%, transparent 70%)',
          top: '30%',
          right: '10%',
          filter: 'blur(60px)',
        }}
      />

      {/* 404 giant text */}
      <p
        className="font-title font-bold text-white select-none"
        style={{
          fontSize: 'clamp(120px, 20vw, 220px)',
          lineHeight: 1,
          letterSpacing: '-0.04em',
          background: 'linear-gradient(135deg, #ffffff 30%, rgba(255,255,255,0.25) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        404
      </p>

      {/* Decorative amber line */}
      <div className="w-16 h-1 bg-[#FFCC05] rounded-full my-6 mx-auto" />

      {/* Cursive accent */}
      <span className="font-cursive text-[#FFCC05] text-3xl mb-3">oops!</span>

      <h1 className="font-title text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
        This page got lost<br className="hidden md:block" /> somewhere in transit
      </h1>

      <p className="text-gray-400 text-base md:text-lg max-w-md mx-auto font-light leading-relaxed mb-10">
        The page you're looking for doesn't exist or has been moved.
        Let's get you back on track.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/"
          className="px-10 py-4 bg-[#FFCC05] hover:bg-white text-gray-900 font-bold tracking-[0.18em] text-sm uppercase rounded-full transition-all duration-300 shadow-lg shadow-amber-400/20"
        >
          Back to Home
        </Link>
        <Link
          to="/destinations"
          className="px-10 py-4 border border-white/20 hover:border-[#FFCC05] text-white hover:text-[#FFCC05] font-bold tracking-[0.18em] text-sm uppercase rounded-full transition-all duration-300"
        >
          Browse Destinations
        </Link>
      </div>

    </div>
  )
}
