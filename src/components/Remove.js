import React from "react"
import { SmallButton } from "Styling"

export const Remove = (props) => {
  let url = "https://guestbook-matilda-arvidsson.herokuapp.com/"

  const handleRemove = () => {
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