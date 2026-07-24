import React, { useRef, useState, useEffect } from 'react';
import InfoCard from './InfoCard';
const InfoDestinations = ({ countries }) => {
    const scrollContainerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [maxDots, setMaxDots] = useState(3);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setMaxDots(countries.length);
            } else {
                setMaxDots(Math.ceil(countries.length / 3));
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [countries.length]);
    const handleScrollClick = (direction) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const firstChild = container.children[0];
            const scrollAmount = firstChild.offsetWidth + 24; 
            const multiplier = window.innerWidth < 768 ? 1 : 3;
            container.scrollBy({ 
                left: direction === 'next' ? scrollAmount * multiplier : -scrollAmount * multiplier, 
                behavior: 'smooth' 
            });
        }
    };
    const handleDotClick = (index) => {
        if (scrollContainerRef.current) {
             const container = scrollContainerRef.current;
             const firstChild = container.children[0];
             const scrollAmount = firstChild.offsetWidth + 24;
             const multiplier = window.innerWidth < 768 ? 1 : 3;
             container.scrollTo({ 
                 left: index * scrollAmount * multiplier, 
                 behavior: 'smooth' 
             });
        }
    };
    const handleScrollEvent = (e) => {
        const container = e.target;
        const firstChild = container.children[0];
        if (!firstChild) return;
        const scrollAmount = firstChild.offsetWidth + 24;
        const multiplier = window.innerWidth < 768 ? 1 : 3;
        const newIndex = Math.round(container.scrollLeft / (scrollAmount * multiplier));
        if (newIndex !== currentIndex && newIndex < maxDots) {
            setCurrentIndex(newIndex);
        }
    };
    return (
        <div className="w-full flex flex-col gap-8">
            <style>{`
        @keyframes textSmoothBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-text-bounce {
          animation: textSmoothBounce 0.6s ease-in-out;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
            <div className="relative w-full flex flex-col items-center justify-center mb-4 px-4">
                <div className="text-center">
                    <h2 className="text-4xl md:text-[2.8rem] font-bold text-[#222] font-title leading-tight">
                        Popular Destinations
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg font-light mt-2">
                        Explore our premium package locations across the globe
                    </p>
                </div>
                <div className="absolute right-4 md:right-0 bottom-2 flex gap-3">
                    <button
                        onClick={() => handleScrollClick('prev')}
                        disabled={currentIndex === 0}
                        className="p-3 rounded-full border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-40 transition cursor-pointer select-none"
                    >
                        ←
                    </button>
                    <button
                        onClick={() => handleScrollClick('next')}
                        disabled={currentIndex >= maxDots - 1}
                        className="p-3 rounded-full border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-40 transition cursor-pointer select-none"
                    >
                        →
                    </button>
                </div>
            </div>
            <div className="w-full overflow-hidden pb-6 px-4 md:px-0">
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScrollEvent}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar"
                >
                    {countries.map((country) => (
                        <InfoCard key={country.id} country={country} />
                    ))}
                </div>
            </div>
            <div className="flex justify-center gap-2 mt-2 flex-wrap px-4">
                {Array.from({ length: maxDots }).map((_, pageIndex) => (
                    <button
                        key={pageIndex}
                        onClick={() => handleDotClick(pageIndex)}
                        className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                            currentIndex === pageIndex ? 'w-8 bg-[#FFCC05]' : 'w-2 bg-gray-300'
                        }`}
                        aria-label={`Go to slide ${pageIndex + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
export default InfoDestinations;