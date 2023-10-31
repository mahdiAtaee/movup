import { Link } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { BiHelpCircle, BiCameraMovie } from 'react-icons/bi'
import { MenuLinks, LibraryLinks } from '../assets/constant'

function Sidebar() {
  const Menu = MenuLinks.map((link) => (
    <li
      className="flex items-center gap-4 mt-3 p-2 cursor-pointer rounded-lg group font-openSans"
      key={link.to}>
      <link.icon size={30} className="group-hover:text-[#ff5c00]" />
      <Link to={link.to} className="group-hover:text-[#ff5c00] group-hover:font-bold">
        {link.name}
      </Link>
    </li>
  ))
  const Library = LibraryLinks.map((link) => (
    <li
      className="flex items-center gap-4 mt-3 p-2 cursor-pointer rounded-lg group font-openSans"
      key={link.to}>
      <link.icon size={30} className="group-hover:text-[#ff5c00]" />
      <Link to={link.to} className="group-hover:text-[#ff5c00] group-hover:font-bold">
        {link.name}
      </Link>
    </li>
  ))

  return (
    <div className="px-4 w-[15vw] h-full border-r mr-4">
      <ul className="flex items-center gap-1 pl-2 h-[100px]">
        <BiCameraMovie size={40} />
        <li className="text-black text-4xl tracking-wider font-bold font-Anton pl-2">MOVEUP</li>
      </ul>
      <ul className="mt-4 after:border after:w-full after:h-[2px] after:block after:mt-8">
        <li className="text-black text-2xl font-bold font-Catamaran pl-2">Menu</li>
        {Menu}
      </ul>
      <ul className="mt-8 after:border after:w-full after:h-[2px] after:block after:mt-8">
        <li className="text-black text-2xl font-bold font-Catamaran pl-2">Library</li>
        {Library}
      </ul>
      <ul className="mt-8">
        <li className="flex items-center gap-4 mt-4 p-2 cursor-pointer rounded-lg group font-openSans">
          <FiSettings size={30} className="group-hover:text-[#ff5c00]" />
          <Link to="/settings" className="group-hover:text-[#ff5c00] group-hover:font-bold">
            Settings
          </Link>
        </li>
        <li className="flex items-center gap-4 mt-4 p-2 cursor-pointer rounded-lg group font-openSans">
          <BiHelpCircle size={30} className="group-hover:text-[#ff5c00]" />
          <Link to="/help" className="group-hover:text-[#ff5c00] group-hover:font-bold">
            Help
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
