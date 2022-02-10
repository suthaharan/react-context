import React, { useContext } from 'react'

import {LoginContext} from "../ContextHelpers/LoginContext";

const Login = () => {

  const { reducerstate, dispatch } = useContext(LoginContext);
  console.log(reducerstate)
  return (
    <div style={{ color: 'yellow', fontFamily:'arial'}}>
        <h1> Login </h1>
        <button onClick={() => dispatch("LOGIN")}>Click to Login!</button>
        <h6>Logged In - {reducerstate.logCount}, Changed Password - {reducerstate.cpCount}</h6>   
        
    </div>
  )
}

export default Login