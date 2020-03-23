import React, { useState } from "react"
import { PostedMessageCard, Message, TimeStamp, SmallButton, StyledEdiText, Name, LikeButton, Line, BottomLine, LikeHeart, ButtonGroup, EditButtons } from "Styling"
import { Remove } from "./Remove"
import { Edit } from "./Edit"
import EdiText from "react-editext"
import moment from "moment"
import Heart from "../Assets/Heart.svg"
import { Likes } from "./Likes"

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

  // const handleLike = () => {
  //   fetch(`http://localhost:8080/messages/${props._id}/like`, {
  //     method: 'POST',
  //     // body: JSON.stringify({ message: value }),
  //     headers: { 'Content-Type': 'application/json', "Authorization": sessionStorage.getItem("id_token") }
  //   })
  //     .catch(err => {
  //       throw err;
  //     })
  // }

  console.log(props.googleId)
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
        saveButtonContent="Save"
        cancelButtonContent="Cancel"
        editButtonContent="Edit message"
      />
      <BottomLine></BottomLine>
      {/* <LikeButton><LikeHeart src={Heart} /></LikeButton>
      x {props.likes} */}
      <ButtonGroup>
        <Likes
          _id={props._id}
          onUpdatedMessage={props.onUpdatedMessage}
          likes={props.likes}
        />
        {(sessionStorage.getItem("googleId") === props.googleId) && (
          <EditButtons>
            {/* <BottomLine></BottomLine> */}
            <Remove
              _id={props._id}
              onUpdatedMessage={props.onUpdatedMessage}
            />
            {/* <Edit
            _id={props._id} /> */}
            <SmallButton onClick={() => setEditing(!editing)}>Redigera</SmallButton>
          </EditButtons>
        )}

      </ButtonGroup>
    </PostedMessageCard>
  )
}