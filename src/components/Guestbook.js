import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import { NewMessageForm } from "components/NewMessageForm"
import { PostedMessage } from "components/PostedMessage"
import { Wrapper } from "Styling"

export const Guestbook = () => {
  const [postedMessages, setPostedMessages] = useState([])
  const [newPostedMessage, setNewPostedMessage] = useState("")
  const [updatedMessage, setUpdatedMessage] = useState(false)

  let name = sessionStorage.getItem("name")
  let url = "https://guestbook-matilda-arvidsson.herokuapp.com/"
  let testUrl = "http://localhost:8080"
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', "Authorization": sessionStorage.getItem("id_token") }
    })
      .then(res => res.json())
      .then(json => setPostedMessages(json))
  }, [newPostedMessage, updatedMessage])

  const handleFormSubmit = (message) => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ message, name }),
      headers: { 'Content-Type': 'application/json', "Authorization": sessionStorage.getItem("id_token") }
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

  return (
    <Wrapper>
      <NewMessageForm onFormSubmit={handleFormSubmit} />
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

    </Wrapper>
  )
}
