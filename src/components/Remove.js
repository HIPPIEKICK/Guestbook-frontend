import React from "react"
import { SmallButton } from "Styling"

export const Remove = (props) => {
  const handleRemove = () => {
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
    <SmallButton type="button" onClick={handleRemove}>Ta bort</SmallButton>
  )
}