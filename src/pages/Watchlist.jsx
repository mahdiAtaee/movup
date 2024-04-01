import { useState } from 'react'
import { useSelector } from 'react-redux'
import MoviesCard from '../components/DiscoverMovies/MoviesCard'
import PaginatedItems from '../components/Pagination'
import { getWatchList } from '../services/FetchData'

function Watchlist() {
  const accountDetail = useSelector((state) => state?.accountSlice)
  const [currentPage, setCurrentPage] = useState(1)
  const [watchlistMovies, setWatchlistMovies] = useState(null)
  const accountID = accountDetail?.account_id
  const sessionID = accountDetail?.session?.session_id
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
    <>
      <div className=" w-[91vw] ml-24 mt-[120px] flex gap-4">
        <div className="grid grid-cols-3 gap-4 rounded-full cursor-pointer w-full">{Movies}</div>
      </div>
      <PaginatedItems
        currentPage={watchlistMovies?.page}
        totalPages={watchlistMovies?.total_pages}
        handleNextPageClick={handleNextPageClick}
        handlePrevPageClick={handlePrevPageClick}
        handlePageClick={handlePageClick}
      />
    </>
  )
}

export default Watchlist
