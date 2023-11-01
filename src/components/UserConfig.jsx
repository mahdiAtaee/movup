import { Link } from 'react-router-dom'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useGetMovieGenresQuery } from '../redux/services/ApiCall'
import Avatar from '../assets/avatar2.jpg'

function UserConfig() {
  const { data } = useGetMovieGenresQuery()
  const genres = data?.genres?.map((genre) => (
    <li
      className="flex items-center justify-end mt-3 p-2 cursor-pointer group font-openSans"
      key={genre.id}>
      <Link to={genre.id} className="group-hover:text-[#ff5c00] group-hover:font-bold text-base">
        {genre.name}
      </Link>
    </li>
  ))
  return (
    <div className="p-4 overflow-auto ml-4 w-[23vw] border-l" dir="rtl">
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
      <ul>
        <li className="flex items-center justify-end mt-3 p-2 group font-openSans text-xl font-bold">
          Genres
        </li>
        {genres}
      </ul>
    </div>
  )
}

export default UserConfig
