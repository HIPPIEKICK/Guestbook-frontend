import React from "react"
import { SmallButton } from "Styling"

export const Remove = (props) => {
  let url = "https://guestbook-matilda-arvidsson.herokuapp.com/"
  let testUrl = "http://localhost:8080"

  const handleRemove = () => {
    console.log("här")
    fetch(`${url}messages/${props._id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", "Authorization": sessionStorage.getItem("id_token") }
    }).then(() => {
      props.onUpdatedMessage()
    })
      .catch(err => {
        throw err;
      })
  }

  return (
    <SmallButton type="button" onClick={handleRemove}>Ta bort</SmallButton>
  )
}