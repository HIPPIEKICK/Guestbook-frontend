import React, { useState } from "react"
import { PostedMessageCard, Message, TimeStamp, SmallButton, StyledEdiText, Name } from "Styling"
import { Remove } from "./Remove"
import { Edit } from "./Edit"
import EdiText from "react-editext"
import moment from "moment"

export const PostedMessage = (props) => {
  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState()

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

  console.log(props.googleId)
  return (
    <PostedMessageCard
      key={props._id}>
      <Name>{props.name}</Name>
      <TimeStamp>{moment(props.createdAt).fromNow()}</TimeStamp>
      <StyledEdiText
        value={props.message}
        type="textarea"
        inputProps={{ rows: 5 }}
        onSave={handleEdit}
        editing={editing}
        hideIcons={true}
        saveButtonContent="Save"
        cancelButtonContent="Cancel"
        editButtonContent="Edit message"
      />

      {(sessionStorage.getItem("googleId") === props.googleId) && (
        <>
          <Remove
            _id={props._id} />
          {/* <Edit
            _id={props._id} /> */}
          <SmallButton onClick={() => setEditing(!editing)}>Redigera</SmallButton>
        </>
      )}
    </PostedMessageCard>
  )
}