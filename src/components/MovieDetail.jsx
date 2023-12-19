import { useSelector } from 'react-redux'
import Overview from './Overview'
import UserConfig from './UserConfig'
import Casts from './Casts'
import MovieImages from './MovieImages'
import SimilarMovies from './SimilarMovies'
import Recommendations from './Recommendations'
import MovieVideos from './MovieVideos'
import MovieReview from './MovieReview'

function MovieDetail({ movie, credit }) {
  const { rightSideStatus } = useSelector((state) => state.themeSlice)
  return (
    <div className="flex">
      <div className={`p-4 ${rightSideStatus ? 'w-[75vw]' : 'w-screen'}`}>
        <Overview overview={movie?.overview} />
        <Casts credit={credit} />
        <MovieImages />
        <MovieVideos />
        <SimilarMovies />
        <Recommendations />
        <MovieReview />
      </div>
      <UserConfig />
    </div>
  )
}

export default MovieDetail
