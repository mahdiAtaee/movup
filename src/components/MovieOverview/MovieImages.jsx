/* eslint-disable import/no-unresolved */
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import { useParams } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/free-mode'
import Lightbox from 'yet-another-react-lightbox'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import SectionTitle from '../SectionTitle'
import { useGetMovieImagesQuery } from '../../redux/services/ApiCall'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

function MovieImages() {
  const [open, setOpen] = useState(false)
  const { id } = useParams()
  const { data } = useGetMovieImagesQuery(id)

  const Images = data?.backdrops?.slice(0, 10).map((movie) => (
    <SwiperSlide
      key={movie.id}
      className="my-4 rounded-xl shadow-md relative"
      style={{ width: '300px' }}
      onClick={() => setOpen(true)}>
      <div className="w-[300px] relative rounded-xl cursor-pointer">
        <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full bg-black opacity-30" />
        <img
          src={`https://image.tmdb.org/t/p/w300${movie?.file_path}`}
          alt={movie.name}
          className="w-full rounded-xl"
        />
        <div className="absolute bottom-4 left-2">
          <span className="font-bold text-xl font-primary block text-white">{movie.name}</span>
        </div>
      </div>
    </SwiperSlide>
  ))

  const GallerySlide = data?.backdrops?.slice(0, 10).map((movie) => ({
    src: `https://image.tmdb.org/t/p/w780${movie?.file_path}`,
    width: 800,
    height: 600,
  }))

  return (
    <div className="my-4">
      <SectionTitle title="Movie Images" hasAllPage={false} />
      <div className="flex w-full overflow-x-auto overflow-y-hidden gap-4">
        <Swiper
          slidesPerView="auto"
          spaceBetween={5}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}>
          {Images}
        </Swiper>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={GallerySlide}
        plugins={[Thumbnails]}
      />
    </div>
  )
}

export default MovieImages
