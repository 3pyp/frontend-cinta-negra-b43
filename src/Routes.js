import React, { Fragment } from "react"
import { Route, Redirect } from "react-router-dom"
import UserView from "./Views/UserView"
import RegisterView from "./Views/RegisterView"
import LoginView from "./Views/LoginView"

function Routes () {
  return (
    <Fragment>
      <Redirect from="/" to="register"/>
      <Route exact path="/users" component={UserView}/>
      <Route exact path="/register" component={RegisterView}/>
      <Route exact path="/login" component={LoginView}/>
    </Fragment>
  )
}

export default Routes