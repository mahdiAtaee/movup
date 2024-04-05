import { Link } from 'react-router-dom'

function PersonCard({ person }) {
  return (
    <Link to={`/overview/popular-movies/${person?.id}`}>
      <div className="relative h-[400px] rounded-full">
        <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full bg-black opacity-30 rounded-lg" />
        <img
          src={`https://image.tmdb.org/t/p/w500${person?.profile_path}`}
          alt={person.name}
          className="w-full rounded-xl h-full object-cover"
        />
        <div className="absolute bottom-8 left-4">
          <span className="font-bold text-2xl font-primary block text-white">{person?.name}</span>
          <span className="text-xl text-white">{person?.known_for_department}</span>
        </div>
      </div>
    </Link>
  )
}

export default PersonCard
