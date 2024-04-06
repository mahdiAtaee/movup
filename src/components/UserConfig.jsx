import { Link, useNavigate, redirect } from 'react-router-dom'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetMovieGenresQuery } from '../redux/services/ApiCall'
import Avatar from '../assets/avatar2.jpg'
import SearchMovies from './SearchMovies'
import Filter from './PopularMovies/Filter'
import { ADD_GENRE_VALUE, DELETE_GENRE_VALUE } from '../redux/FilterSlice'
import { getAccountDetails } from '../services/FetchData'

function UserConfig() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [accountDetail, setAccountDetail] = useState()
  const { rightSideStatus } = useSelector((state) => state.themeSlice)
  const [genresSelect, setGenresSelect] = useState([])
  const { data } = useGetMovieGenresQuery()
  const sessionID = sessionStorage.getItem('session')
  const result = getAccountDetails(sessionID).then((aid) => setAccountDetail(aid.data))

  const handleClickGenre = (genre) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    setGenresSelect((oldarray) => {
      const index = genresSelect.indexOf(genre.name)
      if (index === -1) {
        dispatch({ type: ADD_GENRE_VALUE, payload: genre.id })
        return [...oldarray, genre.name]
      }
      dispatch({ type: DELETE_GENRE_VALUE, payload: genre.id })
      return oldarray.filter((item) => item !== genre.name)
    })

  const genres = data?.genres?.map((genre) => (
    <li
      className={`flex items-center justify-between gap-4 mt-3 py-4 px-6 cursor-pointer font-openSans w-fit h-12 rounded-full hover:bg-red-300 ${
        genresSelect.includes(genre.name) ? 'bg-red-600 rounded-full' : ' bg-gray-600 bg-opacity-5 '
      }`}
      key={genre.id}>
      {genresSelect.includes(genre.name) ? (
        <TiTick color="white" />
      ) : (
        <AiOutlinePlus fontWeight={800} />
      )}
      <Link
        to={genre.id}
        onClick={() => handleClickGenre(genre)}
        className={genresSelect.includes(genre.name) ? 'text-white font-bold' : 'font-bold'}>
        {genre.name}
      </Link>
    </li>
  ))

  const handleSearch = () => {
    navigate('/AdvancedSearch')
  }

  return (
    <div
      className={`transition-all duration-400 overflow-auto bg-white fixed right-0 z-50 ${
        rightSideStatus ? 'p-4 w-[24vw] ml-4 border-l h-[100vh]' : 'fixed left-full'
      }`}
      dir="rtl">
      <div className="h-[100px] flex items-center justify-around cursor-pointer gap-2 w-full">
        <MdKeyboardArrowDown size={24} />
        <div>
          <span className="text-base block text-left">
            {accountDetail?.name === '' ? 'USER' : accountDetail?.name}
          </span>
          <span className="text-sm text-gray-500 text-left">{accountDetail?.username}</span>
        </div>
        <div>
          <img
            src={`https://secure.gravatar.com/avatar/${accountDetail?.avatar?.gravatar?.hash}.jpg`}
            alt="avatar"
            className="w-[60px] h-[60px] rounded-full border-4 border-orange-700"
          />
        </div>
      </div>
      <SearchMovies />
      <ul className="flex flex-col">
        <li className="flex items-center justify-end mt-3 p-2 group font-openSans text-xl font-bold">
          Genres
        </li>
        <ul className="flex flex-wrap gap-x-4">{genres}</ul>
      </ul>
      <Filter />
      <button
        type="button"
        onClick={() => handleSearch()}
        className="py-2 px-4 flex justify-center items-center shadow-md w-[20vw] bg-red-500 mt-4 rounded-md text-2xl font-openSans text-white">
        Search
      </button>
    </div>
  )
}

export default UserConfig
