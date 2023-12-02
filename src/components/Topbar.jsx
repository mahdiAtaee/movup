import { Link } from 'react-router-dom'
import { BsBell, BsGrid } from 'react-icons/bs'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { TopBarLinks } from '../assets/constant'
import { RIGHT_SIDE_TOGGLE } from '../redux/themeSlices'

function Topbar() {
  const dispatch = useDispatch()
  const handleToggleUserConfig = () => {
    dispatch({ type: RIGHT_SIDE_TOGGLE })
  }
  const TopbarLinks = TopBarLinks.map((link) => (
    <li className="flex items-center gap-4 mt-3 p-2 cursor-pointer rounded-lg group" key={link.to}>
      <Link
        to={link.to}
        className="group-hover:text-[#222222] group-hover:font-bold text-xl font-openSans cursor-pointer">
        {link.name}
      </Link>
    </li>
  ))
  return (
    <div className="flex items-center justify-between w-[60vw] h-[100px]">
      <div className="flex items-center justify-between">{TopbarLinks}</div>
      <div className="flex items-center gap-2 cursor-pointer">
        <BiSearchAlt2 size={28} />
        <BsBell size={28} />
        <BsGrid size={28} onClick={() => handleToggleUserConfig()} />
      </div>
    </div>
  )
}

export default Topbar
