import React from "react"
import { Button, PostedMessageCard, Message, TimeStamp } from "Styling"

export const PostedMessage = (props) => {
  return (
    <PostedMessageCard
      key={props._id}>
      <Message>{props.message}</Message>
      <TimeStamp>{props.createdAt}</TimeStamp>
    </PostedMessageCard>
  )
}