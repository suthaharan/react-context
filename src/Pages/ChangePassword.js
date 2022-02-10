import React, { useContext } from 'react';
import {LoginContext} from "../ContextHelpers/LoginContext";

const ChangePassword = () => {
    const { reducerstate, dispatch } = useContext(LoginContext);
  return (
    <div style={{ color: 'orange', fontFamily:'Tahoma'}}>
        <h1>ChangePassword</h1>
        <button onClick={() => dispatch("CHANGEPASSWORD")}>Click</button>
        <h6>Logged In - {reducerstate.logCount}, Changed Password - {reducerstate.cpCount}</h6>   
    </div>
  )
}

export default ChangePassword