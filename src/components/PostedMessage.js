import React from "react"
import { PostedMessageCard, Message, TimeStamp } from "Styling"
import { Remove } from "./Remove"

export const PostedMessage = (props) => {

  return (
    <PostedMessageCard
      key={props._id}>
      <Message>{props.message}</Message>
      <TimeStamp>{props.createdAt}</TimeStamp>
      <TimeStamp>{props.name}</TimeStamp>
      <Remove
        _id={props._id} />
    </PostedMessageCard>
  )
}