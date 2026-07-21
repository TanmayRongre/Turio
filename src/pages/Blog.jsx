import React from 'react'
import { Link } from 'react-router-dom'
const Blog = () => {
    return (
        <div className='font-black flex flex-col items-center justify-center h-screen font-title'>
            <h1 className='text-4xl'>
                Work in progess...
            </h1>
            <p>Click below button for going home</p>
            <Link to="/">
                <button className='mt-4 px-4 py-2 rounded-full bg-[#FFCC05] hover:bg-[#222] text-white font-bold tracking-[0.2em] uppercase cursor-pointer shadow-md'>
                    Go to Home
                </button>
            </Link>
        </div>
    )
}

export default Blog