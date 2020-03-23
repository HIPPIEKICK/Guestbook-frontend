import React, { useState } from "react"
import { PostedMessageCard, TimeStamp, SmallButton, StyledEdiText, Name, Line, BottomLine, ButtonGroup, EditButtons } from "Styling"
import { Remove } from "./Remove"
import moment from "moment"
import localization from 'moment/locale/sv'
import { Likes } from "./Likes"

export const PostedMessage = (props) => {
  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState()

  let url = "https://guestbook-matilda-arvidsson.herokuapp.com/"
  let testUrl = "http://localhost:8080"

  const handleEdit = value => {
    console.log(value)
    setValue(value)
    fetch(`${url}messages/${props._id}`, {
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
      <Name>{props.name}</Name>
      <TimeStamp>{moment(props.createdAt).fromNow()}</TimeStamp>
      <Line></Line>
      <StyledEdiText
        value={props.message}
        type="textarea"
        inputProps={{ rows: 5 }}
        onSave={handleEdit}
        editing={editing}
        hideIcons={true}
        saveButtonContent="Spara"
        cancelButtonContent="Avbryt"
        editButtonContent="Edit message"
      />
      <BottomLine></BottomLine>
      <ButtonGroup>
        <Likes
          _id={props._id}
          onUpdatedMessage={props.onUpdatedMessage}
          likes={props.likes}
        />
        {(sessionStorage.getItem("googleId") === props.googleId) && (
          <EditButtons>
            <Remove
              _id={props._id}
              onUpdatedMessage={props.onUpdatedMessage}
            />
            <SmallButton onClick={() => setEditing(!editing)}>Redigera</SmallButton>
          </EditButtons>
        )}
      </ButtonGroup>
    </PostedMessageCard>
  )
}