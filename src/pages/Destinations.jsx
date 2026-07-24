import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/Home/TopBar';
import Navbar from '../components/Home/Navbar';

const Destinations = ({ countries }) => {
    const imageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!imageRef.current) return;
            // Parallax effect similar to Main.jsx video
            imageRef.current.style.transform = `translateY(${window.scrollY * 0.5}px)`;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="w-full flex flex-col min-h-screen bg-white pb-20">
            {/* Header section with parallax image effect */}
            <div className="relative w-full h-[60vh] md:h-[50vh] lg:h-[60vh] flex flex-col">
                <div className="absolute inset-0 w-full h-full overflow-hidden bg-gray-900">
                    <img
                        ref={imageRef}
                        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600"
                        alt="Destination Hero"
                        className="absolute left-0 w-full h-full object-cover opacity-60"
                        style={{
                            top: '-10vh',
                            height: '120vh',
                            willChange: 'transform',
                        }}
                    />
                    {/* Dark overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 z-10 pointer-events-none" />
                </div>
                
                <div className="absolute inset-0 w-full h-full z-20 flex flex-col">
                    <TopBar />
                    <Navbar />
                    <div className="flex flex-col justify-center items-center w-full h-full gap-4 px-4 text-center mt-[-40px]">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-title tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                            Destination List
                        </h1>
                        <p className="text-gray-100 text-sm md:text-base max-w-2xl mt-2 font-light drop-shadow-md leading-relaxed">
                            Showcase your destination offers with the all-encompassing destination lists that contains all the amazing places your customers can visit.
                        </p>
                    </div>
                </div>
            </div>

            {/* Masonry Grid Section */}
            <div className="w-full px-4 md:px-10 lg:px-20 py-16 max-w-[1400px] mx-auto">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {countries.map((country, index) => (
                        <Link 
                            to={`/destinations/${country.id}`} 
                            key={country.id}
                            className="break-inside-avoid block relative group overflow-hidden cursor-pointer"
                        >
                            <div className="w-full relative">
                                <img 
                                    src={country.img} 
                                    alt={country.name} 
                                    className="w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                    loading="lazy"
                                />
                                {/* Bottom dark gradient for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                                
                                <div className="absolute bottom-6 left-6 text-white flex flex-col items-start">
                                    <span className="font-cursive text-[#FFCC05] text-2xl lg:text-3xl -mb-4 ml-1 relative z-10">
                                        new
                                    </span>
                                    <h3 className="font-title text-3xl md:text-4xl font-bold tracking-wide group-hover:-translate-y-1 transition-transform duration-300">
                                        {country.name}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Destinations;