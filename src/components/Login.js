import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import { Wrapper, WelcomeBox, InfoText, Footer } from "Styling"
import GoogleLogin from "react-google-login"

export const Login = () => {
  const [redirect, setRedirect] = useState(false)

  const handleLogin = (res) => {
    sessionStorage.setItem("name", res.Rt.Ad)
    sessionStorage.setItem("id_token", res.tokenId)
    sessionStorage.setItem("googleId", res.googleId)
    setRedirect(true)
  }

  if (redirect) {
    return (<Redirect to={"/guestbook"} />)
  }

  return (
    <Wrapper>
      <WelcomeBox>
        <GoogleLogin
          clientId="367774355192-9pick8lrfghtmdmb6v12d0odm6a3qk89.apps.googleusercontent.com"
          buttonText="Logga in"
          onSuccess={handleLogin}
          onFailure={handleLogin}
          cookiePolicy={"single_host_origin"}
        />
        <InfoText>Logga in med google för att läsa och skriva i gästboken. Det namn du loggar in med kommer vara avsändaren på dina meddelanden.</InfoText>
      </WelcomeBox>
      <Footer>Gästbok av Matilda Arvidsson. Hjärt-emoji från Noun Project.</Footer>
    </Wrapper>
  )
}
