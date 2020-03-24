import React, { useState } from "react"
import { Form, NewMessage, Button, Label } from "Styling"

export const NewMessageForm = ({ onFormSubmit }) => {
  const [message, setMessage] = useState("")

  const handleNewMessage = (event) => {
    event.preventDefault()
    onFormSubmit(message)
    setMessage("")
  }

  return (
    <Form>
      <Label>
        <NewMessage type="text"
          placeholder="Skriv ditt inlägg här..."
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        >
        </NewMessage>
      </Label>
      <Button type="submit"
        onClick={handleNewMessage}
      >Skicka inlägg</Button>
    </Form>
  )
}