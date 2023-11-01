import { MdKeyboardArrowRight } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react'
// eslint-disable-next-line import/no-unresolved
import { FreeMode } from 'swiper/modules'
import { useGetPopularMoviesQuery } from '../redux/services/ApiCall'
import IMDB from '../assets/imdb.png'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/free-mode'

function Discover() {
  const { data } = useGetPopularMoviesQuery()
  console.log(data)

  const PopularMovies = data?.results?.slice(0, 5).map((movie) => (
    <SwiperSlide
      key={movie.id}
      className="my-4 rounded-xl shadow-md relative"
      style={{ width: '500px' }}>
      <div className="w-[500px] relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
          alt={movie.title}
          className="w-full rounded-xl"
        />
        <div className="absolute bottom-8 left-4">
          <span className="font-bold text-2xl font-primary block text-white">{movie.title}</span>
          <span className="text-xl text-white">{movie.release_date.split('-')[0]}</span>
          <span className="flex items-center gap-2 text-white">
            <img src={IMDB} alt="IMDb" className="w-8 h-8" />
            {`${movie.vote_average.toFixed(1)} rating`}
          </span>
        </div>
        <div className="absolute bottom-8 right-4 flex items-center gap-2">
          <Link
            to="/"
            className="transition py-2 px-4 rounded-full text-white font-openSans text-lg bg-red-600 bg-opacity-70 border-4 border-red-700 hover:bg-red-900 ease-in">
            Watch now
          </Link>
          <AiOutlinePlus
            size={24}
            className="rounded-full w-12 h-12 p-3 bg-gray-400 bg-opacity-70 border-4 border-gray-400 cursor-pointer text-white"
          />
        </div>
      </div>
    </SwiperSlide>
  ))

  return (
    <div className="w-[60vw]">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-bold text-2xl font-Catamaran">Popular Movies</h2>
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
          {PopularMovies}
        </Swiper>
      </div>
    </div>
  )
}

export default Discover
