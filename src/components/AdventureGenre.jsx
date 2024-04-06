/* eslint-disable import/no-unresolved */
import { useState, useEffect, useLayoutEffect } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { AiOutlinePlus, AiFillStar } from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { getDiscoverMovies } from '../services/FetchData'
import 'swiper/css'
import 'swiper/css/free-mode'
import PIC from '../assets/digital.jpg'

const options = {
  with_genres: 12, // war Genre
  'vote_average.gte': 7,
}

function AdventureGenre() {
  const [movies, setMovies] = useState(null)
  const [imgSrc, setImgSrc] = useState(null)

  useEffect(() => {
    const res = getDiscoverMovies(options).then(({ data }) => setMovies(data))
  }, [])

  useLayoutEffect(() => {
    const firstMovie = movies?.results && movies?.results[0]
    setImgSrc(firstMovie?.backdrop_path)
    console.log(imgSrc)
  }, [movies])

  const handleChangeBackImg = (movie) => {
    setImgSrc(movie?.backdrop_path)
  }

  const Movies = movies?.results?.slice(0, 5).map((movie) => (
    <SwiperSlide
      key={movie.id}
      className="my-4 rounded-xl shadow-md relative"
      onMouseEnter={() => handleChangeBackImg(movie)}
      style={{ width: '400px', height: '300px' }}>
      <div className="w-[400px] h-[300px] relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt={movie.title}
          className="w-full h-full rounded-xl object-cover"
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
    <div className="my-8 w-full h-[70vh] px-4 relative flex items-end">
      <img
        src={imgSrc ? `https://image.tmdb.org/t/p/w1280${imgSrc}` : PIC}
        alt=""
        className="absolute top-0 left-0 h-full object-cover w-full object-center"
      />
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

export default AdventureGenre
