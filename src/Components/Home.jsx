import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./Header"
import JobDetails from "./JobDetails"
import Jobs from "./Jobs"

const Home = () => {
  const [searchQ, setSearchQ] = useState("")
  const [category, setCategory] = useState("")

  const selectedItemHandler = (cat) => {
    setCategory(cat)
  }
  const handleSearch = (e) => {
    if (e.target.value.length > 2) {
      setCategory("")
    }
    setSearchQ(e.target.value)
  }
  const homePage = (
    <>
      <Header
        onHandleSearch={handleSearch}
        onSetCategory={selectedItemHandler}
      />
      <Jobs query={searchQ} category={category} />
    </>
  )
  return (
    <Routes>
      <Route path="/" element={homePage} />
      <Route path="/:companyname" element={<JobDetails />} />
    </Routes>
  )
}

export default Home
