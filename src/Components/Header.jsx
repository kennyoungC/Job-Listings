import React, { useEffect, useState } from "react"

const Header = ({ onHandleSearch, onSetCategory }) => {
  const [category, setCategory] = useState([])
  // const [selectedItem, setSelectedItem] = useState("")

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs/categories"
      )
      if (!response.ok) {
        throw new Error("Something went wrong")
      }
      const data = await response.json()
      setCategory(data)
      // console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="w-full h-[80px] bg-gradient-to-tr from-emerald-300 to-emerald-800"></div>
      <div className="flex my-8 px-10 justify-between container mx-auto w-full items-center">
        {" "}
        <input
          onChange={onHandleSearch}
          type="text"
          placeholder="search"
          className="border-2 border-lime-400 rounded-lg px-4 py-2"
        />
        <div className="dropdown inline-block relative ">
          <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded  inline-flex items-center">
            <span className="mr-1">Filter By Category</span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
            </svg>
          </button>
          <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
            {category.map((item, i) => (
              <li
                className=""
                key={i}
                as="button"
                onClick={() => onSetCategory(item)}
              >
                <a
                  className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
