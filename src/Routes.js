import React, { Fragment } from "react"
import { Route } from "react-router-dom"
import UserView from "./Views/UserView"

function Routes () {
  return (
    <Fragment>
      <Route path="/users" component={UserView}/>
    </Fragment>
  )
}

export default Routes