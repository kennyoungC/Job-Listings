import React from "react"
import moment from "moment"
import { Link } from "react-router-dom"

const JobsItems = ({ jobs }) => {
  const id = jobs._id
  const ago = moment(jobs.publication_date).fromNow()
  const firstLetter = jobs.company_name.slice(0, 1)

  return (
    <li className=" shadow-xl flex justify-between items-center p-4 my-6 border-l-4 border-lime-500">
      <div className="flex justify-between items-center gap-5">
        <div>
          <div className="h-16 w-16 rounded-full bg-lime-100 relative brightness-50 mix-blend-overlay grid items-center justify-center">
            <p className="text-3xl text-lime-900 uppercase">{firstLetter}</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <Link to={`/${jobs.company_name}`}>
            {" "}
            <p className="text-lg text-lime-900">{jobs.company_name}</p>
          </Link>
          <p className="font-bold">{jobs.title}</p>
          <div className="flex gap-2">
            <span>{ago}</span>
            {jobs.job_type === "" ? "" : <span>·</span>}
            <span>{jobs.job_type}</span>
            {jobs.candidate_required_location === "" ? "" : <span>·</span>}
            <span> {jobs.candidate_required_location}</span>
          </div>
        </div>
      </div>
      <div className="">
        <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-lime-600 text-white rounded-full">
          {jobs.category}
        </span>
      </div>
    </li>
  )
}

export default JobsItems
