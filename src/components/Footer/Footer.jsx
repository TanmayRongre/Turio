import { Phone, MapPin, Mail} from 'lucide-react'
const latestPosts = [
  {
    id: 1,
    title: "Traveling – It Leaves You Speechless, Then Turns You Into A Storyteller",
    date: "February 21, 2018",
  },
  {
    id: 2,
    title: "A Journey Is Always Best Measured In New Friends, Rather Than Miles",
    date: "February 21, 2018",
  },
]
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.514c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)
const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)
const socialLinks = [
  { Icon: XIcon, href: "#", label: "Twitter / X" },
  { Icon: FacebookIcon, href: "#", label: "Facebook" },
  { Icon: InstagramIcon, href: "#", label: "Instagram" },
  { Icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { Icon: YouTubeIcon, href: "#", label: "YouTube" },
]
const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-gray-300">
      <div className="w-full px-8 md:px-16 lg:px-32 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <h1 className="text-5xl font-cursive">Turio</h1>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam urna lacus porta, augue eget sagittis.
          </p>
          <ul className="flex flex-col gap-3 text-sm text-gray-400">
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-[#d4af37] shrink-0" />
              <span>1-677-124-44227</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={14} className="text-[#d4af37] shrink-0" />
              <span>Eighth Avenue 487, New York</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={14} className="text-[#d4af37] shrink-0" />
              <span>hello@turio.com</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h4 className="text-white font-title text-lg font-semibold tracking-wide">Latest Posts</h4>
          <div className="w-10 h-0.5 bg-[#d4af37] -mt-2" />
          <ul className="flex flex-col gap-6">
            {latestPosts.map((post) => (
              <li key={post.id} className="flex flex-col gap-1 cursor-pointer group">
                <span className="text-gray-300 text-sm leading-snug group-hover:text-[#d4af37] transition-colors duration-300">
                  {post.title}
                </span>
                <span className="text-gray-500 text-xs">{post.date}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h4 className="text-white font-title text-lg font-semibold tracking-wide">Twitter Feed</h4>
          <div className="w-10 h-0.5 bg-[#d4af37] -mt-2" />
          <p className="text-gray-400 text-sm leading-relaxed">
            For all the latest news and updates, follow us on Twitter:{" "}
            <a href="#" className="text-[#d4af37] hover:underline">@TurioTravel</a>
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            "Travel is the only thing you buy that makes you richer."
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h4 className="text-white font-title text-lg font-semibold tracking-wide">Follow Us</h4>
          <div className="w-10 h-0.5 bg-[#d4af37] -mt-2" />
          <p className="text-gray-400 text-sm leading-relaxed">
            Stay connected with Turio across all platforms.
          </p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center border border-gray-600 text-gray-400 hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-5 px-8 md:px-16 lg:px-32 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
        <span>© {new Date().getFullYear()} Turio Travel. All Rights Reserved.</span>
        <div className="flex gap-5">
          <a href="#" className="hover:text-[#d4af37] transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-[#d4af37] transition-colors duration-300">Terms of Use</a>
          <a href="#" className="hover:text-[#d4af37] transition-colors duration-300">Sitemap</a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
