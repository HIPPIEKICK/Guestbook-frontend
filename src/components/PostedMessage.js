import React, { useState } from "react"
import { PostedMessageCard, Message, TimeStamp } from "Styling"
import { Remove } from "./Remove"
import { Edit } from "./Edit"
import EdiText from "react-editext"

export const PostedMessage = (props) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState();

  const handleEdit = value => {
    console.log(value)
    setValue(value)
    fetch(`http://localhost:8080/messages/${props._id}`, {
      method: 'PUT',
      body: JSON.stringify({ message: value }),
      headers: { 'Content-Type': 'application/json', "Authorization": sessionStorage.getItem("id_token") }
    })
      .catch(err => {
        throw err;
      })
  }

  return (
    <PostedMessageCard
      key={props._id}>
      <EdiText
        value={props.message}
        type="text"
        onSave={handleEdit}
        editing={editing}
      />

      <TimeStamp>{props.createdAt}</TimeStamp>
      <TimeStamp>{props.name}</TimeStamp>
      <Remove
        _id={props._id} />
      <Edit
        _id={props._id} />
    </PostedMessageCard>
  )
}