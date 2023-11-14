import { RiFilter3Fill } from 'react-icons/ri'
import { IoIosSearch } from 'react-icons/io'

function SearchMovies() {
  return (
    <div className="relative w-full p-4 h-12">
      <RiFilter3Fill
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
        color="black"
        size={24}
      />
      <input
        type="search"
        placeholder="Search Movies"
        dir="ltr"
        className="absolute top-0 left-0 right-0 bottom-0 border-none rounded-full shadow-sm outline-none px-12"
      />
      <IoIosSearch className="absolute left-4 top-1/2 -translate-y-1/2" size={24} />
    </div>
  )
}

export default SearchMovies
