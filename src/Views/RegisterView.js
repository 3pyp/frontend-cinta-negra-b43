import React from 'react'
import RegisterForm from "../components/RegisterForm"
import {registerUser} from "../services/UserServices"

function RegisterView(props) {

  const submit = (data)=>{
    registerUser(data, props)
  }

  return (
    <div>
      <RegisterForm submit={submit}/>
    </div>
  )
}

export default RegisterView
