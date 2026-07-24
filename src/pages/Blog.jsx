import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/Home/TopBar';
import Navbar from '../components/Home/Navbar';
import { Calendar } from 'lucide-react';
import { blogs } from '../data/blogs';

const Blog = () => {
    const imageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!imageRef.current) return;
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
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600"
                        alt="Blog Hero"
                        className="absolute left-0 w-full h-full object-cover opacity-60"
                        style={{
                            top: '-10vh',
                            height: '120vh',
                            willChange: 'transform',
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 z-10 pointer-events-none" />
                </div>
                
                <div className="absolute inset-0 w-full h-full z-20 flex flex-col">
                    <TopBar />
                    <Navbar />
                    <div className="flex flex-col justify-center items-center w-full h-full gap-4 px-4 text-center mt-[-40px]">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-title tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                            Travel Blog
                        </h1>
                        <p className="text-gray-100 text-sm md:text-base max-w-2xl mt-2 font-light drop-shadow-md leading-relaxed">
                            Read our stories, tips, and insights. Let our travel experiences inspire your next big adventure across the globe.
                        </p>
                    </div>
                </div>
            </div>

            {/* Masonry Grid Section for Blogs */}
            <div className="w-full px-4 md:px-10 lg:px-20 py-24 max-w-[1400px] mx-auto">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
                    {blogs.map((blog) => (
                    <Link to={`/blog/${blog.id}`} key={blog.id} className="block break-inside-avoid w-full mb-10 group cursor-pointer">
                        <article>
                        <div className="overflow-hidden mb-5 rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300">
                            <img 
                            src={blog.image} 
                            alt={blog.title} 
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-[1.35rem] font-bold text-gray-900 font-title leading-snug group-hover:text-amber-500 transition-colors duration-300">
                            {blog.title}
                            </h3>
                            <div className="flex items-center gap-6 text-gray-400 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <Calendar size={14} className="opacity-70" />
                                <span>{blog.date}</span>
                            </div>
                            </div>
                        </div>
                        </article>
                    </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;