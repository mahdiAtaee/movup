/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import { FaPlay, FaBookmark } from 'react-icons/fa'
import { RiPlayListAddFill } from 'react-icons/ri'
import { MdFavorite, MdStarRate } from 'react-icons/md'
import { CircularProgressBar } from '@tomickigrzegorz/react-circular-progress-bar'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addMovieToPlayList, getWatchList } from '../../services/FetchData'

function MovieDetail({ movie }) {
  const { id: movieID } = useParams()
  const dispatch = useDispatch()
  const accountDetail = useSelector((state) => state?.accountSlice)
  const genres = movie?.genres?.map((genre) => (
    <span
      className="border-2 border-white text-white p-2 rounded-full mr-1 cursor-pointer"
      key={genre.key}>
      {genre?.name}
    </span>
  ))

  const handleAddMovieToPlayList = async () => {
    const accountID = accountDetail?.account_id
    const sessionID = accountDetail?.session?.session_id
    const result = await addMovieToPlayList(accountID, sessionID, Number(354956))
    console.log(result)
  }

  const MOVIE_RUN_TIME = (Number(movie?.runtime) / 60).toFixed(2).toString().split('.')
  return (
    <div className="relative h-screen bg-black after:w-screen after:h-4/5 after:absolute after:z-20 after:bottom-0 after:bg-gradient-to-t after:from-black after:via-transparent after:block before:w-screen before:h-4/5 before:absolute before:z-20 before:top-0 before:bg-gradient-to-b before:from-black before:via-transparent before:block">
      <img
        src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`}
        alt={movie?.original_title}
        className="w-screen h-screen object-cover"
      />
      <div className="w-[70vw] absolute z-30 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 flex">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            alt={movie?.original_title}
            className="w-[300px] rounded-lg"
          />
        </div>
        <div className="w-[700px] pl-4">
          <h1 className="font-bold text-6xl text-white mb-4 font-Anton">
            {movie?.title}
            <span className="font-bold text-3xl text-white mb-4 font-Anton">
              {movie?.release_date.split('-')[0]}
            </span>
          </h1>
          <p className="text-3xl text-white my-4 font-Anton">{movie?.tagline}</p>
          <div className="inline-block my-4">{genres}</div>
          <p className="text-xl text-white font-primary my-4">
            Running Time: {`${MOVIE_RUN_TIME[0]}h ${MOVIE_RUN_TIME[1]}min`}
          </p>
          <div className="flex items-center gap-4 my-4">
            <a
              href="/"
              className="text-black flex items-center justify-center text-xl cursor-pointer  w-12 h-12 border-1 border-black bg-gray-200 rounded-full">
              <FaPlay />
            </a>
            <span
              className="text-black flex items-center justify-center text-xl cursor-pointer  w-12 h-12 border-1 border-black bg-gray-200 rounded-full"
              onClick={() => handleAddMovieToPlayList()}>
              <RiPlayListAddFill />
            </span>
            <span
              className="text-black flex items-center justify-center text-xl cursor-pointer  w-12 h-12 border-1 border-black bg-gray-200 rounded-full"
              onClick={() => {
                const accountID = accountDetail?.account_id
                const sessionID = accountDetail?.session?.session_id
                getWatchList(accountID, sessionID)
              }}>
              <MdFavorite />
            </span>
            <span className="text-black flex items-yarn devcenter justify-center text-xl cursor-pointer  w-12 h-12 border-1 border-black bg-gray-200 rounded-full">
              <FaBookmark />
            </span>
            <span className="text-black flex items-center justify-center text-xl cursor-pointer  w-12 h-12 border-1 border-black bg-gray-200 rounded-full">
              <MdStarRate />
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-full w-[130px] h-[130px] border-2 border-white relative cursor-pointer bg-black flex items-center justify-center">
              <CircularProgressBar
                colorSlice="#66d070"
                fill="#252236"
                percent={parseInt(movie?.vote_average, 10) * 10}
                size={130}
                fontColor="#ffffff"
                stroke={6}
                unit=" "
                round
                number={false}
                fontWeight={700}>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl font-primary">
                  {movie?.vote_average}
                </span>
              </CircularProgressBar>
              <span className="absolute top-full left-1/2 -translate-x-1/2 text-white font-bold text-l text-center mt-2 font-primary">
                Vote Average
              </span>
            </div>
            <div className="rounded-full w-[130px] h-[130px] border-2 border-white relative cursor-pointer bg-black flex items-center justify-center">
              <CircularProgressBar
                colorSlice="#66d070"
                fill="#252236"
                percent={100}
                size={130}
                fontColor="#ffffff"
                stroke={6}
                unit=" "
                round
                number={false}
                fontWeight={700}>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl font-primary">
                  {movie?.vote_count}
                </span>
              </CircularProgressBar>
              <span className="absolute top-full left-1/2 -translate-x-1/2 text-white font-bold text-l text-center mt-2 font-primary">
                Vote Count
              </span>
            </div>
            <div className="rounded-full w-[130px] h-[130px] border-2 border-white relative cursor-pointer bg-black flex items-center justify-center">
              <CircularProgressBar
                colorSlice="#66d070"
                fill="#252236"
                percent={100}
                size={130}
                fontColor="#ffffff"
                stroke={6}
                unit=" "
                round
                number={false}
                fontWeight={700}>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl font-primary">
                  {parseInt(movie?.popularity, 10)}
                </span>
              </CircularProgressBar>
              <span className="absolute top-full left-1/2 -translate-x-1/2 text-white font-bold text-l text-center mt-2 font-primary">
                Popularity
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-screen h-screen bg-black opacity-30" />
    </div>
  )
}

export default MovieDetail
