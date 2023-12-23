import { useSelector } from 'react-redux'
import PopularMovies from '../components/PopularMovies'
import TopRatedMovies from '../components/TopRatedMovies'
import HeroHeader from '../components/HeroHeader'
// import Trailers from '../components/Trailers'

function Discover() {
  const { rightSideStatus } = useSelector((state) => state.themeSlice)

  return (
    <div
      className={`relative left-[5vw] transition-all duration-500 ${
        rightSideStatus ? 'w-[73vw]' : 'w-[95vw]'
      }`}>
      <HeroHeader />
      <PopularMovies />
      <TopRatedMovies />
    </div>
  )
}

export default Discover
