import { useState } from 'react'
import MoviesCard from '../components/DiscoverMovies/MoviesCard'
import PaginatedItems from '../components/Pagination'
import { useGetPopularMoviesQuery } from '../redux/services/ApiCall'
import { Loading } from '../components'
import HeroHeader from '../components/HeroHeader'

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
        <div className=" w-[91vw] ml-24 mt-[100px] flex gap-4">
          <div>
            <HeroHeader />
          </div>
          <div className="grid grid-cols-3 gap-4 rounded-full cursor-pointer w-full">{Movies}</div>
          {/* <Filter className="w-[20vw]" /> */}
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

export default PopularMovies
