/* eslint-disable import/no-unresolved */
import { MdKeyboardArrowRight } from 'react-icons/md'
import { AiOutlinePlus, AiFillStar } from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { useGetTopRatedMoviesQuery } from '../../redux/services/ApiCall'
import 'swiper/css'
import 'swiper/css/free-mode'

function TopRatedMovies() {
  const { data } = useGetTopRatedMoviesQuery({ page: 1, language: 'en-us' })
  const Movies = data?.results?.slice(0, 10).map((movie) => (
    <SwiperSlide
      key={movie.id}
      className="my-4 rounded-xl shadow-md relative"
      style={{ width: '200px', height: '300px' }}>
      <div className="w-[200px] relative">
        <img
          src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`}
          alt={movie.title}
          className="w-full rounded-xl object-cover"
        />
        <div className="absolute bottom-20 left-4 w-10/12">
          <span className="font-bold text-xl font-primary block text-white truncate text-ellipsis">
            {movie.title}
          </span>
          <span className="text-sm text-white">{movie.release_date.split('-')[0]}</span>
        </div>
        <span className="absolute top-4 left-4 flex items-center gap-1 text-white bg-gray-900 py-1 px-2 rounded-full">
          <AiFillStar color="#daa520" size={16} />
          {`${movie.vote_average.toFixed(1)}`}
        </span>
        <div className="absolute bottom-8 right-4 flex items-center gap-2">
          <Link
            to={`/overview/top-rated/${movie?.id}`}
            className="transition py-2 px-4 rounded-full text-white font-openSans text-sm bg-red-700 bg-opacity-80 border-4 border-red-800 hover:bg-red-900 ease-in">
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
    <div className="my-8 w-full">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-bold text-2xl font-Catamaran flex items-center gap-1">
          Top Rated
          <AiFillStar color="#daa520" />
        </h2>
        <Link to="/top-rated" className="flex items-center gap-2 text-gray-500">
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

export default TopRatedMovies
