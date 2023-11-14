/* eslint-disable import/no-unresolved */
import { AiFillStar } from 'react-icons/ai'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import { useGetTopMoviesQuery, useGetTrailerMoviesQuery } from '../redux/services/ApiCall'
import 'swiper/css'
import 'swiper/css/free-mode'

function Trailers() {
  const { data: newMovies } = useGetTopMoviesQuery()
  const topMoviesId = newMovies?.results?.slice(0, 5).map((m) => m.id)

  // eslint-disable-next-line array-callback-return
  const trailerMovies = topMoviesId?.map((id) => {
    const { data: tarilers } = useGetTrailerMoviesQuery(id)
    const trailer = tarilers?.results?.find((video) => video.type === 'Trailer')
    return trailer
  })
  console.log(trailerMovies)
  const Movies = trailerMovies?.map((t) => (
    <iframe
      src={`https://www.youtube.com/embed/${t?.key}`}
      title="Trailer"
      width="560"
      height="315"
      frameBorder="0"
      allowFullScreen
    />
  ))
  return (
    <div className="my-8 w-full">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-bold text-2xl font-Catamaran flex items-center gap-1">
          Top Movies Trailer
          <AiFillStar color="#daa520" />
        </h2>
        <Link to="/popular-movies" className="flex items-center gap-2 text-gray-500">
          See All
          <MdKeyboardArrowRight size={24} />
        </Link>
      </div>
      <div className="flex w-full overflow-x-auto overflow-y-hidden gap-4">
        <Swiper
          slidesPerView="auto"
          spaceBetween={5}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}>
          {Movies}
        </Swiper>
      </div>
    </div>
  )
}

export default Trailers
