import React, { useState, useEffect } from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { NewMessageForm } from "components/NewMessageForm"
import { PostedMessage } from "components/PostedMessage"
import { Wrapper, Header, WelcomeBox, Image, InfoText, Footer } from "Styling"
import GoogleLogin from 'react-google-login'
import { GoogleLogout } from 'react-google-login';
// import FacebookLogin from 'react-facebook-login'
import { PostData } from "./PostData"
import TypeWriter from "../Assets/typewriter.jpg"

export const Login = () => {
  const [facebookResponse, setFacebookResponse] = useState()
  const [googleResponse, setGoogleResponse] = useState()
  const [redirect, setRedirect] = useState(false)
  const [name, setName] = useState("")

  const handleLogin = (res, type) => {
    console.log(res, type)

    let postData

    if (type === "google" && res.Rt.Ad) {
      setName(res.Rt.Ad)
      postData = {
        name: res.Rt.Ad,
        provider: type,
        email: res.Rt.Au,
        provider_id: res.Ca,
        token: res.uc.access_token,
        provider_pic: res.Rt.kL,
        tokenId: res.tokenId,
        googleId: res.googleId
      }
      console.log(postData)

      // sessionStorage.setItem("accessToken", (postData.token))
      sessionStorage.setItem("name", (postData.name))
      sessionStorage.setItem("id_token", postData.tokenId)
      sessionStorage.setItem("googleId", postData.googleId)
      setRedirect(true)
    }


  }

  if (redirect) {
    return (<Redirect to={"/guestbook"} />)
  }

  const responseGoogle = (response) => {
    setGoogleResponse(response)
    console.log(googleResponse)
    handleLogin(response, "google")
  }

  const logout = () => {

  }

  console.log(googleResponse)

  return (
    <Wrapper>


      <WelcomeBox>
        <InfoText>Logga in nedan för att läsa och skriva i gästboken. Det namn du loggar in med kommer synas på dina meddelanden.</InfoText>
        {/* <Image src={TypeWriter} /> */}

        <GoogleLogin
          clientId="367774355192-9pick8lrfghtmdmb6v12d0odm6a3qk89.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </WelcomeBox>
      <Footer>Gästbok av Matilda Arvidsson. Hjärt-emoji från Noun Project.</Footer>
      {/* <GoogleLogout
        clientId="367774355192-9pick8lrfghtmdmb6v12d0odm6a3qk89.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={logout}
      >
      </GoogleLogout> */}

      {googleResponse && (
        <>
          <p>{googleResponse.Rt.Ad}</p>
          <img src={googleResponse.Rt.kL} />
        </>
      )}
      {/* <NewMessageForm onFormSubmit={handleFormSubmit} />
      {postedMessages[0] && (
        postedMessages.map((message) => (
          <PostedMessage
            key={message._id}
            _id={message._id}
            message={message.message}
            name={message.name}
            createdAt={message.createdAt}
          />
        ))
      )} */}
    </Wrapper>
  )
}
