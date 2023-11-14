import MoviesCard from '../components/MoviesCard'
import { useGetPopularMoviesQuery } from '../redux/services/ApiCall'

function PopularMovies() {
  const { data: movies } = useGetPopularMoviesQuery()
  const Movies = movies?.results?.map((movie) => <MoviesCard movie={movie} />)
  return (
    <>
      <div className="grid grid-cols-3 gap-4 rounded-full">{Movies}</div>
      <div>pagination</div>
    </>
  )
}

export default PopularMovies
