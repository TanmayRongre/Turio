import React, { useRef, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import TopBar from '../components/Home/TopBar';
import Navbar from '../components/Home/Navbar';
import usePageTitle from '../hooks/usePageTitle';

const TourDetails = ({ countries }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const imageRef = useRef(null);
    
    // Find the tour across all countries
    const tour = countries?.flatMap(c => c.tours).find(t => t?.id === parseInt(id));
    usePageTitle(tour ? `${tour.name} — Tour` : 'Tour Details');

    useEffect(() => {
        const handleScroll = () => {
            if (!imageRef.current) return;
            imageRef.current.style.transform = `translateY(${window.scrollY * 0.5}px)`;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!tour) {
        return (
            <div className='flex flex-col items-center justify-center min-h-screen font-title'>
                <h1 className='text-4xl font-bold mb-4'>Tour Not Found</h1>
                <Link to="/destinations">
                    <button className='px-6 py-3 bg-[#FFCC05] hover:bg-[#222] text-white font-bold tracking-[0.2em] uppercase rounded-full transition-colors'>
                        Back to Destinations
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col min-h-screen bg-white pb-20">
            {/* Hero Section */}
            <div className="relative w-full h-[60vh] md:h-[70vh] flex flex-col">
                <div className="absolute inset-0 w-full h-full overflow-hidden bg-gray-900">
                    <img
                        ref={imageRef}
                        src={tour.img}
                        alt={tour.name}
                        className="absolute left-0 w-full h-full object-cover opacity-70"
                        style={{
                            top: '-10vh',
                            height: '120vh',
                            willChange: 'transform',
                        }}
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/20 to-black/60 z-10 pointer-events-none" />
                </div>
                
                <div className="absolute inset-0 w-full h-full z-20 flex flex-col">
                    <TopBar />
                    <Navbar />
                    <div className="flex flex-col justify-center items-center w-full h-full gap-4 px-4 text-center -mt-10">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white font-title tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                            {tour.name}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="w-full px-6 md:px-12 lg:px-20 py-16 max-w-350 mx-auto flex flex-col lg:flex-row gap-12">
                
                {/* Left Side: Details & Itinerary */}
                <div className="w-full lg:w-2/3 flex flex-col gap-10">
                    
                    {/* Overview */}
                    <div className="flex flex-col gap-4">
                        <h2 className="font-title text-3xl font-bold text-gray-900">Tour Overview</h2>
                        <p className="text-gray-600 text-lg leading-relaxed font-light">{tour.overview}</p>
                    </div>

                    {/* Quick Info Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <div className="flex flex-col gap-1">
                            <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Duration</span>
                            <span className="text-gray-900 font-bold">{tour.duration}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Availability</span>
                            <span className="text-gray-900 font-bold">{tour.dates}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Food</span>
                            <span className="text-gray-900 font-bold">{tour.food}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Start Price</span>
                            <span className="text-[#FFCC05] font-bold text-xl">{tour.price}</span>
                        </div>
                    </div>

                    {/* Features Included */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-title text-2xl font-bold text-gray-900">What's Included</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {tour.features?.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Roadmap / Itinerary */}
                    <div className="flex flex-col gap-6 mt-4">
                        <h3 className="font-title text-3xl font-bold text-gray-900">Itinerary</h3>
                        <div className="flex flex-col gap-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                            {tour.roadmap?.map((item, index) => (
                                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    {/* Timeline dot */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#FFCC05] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md relative z-10">
                                        <span className="text-white font-bold text-sm">{typeof item.day === 'string' ? item.day : `D${item.day}`}</span>
                                    </div>
                                    
                                    {/* Content Card */}
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[#FFCC05] text-sm font-bold uppercase tracking-wider">Day {item.day}</span>
                                            <h4 className="font-title text-xl font-bold text-gray-900">{item.title}</h4>
                                            <p className="text-gray-600 mt-2 font-light">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Right Side: Sticky Booking Sidebar */}
                <div className="w-full lg:w-1/3 flex flex-col">
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 sticky top-28 flex flex-col gap-6">
                        <div className="flex flex-col gap-2 border-b border-gray-100 pb-6">
                            <span className="text-gray-500 font-medium text-lg">Price per person</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-bold text-[#222]">{tour.price}</span>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center text-gray-600">
                                <span className="font-medium">Tour Length:</span>
                                <span className="font-bold text-gray-900">{tour.duration}</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-600">
                                <span className="font-medium">Start Dates:</span>
                                <span className="font-bold text-gray-900 text-right max-w-[60%]">{tour.dates}</span>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/booking', {
                                state: {
                                    tourName: tour.name,
                                    price: tour.price,
                                    destination: countries?.find(c => c.tours?.some(t => t.id === tour.id))?.name || '',
                                    heroImg: tour.img,
                                    travelType: tour.type || '',
                                }
                            })}
                            className="w-full py-4 mt-2 bg-[#FFCC05] hover:bg-[#222] text-white font-bold tracking-[0.2em] uppercase rounded-full transition-colors shadow-lg cursor-pointer">
                            Book This Tour
                        </button>
                        
                        <p className="text-center text-gray-400 text-sm mt-2">
                            No hidden fees. Best price guaranteed.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default TourDetails;
