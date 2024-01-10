import Overview from './Overview'
import Casts from './Casts'
import MovieImages from './MovieImages'
import SimilarMovies from './SimilarMovies'
import Recommendations from './Recommendations'
import MovieVideos from './MovieVideos'
import MovieReview from './MovieReview'

function MovieDetail({ movie, credit }) {
  return (
    <div className="flex">
      <div className="p-4 ml-20 w-[95vw]">
        <Overview overview={movie?.overview} />
        <Casts credit={credit} />
        <MovieImages />
        <MovieVideos />
        <SimilarMovies />
        <Recommendations />
        <MovieReview />
      </div>
    </div>
  )
}

export default MovieDetail
