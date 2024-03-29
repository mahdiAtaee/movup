import { useState } from 'react'
import { useSelector } from 'react-redux'
import MoviesCard from '../components/DiscoverMovies/MoviesCard'
import PaginatedItems from '../components/Pagination'
import { useGetTopRatedMoviesQuery } from '../redux/services/ApiCall'
import { Loading } from '../components'

function TopRated() {
  const [currentPage, setCurrentPage] = useState(1)
  const { language } = useSelector((state) => state.FilterSlice)
  const { data: movies, isFetching } = useGetTopRatedMoviesQuery({
    page: Number(currentPage),
    language,
  })
  const Movies = movies?.results?.map((movie) => <MoviesCard key={movie?.id} movie={movie} />)

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
      {isFetching ? (
        <Loading />
      ) : (
        <div className=" w-[91vw] ml-24 mt-[150px] flex gap-4">
          <div className="grid grid-cols-3 gap-4 rounded-full cursor-pointer w-full">{Movies}</div>
        </div>
      )}
      <PaginatedItems
        currentPage={movies?.page}
        totalPages={movies?.total_pages}
        handleNextPageClick={handleNextPageClick}
        handlePrevPageClick={handlePrevPageClick}
        handlePageClick={handlePageClick}
      />
    </>
  )
}

export default TopRated
