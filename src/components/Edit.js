import React from "react"
import { Button } from "Styling"

export const Edit = (props) => {
  const handleEdit = () => {
    console.log("här")
    fetch(`http://localhost:8080/messages/${props._id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', "Authorization": sessionStorage.getItem("id_token") }
    })
      .catch(err => {
        throw err;
      })
  }

  return (
    <Button type="button" onClick={handleEdit}>Edit message</Button>
  )
}