'use client'
import './searchbar.css'
import { useState } from "react"
import CustomInputs from "../ui/form/CustomInputs"


const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  return (
    <div className="search-bar-container">
      <span className="search-icon">🔍</span>
      <CustomInputs
        type="text"
        placeholder="Buscar producto..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBar