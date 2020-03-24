import React, { useState } from "react"
import { SearchForm, Input, SearchButton } from "Styling"


export const SearchField = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = event => {
    event.preventDefault()
    if (searchTerm.length >= 0) {
      props.onSearch(searchTerm)
      setSearchTerm("")
    }
  }

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
        disabled={false}
        placeholder="Sök efter meddelanden..."
        type="search"
      />
      <SearchButton type="submit"><span role="img" aria-label="magnifyer-emoji">🔍</span></SearchButton>
    </SearchForm>
  )
}
