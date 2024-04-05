/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { BiSlideshow } from 'react-icons/bi'
import { MdOutlineMovie } from 'react-icons/md'
import { IoPeopleCircleOutline } from 'react-icons/io5'
import { FaRegBuilding } from 'react-icons/fa'

function SearchType({ handleChangeType, typeSearch }) {
  return (
    <div className="shadow-md w-[20vw] rounded-lg">
      <div className="p-4 bg-blue-500 rounded-t-xl">
        <p className="text-white font-bold font-primary text-xl">Search Type</p>
      </div>
      <div className="p-4">
        <ul>
          <li
            className={`flex items-center gap-2 p-2 my-2 hover:bg-gray-200 cursor-pointer ${
              typeSearch === 'tv' ? 'bg-gray-200' : ''
            }`}>
            <BiSlideshow size={32} />
            <a
              id=""
              className="font-Catamaran font-bold text-xl "
              data-type="tv"
              onClick={(e) => handleChangeType(e)}>
              TV Shows
            </a>
          </li>
          <li
            className={`flex items-center gap-2 p-2 my-2 hover:bg-gray-200 cursor-pointer ${
              typeSearch === 'movie' ? 'bg-gray-200' : ''
            }`}>
            <MdOutlineMovie size={32} />
            <a
              id=""
              className="font-Catamaran font-bold text-xl "
              data-type="movie"
              onClick={(e) => handleChangeType(e)}>
              Movies
            </a>
          </li>
          <li
            className={`flex items-center gap-2 p-2 my-2 hover:bg-gray-200 cursor-pointer ${
              typeSearch === 'person' ? 'bg-gray-200' : ''
            }`}>
            <IoPeopleCircleOutline size={32} />
            <a
              id=""
              className="font-Catamaran font-bold text-xl "
              data-type="person"
              onClick={(e) => handleChangeType(e)}>
              People
            </a>
          </li>
          <li
            className={`flex items-center gap-2 p-2 my-2 hover:bg-gray-200 cursor-pointer ${
              typeSearch === 'company' ? 'bg-gray-200' : ''
            }`}>
            <FaRegBuilding size={32} />
            <a
              id=""
              className="font-Catamaran font-bold text-xl"
              data-type="company"
              onClick={(e) => handleChangeType(e)}>
              Companies
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SearchType
