import React, { Fragment } from "react"
import { Route } from "react-router-dom"
import UserView from "./Views/UserView"
import Home from "./Views/Home"
import RegisterView from "./Views/RegisterView"

function Routes () {
  return (
    <Fragment>
      <Route exact path="/users" component={UserView}/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/register" component={RegisterView}/>
    </Fragment>
  )
}

export default Routes