import { useParams } from 'react-router-dom'
import { useGetMovieReviewsQuery } from '../redux/services/ApiCall'

function MovieReview() {
  const { id } = useParams()
  const { data: reviews } = useGetMovieReviewsQuery(id)
  console.log(reviews)
  return <div>MovieReview</div>
}

export default MovieReview
