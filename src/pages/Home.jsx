import Info from '../components/Home/Info'
import Main from '../components/Home/Main'
import Reviews from '../components/Home/Reviews'
import Gallery from '../components/Home/Gallery'
import Explore from '../components/Home/Explore'
import BlogHome from '../components/Home/BlogHome'
import Newsletter from '../components/Home/Newsletter'
const Home = ({ countries }) => {
  return (
    <>
      <Main countries={countries} />
      <Info countries={countries} />
      <Reviews />
      <Gallery countries={countries} />
      <Explore />
      <BlogHome />
      <Newsletter />
    </>
  )
}
export default Home