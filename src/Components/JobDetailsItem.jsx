import React from "react"
import moment from "moment"
const JobDetailsItem = ({ detail }) => {
  const date = moment(detail.publication_date).format("MMM Do YY")

  return (
    <div className="container mx-auto px-12 my-4 ">
      <h1 className="text-2xl capitalize mb-2">{detail.title}</h1>
      <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-800 text-white rounded capitalize">
        {detail.job_type}
      </span>
      <div>
        <p>Category: {detail.category}</p>
      </div>
      <hr />
      <div className="flex justify-between items-center p-2">
        <p className="uppercase">
          {detail.candidate_required_location} /<span>{date}</span>
        </p>
        <button className="px-12 py-2 bg-lime-500 text-slate-100">
          <a href={detail.url}>Apply Now</a>
        </button>
      </div>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: detail.description }} />;
    </div>
  )
}

export default JobDetailsItem
