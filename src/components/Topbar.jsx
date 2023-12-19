import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsBell, BsGrid } from 'react-icons/bs'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { TopBarLinks } from '../assets/constant'
import { RIGHT_SIDE_TOGGLE } from '../redux/themeSlices'

function Topbar() {
  const [sticky, setSticky] = useState(false)
  const dispatch = useDispatch()
  const handleToggleUserConfig = () => {
    dispatch({ type: RIGHT_SIDE_TOGGLE })
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
  return (
    <div
      className={`flex items-center justify-between w-[95vw] h-[100px] px-4 fixed left-[5vw] top-0 z-50 ${
        sticky ? 'bg-black' : 'bg-transparent'
      }`}>
      <div className="flex items-center justify-between">{TopbarLinks}</div>
      <div className="flex items-center gap-2 cursor-pointer">
        <BiSearchAlt2 size={28} color="white" />
        <BsBell size={28} color="white" />
        <BsGrid size={28} color="white" onClick={() => handleToggleUserConfig()} />
      </div>
    </div>
  )
}

export default Topbar
