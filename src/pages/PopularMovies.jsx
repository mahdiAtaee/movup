import { useState } from 'react'
import MoviesCard from '../components/MoviesCard'
import PaginatedItems from '../components/Pagination'
import { useGetPopularMoviesQuery } from '../redux/services/ApiCall'
import { Loading } from '../components'

function PopularMovies() {
  const [currentPage, setCurrentPage] = useState(1)
  const { data: movies, isFetching } = useGetPopularMoviesQuery(Number(currentPage))
  const Movies = movies?.results?.map((movie) => <MoviesCard key={movie?.id} movie={movie} />)

  const handleNextPageClick = (e, Page, totalPages) => {
    if (Page <= totalPages) {
      setCurrentPage((beforePage) => beforePage + 1)
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
        <div className="grid grid-cols-3 gap-4 rounded-full cursor-pointer">{Movies}</div>
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

export default PopularMovies
