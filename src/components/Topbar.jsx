import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsBell, BsGrid } from 'react-icons/bs'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { TopBarLinks } from '../assets/constant'
import { RIGHT_SIDE_TOGGLE } from '../redux/themeSlices'
import { Searching } from '../services/FetchData'

function Topbar() {
  const navigate = useNavigate()
  const { rightSideStatus } = useSelector((state) => state.themeSlice)
  const [sticky, setSticky] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch()
  const handleToggleUserConfig = () => {
    dispatch({ type: RIGHT_SIDE_TOGGLE })
  }

  const handleToggleSearchbar = () => {
    setOpenSearch(!openSearch)
  }

  useEffect(() => {
    const handleScroll = () => {
      const value = 500
      setSticky(window.pageYOffset >= value)
    }

    window.addEventListener('scroll', handleScroll)
  }, [])

  const TopbarLinks = TopBarLinks.map((link) => (
    <li className="flex items-center gap-4 mt-3 p-2 cursor-pointer rounded-lg group" key={link.to}>
      <Link
        to={link.to}
        className="group-hover:font-bold text-xl font-openSans cursor-pointer text-white">
        {link.name}
      </Link>
    </li>
  ))

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      Searching(searchValue)
      navigate(`/search?query=${searchValue}`)
      setOpenSearch(false)
      setSearchValue('')
    }
  }

  const handleInputValue = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <>
      <div
        className={`transition-all duration-500 flex items-center justify-between h-[100px] px-4 fixed left-[5vw] top-0 z-50 ${
          rightSideStatus ? 'w-[71vw]' : 'w-[95vw]'
        } ${sticky ? 'bg-black' : 'bg-black'}`}>
        <div className="flex items-center justify-between">{TopbarLinks}</div>
        <div className="flex items-center gap-2 cursor-pointer">
          <BiSearchAlt2 size={28} color="white" onClick={() => handleToggleSearchbar()} />
          <BsBell size={28} color="white" />
          <BsGrid size={28} color="white" onClick={() => handleToggleUserConfig()} />
        </div>
      </div>
      <div
        className={
          openSearch ? 'fixed top-0 left-0 w-screen h-screen backdrop-blur-md z-30' : 'hidden'
        }
      />
      <div
        className={
          openSearch
            ? 'fixed top-0 left-0 w-screen h-screen z-40 flex items-center justify-center'
            : 'hidden'
        }>
        <div className="relative">
          <input
            type="search"
            name="search"
            className="px-4 py-2 pl-14 w-[60vw] h-24 rounded-full outline-none text-2xl font-Anton"
            onKeyDown={(e) => handleSearch(e)}
            onChange={(e) => handleInputValue(e)}
            value={searchValue}
          />
          <BiSearchAlt2
            className="absolute top-1/3 left-4"
            size={32}
            onClick={() => handleSearch()}
          />
        </div>
      </div>
    </>
  )
}

export default Topbar
