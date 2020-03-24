import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import { Wrapper, WelcomeBox, InfoText, Footer } from "Styling"
import GoogleLogin from "react-google-login"
import { GoogleLogout } from "react-google-login";

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

  const logout = () => {

  }

  return (
    <Wrapper>
      <WelcomeBox>
        <InfoText>Logga in nedan för att läsa och skriva i gästboken. Det namn du loggar in med kommer synas på dina meddelanden.</InfoText>
        <GoogleLogin
          clientId="367774355192-9pick8lrfghtmdmb6v12d0odm6a3qk89.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={handleLogin}
          onFailure={handleLogin}
          cookiePolicy={"single_host_origin"}
        />
      </WelcomeBox>
      <Footer>Gästbok av Matilda Arvidsson. Hjärt-emoji från Noun Project.</Footer>
      {/* <GoogleLogout
        clientId="367774355192-9pick8lrfghtmdmb6v12d0odm6a3qk89.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={logout}
      >
      </GoogleLogout> */}
    </Wrapper>
  )
}
