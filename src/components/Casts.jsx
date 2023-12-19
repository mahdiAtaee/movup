/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import SectionTitle from './SectionTitle'

function Casts({ credit }) {
  const Movies = credit?.cast?.slice(0, 10).map((movie) => (
    <SwiperSlide
      key={movie.id}
      className="my-4 rounded-xl shadow-md relative"
      style={{ width: '150px' }}>
      <div className="w-[150px] relative">
        <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full bg-black opacity-30" />
        <img
          src={`https://image.tmdb.org/t/p/w185${movie?.profile_path}`}
          alt={movie.name}
          className="w-full rounded-xl"
        />
        <div className="absolute bottom-4 left-2">
          <span className="font-bold text-xl font-primary block text-white">{movie.name}</span>
        </div>
      </div>
    </SwiperSlide>
  ))
  return (
    <div>
      <SectionTitle title="Casts" />
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

export default Casts
