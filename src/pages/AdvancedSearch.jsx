import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MoviesCard from '../components/DiscoverMovies/MoviesCard'
import PaginatedItems from '../components/Pagination'
import { Loading } from '../components'
import Filter from '../components/PopularMovies/Filter'
import { getDiscoverMovies } from '../services/FetchData'

function AdvancedSearch() {
  const filterOption = useSelector((state) => state.FilterSlice)
  const [currentPage, setCurrentPage] = useState(1)
  const [moviesData, setMoviesData] = useState([])
  const [isFetchData, setIsFetchData] = useState(true)
  const options = {
    page: Number(currentPage),
    ...filterOption,
  }
  useEffect(() => {
    const moviesDisc = getDiscoverMovies(options)
    moviesDisc.then(({ data }) => setMoviesData(data)).finally(() => setIsFetchData(false))
  }, [filterOption, currentPage])
  const Movies = moviesData?.results?.map((movie) => <MoviesCard key={movie?.id} movie={movie} />)
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
      {isFetchData ? (
        <Loading />
      ) : (
        <div className=" w-[91vw] ml-24 mt-[120px] flex gap-4">
          <div className="grid grid-cols-3 gap-4 rounded-full cursor-pointer w-[70vw]">
            {Movies}
          </div>
          <Filter className="w-[20vw]" />
        </div>
      )}
      <PaginatedItems
        currentPage={moviesData?.page}
        totalPages={moviesData?.total_pages}
        handleNextPageClick={handleNextPageClick}
        handlePrevPageClick={handlePrevPageClick}
        handlePageClick={handlePageClick}
      />
    </>
  )
}

export default AdvancedSearch
