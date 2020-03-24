import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import { NewMessageForm } from "components/NewMessageForm"
import { PostedMessage } from "components/PostedMessage"
import { SearchField } from "components/Searchfield"
import { Wrapper, NextButton, ButtonGroup } from "Styling"
import { relativeTimeRounding } from "moment"

export const Guestbook = () => {
  const [postedMessages, setPostedMessages] = useState([])
  const [newPostedMessage, setNewPostedMessage] = useState("")
  const [updatedMessage, setUpdatedMessage] = useState(false)
  // const [searchQuery, setSearchQuery] = useState("")
  const [page, setPage] = useState(1)
  // const [pageQuery, setPageQuery] = ("")
  const [query, setQuery] = useState("")
  const [savedSearchTerm, setSavedSearchTerm] = useState("")

  let name = sessionStorage.getItem("name")
  let url = "https://guestbook-matilda-arvidsson.herokuapp.com/"
  let testUrl = "http://localhost:8080"
  useEffect(() => {
    fetch(`${testUrl}/messages${query}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", "Authorization": sessionStorage.getItem("id_token") }
    })
      .then(res => res.json())
      .then(json => setPostedMessages(json))
  }, [newPostedMessage, updatedMessage, query, page])

  const handleFormSubmit = (message) => {
    fetch(`${testUrl}/messages`, {
      method: "POST",
      body: JSON.stringify({ message, name }),
      headers: { "Content-Type": "application/json", "Authorization": sessionStorage.getItem("id_token") }
    })
      .then(() => setNewPostedMessage(message))
      .catch(err => {
        throw err
      })
  }
  const id_token = sessionStorage.getItem("id_token")

  if (!id_token) {
    return (<Redirect to={"/"} />)
  }

  const onUpdatedMessage = () => {
    setUpdatedMessage(!updatedMessage)
  }

  const handleSearch = (searchTerm) => {
    if (searchTerm === '') {
      handleClear()
      return
    }
    const new_page_number = 1
    setPage(new_page_number)
    setQuery(`?search=${searchTerm}&page=${new_page_number}`)
    setSavedSearchTerm(searchTerm)
  }

  const handlePages = () => {
    const new_page_number = page + 1
    setPage(new_page_number)
    setQuery(`?search=${savedSearchTerm}&page=${new_page_number}`)
    window.scrollTo(0, 0);
  }

  const handleClear = () => {
    window.location.reload()
  }

  return (
    <Wrapper>
      <NewMessageForm onFormSubmit={handleFormSubmit} />
      <SearchField onSearch={handleSearch} />
      {postedMessages[0] && (
        postedMessages.map((message) => (
          <>
            <PostedMessage
              key={message._id}
              _id={message._id}
              message={message.message}
              name={message.name}
              googleId={message.googleId}
              createdAt={message.createdAt}
              likes={message.likes.length}
              onUpdatedMessage={onUpdatedMessage}
            />
          </>
        ))
      )}
      {savedSearchTerm && (
        <ButtonGroup>
          <NextButton onClick={() => handleClear()}>Rensa sökfilter</NextButton>
          <NextButton onClick={() => handlePages()}>Visa flera inlägg</NextButton>
        </ButtonGroup>
      )}
    </Wrapper>
  )
}
