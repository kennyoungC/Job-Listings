import React from "react"
import { connect } from "react-redux"
import JobsItems from "./JobsItems"
import { BsArrowLeft } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

const mapsStateToProps = (state) => ({
  fav: state.favourite.favourites,
  favLength: state.favourite.favourites.length,
})

const FavouritePage = ({ fav, favLength }) => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="w-full h-[80px] bg-gradient-to-tr from-emerald-300 to-emerald-800"></div>
      <div className="flex my-8 px-10 justify-between container mx-auto w-full items-center">
        <h1 className="text-2xl text-lime-900">My Bookmarks</h1>
        <button
          onClick={() => navigate(-1)}
          className="px-6 rounded-sm py-2 bg-lime-100 hover:bg-lime-600 hover:text-lime-50  text-lime-900 flex gap-2 items-center"
        >
          {" "}
          <BsArrowLeft /> Back
        </button>
      </div>
      {favLength > 0 ? (
        <div className="container mx-auto px-12 justify-center items-center">
          <ul>
            {fav.map((job) => (
              <JobsItems jobs={job} key={job._id} />
            ))}
          </ul>
        </div>
      ) : (
        <h1 className="container mx-auto px-12 flex justify-center items-center text-lime-900 text-2xl">
          NO BOOKMARK ADDED!!!
        </h1>
      )}
    </div>
  )
}

export default connect(mapsStateToProps)(FavouritePage)
