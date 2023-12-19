import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

function SectionTitle({ title, hasAllPage = true }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <h2 className="font-bold text-2xl font-Catamaran">{title}</h2>
      {hasAllPage && (
        <Link to="/popular-movies" className="flex items-center gap-2 text-gray-500">
          See All
          <MdKeyboardArrowRight size={24} />
        </Link>
      )}
    </div>
  )
}

export default SectionTitle
