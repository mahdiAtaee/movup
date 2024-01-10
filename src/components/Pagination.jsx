import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'

function PaginatedItem({ pageNumber, currentPage, handlePageClick }) {
  return (
    <span
      className={`min-w-12 h-12  rounded-lg p-2 cursor-pointer text-xl mx-2 text-center border-4 ${
        currentPage === pageNumber
          ? 'border-blue-500 text-blue-500 hover:bg-blue-300'
          : 'border-gray-400 hover:bg-gray-200'
      } flex items-center justify-center font-bold border-4 border-gray-400`}
      onClick={() => handlePageClick(pageNumber)}>
      {pageNumber}
    </span>
  )
}

function PaginatedItems({
  currentPage,
  totalPages,
  handleNextPageClick,
  handlePrevPageClick,
  handlePageClick,
}) {
  return (
    <div className="mt-8 flex items-center w-full justify-center mb-8">
      <MdNavigateBefore
        className={`w-12 h-12 rounded-lg p-2 ${
          currentPage === 1
            ? 'cursor-not-allowed bg-gray-400 text-white'
            : 'cursor-pointer border-4 border-gray-400'
        }  text-xl mx-2 inline-block text-center`}
        onClick={(e) => handlePrevPageClick(e, currentPage)}
      />
      <PaginatedItem currentPage={currentPage} pageNumber={1} handlePageClick={handlePageClick} />
      <PaginatedItem currentPage={currentPage} pageNumber={2} handlePageClick={handlePageClick} />
      <PaginatedItem currentPage={currentPage} pageNumber={3} handlePageClick={handlePageClick} />
      {currentPage > 3 && (
        <>
          <span className="w-12 h-12 rounded-lg p-2 cursor-pointer text-xl mx-2 text-center font-bold border-4 border-gray-400">
            ...
          </span>
          <PaginatedItem
            currentPage={currentPage}
            pageNumber={currentPage}
            handlePageClick={handlePageClick}
          />
          <PaginatedItem
            currentPage={currentPage}
            pageNumber={currentPage + 1}
            handlePageClick={handlePageClick}
          />
        </>
      )}
      <span className="w-12 h-12 rounded-lg p-2 cursor-pointer text-xl mx-2 text-center font-bold border-4 border-gray-400">
        ...
      </span>
      <PaginatedItem
        currentPage={currentPage}
        pageNumber={totalPages}
        handlePageClick={handlePageClick}
      />
      <MdNavigateNext
        className={`w-12 h-12  rounded-lg p-2 ${
          currentPage === totalPages
            ? 'cursor-not-allowed bg-gray-400 text-white'
            : 'cursor-pointer border-4 border-gray-400'
        } cursor-pointer border-4 text-xl mx-2 inline-block text-center border-gray-400`}
        onClick={(e) => handleNextPageClick(e, currentPage, totalPages)}
      />
    </div>
  )
}

export default PaginatedItems
