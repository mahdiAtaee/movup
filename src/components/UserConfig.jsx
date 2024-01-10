import { Link } from 'react-router-dom'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useGetMovieGenresQuery } from '../redux/services/ApiCall'
import Avatar from '../assets/avatar2.jpg'
import SearchMovies from './SearchMovies'
import Filter from './PopularMovies/Filter'

function UserConfig() {
  const { rightSideStatus } = useSelector((state) => state.themeSlice)
  const [genresSelect, setGenresSelect] = useState([])
  const { data } = useGetMovieGenresQuery()
  const handleClickGenre = (genre) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    setGenresSelect((oldarray) => {
      const index = genresSelect.indexOf(genre.name)
      if (index === -1) {
        return [...oldarray, genre.name]
      }
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

  return (
    <div
      className={`transition-all duration-400 overflow-auto bg-white fixed right-0 z-50 ${
        rightSideStatus ? 'p-4 w-[24vw] ml-4 border-l h-[100vh]' : 'fixed left-full'
      }`}
      dir="rtl">
      <div className="h-[100px] flex items-center justify-around cursor-pointer gap-2 w-full">
        <MdKeyboardArrowDown size={24} />
        <div>
          <span className="text-base block text-left">Mahdi ataee</span>
          <span className="text-sm text-gray-500 text-left">mahdiataee1689@gmail.com</span>
        </div>
        <div>
          <img
            src={Avatar}
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
    </div>
  )
}

export default UserConfig
