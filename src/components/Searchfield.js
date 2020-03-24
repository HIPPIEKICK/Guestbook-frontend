import React, { useState } from "react";
// import { SearchLine } from "./Styling"
import { Button, SearchForm, Input, SearchButton } from "Styling"


export const SearchField = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    if (searchTerm.length >= 0) {
      props.onSearch(searchTerm)
      setSearchTerm("")
    }
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
        disabled={false}
        placeholder="Sök"
        type="search"
      />
      <SearchButton type="submit">🔍</SearchButton>
    </SearchForm>
  )
}
