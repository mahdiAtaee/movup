import { FaUserCircle } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
import { useGetMovieReviewsQuery } from '../../redux/services/ApiCall'
import SectionTitle from '../SectionTitle'

function MovieReview() {
  const { id } = useParams()
  const { data: reviews } = useGetMovieReviewsQuery(id)
  console.log('reviews', reviews)
  const Comments = reviews?.results?.map((review) => {
    const unixTimestamp = Date.parse(review?.created_at)
    const date = new Date(unixTimestamp)
    return (
      <li key={review.id} className="my-8 bg-white border-2 shadow-lg p-8 rounded-lg mr-4">
        <div className="flex items-center gap-2 mb-8 justify-between">
          <div className="flex items-center gap-2">
            {review.author_details?.avatar_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w45${review.author_details?.avatar_path}`}
                alt={review.author_details?.name}
                className="w-[65px] h-[65px] object-cover rounded-full"
              />
            ) : (
              <FaUserCircle className="w-[65px] h-[65px] object-cover rounded-full" />
            )}
            <div className="flex justify-center flex-col">
              <span className="font-bold text-2xl font-Catamaran">{review.author} </span>
              <span className="text-lg text-gray-500 font-primary">
                {date.toLocaleDateString()}
              </span>
            </div>
          </div>
          <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            isHalf
            value={Number(review.author_details?.rating) / 2}
            edit={false}
          />
        </div>
        <p className="text-lg font-primary mt-2">{review.content}</p>
      </li>
    )
  })

  return (
    <div>
      <SectionTitle title="Comments" hasAllPage={false} />
      <ul>{Comments}</ul>
    </div>
  )
}

export default MovieReview
