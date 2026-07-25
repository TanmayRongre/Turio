import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDE_MS = 420; // duration of one slide transition

const SingleReview = ({ reviews = [] }) => {
  const [active, setActive]   = useState(0);
  const [prev,   setPrev]     = useState(null);    // index being slid out
  const [dir,    setDir]      = useState('next');  // 'next' | 'prev'
  const [phase,  setPhase]    = useState('idle');  // 'idle' | 'sliding'
  const timerRef = useRef(null);
  const lockRef  = useRef(false);

  const goTo = useCallback((nextIdx, direction) => {
    if (lockRef.current || nextIdx === active) return;
    lockRef.current = true;

    clearInterval(timerRef.current);

    setPrev(active);
    setDir(direction);
    setPhase('sliding');
    setActive(nextIdx);

    setTimeout(() => {
      setPrev(null);
      setPhase('idle');
      lockRef.current = false;

      // restart auto-advance
      timerRef.current = setInterval(() => {
        setActive(a => {
          const n = (a + 1) % reviews.length;
          setPrev(a);
          setDir('next');
          setPhase('sliding');
          setTimeout(() => { setPrev(null); setPhase('idle'); }, SLIDE_MS);
          return n;
        });
      }, 5000);
    }, SLIDE_MS);
  }, [active, reviews.length]);

  const next = useCallback(() => goTo((active + 1) % reviews.length, 'next'), [active, reviews.length, goTo]);
  const back = useCallback(() => goTo((active - 1 + reviews.length) % reviews.length, 'prev'), [active, reviews.length, goTo]);

  // auto-advance
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive(a => {
        const n = (a + 1) % reviews.length;
        setPrev(a);
        setDir('next');
        setPhase('sliding');
        setTimeout(() => { setPrev(null); setPhase('idle'); }, SLIDE_MS);
        return n;
      });
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, [reviews.length]);

  if (!reviews.length) return null;

  // CSS for slide-in and slide-out
  const slideStyle = (isEntering) => {
    if (phase !== 'sliding') {
      // idle — active card is fully visible
      return isEntering ? {
        transform: 'translateX(0)',
        opacity: 1,
        transition: 'none',
      } : {};
    }
    if (isEntering) {
      // enters from the opposite side to where the old card exits
      return {
        animation: `slideIn${dir === 'next' ? 'Right' : 'Left'} ${SLIDE_MS}ms cubic-bezier(0.32,0,0.16,1) forwards`,
      };
    } else {
      // exits
      return {
        animation: `slideOut${dir === 'next' ? 'Left' : 'Right'} ${SLIDE_MS}ms cubic-bezier(0.32,0,0.16,1) forwards`,
      };
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full mt-6 select-none">

      {/* Keyframes injected once */}
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(60px); opacity: 0; }
          to   { transform: translateX(0);   opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-60px); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes slideOutLeft {
          from { transform: translateX(0);   opacity: 1; }
          to   { transform: translateX(-60px); opacity: 0; }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0);  opacity: 1; }
          to   { transform: translateX(60px); opacity: 0; }
        }
      `}</style>

      <Quote size={28} className="text-amber-400 opacity-60 rotate-180" />

      {/* Slide viewport — clips the outgoing / incoming cards */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: 240 }}>

        {/* Outgoing card */}
        {prev !== null && phase === 'sliding' && (
          <div
            key={`out-${prev}`}
            className="absolute inset-0 flex flex-col items-center gap-4 px-4"
            style={{ ...slideStyle(false), pointerEvents: 'none' }}
          >
            <ReviewCard review={reviews[prev]} />
          </div>
        )}

        {/* Active (incoming) card */}
        <div
          key={`in-${active}`}
          className="flex flex-col items-center gap-4 px-4"
          style={slideStyle(true)}
        >
          <ReviewCard review={reviews[active]} />
        </div>
      </div>

      {/* Controls row — arrows + dots */}
      <div className="flex items-center gap-5 mt-2">
        {/* Prev arrow */}
        <button
          onClick={back}
          aria-label="Previous review"
          className="group w-10 h-10 rounded-full border border-white/20 flex items-center justify-center
                     hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-250 cursor-pointer"
        >
          <ChevronLeft size={18} className="text-white/60 group-hover:text-amber-400 transition-colors duration-200" />
        </button>

        {/* Dot indicators */}
        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > active ? 'next' : 'prev')}
              aria-label={`Review ${i + 1}`}
              className="cursor-pointer transition-all duration-350"
              style={{
                width:  i === active ? 24 : 8,
                height: 8,
                borderRadius: 99,
                backgroundColor: i === active ? '#FFCC05' : 'rgba(255,255,255,0.25)',
              }}
            />
          ))}
        </div>

        {/* Next arrow */}
        <button
          onClick={next}
          aria-label="Next review"
          className="group w-10 h-10 rounded-full border border-white/20 flex items-center justify-center
                     hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-250 cursor-pointer"
        >
          <ChevronRight size={18} className="text-white/60 group-hover:text-amber-400 transition-colors duration-200" />
        </button>
      </div>
    </div>
  );
};

/* ── Extracted card so both entering/leaving render identically ── */
const ReviewCard = ({ review }) => (
  <>
    <p className="text-amber-400 font-semibold text-xs tracking-[0.22em] uppercase">
      {review.tourName}
    </p>
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-600'}
        />
      ))}
    </div>
    <p className="text-gray-300 text-sm leading-7 max-w-sm text-center italic">
      "{review.comment}"
    </p>
    <div className="w-10 h-px bg-amber-400/40" />
    <div className="flex items-center gap-4">
      <img
        src={review.image}
        alt={review.name}
        className="w-11 h-11 rounded-full object-cover border-2 border-amber-400"
      />
      <div className="text-left">
        <p className="text-white font-bold text-sm tracking-wider uppercase">{review.name}</p>
        <p className="text-gray-400 text-xs mt-0.5">Happy Traveller</p>
      </div>
    </div>
  </>
);

export default SingleReview;