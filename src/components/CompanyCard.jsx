import { Link } from 'react-router-dom'

function CompanyCard({ company }) {
  return (
    <Link to={`/overview/popular-movies/${company?.id}`}>
      <div className="relative h-full rounded-full">
        <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full bg-black opacity-30 rounded-lg" />
        <img
          src={`https://image.tmdb.org/t/p/w300${company?.logo_path}`}
          alt={company.name}
          className="w-full rounded-xl h-full object-contain"
        />
        <div className="absolute bottom-4 left-4">
          <span className="font-bold text-2xl font-primary block text-white">{company?.name}</span>
        </div>
      </div>
    </Link>
  )
}

export default CompanyCard
