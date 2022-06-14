import React, { useEffect, useState } from "react"
import JobsItems from "./JobsItems"

const Jobs = ({ query, category }) => {
  console.log(query, category)
  const [jobs, setJobs] = useState([])
  // const [filterState, setFilterState] = useState({
  //   query: "",
  //   category: "",
  // })

  useEffect(() => {
    // setFilterState({
    //   query: query,
    //   category: category,
    // })
    // let timer
    // if (query === "" || query === undefined) {
    //   timer = setTimeout(() => {
    //     fetchJobs()
    //   }, 1500)
    // }
    // if (query !== "") {
    //   timer = setTimeout(() => {
    //     fetchJobsFromQuerySearch()
    //   }, 1500)
    // }
    // return () => clearInterval(timer)

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
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error("Something went wrong")
      }
      const data = await response.json()
      // console.log(data.data)
      setJobs(data.data)
    } catch (error) {
      console.log(error)
    }
  }
  // const fetchJobsFromQuerySearch = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://strive-jobs-api.herokuapp.com/jobs?search=${query}&limit=10`
  //     )
  //     if (!response.ok) {
  //       throw new Error("Something went wrong")
  //     }
  //     const data = await response.json()
  //     console.log(data.data)
  //     setJobs(data.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <div className="container mx-auto px-12">
      <ul>
        {jobs.map((job) => (
          <JobsItems jobs={job} key={job._id} />
        ))}
      </ul>
    </div>
  )
}

export default Jobs
