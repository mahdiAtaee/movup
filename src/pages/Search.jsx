/* eslint-disable no-else-return */
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import MoviesCard from '../components/DiscoverMovies/MoviesCard'
import PaginatedItems from '../components/Pagination'
import { Loading } from '../components'
import { Searching } from '../services/FetchData'
import SearchType from '../components/SearchType'
import PersonCard from '../components/PersonCard'
import CompanyCard from '../components/CompanyCard'

function Search() {
  const [typeSearch, setTypeSearch] = useState('movie')
  const [currentPage, setCurrentPage] = useState(1)
  const [moviesData, setMoviesData] = useState([])
  const [isFetchData, setIsFetchData] = useState(true)
  const [movies, setMovies] = useState(null)
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query')

  useEffect(() => {
    Searching(query, typeSearch, currentPage)
      .then(({ data }) => setMovies(data))
      .catch((error) => setMovies(null))
    setIsFetchData(false)
  }, [query, typeSearch, currentPage])

  const Movies = movies?.results?.map((movie) => {
    if (typeSearch === 'person') {
      return <PersonCard key={movie?.id} person={movie} />
    } else if (typeSearch === 'company') {
      return <CompanyCard key={movie?.id} company={movie} />
    }
    return <MoviesCard key={movie?.id} movie={movie} />
  })

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

  const handleChangeType = (e) => {
    const { type } = e.target.dataset
    setCurrentPage(1)
    setTypeSearch(type)
  }

  return (
    <>
      {isFetchData ? (
        <Loading />
      ) : (
        <div className=" w-[91vw] ml-24 mt-[120px] flex gap-4">
          <div className="grid grid-cols-3 gap-4 rounded-full cursor-pointer w-[70vw]">
            {movies?.total_results ? (
              Movies
            ) : (
              <p className="font-Catamaran font-bold text-2xl w-full">
                There are no movies that matched your query
              </p>
            )}
          </div>
          <SearchType handleChangeType={handleChangeType} typeSearch={typeSearch} />
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

export default Search
