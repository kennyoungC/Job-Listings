import React, { useEffect, useState } from "react"
import { getJobAction } from "../redux/actions"
import JobsItems from "./JobsItems"
import { connect } from "react-redux"
import Pagination from "./Pagination"

const mapsStateToProps = (state) => ({
  jobs: state.jobList.jobs,
  loading: state.jobList.loading,
  isError: state.jobList.isError,
  errorMsg: state.jobList.errorMsg,
})
const mapDispatchToProps = (dispatch) => ({
  getListOfJobs: (url) => {
    dispatch(getJobAction(url))
  },
})
const Jobs = ({
  query,
  category,
  getListOfJobs,
  jobs,
  loading,
  isError,
  errorMsg,
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  useEffect(() => {
    let url
    if (query === "" || query === undefined || query.length < 2) {
      url = "https://strive-jobs-api.herokuapp.com/jobs?limit=50&skip=10"
    }
    if (query.length > 2 && query !== "") {
      url = `https://strive-jobs-api.herokuapp.com/jobs?search=${query}&limit=50`
    }
    if (category !== "" && category !== undefined) {
      url = `https://strive-jobs-api.herokuapp.com/jobs?category=${category}&limit=50`
    }

    getListOfJobs(url)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, category])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = jobs.slice(indexOfFirstPost, indexOfLastPost)

  const paginateFront = () => setCurrentPage(currentPage + 1)
  const paginateBack = () => setCurrentPage(currentPage - 1)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <>
      {!loading && (
        <div className="container mx-auto px-12">
          <ul>
            {currentPosts.map((job) => (
              <JobsItems jobs={job} key={job._id} />
            ))}
          </ul>
          <div className="text-center mb-12">
            <Pagination
              paginate={paginate}
              postsPerPage={postsPerPage}
              totalPosts={jobs.length}
              paginateBack={paginateBack}
              paginateFront={paginateFront}
              currentPage={currentPage}
            />
          </div>
        </div>
      )}
      {loading && (
        <div className="container mx-auto px-12 flex items-center justify-center">
          <svg class="animate-spin h-12 w-12 mr-3 ..." viewBox="0 0 24 24">
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="8"
            ></circle>
          </svg>
        </div>
      )}
      {/* {isError && !loading && (
        <div className="container mx-auto text-center text-2xl bg-lime-300 rounded-sm px-12">
          {/* {errorMsg} *
          Could not find jobs. Please try again later.
        </div>
      )} */}
    </>
  )
}

export default connect(mapsStateToProps, mapDispatchToProps)(Jobs)
