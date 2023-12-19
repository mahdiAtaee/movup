/* eslint-disable import/no-unresolved */
import { AiOutlinePlus } from 'react-icons/ai'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGetTrendMoviesQuery } from '../redux/services/ApiCall'
import IMDB from '../assets/imdb.png'
import 'swiper/css'
import 'swiper/css/pagination'

function HeroHeader() {
  const { data: TrendMovies } = useGetTrendMoviesQuery('day')
  console.log(TrendMovies)

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}">${index + 1}</span>`
    },
  }

  const progressCircle = useRef(null)
  const progressContent = useRef(null)
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress)
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
  }
  const MoviesSlider = TrendMovies?.results?.map((movie) => (
    <SwiperSlide
      key={movie.id}
      className="h-screen relative w-full after:w-screen after:h-4/5 after:absolute after:z-20 after:bottom-0 after:bg-gradient-to-t after:from-black after:via-transparent after:block before:w-screen before:h-4/5 before:absolute before:z-20 before:top-0 before:bg-gradient-to-b before:from-black before:via-transparent before:block">
      <img
        src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`}
        className="w-full h-screen object-cover absolute left-0 top-0"
      />
      <div className="absolute left-16 bottom-48 z-30">
        <p className="font-bold text-white font-primary text-6xl">
          {movie.media_type === 'tv' ? movie?.name : movie?.title}
        </p>
        <p className="font-bold text-white font-Catamaran text-3xl">
          Media Type: {movie?.media_type}
        </p>
        <span className="font-bold text-white font-Catamaran text-3xl">
          {movie.media_type === 'tv'
            ? `First Air Date: ${movie?.first_air_date}`
            : `Release Date: ${movie?.release_date}`}
        </span>
        <span className="flex items-center gap-2 text-white mb-8">
          <img src={IMDB} alt="IMDb" className="w-8 h-8" />
          {`${movie.vote_average.toFixed(1)} rating`}
        </span>
        <Link
          to={`/overview/${movie?.id}`}
          className="transition py-2 px-4 mt-16 rounded-full text-white font-openSans text-lg bg-red-600 bg-opacity-70 border-4 border-red-700 hover:bg-red-900 ease-in">
          Watch now
        </Link>
      </div>
    </SwiperSlide>
  ))
  return (
    <div className="h-screen">
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-full h-screen">
        {MoviesSlider}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20" />
          </svg>
          <span ref={progressContent} />
        </div>
      </Swiper>
    </div>
  )
}

export default HeroHeader
