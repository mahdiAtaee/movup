/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { MdDateRange, MdStarRate } from 'react-icons/md'
import { getDiscoverMovies } from '../services/FetchData'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useGetMovieGenresQuery } from '../redux/services/ApiCall'

const options = {
  with_genres: 27, // Horror Genre
  'vote_average.gte': 7,
}

const settings = {
  dots: false,
  fade: true,
  lazyLoad: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 10000,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: true,
}

function ScreamGenre() {
  const [movies, setMovies] = useState(null)
  const { data: Genres } = useGetMovieGenresQuery()

  useEffect(() => {
    const res = getDiscoverMovies(options).then(({ data }) => setMovies(data))
  }, [])

  const renderGenres = (movie) => {
    const genres = []
    const genreIds = movie?.genre_ids
    for (let i = 0; i < genreIds.length; i++) {
      const sample = Genres?.genres?.filter((g) => g.id === genreIds[i])
      genres.push(sample && sample[0].name)
    }
    return <span>{genres.toString().split(',').join(' / ')}</span>
  }

  const MoviesEl = movies?.results?.slice(0, 20).map((movie) => (
    <div className="w-screen h-[70vh] !flex items-center relative" key={movie?.id}>
      <div className="w-1/2 relative">
        <div className="absolute top-0 left-[85%] w-96 h-full -skew-x-12 bg-white" />
        <img
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt={movie?.title}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="w-2/3 z-30">
        <div className="w-full h-full">
          <p className="font-bold font-Anton text-7xl">{movie?.title}</p>
          <div className="flex gap-2">
            <span className="flex items-center justify-center gap-1">
              <MdDateRange size={24} />
              <span className="font-primary text-xl">{movie?.release_date?.split('-')[0]}</span>
            </span>
            <span className="flex items-center justify-center gap-1">
              <MdStarRate size={24} />
              <span className="font-primary text-xl">{movie?.vote_average}</span>
            </span>
          </div>
        </div>
        <div className="my-4 pr-4">
          <p className="font-primary text-2xl">{movie?.overview}</p>
        </div>
        <p>{renderGenres(movie)}</p>
      </div>
    </div>
  ))

  return (
    <div className="slider-container">
      <Slider {...settings}>{MoviesEl}</Slider>
    </div>
  )
}

export default ScreamGenre
