import React from "react"
import Heart2 from '../Assets/Heart2.svg'
import Heart3 from "../Assets/Heart3.svg"
import Heart from '../Assets/Heart.svg'
import { LikeHeart, LikeButton, LikesWrap } from "Styling"

export const Likes = (props) => {

  const handleLike = () => {
    fetch(`http://localhost:8080/messages/${props._id}/like`, {
      method: 'POST',
      // body: "",
      headers: { 'Content-Type': 'application/json', "Authorization": sessionStorage.getItem("id_token") }
    }).then(() => {
      props.onUpdatedMessage()
    })
      .catch(err => {
        throw err;
      })
  }

  return (
    <LikesWrap>
      {props.likes === 0 && (
        <LikeButton
          onClick={handleLike}>
          <LikeHeart src={Heart3} />
        </LikeButton>
      )}
      {props.likes > 0 && (
        <>
          <LikeButton
            onClick={handleLike}>
            <LikeHeart src={Heart2} />
          </LikeButton>
          x {props.likes}
        </>
      )}

    </LikesWrap>
  )
}
