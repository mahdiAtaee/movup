/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import { useParams } from 'react-router-dom'
import { useGetMovieVideosQuery } from '../../redux/services/ApiCall'
import 'swiper/css'
import 'swiper/css/free-mode'
import SectionTitle from '../SectionTitle'

function MovieVideos() {
  const { id } = useParams()
  const { data: videos } = useGetMovieVideosQuery(id)

  const Movies = videos?.results.slice(0, 5).map((movie) => (
    <SwiperSlide
      key={movie.id}
      className="my-4 rounded-xl shadow-md relative"
      style={{ width: '500px' }}>
      <div className="w-[500px] relative gap-2">
        <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full bg-black opacity-30" />
        <iframe
          src={`https://www.youtube.com/embed/${movie?.key}`}
          title="Trailer"
          width="560"
          height="315"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </SwiperSlide>
  ))
  return (
    <div className="my-8 w-full">
      <SectionTitle title="Movie Vidoes" hasAllPage={false} />
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

export default MovieVideos
