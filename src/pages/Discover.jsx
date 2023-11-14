import PopularMovies from '../components/PopularMovies'
import TopRatedMovies from '../components/TopRatedMovies'
// import Trailers from '../components/Trailers'

function Discover() {
  return (
    <div className="w-[60vw]">
      <PopularMovies />
      <TopRatedMovies />
    </div>
  )
}

export default Discover
