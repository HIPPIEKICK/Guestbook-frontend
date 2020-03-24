import React from "react"
import { ReactComponent as Heart3 } from "../Assets/Heart3.svg"
import { LikeHeart, LikeButton, LikesWrap } from "Styling"

export const Likes = (props) => {
  let url = "https://guestbook-matilda-arvidsson.herokuapp.com/"

  const handleLike = () => {
    fetch(`${url}messages/${props._id}/like`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": sessionStorage.getItem("id_token") }
    }).then(() => {
      props.onUpdatedMessage()
    })
      .catch(err => {
        throw err;
      })
  }

  const heartButton = (hasLikes) => {
    return (
      <>
        <LikeButton
          onClick={handleLike} >
          <LikeHeart>
            {!hasLikes && (<Heart3 fill="#ecdfc8" className="beige-heart" />)}
            {hasLikes && (<Heart3 fill="#d63347" className="red-heart" />)}
          </LikeHeart>
        </LikeButton >
        {hasLikes && (<>x {props.likes}</>)}
      </>
    )
  }

  const hasLikes = props.likes > 0
  return (
    <LikesWrap>
      {heartButton(hasLikes)}
    </LikesWrap>
  )



}
