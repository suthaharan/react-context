import React, { useContext } from 'react'

import {LoginContext} from "../ContextHelpers/LoginContext";

const Login = () => {

  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  return (
    <div style={{ color: 'yellow', fontFamily:'arial'}}>
        <h1> Login </h1>
        <button onClick={() => setLoggedIn(!loggedIn)}>Click to Login!</button>
        <h6>{loggedIn? "Logged": "Not logged in!"}</h6>
    </div>
  )
}

export default Login