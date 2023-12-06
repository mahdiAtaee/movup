import { useParams } from 'react-router-dom'
import { useGetMoviesDetailQuery } from '../redux/services/ApiCall'

function MovieDetail() {
  const { id } = useParams()
  console.log(id)
  const { data: movie } = useGetMoviesDetailQuery(id)
  console.log(movie)
  const genres = movie?.genres?.map((genre) => (
    <span className="border-2 border-white text-white p-2 rounded-full mr-1 cursor-pointer">
      {genre?.name}
    </span>
  ))
  return (
    <div className="h-screen bg-black after:w-screen after:h-4/5 after:absolute after:z-20 after:bottom-0 after:bg-gradient-to-t after:from-black after:via-transparent after:block before:w-screen before:h-4/5 before:absolute before:z-20 before:top-0 before:bg-gradient-to-b before:from-black before:via-transparent before:block">
      <img
        src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`}
        alt={movie?.original_title}
        className="w-screen h-screen object-cover"
      />
      <div className="absolute z-30 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 flex">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            alt={movie?.original_title}
            className="w-[300px] rounded-lg"
          />
        </div>
        <div className="w-[500px] pl-4">
          <h1 className="font-bold text-6xl text-white mb-4">{movie?.title}</h1>
          <div className="inline-block my-4">{genres}</div>
          <p className="text-xl text-white">{movie?.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
