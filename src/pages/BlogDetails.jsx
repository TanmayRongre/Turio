import React, { useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import TopBar from '../components/Home/TopBar';
import Navbar from '../components/Home/Navbar';
import { Calendar, ArrowLeft } from 'lucide-react';

const BlogDetails = () => {
    const { id } = useParams();
    const blog = blogs.find(b => b.id === parseInt(id));
    const imageRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on load
        const handleScroll = () => {
            if (!imageRef.current) return;
            imageRef.current.style.transform = `translateY(${window.scrollY * 0.5}px)`;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [id]);

    if (!blog) {
        return (
            <div className="w-full flex flex-col min-h-screen bg-gray-50 items-center justify-center">
                <TopBar />
                <Navbar />
                <h1 className="text-4xl font-bold text-gray-900 mt-20">Blog Not Found</h1>
                <Link to="/blog" className="mt-6 text-[#FFCC05] font-bold hover:underline">
                    Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col min-h-screen bg-white">
            <TopBar />
            <Navbar />
            
            {/* Hero Image Section */}
            <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden mt-[-100px] z-0">
                <img
                    ref={imageRef}
                    src={blog.image}
                    alt={blog.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                        top: '-10vh',
                        height: '120vh',
                        willChange: 'transform',
                    }}
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content Section */}
            <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-16 -mt-32 bg-white rounded-t-3xl shadow-xl mb-20">
                <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-[#FFCC05] transition-colors mb-8 font-medium">
                    <ArrowLeft size={16} className="mr-2" /> Back to Blog
                </Link>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-title leading-tight mb-6">
                    {blog.title}
                </h1>
                
                <div className="flex items-center text-gray-500 mb-10 pb-6 border-b border-gray-100">
                    <Calendar size={18} className="mr-2 text-[#FFCC05]" />
                    <span className="font-medium">{blog.date}</span>
                </div>

                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-light">
                    <p className="text-xl mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-[#FFCC05] first-letter:mr-1 first-letter:float-left">
                        {blog.content}
                    </p>
                    <p className="mb-6">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                    </p>
                    <p>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
