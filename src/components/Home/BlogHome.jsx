import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogs } from '../../data/blogs';

const BlogHome = () => {
  return (
    <section className="w-full px-6 md:px-16 lg:px-32 py-24 bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 font-title mb-6 tracking-tight">
          Blog Posts
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed font-light">
          One inspiring story is worth traveling. Discover more about local food, tradition and history. Read the stories that make you want to travel.
        </p>
      </div>
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
    </section>
  );
}
export default BlogHome;