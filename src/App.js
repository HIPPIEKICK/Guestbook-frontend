import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { AppWrapper, Header } from "Styling"
import { Login } from "components/Login"
import { Guestbook } from "components/Guestbook"

export const App = () => {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Header>Gästbok</Header>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/guestbook" component={Guestbook} />
        </Switch>
      </BrowserRouter>
    </AppWrapper>
  )
}
