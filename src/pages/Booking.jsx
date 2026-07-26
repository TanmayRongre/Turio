import React, { useState, useRef, useEffect } from 'react'
import TopBar from '../components/Home/TopBar'
import Navbar from '../components/Home/Navbar'
import { useLocation, useNavigate } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'

const travelTypes = ['Adventure', 'Cultural', 'Discovery', 'Historical', 'Relaxation', 'Wildlife']
const groupSizes = ['Solo (1)', 'Couple (2)', 'Small Group (3–5)', 'Group (6–10)', 'Large Group (10+)']
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]
const steps = ['Your Details', 'Trip Preferences', 'Review & Confirm']

const Booking = ({ countries = [] }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const imageRef = useRef(null)

  // Pre-fill from navigation state (passed from TourDetails)
  const prefill = location.state || {}
  usePageTitle(prefill.tourName ? `Book: ${prefill.tourName}` : 'Book a Tour')

  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  /* Step 1 */
  const [firstName, setFirstName] = useState('John')
  const [lastName, setLastName] = useState('Doe')
  const [email, setEmail] = useState('john.doe@example.com')
  const [phone, setPhone] = useState('+91 98765 43210')

  /* Step 2 */
  const [destination, setDestination] = useState(prefill.destination || 'India')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [travelMonth, setTravelMonth] = useState('October')
  const [monthOpen, setMonthOpen] = useState(false)
  const [travelType, setTravelType] = useState(prefill.travelType || 'Adventure')
  const [typeOpen, setTypeOpen] = useState(false)
  const [groupSize, setGroupSize] = useState('Couple (2)')
  const [groupOpen, setGroupOpen] = useState(false)
  const [budget, setBudget] = useState('150000')
  const [notes, setNotes] = useState('Looking forward to this amazing trip!')

  const destRef = useRef(null)
  const monthRef = useRef(null)
  const typeRef = useRef(null)
  const groupRef = useRef(null)

  /* Parallax hero */
  useEffect(() => {
    const onScroll = () => {
      if (!imageRef.current) return
      imageRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close dropdowns on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (destRef.current && !destRef.current.contains(e.target)) setShowSuggestions(false)
      if (monthRef.current && !monthRef.current.contains(e.target)) setMonthOpen(false)
      if (typeRef.current && !typeRef.current.contains(e.target)) setTypeOpen(false)
      if (groupRef.current && !groupRef.current.contains(e.target)) setGroupOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const isStep1Valid =
    firstName.trim() && lastName.trim() && email.trim() && email.includes('@')

  return (
    <div className="w-full flex flex-col min-h-screen bg-white">

      {/* ── Hero ── */}
      <div className="relative w-full h-[55vh] md:h-[60vh] flex flex-col overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-gray-900">
          <img
            ref={imageRef}
            src={prefill.heroImg || 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80'}
            alt="Booking"
            className="absolute left-0 w-full object-cover opacity-55"
            style={{ top: '-10vh', height: '120vh', willChange: 'transform' }}
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/20 to-black/70 pointer-events-none" />
        </div>

        <div className="absolute inset-0 z-10 flex flex-col">
          <TopBar />
          <Navbar />
          <div className="flex flex-col justify-center items-center w-full h-full gap-4 px-4 text-center -mt-7.5">
            <span className="text-primary font-cursive text-2xl md:text-3xl drop-shadow-lg">
              Begin Your Adventure
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-title tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {prefill.tourName ? `Book: ${prefill.tourName}` : 'Book Your Tour'}
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-xl font-light">
              Fill in your details — we'll handle the rest.
            </p>
          </div>
        </div>
      </div>

      {/* ── Form wrapper ── */}
      <div className="w-full max-w-2xl mx-auto px-4 md:px-6 py-16 pb-28">

        {!submitted ? (
          <>
            {/* ── Step indicator ── */}
            <div className="flex items-center justify-center mb-12">
              {steps.map((label, i) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 ${
                      i < step  ? 'bg-primary border-primary text-white' :
                      i === step ? 'bg-white border-primary text-primary shadow-lg shadow-primary/20' :
                                   'bg-white border-gray-200 text-gray-400'
                    }`}>
                      {i < step ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : i + 1}
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider hidden sm:block ${i === step ? 'text-primary' : 'text-gray-400'}`}>
                      {label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`h-0.5 w-16 sm:w-24 mx-2 mb-5 rounded-full transition-all duration-500 ${i < step ? 'bg-primary' : 'bg-gray-200'}`} />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* ═══════════════════════════════
                STEP 0 — Your Details
            ═══════════════════════════════ */}
            {step === 0 && (
              <div className="flex flex-col gap-7">
                <div className="text-center mb-2">
                  <h2 className="font-title text-3xl font-bold text-gray-900 mb-1">Your Details</h2>
                  <p className="text-gray-500 text-sm">We'll use these to get in touch with you</p>
                </div>

                {/* Email notice banner */}
                <div className="flex items-start gap-4 bg-amber-50 border border-amber-200 rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm mb-1">📬 Check your inbox after submission</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Once you confirm, a <span className="font-semibold text-gray-800">booking confirmation</span>, the{' '}
                      <span className="font-semibold text-gray-800">complete itinerary form</span>, and all further updates
                      will be sent directly to your email address.
                    </p>
                  </div>
                </div>

                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="First Name *" id="booking-first-name">
                    <input id="booking-first-name" type="text" value={firstName}
                      onChange={e => setFirstName(e.target.value)} placeholder="John"
                      className="input-style" />
                  </Field>
                  <Field label="Last Name *" id="booking-last-name">
                    <input id="booking-last-name" type="text" value={lastName}
                      onChange={e => setLastName(e.target.value)} placeholder="Doe"
                      className="input-style" />
                  </Field>
                </div>

                {/* Email */}
                <Field label="Email Address *" id="booking-email">
                  <div className="relative">
                    <MailIcon />
                    <input id="booking-email" type="email" value={email}
                      onChange={e => setEmail(e.target.value)} placeholder="your@email.com"
                      className="input-style !pl-10" />
                  </div>
                  <p className="text-xs text-gray-400 mt-1.5 pl-1">
                    ✉ Your booking updates &amp; itinerary form will arrive here
                  </p>
                </Field>

                {/* Phone */}
                <Field label={<>Phone <Optional /></>} id="booking-phone">
                  <div className="relative">
                    <PhoneIcon />
                    <input id="booking-phone" type="tel" value={phone}
                      onChange={e => setPhone(e.target.value)} placeholder="+91 98765 43210"
                      className="input-style !pl-10" />
                  </div>
                </Field>

                <button id="booking-next-1"
                  onClick={() => setStep(1)}
                  disabled={!isStep1Valid}
                  className="w-full py-4 bg-primary hover:bg-[#222] disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-bold tracking-[0.2em] uppercase rounded-full transition-colors shadow-lg shadow-primary/20 cursor-pointer">
                  Continue →
                </button>
              </div>
            )}

            {/* ═══════════════════════════════
                STEP 1 — Trip Preferences
            ═══════════════════════════════ */}
            {step === 1 && (
              <div className="flex flex-col gap-7">
                <div className="text-center mb-2">
                  <h2 className="font-title text-3xl font-bold text-gray-900 mb-1">Trip Preferences</h2>
                  <p className="text-gray-500 text-sm">Help us plan your perfect journey</p>
                </div>

                {/* Destination */}
                <Field label="Destination" id="booking-destination">
                  <div className="relative" ref={destRef}>
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                    </svg>
                    <input id="booking-destination" type="text" value={destination}
                      onChange={e => { setDestination(e.target.value); setShowSuggestions(true) }}
                      onFocus={() => setShowSuggestions(true)}
                      placeholder="Where do you want to go?"
                      className="input-style !pl-10" />
                    {showSuggestions && destination &&
                      countries.filter(c => c.name.toLowerCase().includes(destination.toLowerCase())).length > 0 && (
                        <div className="absolute top-full left-0 z-50 bg-white shadow-xl w-full border border-gray-100 mt-1 rounded-xl overflow-hidden">
                          <div className="max-h-45 overflow-y-auto">
                            {countries
                              .filter(c => c.name.toLowerCase().includes(destination.toLowerCase()))
                              .map(c => (
                                <div key={c.id}
                                  onClick={() => { setDestination(c.name); setShowSuggestions(false) }}
                                  className="px-4 py-2.5 text-sm text-gray-500 hover:text-gray-800 hover:bg-amber-50 cursor-pointer transition-colors font-medium">
                                  📍 {c.name}
                                </div>
                              ))}
                          </div>
                        </div>
                      )}
                  </div>
                </Field>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Month */}
                  <Field label="Travel Month" id="booking-month">
                    <Dropdown
                      ref={monthRef}
                      id="booking-month"
                      value={travelMonth}
                      placeholder="Select month"
                      open={monthOpen}
                      onToggle={() => { setMonthOpen(o => !o); setTypeOpen(false); setGroupOpen(false) }}>
                      {months.map(m => (
                        <DropdownItem key={m} onClick={e => { e.stopPropagation(); setTravelMonth(m); setMonthOpen(false) }}>
                          {m}
                        </DropdownItem>
                      ))}
                    </Dropdown>
                  </Field>

                  {/* Type */}
                  <Field label="Travel Type" id="booking-type">
                    <Dropdown
                      ref={typeRef}
                      id="booking-type"
                      value={travelType}
                      placeholder="Select type"
                      open={typeOpen}
                      onToggle={() => { setTypeOpen(o => !o); setMonthOpen(false); setGroupOpen(false) }}>
                      {travelTypes.map(t => (
                        <DropdownItem key={t} onClick={e => { e.stopPropagation(); setTravelType(t); setTypeOpen(false) }}>
                          {t}
                        </DropdownItem>
                      ))}
                    </Dropdown>
                  </Field>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Group size */}
                  <Field label="Group Size" id="booking-group">
                    <Dropdown
                      ref={groupRef}
                      id="booking-group"
                      value={groupSize}
                      placeholder="How many travellers?"
                      open={groupOpen}
                      onToggle={() => { setGroupOpen(o => !o); setMonthOpen(false); setTypeOpen(false) }}>
                      {groupSizes.map(g => (
                        <DropdownItem key={g} onClick={e => { e.stopPropagation(); setGroupSize(g); setGroupOpen(false) }}>
                          {g}
                        </DropdownItem>
                      ))}
                    </Dropdown>
                  </Field>

                  {/* Budget */}
                  <Field label={<>Budget / person <Optional /></>} id="booking-budget">
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-bold">₹</span>
                      <input id="booking-budget" type="number" value={budget}
                        onChange={e => setBudget(e.target.value)} placeholder="e.g. 50000"
                        className="input-style !pl-8" />
                    </div>
                  </Field>
                </div>

                {/* Notes */}
                <Field label={<>Special Requests <Optional /></>} id="booking-notes">
                  <textarea id="booking-notes" value={notes}
                    onChange={e => setNotes(e.target.value)} rows={4}
                    placeholder="Dietary needs, accessibility, special occasions…"
                    className="input-style resize-none" />
                </Field>

                <div className="flex gap-4">
                  <button id="booking-back-1" onClick={() => setStep(0)}
                    className="flex-1 py-4 border-2 border-gray-200 hover:border-gray-400 text-gray-600 font-bold tracking-[0.15em] uppercase rounded-full transition-colors cursor-pointer">
                    ← Back
                  </button>
                  <button id="booking-next-2" onClick={() => setStep(2)}
                    className="flex-2 py-4 bg-primary hover:bg-[#222] text-white font-bold tracking-[0.2em] uppercase rounded-full transition-colors shadow-lg shadow-primary/20 cursor-pointer">
                    Review →
                  </button>
                </div>
              </div>
            )}

            {/* ═══════════════════════════════
                STEP 2 — Review & Confirm
            ═══════════════════════════════ */}
            {step === 2 && (
              <div className="flex flex-col gap-7">
                <div className="text-center mb-2">
                  <h2 className="font-title text-3xl font-bold text-gray-900 mb-1">Review & Confirm</h2>
                  <p className="text-gray-500 text-sm">Everything look good? Submit to lock in your spot.</p>
                </div>

                {/* Tour chip */}
                {prefill.tourName && (
                  <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-5 py-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Selected Tour</p>
                      <p className="font-semibold text-gray-900">{prefill.tourName}</p>
                    </div>
                    {prefill.price && (
                      <span className="ml-auto text-xl font-bold text-primary">{prefill.price}</span>
                    )}
                  </div>
                )}

                {/* Summary card */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col gap-5">
                  <SummarySection title="Your Details">
                    <SummaryRow label="Name" value={`${firstName} ${lastName}`} />
                    <SummaryRow label="Email" value={email} highlight />
                    {phone && <SummaryRow label="Phone" value={phone} />}
                  </SummarySection>
                  <div className="border-t border-gray-200" />
                  <SummarySection title="Trip Preferences">
                    {destination && <SummaryRow label="Destination" value={destination} />}
                    {travelMonth && <SummaryRow label="Month" value={travelMonth} />}
                    {travelType && <SummaryRow label="Type" value={travelType} />}
                    {groupSize && <SummaryRow label="Group" value={groupSize} />}
                    {budget && <SummaryRow label="Budget" value={`₹${parseInt(budget).toLocaleString()}`} />}
                    {notes && <SummaryRow label="Notes" value={notes} />}
                  </SummarySection>
                </div>

                {/* What happens next banner */}
                <div className="flex items-start gap-4 bg-amber-50 border border-amber-200 rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm mb-1">What happens next?</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      A confirmation + the <span className="font-semibold text-gray-800">complete itinerary & payment form</span> will be
                      sent to <span className="text-primary font-bold">{email}</span>. Our team will follow up within 24 hours.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button id="booking-back-2" onClick={() => setStep(1)}
                    className="flex-1 py-4 border-2 border-gray-200 hover:border-gray-400 text-gray-600 font-bold tracking-[0.15em] uppercase rounded-full transition-colors cursor-pointer">
                    ← Back
                  </button>
                  <button id="booking-submit" onClick={() => setSubmitted(true)}
                    className="flex-2 py-4 bg-primary hover:bg-[#222] text-white font-bold tracking-[0.2em] uppercase rounded-full transition-colors shadow-lg shadow-primary/20 cursor-pointer">
                    Confirm Booking ✓
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          /* ── Success state ── */
          <div className="flex flex-col items-center gap-8 py-10 text-center">
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center shadow-xl">
              <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div>
              <h2 className="font-title text-4xl font-bold text-gray-900 mb-3">Booking Request Sent!</h2>
              <p className="text-gray-500 text-lg max-w-md mx-auto">
                Thank you, <span className="font-semibold text-gray-800">{firstName}</span>! Your adventure is about to begin.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 max-w-md w-full text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">Check your inbox at</p>
                  <p className="text-primary font-semibold text-sm">{email}</p>
                </div>
              </div>
              <ul className="flex flex-col gap-2.5 text-sm text-gray-600">
                {[
                  'Booking confirmation & reference number',
                  'Complete itinerary & detailed travel form',
                  'Payment instructions & options',
                  'Our team contacts you within 24 hrs',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button id="booking-home" onClick={() => navigate('/')}
              className="px-10 py-4 bg-primary hover:bg-[#222] text-white font-bold tracking-[0.2em] uppercase rounded-full transition-colors shadow-lg shadow-primary/20 cursor-pointer">
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

/* ── Small reusable helpers ── */

const Field = ({ label, id, children }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="text-xs font-bold uppercase tracking-widest text-gray-500">
      {label}
    </label>
    {children}
  </div>
)

const Optional = () => (
  <span className="normal-case font-normal text-gray-400 text-xs">(optional)</span>
)

const inputBase =
  'w-full border-2 border-gray-200 focus:border-primary rounded-xl px-4 py-3.5 outline-none text-gray-800 text-sm font-medium transition-colors placeholder:text-gray-300'

// Inject once so all inputs can use className="input-style"
// (We inline the classes instead, since Tailwind needs static strings)

const MailIcon = () => (
  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const Dropdown = React.forwardRef(({ id, value, placeholder, open, onToggle, children }, ref) => (
  <div ref={ref}
    className="relative border-2 border-gray-200 rounded-xl px-4 py-3.5 flex items-center justify-between cursor-pointer select-none hover:border-gray-300 transition-colors"
    onClick={onToggle}
    id={id}>
    <span className={`text-sm font-medium ${value ? 'text-gray-800' : 'text-gray-300'}`}>
      {value || placeholder}
    </span>
    <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="6 9 12 15 18 9" />
    </svg>
    {open && (
      <div className="absolute top-full left-0 z-50 bg-white shadow-xl w-full border border-gray-100 mt-1 rounded-xl overflow-hidden">
        <div className="max-h-50 overflow-y-auto">{children}</div>
      </div>
    )}
  </div>
))

const DropdownItem = ({ onClick, children }) => (
  <div onClick={onClick}
    className="px-4 py-2.5 text-sm text-gray-500 hover:text-gray-800 hover:bg-amber-50 cursor-pointer transition-colors">
    {children}
  </div>
)

const SummarySection = ({ title, children }) => (
  <div className="flex flex-col gap-3">
    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">{title}</h3>
    <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">{children}</div>
  </div>
)

const SummaryRow = ({ label, value, highlight }) => (
  <>
    <span className="text-gray-500">{label}</span>
    <span className={`font-semibold break-all ${highlight ? 'text-primary' : 'text-gray-900'}`}>{value}</span>
  </>
)

export default Booking
