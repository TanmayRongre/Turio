import React from 'react';
import { Calendar } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: "Journeys Are Best Measured In New Friends",
    date: "February 1, 2018",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=800",
  },
  {
    id: 2,
    title: "A Lot Of Traveling Turns You Into A Storyteller",
    date: "February 2, 2018",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=800",
  },
  {
    id: 3,
    title: "Travel Makes One Modest And Opened To Ideas",
    date: "February 3, 2018",
    image: "https://images.unsplash.com/photo-1525875975471-999f65706a10?q=80&w=800",
  },
  {
    id: 4,
    title: "Discover New Oceans By Losing Sight Of The Shore",
    date: "February 4, 2018",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800",
  },
  {
    id: 5,
    title: "Think Of How Things Should Be And Act Upon",
    date: "February 5, 2018",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800",
  },
  {
    id: 6,
    title: "Live Now As If You'd Drop Dead In Ten Seconds",
    date: "February 8, 2018",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
  },
  {
    id: 7,
    title: "Begin The Real Voyage Of Discovery Right Now",
    date: "February 6, 2018",
    image: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=800",
  },
  {
    id: 8,
    title: "Don't Be Disappointed By The Things You Didn't Do",
    date: "February 7, 2018",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800",
  }
];

const BlogHome = () => {
  return (
    <section className="w-full px-6 md:px-16 lg:px-32 py-24 bg-white">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 font-title mb-6 tracking-tight">
          Blog Posts
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed font-light">
          One inspiring story is worth traveling. Discover more about local food, tradition and history. Read the stories that make you want to travel.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
        {blogs.map((blog) => (
          <article 
            key={blog.id} 
            className="break-inside-avoid mb-10 group cursor-pointer"
          >
            {/* Image Container with hover zoom */}
            <div className="overflow-hidden mb-5">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3">
              <h3 className="text-[1.35rem] font-bold text-gray-900 font-title leading-snug group-hover:text-amber-500 transition-colors duration-300">
                {blog.title}
              </h3>
              
              {/* Meta information */}
              <div className="flex items-center gap-6 text-gray-400 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="opacity-70" />
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      
    </section>
  );
}

export default BlogHome;