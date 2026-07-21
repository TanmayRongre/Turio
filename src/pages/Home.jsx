import React from 'react'
import Info from '../components/Home/Info'
import Main from '../components/Home/Main'
import Reviews from '../components/Home/Reviews'
import Gallery from '../components/Home/Gallery'
import Explore from '../components/Home/Explore'
import BlogHome from '../components/Home/BlogHome'

const Home = () => {
  return (
    <>
      <Main />
      <Info />
      <Reviews />
      <Gallery />
      <Explore />
      <BlogHome />
    </>
  )
}

export default Home