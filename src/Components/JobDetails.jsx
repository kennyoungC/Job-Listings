import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import JobDetailsItem from "./JobDetailsItem"

const JobDetails = () => {
  const [details, setDetails] = useState([])
  const { companyname } = useParams()

  useEffect(() => {
    fetchDetails()
  }, [])

  const fetchDetails = async () => {
    try {
      const response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?company=${companyname}`
      )
      if (!response.ok) {
        throw new Error("Something went wrong")
      }
      const { data } = await response.json()
      console.log(data)
      setDetails(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="w-full h-[120px] bg-gradient-to-tr from-emerald-300 to-emerald-800"></div>
      {details.map((item) => (
        <JobDetailsItem key={item._id} detail={item} />
      ))}
    </>
  )
}

export default JobDetails
