import React from 'react'
const TopBar = () => {
  return (
    <div className="w-full bg-gray-900 text-white text-xs flex justify-between items-center px-4 md:px-10 lg:px-30 py-2">
      <div className="flex items-center gap-3">
        <span className="uppercase tracking-widest font-semibold">Follow Us:</span>
        <div className="tracking-wide">☎ 7887564XXX</div>
      </div>
      <div className="flex items-center gap-3 text-gray-400">
        <span className="tracking-wide">✉ info@turio.com</span>
      </div>
    </div>
  )
}
export default TopBar