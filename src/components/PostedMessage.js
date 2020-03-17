import React from "react"

export const PostedMessage = (props) => {
  return (
    <div
      key={props._id}>
      <p>{props.message}</p>
      <div>
        <p>{props.createdAt}</p>
      </div>
    </div>
  )
}