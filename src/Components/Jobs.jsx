import React, { useEffect, useState } from "react"
import JobsItems from "./JobsItems"

const Jobs = ({ query, category }) => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(false)

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

    fetchJobs(url)
  }, [query, category])

  const fetchJobs = async (url) => {
    setLoading(true)
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error("Something went wrong")
      }
      const data = await response.json()
      setJobs(data.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

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
    </>
  )
}

export default Jobs
