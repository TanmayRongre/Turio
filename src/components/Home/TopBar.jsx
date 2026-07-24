import React from 'react'
const TopBar = () => {
  return (
    <div className="w-full bg-gray-900 text-white text-xs flex justify-between items-center px-4 md:px-10 lg:px-30 py-2">
      <div className="flex items-center gap-3">
        <span className="uppercase tracking-widest font-semibold">Follow Us:</span>
        <div className="tracking-wide">☎ 7887564XXX</div>
      </div>
      <div className="flex gap-4">
        <button className="uppercase tracking-widest font-semibold hover:text-primary transition-colors duration-200">
          Login
        </button>
      </div>
    </div>
  )
}
export default TopBar