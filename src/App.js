import React, { useState, useEffect } from "react"
import { NewMessageForm } from "components/NewMessageForm"
import { PostedMessage } from "components/PostedMessage"
import { Wrapper, Header } from "Styling"

export const App = () => {
  const [postedMessages, setPostedMessages] = useState([])
  const [newPostedMessage, setNewPostedMessage] = useState("")

  useEffect(() => {
    fetch('http://localhost:8080', { method: 'GET' })
      .then(res => res.json())
      .then(json => setPostedMessages(json))
  }, [newPostedMessage])

  const handleFormSubmit = (message) => {
    fetch('http://localhost:8080', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => setNewPostedMessage(message))
      .catch(err => {
        throw err;
      })
  }

  return (
    <Wrapper>
      <Header>Guestbook</Header>
      <NewMessageForm onFormSubmit={handleFormSubmit} />
      {postedMessages[0] && (
        postedMessages.map((message) => (
          <>
            <PostedMessage
              key={message._id}
              _id={message._id}
              message={message.message}
              createdAt={message.createdAt}
            />
          </>
        ))
      )}
    </Wrapper>
  )
}
