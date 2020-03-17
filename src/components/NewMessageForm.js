import React, { useState } from "react"
import { Form, NewMessage, Button } from "Styling"

export const NewMessageForm = ({ onFormSubmit }) => {
  const [message, setMessage] = useState("")

  const handleNewMessage = (event) => {
    event.preventDefault()
    onFormSubmit(message)
    setMessage('')
  }

  return (
    <>
      <Form>
        <label>
          <p>New Message:</p>
          <NewMessage type="text"
            placeholder="Write your message here..."
            onChange={(event) => setMessage(event.target.value)}
            value={message}
          >
          </NewMessage>
        </label>
        <Button type="submit"
          onClick={handleNewMessage}
        >Send message</Button>
      </Form>

    </>
  )
}