import React, { useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import TopBar from '../components/Home/TopBar';
import Navbar from '../components/Home/Navbar';
import usePageTitle from '../hooks/usePageTitle';

const DestinationDetail = ({ countries }) => {
    const { id } = useParams();
    const imageRef = useRef(null);
    
    const country = countries?.find(c => c.id === parseInt(id));
    usePageTitle(country ? `${country.name} — Destination` : 'Destination');

    useEffect(() => {
        const handleScroll = () => {
            if (!imageRef.current) return;
            imageRef.current.style.transform = `translateY(${window.scrollY * 0.5}px)`;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!country) {
        return (
            <div className='flex flex-col items-center justify-center min-h-screen font-title'>
                <h1 className='text-4xl font-bold mb-4'>Destination Not Found</h1>
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
                        src={country.img}
                        alt={country.name}
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
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-title tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                            {country.name}
                        </h1>
                        <p className="text-gray-100 text-base md:text-lg max-w-2xl mt-2 font-light drop-shadow-md leading-relaxed">
                            {country.desc}
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="w-full px-6 md:px-12 lg:px-20 py-16 max-w-350 mx-auto flex flex-col lg:flex-row gap-12">
                
                {/* Left Side: Description and Photos */}
                <div className="w-full lg:w-2/3 flex flex-col gap-8">
                    <div>
                        <h2 className="font-title text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Discover {country.name}
                        </h2>
                        <div className="flex flex-col gap-5 text-gray-600 leading-relaxed text-base md:text-lg font-light">
                            {country.paragraphs?.map((para, index) => (
                                <p key={index}>{para}</p>
                            ))}
                        </div>
                    </div>
                    
                    {/* Photos Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        {country.photos?.map((photo, index) => (
                            <div key={index} className="w-full h-48 md:h-56 overflow-hidden rounded-lg shadow-sm group">
                                <img 
                                    src={photo} 
                                    alt={`${country.name} scenery ${index + 1}`} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Tours Sidebar */}
                <div className="w-full lg:w-1/3 flex flex-col">
                    <div className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 sticky top-28">
                        <h3 className="font-title text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                            Available Tours
                        </h3>
                        <div className="flex flex-col gap-6">
                            {country.tours?.map((tour) => (
                                <Link to={`/tours/${tour.id}`} key={tour.id} className="flex gap-4 group cursor-pointer hover:bg-white p-2 -m-2 rounded-xl transition-colors">
                                    <div className="w-24 h-24 shrink-0 overflow-hidden rounded-lg shadow-sm">
                                        <img 
                                            src={tour.img} 
                                            alt={tour.name} 
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center flex-1">
                                        <h4 className="font-bold text-gray-900 group-hover:text-[#FFCC05] transition-colors line-clamp-2">
                                            {tour.name}
                                        </h4>
                                        <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                                            <span className="flex items-center gap-1 font-medium text-gray-700">
                                                <svg className="w-4 h-4 text-[#FFCC05]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                {tour.duration}
                                            </span>
                                            <span className="text-[#FFCC05] font-bold text-base">
                                                {tour.price}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default DestinationDetail;
