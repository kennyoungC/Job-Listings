import React, { useEffect } from "react"
import { getJobAction } from "../redux/actions"
import JobsItems from "./JobsItems"
import { connect } from "react-redux"

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
  useEffect(() => {
    let url
    if (query === "" || query === undefined || query.length < 2) {
      url = "https://strive-jobs-api.herokuapp.com/jobs?limit=10&skip=10"
    }
    if (query.length > 2 && query !== "") {
      url = `https://strive-jobs-api.herokuapp.com/jobs?search=${query}&limit=10`
    }
    if (category !== "" && category !== undefined) {
      url = `https://strive-jobs-api.herokuapp.com/jobs?category=${category}&limit=10`
    }

    getListOfJobs(url)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, category])

  return (
    <>
      {!loading && (
        <div className="container mx-auto px-12">
          <ul>
            {jobs.map((job) => (
              <JobsItems jobs={job} key={job._id} />
            ))}
          </ul>
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
      {isError && (
        <div className="container mx-auto text-center text-2xl bg-lime-300 rounded-sm px-12">
          {errorMsg}
        </div>
      )}
    </>
  )
}

export default connect(mapsStateToProps, mapDispatchToProps)(Jobs)
