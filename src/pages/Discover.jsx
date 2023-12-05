import { useSelector } from 'react-redux'
import PopularMovies from '../components/PopularMovies'
import TopRatedMovies from '../components/TopRatedMovies'
// import Trailers from '../components/Trailers'

function Discover() {
  const { rightSideStatus } = useSelector((state) => state.themeSlice)

  return (
    <div className={`transition-all duration-500 ${rightSideStatus ? 'w-[60vw]' : 'w-[83vw]'}`}>
      <PopularMovies />
      <TopRatedMovies />
    </div>
  )
}

export default Discover
