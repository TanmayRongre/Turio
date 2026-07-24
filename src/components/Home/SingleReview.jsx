import React, { useState, useEffect, useCallback } from 'react';
import { Star, Quote } from 'lucide-react';
const SingleReview = ({ reviews = [] }) => {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');
  const goTo = useCallback((index, dir = 'next') => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setActive(index);
      setIsAnimating(false);
    }, 300);
  }, [isAnimating]);
  const next = useCallback(() => {
    goTo((active + 1) % reviews.length, 'next');
  }, [active, reviews.length, goTo]);
  const prev = useCallback(() => {
    goTo((active - 1 + reviews.length) % reviews.length, 'prev');
  }, [active, reviews.length, goTo]);
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);
  if (!reviews.length) return null;
  const review = reviews[active];
  const slideClass = isAnimating
    ? direction === 'next'
      ? 'opacity-0 translate-x-8'
      : 'opacity-0 -translate-x-8'
    : 'opacity-100 translate-x-0';
  return (
    <div className="flex flex-col items-center gap-6 w-full mt-4">
      <Quote size={32} className="text-amber-400 opacity-70 rotate-180" />
      <div className={`flex flex-col items-center gap-4 transition-all duration-300 ease-in-out ${slideClass}`}>
        <p className="text-amber-400 font-semibold text-sm tracking-[0.2em] uppercase">
          {review.tourName}
        </p>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              className={i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-600'}
            />
          ))}
        </div>
        <p className="text-gray-300 text-sm leading-7 max-w-sm text-center italic">
          "{review.comment}"
        </p>
        <div className="w-10 h-px bg-amber-400/50" />
        <div className="flex items-center gap-4">
          <img
            src={review.image}
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-amber-400 "
          />
          <div className="text-left">
            <p className="text-white font-bold text-sm tracking-wider uppercase">
              {review.name}
            </p>
            <p className="text-gray-400 text-xs mt-0.5">Happy Traveller</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > active ? 'next' : 'prev')}
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === active ? 'bg-amber-400' : 'bg-gray-600 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
export default SingleReview;