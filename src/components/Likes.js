import React from "react"
import Heart2 from '../Assets/Heart2.svg'
import Heart from '../Assets/Heart.svg'
import { LikeHeart, LikeButton, LikesWrap } from "Styling"

export const Likes = (props) => {

  const handleLike = () => {
    fetch(`http://localhost:8080/messages/${props._id}/like`, {
      method: 'POST',
      // body: "",
      headers: { 'Content-Type': 'application/json', "Authorization": sessionStorage.getItem("id_token") }
    })
      .catch(err => {
        throw err;
      })
  }

  return (
    <LikesWrap>
      <LikeButton
        onClick={() => handleLike()}>
        <LikeHeart src={Heart2} />
      </LikeButton>
      x {props.likes}
    </LikesWrap>
  )
}
