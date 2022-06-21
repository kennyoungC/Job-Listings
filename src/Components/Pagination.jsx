import React from "react"

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginateFront,
  paginate,
  paginateBack,
  currentPage,
}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  const isLastPage = currentPage === pageNumbers.length
  const isFirstPage = currentPage === 1

  return (
    <div className="py-2">
      {/* <div>
        <p className="text-sm text-gray-700">
          Showing
          <span className="font-medium mx-2">
            {currentPage * postsPerPage - 10}
          </span>
          to
          <span className="font-medium"> {currentPage * postsPerPage} </span>
          of
          <span className="font-medium"> {totalPosts} </span>
          results
        </p>
      </div> */}
      <div>
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <ul className="flex pl-0 rounded list-none flex-wrap">
            {!isFirstPage && (
              <li>
                <a
                  onClick={() => {
                    paginateBack()
                  }}
                  href="#"
                  className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
            )}

            <li>
              {pageNumbers.map((number, i) => (
                <a
                  key={i}
                  onClick={() => {
                    paginate(number)
                  }}
                  href="/#"
                  className={
                    currentPage === number
                      ? "bg-blue border-lime-300 text-lime-500 hover:bg-lime-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                      : "bg-white border-gray-300 text-gray-500 hover:bg-lime-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  }
                >
                  {number}
                </a>
              ))}
            </li>
            {!isLastPage && (
              <li>
                <a
                  onClick={() => {
                    paginateFront()
                  }}
                  href="/#"
                  className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  )
}
export default Pagination
