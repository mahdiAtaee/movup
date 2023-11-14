import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import IMDB from '../assets/imdb.png'

function MoviesCard({ movie }) {
  return (
    <div className="relative h-[400px] rounded-full">
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full bg-black opacity-30" />
      <img
        src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
        alt={movie.title}
        className="w-full rounded-xl h-full object-cover"
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
  )
}

export default MoviesCard
