import { Link } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { BiHelpCircle, BiCameraMovie } from 'react-icons/bi'
import { MenuLinks, LibraryLinks } from '../assets/constant'

function Sidebar() {
  const Menu = MenuLinks.map((link) => (
    <li className="flex items-center gap-4 mt-3 p-2 cursor-pointer rounded-lg hover:bg-gray-400 font-openSans">
      <link.icon size={30} />
      <Link to={link.to}>{link.name}</Link>
    </li>
  ))
  const Library = LibraryLinks.map((link) => (
    <li className="flex items-center gap-4 mt-3 p-2 cursor-pointer rounded-lg hover:bg-gray-400 font-openSans">
      <link.icon size={30} />
      <Link to={link.to}>{link.name}</Link>
    </li>
  ))
  return (
    <div className="px-4 w-[15vw] h-full border-r">
      <ul className="my-6 flex items-end gap-1 pl-2">
        <BiCameraMovie size={40} />
        <li className="text-black text-4xl tracking-wider font-bold font-Anton pl-2">MOVEUP</li>
      </ul>
      <ul className="mt-8 after:border after:w-full after:h-[2px] after:block after:mt-8">
        <li className="text-black text-2xl font-bold font-Catamaran pl-2">Menu</li>
        {Menu}
      </ul>
      <ul className="mt-8 after:border after:w-full after:h-[2px] after:block after:mt-8">
        <li className="text-black text-2xl font-bold font-Catamaran pl-2">Library</li>
        {Library}
      </ul>
      <ul className="mt-8">
        <li className="flex items-center gap-4 mt-4 p-2 cursor-pointer rounded-lg hover:bg-gray-400 font-openSans">
          <FiSettings size={30} />
          <Link to="/settings">Settings</Link>
        </li>
        <li className="flex items-center gap-4 mt-4 p-2 cursor-pointer rounded-lg hover:bg-gray-400 font-openSans">
          <BiHelpCircle size={30} />
          <Link to="/help">Help</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
