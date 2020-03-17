import React from "react"
import { Button } from "Styling"


export const Remove = (props) => {
  const handleRemove = () => {
    console.log("här")
    fetch(`http://localhost:8080/messages/${props._id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .catch(err => {
        throw err;
      })
  }

  return (
    <Button type="button" onClick={handleRemove}>Remove message</Button>
  )
}