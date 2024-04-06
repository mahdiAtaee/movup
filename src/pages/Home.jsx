import { useSelector } from 'react-redux'
import PopularMovies from '../components/PopularMovies/PopularMovies'
import TopRatedMovies from '../components/DiscoverMovies/TopRatedMovies'
import HeroHeader from '../components/HeroHeader'
import ScreamGenre from '../components/ScreamGenre'
import AnimationGenre from '../components/AnimationGenre'
import WarGenre from '../components/WarGenre'
import AdventureGenre from '../components/AdventureGenre'
import TVGenre from '../components/TVGenre'
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
      <ScreamGenre />
      <AnimationGenre />
      <WarGenre />
      <AdventureGenre />
      <TVGenre />
    </div>
  )
}

export default Discover
