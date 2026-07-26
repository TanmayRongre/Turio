import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/Home/TopBar';
import Navbar from '../components/Home/Navbar';
import usePageTitle from '../hooks/usePageTitle';

const Tours = ({ countries }) => {
    const imageRef = useRef(null);
    usePageTitle('Our Tours');

    useEffect(() => {
        const handleScroll = () => {
            if (!imageRef.current) return;
            imageRef.current.style.transform = `translateY(${window.scrollY * 0.5}px)`;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="w-full flex flex-col min-h-screen bg-gray-50 pb-20">
            {/* Header section with parallax image effect */}
            <div className="relative w-full h-[60vh] md:h-[50vh] lg:h-[60vh] flex flex-col">
                <div className="absolute inset-0 w-full h-full overflow-hidden bg-gray-900">
                    <img
                        ref={imageRef}
                        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600"
                        alt="Tours Hero"
                        className="absolute left-0 w-full h-full object-cover opacity-60"
                        style={{
                            top: '-10vh',
                            height: '120vh',
                            willChange: 'transform',
                        }}
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/30 z-10 pointer-events-none" />
                </div>

                <div className="absolute inset-0 w-full h-full z-20 flex flex-col">
                    <TopBar />
                    <Navbar />
                    <div className="flex flex-col justify-center items-center w-full h-full gap-4 px-4 text-center -mt-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-title tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                            Our Tours
                        </h1>
                        <p className="text-gray-100 text-sm md:text-base max-w-2xl mt-2 font-light drop-shadow-md leading-relaxed">
                            Explore our carefully curated tours across the globe. Find your next adventure today.
                        </p>
                    </div>
                </div>
            </div>

            {/* Tours by Country */}
            <div className="w-full px-4 md:px-10 lg:px-20 py-16 max-w-350 mx-auto space-y-20">
                {countries && countries.map((country) => (
                    <div key={country.id} className="flex flex-col w-full">
                        
                        {/* Section Header */}
                        <div className="flex items-center justify-center w-full mb-10">
                            <div className="h-0.5 bg-gray-300 grow rounded-full max-w-75"></div>
                            <h2 className="mx-6 text-3xl md:text-4xl font-title font-bold text-gray-800 tracking-wider">
                                {country.name}
                            </h2>
                            <div className="h-0.5 bg-gray-300 grow rounded-full max-w-75"></div>
                        </div>

                        {/* Tours Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {country.tours && country.tours.map(tour => (
                                <Link to={`/tours/${tour.id}`} key={tour.id} className="group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-2">
                                    <div className="relative w-full h-64 overflow-hidden">
                                        <img 
                                            src={tour.img} 
                                            alt={tour.name} 
                                            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute top-4 right-4 bg-[#FFCC05] text-gray-900 font-bold px-3 py-1 rounded-full text-sm shadow-md z-10">
                                            {tour.duration}
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-black/80 to-transparent pointer-events-none"></div>
                                        <div className="absolute bottom-4 left-4 text-white z-10">
                                            <p className="text-xl font-bold font-title tracking-wide">{tour.price}</p>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col grow">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#FFCC05] transition-colors duration-300">
                                            {tour.name}
                                        </h3>
                                        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                                            {tour.overview}
                                        </p>
                                        <div className="mt-auto border-t border-gray-100 pt-4 flex flex-wrap gap-2">
                                            {tour.features && tour.features.slice(0, 3).map((feature, idx) => (
                                                <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md font-medium">
                                                    {feature}
                                                </span>
                                            ))}
                                            {tour.features && tour.features.length > 3 && (
                                                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md font-medium">
                                                    +{tour.features.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tours;