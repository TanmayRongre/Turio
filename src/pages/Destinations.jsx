import { useRef, useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import TopBar from '../components/Home/TopBar';
import Navbar from '../components/Home/Navbar';
import usePageTitle from '../hooks/usePageTitle';

const Destinations = ({ countries }) => {
    const imageRef = useRef(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('q') || '');

    usePageTitle('Destinations');

    useEffect(() => {
        const handleScroll = () => {
            if (!imageRef.current) return;
            imageRef.current.style.transform = `translateY(${window.scrollY * 0.5}px)`;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const filtered = query.trim()
        ? countries.filter(c => c.name.toLowerCase().includes(query.toLowerCase()))
        : countries;

    const handleSearch = (val) => {
        setQuery(val);
        if (val.trim()) {
            setSearchParams({ q: val });
        } else {
            setSearchParams({});
        }
    };

    return (
        <div className="w-full flex flex-col min-h-screen bg-white pb-20">
            {/* Hero */}
            <div className="relative w-full h-[60vh] md:h-[50vh] lg:h-[60vh] flex flex-col">
                <div className="absolute inset-0 w-full h-full overflow-hidden bg-gray-900">
                    <img
                        ref={imageRef}
                        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600"
                        alt="Destination Hero"
                        className="absolute left-0 w-full h-full object-cover opacity-60"
                        style={{ top: '-10vh', height: '120vh', willChange: 'transform' }}
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/30 z-10 pointer-events-none" />
                </div>

                <div className="absolute inset-0 w-full h-full z-20 flex flex-col">
                    <TopBar />
                    <Navbar />
                    <div className="flex flex-col justify-center items-center w-full h-full gap-4 px-4 text-center -mt-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-title tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                            Destinations
                        </h1>
                        <p className="text-gray-100 text-sm md:text-base max-w-2xl mt-2 font-light drop-shadow-md leading-relaxed">
                            From exotic escapes to cultural deep-dives — find the destination that calls to you.
                        </p>
                    </div>
                </div>
            </div>

            {/* Search bar */}
            <div className="w-full px-4 md:px-10 lg:px-20 max-w-350 mx-auto pt-12 pb-2">
                <div className="relative max-w-md">
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                    </svg>
                    <input
                        type="text"
                        value={query}
                        onChange={e => handleSearch(e.target.value)}
                        placeholder="Search destinations…"
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 focus:border-[#FFCC05] rounded-full outline-none text-gray-800 text-sm font-medium transition-colors"
                    />
                    {query && (
                        <button
                            onClick={() => handleSearch('')}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors text-lg leading-none"
                        >
                            ×
                        </button>
                    )}
                </div>
                {query && (
                    <p className="text-gray-400 text-sm mt-3 ml-1">
                        {filtered.length > 0
                            ? `${filtered.length} destination${filtered.length !== 1 ? 's' : ''} found for "${query}"`
                            : `No destinations match "${query}"`}
                    </p>
                )}
            </div>

            {/* Masonry Grid */}
            <div className="w-full px-4 md:px-10 lg:px-20 py-10 max-w-350 mx-auto">
                {filtered.length === 0 ? (
                    <div className="flex flex-col items-center gap-4 py-20 text-center">
                        <span className="text-6xl">🗺️</span>
                        <p className="font-title text-2xl font-bold text-gray-700">No results found</p>
                        <p className="text-gray-400">Try a different search term</p>
                        <button
                            onClick={() => handleSearch('')}
                            className="mt-2 px-8 py-3 bg-[#FFCC05] hover:bg-[#222] text-white font-bold tracking-widest text-xs uppercase rounded-full transition-colors"
                        >
                            Clear Search
                        </button>
                    </div>
                ) : (
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {filtered.map((country) => (
                            <Link
                                to={`/destinations/${country.id}`}
                                key={country.id}
                                className="break-inside-avoid block relative group overflow-hidden cursor-pointer"
                            >
                                <div className="w-full relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <img
                                        src={country.img}
                                        alt={country.name}
                                        className="w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                                    <div className="absolute bottom-6 left-6 text-white flex flex-col items-start">
                                        <span className="text-[#FFCC05] text-xs font-bold uppercase tracking-widest mb-1">
                                            {country.toursCount} Tours
                                        </span>
                                        <h3 className="font-title text-3xl md:text-4xl font-bold tracking-wide group-hover:-translate-y-1 transition-transform duration-300">
                                            {country.name}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Destinations;