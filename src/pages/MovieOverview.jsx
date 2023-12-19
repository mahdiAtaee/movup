import { useParams } from 'react-router-dom'
import { Loading, MovieDetail, MovieDetailHeader } from '../components'
import { useGetMovieCreditsQuery, useGetMoviesDetailQuery } from '../redux/services/ApiCall'

function MovieOverview() {
  const { id } = useParams()
  const { data: movie, isFetching: isFetchingMovie } = useGetMoviesDetailQuery(id)
  const { data: credit } = useGetMovieCreditsQuery(id)
  if (isFetchingMovie) return <Loading loadingTitle="Loading Movie..." />

  return (
    <>
      <MovieDetailHeader movie={movie} credit={credit} />
      <MovieDetail movie={movie} credit={credit} />
    </>
  )
}

export default MovieOverview
