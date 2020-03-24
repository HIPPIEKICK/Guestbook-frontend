import React from "react"
import { ReactComponent as Heart2 } from "../Assets/Heart2.svg"
import { ReactComponent as Heart3 } from "../Assets/Heart3.svg"
import { LikeHeart, LikeButton, LikesWrap } from "Styling"

export const Likes = (props) => {
  let url = "https://guestbook-matilda-arvidsson.herokuapp.com/"
  let testUrl = "http://localhost:8080/"

  const handleLike = () => {
    fetch(`${testUrl}messages/${props._id}/like`, {
      method: "POST",
      // body: "",
      headers: { "Content-Type": "application/json", "Authorization": sessionStorage.getItem("id_token") }
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
          <LikeHeart>
            <Heart3 fill="#ecdfc8" className="beige-heart" />
          </LikeHeart>
        </LikeButton>
      )}
      {props.likes > 0 && (
        <>
          <LikeButton
            onClick={handleLike}>
            <LikeHeart>
              <Heart3 fill="#d63347" className="red-heart" />
            </LikeHeart>
          </LikeButton>
          x {props.likes}
        </>
      )}

    </LikesWrap>
  )
}
