import React, { useState, useEffect } from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { NewMessageForm } from "components/NewMessageForm"
import { PostedMessage } from "components/PostedMessage"
import { Wrapper, Header } from "Styling"
import GoogleLogin from 'react-google-login'
import { GoogleLogout } from 'react-google-login';
import FacebookLogin from 'react-facebook-login'
import { PostData } from "./PostData"

export const Login = () => {
  // const [postedMessages, setPostedMessages] = useState([])
  // const [newPostedMessage, setNewPostedMessage] = useState("")
  const [facebookResponse, setFacebookResponse] = useState()
  const [googleResponse, setGoogleResponse] = useState()
  const [redirect, setRedirect] = useState(false)
  const [name, setName] = useState("")

  // useEffect(() => {
  //   fetch('http://localhost:8080', { method: 'GET' })
  //     .then(res => res.json())
  //     .then(json => setPostedMessages(json))
  // }, [newPostedMessage])

  // const handleFormSubmit = (message) => {
  //   fetch('http://localhost:8080', {
  //     method: 'POST',
  //     body: JSON.stringify({ message: message, name }),
  //     headers: { 'Content-Type': 'application/json' }
  //   })
  //     .then(() => setNewPostedMessage(message))
  //     .catch(err => {
  //       throw err
  //     })
  //   console.log("Efter fetch")
  // }



  const handleLogin = (res, type) => {
    console.log(res, type)

    let postData

    if (type === "facebook" && res.name) {
      setName(res.name)
      postData = {
        name: res.name,
        provider: type,
        email: res.email,
        provider_id: res.id,
        token: res.accessToken,
        provider_pic: res.picture.data.url
      }
      console.log(postData)

      sessionStorage.setItem("accessToken", (postData.token))
      sessionStorage.setItem("name", (postData.name))
      // sessionStorage.setItem("email", (postData.email))
      // Change this to only authorize before redirect
      // setRedirect(true)

    } if (type === "google" && res.Rt.Ad) {
      setName(res.Rt.Ad)
      postData = {
        name: res.Rt.Ad,
        provider: type,
        email: res.Rt.Au,
        provider_id: res.Ca,
        token: res.uc.access_token,
        provider_pic: res.Rt.kL,
        tokenId: res.tokenId
      }
      console.log(postData)

      // sessionStorage.setItem("accessToken", (postData.token))
      sessionStorage.setItem("name", (postData.name))
      sessionStorage.setItem("id_token", postData.tokenId)
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

  const responseFacebook = (response) => {
    setFacebookResponse(response)
    // console.log(facebookResponse)
    handleLogin(response, "facebook")
  }

  return (
    <Wrapper>
      <Header>Login</Header>

      <GoogleLogin
        clientId="367774355192-9pick8lrfghtmdmb6v12d0odm6a3qk89.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />

      <GoogleLogout
        clientId="367774355192-9pick8lrfghtmdmb6v12d0odm6a3qk89.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={logout}
      >
      </GoogleLogout>

      <FacebookLogin
        appId="532400944075111"
        autoLoad={true}
        fields="name,email,picture"
        // onClick={componentClicked}
        callback={responseFacebook} />

      {facebookResponse && (
        <>
          <p>{facebookResponse.name}</p>
          <img src={facebookResponse.picture.data.url} />
        </>
      )}
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
