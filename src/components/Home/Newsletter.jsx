import { useState } from "react"
import NewsletterBg from "../../assets/Newsletter.png"
const Newsletter = () => {
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (email.trim()) {
            setSubmitted(true)
            setEmail("")
            setTimeout(() => setSubmitted(false), 4000)
        }
    }
    return (
        <div className="w-full py-10 px-4 sm:px-8 md:px-24 lg:px-48">
            <div
                className="relative w-full bg-cover bg-center flex flex-col md:flex-row items-center justify-between px-6 sm:px-8 md:px-12 lg:px-16 py-10 gap-6 overflow-hidden rounded-xl md:rounded-none"
                style={{ backgroundImage: `url(${NewsletterBg})` }}
            >
                <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left shrink-0">
                    <h2 className="font-title text-2xl md:text-3xl font-bold text-black leading-tight">
                        Join Newsletter
                    </h2>
                    <p className="text-black text-sm md:text-base mt-1 font-medium">
                        To receive our best deals
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="relative z-10 flex flex-col sm:flex-row w-full md:max-w-2xl sm:h-14 gap-3 sm:gap-0"
                >
                    {submitted ? (
                        <div className="w-full h-14 flex items-center justify-center bg-white text-gray-900 font-semibold px-6 text-sm tracking-wide">
                            ✓ Subscribed! Check your inbox.
                        </div>
                    ) : (
                        <>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Your Email"
                                className="w-full sm:flex-1 h-14 sm:h-full px-5 text-gray-800 placeholder-gray-400 bg-white focus:outline-none text-sm md:text-base"
                            />
                            <button
                                type="submit"
                                className="w-full sm:w-auto h-14 sm:h-full px-8 bg-[#303030] hover:bg-black text-white font-bold tracking-widest text-xs md:text-sm uppercase transition-colors duration-300 cursor-pointer shrink-0"
                            >
                                Subscribe
                            </button>
                        </>
                    )}
                </form>
            </div>
        </div>
    )
}
export default Newsletter
