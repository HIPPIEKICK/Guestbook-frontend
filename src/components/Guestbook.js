import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import { NewMessageForm } from "components/NewMessageForm"
import { PostedMessage } from "components/PostedMessage"
import { SearchField } from "components/Searchfield"
import { Wrapper, NextButton, ButtonGroup, InfoMessage } from "Styling"

export const Guestbook = () => {
  const [postedMessages, setPostedMessages] = useState([])
  const [newPostedMessage, setNewPostedMessage] = useState("")
  const [updatedMessage, setUpdatedMessage] = useState(false)
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState("")
  const [savedSearchTerm, setSavedSearchTerm] = useState("")

  let name = sessionStorage.getItem("name")
  let url = "https://guestbook-matilda-arvidsson.herokuapp.com/"

  useEffect(() => {
    fetch(`${url}messages${query}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", "Authorization": sessionStorage.getItem("id_token") }
    })
      .then(res => res.json())
      .then(json => setPostedMessages(json))
  }, [newPostedMessage, updatedMessage, query])

  const handleFormSubmit = (message) => {
    fetch(`${url}messages`, {
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
    if (searchTerm === "") {
      handleClear()
      return
    }
    const newPageNumber = 1
    setPage(newPageNumber)
    setQuery(`?search=${searchTerm}&page=${newPageNumber}`)
    setSavedSearchTerm(searchTerm)
  }

  const handlePages = () => {
    const newPageNumber = page + 1
    setPage(newPageNumber)
    { savedSearchTerm && (setQuery(`?search=${savedSearchTerm}&page=${newPageNumber}`)) }
    { !savedSearchTerm && (setQuery(`?page=${newPageNumber}`)) }
    window.scrollTo(0, 0)
  }

  const handleClear = () => {
    window.location.reload()
    setSavedSearchTerm("")
  }

  return (
    <Wrapper>
      <NewMessageForm onFormSubmit={handleFormSubmit} />
      <SearchField onSearch={handleSearch} />
      {postedMessages[0] && (
        postedMessages.map((message) => (
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
        ))
      )}

      <>
        {postedMessages.message &&
          <ButtonGroup>
            <InfoMessage>Inga inlägg att visa</InfoMessage>
            {!savedSearchTerm && <NextButton onClick={() => handleClear()}>Tillbaka</NextButton>}
          </ButtonGroup>
        }
        <ButtonGroup>
          {savedSearchTerm && <NextButton onClick={() => handleClear()}>Rensa sökfilter</NextButton>}
          {postedMessages[0] && <NextButton onClick={() => handlePages()}>Nästa</NextButton>}
        </ButtonGroup>
      </>
    </Wrapper>
  )
}
