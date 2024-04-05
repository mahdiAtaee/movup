import { useState } from 'react'
import { Link } from 'react-router-dom'
import MoviesCard from '../components/DiscoverMovies/MoviesCard'
import PaginatedItems from '../components/Pagination'
import { getWatchList } from '../services/FetchData'
import DIGITAL from '../assets/stage2.jpg'

function Watchlist() {
  const sessionID = sessionStorage.getItem('session')
  const accountID = sessionStorage.getItem('account_id')
  const [currentPage, setCurrentPage] = useState(1)
  const [watchlistMovies, setWatchlistMovies] = useState(null)
  const watchlist = getWatchList(accountID, sessionID).then(({ data }) => setWatchlistMovies(data))
  const Movies = watchlistMovies?.results?.map((movie) => (
    <MoviesCard key={movie?.id} movie={movie} />
  ))
  const handleNextPageClick = (e, Page, totalPages) => {
    if (Page <= totalPages) {
      setCurrentPage(currentPage + 1)
    } else {
      e.preventDefault()
    }
  }

  const handlePrevPageClick = (e, Page) => {
    if (Page > 1) {
      setCurrentPage((beforePage) => beforePage - 1)
    } else {
      e.preventDefault()
    }
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div>
      {Movies ? (
        <>
          <div className=" w-[91vw] ml-24 mt-[120px] flex gap-4">
            <div className="grid grid-cols-3 gap-4 rounded-full cursor-pointer w-full">
              {Movies}
            </div>
          </div>
          <PaginatedItems
            currentPage={watchlistMovies?.page}
            totalPages={watchlistMovies?.total_pages}
            handleNextPageClick={handleNextPageClick}
            handlePrevPageClick={handlePrevPageClick}
            handlePageClick={handlePageClick}
          />
        </>
      ) : (
        <>
          <div className="fixed top-0 h-screen w-screen">
            <img src={DIGITAL} alt="digital" className="w-full h-full object-cover" />
          </div>
          {/* <div className="fixed top-0 h-screen w-screen backdrop-blur-xl z-10" /> */}
          <div className=" w-[91vw] ml-24 mt-[120px] flex gap-4 relative h-[80vh] z-20">
            <div className="w-1/3 h-80 bg-white shadow-sm shadow-yellow-50 rounded-md absolute top-1/4 left-1/3 p-8">
              <p className="text-center font-Catamaran text-2xl font-bold">
                please login or signup in your account to see your watch list movies
              </p>
              <Link
                to="/Auth/register"
                className="mt-28 text-center ml-auto border border-blue-600 h-12 rounded-md flex items-center justify-center hover:bg-blue-600 hover:border-white hover:text-white font-openSans transition duration-500">
                Login In TMDB Account
              </Link>
              <Link to="/" className="mt-2 block hover:text-blue-400">
                Home Page
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Watchlist
