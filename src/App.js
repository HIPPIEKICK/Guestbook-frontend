import React, { useState, useEffect } from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { NewMessageForm } from "components/NewMessageForm"
import { PostedMessage } from "components/PostedMessage"
import { AppWrapper, Header } from "Styling"
import GoogleLogin from 'react-google-login'
import { GoogleLogout } from 'react-google-login';
import { Login } from "components/Login"
import { Guestbook } from "components/Guestbook"

export const App = () => {
  const [googleResponse, setGoogleResponse] = useState()
  // const [redirect, setRedirect] = useState(false)
  // const [name, setName] = useState("")

  return (
    <AppWrapper>
      <BrowserRouter>
        <Header>Gästbok</Header>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/guestbook" component={Guestbook} />
          {/* <Login /> */}
        </Switch>
      </BrowserRouter>
      {/* <GoogleLogin
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
    </AppWrapper>
  )
}
