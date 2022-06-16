import React from "react"
import moment from "moment"
import { Link } from "react-router-dom"
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs"
import { connect } from "react-redux"
import { addFavActions, removeFavActions } from "../redux/actions"

const mapsStateToProps = (state) => ({
  fav: state.favourite.favourites,
})

const mapDispatchToProps = (dispatch) => ({
  addFavourite: (payload) => dispatch(addFavActions(payload)),
  removeFavorite: (id) => dispatch(removeFavActions(id)),
})

const JobsItems = ({ fav, jobs, addFavourite, removeFavorite }) => {
  const id = jobs._id

  let isFav = false
  fav.forEach((element) => {
    if (element._id === id) {
      isFav = true
    }
  })

  // const isFavvvvv = fav.includes(jobs.company_name)
  // console.log(isFavvvvv)

  const ago = moment(jobs.publication_date).fromNow()
  const firstLetter = jobs.company_name.slice(0, 1)

  return (
    <li className=" shadow-xl flex  justify-between items-center p-4 my-6 border-l-4 border-lime-500">
      <div className="flex flex-wrap justify-between items-center gap-5">
        <div>
          <div className="h-16 w-16 rounded-full  bg-lime-100 relative brightness-50 mix-blend-overlay grid items-center justify-center">
            <p className="text-3xl text-lime-900 uppercase">{firstLetter}</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <Link to={`/${jobs.company_name}`}>
            {" "}
            <p className="text-lg text-lime-900">{jobs.company_name}</p>
          </Link>
          <div className="flex items-center gap-4">
            {" "}
            <p className="font-bold">{jobs.title}</p>
            {!isFav && (
              <button className="group" onClick={() => addFavourite(jobs)}>
                <BsBookmark size={16} />
                <span className='tooltip-text bg-lime-200 p-3 -mt-16 -ml-12 rounded hidden group-hover:block absolute text-center py-2 px-6 z-50"'>
                  Add To Bookmark
                </span>
              </button>
            )}
            {isFav && (
              <button className="group" onClick={() => removeFavorite(id)}>
                <BsFillBookmarkFill size={16} />
                <span className='tooltip-text bg-lime-200 p-3 -mt-16 -ml-12 rounded hidden group-hover:block absolute text-center py-2 px-6 z-50"'>
                  Bookmarked
                </span>
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
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

export default connect(mapsStateToProps, mapDispatchToProps)(JobsItems)
